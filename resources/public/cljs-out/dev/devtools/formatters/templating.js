// Compiled by ClojureScript 1.10.339 {}
goog.provide('devtools.formatters.templating');
goog.require('cljs.core');
goog.require('clojure.walk');
goog.require('devtools.util');
goog.require('devtools.protocols');
goog.require('devtools.formatters.helpers');
goog.require('devtools.formatters.state');
goog.require('clojure.string');
devtools.formatters.templating.mark_as_group_BANG_ = (function devtools$formatters$templating$mark_as_group_BANG_(value){
var x24878_24879 = value;
x24878_24879.devtools$protocols$IGroup$ = cljs.core.PROTOCOL_SENTINEL;


return value;
});
devtools.formatters.templating.group_QMARK_ = (function devtools$formatters$templating$group_QMARK_(value){
if(!((value == null))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === value.devtools$protocols$IGroup$)))){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.IGroup,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.IGroup,value);
}
});
devtools.formatters.templating.mark_as_template_BANG_ = (function devtools$formatters$templating$mark_as_template_BANG_(value){
var x24881_24882 = value;
x24881_24882.devtools$protocols$ITemplate$ = cljs.core.PROTOCOL_SENTINEL;


return value;
});
devtools.formatters.templating.template_QMARK_ = (function devtools$formatters$templating$template_QMARK_(value){
if(!((value == null))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === value.devtools$protocols$ITemplate$)))){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ITemplate,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ITemplate,value);
}
});
devtools.formatters.templating.mark_as_surrogate_BANG_ = (function devtools$formatters$templating$mark_as_surrogate_BANG_(value){
var x24884_24885 = value;
x24884_24885.devtools$protocols$ISurrogate$ = cljs.core.PROTOCOL_SENTINEL;


return value;
});
devtools.formatters.templating.surrogate_QMARK_ = (function devtools$formatters$templating$surrogate_QMARK_(value){
if(!((value == null))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === value.devtools$protocols$ISurrogate$)))){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ISurrogate,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ISurrogate,value);
}
});
devtools.formatters.templating.reference_QMARK_ = (function devtools$formatters$templating$reference_QMARK_(value){
var and__3938__auto__ = devtools.formatters.templating.group_QMARK_.call(null,value);
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core._EQ_.call(null,(value[(0)]),"object");
} else {
return and__3938__auto__;
}
});
devtools.formatters.templating.make_group = (function devtools$formatters$templating$make_group(var_args){
var args__4534__auto__ = [];
var len__4531__auto___24892 = arguments.length;
var i__4532__auto___24893 = (0);
while(true){
if((i__4532__auto___24893 < len__4531__auto___24892)){
args__4534__auto__.push((arguments[i__4532__auto___24893]));

var G__24894 = (i__4532__auto___24893 + (1));
i__4532__auto___24893 = G__24894;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (items){
var group = devtools.formatters.templating.mark_as_group_BANG_.call(null,[]);
var seq__24888_24895 = cljs.core.seq.call(null,items);
var chunk__24889_24896 = null;
var count__24890_24897 = (0);
var i__24891_24898 = (0);
while(true){
if((i__24891_24898 < count__24890_24897)){
var item_24899 = cljs.core._nth.call(null,chunk__24889_24896,i__24891_24898);
if(!((item_24899 == null))){
if(cljs.core.coll_QMARK_.call(null,item_24899)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_24899)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_24899));
}
} else {
}


var G__24900 = seq__24888_24895;
var G__24901 = chunk__24889_24896;
var G__24902 = count__24890_24897;
var G__24903 = (i__24891_24898 + (1));
seq__24888_24895 = G__24900;
chunk__24889_24896 = G__24901;
count__24890_24897 = G__24902;
i__24891_24898 = G__24903;
continue;
} else {
var temp__5457__auto___24904 = cljs.core.seq.call(null,seq__24888_24895);
if(temp__5457__auto___24904){
var seq__24888_24905__$1 = temp__5457__auto___24904;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24888_24905__$1)){
var c__4351__auto___24906 = cljs.core.chunk_first.call(null,seq__24888_24905__$1);
var G__24907 = cljs.core.chunk_rest.call(null,seq__24888_24905__$1);
var G__24908 = c__4351__auto___24906;
var G__24909 = cljs.core.count.call(null,c__4351__auto___24906);
var G__24910 = (0);
seq__24888_24895 = G__24907;
chunk__24889_24896 = G__24908;
count__24890_24897 = G__24909;
i__24891_24898 = G__24910;
continue;
} else {
var item_24911 = cljs.core.first.call(null,seq__24888_24905__$1);
if(!((item_24911 == null))){
if(cljs.core.coll_QMARK_.call(null,item_24911)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_24911)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_24911));
}
} else {
}


var G__24912 = cljs.core.next.call(null,seq__24888_24905__$1);
var G__24913 = null;
var G__24914 = (0);
var G__24915 = (0);
seq__24888_24895 = G__24912;
chunk__24889_24896 = G__24913;
count__24890_24897 = G__24914;
i__24891_24898 = G__24915;
continue;
}
} else {
}
}
break;
}

