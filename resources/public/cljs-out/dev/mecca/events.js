// Compiled by ClojureScript 1.10.339 {}
goog.provide('mecca.events');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('re_pressed.core');
goog.require('ajax.core');
goog.require('ajax.protocols');
goog.require('day8.re_frame.undo');
goog.require('mecca.mario');
goog.require('mecca.songs.megaman');
goog.require('mecca.songs.zelda');
goog.require('mecca.songs.city');
goog.require('mecca.music');
goog.require('goog.events');
goog.require('goog.events.EventType');
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432),(function (_,___$1){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"samples","samples",635504833),new cljs.core.Keyword(null,"editor-beat-start","editor-beat-start",-334408415),new cljs.core.Keyword(null,"instrument","instrument",-960698844),new cljs.core.Keyword(null,"sharp?","sharp?",411396133),new cljs.core.Keyword(null,"eraser?","eraser?",-561181785),new cljs.core.Keyword(null,"mario-jump","mario-jump",253829289),new cljs.core.Keyword(null,"time","time",1385887882),new cljs.core.Keyword(null,"play-start","play-start",-898241782),new cljs.core.Keyword(null,"current-note","current-note",-1767945909),new cljs.core.Keyword(null,"mario-run","mario-run",-1086168628),new cljs.core.Keyword(null,"repeat?","repeat?",1245600428),new cljs.core.Keyword(null,"file-upload","file-upload",-1929678130),new cljs.core.Keyword(null,"jumping?","jumping?",-2092574161),new cljs.core.Keyword(null,"time-signature","time-signature",-1730387952),new cljs.core.Keyword(null,"playing?","playing?",-1884542863),new cljs.core.Keyword(null,"loop-end","loop-end",-88908047),new cljs.core.Keyword(null,"mario-y","mario-y",1718385780),new cljs.core.Keyword(null,"notes","notes",-1039600523),new cljs.core.Keyword(null,"next-note-time","next-note-time",-1117617128),new cljs.core.Keyword(null,"focused-note-pos","focused-note-pos",-1443473576),new cljs.core.Keyword(null,"audio-context","audio-context",1642559898),new cljs.core.Keyword(null,"tempo","tempo",-1555208453),new cljs.core.Keyword(null,"mario-x","mario-x",1743249500),new cljs.core.Keyword(null,"array-buffer","array-buffer",519008380),new cljs.core.Keyword(null,"xml","xml",-1170142052),new cljs.core.Keyword(null,"current-position","current-position",2031348254),new cljs.core.Keyword(null,"notes-in-queue","notes-in-queue",-193583681)],[null,(1),(1),false,false,(0),(0),(0),(0),(1),false,"",false,(4),false,null,(61),cljs.core.PersistentVector.EMPTY,0.0,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null], null),(new AudioContext()),(120),(16),null,"",(0),cljs.core.PersistentVector.EMPTY]);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"remove-note","remove-note",-1957283966),day8.re_frame.undo.undoable.call(null,"remove note"),(function (db,p__16708){
var vec__16709 = p__16708;
var _ = cljs.core.nth.call(null,vec__16709,(0),null);
var time = cljs.core.nth.call(null,vec__16709,(1),null);
var pitch = cljs.core.nth.call(null,vec__16709,(2),null);
return cljs.core.update.call(null,db,new cljs.core.Keyword(null,"notes","notes",-1039600523),((function (vec__16709,_,time,pitch){
return (function (note){
return cljs.core.remove.call(null,((function (vec__16709,_,time,pitch){
return (function (p1__16707_SHARP_){
return ((cljs.core._EQ_.call(null,time,new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(p1__16707_SHARP_))) && (cljs.core._EQ_.call(null,pitch,new cljs.core.Keyword(null,"pitch","pitch",1495126700).cljs$core$IFn$_invoke$arity$1(p1__16707_SHARP_))));
});})(vec__16709,_,time,pitch))
,note);
});})(vec__16709,_,time,pitch))
);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"file-upload","file-upload",-1929678130),(function (db,p__16712){
var vec__16713 = p__16712;
var _ = cljs.core.nth.call(null,vec__16713,(0),null);
var file = cljs.core.nth.call(null,vec__16713,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"file-upload","file-upload",-1929678130),file);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"load-samples","load-samples",-40877701),(function (db,p__16716){
var vec__16717 = p__16716;
var _ = cljs.core.nth.call(null,vec__16717,(0),null);
var samples = cljs.core.nth.call(null,vec__16717,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"samples","samples",635504833),samples);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-time-signature","set-time-signature",-674659703),(function (db,p__16720){
var vec__16721 = p__16720;
var _ = cljs.core.nth.call(null,vec__16721,(0),null);
var beats_per_measure = cljs.core.nth.call(null,vec__16721,(1),null);
return cljs.core.update.call(null,db,new cljs.core.Keyword(null,"time-signature","time-signature",-1730387952),beats_per_measure);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-notes","set-notes",-1718182261),(function (db,p__16724){
var vec__16725 = p__16724;
var _ = cljs.core.nth.call(null,vec__16725,(0),null);
var notes = cljs.core.nth.call(null,vec__16725,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"notes","notes",-1039600523),notes);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"timer","timer",-1266967739),(function (db,p__16728){
var vec__16729 = p__16728;
var _ = cljs.core.nth.call(null,vec__16729,(0),null);
var new_time = cljs.core.nth.call(null,vec__16729,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"time","time",1385887882),new_time);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"play-on","play-on",-1655917734),(function (db,p__16732){
var vec__16733 = p__16732;
var _ = cljs.core.nth.call(null,vec__16733,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__16733,(1),null);
mecca.music.play_song_BANG_.call(null);

return cljs.core.assoc.call(null,cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"play-start","play-start",-898241782),cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"audio-context","audio-context",1642559898)], null))).currentTime),new cljs.core.Keyword(null,"playing?","playing?",-1884542863),true);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"sharp-on","sharp-on",-1157509082),(function (db,p__16736){
var vec__16737 = p__16736;
var _ = cljs.core.nth.call(null,vec__16737,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__16737,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"sharp?","sharp?",411396133),true);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"sharp-toggle","sharp-toggle",1733862740),(function (db,p__16740){
var vec__16741 = p__16740;
var _ = cljs.core.nth.call(null,vec__16741,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__16741,(1),null);
return cljs.core.update.call(null,db,new cljs.core.Keyword(null,"sharp?","sharp?",411396133),cljs.core.not);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"eraser-toggle","eraser-toggle",360211261),(function (db,p__16744){
var vec__16745 = p__16744;
var _ = cljs.core.nth.call(null,vec__16745,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__16745,(1),null);
return cljs.core.update.call(null,db,new cljs.core.Keyword(null,"eraser?","eraser?",-561181785),cljs.core.not);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"sharp-off","sharp-off",2041506931),(function (db,p__16748){
var vec__16749 = p__16748;
var _ = cljs.core.nth.call(null,vec__16749,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__16749,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"sharp?","sharp?",411396133),false);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),(function (db,p__16752){
var vec__16753 = p__16752;
var _ = cljs.core.nth.call(null,vec__16753,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__16753,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"playing?","playing?",-1884542863),false);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"stop","stop",-2140911342),(function (db,p__16756){
var vec__16757 = p__16756;
var _ = cljs.core.nth.call(null,vec__16757,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__16757,(1),null);
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reset-editor","reset-editor",1401688585)], null));

return cljs.core.assoc.call(null,cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"playing?","playing?",-1884542863),false),new cljs.core.Keyword(null,"current-position","current-position",2031348254),(0));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"update-focus-note","update-focus-note",-40352556),(function (db,p__16760){
var vec__16761 = p__16760;
var _ = cljs.core.nth.call(null,vec__16761,(0),null);
var pos = cljs.core.nth.call(null,vec__16761,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"focused-note-pos","focused-note-pos",-1443473576),pos);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"select-instrument","select-instrument",75005084),(function (db,p__16764){
var vec__16765 = p__16764;
var _ = cljs.core.nth.call(null,vec__16765,(0),null);
var instrument = cljs.core.nth.call(null,vec__16765,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"instrument","instrument",-960698844),instrument);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"play-off","play-off",2116693509),(function (db,p__16768){
var vec__16769 = p__16768;
var _ = cljs.core.nth.call(null,vec__16769,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__16769,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"playing?","playing?",-1884542863),false);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"advance-position","advance-position",-23796893),(function (db,p__16774){
var vec__16775 = p__16774;
var _ = cljs.core.nth.call(null,vec__16775,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__16775,(1),null);
var notes = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"notes","notes",-1039600523)], null));
var beat = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-position","current-position",2031348254)], null));
var to_play = cljs.core.filter.call(null,((function (notes,beat,vec__16775,_,___$1){
return (function (p1__16772_SHARP_){
return cljs.core._EQ_.call(null,((1) + cljs.core.deref.call(null,beat)),new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(p1__16772_SHARP_));
});})(notes,beat,vec__16775,_,___$1))
,cljs.core.deref.call(null,notes));
if(((4) < cljs.core.deref.call(null,beat))){
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"advance-editor","advance-editor",-224480492),0.5], null));
} else {
}

