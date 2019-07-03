// Compiled by ClojureScript 1.10.520 {:target :webworker}
goog.provide('replete.pprint');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('fipp.visit');
goog.require('fipp.engine');
goog.require('goog.object');
replete.pprint.pretty_coll = (function replete$pprint$pretty_coll(p__16723,open,xs,sep,close,f){
var map__16724 = p__16723;
var map__16724__$1 = (((((!((map__16724 == null))))?(((((map__16724.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16724.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16724):map__16724);
var printer = map__16724__$1;
var print_level = cljs.core.get.call(null,map__16724__$1,new cljs.core.Keyword(null,"print-level","print-level",-1825423733));
var print_length = cljs.core.get.call(null,map__16724__$1,new cljs.core.Keyword(null,"print-length","print-length",1931866356));
var printer__$1 = (function (){var G__16726 = printer;
if(cljs.core.truth_(print_level)){
return cljs.core.update.call(null,G__16726,new cljs.core.Keyword(null,"print-level","print-level",-1825423733),cljs.core.dec);
} else {
return G__16726;
}
})();
var xform = cljs.core.comp.call(null,(cljs.core.truth_(print_length)?cljs.core.take.call(null,print_length):cljs.core.identity),cljs.core.map.call(null,((function (printer__$1,map__16724,map__16724__$1,printer,print_level,print_length){
return (function (p1__16722_SHARP_){
return f.call(null,printer__$1,p1__16722_SHARP_);
});})(printer__$1,map__16724,map__16724__$1,printer,print_level,print_length))
),cljs.core.interpose.call(null,sep));
var ys = ((((function (){var or__4131__auto__ = print_level;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (1);
}
})() > (0)))?cljs.core.sequence.call(null,xform,xs):"#");
var ellipsis = (cljs.core.truth_((function (){var and__4120__auto__ = print_length;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.seq.call(null,cljs.core.drop.call(null,print_length,xs));
} else {
return and__4120__auto__;
}
})())?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),sep,"..."], null):null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"group","group",582596132),open,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"align","align",1964212802),ys,ellipsis], null),close], null);
});
/**
 * Returns [lifted-ns lifted-map] or nil if m can't be lifted.
 */
replete.pprint.lift_ns = (function replete$pprint$lift_ns(print_namespace_maps,m){
if(cljs.core.truth_(print_namespace_maps)){
var ns = null;
var G__16733 = cljs.core.seq.call(null,m);
var vec__16734 = G__16733;
var seq__16735 = cljs.core.seq.call(null,vec__16734);
var first__16736 = cljs.core.first.call(null,seq__16735);
var seq__16735__$1 = cljs.core.next.call(null,seq__16735);
var vec__16737 = first__16736;
var k = cljs.core.nth.call(null,vec__16737,(0),null);
var v = cljs.core.nth.call(null,vec__16737,(1),null);
var entry = vec__16737;
var entries = seq__16735__$1;
var lm = cljs.core.empty.call(null,m);
var ns__$1 = ns;
var G__16733__$1 = G__16733;
var lm__$1 = lm;
while(true){
var ns__$2 = ns__$1;
var vec__16746 = G__16733__$1;
var seq__16747 = cljs.core.seq.call(null,vec__16746);
var first__16748 = cljs.core.first.call(null,seq__16747);
var seq__16747__$1 = cljs.core.next.call(null,seq__16747);
var vec__16749 = first__16748;
var k__$1 = cljs.core.nth.call(null,vec__16749,(0),null);
var v__$1 = cljs.core.nth.call(null,vec__16749,(1),null);
var entry__$1 = vec__16749;
var entries__$1 = seq__16747__$1;
var lm__$2 = lm__$1;
if(cljs.core.truth_(entry__$1)){
if((((k__$1 instanceof cljs.core.Keyword)) || ((k__$1 instanceof cljs.core.Symbol)))){
if(cljs.core.truth_(ns__$2)){
if(cljs.core._EQ_.call(null,ns__$2,cljs.core.namespace.call(null,k__$1))){
var G__16752 = ns__$2;
var G__16753 = entries__$1;
var G__16754 = cljs.core.assoc.call(null,lm__$2,cljs.core.strip_ns.call(null,k__$1),v__$1);
ns__$1 = G__16752;
G__16733__$1 = G__16753;
lm__$1 = G__16754;
continue;
} else {
return null;
}
} else {
var temp__5720__auto__ = cljs.core.namespace.call(null,k__$1);
if(cljs.core.truth_(temp__5720__auto__)){
var new_ns = temp__5720__auto__;
var G__16755 = new_ns;
var G__16756 = entries__$1;
var G__16757 = cljs.core.assoc.call(null,lm__$2,cljs.core.strip_ns.call(null,k__$1),v__$1);
ns__$1 = G__16755;
G__16733__$1 = G__16756;
lm__$1 = G__16757;
continue;
} else {
return null;
}
}
} else {
return null;
}
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns__$2,lm__$2], null);
}
break;
}
} else {
return null;
}
});
/**
 * The control sequence initiator: `ESC [`
 */
