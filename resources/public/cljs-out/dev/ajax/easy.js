// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('ajax.easy');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('ajax.simple');
goog.require('ajax.transit');
goog.require('ajax.json');
goog.require('ajax.ring');
goog.require('ajax.url');
goog.require('ajax.formats');
ajax.easy.default_formats = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["application/transit+json",ajax.transit.transit_response_format], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["application/transit+transit",ajax.transit.transit_response_format], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["application/json",ajax.json.json_response_format], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["text/plain",ajax.formats.text_response_format], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["text/html",ajax.formats.text_response_format], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["*/*",ajax.formats.raw_response_format], null)], null));
ajax.easy.detect_response_format = (function ajax$easy$detect_response_format(var_args){
var G__19444 = arguments.length;
switch (G__19444) {
case 0:
return ajax.easy.detect_response_format.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return ajax.easy.detect_response_format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

ajax.easy.detect_response_format.cljs$core$IFn$_invoke$arity$0 = (function (){
return ajax.formats.detect_response_format(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$response_DASH_format,cljs.core.deref(ajax.easy.default_formats)], null));
});

ajax.easy.detect_response_format.cljs$core$IFn$_invoke$arity$1 = (function (opts){
return ajax.formats.detect_response_format(opts);
});

ajax.easy.detect_response_format.cljs$lang$maxFixedArity = 1;

ajax.easy.keyword_request_format = (function ajax$easy$keyword_request_format(format,format_params){

if(cljs.core.map_QMARK_(format)){
return format;
} else {
if(cljs.core.fn_QMARK_(format)){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$write,format], null);
} else {
if((format == null)){
return ajax.transit.transit_request_format.cljs$core$IFn$_invoke$arity$1(format_params);
} else {
var G__19446 = format;
var G__19446__$1 = (((G__19446 instanceof cljs.core.Keyword))?G__19446.fqn:null);
switch (G__19446__$1) {
case "transit":
return ajax.transit.transit_request_format.cljs$core$IFn$_invoke$arity$1(format_params);

break;
case "json":
return (ajax.json.json_request_format.cljs$core$IFn$_invoke$arity$0 ? ajax.json.json_request_format.cljs$core$IFn$_invoke$arity$0() : ajax.json.json_request_format.call(null));

break;
case "text":
return ajax.formats.text_request_format();

break;
case "raw":
return ajax.url.url_request_format.cljs$core$IFn$_invoke$arity$1(format_params);

break;
case "url":
return ajax.url.url_request_format.cljs$core$IFn$_invoke$arity$1(format_params);

break;
default:
return null;

}

}
}
}
});
ajax.easy.keyword_response_format_element = (function ajax$easy$keyword_response_format_element(format,format_params){
if(cljs.core.vector_QMARK_(format)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(format),(function (){var G__19448 = cljs.core.second(format);
var G__19449 = format_params;
return (ajax.easy.keyword_response_format_element.cljs$core$IFn$_invoke$arity$2 ? ajax.easy.keyword_response_format_element.cljs$core$IFn$_invoke$arity$2(G__19448,G__19449) : ajax.easy.keyword_response_format_element.call(null,G__19448,G__19449));
})()], null);
} else {
if(cljs.core.map_QMARK_(format)){
return format;
} else {
if(cljs.core.fn_QMARK_(format)){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$read,format,cljs.core.cst$kw$description,"custom"], null);
} else {
if((format == null)){
return ajax.easy.detect_response_format.cljs$core$IFn$_invoke$arity$0();
} else {
var G__19450 = format;
var G__19450__$1 = (((G__19450 instanceof cljs.core.Keyword))?G__19450.fqn:null);
switch (G__19450__$1) {
case "transit":
return ajax.transit.transit_response_format.cljs$core$IFn$_invoke$arity$1(format_params);

break;
case "json":
return (ajax.json.json_response_format.cljs$core$IFn$_invoke$arity$1 ? ajax.json.json_response_format.cljs$core$IFn$_invoke$arity$1(format_params) : ajax.json.json_response_format.call(null,format_params));

break;
case "text":
return (ajax.formats.text_response_format.cljs$core$IFn$_invoke$arity$0 ? ajax.formats.text_response_format.cljs$core$IFn$_invoke$arity$0() : ajax.formats.text_response_format.call(null));

break;
case "ring":
return ajax.ring.ring_response_format.cljs$core$IFn$_invoke$arity$0();

break;
case "raw":
return ajax.formats.raw_response_format.cljs$core$IFn$_invoke$arity$0();

break;
case "detect":
return ajax.easy.detect_response_format.cljs$core$IFn$_invoke$arity$0();

break;
default:
return null;

}

}
}
}
}
});
ajax.easy.keyword_response_format = (function ajax$easy$keyword_response_format(format,format_params){

if(cljs.core.vector_QMARK_(format)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__19452_SHARP_){
return ajax.easy.keyword_response_format_element(p1__19452_SHARP_,format_params);
}),format));
} else {
return ajax.easy.keyword_response_format_element(format,format_params);
}
});
ajax.easy.print_response = (function ajax$easy$print_response(response){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["CLJS-AJAX response:",response], 0));
});
/**
 * This gets called if you forget to attach a handler to an easy
 *   API function.
 */