return group;
});

devtools.formatters.templating.make_group.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
devtools.formatters.templating.make_group.cljs$lang$applyTo = (function (seq24887){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24887));
});

devtools.formatters.templating.make_template = (function devtools$formatters$templating$make_template(var_args){
var args__4534__auto__ = [];
var len__4531__auto___24923 = arguments.length;
var i__4532__auto___24924 = (0);
while(true){
if((i__4532__auto___24924 < len__4531__auto___24923)){
args__4534__auto__.push((arguments[i__4532__auto___24924]));

var G__24925 = (i__4532__auto___24924 + (1));
i__4532__auto___24924 = G__24925;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((2) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((2)),(0),null)):null);
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4535__auto__);
});

devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (tag,style,children){
var tag__$1 = devtools.formatters.helpers.pref.call(null,tag);
var style__$1 = devtools.formatters.helpers.pref.call(null,style);
var template = devtools.formatters.templating.mark_as_template_BANG_.call(null,[tag__$1,((cljs.core.empty_QMARK_.call(null,style__$1))?({}):({"style": style__$1}))]);
var seq__24919_24926 = cljs.core.seq.call(null,children);
var chunk__24920_24927 = null;
var count__24921_24928 = (0);
var i__24922_24929 = (0);
while(true){
if((i__24922_24929 < count__24921_24928)){
var child_24930 = cljs.core._nth.call(null,chunk__24920_24927,i__24922_24929);
if(!((child_24930 == null))){
if(cljs.core.coll_QMARK_.call(null,child_24930)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_24930))));
} else {
var temp__5455__auto___24931 = devtools.formatters.helpers.pref.call(null,child_24930);
if(cljs.core.truth_(temp__5455__auto___24931)){
var child_value_24932 = temp__5455__auto___24931;
template.push(child_value_24932);
} else {
}
}
} else {
}


var G__24933 = seq__24919_24926;
var G__24934 = chunk__24920_24927;
var G__24935 = count__24921_24928;
var G__24936 = (i__24922_24929 + (1));
seq__24919_24926 = G__24933;
chunk__24920_24927 = G__24934;
count__24921_24928 = G__24935;
i__24922_24929 = G__24936;
continue;
} else {
var temp__5457__auto___24937 = cljs.core.seq.call(null,seq__24919_24926);
if(temp__5457__auto___24937){
var seq__24919_24938__$1 = temp__5457__auto___24937;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24919_24938__$1)){
var c__4351__auto___24939 = cljs.core.chunk_first.call(null,seq__24919_24938__$1);
var G__24940 = cljs.core.chunk_rest.call(null,seq__24919_24938__$1);
var G__24941 = c__4351__auto___24939;
var G__24942 = cljs.core.count.call(null,c__4351__auto___24939);
var G__24943 = (0);
seq__24919_24926 = G__24940;
chunk__24920_24927 = G__24941;
count__24921_24928 = G__24942;
i__24922_24929 = G__24943;
continue;
} else {
var child_24944 = cljs.core.first.call(null,seq__24919_24938__$1);
if(!((child_24944 == null))){
if(cljs.core.coll_QMARK_.call(null,child_24944)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_24944))));
} else {
var temp__5455__auto___24945 = devtools.formatters.helpers.pref.call(null,child_24944);
if(cljs.core.truth_(temp__5455__auto___24945)){
var child_value_24946 = temp__5455__auto___24945;
template.push(child_value_24946);
} else {
}
}
} else {
}


var G__24947 = cljs.core.next.call(null,seq__24919_24938__$1);
var G__24948 = null;
var G__24949 = (0);
var G__24950 = (0);
seq__24919_24926 = G__24947;
chunk__24920_24927 = G__24948;
count__24921_24928 = G__24949;
i__24922_24929 = G__24950;
continue;
}
} else {
}
}
break;
}