return cljs.core.update.call(null,db,new cljs.core.Keyword(null,"current-position","current-position",2031348254),((function (notes,beat,to_play,vec__16775,_,___$1){
return (function (p1__16773_SHARP_){
return (0.5 + p1__16773_SHARP_);
});})(notes,beat,to_play,vec__16775,_,___$1))
);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"advance-editor","advance-editor",-224480492),(function (db,p__16779){
var vec__16780 = p__16779;
var _ = cljs.core.nth.call(null,vec__16780,(0),null);
var beats = cljs.core.nth.call(null,vec__16780,(1),null);
return cljs.core.update.call(null,db,new cljs.core.Keyword(null,"editor-beat-start","editor-beat-start",-334408415),((function (vec__16780,_,beats){
return (function (p1__16778_SHARP_){
return (beats + p1__16778_SHARP_);
});})(vec__16780,_,beats))
);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"move-mario","move-mario",-317739908),(function (db,p__16784){
var vec__16785 = p__16784;
var _ = cljs.core.nth.call(null,vec__16785,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__16785,(1),null);
return cljs.core.update.call(null,db,new cljs.core.Keyword(null,"mario-x","mario-x",1743249500),((function (vec__16785,_,___$1){
return (function (p1__16783_SHARP_){
return ((10) + p1__16783_SHARP_);
});})(vec__16785,_,___$1))
);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"reset-editor","reset-editor",1401688585),(function (db,p__16788){
var vec__16789 = p__16788;
var _ = cljs.core.nth.call(null,vec__16789,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__16789,(1),null);
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"editor-beat-start","editor-beat-start",-334408415),(1)),new cljs.core.Keyword(null,"mario-x","mario-x",1743249500),(16));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"retract-editor","retract-editor",777879449),(function (db,p__16793){
var vec__16794 = p__16793;
var _ = cljs.core.nth.call(null,vec__16794,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__16794,(1),null);
return cljs.core.update.call(null,db,new cljs.core.Keyword(null,"editor-beat-start","editor-beat-start",-334408415),((function (vec__16794,_,___$1){
return (function (p1__16792_SHARP_){
return (p1__16792_SHARP_ - 0.5);
});})(vec__16794,_,___$1))
);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"reset-position","reset-position",-804750860),(function (db,p__16797){
var vec__16798 = p__16797;
var _ = cljs.core.nth.call(null,vec__16798,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__16798,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"current-position","current-position",2031348254),(0));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-tempo","set-tempo",59409059),(function (db,p__16801){
var vec__16802 = p__16801;
var _ = cljs.core.nth.call(null,vec__16802,(0),null);
var tempo = cljs.core.nth.call(null,vec__16802,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"tempo","tempo",-1555208453),tempo);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"inc-tempo","inc-tempo",-1684511808),(function (db,p__16806){
var vec__16807 = p__16806;
var _ = cljs.core.nth.call(null,vec__16807,(0),null);
var tempo = cljs.core.nth.call(null,vec__16807,(1),null);
return cljs.core.update.call(null,db,new cljs.core.Keyword(null,"tempo","tempo",-1555208453),((function (vec__16807,_,tempo){
return (function (p1__16805_SHARP_){
return ((8) + p1__16805_SHARP_);
});})(vec__16807,_,tempo))
);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"dec-tempo","dec-tempo",375495204),(function (db,p__16811){
var vec__16812 = p__16811;
var _ = cljs.core.nth.call(null,vec__16812,(0),null);
var tempo = cljs.core.nth.call(null,vec__16812,(1),null);
return cljs.core.update.call(null,db,new cljs.core.Keyword(null,"tempo","tempo",-1555208453),((function (vec__16812,_,tempo){
return (function (p1__16810_SHARP_){
return (p1__16810_SHARP_ - (8));
});})(vec__16812,_,tempo))
);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-key","set-key",-48186176),(function (db,p__16815){
var vec__16816 = p__16815;
var _ = cljs.core.nth.call(null,vec__16816,(0),null);
var key = cljs.core.nth.call(null,vec__16816,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"key","key",-1516042587),key);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"repeat-toggle","repeat-toggle",-221009908),(function (db,p__16819){
var vec__16820 = p__16819;
var _ = cljs.core.nth.call(null,vec__16820,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__16820,(1),null);
return cljs.core.update.call(null,db,new cljs.core.Keyword(null,"repeat?","repeat?",1245600428),cljs.core.not);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-loop-end","set-loop-end",2098658713),(function (db,p__16823){
var vec__16824 = p__16823;
var _ = cljs.core.nth.call(null,vec__16824,(0),null);
var x = cljs.core.nth.call(null,vec__16824,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"loop-end","loop-end",-88908047),x);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"next-note","next-note",-239967297),(function (db,p__16828){
var vec__16829 = p__16828;
var _ = cljs.core.nth.call(null,vec__16829,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__16829,(1),null);
var tempo = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tempo","tempo",-1555208453)], null));
var seconds_per_beat = (60.0 / cljs.core.deref.call(null,tempo));
return cljs.core.update.call(null,cljs.core.update.call(null,db,new cljs.core.Keyword(null,"current-note","current-note",-1767945909),cljs.core.inc),new cljs.core.Keyword(null,"next-note-time","next-note-time",-1117617128),((function (tempo,seconds_per_beat,vec__16829,_,___$1){
return (function (p1__16827_SHARP_){
return (p1__16827_SHARP_ + seconds_per_beat);
});})(tempo,seconds_per_beat,vec__16829,_,___$1))
);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"schedule-note","schedule-note",2064270583),(function (db,p__16833){
var vec__16834 = p__16833;
var _ = cljs.core.nth.call(null,vec__16834,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__16834,(1),null);
var notes = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"notes","notes",-1039600523)], null));
var beat = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-note","current-note",-1767945909)], null));
var to_play = cljs.core.filter.call(null,((function (notes,beat,vec__16834,_,___$1){
return (function (p1__16832_SHARP_){
return cljs.core._EQ_.call(null,((1) + cljs.core.deref.call(null,beat)),new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(p1__16832_SHARP_));
});})(notes,beat,vec__16834,_,___$1))
,cljs.core.deref.call(null,notes));
return cljs.core.update.call(null,db,new cljs.core.Keyword(null,"notes-in-queue","notes-in-queue",-193583681),cljs.core.into,to_play);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"add-note","add-note",-926319985),day8.re_frame.undo.undoable.call(null,"add note"),(function (db,p__16837){
var vec__16838 = p__16837;
var _ = cljs.core.nth.call(null,vec__16838,(0),null);
var instrument = cljs.core.nth.call(null,vec__16838,(1),null);
var time = cljs.core.nth.call(null,vec__16838,(2),null);
var pitch = cljs.core.nth.call(null,vec__16838,(3),null);
if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"audio-context","audio-context",1642559898)], null))).state,"suspended")){
cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"audio-context","audio-context",1642559898)], null))).resume();
} else {
}

