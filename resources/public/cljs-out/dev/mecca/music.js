// Compiled by ClojureScript 1.10.339 {}
goog.provide('mecca.music');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('re_frame.core');
mecca.music.mario_jump = (function mecca$music$mario_jump(){
var beat = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-position","current-position",2031348254)], null));
var notes = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"notes","notes",-1039600523)], null));
var jump = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mario-jump","mario-jump",253829289)], null));
if(cljs.core.truth_((function (){var and__3938__auto__ = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"playing?","playing?",-1884542863)], null)));
if(cljs.core.truth_(and__3938__auto__)){
return (cljs.core.deref.call(null,jump) === (0));
} else {
return and__3938__auto__;
}
})())){
if(((0) < cljs.core.count.call(null,cljs.core.filter.call(null,((function (beat,notes,jump){
return (function (p1__16571_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(p1__16571_SHARP_),(cljs.core.deref.call(null,beat) + (1)));
});})(beat,notes,jump))
,cljs.core.deref.call(null,notes))))){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"jump!","jump!",-1168155200)], null));
} else {
return null;
}
} else {
return null;
}
});
mecca.music.mario_move = (function mecca$music$mario_move(){
var notes = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"notes","notes",-1039600523)], null));
var playing_QMARK_ = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"playing?","playing?",-1884542863)], null)));
var now = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"audio-context","audio-context",1642559898)], null))).currentTime;
var length = cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,((function (notes,playing_QMARK_,now){
return (function (p1__16572_SHARP_){
return new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(p1__16572_SHARP_);
});})(notes,playing_QMARK_,now))
,cljs.core.deref.call(null,notes)));
var started = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"play-start","play-start",-898241782)], null));
var elapsed = (now - cljs.core.deref.call(null,started));
var beat_length = ((60) / cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tempo","tempo",-1555208453)], null))));
var end_time = (cljs.core.deref.call(null,started) + (beat_length * (4)));
var current_beat = (elapsed / beat_length);
var last_drawn_pos = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-position","current-position",2031348254)], null));
if(cljs.core.truth_(playing_QMARK_)){
if((length < current_beat)){
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"play-off","play-off",2116693509)], null));
} else {
if((cljs.core.deref.call(null,last_drawn_pos) < current_beat)){
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"move-mario","move-mario",-317739908)], null));

re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"advance-position","advance-position",-23796893)], null));
} else {
}
}
} else {
}