replete.pprint.csi = "\u001B[";
replete.pprint.default_theme = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"results-font","results-font",-340987633),[replete.pprint.csi,"34m"].join(''),new cljs.core.Keyword(null,"results-string-font","results-string-font",866175994),[replete.pprint.csi,"32m"].join(''),new cljs.core.Keyword(null,"results-keyword-font","results-keyword-font",986741866),[replete.pprint.csi,"35m"].join(''),new cljs.core.Keyword(null,"reset-font","reset-font",1310910792),[replete.pprint.csi,"30m"].join('')], null);
replete.pprint.wrap_theme = (function replete$pprint$wrap_theme(kw,theme,text){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pass","pass",1574159993),kw.call(null,theme)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),text], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"reset-font","reset-font",1310910792).cljs$core$IFn$_invoke$arity$1(theme)], null)], null);
});
/**
 * Delegates to ClojureScript for printing a value.
 */
replete.pprint.visit_default = (function replete$pprint$visit_default(x){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),(function (){var _STAR_print_meta_STAR__orig_val__16758 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_meta_STAR__temp_val__16759 = false;
cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__16759;

try{return cljs.core.pr_str.call(null,x);
}finally {cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__16758;
}})()], null);
});
replete.pprint.pr_abbrev_str = (function replete$pprint$pr_abbrev_str(ns,x){
var sym = cljs.core.symbol.call(null,x);
return [((cljs.core.var_QMARK_.call(null,x))?"#'":(((x instanceof cljs.core.Keyword))?":":null)),(cljs.core.truth_(cljs.core.namespace.call(null,sym))?(((!(cljs.core._EQ_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),cljs.core.namespace.call(null,sym)))))?[cljs.core.namespace.call(null,sym),"/"].join(''):(((x instanceof cljs.core.Keyword))?":":null)):null),cljs.core.name.call(null,sym)].join('');
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {fipp.visit.IVisitor}
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
replete.pprint.RepletePrinter = (function (symbols,print_meta,print_length,print_level,print_namespace_maps,theme,ns,__meta,__extmap,__hash){
this.symbols = symbols;
this.print_meta = print_meta;
this.print_length = print_length;
this.print_level = print_level;
this.print_namespace_maps = print_namespace_maps;
this.theme = theme;
this.ns = ns;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
replete.pprint.RepletePrinter.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

replete.pprint.RepletePrinter.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k16761,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__16765 = k16761;
var G__16765__$1 = (((G__16765 instanceof cljs.core.Keyword))?G__16765.fqn:null);
switch (G__16765__$1) {
case "symbols":
return self__.symbols;

break;
case "print-meta":
return self__.print_meta;

break;
case "print-length":
return self__.print_length;

break;
case "print-level":
return self__.print_level;

break;
case "print-namespace-maps":
return self__.print_namespace_maps;

break;
case "theme":
return self__.theme;

break;
case "ns":
return self__.ns;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k16761,else__4388__auto__);

}
});

replete.pprint.RepletePrinter.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.call(null,((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__16766){
var vec__16767 = p__16766;
var k__4408__auto__ = cljs.core.nth.call(null,vec__16767,(0),null);
var v__4409__auto__ = cljs.core.nth.call(null,vec__16767,(1),null);
return f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__);
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

replete.pprint.RepletePrinter.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4400__auto__,pr_pair__4402__auto__,"#replete.pprint.RepletePrinter{",", ","}",opts__4401__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"symbols","symbols",1211743),self__.symbols],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"print-meta","print-meta",1034114598),self__.print_meta],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"print-length","print-length",1931866356),self__.print_length],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"print-level","print-level",-1825423733),self__.print_level],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"print-namespace-maps","print-namespace-maps",-1888707332),self__.print_namespace_maps],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"theme","theme",-1247880880),self__.theme],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ns","ns",441598760),self__.ns],null))], null),self__.__extmap));
});

