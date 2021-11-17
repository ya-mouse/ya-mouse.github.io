if (self.CavalryLogger) { CavalryLogger.start_js(["K0TTlYc"]); }

__d("MBreakupUnfriendFlyoutClickListener",["DOM","MRequest","Stratcom"],(function(a,b,c,d,e,f,g){"use strict";function a(a,b){var e=d("DOM").listen(a,"click",null,function(){new(c("MRequest"))(b).send(),e.remove()});c("Stratcom").listen("m:page:unload",null,function(){c("Stratcom").removeCurrentListener(),e&&e.remove()})}g.bindListener=a}),98);
__d("MProfileFriendingToggleButton",["DOM","MFriendingActionError","Stratcom","destroyOnUnload","ge"],(function(a,b,c,d,e,f,g){a=function(){function a(a,b,e){var f=this;this.$4=function(){f.$1&&d("DOM").hide(f.$1),f.$2&&d("DOM").show(f.$2),f.$7()};this.$6=function(){f.$2&&d("DOM").hide(f.$2),f.$1&&d("DOM").show(f.$1)};this.$5=function(a){a=a.getData();if(a.userid!==f.$3)return;a.action==="cancel"&&(f.$2&&d("DOM").hide(f.$2),f.$1&&d("DOM").show(f.$1));if(a.error===d("MFriendingActionError").SEND_OUTGOING_REQUEST_ERROR||a.error===d("MFriendingActionError").CONFIRM_INCOMING_REQUEST_ERROR){f.$6();return}if(a.error===d("MFriendingActionError").CANCEL_OUTGOING_REQUEST_ERROR){f.$4();return}};this.$1=a;this.$2=b;this.$3=e;var g=[d("DOM").listen(this.$1,"click",null,this.$4.bind(this)),c("Stratcom").listen("friending_state_change",null,this.$5.bind(this))];this.$2&&g.push(d("DOM").listen(this.$2,"click",null,this.$6.bind(this)));c("destroyOnUnload")(function(){f.$1=null;f.$2=null;while(g.length)g.pop().remove()})}var b=a.prototype;b.$7=function(){var a=c("ge")("pymkMProfile");a&&d("DOM").remove(a)};return a}();g["default"]=a}),98);
__d("MProfileIntroCardLogging",["BanzaiLogger","DOM","MLegacyDataStore","destroyOnUnload"],(function(a,b,c,d,e,f,g){function a(a,b,e,f){var g=d("DOM").listen(a,"click",e,function(a){a=a.getNode(e);a=a?d("MLegacyDataStore").get(a):null;c("BanzaiLogger").log(b,babelHelpers["extends"]({},f,a))});c("destroyOnUnload")(function(){return g.remove()})}g.init=a}),98);
__d("XProfileTilesLogDismissController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/profile/tiles/log/dismiss/",{section_type:{type:"Enum",required:!0,enumType:1}})}),null);
__d("MProfileTileActions",["csx","cx","CSS","DOM","MRequest","XProfileTilesLogDismissController"],(function(a,b,c,d,e,f,g,h,i){function a(a,b){var e=a.querySelector("._lvb");e!==null&&d("DOM").listen(e,"click",null,function(d){c("CSS").addClass(a,"_3n40");d=c("XProfileTilesLogDismissController").getURIBuilder().setEnum("section_type",b);new(c("MRequest"))(d.getURI()).setMethod("POST").send()})}g.addCollapseListeners=a}),98);
__d("MProfileTilesLogging",["BanzaiLogger","DOM","MLegacyDataStore","destroyOnUnload"],(function(a,b,c,d,e,f,g){var h="TimelineExpandedContextLoggerConfig",i="expanded-context-log";function a(a){var b=d("DOM").listen(a,"click",i,function(a){return c("BanzaiLogger").log(h,d("MLegacyDataStore").get(a.getNode(i)))});c("destroyOnUnload")(function(){return b.remove()})}g.init=a}),98);
__d("MTimelineActionBar",["MLegacyDataStore","MParent","MarauderLogger","Stratcom","destroyOnUnload"],(function(a,b,c,d,e,f,g){var h="hq-profile-logging-action-bar-button";a=function(){function a(){var b=c("Stratcom").listen("click",[h],a.$1);c("destroyOnUnload")(function(){return b&&b.remove()})}a.$1=function(a){a=a.getTarget();a=a instanceof Element?d("MParent").bySigil(a,h):null;if(a==null)return;a=d("MLegacyDataStore").get(a);a=a["hq-profile-logging"];d("MarauderLogger").log("profile_high_quality_action",void 0,a)};return a}();g["default"]=a}),98);
__d("MTimelineShareProfile",["fbt","Clipboard","MLegacyDataStore","Stratcom","destroyOnUnload"],(function(a,b,c,d,e,f,g,h){var i="share_profile_link";function a(){var a=c("Stratcom").listen("click",i,function(a){a=d("MLegacyDataStore").get(a.getNode(i));d("Clipboard").isSupported()&&d("Clipboard").copy(a.uri)?prompt(h._(/*FBT_CALL*/"The following link has been copied to your clipboard."/*FBT_CALL*/),a.uri):prompt(h._(/*FBT_CALL*/"Tap and hold the link below to select and copy the address."/*FBT_CALL*/),a.uri)});c("destroyOnUnload")(function(){a.remove()})}g.init=a}),98);
__d("MTimelineUnfriendConfirmation",["fbt","MLegacyDataStore","MRequest","Stratcom","destroyOnUnload"],(function(a,b,c,d,e,f,g,h){var i="unfriend",j;function a(){if(j)return;j=c("Stratcom").listen("click",i,function(a){a=d("MLegacyDataStore").get(a.getNode(i));var b=h._(/*FBT_CALL*/"Are you sure you want to remove {name} as your friend?"/*FBT_CALL*/,[h._param("name",a.shortName)]);confirm(b.toString())&&new(c("MRequest"))(a.unfriendURI).send()});c("destroyOnUnload")(function(){j&&j.remove(),j=null})}g.init=a}),98);
__d("MTimelineUnit",["CSS","EventListener","setTimeoutAcrossTransitions"],(function(a,b,c,d,e,f,g){function a(a,b){c("CSS").conditionClass(a,"deleting",!0);c("setTimeoutAcrossTransitions")(c("CSS").conditionClass.bind(null,a,"deleted",!0),0);if(b)var d=c("EventListener").capture(a,"transitionend",function(){d.remove(),b(a)})}g.hideOffScreen=a}),98);
__d("TimelineFeedTrackingFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f){"use strict";a=b("getFalcoLogPolicy_DO_NOT_USE")("1845977");c=b("FalcoLoggerInternal").create("timeline_feed_tracking",a);e.exports=c}),null);
__d("MTimelineViewportTracking",["cx","CSS","DataAttributeUtils","FBJSON","MEntstreamViewportTracking","StratcomManager","TimelineFeedTrackingFalcoEvent","setTimeout"],(function(a,b,c,d,e,f,g,h){"use strict";a=function(a){babelHelpers.inheritsLoose(b,a);function b(){var b,d;for(var e=arguments.length,f=new Array(e),g=0;g<e;g++)f[g]=arguments[g];return(b=d=a.call.apply(a,[this].concat(f))||this,d.$MTimelineViewportTracking2=function(a){c("CSS").addClass(a,"_1tl-"),c("CSS").removeClass(a,"_1tl_"),c("CSS").removeClass(a,"_1tm0")},b)||babelHelpers.assertThisInitialized(d)}b.init=function(a){d("StratcomManager").enableDispatch(document,"scroll"),new b().init(a)};var e=b.prototype;e.__getStreamRoot=function(){this.$MTimelineViewportTracking1=this.$MTimelineViewportTracking1||document.getElementById("timelineBody")||document.getElementById("root");return this.$MTimelineViewportTracking1};e.getStoryID=function(a){a=c("DataAttributeUtils").getDataFt(a);return!a?null:d("FBJSON").parse(a,f.id).tl_objid};e.sendDataToLog=function(a){c("TimelineFeedTrackingFalcoEvent").log(function(){return{json_data:JSON.stringify(a),log_type:"impression"}})};e.markStoryRead=function(a){c("setTimeout")(this.$MTimelineViewportTracking2.bind(this,a),1e3)};return b}(c("MEntstreamViewportTracking"));g["default"]=a}),98);
__d("MTimelineXFriendingButton",["CSS","DOM","MFriendingActionError","Stratcom","destroyOnUnload","ge"],(function(a,b,c,d,e,f,g){var h,i,j,k;function l(){var a;if(!h)return;a=((a=h.style)==null?void 0:a.display)!=="none";var b=c("ge")("pymkMProfile");c("CSS").conditionShow(h,!a);i&&c("CSS").conditionShow(i,a);b&&d("DOM").remove(b);a||j.hide()}function m(a){c("Stratcom").invoke("m:backnav:invalidate-cached-feed");a=a.getData();if(a.userid!==k)return;(a.error===d("MFriendingActionError").SEND_OUTGOING_REQUEST_ERROR||a.error===d("MFriendingActionError").CANCEL_OUTGOING_REQUEST_ERROR)&&l();a.action==="cancel"&&j.hide()}function a(a,e,f){h=a;i=e.getContext();b=d("DOM").find(e.getRoot(),"*","cancel-request-button");j=e;k=f;var g=[c("Stratcom").listen("friending_state_change",null,m),d("DOM").listen(h,"click",null,l),d("DOM").listen(b,"click",null,l)];c("destroyOnUnload")(function(){h=null;i=null;b=null;i=null;while(g.length)g.pop().remove()})}g.init=a}),98);
__d("MUnitFlyout",["$","CSS","DOM","MActionBubbleHelper","MLegacyDataStore","MParent","MTimelineUnit","Stratcom"],(function(a,b,c,d,e,f,g){var h;function a(a){if(h)return;h=a;var b,e="m-unit-popup-opener",f="hidesUnit",g="deletesUnit",i="reportComponentUnit",j="reportUnit",k="action-title",l="action-subtitle";function m(){var a=d("MParent").bySigil(h.getCausalElement(),e);if(a==null)return;a=d("MLegacyDataStore").get(a);var f=c("$")(a.target);c("CSS").conditionClass(f,"editing",!0);var g=h.getRoot();a=a.editOptions;var i=d("DOM").scry(t,"a");i.forEach(function(a){d("MActionBubbleHelper").toggleActionBubbleItem(a,!1,"MUnitFlyout",e)});for(var j in a)a[j].rel==="dialog"?o(g,j,a[j].uri):n(g,j,a[j].uri),p(g,j,a[j].label,a[j].subtitle,a[j].icon);b=f}function n(a,b,e){a=d("DOM").find(a,"a",b);a.href=e;a.removeAttribute("rel");c("Stratcom").removeSigil(a,"dialog-link");d("MActionBubbleHelper").toggleActionBubbleItem(a,!!e,"MUnitFlyout",b)}function o(a,b,e){a=d("DOM").find(a,"a",b);var f=d("MLegacyDataStore").get(a);f.dialogURI=e;a.setAttribute("rel","dialog");c("Stratcom").addSigil(a,"dialog-link");d("MActionBubbleHelper").toggleActionBubbleItem(a,!!e,"MUnitFlyout",b)}function p(a,b,c,e,f){a=d("DOM").find(a,"a",b);if(c){b=d("DOM").find(a,"div",k);b&&(b.textContent=c)}if(e){b=d("DOM").find(a,"div",l);b&&(b.textContent=e)}if(f){c=d("DOM").find(a,"i");c&&d("DOM").replace(c,f)}}function q(){b&&(c("CSS").conditionClass(b,"editing",!1),b=null)}function r(a){var e=a.getNode(f)||a.getNode(g);if(e){var k=b;if(k&&c("Stratcom").hasSigil(k,i)){e=d("MParent").bySigil(k,j);var l=d("DOM").scry(e,"*",i);l.length<2&&(k=e)}l=a.getNode(g)?function(){k&&d("DOM").remove(k)}:null;k&&d("MTimelineUnit").hideOffScreen(k,l)}h.hide()}function s(){h&&h.updateIfShown()}var t=a.getRoot(),u=[c("Stratcom").listen("m:page:unload",null,function(){while(u&&u.length>0)u.pop().remove();h=null;b=null;t=null}),c("Stratcom").listen(["m-timeline-rebalance","m-timeline-section-loader:onshow"],null,s),a.addListener("beforeshow",m),a.addListener("hide",q),d("DOM").listen(t,"click",null,r)]}g.main=a}),98);
__d("MFlyoutAutoHideAfter",["clearTimeout","setTimeout"],(function(a,b,c,d,e,f){a=function(){"use strict";function a(a){this.$1=null,this.$2=a,this.$3=null}var c=a.prototype;c.enable=function(){this.$1=[this.$2.addListener("show",this.$4.bind(this)),this.$2.addListener("hide",this.$5.bind(this))],this.$2.isShown()&&this.$4()};c.disable=function(){this.$5();while(this.$1.length)this.$1.pop().remove();this.$1=null;this.$2=null};c.$5=function(){this.$3&&b("clearTimeout")(this.$3),this.$3=null};c.$4=function(){this.$5(),this.$3=b("setTimeout")(this.$2.hide.bind(this.$2),this.$2.config.auto_hide_after*1e3)};return a}();e.exports=a}),null);