return mecca.music.mario_jump.call(null);
});
mecca.music.dispatch_timer_event = (function mecca$music$dispatch_timer_event(){
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tick!","tick!",68058958)], null));

return mecca.music.mario_move.call(null);
});
if((typeof mecca !== 'undefined') && (typeof mecca.music !== 'undefined') && (typeof mecca.music.do_timer !== 'undefined')){
} else {
mecca.music.do_timer = setInterval(mecca.music.dispatch_timer_event,(60));
}
mecca.music.load_sound = (function mecca$music$load_sound(named_url){
var out = cljs.core.async.chan.call(null);
var req = (new XMLHttpRequest());
req.responseType = "arraybuffer";

req.onload = ((function (out,req){
return (function (e){
if(cljs.core._EQ_.call(null,req.status,(200))){
cljs.core.async.put_BANG_.call(null,out,cljs.core.assoc.call(null,named_url,new cljs.core.Keyword(null,"buffer","buffer",617295198),req.response));

return cljs.core.async.close_BANG_.call(null,out);
} else {
return cljs.core.async.close_BANG_.call(null,out);
}
});})(out,req))
;

req.open("GET",new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(named_url),true);

req.send();

return out;
});
mecca.music.decode = (function mecca$music$decode(named_url){
var out = cljs.core.async.chan.call(null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"buffer","buffer",617295198).cljs$core$IFn$_invoke$arity$1(named_url))){
cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"audio-context","audio-context",1642559898)], null))).decodeAudioData(new cljs.core.Keyword(null,"buffer","buffer",617295198).cljs$core$IFn$_invoke$arity$1(named_url),((function (out){
return (function (decoded_buffer){
cljs.core.async.put_BANG_.call(null,out,cljs.core.assoc.call(null,named_url,new cljs.core.Keyword(null,"decoded-buffer","decoded-buffer",598746700),decoded_buffer));

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
,((function (out){
return (function (){
console.error("Error loading file ",cljs.core.prn.call(null,named_url));

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);
} else {
cljs.core.async.close_BANG_.call(null,out);
}

return out;
});
mecca.music.buffer_source = (function mecca$music$buffer_source(buffer){
var source = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"audio-context","audio-context",1642559898)], null))).createBufferSource();
source.buffer = buffer;

return source;
});
mecca.music.get_and_decode = (function mecca$music$get_and_decode(named_url){
var c__16047__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16047__auto__){
return (function (){
var f__16048__auto__ = (function (){var switch__16024__auto__ = ((function (c__16047__auto__){
return (function (state_16584){
var state_val_16585 = (state_16584[(1)]);
if((state_val_16585 === (1))){
var inst_16573 = mecca.music.load_sound.call(null,named_url);
var state_16584__$1 = state_16584;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16584__$1,(2),inst_16573);
} else {
if((state_val_16585 === (2))){
var inst_16575 = (state_16584[(7)]);
var inst_16575__$1 = (state_16584[(2)]);
var state_16584__$1 = (function (){var statearr_16586 = state_16584;
(statearr_16586[(7)] = inst_16575__$1);

return statearr_16586;
})();
if(cljs.core.truth_(inst_16575__$1)){
var statearr_16587_16595 = state_16584__$1;
(statearr_16587_16595[(1)] = (3));

} else {
var statearr_16588_16596 = state_16584__$1;
(statearr_16588_16596[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16585 === (3))){
var inst_16575 = (state_16584[(7)]);
var inst_16577 = mecca.music.decode.call(null,inst_16575);
var state_16584__$1 = state_16584;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16584__$1,(6),inst_16577);
} else {
if((state_val_16585 === (4))){
var state_16584__$1 = state_16584;
var statearr_16589_16597 = state_16584__$1;
(statearr_16589_16597[(2)] = null);

(statearr_16589_16597[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16585 === (5))){
var inst_16582 = (state_16584[(2)]);
var state_16584__$1 = state_16584;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16584__$1,inst_16582);
} else {
if((state_val_16585 === (6))){
var inst_16579 = (state_16584[(2)]);
var state_16584__$1 = state_16584;
var statearr_16590_16598 = state_16584__$1;
(statearr_16590_16598[(2)] = inst_16579);

(statearr_16590_16598[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
});})(c__16047__auto__))
;
return ((function (switch__16024__auto__,c__16047__auto__){
return (function() {
var mecca$music$get_and_decode_$_state_machine__16025__auto__ = null;
var mecca$music$get_and_decode_$_state_machine__16025__auto____0 = (function (){
var statearr_16591 = [null,null,null,null,null,null,null,null];
(statearr_16591[(0)] = mecca$music$get_and_decode_$_state_machine__16025__auto__);

(statearr_16591[(1)] = (1));

return statearr_16591;
});
var mecca$music$get_and_decode_$_state_machine__16025__auto____1 = (function (state_16584){
while(true){
var ret_value__16026__auto__ = (function (){try{while(true){
var result__16027__auto__ = switch__16024__auto__.call(null,state_16584);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16027__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16027__auto__;
}
break;
}
}catch (e16592){if((e16592 instanceof Object)){
var ex__16028__auto__ = e16592;
var statearr_16593_16599 = state_16584;
(statearr_16593_16599[(5)] = ex__16028__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16584);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16592;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16026__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16600 = state_16584;
state_16584 = G__16600;
continue;
} else {
return ret_value__16026__auto__;
}
break;
}
});
mecca$music$get_and_decode_$_state_machine__16025__auto__ = function(state_16584){
switch(arguments.length){
case 0:
return mecca$music$get_and_decode_$_state_machine__16025__auto____0.call(this);
case 1:
return mecca$music$get_and_decode_$_state_machine__16025__auto____1.call(this,state_16584);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mecca$music$get_and_decode_$_state_machine__16025__auto__.cljs$core$IFn$_invoke$arity$0 = mecca$music$get_and_decode_$_state_machine__16025__auto____0;
mecca$music$get_and_decode_$_state_machine__16025__auto__.cljs$core$IFn$_invoke$arity$1 = mecca$music$get_and_decode_$_state_machine__16025__auto____1;
return mecca$music$get_and_decode_$_state_machine__16025__auto__;
})()
;})(switch__16024__auto__,c__16047__auto__))
})();
var state__16049__auto__ = (function (){var statearr_16594 = f__16048__auto__.call(null);
(statearr_16594[(6)] = c__16047__auto__);

return statearr_16594;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16049__auto__);
});})(c__16047__auto__))
);

return c__16047__auto__;
});
mecca.music.load_samples = (function mecca$music$load_samples(){
var c__16047__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16047__auto__){
return (function (){
var f__16048__auto__ = (function (){var switch__16024__auto__ = ((function (c__16047__auto__){
return (function (state_16629){
var state_val_16630 = (state_16629[(1)]);
if((state_val_16630 === (1))){
var inst_16601 = cljs.core.PersistentHashMap.EMPTY;
var inst_16602 = cljs.core.range.call(null,(1),(19));
var inst_16603 = inst_16601;
var inst_16604 = inst_16602;
var state_16629__$1 = (function (){var statearr_16631 = state_16629;
(statearr_16631[(7)] = inst_16604);

(statearr_16631[(8)] = inst_16603);

return statearr_16631;
})();
var statearr_16632_16644 = state_16629__$1;
(statearr_16632_16644[(2)] = null);

(statearr_16632_16644[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16630 === (2))){
var inst_16604 = (state_16629[(7)]);
var inst_16606 = cljs.core.first.call(null,inst_16604);
var inst_16607 = (inst_16606 == null);
var inst_16608 = cljs.core.not.call(null,inst_16607);
var state_16629__$1 = state_16629;
if(inst_16608){
var statearr_16633_16645 = state_16629__$1;
(statearr_16633_16645[(1)] = (4));

} else {
var statearr_16634_16646 = state_16629__$1;
(statearr_16634_16646[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16630 === (3))){
var inst_16627 = (state_16629[(2)]);
var state_16629__$1 = state_16629;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16629__$1,inst_16627);
} else {
if((state_val_16630 === (4))){
var inst_16604 = (state_16629[(7)]);
var inst_16610 = (state_16629[(9)]);
var inst_16610__$1 = cljs.core.first.call(null,inst_16604);
var inst_16611 = [new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"sound","sound",-2127407070)];
var inst_16612 = ["/audio/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_16610__$1),".mp3"].join('');
var inst_16613 = [inst_16612,inst_16610__$1];
var inst_16614 = cljs.core.PersistentHashMap.fromArrays(inst_16611,inst_16613);
var inst_16615 = mecca.music.get_and_decode.call(null,inst_16614);
var state_16629__$1 = (function (){var statearr_16635 = state_16629;
(statearr_16635[(9)] = inst_16610__$1);

return statearr_16635;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16629__$1,(7),inst_16615);
} else {
if((state_val_16630 === (5))){
var inst_16603 = (state_16629[(8)]);
var state_16629__$1 = state_16629;
var statearr_16636_16647 = state_16629__$1;
(statearr_16636_16647[(2)] = inst_16603);

(statearr_16636_16647[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16630 === (6))){
var inst_16625 = (state_16629[(2)]);
var state_16629__$1 = state_16629;
var statearr_16637_16648 = state_16629__$1;
(statearr_16637_16648[(2)] = inst_16625);

(statearr_16637_16648[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16630 === (7))){
var inst_16604 = (state_16629[(7)]);
var inst_16610 = (state_16629[(9)]);
var inst_16603 = (state_16629[(8)]);
var inst_16617 = (state_16629[(2)]);
var inst_16618 = cljs.core.prn.call(null,inst_16610);
var inst_16619 = cljs.core.prn.call(null,inst_16617);
var inst_16620 = cljs.core.assoc.call(null,inst_16603,inst_16610,inst_16617);
var inst_16621 = cljs.core.rest.call(null,inst_16604);
var inst_16603__$1 = inst_16620;
var inst_16604__$1 = inst_16621;
var state_16629__$1 = (function (){var statearr_16638 = state_16629;
(statearr_16638[(7)] = inst_16604__$1);

(statearr_16638[(10)] = inst_16619);

(statearr_16638[(8)] = inst_16603__$1);

(statearr_16638[(11)] = inst_16618);

return statearr_16638;
})();
var statearr_16639_16649 = state_16629__$1;
(statearr_16639_16649[(2)] = null);

(statearr_16639_16649[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__16047__auto__))
;
return ((function (switch__16024__auto__,c__16047__auto__){
return (function() {
var mecca$music$load_samples_$_state_machine__16025__auto__ = null;
var mecca$music$load_samples_$_state_machine__16025__auto____0 = (function (){
var statearr_16640 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16640[(0)] = mecca$music$load_samples_$_state_machine__16025__auto__);

(statearr_16640[(1)] = (1));

return statearr_16640;
});
var mecca$music$load_samples_$_state_machine__16025__auto____1 = (function (state_16629){
while(true){
var ret_value__16026__auto__ = (function (){try{while(true){
var result__16027__auto__ = switch__16024__auto__.call(null,state_16629);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16027__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16027__auto__;
}
break;
}
}catch (e16641){if((e16641 instanceof Object)){
var ex__16028__auto__ = e16641;
var statearr_16642_16650 = state_16629;
(statearr_16642_16650[(5)] = ex__16028__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16629);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16641;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16026__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16651 = state_16629;
state_16629 = G__16651;
continue;
} else {
return ret_value__16026__auto__;
}
break;
}
});
mecca$music$load_samples_$_state_machine__16025__auto__ = function(state_16629){
switch(arguments.length){
case 0:
return mecca$music$load_samples_$_state_machine__16025__auto____0.call(this);
case 1:
return mecca$music$load_samples_$_state_machine__16025__auto____1.call(this,state_16629);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mecca$music$load_samples_$_state_machine__16025__auto__.cljs$core$IFn$_invoke$arity$0 = mecca$music$load_samples_$_state_machine__16025__auto____0;
mecca$music$load_samples_$_state_machine__16025__auto__.cljs$core$IFn$_invoke$arity$1 = mecca$music$load_samples_$_state_machine__16025__auto____1;
return mecca$music$load_samples_$_state_machine__16025__auto__;
})()
;})(switch__16024__auto__,c__16047__auto__))
})();
var state__16049__auto__ = (function (){var statearr_16643 = f__16048__auto__.call(null);
(statearr_16643[(6)] = c__16047__auto__);

return statearr_16643;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16049__auto__);
});})(c__16047__auto__))
);

return c__16047__auto__;
});
if((typeof mecca !== 'undefined') && (typeof mecca.music !== 'undefined') && (typeof mecca.music.loading_samples !== 'undefined')){
} else {
mecca.music.loading_samples = (function (){var c__16047__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16047__auto__){
return (function (){
var f__16048__auto__ = (function (){var switch__16024__auto__ = ((function (c__16047__auto__){
return (function (state_16661){
var state_val_16662 = (state_16661[(1)]);
if((state_val_16662 === (1))){
var inst_16652 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_16653 = mecca.music.load_samples.call(null);
var state_16661__$1 = (function (){var statearr_16663 = state_16661;
(statearr_16663[(7)] = inst_16652);

return statearr_16663;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16661__$1,(2),inst_16653);
} else {
if((state_val_16662 === (2))){
var inst_16652 = (state_16661[(7)]);
var inst_16655 = (state_16661[(2)]);
var inst_16656 = [new cljs.core.Keyword(null,"load-samples","load-samples",-40877701),inst_16655];
var inst_16657 = (new cljs.core.PersistentVector(null,2,(5),inst_16652,inst_16656,null));
var inst_16658 = re_frame.core.dispatch.call(null,inst_16657);
var inst_16659 = cljs.core.prn.call(null,"Samples loaded");
var state_16661__$1 = (function (){var statearr_16664 = state_16661;
(statearr_16664[(8)] = inst_16658);

return statearr_16664;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16661__$1,inst_16659);
} else {
return null;
}
}
});})(c__16047__auto__))
;
return ((function (switch__16024__auto__,c__16047__auto__){
return (function() {
var mecca$music$state_machine__16025__auto__ = null;
var mecca$music$state_machine__16025__auto____0 = (function (){
var statearr_16665 = [null,null,null,null,null,null,null,null,null];
(statearr_16665[(0)] = mecca$music$state_machine__16025__auto__);

(statearr_16665[(1)] = (1));

return statearr_16665;
});
var mecca$music$state_machine__16025__auto____1 = (function (state_16661){
while(true){
var ret_value__16026__auto__ = (function (){try{while(true){
var result__16027__auto__ = switch__16024__auto__.call(null,state_16661);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16027__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16027__auto__;
}
break;
}
}catch (e16666){if((e16666 instanceof Object)){
var ex__16028__auto__ = e16666;
var statearr_16667_16669 = state_16661;
(statearr_16667_16669[(5)] = ex__16028__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16661);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16666;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16026__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16670 = state_16661;
state_16661 = G__16670;
continue;
} else {
return ret_value__16026__auto__;
}
break;
}
});
mecca$music$state_machine__16025__auto__ = function(state_16661){
switch(arguments.length){
case 0:
return mecca$music$state_machine__16025__auto____0.call(this);
case 1:
return mecca$music$state_machine__16025__auto____1.call(this,state_16661);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mecca$music$state_machine__16025__auto__.cljs$core$IFn$_invoke$arity$0 = mecca$music$state_machine__16025__auto____0;
mecca$music$state_machine__16025__auto__.cljs$core$IFn$_invoke$arity$1 = mecca$music$state_machine__16025__auto____1;
return mecca$music$state_machine__16025__auto__;
})()
;})(switch__16024__auto__,c__16047__auto__))
})();
var state__16049__auto__ = (function (){var statearr_16668 = f__16048__auto__.call(null);
(statearr_16668[(6)] = c__16047__auto__);

return statearr_16668;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16049__auto__);
});})(c__16047__auto__))
);

return c__16047__auto__;
})();
}
mecca.music.add_semitone = (function mecca$music$add_semitone(rate){
return (rate * Math.pow((2),((1) / (12))));
});
mecca.music.sub_semitone = (function mecca$music$sub_semitone(rate){
return (rate * Math.pow((2),((-1) / (12))));
});
mecca.music.inc_rate = (function mecca$music$inc_rate(semis){
return cljs.core.reduce.call(null,mecca.music.add_semitone,cljs.core.repeat.call(null,semis,(1)));
});
mecca.music.dec_rate = (function mecca$music$dec_rate(semis){
return cljs.core.reduce.call(null,mecca.music.sub_semitone,cljs.core.repeat.call(null,semis,(1)));
});
mecca.music.pitch__GT_rate = (function mecca$music$pitch__GT_rate(midi_num){
if(((66) < midi_num)){
return mecca.music.inc_rate.call(null,(midi_num - (66)));
} else {
return mecca.music.dec_rate.call(null,((68) - midi_num));
}
});
mecca.music.play_sample = (function mecca$music$play_sample(instrument,pitch){
var context = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"audio-context","audio-context",1642559898)], null));
var samples = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"samples","samples",635504833)], null));
var audio_buffer = new cljs.core.Keyword(null,"decoded-buffer","decoded-buffer",598746700).cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,cljs.core.deref.call(null,samples),instrument));
var sample_source = cljs.core.deref.call(null,context).createBufferSource();
var compressor = cljs.core.deref.call(null,context).createDynamicsCompressor();
var analyser = cljs.core.deref.call(null,context).createAnalyser();
sample_source.buffer = audio_buffer;

sample_source.playbackRate.setValueAtTime(mecca.music.pitch__GT_rate.call(null,pitch),cljs.core.deref.call(null,context).currentTime);

sample_source.connect(analyser);

sample_source.connect(cljs.core.deref.call(null,context).destination);

sample_source.start();

return sample_source;
});
mecca.music.play_at = (function mecca$music$play_at(instrument,pitch,time){
var context = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"audio-context","audio-context",1642559898)], null));
var samples = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"samples","samples",635504833)], null));
var audio_buffer = new cljs.core.Keyword(null,"decoded-buffer","decoded-buffer",598746700).cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,cljs.core.deref.call(null,samples),instrument));
var sample_source = cljs.core.deref.call(null,context).createBufferSource();
sample_source.buffer = audio_buffer;

sample_source.playbackRate.setValueAtTime(mecca.music.pitch__GT_rate.call(null,pitch),time);

sample_source.connect(cljs.core.deref.call(null,context).destination);

sample_source.start(time);

return sample_source;
});
mecca.music.delay_note = (function mecca$music$delay_note(beats,note){
return cljs.core.update.call(null,note,new cljs.core.Keyword(null,"time","time",1385887882),(function (p1__16671_SHARP_){
return (beats + p1__16671_SHARP_);
}));
});
mecca.music.advance_note = (function mecca$music$advance_note(beats,note){
return cljs.core.update.call(null,note,new cljs.core.Keyword(null,"time","time",1385887882),(function (p1__16672_SHARP_){
return (p1__16672_SHARP_ - beats);
}));
});
mecca.music.queue_section = (function mecca$music$queue_section(from,to){
var notes = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"notes","notes",-1039600523)], null));
var started = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"play-start","play-start",-898241782)], null));
var tempo = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tempo","tempo",-1555208453)], null));
var section = cljs.core.filter.call(null,((function (notes,started,tempo){
return (function (p1__16673_SHARP_){
return (((from <= new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(p1__16673_SHARP_))) && ((new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(p1__16673_SHARP_) <= to)));
});})(notes,started,tempo))
,cljs.core.deref.call(null,notes));
var advanced = cljs.core.map.call(null,((function (notes,started,tempo,section){
return (function (p1__16674_SHARP_){
return mecca.music.advance_note.call(null,from,p1__16674_SHARP_);
});})(notes,started,tempo,section))
,section);
return cljs.core.doall.call(null,(function (){var iter__4324__auto__ = ((function (notes,started,tempo,section,advanced){
return (function mecca$music$queue_section_$_iter__16675(s__16676){
return (new cljs.core.LazySeq(null,((function (notes,started,tempo,section,advanced){
return (function (){
var s__16676__$1 = s__16676;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__16676__$1);
if(temp__5457__auto__){
var s__16676__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__16676__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__16676__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__16678 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__16677 = (0);
while(true){
if((i__16677 < size__4323__auto__)){
var map__16679 = cljs.core._nth.call(null,c__4322__auto__,i__16677);
var map__16679__$1 = ((((!((map__16679 == null)))?(((((map__16679.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16679.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16679):map__16679);
var time = cljs.core.get.call(null,map__16679__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var instrument = cljs.core.get.call(null,map__16679__$1,new cljs.core.Keyword(null,"instrument","instrument",-960698844));
var pitch = cljs.core.get.call(null,map__16679__$1,new cljs.core.Keyword(null,"pitch","pitch",1495126700));
cljs.core.chunk_append.call(null,b__16678,mecca.music.play_at.call(null,instrument,pitch,(cljs.core.deref.call(null,started) + (((60) / cljs.core.deref.call(null,tempo)) * time))));

var G__16683 = (i__16677 + (1));
i__16677 = G__16683;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16678),mecca$music$queue_section_$_iter__16675.call(null,cljs.core.chunk_rest.call(null,s__16676__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16678),null);
}
} else {
var map__16681 = cljs.core.first.call(null,s__16676__$2);
var map__16681__$1 = ((((!((map__16681 == null)))?(((((map__16681.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16681.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16681):map__16681);
var time = cljs.core.get.call(null,map__16681__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var instrument = cljs.core.get.call(null,map__16681__$1,new cljs.core.Keyword(null,"instrument","instrument",-960698844));
var pitch = cljs.core.get.call(null,map__16681__$1,new cljs.core.Keyword(null,"pitch","pitch",1495126700));
return cljs.core.cons.call(null,mecca.music.play_at.call(null,instrument,pitch,(cljs.core.deref.call(null,started) + (((60) / cljs.core.deref.call(null,tempo)) * time))),mecca$music$queue_section_$_iter__16675.call(null,cljs.core.rest.call(null,s__16676__$2)));
}
} else {
return null;
}
break;
}
});})(notes,started,tempo,section,advanced))
,null,null));
});})(notes,started,tempo,section,advanced))
;
return iter__4324__auto__.call(null,section);
})());
});
mecca.music.play_section = (function mecca$music$play_section(from,to){
var notes = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"notes","notes",-1039600523)], null));
var now = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"audio-context","audio-context",1642559898)], null))).currentTime;
var tempo = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tempo","tempo",-1555208453)], null));
var section = cljs.core.filter.call(null,((function (notes,now,tempo){
return (function (p1__16684_SHARP_){
return (((from <= new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(p1__16684_SHARP_))) && ((new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(p1__16684_SHARP_) <= to)));
});})(notes,now,tempo))
,cljs.core.deref.call(null,notes));
var advanced = cljs.core.map.call(null,((function (notes,now,tempo,section){
return (function (p1__16685_SHARP_){
return mecca.music.advance_note.call(null,from,p1__16685_SHARP_);
});})(notes,now,tempo,section))
,section);
return cljs.core.doall.call(null,(function (){var iter__4324__auto__ = ((function (notes,now,tempo,section,advanced){
return (function mecca$music$play_section_$_iter__16686(s__16687){
return (new cljs.core.LazySeq(null,((function (notes,now,tempo,section,advanced){
return (function (){
var s__16687__$1 = s__16687;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__16687__$1);
if(temp__5457__auto__){
var s__16687__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__16687__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__16687__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__16689 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__16688 = (0);
while(true){
if((i__16688 < size__4323__auto__)){
var map__16690 = cljs.core._nth.call(null,c__4322__auto__,i__16688);
var map__16690__$1 = ((((!((map__16690 == null)))?(((((map__16690.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16690.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16690):map__16690);
var time = cljs.core.get.call(null,map__16690__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var instrument = cljs.core.get.call(null,map__16690__$1,new cljs.core.Keyword(null,"instrument","instrument",-960698844));
var pitch = cljs.core.get.call(null,map__16690__$1,new cljs.core.Keyword(null,"pitch","pitch",1495126700));
cljs.core.chunk_append.call(null,b__16689,mecca.music.play_at.call(null,instrument,pitch,(now + (((60) / cljs.core.deref.call(null,tempo)) * time))));

var G__16694 = (i__16688 + (1));
i__16688 = G__16694;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16689),mecca$music$play_section_$_iter__16686.call(null,cljs.core.chunk_rest.call(null,s__16687__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16689),null);
}
} else {
var map__16692 = cljs.core.first.call(null,s__16687__$2);
var map__16692__$1 = ((((!((map__16692 == null)))?(((((map__16692.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16692.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16692):map__16692);
var time = cljs.core.get.call(null,map__16692__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var instrument = cljs.core.get.call(null,map__16692__$1,new cljs.core.Keyword(null,"instrument","instrument",-960698844));
var pitch = cljs.core.get.call(null,map__16692__$1,new cljs.core.Keyword(null,"pitch","pitch",1495126700));
return cljs.core.cons.call(null,mecca.music.play_at.call(null,instrument,pitch,(now + (((60) / cljs.core.deref.call(null,tempo)) * time))),mecca$music$play_section_$_iter__16686.call(null,cljs.core.rest.call(null,s__16687__$2)));
}
} else {
return null;
}
break;
}
});})(notes,now,tempo,section,advanced))
,null,null));
});})(notes,now,tempo,section,advanced))
;
return iter__4324__auto__.call(null,advanced);
})());
});
mecca.music.play_note = (function mecca$music$play_note(){
var editor_start = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"editor-beat-start","editor-beat-start",-334408415)], null));
var play_pos = (((cljs.core.deref.call(null,editor_start) < (4)))?cljs.core.deref.call(null,editor_start):((4) + cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"editor-beat-start","editor-beat-start",-334408415)], null)))));
return mecca.music.play_section.call(null,(play_pos - (1)),(play_pos - 0.5));
});
mecca.music.play_notes = (function mecca$music$play_notes(n){
var editor_start = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"editor-beat-start","editor-beat-start",-334408415)], null));
var tempo = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tempo","tempo",-1555208453)], null));
var beat_length = ((60) / cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tempo","tempo",-1555208453)], null))));
var play_pos = (((cljs.core.deref.call(null,editor_start) < (4)))?cljs.core.deref.call(null,editor_start):((4) + cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"editor-beat-start","editor-beat-start",-334408415)], null)))));
return mecca.music.play_section.call(null,(play_pos - (1)),((play_pos - (1)) + (n * 0.5)));
});
mecca.music.play_from_here = (function mecca$music$play_from_here(){
var notes = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"notes","notes",-1039600523)], null));
var editor_start = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"editor-beat-start","editor-beat-start",-334408415)], null));
var play_pos = cljs.core.deref.call(null,editor_start);
var length = cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,((function (notes,editor_start,play_pos){
return (function (p1__16695_SHARP_){
return new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(p1__16695_SHARP_);
});})(notes,editor_start,play_pos))
,cljs.core.deref.call(null,notes)));
return mecca.music.play_section.call(null,(play_pos - (1)),((16) + play_pos));
});
mecca.music.play_song_BANG_ = (function mecca$music$play_song_BANG_(){
var notes = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"notes","notes",-1039600523)], null));
var now = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"audio-context","audio-context",1642559898)], null))).currentTime;
var tempo = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tempo","tempo",-1555208453)], null));
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reset-position","reset-position",-804750860)], null));