replete.pprint.RepletePrinter.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__16760){
var self__ = this;
var G__16760__$1 = this;
return (new cljs.core.RecordIter((0),G__16760__$1,7,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"symbols","symbols",1211743),new cljs.core.Keyword(null,"print-meta","print-meta",1034114598),new cljs.core.Keyword(null,"print-length","print-length",1931866356),new cljs.core.Keyword(null,"print-level","print-level",-1825423733),new cljs.core.Keyword(null,"print-namespace-maps","print-namespace-maps",-1888707332),new cljs.core.Keyword(null,"theme","theme",-1247880880),new cljs.core.Keyword(null,"ns","ns",441598760)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

replete.pprint.RepletePrinter.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

replete.pprint.RepletePrinter.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new replete.pprint.RepletePrinter(self__.symbols,self__.print_meta,self__.print_length,self__.print_level,self__.print_namespace_maps,self__.theme,self__.ns,self__.__meta,self__.__extmap,self__.__hash));
});

replete.pprint.RepletePrinter.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (7 + cljs.core.count.call(null,self__.__extmap));
});

replete.pprint.RepletePrinter.prototype.fipp$visit$IVisitor$ = cljs.core.PROTOCOL_SENTINEL;

replete.pprint.RepletePrinter.prototype.fipp$visit$IVisitor$visit_record$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
return replete.pprint.pretty_coll.call(null,this$__$1,["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.replace.call(null,cljs.core.pr_str.call(null,cljs.core.type.call(null,x)),/\//,".")),"{"].join(''),x,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),",",new cljs.core.Keyword(null,"line","line",212345235)], null),"}",((function (this$__$1){
return (function (printer,p__16770){
var vec__16771 = p__16770;
var k = cljs.core.nth.call(null,vec__16771,(0),null);
var v = cljs.core.nth.call(null,vec__16771,(1),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),fipp.visit.visit.call(null,printer,k)," ",fipp.visit.visit.call(null,printer,v)], null);
});})(this$__$1))
);
});

replete.pprint.RepletePrinter.prototype.fipp$visit$IVisitor$visit_meta$arity$3 = (function (this$,m,x){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(self__.print_meta)){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"^",fipp.visit.visit.call(null,this$__$1,m)], null),new cljs.core.Keyword(null,"line","line",212345235),fipp.visit.visit_STAR_.call(null,this$__$1,x)], null);
} else {
return fipp.visit.visit_STAR_.call(null,this$__$1,x);
}
});

replete.pprint.RepletePrinter.prototype.fipp$visit$IVisitor$visit_number$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
return replete.pprint.wrap_theme.call(null,new cljs.core.Keyword(null,"results-font","results-font",-340987633),self__.theme,cljs.core.pr_str.call(null,x));
});

replete.pprint.RepletePrinter.prototype.fipp$visit$IVisitor$visit_pattern$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),cljs.core.pr_str.call(null,x)], null);
});