return template;
});

devtools.formatters.templating.make_template.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
devtools.formatters.templating.make_template.cljs$lang$applyTo = (function (seq24916){
var G__24917 = cljs.core.first.call(null,seq24916);
var seq24916__$1 = cljs.core.next.call(null,seq24916);
var G__24918 = cljs.core.first.call(null,seq24916__$1);
var seq24916__$2 = cljs.core.next.call(null,seq24916__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24917,G__24918,seq24916__$2);
});

devtools.formatters.templating.concat_templates_BANG_ = (function devtools$formatters$templating$concat_templates_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___24953 = arguments.length;
var i__4532__auto___24954 = (0);
while(true){
if((i__4532__auto___24954 < len__4531__auto___24953)){
args__4534__auto__.push((arguments[i__4532__auto___24954]));

var G__24955 = (i__4532__auto___24954 + (1));
i__4532__auto___24954 = G__24955;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (template,templates){
return devtools.formatters.templating.mark_as_template_BANG_.call(null,(template["concat"]).apply(template,cljs.core.into_array.call(null,cljs.core.map.call(null,cljs.core.into_array,cljs.core.keep.call(null,devtools.formatters.helpers.pref,templates)))));
});

devtools.formatters.templating.concat_templates_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
devtools.formatters.templating.concat_templates_BANG_.cljs$lang$applyTo = (function (seq24951){
var G__24952 = cljs.core.first.call(null,seq24951);
var seq24951__$1 = cljs.core.next.call(null,seq24951);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24952,seq24951__$1);
});

devtools.formatters.templating.extend_template_BANG_ = (function devtools$formatters$templating$extend_template_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___24958 = arguments.length;
var i__4532__auto___24959 = (0);
while(true){
if((i__4532__auto___24959 < len__4531__auto___24958)){
args__4534__auto__.push((arguments[i__4532__auto___24959]));

var G__24960 = (i__4532__auto___24959 + (1));
i__4532__auto___24959 = G__24960;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (template,args){
return devtools.formatters.templating.concat_templates_BANG_.call(null,template,args);
});

devtools.formatters.templating.extend_template_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
devtools.formatters.templating.extend_template_BANG_.cljs$lang$applyTo = (function (seq24956){
var G__24957 = cljs.core.first.call(null,seq24956);
var seq24956__$1 = cljs.core.next.call(null,seq24956);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24957,seq24956__$1);
});

devtools.formatters.templating.make_surrogate = (function devtools$formatters$templating$make_surrogate(var_args){
var G__24962 = arguments.length;
switch (G__24962) {
case 1:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$1 = (function (object){
return devtools.formatters.templating.make_surrogate.call(null,object,null);
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$2 = (function (object,header){
return devtools.formatters.templating.make_surrogate.call(null,object,header,null);
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$3 = (function (object,header,body){
return devtools.formatters.templating.make_surrogate.call(null,object,header,body,(0));
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$4 = (function (object,header,body,start_index){
return devtools.formatters.templating.mark_as_surrogate_BANG_.call(null,(function (){var obj24964 = {"target":object,"header":header,"body":body,"startIndex":(function (){var or__3949__auto__ = start_index;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return (0);
}
})()};
return obj24964;
})());
});

devtools.formatters.templating.make_surrogate.cljs$lang$maxFixedArity = 4;

devtools.formatters.templating.get_surrogate_target = (function devtools$formatters$templating$get_surrogate_target(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return (surrogate["target"]);
});
devtools.formatters.templating.get_surrogate_header = (function devtools$formatters$templating$get_surrogate_header(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return (surrogate["header"]);
});
devtools.formatters.templating.get_surrogate_body = (function devtools$formatters$templating$get_surrogate_body(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return (surrogate["body"]);
});
devtools.formatters.templating.get_surrogate_start_index = (function devtools$formatters$templating$get_surrogate_start_index(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return (surrogate["startIndex"]);
});
devtools.formatters.templating.make_reference = (function devtools$formatters$templating$make_reference(var_args){
var args__4534__auto__ = [];
var len__4531__auto___24972 = arguments.length;
var i__4532__auto___24973 = (0);
while(true){
if((i__4532__auto___24973 < len__4531__auto___24972)){
args__4534__auto__.push((arguments[i__4532__auto___24973]));

var G__24974 = (i__4532__auto___24973 + (1));
i__4532__auto___24973 = G__24974;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__24968){
var vec__24969 = p__24968;
var state_override_fn = cljs.core.nth.call(null,vec__24969,(0),null);
if((((state_override_fn == null)) || (cljs.core.fn_QMARK_.call(null,state_override_fn)))){
} else {
throw (new Error("Assert failed: (or (nil? state-override-fn) (fn? state-override-fn))"));
}

if((object == null)){
return devtools.formatters.templating.make_template.call(null,new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"nil-style","nil-style",-1505044832),new cljs.core.Keyword(null,"nil-label","nil-label",-587789203));
} else {
var sub_state = ((!((state_override_fn == null)))?state_override_fn.call(null,devtools.formatters.state.get_current_state.call(null)):devtools.formatters.state.get_current_state.call(null));
return devtools.formatters.templating.make_group.call(null,"object",({"object": object, "config": sub_state}));
}
});

devtools.formatters.templating.make_reference.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
devtools.formatters.templating.make_reference.cljs$lang$applyTo = (function (seq24966){
var G__24967 = cljs.core.first.call(null,seq24966);
var seq24966__$1 = cljs.core.next.call(null,seq24966);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24967,seq24966__$1);
});

devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating.print_preview = (function devtools$formatters$templating$print_preview(markup){
var _STAR_print_level_STAR_24975 = cljs.core._STAR_print_level_STAR_;
cljs.core._STAR_print_level_STAR_ = (1);

try{return cljs.core.pr_str.call(null,markup);
}finally {cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_24975;
}});
devtools.formatters.templating.add_stack_separators = (function devtools$formatters$templating$add_stack_separators(stack){
return cljs.core.interpose.call(null,"-------------",stack);
});
devtools.formatters.templating.replace_fns_with_markers = (function devtools$formatters$templating$replace_fns_with_markers(stack){
var f = (function (v){
if(cljs.core.fn_QMARK_.call(null,v)){
return "##fn##";
} else {
return v;
}
});
return clojure.walk.prewalk.call(null,f,stack);
});
devtools.formatters.templating.pprint_render_calls = (function devtools$formatters$templating$pprint_render_calls(stack){
return cljs.core.map.call(null,devtools.util.pprint_str,stack);
});
devtools.formatters.templating.pprint_render_stack = (function devtools$formatters$templating$pprint_render_stack(stack){
return clojure.string.join.call(null,"\n",devtools.formatters.templating.add_stack_separators.call(null,devtools.formatters.templating.pprint_render_calls.call(null,devtools.formatters.templating.replace_fns_with_markers.call(null,cljs.core.reverse.call(null,stack)))));
});
devtools.formatters.templating.pprint_render_path = (function devtools$formatters$templating$pprint_render_path(path){
return devtools.util.pprint_str.call(null,path);
});
devtools.formatters.templating.assert_markup_error = (function devtools$formatters$templating$assert_markup_error(msg){
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg),"\n","Render path: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.formatters.templating.pprint_render_path.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_)),"\n","Render stack:\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.formatters.templating.pprint_render_stack.call(null,devtools.formatters.templating._STAR_current_render_stack_STAR_))].join('')),"\n","false"].join('')));

});
devtools.formatters.templating.surrogate_markup_QMARK_ = (function devtools$formatters$templating$surrogate_markup_QMARK_(markup){
return ((cljs.core.sequential_QMARK_.call(null,markup)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,markup),"surrogate")));
});
devtools.formatters.templating.render_special = (function devtools$formatters$templating$render_special(name,args){
var G__24976 = name;
switch (G__24976) {
case "surrogate":
var obj = cljs.core.first.call(null,args);
var converted_args = cljs.core.map.call(null,devtools.formatters.templating.render_json_ml_STAR_,cljs.core.rest.call(null,args));
return cljs.core.apply.call(null,devtools.formatters.templating.make_surrogate,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [obj], null),converted_args));

break;
case "reference":
var obj = cljs.core.first.call(null,args);
var converted_obj = (cljs.core.truth_(devtools.formatters.templating.surrogate_markup_QMARK_.call(null,obj))?devtools.formatters.templating.render_json_ml_STAR_.call(null,obj):obj);
return cljs.core.apply.call(null,devtools.formatters.templating.make_reference,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [converted_obj], null),cljs.core.rest.call(null,args)));