return cljs.core.doall.call(null,(function (){var iter__4324__auto__ = ((function (notes,now,tempo){
return (function mecca$music$play_song_BANG__$_iter__16696(s__16697){
return (new cljs.core.LazySeq(null,((function (notes,now,tempo){
return (function (){
var s__16697__$1 = s__16697;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__16697__$1);
if(temp__5457__auto__){
var s__16697__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__16697__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__16697__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__16699 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__16698 = (0);
while(true){
if((i__16698 < size__4323__auto__)){
var map__16700 = cljs.core._nth.call(null,c__4322__auto__,i__16698);
var map__16700__$1 = ((((!((map__16700 == null)))?(((((map__16700.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16700.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16700):map__16700);
var time = cljs.core.get.call(null,map__16700__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var instrument = cljs.core.get.call(null,map__16700__$1,new cljs.core.Keyword(null,"instrument","instrument",-960698844));
var pitch = cljs.core.get.call(null,map__16700__$1,new cljs.core.Keyword(null,"pitch","pitch",1495126700));
cljs.core.chunk_append.call(null,b__16699,mecca.music.play_at.call(null,instrument,pitch,(now + (((60) / cljs.core.deref.call(null,tempo)) * time))));

var G__16704 = (i__16698 + (1));
i__16698 = G__16704;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16699),mecca$music$play_song_BANG__$_iter__16696.call(null,cljs.core.chunk_rest.call(null,s__16697__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16699),null);
}
} else {
var map__16702 = cljs.core.first.call(null,s__16697__$2);
var map__16702__$1 = ((((!((map__16702 == null)))?(((((map__16702.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16702.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16702):map__16702);
var time = cljs.core.get.call(null,map__16702__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var instrument = cljs.core.get.call(null,map__16702__$1,new cljs.core.Keyword(null,"instrument","instrument",-960698844));
var pitch = cljs.core.get.call(null,map__16702__$1,new cljs.core.Keyword(null,"pitch","pitch",1495126700));
return cljs.core.cons.call(null,mecca.music.play_at.call(null,instrument,pitch,(now + (((60) / cljs.core.deref.call(null,tempo)) * time))),mecca$music$play_song_BANG__$_iter__16696.call(null,cljs.core.rest.call(null,s__16697__$2)));
}
} else {
return null;
}
break;
}
});})(notes,now,tempo))
,null,null));
});})(notes,now,tempo))
;
return iter__4324__auto__.call(null,cljs.core.deref.call(null,notes));
})());
});
mecca.music.get_bytes_BANG_ = (function mecca$music$get_bytes_BANG_(analyser,freq_data){
analyser.getByteFrequencyData(freq_data);

return freq_data;
});

//# sourceMappingURL=music.js.map