replete.pprint.RepletePrinter.prototype.fipp$visit$IVisitor$visit_unknown$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
if((x instanceof cljs.core.Atom)){
return replete.pprint.pretty_coll.call(null,this$__$1,"#object [",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cljs.core.Atom","cljs.core.Atom",-277403465,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"val","val",128701612),cljs.core.deref.call(null,x)], null)], null),new cljs.core.Keyword(null,"line","line",212345235),"]",fipp.visit.visit);
} else {
if((x instanceof cljs.core.Volatile)){
return replete.pprint.pretty_coll.call(null,this$__$1,"#object [",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cljs.core.Volatile","cljs.core.Volatile",1656028351,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"val","val",128701612),cljs.core.deref.call(null,x)], null)], null),new cljs.core.Keyword(null,"line","line",212345235),"]",fipp.visit.visit);
} else {
if((x instanceof cljs.core.Delay)){
return replete.pprint.pretty_coll.call(null,this$__$1,"#object[",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cljs.core.Delay","cljs.core.Delay",-1917476777,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),(((x.f == null))?new cljs.core.Keyword(null,"ready","ready",1086465795):new cljs.core.Keyword(null,"pending","pending",-220036727)),new cljs.core.Keyword(null,"val","val",128701612),x.value], null)], null),new cljs.core.Keyword(null,"line","line",212345235),"]",fipp.visit.visit);
} else {
if((((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (2147483648))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IPrintWithWriter$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IPrintWithWriter,x):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IPrintWithWriter,x))){
return replete.pprint.visit_default.call(null,x);
} else {
if((x instanceof cljs.core.Eduction)){
if(cljs.core.truth_(self__.print_length)){
return this$__$1.fipp$visit$IVisitor$visit_seq$arity$2(null,cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.take.call(null,(self__.print_length + (1))),x));
} else {
return fipp.visit.visit.call(null,this$__$1,cljs.core.sequence.call(null,x));
}
} else {
if(cljs.core.array_QMARK_.call(null,x)){
return replete.pprint.pretty_coll.call(null,this$__$1,"#js [",x,new cljs.core.Keyword(null,"line","line",212345235),"]",fipp.visit.visit);
} else {
if(cljs.core.object_QMARK_.call(null,x)){
var kvs = cljs.core.map.call(null,((function (this$__$1){
return (function (k){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__16775 = k;
if((!((cljs.core.re_matches.call(null,/[A-Za-z_\*\+\?!\-'][\w\*\+\?!\-']*/,k) == null)))){
return cljs.core.keyword.call(null,G__16775);
} else {
return G__16775;
}
})(),goog.object.get(x,k)], null);
});})(this$__$1))
,cljs.core.js_keys.call(null,x));
return replete.pprint.pretty_coll.call(null,this$__$1,"#js {",kvs,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),",",new cljs.core.Keyword(null,"line","line",212345235)], null),"}",((function (kvs,this$__$1){
return (function (printer,p__16776){
var vec__16777 = p__16776;
var k = cljs.core.nth.call(null,vec__16777,(0),null);
var v = cljs.core.nth.call(null,vec__16777,(1),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),fipp.visit.visit.call(null,printer,k)," ",fipp.visit.visit.call(null,printer,v)], null);
});})(kvs,this$__$1))
);
} else {
return replete.pprint.visit_default.call(null,x);

}
}
}
}
}
}
}
});

replete.pprint.RepletePrinter.prototype.fipp$visit$IVisitor$visit_symbol$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)], null);
});

replete.pprint.RepletePrinter.prototype.fipp$visit$IVisitor$visit_seq$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
if((x instanceof cljs.core.PersistentQueue)){
return replete.pprint.pretty_coll.call(null,this$__$1,"#queue [",x,new cljs.core.Keyword(null,"line","line",212345235),"]",fipp.visit.visit);
} else {
var temp__5718__auto__ = self__.symbols.call(null,cljs.core.first.call(null,x));
if(cljs.core.truth_(temp__5718__auto__)){
var pretty = temp__5718__auto__;
return pretty.call(null,this$__$1,x);
} else {
return replete.pprint.pretty_coll.call(null,this$__$1,"(",x,new cljs.core.Keyword(null,"line","line",212345235),")",fipp.visit.visit);
}
}
});

replete.pprint.RepletePrinter.prototype.fipp$visit$IVisitor$visit_boolean$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
return replete.pprint.wrap_theme.call(null,new cljs.core.Keyword(null,"results-font","results-font",-340987633),self__.theme,cljs.core.str.cljs$core$IFn$_invoke$arity$1(x));
});

