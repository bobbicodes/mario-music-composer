// Compiled by ClojureScript 1.10.339 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__32711){
var map__32712 = p__32711;
var map__32712__$1 = ((((!((map__32712 == null)))?(((((map__32712.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32712.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32712):map__32712);
var m = map__32712__$1;
var n = cljs.core.get.call(null,map__32712__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__32712__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5457__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5457__auto__)){
var ns = temp__5457__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__32714_32736 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__32715_32737 = null;
var count__32716_32738 = (0);
var i__32717_32739 = (0);
while(true){
if((i__32717_32739 < count__32716_32738)){
var f_32740 = cljs.core._nth.call(null,chunk__32715_32737,i__32717_32739);
cljs.core.println.call(null,"  ",f_32740);


var G__32741 = seq__32714_32736;
var G__32742 = chunk__32715_32737;
var G__32743 = count__32716_32738;
var G__32744 = (i__32717_32739 + (1));
seq__32714_32736 = G__32741;
chunk__32715_32737 = G__32742;
count__32716_32738 = G__32743;
i__32717_32739 = G__32744;
continue;
} else {
var temp__5457__auto___32745 = cljs.core.seq.call(null,seq__32714_32736);
if(temp__5457__auto___32745){
var seq__32714_32746__$1 = temp__5457__auto___32745;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32714_32746__$1)){
var c__4351__auto___32747 = cljs.core.chunk_first.call(null,seq__32714_32746__$1);
var G__32748 = cljs.core.chunk_rest.call(null,seq__32714_32746__$1);
var G__32749 = c__4351__auto___32747;
var G__32750 = cljs.core.count.call(null,c__4351__auto___32747);
var G__32751 = (0);
seq__32714_32736 = G__32748;
chunk__32715_32737 = G__32749;
count__32716_32738 = G__32750;
i__32717_32739 = G__32751;
continue;
} else {
var f_32752 = cljs.core.first.call(null,seq__32714_32746__$1);
cljs.core.println.call(null,"  ",f_32752);


var G__32753 = cljs.core.next.call(null,seq__32714_32746__$1);
var G__32754 = null;
var G__32755 = (0);
var G__32756 = (0);
seq__32714_32736 = G__32753;
chunk__32715_32737 = G__32754;
count__32716_32738 = G__32755;
i__32717_32739 = G__32756;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_32757 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3949__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_32757);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_32757)))?cljs.core.second.call(null,arglists_32757):arglists_32757));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__32718_32758 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__32719_32759 = null;
var count__32720_32760 = (0);
var i__32721_32761 = (0);
while(true){
if((i__32721_32761 < count__32720_32760)){
var vec__32722_32762 = cljs.core._nth.call(null,chunk__32719_32759,i__32721_32761);
var name_32763 = cljs.core.nth.call(null,vec__32722_32762,(0),null);
var map__32725_32764 = cljs.core.nth.call(null,vec__32722_32762,(1),null);
var map__32725_32765__$1 = ((((!((map__32725_32764 == null)))?(((((map__32725_32764.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32725_32764.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32725_32764):map__32725_32764);
var doc_32766 = cljs.core.get.call(null,map__32725_32765__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_32767 = cljs.core.get.call(null,map__32725_32765__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_32763);

cljs.core.println.call(null," ",arglists_32767);

if(cljs.core.truth_(doc_32766)){
cljs.core.println.call(null," ",doc_32766);
} else {
}


var G__32768 = seq__32718_32758;
var G__32769 = chunk__32719_32759;
var G__32770 = count__32720_32760;
var G__32771 = (i__32721_32761 + (1));
seq__32718_32758 = G__32768;
chunk__32719_32759 = G__32769;
count__32720_32760 = G__32770;
i__32721_32761 = G__32771;
continue;
} else {
var temp__5457__auto___32772 = cljs.core.seq.call(null,seq__32718_32758);
if(temp__5457__auto___32772){
var seq__32718_32773__$1 = temp__5457__auto___32772;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32718_32773__$1)){
var c__4351__auto___32774 = cljs.core.chunk_first.call(null,seq__32718_32773__$1);
var G__32775 = cljs.core.chunk_rest.call(null,seq__32718_32773__$1);
var G__32776 = c__4351__auto___32774;
var G__32777 = cljs.core.count.call(null,c__4351__auto___32774);
var G__32778 = (0);
seq__32718_32758 = G__32775;
chunk__32719_32759 = G__32776;
count__32720_32760 = G__32777;
i__32721_32761 = G__32778;
continue;
} else {
var vec__32727_32779 = cljs.core.first.call(null,seq__32718_32773__$1);
var name_32780 = cljs.core.nth.call(null,vec__32727_32779,(0),null);
var map__32730_32781 = cljs.core.nth.call(null,vec__32727_32779,(1),null);
var map__32730_32782__$1 = ((((!((map__32730_32781 == null)))?(((((map__32730_32781.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32730_32781.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32730_32781):map__32730_32781);
var doc_32783 = cljs.core.get.call(null,map__32730_32782__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_32784 = cljs.core.get.call(null,map__32730_32782__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_32780);

cljs.core.println.call(null," ",arglists_32784);

if(cljs.core.truth_(doc_32783)){
cljs.core.println.call(null," ",doc_32783);
} else {
}


var G__32785 = cljs.core.next.call(null,seq__32718_32773__$1);
var G__32786 = null;
var G__32787 = (0);
var G__32788 = (0);
seq__32718_32758 = G__32785;
chunk__32719_32759 = G__32786;
count__32720_32760 = G__32787;
i__32721_32761 = G__32788;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5457__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5457__auto__)){
var fnspec = temp__5457__auto__;
cljs.core.print.call(null,"Spec");

var seq__32732 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__32733 = null;
var count__32734 = (0);
var i__32735 = (0);
while(true){
if((i__32735 < count__32734)){
var role = cljs.core._nth.call(null,chunk__32733,i__32735);
var temp__5457__auto___32789__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___32789__$1)){
var spec_32790 = temp__5457__auto___32789__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_32790));
} else {
}


var G__32791 = seq__32732;
var G__32792 = chunk__32733;
var G__32793 = count__32734;
var G__32794 = (i__32735 + (1));
seq__32732 = G__32791;
chunk__32733 = G__32792;
count__32734 = G__32793;
i__32735 = G__32794;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq.call(null,seq__32732);
if(temp__5457__auto____$1){
var seq__32732__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32732__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__32732__$1);
var G__32795 = cljs.core.chunk_rest.call(null,seq__32732__$1);
var G__32796 = c__4351__auto__;
var G__32797 = cljs.core.count.call(null,c__4351__auto__);
var G__32798 = (0);
seq__32732 = G__32795;
chunk__32733 = G__32796;
count__32734 = G__32797;
i__32735 = G__32798;
continue;
} else {
var role = cljs.core.first.call(null,seq__32732__$1);
var temp__5457__auto___32799__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___32799__$2)){
var spec_32800 = temp__5457__auto___32799__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_32800));
} else {
}


var G__32801 = cljs.core.next.call(null,seq__32732__$1);
var G__32802 = null;
var G__32803 = (0);
var G__32804 = (0);
seq__32732 = G__32801;
chunk__32733 = G__32802;
count__32734 = G__32803;
i__32735 = G__32804;
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
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map