ajax.easy.default_handler = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(ajax.easy.print_response);
ajax.easy.print_error_response = (function ajax$easy$print_error_response(response){
if((typeof console !== 'undefined')){
return console.error(response);
} else {
if((typeof window !== 'undefined')){
return window.alert([cljs.core.str.cljs$core$IFn$_invoke$arity$1(response)].join(''));
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["CLJS-AJAX ERROR:",response], 0));

}
}
});
/**
 * This will be called when errors occur if you don't supply
 * an error handler to the easy API functions. If you don't
 * want it writing errors to the console (or worse, flashing up
 * alerts), make sure you always handle errors.
 */
ajax.easy.default_error_handler = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(ajax.easy.print_error_response);
/**
 * Converts easy API handlers to a `ajax-request` handler
 */
ajax.easy.transform_handler = (function ajax$easy$transform_handler(p__19453){
var map__19454 = p__19453;
var map__19454__$1 = ((((!((map__19454 == null)))?(((((map__19454.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19454.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19454):map__19454);
var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19454__$1,cljs.core.cst$kw$handler);
var error_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19454__$1,cljs.core.cst$kw$error_DASH_handler);
var finally$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19454__$1,cljs.core.cst$kw$finally);
var h = (function (){var or__3949__auto__ = handler;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.core.deref(ajax.easy.default_handler);
}
})();
var e = (function (){var or__3949__auto__ = error_handler;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.core.deref(ajax.easy.default_error_handler);
}
})();
return ((function (h,e,map__19454,map__19454__$1,handler,error_handler,finally$){
return (function ajax$easy$transform_handler_$_easy_handler(p__19456){
var vec__19457 = p__19456;
var ok = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19457,(0),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19457,(1),null);
var fexpr__19460_19461 = (cljs.core.truth_(ok)?h:e);
(fexpr__19460_19461.cljs$core$IFn$_invoke$arity$1 ? fexpr__19460_19461.cljs$core$IFn$_invoke$arity$1(result) : fexpr__19460_19461.call(null,result));

if(cljs.core.fn_QMARK_(finally$)){
return (finally$.cljs$core$IFn$_invoke$arity$0 ? finally$.cljs$core$IFn$_invoke$arity$0() : finally$.call(null));
} else {
return null;
}
});
;})(h,e,map__19454,map__19454__$1,handler,error_handler,finally$))
});
ajax.easy.transform_opts = (function ajax$easy$transform_opts(p__19462){
var map__19463 = p__19462;
var map__19463__$1 = ((((!((map__19463 == null)))?(((((map__19463.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19463.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19463):map__19463);
var opts = map__19463__$1;
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19463__$1,cljs.core.cst$kw$method);
var format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19463__$1,cljs.core.cst$kw$format);
var response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19463__$1,cljs.core.cst$kw$response_DASH_format);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19463__$1,cljs.core.cst$kw$params);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19463__$1,cljs.core.cst$kw$body);

var needs_format = (((body == null)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(method,"GET")));
var rf = (cljs.core.truth_((function (){var or__3949__auto__ = format;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return needs_format;
}
})())?ajax.easy.keyword_request_format(format,opts):null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(opts,cljs.core.cst$kw$handler,ajax.easy.transform_handler(opts),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$format,rf,cljs.core.cst$kw$response_DASH_format,ajax.easy.keyword_response_format(response_format,opts)], 0));
});
ajax.easy.easy_ajax_request = (function ajax$easy$easy_ajax_request(uri,method,opts){
return ajax.simple.ajax_request(ajax.easy.transform_opts(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(opts,cljs.core.cst$kw$uri,uri,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$method,method], 0))));
});