replete.pprint.RepletePrinter.prototype.fipp$visit$IVisitor$visit_tagged$arity$2 = (function (this$,p__16780){
var self__ = this;
var map__16781 = p__16780;
var map__16781__$1 = (((((!((map__16781 == null))))?(((((map__16781.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16781.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16781):map__16781);
var tag = cljs.core.get.call(null,map__16781__$1,new cljs.core.Keyword(null,"tag","tag",-1290361223));
var form = cljs.core.get.call(null,map__16781__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"group","group",582596132),"#",cljs.core.pr_str.call(null,tag),(cljs.core.truth_((function (){var or__4131__auto__ = (function (){var and__4120__auto__ = self__.print_meta;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.meta.call(null,form);
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (!(cljs.core.coll_QMARK_.call(null,form)));
}
})())?" ":null),fipp.visit.visit.call(null,this$__$1,form)], null);
});

replete.pprint.RepletePrinter.prototype.fipp$visit$IVisitor$visit_keyword$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
return replete.pprint.wrap_theme.call(null,new cljs.core.Keyword(null,"results-keyword-font","results-keyword-font",986741866),self__.theme,replete.pprint.pr_abbrev_str.call(null,self__.ns,x));
});

replete.pprint.RepletePrinter.prototype.fipp$visit$IVisitor$visit_map$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
var vec__16783 = replete.pprint.lift_ns.call(null,self__.print_namespace_maps,x);
var lift_ns = cljs.core.nth.call(null,vec__16783,(0),null);
var lift_map = cljs.core.nth.call(null,vec__16783,(1),null);
var prefix = (((!((lift_ns == null))))?["#:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core._EQ_.call(null,lift_ns,cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.ns)))?":":lift_ns))].join(''):null);
return replete.pprint.pretty_coll.call(null,this$__$1,[prefix,"{"].join(''),(function (){var or__4131__auto__ = lift_map;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return x;
}
})(),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),",",new cljs.core.Keyword(null,"line","line",212345235)], null),"}",((function (vec__16783,lift_ns,lift_map,prefix,this$__$1){
return (function (printer,p__16786){
var vec__16787 = p__16786;
var k = cljs.core.nth.call(null,vec__16787,(0),null);
var v = cljs.core.nth.call(null,vec__16787,(1),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),fipp.visit.visit.call(null,printer,k)," ",fipp.visit.visit.call(null,printer,v)], null);
});})(vec__16783,lift_ns,lift_map,prefix,this$__$1))
);
});

replete.pprint.RepletePrinter.prototype.fipp$visit$IVisitor$visit_nil$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return replete.pprint.wrap_theme.call(null,new cljs.core.Keyword(null,"results-font","results-font",-340987633),self__.theme,"nil");
});

replete.pprint.RepletePrinter.prototype.fipp$visit$IVisitor$visit_character$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
return replete.pprint.wrap_theme.call(null,new cljs.core.Keyword(null,"results-string-font","results-string-font",866175994),self__.theme,cljs.core.pr_str.call(null,x));
});

replete.pprint.RepletePrinter.prototype.fipp$visit$IVisitor$visit_string$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
return replete.pprint.wrap_theme.call(null,new cljs.core.Keyword(null,"results-string-font","results-string-font",866175994),self__.theme,cljs.core.pr_str.call(null,x));
});

replete.pprint.RepletePrinter.prototype.fipp$visit$IVisitor$visit_var$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),replete.pprint.pr_abbrev_str.call(null,self__.ns,x)], null);
});

replete.pprint.RepletePrinter.prototype.fipp$visit$IVisitor$visit_set$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
return replete.pprint.pretty_coll.call(null,this$__$1,"#{",x,new cljs.core.Keyword(null,"line","line",212345235),"}",fipp.visit.visit);
});

replete.pprint.RepletePrinter.prototype.fipp$visit$IVisitor$visit_vector$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
return replete.pprint.pretty_coll.call(null,this$__$1,"[",x,new cljs.core.Keyword(null,"line","line",212345235),"]",fipp.visit.visit);
});

replete.pprint.RepletePrinter.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (-2040106799 ^ cljs.core.hash_unordered_coll.call(null,coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
.call(null,this__4381__auto____$1);
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

replete.pprint.RepletePrinter.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this16762,other16763){
var self__ = this;
var this16762__$1 = this;
return (((!((other16763 == null)))) && ((this16762__$1.constructor === other16763.constructor)) && (cljs.core._EQ_.call(null,this16762__$1.symbols,other16763.symbols)) && (cljs.core._EQ_.call(null,this16762__$1.print_meta,other16763.print_meta)) && (cljs.core._EQ_.call(null,this16762__$1.print_length,other16763.print_length)) && (cljs.core._EQ_.call(null,this16762__$1.print_level,other16763.print_level)) && (cljs.core._EQ_.call(null,this16762__$1.print_namespace_maps,other16763.print_namespace_maps)) && (cljs.core._EQ_.call(null,this16762__$1.theme,other16763.theme)) && (cljs.core._EQ_.call(null,this16762__$1.ns,other16763.ns)) && (cljs.core._EQ_.call(null,this16762__$1.__extmap,other16763.__extmap)));
});