mecca.music.play_sample.call(null,instrument,(cljs.core.truth_(cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sharp?","sharp?",411396133)], null))))?(pitch + (1)):pitch));

return cljs.core.update.call(null,db,new cljs.core.Keyword(null,"notes","notes",-1039600523),cljs.core.conj,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"time","time",1385887882),time,new cljs.core.Keyword(null,"instrument","instrument",-960698844),instrument,new cljs.core.Keyword(null,"pitch","pitch",1495126700),(cljs.core.truth_(cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sharp?","sharp?",411396133)], null))))?(pitch + (1)):pitch)], null));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"tick!","tick!",68058958),(function (db,p__16844){
var vec__16845 = p__16844;
var _ = cljs.core.nth.call(null,vec__16845,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__16845,(1),null);
if(cljs.core.truth_((function (){var and__3938__auto__ = cljs.core.not_EQ_.call(null,(0),cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mario-jump","mario-jump",253829289)], null))));
if(and__3938__auto__){
return cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"playing?","playing?",-1884542863)], null)));
} else {
return and__3938__auto__;
}
})())){
return cljs.core.assoc.call(null,cljs.core.update.call(null,cljs.core.update.call(null,db,new cljs.core.Keyword(null,"mario-run","mario-run",-1086168628),((function (vec__16845,_,___$1){
return (function (p1__16841_SHARP_){
if(cljs.core._EQ_.call(null,p1__16841_SHARP_,(12))){
return (0);
} else {
return (p1__16841_SHARP_ + (1));
}
});})(vec__16845,_,___$1))
),new cljs.core.Keyword(null,"mario-jump","mario-jump",253829289),((function (vec__16845,_,___$1){
return (function (p1__16842_SHARP_){
if(cljs.core._EQ_.call(null,(8),p1__16842_SHARP_)){
return (0);
} else {
return (p1__16842_SHARP_ + (1));
}
});})(vec__16845,_,___$1))
),new cljs.core.Keyword(null,"mario-y","mario-y",1718385780),((61) - cljs.core.get.call(null,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(5),(10),(15),(25),(30),(25),(15),(5)], null),cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mario-jump","mario-jump",253829289)], null))))));
} else {
return cljs.core.update.call(null,db,new cljs.core.Keyword(null,"mario-run","mario-run",-1086168628),((function (vec__16845,_,___$1){
return (function (p1__16843_SHARP_){
if(cljs.core._EQ_.call(null,p1__16843_SHARP_,(12))){
return (0);
} else {
return (p1__16843_SHARP_ + (1));
}
});})(vec__16845,_,___$1))
);
}
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"jump!","jump!",-1168155200),(function (db,p__16848){
var vec__16849 = p__16848;
var _ = cljs.core.nth.call(null,vec__16849,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__16849,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"mario-jump","mario-jump",253829289),(1));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"submit-xml","submit-xml",-1403162082),(function (db,p__16852){
var vec__16853 = p__16852;
var _ = cljs.core.nth.call(null,vec__16853,(0),null);
var xml = cljs.core.nth.call(null,vec__16853,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"xml","xml",-1170142052),xml);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"load-song","load-song",17308276),(function (db,p__16856){
var vec__16857 = p__16856;
var _ = cljs.core.nth.call(null,vec__16857,(0),null);
var notes = cljs.core.nth.call(null,vec__16857,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"notes","notes",-1039600523),notes);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"load-megaman","load-megaman",59599960),(function (db,p__16860){
var vec__16861 = p__16860;
var _ = cljs.core.nth.call(null,vec__16861,(0),null);
var notes = cljs.core.nth.call(null,vec__16861,(1),null);
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-tempo","set-tempo",59409059),(260)], null));

return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"notes","notes",-1039600523),mecca.songs.megaman.megaman);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"load-castle","load-castle",-840389601),(function (db,p__16864){
var vec__16865 = p__16864;
var _ = cljs.core.nth.call(null,vec__16865,(0),null);
var notes = cljs.core.nth.call(null,vec__16865,(1),null);
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-tempo","set-tempo",59409059),(150)], null));

return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"notes","notes",-1039600523),mecca.songs.city.city);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"load-zelda","load-zelda",-1565536165),(function (db,p__16868){
var vec__16869 = p__16868;
var _ = cljs.core.nth.call(null,vec__16869,(0),null);
var notes = cljs.core.nth.call(null,vec__16869,(1),null);
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-tempo","set-tempo",59409059),(390)], null));

return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"notes","notes",-1039600523),mecca.songs.zelda.zelda);
}));

//# sourceMappingURL=events.js.map