break;
default:
return devtools.formatters.templating.assert_markup_error.call(null,["no matching special tag name: '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"'"].join(''));

}
});
devtools.formatters.templating.emptyish_QMARK_ = (function devtools$formatters$templating$emptyish_QMARK_(v){
if(((cljs.core.seqable_QMARK_.call(null,v)) || (cljs.core.array_QMARK_.call(null,v)) || (typeof v === 'string'))){
return cljs.core.empty_QMARK_.call(null,v);
} else {
return false;
}
});
devtools.formatters.templating.render_subtree = (function devtools$formatters$templating$render_subtree(tag,children){
var vec__24978 = tag;
var html_tag = cljs.core.nth.call(null,vec__24978,(0),null);
var style = cljs.core.nth.call(null,vec__24978,(1),null);
return cljs.core.apply.call(null,devtools.formatters.templating.make_template,html_tag,style,cljs.core.map.call(null,devtools.formatters.templating.render_json_ml_STAR_,cljs.core.remove.call(null,devtools.formatters.templating.emptyish_QMARK_,cljs.core.map.call(null,devtools.formatters.helpers.pref,children))));
});
devtools.formatters.templating.render_json_ml_STAR_ = (function devtools$formatters$templating$render_json_ml_STAR_(markup){
if(!(cljs.core.sequential_QMARK_.call(null,markup))){
return markup;
} else {
var _STAR_current_render_path_STAR_24981 = devtools.formatters.templating._STAR_current_render_path_STAR_;
devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_,cljs.core.first.call(null,markup));

try{var tag = devtools.formatters.helpers.pref.call(null,cljs.core.first.call(null,markup));
if(typeof tag === 'string'){
return devtools.formatters.templating.render_special.call(null,tag,cljs.core.rest.call(null,markup));
} else {
if(cljs.core.sequential_QMARK_.call(null,tag)){
return devtools.formatters.templating.render_subtree.call(null,tag,cljs.core.rest.call(null,markup));
} else {
return devtools.formatters.templating.assert_markup_error.call(null,["invalid json-ml markup at ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.formatters.templating.print_preview.call(null,markup)),":"].join(''));

}
}
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_24981;
}}
});
devtools.formatters.templating.render_json_ml = (function devtools$formatters$templating$render_json_ml(markup){
var _STAR_current_render_stack_STAR_24982 = devtools.formatters.templating._STAR_current_render_stack_STAR_;
var _STAR_current_render_path_STAR_24983 = devtools.formatters.templating._STAR_current_render_path_STAR_;
devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_stack_STAR_,markup);

devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_,"<render-json-ml>");

try{return devtools.formatters.templating.render_json_ml_STAR_.call(null,markup);
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_24983;

devtools.formatters.templating._STAR_current_render_stack_STAR_ = _STAR_current_render_stack_STAR_24982;
}});
devtools.formatters.templating.assert_failed_markup_rendering = (function devtools$formatters$templating$assert_failed_markup_rendering(initial_value,value){
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["result of markup rendering must be a template,\n","resolved to ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.util.pprint_str.call(null,value)),"initial value: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.util.pprint_str.call(null,initial_value))].join('')),"\n","false"].join('')));

});
devtools.formatters.templating.render_markup_STAR_ = (function devtools$formatters$templating$render_markup_STAR_(initial_value,value){
while(true){
if(cljs.core.fn_QMARK_.call(null,value)){
var G__24984 = initial_value;
var G__24985 = value.call(null);
initial_value = G__24984;
value = G__24985;
continue;
} else {
if((value instanceof cljs.core.Keyword)){
var G__24986 = initial_value;
var G__24987 = devtools.formatters.helpers.pref.call(null,value);
initial_value = G__24986;
value = G__24987;
continue;
} else {
if(cljs.core.sequential_QMARK_.call(null,value)){
var G__24988 = initial_value;
var G__24989 = devtools.formatters.templating.render_json_ml.call(null,value);
initial_value = G__24988;
value = G__24989;
continue;
} else {
if(cljs.core.truth_(devtools.formatters.templating.template_QMARK_.call(null,value))){
return value;
} else {
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,value))){
return value;
} else {
if(cljs.core.truth_(devtools.formatters.templating.reference_QMARK_.call(null,value))){
return value;
} else {
return devtools.formatters.templating.assert_failed_markup_rendering.call(null,initial_value,value);

}
}
}
}
}
}
break;
}
});
devtools.formatters.templating.render_markup = (function devtools$formatters$templating$render_markup(value){
return devtools.formatters.templating.render_markup_STAR_.call(null,value,value);
});

//# sourceMappingURL=templating.js.map