replete.pprint.RepletePrinter.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"print-meta","print-meta",1034114598),null,new cljs.core.Keyword(null,"ns","ns",441598760),null,new cljs.core.Keyword(null,"print-level","print-level",-1825423733),null,new cljs.core.Keyword(null,"theme","theme",-1247880880),null,new cljs.core.Keyword(null,"print-length","print-length",1931866356),null,new cljs.core.Keyword(null,"print-namespace-maps","print-namespace-maps",-1888707332),null,new cljs.core.Keyword(null,"symbols","symbols",1211743),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new replete.pprint.RepletePrinter(self__.symbols,self__.print_meta,self__.print_length,self__.print_level,self__.print_namespace_maps,self__.theme,self__.ns,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4395__auto__)),null));
}
});

replete.pprint.RepletePrinter.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__16760){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__16790 = cljs.core.keyword_identical_QMARK_;
var expr__16791 = k__4393__auto__;
if(cljs.core.truth_(pred__16790.call(null,new cljs.core.Keyword(null,"symbols","symbols",1211743),expr__16791))){
return (new replete.pprint.RepletePrinter(G__16760,self__.print_meta,self__.print_length,self__.print_level,self__.print_namespace_maps,self__.theme,self__.ns,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__16790.call(null,new cljs.core.Keyword(null,"print-meta","print-meta",1034114598),expr__16791))){
return (new replete.pprint.RepletePrinter(self__.symbols,G__16760,self__.print_length,self__.print_level,self__.print_namespace_maps,self__.theme,self__.ns,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__16790.call(null,new cljs.core.Keyword(null,"print-length","print-length",1931866356),expr__16791))){
return (new replete.pprint.RepletePrinter(self__.symbols,self__.print_meta,G__16760,self__.print_level,self__.print_namespace_maps,self__.theme,self__.ns,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__16790.call(null,new cljs.core.Keyword(null,"print-level","print-level",-1825423733),expr__16791))){
return (new replete.pprint.RepletePrinter(self__.symbols,self__.print_meta,self__.print_length,G__16760,self__.print_namespace_maps,self__.theme,self__.ns,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__16790.call(null,new cljs.core.Keyword(null,"print-namespace-maps","print-namespace-maps",-1888707332),expr__16791))){
return (new replete.pprint.RepletePrinter(self__.symbols,self__.print_meta,self__.print_length,self__.print_level,G__16760,self__.theme,self__.ns,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__16790.call(null,new cljs.core.Keyword(null,"theme","theme",-1247880880),expr__16791))){
return (new replete.pprint.RepletePrinter(self__.symbols,self__.print_meta,self__.print_length,self__.print_level,self__.print_namespace_maps,G__16760,self__.ns,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__16790.call(null,new cljs.core.Keyword(null,"ns","ns",441598760),expr__16791))){
return (new replete.pprint.RepletePrinter(self__.symbols,self__.print_meta,self__.print_length,self__.print_level,self__.print_namespace_maps,self__.theme,G__16760,self__.__meta,self__.__extmap,null));
} else {
return (new replete.pprint.RepletePrinter(self__.symbols,self__.print_meta,self__.print_length,self__.print_level,self__.print_namespace_maps,self__.theme,self__.ns,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4393__auto__,G__16760),null));
}
}
}
}
}
}
}
});

replete.pprint.RepletePrinter.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"symbols","symbols",1211743),self__.symbols,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"print-meta","print-meta",1034114598),self__.print_meta,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"print-length","print-length",1931866356),self__.print_length,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"print-level","print-level",-1825423733),self__.print_level,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"print-namespace-maps","print-namespace-maps",-1888707332),self__.print_namespace_maps,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"theme","theme",-1247880880),self__.theme,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"ns","ns",441598760),self__.ns,null))], null),self__.__extmap));
});

replete.pprint.RepletePrinter.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__16760){
var self__ = this;
var this__4384__auto____$1 = this;
return (new replete.pprint.RepletePrinter(self__.symbols,self__.print_meta,self__.print_length,self__.print_level,self__.print_namespace_maps,self__.theme,self__.ns,G__16760,self__.__extmap,self__.__hash));
});

replete.pprint.RepletePrinter.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4391__auto__,(0)),cljs.core._nth.call(null,entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

replete.pprint.RepletePrinter.getBasis = (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"symbols","symbols",1641743270,null),new cljs.core.Symbol(null,"print-meta","print-meta",-1620321171,null),new cljs.core.Symbol(null,"print-length","print-length",-722569413,null),new cljs.core.Symbol(null,"print-level","print-level",-184892206,null),new cljs.core.Symbol(null,"print-namespace-maps","print-namespace-maps",-248175805,null),new cljs.core.Symbol(null,"theme","theme",392650647,null),new cljs.core.Symbol(null,"ns","ns",2082130287,null)], null);
});

replete.pprint.RepletePrinter.cljs$lang$type = true;

replete.pprint.RepletePrinter.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"replete.pprint/RepletePrinter",null,(1),null));
});

replete.pprint.RepletePrinter.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"replete.pprint/RepletePrinter");
});

/**
 * Positional factory function for replete.pprint/RepletePrinter.
 */
replete.pprint.__GT_RepletePrinter = (function replete$pprint$__GT_RepletePrinter(symbols,print_meta,print_length,print_level,print_namespace_maps,theme,ns){
return (new replete.pprint.RepletePrinter(symbols,print_meta,print_length,print_level,print_namespace_maps,theme,ns,null,null,null));
});

/**
 * Factory function for replete.pprint/RepletePrinter, taking a map of keywords to field values.
 */
replete.pprint.map__GT_RepletePrinter = (function replete$pprint$map__GT_RepletePrinter(G__16764){
var extmap__4424__auto__ = (function (){var G__16793 = cljs.core.dissoc.call(null,G__16764,new cljs.core.Keyword(null,"symbols","symbols",1211743),new cljs.core.Keyword(null,"print-meta","print-meta",1034114598),new cljs.core.Keyword(null,"print-length","print-length",1931866356),new cljs.core.Keyword(null,"print-level","print-level",-1825423733),new cljs.core.Keyword(null,"print-namespace-maps","print-namespace-maps",-1888707332),new cljs.core.Keyword(null,"theme","theme",-1247880880),new cljs.core.Keyword(null,"ns","ns",441598760));
if(cljs.core.record_QMARK_.call(null,G__16764)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__16793);
} else {
return G__16793;
}
})();
return (new replete.pprint.RepletePrinter(new cljs.core.Keyword(null,"symbols","symbols",1211743).cljs$core$IFn$_invoke$arity$1(G__16764),new cljs.core.Keyword(null,"print-meta","print-meta",1034114598).cljs$core$IFn$_invoke$arity$1(G__16764),new cljs.core.Keyword(null,"print-length","print-length",1931866356).cljs$core$IFn$_invoke$arity$1(G__16764),new cljs.core.Keyword(null,"print-level","print-level",-1825423733).cljs$core$IFn$_invoke$arity$1(G__16764),new cljs.core.Keyword(null,"print-namespace-maps","print-namespace-maps",-1888707332).cljs$core$IFn$_invoke$arity$1(G__16764),new cljs.core.Keyword(null,"theme","theme",-1247880880).cljs$core$IFn$_invoke$arity$1(G__16764),new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(G__16764),null,cljs.core.not_empty.call(null,extmap__4424__auto__),null));
});

replete.pprint.pprint = (function replete$pprint$pprint(var_args){
var G__16796 = arguments.length;
switch (G__16796) {
case 1:
return replete.pprint.pprint.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return replete.pprint.pprint.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

replete.pprint.pprint.cljs$core$IFn$_invoke$arity$1 = (function (x){
return replete.pprint.pprint.call(null,x,cljs.core.PersistentArrayMap.EMPTY);
});

replete.pprint.pprint.cljs$core$IFn$_invoke$arity$2 = (function (x,options){
var defaults = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"symbols","symbols",1211743),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"print-length","print-length",1931866356),cljs.core._STAR_print_length_STAR_,new cljs.core.Keyword(null,"print-level","print-level",-1825423733),cljs.core._STAR_print_level_STAR_,new cljs.core.Keyword(null,"print-meta","print-meta",1034114598),cljs.core._STAR_print_meta_STAR_,new cljs.core.Keyword(null,"print-namespace-maps","print-namespace-maps",-1888707332),cljs.core._STAR_print_namespace_maps_STAR_,new cljs.core.Keyword(null,"theme","theme",-1247880880),replete.pprint.default_theme], null);
var full_opts = cljs.core.merge.call(null,defaults,options);
var printer = replete.pprint.map__GT_RepletePrinter.call(null,full_opts);
return fipp.engine.pprint_document.call(null,fipp.visit.visit.call(null,printer,x),full_opts);
});

replete.pprint.pprint.cljs$lang$maxFixedArity = 2;


//# sourceMappingURL=pprint.js.map
