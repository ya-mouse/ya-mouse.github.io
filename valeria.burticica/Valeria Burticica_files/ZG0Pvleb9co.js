if (self.CavalryLogger) { CavalryLogger.start_js(["KqnNJyP"]); }

__d("MTouchChannelManagerBootloader",["Bootloader","Stratcom","onAfterDisplay","once"],(function(a,b,c,d,e,f,g){"use strict";function a(){c("Stratcom").listen("m:page:unload",null,function(){c("Stratcom").removeCurrentListener(),h()}),c("onAfterDisplay")(h)}var h=c("once")(function(){c("Bootloader").loadModules(["MTouchChannelManager"],function(a){a.initialize(!0)},"MTouchChannelManagerBootloader")});g.init=a}),98);
__d("MGenericJewel",["CSS","Event","MHistory","MJewels","MParent","MViewport","ScriptPath","Stratcom","SubscriptionsHandler"],(function(a,b,c,d,e,f){var g={};function a(a,c,d,e){if(g[a])return;var f=new(b("SubscriptionsHandler"))();g[a]=f;var h,i;f.addSubscriptions(b("Event").listen(c,"click",function(c){b("MParent").bySigil(c.target,"icon")&&(c.preventDefault(),!h?(b("MHistory").pushSoftState(a),b("Stratcom").invoke("MGenericJewel::clicked",a,{open:!0})):a===b("MJewels").SEARCH&&b("Stratcom").invoke("m:chrome:tab:show",a,{open:!0}),b("ScriptPath").set("topbar_"+a))}),b("Stratcom").listen("m:history:change",null,function(e){var f=e.getData().soft===a;!f&&(h||i)&&b("Stratcom").invoke("m:chrome:tab:hide",a);b("CSS").conditionClass(c,"popoverOpen",f);d&&!j&&(b("CSS").conditionClass(d,"popover_hidden",!f),b("CSS").conditionClass(d,"popover_visible",f),f&&(d.style.minHeight=b("MViewport").getUseableHeight()+"px"));f&&!h&&(b("Stratcom").invoke("m:chrome:tab:show",a),b("CSS").addClass(c,"noCount"),b("CSS").removeClass(c,"hasCount"));i=e.getData().soft===void 0;h=f}));var j=!1;a===b("MJewels").SEARCH&&d&&f.addSubscriptions(b("Stratcom").listen("m:graph-search:rendered",null,function(){b("CSS").conditionClass(d,"popover_hidden",!0),j=!0}));e&&f.addSubscriptions(b("Stratcom").listen("m:page:unload",null,function(){f.release(),g[a]=void 0}))}e.exports={init:a}}),null);
__d("MJewelSet",["MViewport","Popover","ScriptPath","Stratcom"],(function(a,b,c,d,e,f){var g={_haveInitializedJewels:!1,init:function(){if(g._haveInitializedJewels)return;g._haveInitializedJewels=!0;b("Stratcom").listen("m:viewport:orientation-change",null,g._onOrientationChange);b("Stratcom").listen("m:jewel:flyout:open",null,g._onJewelOpen)},_onJewelOpen:function(a){a=a.getData();b("ScriptPath").set("topbar_"+a.jewel)},_onOrientationChange:function(){setTimeout(function(){var a=b("Popover")._activePopover;if(!a)return;b("MViewport").getHeight()+"px"!==a.flyout.style.minHeight&&a.refreshConstraints()},800)}};e.exports=g}),null);
__d("MJewelsTabability",["DOM","Stratcom"],(function(a,b,c,d,e,f){"use strict";var g={_initialized:!1,initAllJewels:function(a){if(g._initialized)return;g._initialized=!0;a=b("DOM").scry(a.bluebar,"a","jewel-link");for(var c=0;c<a.length;++c)g.listen(a[c],!0)},listen:function(a,c,d){var e=c?"m:backnav:show-jewels":"m:backnav:show-backbar";c=c?"m:backnav:show-backbar":"m:backnav:show-jewels";b("Stratcom").listen(e,null,function(){d!==void 0&&d!==null&&d!==""?g.setTabIndex(a,d):g.removeTabIndex(a)});b("Stratcom").listen(c,null,function(){g.setTabIndex(a,"-1")})},setTabIndex:function(a,b){a.setAttribute("tabindex",b),b==="-1"&&a.setAttribute("aria-hidden","true")},removeTabIndex:function(a){a.removeAttribute("tabindex"),a.removeAttribute("aria-hidden")}};e.exports=g}),null);
__d("MComposerJewel",["Bootloader","Event","XOcelotComposerAsyncLoaderController"],(function(a,b,c,d,e,f,g){var h=!1;function a(a){if(h)return;h=!0;a=a.jewel;c("Event").listen(a,"click",function(){c("Bootloader").loadModules(["CurrentUser","MComposerEntry"],function(a,b){a=c("XOcelotComposerAsyncLoaderController").getURIBuilder().setEnum("publisher","feed").setFBID("target_id",String(a.getID())).getURI();b.invokeOcelot(a,!0)},"MComposerJewel")})}g.init=a}),98);
__d("XFeedNewStoriesBadgeController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/feed/badge/",{})}),null);
__d("MOutOfFeedNewStoriesPolling",["Arbiter","MHome","MRequest","Stratcom","TimeSlice","XFeedNewStoriesBadgeController","setTimeoutAcrossTransitions"],(function(a,b,c,d,e,f,g){"use strict";var h=null,i=0,j=!1,k=new(c("Arbiter"))(),l=9,m=15e3;function n(){if(i>l)return;clearTimeout(h);h=c("setTimeoutAcrossTransitions")(c("TimeSlice").guard(function(){o()},"Feed jewel count polling",{propagationType:c("TimeSlice").PropagationType.ORPHAN}),m)}function o(){var a=c("XFeedNewStoriesBadgeController").getURIBuilder().getURI();a=new(c("MRequest"))(a);a.listen("done",function(a){q(a.payload.count)});a.listen("finally",function(){a=null,n()});a.send()}function p(){q(0),clearTimeout(h),h=null}function q(a){i=a,k.inform("MOutOfFeedNewStoriesPolling/updateCount",{count:a},"state")}function a(a){r();return k.subscribe("MOutOfFeedNewStoriesPolling/updateCount",a)}function r(){if(j)return;j=!0;c("Stratcom").listen("m:homepage:load",null,function(){p()});c("Stratcom").listen("m:homepage:unload",null,function(){n()});d("MHome").isHome(location.href)||n()}g.MAX_COUNT=l;g.addPollingListener=a}),98);
__d("MFeedJewel",["$","CSS","DOM","MHistory","MJewel","MJewelLinkFetcher","MJewels","MOutOfFeedNewStoriesPolling","MPageController","MURI","Stratcom","SubscriptionsHandler","formatNumber"],(function(a,b,c,d,e,f){var g,h,i,j;function k(a){b("CSS").conditionClass(j,"popoverOpen",!0)}function l(a){b("CSS").conditionClass(j,"popoverOpen",!1)}function m(){if(i)return;i=new(b("SubscriptionsHandler"))();i.addSubscriptions(b("Stratcom").listen("m:history:change",null,o))}function n(){i&&i.release(),i=null}function o(a){a=a.getData().soft;for(var c=0,d=Object.keys(b("MJewels"));c<d.length;c++)if(b("MJewels")[d[c]]===a){l();return}k()}function p(a){return new(b("MURI"))(a).normalize().toString()}function q(a){var c=b("MJewelLinkFetcher").get("feed");if(!c)return;c=p(c);var d=p(b("MHistory").getPath());c===d&&(a.kill(),b("MPageController").reload())}function r(a){var c=b("formatNumber").withMaxLimit(a,b("MOutOfFeedNewStoriesPolling").MAX_COUNT).toString();b("DOM").setContent(g,c);b("CSS").conditionClass(j,"noCount",a===0);b("CSS").conditionClass(j,"hasCount",a>0);b("CSS").conditionClass(j,"largeCount",c.length>1);b("Stratcom").invoke("m:feed:jewel:badge-count-change",null,{jewel:j,count:a})}function s(a){b("Stratcom").listen("m:homepage:load",null,function(){k(),m()}),b("Stratcom").listen("m:homepage:unload",null,function(){l(),n()}),a&&m()}function a(a,c,d){if(h)return;h=!0;j=a;g=b("DOM").find(j,"span","count");s(c);b("DOM").listen(b("$")(b("MJewel").JEWEL_NAV_NODE_ID),"click","feed",q);g&&b("MOutOfFeedNewStoriesPolling").addPollingListener(function(a,b){return r(b.count)})}e.exports={init:a}}),null);
__d("MarketplaceClickFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f){"use strict";a=b("getFalcoLogPolicy_DO_NOT_USE")("1743922");c=b("FalcoLoggerInternal").create("marketplace_click",a);e.exports=c}),null);
__d("MarketplaceImpressionFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f){"use strict";a=b("getFalcoLogPolicy_DO_NOT_USE")("1743925");c=b("FalcoLoggerInternal").create("marketplace_impression",a);e.exports=c}),null);
__d("XMarketplaceHomePageController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/marketplace/{?*rest}/",{rest:{type:"String"},ref:{type:"String"},ref_object_id:{type:"Int"},launch_creation:{type:"Bool",defaultValue:!1},query:{type:"String"},seller_profile:{type:"Int"},sold_by:{type:"String"},serp_query:{type:"String"},latitude:{type:"Float"},longitude:{type:"Float"},for_sale_item_id:{type:"FBID"}})}),null);
__d("XMarketplaceNotificationBadgeAsyncController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/marketplace/badge/",{})}),null);
__d("MMarketplaceTabJewel",["CSS","DOM","MJewels","MPageController","MRequest","MarketplaceClickFalcoEvent","MarketplaceImpressionFalcoEvent","Stratcom","TimeSlice","XMarketplaceHomePageController","XMarketplaceNotificationBadgeAsyncController","formatNumber"],(function(a,b,c,d,e,f){var g,h=0,i,j,k,l=9,m=12e4;function n(){b("CSS").conditionClass(i,"popoverOpen",!0)}function o(){if(j)return;j=b("Stratcom").listen("m:history:change",null,q)}function p(){h=0,s(h),clearTimeout(k),k=null}function q(a){a=a.getData().soft;for(var c=0,d=Object.keys(b("MJewels"));c<d.length;c++)if(b("MJewels")[d[c]]===a){t();return}n()}function r(){if(h>l&&k!==null)return;clearTimeout(k);k=setTimeout(b("TimeSlice").guard(v,"Marketplace jewel count polling",{propagationType:b("TimeSlice").PropagationType.ORPHAN}),m)}function s(a){b("DOM").setContent(g,b("formatNumber").withMaxLimit(a,l)),b("CSS").conditionClass(i,"noCount",a===0),b("CSS").conditionClass(i,"hasCount",a>0)}function t(){b("CSS").conditionClass(i,"popoverOpen",!1)}function u(){j&&(j.remove(),j=null)}function v(){var c=b("XMarketplaceNotificationBadgeAsyncController").getURIBuilder();a=new(b("MRequest"))(c.getURI().toString());a.listen("done",function(a){h=((a=a.payload)==null?void 0:a.count)||0;s(h)});a.listen("finally",function(){a=null,r()});a.send()}function c(a,c){i=a;g=b("DOM").find(i,"span","count");b("Stratcom").listen("m:marketplacetab:load",null,function(){n(),o(),g&&p()});b("Stratcom").listen("m:marketplacetab:unload",null,function(){t(),u(),g&&r()});a=b("XMarketplaceHomePageController").getURIBuilder().getURI();var d=b("MPageController").getRenderedPath();d&&d.startsWith(a.getPath())?(n(),o(),g&&p()):g&&(v(),r());d=c.jewelSigil;b("Stratcom").listen("click",d,function(){b("MarketplaceClickFalcoEvent").log(function(){return{uiComponent:"app_tab",surface:"app_tab"}})});b("MarketplaceImpressionFalcoEvent").log(function(){return{uiComponent:"app_tab",surface:"app_tab"}})}e.exports={init:c}}),null);
__d("MJewelLite",["invariant","$","CSS","DOM","EventEmitter","MHistory","MLinkHack","MURI","Stratcom","intlNumUtils"],(function(a,b,c,d,e,f,g,h){"use strict";a=function(a){babelHelpers.inheritsLoose(b,a);function b(b,e){var f;f=a.call(this)||this;f.$MJewelLite1=b;var g=c("$")("header");f.$MJewelLite2=d("DOM").find(g,"div",b);f.$MJewelLite3=d("DOM").find(f.$MJewelLite2,"span","count");f.$MJewelLite4=d("DOM").find(f.$MJewelLite2,"a","icon");f.$MJewelLite6=e.jewelActivePaths;f.$MJewelLite7=e.jewelActiveRegexes;f.$MJewelLite5=e.initialCount;f.$MJewelLite8=e.keepBadgeOnActive||!1;return f}var e=b.prototype;e.init=function(){var a=this;this.$MJewelLite9();this.$MJewelLite10();c("Stratcom").listen("m:history:change",null,function(){a.$MJewelLite10()});d("DOM").listen(this.$MJewelLite2,"click",null,function(){return a.$MJewelLite11()})};e.isActive=function(){return c("CSS").hasClass(this.$MJewelLite2,"popoverOpen")};e.getBadgeCount=function(){return this.$MJewelLite5};e.setBadgeCount=function(a,b){b===void 0&&(b=!1);if(this.$MJewelLite5===a||a<0)return;if(this.isActive()&&!b)return;b=this.$MJewelLite5;this.$MJewelLite5=a;this.$MJewelLite9();this.emit("badge-updated",{previousBadgeCount:b,newBadgeCount:a})};e.$MJewelLite9=function(){d("DOM").setContent(this.$MJewelLite3,d("intlNumUtils").formatNumberWithThousandDelimiters(this.$MJewelLite5)),c("CSS").conditionClass(this.$MJewelLite2,"noCount",!this.$MJewelLite5),c("CSS").conditionClass(this.$MJewelLite2,"hasCount",this.$MJewelLite5>0)};e.$MJewelLite10=function(){var a=this.isActive(),b=!c("MHistory").hasSoftState()&&this.$MJewelLite12();c("CSS").conditionClass(this.$MJewelLite2,"popoverOpen",b);!a&&b&&this.$MJewelLite13()};e.$MJewelLite12=function(){var a=new(c("MURI"))(c("MHistory").getPath()).getPath();if(this.$MJewelLite7!=null)return this.$MJewelLite7.some(function(b){return new RegExp(b).test(a)});else return this.$MJewelLite6.includes(a)};e.$MJewelLite13=function(){this.$MJewelLite8||this.setBadgeCount(0,!0)};e.$MJewelLite11=function(){this.emit("jewel-click")};e.getLink=function(){var a=d("MLinkHack").getHref(this.$MJewelLite4);a!=null||h(0,13524,this.$MJewelLite1);return new(c("MURI"))(a)};e.getSigil=function(){return this.$MJewelLite1};return b}(c("EventEmitter"));g["default"]=a}),98);
__d("MJewelLitePrefetcher",["MPageCache","MPageFetcher","onAfterTTI"],(function(a,b,c,d,e,f,g){"use strict";function h(a,b){a=a.getLink().toString();b&&c("MPageCache").removeCachedPage(a);d("MPageFetcher").prefetch(a)}function a(a){a.addListener("badge-updated",function(b){b=b.previousBadgeCount<b.newBadgeCount;b&&h(a,!0)})}function b(a){c("onAfterTTI")(function(){return h(a,!1)})}g.prefetchOnBadgeUpdate=a;g.prefetchOnStart=b}),98);
__d("MJewelSetLite",["MJewelLite","MJewelLitePrefetcher"],(function(a,b,c,d,e,f,g){"use strict";var h={};function a(a,b){if(h[a])return;var e=new(c("MJewelLite"))(a,b);e.init();h[a]=e;b.prefetchOnStart===!0&&d("MJewelLitePrefetcher").prefetchOnStart(e);b.prefetchOnBadgeUpdate===!0&&d("MJewelLitePrefetcher").prefetchOnBadgeUpdate(e)}function b(a){return h[a]}g.initJewel=a;g.getJewel=b}),98);
__d("MFriendingJewelChannelUpdates",["ChannelEventType","MJewelSetLite","MJewels","MTouchChannelManagerBootloader","Stratcom"],(function(a,b,c,d,e,f,g){"use strict";var h=!1;function a(){if(h)return;h=!0;d("MTouchChannelManagerBootloader").init();c("Stratcom").listen(d("ChannelEventType").FRIEND_REQUESTS_COUNT,null,function(a){a=a.getData();var b=a.num_unseen;a=a.num_friend_confirmed_unseen;if(b==null||a==null)return;b=b+a;a=d("MJewelSetLite").getJewel(d("MJewels").REQUESTS);a.setBadgeCount(b)})}g.start=a}),98);
__d("MMessagesJewelChannelUpdates",["ChannelEventType","MJewelSetLite","MJewels","MTouchChannelManagerBootloader","Stratcom"],(function(a,b,c,d,e,f,g){"use strict";var h=!1;function a(a){if(h)return;h=!0;d("MTouchChannelManagerBootloader").init();c("Stratcom").listen([d("ChannelEventType").INBOX],null,function(b){b=b.getData();var c=b.unseen;b=b.recent_unread;b=a?b:c;if(b===null||b===void 0)return;c=d("MJewelSetLite").getJewel(d("MJewels").MESSAGES);c.setBadgeCount(b)})}g.start=a}),98);
__d("MNotificationsJewelChannelUpdates",["ChannelEventType","MJewelSetLite","MJewels","MTouchChannelManagerBootloader","Stratcom"],(function(a,b,c,d,e,f,g){"use strict";var h=!1,i=0,j=[];function a(){if(h)return;h=!0;var a=d("MJewelSetLite").getJewel(d("MJewels").NOTIFICATIONS);i=a.getBadgeCount();d("MTouchChannelManagerBootloader").init();c("Stratcom").listen(d("ChannelEventType").NOTIFICATIONS_NEW,null,function(b){b=b.getData();b=b.data;b.alert_id&&!j.includes(b.alert_id)&&j.push(b.alert_id);a.setBadgeCount(j.length+i)});c("Stratcom").listen(d("ChannelEventType").NOTIFICATIONS_SEEN,null,function(b){j=[],i=0,a.setBadgeCount(j.length+i)})}g.start=a}),98);
__d("XBookmarksFlyoutBodyController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/bookmarks/flyout/body/",{id:{type:"String",required:!0}})}),null);
__d("MChromeTabsBootloader",["MJewels","MRequest","Stratcom","XBookmarksFlyoutBodyController"],(function(a,b,c,d,e,f,g){function a(a){c("Stratcom").listen(["m:chrome:tab:show","m:jewel:flyout:open"],d("MJewels").BOOKMARKS,function(){c("Stratcom").removeCurrentListener(),new(c("MRequest"))(c("XBookmarksFlyoutBodyController").getURIBuilder().setString("id",a).getURI()).send()})}g.bootloadBookmarks=a}),98);
__d("MTitleListener",["FBLogger","Stratcom"],(function(a,b,c,d,e,f){"use strict";var g=!1,h=null,i="",j=!0;function k(){if(h)return h;var a=document.getElementsByTagName("head");if(!a||!a.length)return null;a=a[0].getElementsByTagName("title");if(!a||!a.length)return null;a=a[0];if(a){a=a.childNodes;a&&a.length&&(h=a[0])}return h}function l(){var a=k();return!a?i:a.nodeValue||i}function m(a){i=a||"";typeof i!=="string"&&(i=String(i));a=k();a&&(a.nodeValue=i);b("Stratcom").invoke("MDocument:title",null,i)}e.exports={getTitle:function(){var a=document.title||i||"";a=typeof a==="string"?a:String(a);return a},getTitleAsString:function(a){a=a===null||a===void 0||typeof a==="object"?this.getTitle():a;a=typeof a==="string"?a:String(a);return a||""},init:function(){if(g)return j;i=document.title||"";var a={get:function(){return l()},set:function(a){m(a)},enumerable:!0};try{Object.defineProperty(document,"title",a),j=!0}catch(a){j=!1}g=!0;return j}}}),null);
__d("MDoubleSizeHeaderController",["cx","CSS","MHistory","Stratcom","setTimeoutAcrossTransitions"],(function(a,b,c,d,e,f,g,h){"use strict";var i=!1,j=null,k=null;function l(a){if(!j||!k)return;var b="_7gxn";a?(c("CSS").addClass(j,b),c("CSS").show(k)):(c("CSS").removeClass(j,b),c("CSS").hide(k))}function m(){l(!1)}function n(){l(!0)}function o(){var a=c("MHistory").getState();a==="search"?m():n()}function p(a){return function(){c("setTimeoutAcrossTransitions")(a,1)}}function a(a){if(i)return;i=!0;j=a.header;k=a.searchbar;c("Stratcom").listen("m:backnav:show-jewels",null,p(o));c("Stratcom").listen("m:backnav:show-backbar",null,p(m))}g.init=a}),98);
__d("MHeaderLogger",["QE2Logger"],(function(a,b,c,d,e,f,g){"use strict";var h="mtouch_header_navigation",i=!1;function a(a){a===void 0&&(a=!1);a&&d("QE2Logger").logExposureForUser(h);if(i)return;i=!0}g.logExposure=a}),98);
__d("MBackToNewsFeed",["JavelinHistory","MHistory","MHome","Stratcom","WebLite"],(function(a,b,c,d,e,f,g){"use strict";var h=!1,i=[];function j(){if(!i||!i.length)return;i.forEach(function(a){a.remove()});i=[]}b=function(){k()};function k(a){a===void 0&&(a=!1);if(a&&h||d("WebLite").hasHybridWebLiteMarker())return;h=!0;if(!l())return;if(c("MHistory").hasSoftState())return;if(history.state&&history.state.addedNewsFeed)return;a=location.href;var b=document.title;document.title="Facebook";window.history.replaceState({},"Facebook",d("MHome").HOME_PATH);window.history.pushState({addedNewsFeed:1},"Current",a);document.title=b}function a(a){j();a=a.pattern;if(a.length){var b=new RegExp(a);i.push(c("Stratcom").listen("history:change",null,function(a){j();a=a.getData();if(!a||!a.path)return;a=a.path;b.test(a)&&k()}),c("Stratcom").listen("history:change-default",null,j),c("Stratcom").listen("m:homepage:load",null,j))}}var l=function(){return c("JavelinHistory").CAN_USE_PUSH_STATE};g.init=b;g.updateHistory=k;g.updateHistoryOnNav=a;g._isBrowserSupported=l}),98);
__d("UnicodeBidiDirection",["unrecoverableViolation"],(function(a,b,c,d,e,f,g){"use strict";b="NEUTRAL";var h="LTR",i="RTL";function j(a){return a===h||a===i}function k(a){if(!j(a))throw c("unrecoverableViolation")("`dir` must be a strong direction to be converted to HTML Direction","internationalization");return a===h?"ltr":"rtl"}function a(a,b){if(!j(a))throw c("unrecoverableViolation")("`dir` must be a strong direction to be converted to HTML Direction","internationalization");if(!j(b))throw c("unrecoverableViolation")("`otherDir` must be a strong direction to be converted to HTML Direction","internationalization");return a===b?null:k(a)}g.NEUTRAL=b;g.LTR=h;g.RTL=i;g.isStrong=j;g.getHTMLDir=k;g.getHTMLDirIfDifferent=a}),98);
__d("UnicodeBidiGlobalDirectionCore",["UnicodeBidiDirection","unrecoverableViolation"],(function(a,b,c,d,e,f){"use strict";var g=null;function h(a){g=a}function a(){h(b("UnicodeBidiDirection").LTR)}function c(){g||this.initDir();if(!g)throw b("unrecoverableViolation")("Global direction not set.","internationalization");return g}d={setDir:h,initDir:a,getDir:c};e.exports=d}),null);
__d("UnicodeBidiGlobalDirection",["Locale","UnicodeBidiDirection","UnicodeBidiGlobalDirectionCore"],(function(a,b,c,d,e,f){"use strict";b("UnicodeBidiGlobalDirectionCore").initDir=function(){b("UnicodeBidiGlobalDirectionCore").setDir(b("Locale").isRTL()?b("UnicodeBidiDirection").RTL:b("UnicodeBidiDirection").LTR)},e.exports=b("UnicodeBidiGlobalDirectionCore")}),null);
__d("UnicodeBidi",["UnicodeBidiDirection","UnicodeBidiGlobalDirection","unrecoverableViolation"],(function(a,b,c,d,e,f,g){"use strict";e={L:"A-Za-z\xaa\xb5\xba\xc0-\xd6\xd8-\xf6\xf8-\u02b8\u02bb-\u02c1\u02d0\u02d1\u02e0-\u02e4\u02ee\u0370-\u0373\u0376\u0377\u037a-\u037d\u037f\u0386\u0388-\u038a\u038c\u038e-\u03a1\u03a3-\u03f5\u03f7-\u0482\u048a-\u052f\u0531-\u0556\u0559-\u055f\u0561-\u0587\u0589\u0903-\u0939\u093b\u093d-\u0940\u0949-\u094c\u094e-\u0950\u0958-\u0961\u0964-\u0980\u0982\u0983\u0985-\u098c\u098f\u0990\u0993-\u09a8\u09aa-\u09b0\u09b2\u09b6-\u09b9\u09bd-\u09c0\u09c7\u09c8\u09cb\u09cc\u09ce\u09d7\u09dc\u09dd\u09df-\u09e1\u09e6-\u09f1\u09f4-\u09fa\u0a03\u0a05-\u0a0a\u0a0f\u0a10\u0a13-\u0a28\u0a2a-\u0a30\u0a32\u0a33\u0a35\u0a36\u0a38\u0a39\u0a3e-\u0a40\u0a59-\u0a5c\u0a5e\u0a66-\u0a6f\u0a72-\u0a74\u0a83\u0a85-\u0a8d\u0a8f-\u0a91\u0a93-\u0aa8\u0aaa-\u0ab0\u0ab2\u0ab3\u0ab5-\u0ab9\u0abd-\u0ac0\u0ac9\u0acb\u0acc\u0ad0\u0ae0\u0ae1\u0ae6-\u0af0\u0b02\u0b03\u0b05-\u0b0c\u0b0f\u0b10\u0b13-\u0b28\u0b2a-\u0b30\u0b32\u0b33\u0b35-\u0b39\u0b3d\u0b3e\u0b40\u0b47\u0b48\u0b4b\u0b4c\u0b57\u0b5c\u0b5d\u0b5f-\u0b61\u0b66-\u0b77\u0b83\u0b85-\u0b8a\u0b8e-\u0b90\u0b92-\u0b95\u0b99\u0b9a\u0b9c\u0b9e\u0b9f\u0ba3\u0ba4\u0ba8-\u0baa\u0bae-\u0bb9\u0bbe\u0bbf\u0bc1\u0bc2\u0bc6-\u0bc8\u0bca-\u0bcc\u0bd0\u0bd7\u0be6-\u0bf2\u0c01-\u0c03\u0c05-\u0c0c\u0c0e-\u0c10\u0c12-\u0c28\u0c2a-\u0c39\u0c3d\u0c41-\u0c44\u0c58\u0c59\u0c60\u0c61\u0c66-\u0c6f\u0c7f\u0c82\u0c83\u0c85-\u0c8c\u0c8e-\u0c90\u0c92-\u0ca8\u0caa-\u0cb3\u0cb5-\u0cb9\u0cbd-\u0cc4\u0cc6-\u0cc8\u0cca\u0ccb\u0cd5\u0cd6\u0cde\u0ce0\u0ce1\u0ce6-\u0cef\u0cf1\u0cf2\u0d02\u0d03\u0d05-\u0d0c\u0d0e-\u0d10\u0d12-\u0d3a\u0d3d-\u0d40\u0d46-\u0d48\u0d4a-\u0d4c\u0d4e\u0d57\u0d60\u0d61\u0d66-\u0d75\u0d79-\u0d7f\u0d82\u0d83\u0d85-\u0d96\u0d9a-\u0db1\u0db3-\u0dbb\u0dbd\u0dc0-\u0dc6\u0dcf-\u0dd1\u0dd8-\u0ddf\u0de6-\u0def\u0df2-\u0df4\u0e01-\u0e30\u0e32\u0e33\u0e40-\u0e46\u0e4f-\u0e5b\u0e81\u0e82\u0e84\u0e87\u0e88\u0e8a\u0e8d\u0e94-\u0e97\u0e99-\u0e9f\u0ea1-\u0ea3\u0ea5\u0ea7\u0eaa\u0eab\u0ead-\u0eb0\u0eb2\u0eb3\u0ebd\u0ec0-\u0ec4\u0ec6\u0ed0-\u0ed9\u0edc-\u0edf\u0f00-\u0f17\u0f1a-\u0f34\u0f36\u0f38\u0f3e-\u0f47\u0f49-\u0f6c\u0f7f\u0f85\u0f88-\u0f8c\u0fbe-\u0fc5\u0fc7-\u0fcc\u0fce-\u0fda\u1000-\u102c\u1031\u1038\u103b\u103c\u103f-\u1057\u105a-\u105d\u1061-\u1070\u1075-\u1081\u1083\u1084\u1087-\u108c\u108e-\u109c\u109e-\u10c5\u10c7\u10cd\u10d0-\u1248\u124a-\u124d\u1250-\u1256\u1258\u125a-\u125d\u1260-\u1288\u128a-\u128d\u1290-\u12b0\u12b2-\u12b5\u12b8-\u12be\u12c0\u12c2-\u12c5\u12c8-\u12d6\u12d8-\u1310\u1312-\u1315\u1318-\u135a\u1360-\u137c\u1380-\u138f\u13a0-\u13f4\u1401-\u167f\u1681-\u169a\u16a0-\u16f8\u1700-\u170c\u170e-\u1711\u1720-\u1731\u1735\u1736\u1740-\u1751\u1760-\u176c\u176e-\u1770\u1780-\u17b3\u17b6\u17be-\u17c5\u17c7\u17c8\u17d4-\u17da\u17dc\u17e0-\u17e9\u1810-\u1819\u1820-\u1877\u1880-\u18a8\u18aa\u18b0-\u18f5\u1900-\u191e\u1923-\u1926\u1929-\u192b\u1930\u1931\u1933-\u1938\u1946-\u196d\u1970-\u1974\u1980-\u19ab\u19b0-\u19c9\u19d0-\u19da\u1a00-\u1a16\u1a19\u1a1a\u1a1e-\u1a55\u1a57\u1a61\u1a63\u1a64\u1a6d-\u1a72\u1a80-\u1a89\u1a90-\u1a99\u1aa0-\u1aad\u1b04-\u1b33\u1b35\u1b3b\u1b3d-\u1b41\u1b43-\u1b4b\u1b50-\u1b6a\u1b74-\u1b7c\u1b82-\u1ba1\u1ba6\u1ba7\u1baa\u1bae-\u1be5\u1be7\u1bea-\u1bec\u1bee\u1bf2\u1bf3\u1bfc-\u1c2b\u1c34\u1c35\u1c3b-\u1c49\u1c4d-\u1c7f\u1cc0-\u1cc7\u1cd3\u1ce1\u1ce9-\u1cec\u1cee-\u1cf3\u1cf5\u1cf6\u1d00-\u1dbf\u1e00-\u1f15\u1f18-\u1f1d\u1f20-\u1f45\u1f48-\u1f4d\u1f50-\u1f57\u1f59\u1f5b\u1f5d\u1f5f-\u1f7d\u1f80-\u1fb4\u1fb6-\u1fbc\u1fbe\u1fc2-\u1fc4\u1fc6-\u1fcc\u1fd0-\u1fd3\u1fd6-\u1fdb\u1fe0-\u1fec\u1ff2-\u1ff4\u1ff6-\u1ffc\u200e\u2071\u207f\u2090-\u209c\u2102\u2107\u210a-\u2113\u2115\u2119-\u211d\u2124\u2126\u2128\u212a-\u212d\u212f-\u2139\u213c-\u213f\u2145-\u2149\u214e\u214f\u2160-\u2188\u2336-\u237a\u2395\u249c-\u24e9\u26ac\u2800-\u28ff\u2c00-\u2c2e\u2c30-\u2c5e\u2c60-\u2ce4\u2ceb-\u2cee\u2cf2\u2cf3\u2d00-\u2d25\u2d27\u2d2d\u2d30-\u2d67\u2d6f\u2d70\u2d80-\u2d96\u2da0-\u2da6\u2da8-\u2dae\u2db0-\u2db6\u2db8-\u2dbe\u2dc0-\u2dc6\u2dc8-\u2dce\u2dd0-\u2dd6\u2dd8-\u2dde\u3005-\u3007\u3021-\u3029\u302e\u302f\u3031-\u3035\u3038-\u303c\u3041-\u3096\u309d-\u309f\u30a1-\u30fa\u30fc-\u30ff\u3105-\u312d\u3131-\u318e\u3190-\u31ba\u31f0-\u321c\u3220-\u324f\u3260-\u327b\u327f-\u32b0\u32c0-\u32cb\u32d0-\u32fe\u3300-\u3376\u337b-\u33dd\u33e0-\u33fe\u3400-\u4db5\u4e00-\u9fcc\ua000-\ua48c\ua4d0-\ua60c\ua610-\ua62b\ua640-\ua66e\ua680-\ua69d\ua6a0-\ua6ef\ua6f2-\ua6f7\ua722-\ua787\ua789-\ua78e\ua790-\ua7ad\ua7b0\ua7b1\ua7f7-\ua801\ua803-\ua805\ua807-\ua80a\ua80c-\ua824\ua827\ua830-\ua837\ua840-\ua873\ua880-\ua8c3\ua8ce-\ua8d9\ua8f2-\ua8fb\ua900-\ua925\ua92e-\ua946\ua952\ua953\ua95f-\ua97c\ua983-\ua9b2\ua9b4\ua9b5\ua9ba\ua9bb\ua9bd-\ua9cd\ua9cf-\ua9d9\ua9de-\ua9e4\ua9e6-\ua9fe\uaa00-\uaa28\uaa2f\uaa30\uaa33\uaa34\uaa40-\uaa42\uaa44-\uaa4b\uaa4d\uaa50-\uaa59\uaa5c-\uaa7b\uaa7d-\uaaaf\uaab1\uaab5\uaab6\uaab9-\uaabd\uaac0\uaac2\uaadb-\uaaeb\uaaee-\uaaf5\uab01-\uab06\uab09-\uab0e\uab11-\uab16\uab20-\uab26\uab28-\uab2e\uab30-\uab5f\uab64\uab65\uabc0-\uabe4\uabe6\uabe7\uabe9-\uabec\uabf0-\uabf9\uac00-\ud7a3\ud7b0-\ud7c6\ud7cb-\ud7fb\ue000-\ufa6d\ufa70-\ufad9\ufb00-\ufb06\ufb13-\ufb17\uff21-\uff3a\uff41-\uff5a\uff66-\uffbe\uffc2-\uffc7\uffca-\uffcf\uffd2-\uffd7\uffda-\uffdc",R:"\u0590\u05be\u05c0\u05c3\u05c6\u05c8-\u05ff\u07c0-\u07ea\u07f4\u07f5\u07fa-\u0815\u081a\u0824\u0828\u082e-\u0858\u085c-\u089f\u200f\ufb1d\ufb1f-\ufb28\ufb2a-\ufb4f",AL:"\u0608\u060b\u060d\u061b-\u064a\u066d-\u066f\u0671-\u06d5\u06e5\u06e6\u06ee\u06ef\u06fa-\u0710\u0712-\u072f\u074b-\u07a5\u07b1-\u07bf\u08a0-\u08e3\ufb50-\ufd3d\ufd40-\ufdcf\ufdf0-\ufdfc\ufdfe\ufdff\ufe70-\ufefe"};var h=new RegExp("["+e.L+e.R+e.AL+"]"),i=new RegExp("["+e.R+e.AL+"]");function j(a){a=h.exec(a);return a==null?null:a[0]}function k(a){a=j(a);return a==null?d("UnicodeBidiDirection").NEUTRAL:i.exec(a)?d("UnicodeBidiDirection").RTL:d("UnicodeBidiDirection").LTR}function l(a,b){b=b||d("UnicodeBidiDirection").NEUTRAL;if(!a.length)return b;a=k(a);return a===d("UnicodeBidiDirection").NEUTRAL?b:a}function m(a,b){b=b||c("UnicodeBidiGlobalDirection").getDir();if(!d("UnicodeBidiDirection").isStrong(b))throw c("unrecoverableViolation")("Fallback direction must be a strong direction","internationalization");return l(a,b)}function a(a,b){return m(a,b)===d("UnicodeBidiDirection").LTR}function b(a,b){return m(a,b)===d("UnicodeBidiDirection").RTL}g.firstStrongChar=j;g.firstStrongCharDir=k;g.resolveBlockDir=l;g.getDirection=m;g.isDirectionLTR=a;g.isDirectionRTL=b}),98);
__d("isElementPartiallyInViewport",["getElementRect","getViewportDimensions"],(function(a,b,c,d,e,f,g){"use strict";function a(a){var b=c("getViewportDimensions")();if(!b.width||!b.height)return!1;a=c("getElementRect")(a);if(!a.width||!a.height)return!1;var d=a.top<=b.height&&a.top+a.height>=0;b=a.left<=b.width&&a.left+a.width>=0;return d&&b}g["default"]=a}),98);
__d("MBackNavbar",["cx","fbt","CSS","DOM","Event","MAnimator","MArrays","MBackToNewsFeed","MHeaderLogger","MHistory","MHome","MJewelsTabability","MPageCache","MPageController","MPageFetcher","MStoriesUIConstants","MTitleListener","MURI","MViewport","Stratcom","UnicodeBidi","UnicodeBidiDirection","Vector","WebLite","getViewportDimensions","isElementPartiallyInViewport","onAfterTTI","setTimeoutAcrossTransitions"],(function(a,b,c,d,e,f,g,h,i){"use strict";var j=!1,k=!1,l=!1,m=[],n=!1,o=!1,p=!1,q=[],r=[],s=[],t=null,u=null,v=d("UnicodeBidiDirection").LTR,w=!1,x=!1,y=!0,z=null,A=!1,B=!1,C=!1,D=!1,E=!1,F=[],G=!1;function H(a){return a.split(",").map(function(a){a=a.toLowerCase();a.startsWith("/")||(a="/"+a);return a})}function I(){if(w||!n)return;d("MBackToNewsFeed").updateHistory(!0);!d("MHome").isHome()&&E&&c("onAfterTTI")(function(){!d("MHome").isHome()&&G&&d("MPageFetcher").prefetch(d("MHome").HOME_PATH)})}function J(a){try{a=new(c("MURI"))(a);a=a.getDomain()}catch(b){a=""}return a}function K(){var a=O();if(!a)return!1;a=J(a);return a.length>0&&!a.endsWith(".facebook.com")}function L(a,b,e){e=d("MTitleListener").getTitleAsString(e);if(!e||typeof e.split!=="function")return;e=e.split("\n").join(" ");b.innerText=e;v=d("UnicodeBidi").getDirection(e,v);switch(v){case d("UnicodeBidiDirection").RTL:c("CSS").addClass(a,"rtl");break;default:c("CSS").removeClass(a,"rtl")}}function M(a,b,e,f){var g=[];if(y){b.innerText="";g.push(c("Stratcom").listen("MDocument:title",null,function(c){var d=null;c&&(d=c.getData());L(a,b,d)}));var h=null;P()&&(h=i._(/*FBT_CALL*/"Facebook"/*FBT_CALL*/).toString());L(a,b,h)}h=function(){A=!0;if(!d("WebLite").isWebLite()&&d("WebLite").hasWebLiteMarker()&&history.length<=1){window.close();return}if(d("WebLite").hasHybridWebLiteMarker()){var a=window.location.href;history.go(-1);window.setTimeout(function(){a===window.location.href&&window.close()},300);return}history.go(-1)};x?(e&&g.push(c("Event").listen(e,"click",h)),f&&g.push(c("Event").listen(f,"click",h))):g.push(c("Event").listen(a,"click",h));var j=!1;return function(){if(j)return;j=!0;g.forEach(function(a){a.remove()})}}var N=!0;function O(){if(N){N=!1;return document.referrer}return""}function P(){if(!F.length)return!1;if(!c("MHistory").hasSoftState)return!1;var a=c("MHistory").getState();return!a?!1:F.indexOf(a)!==-1}function Q(a){if(c("MHistory").hasSoftState()&&F.length)return!1;return d("MArrays").findPrefix(s,a)?!1:d("MArrays").findPrefix(r,a)}function R(a){a=a||c("MHistory").getPath();var b="";if(a)try{a=new(c("MURI"))(a).normalize();b=a.getPath().toLowerCase()}catch(a){b=""}return b}function S(a){var b=K();if(o&&!b)return!1;b=R(a);if(Q(b))return!1;if(p)return!0;if(!q.length)return!1;for(var a=0;a<q.length;a++)if(b.indexOf(q[a])!==-1)return!0;return!1}function T(){u&&(u(),u=null);if(!t)return;var a=t;c("setTimeoutAcrossTransitions")(function(){var b=c("MHistory").getPath(),e=d("MHome").isHome()&&!c("MHistory").hasSoftState(),f=null,g=null;x&&(f=document.getElementById("MBackNavBarLeftArrow"),g=document.getElementById("MBackNavBarRightArrow"));var h=e||c("MHistory").hasSoftState()&&!P()||x&&!f&&!g||!S(b);if(h){c("CSS").removeClass(a,"show");if(k&&r.length&&m.length){h=R();Q(h)&&d("MArrays").findPrefix(m,h)&&d("MHeaderLogger").logExposure(!0)}if(e&&C&&A){A=!1;h=document.getElementById("page");if(h){e=d("DOM").scry(h,"article","story-div");var i=null;for(var h=e.length-1;h>=0;h--)if(c("isElementPartiallyInViewport")(e[h]))break;else i=e[h];if(i){c("CSS").show(i);var j=c("getViewportDimensions")();c("setTimeoutAcrossTransitions")(function(){if(!i)return;var a=d("MViewport").getScrollTop(),b=c("Vector").getPos(i).y-j.height+300,e=Math.abs(b-a),f=a;c("MAnimator").play(a,b,500,function(a){var b=c("MAnimator").easeInOutCubic((a-f)/e);b=Math.round((a-f)*b+f);f=a;d("MViewport").scrollToY(b)})},800)}}}c("Stratcom").invoke("m:backnav:show-jewels")}else{if(k){e=!1;if(l){h=R(b);(m.length===0||d("MArrays").findPrefix(m,h))&&(e=!0)}d("MHeaderLogger").logExposure(e)}if(!n)return;z&&(x?u=M(a,z,f,g):u=M(a,z));c("CSS").addClass(a,"show");B&&I();c("Stratcom").invoke("m:backnav:show-backbar")}},1)}function U(a){if(j)return;j=!0;t=a.element;n=a.enabled;k=a.logExposure;l=a.qeExposure;o=a.enabledForExternalReferer;p=a.allPages;w=a.backToFeedDisabled;x=a.backOnArrowClick;z=a.linkElement;var b=a.forceRefreshFeed;C=b?!1:a.scrollToNextFeedItem;B=a.modifyHistoryOnNav;E=a.isPageLoggingAllowed;G=a.enableFeedPrefetch;!p?q=H(a.pages):a.excludedPages.length&&(r=H(a.excludedPages),s=H(a.includedSubPages));var e=a.enableBackbarForSoftNav||"";e.length&&(F=e.split(","));a.exposurePages&&(m=H(a.exposurePages));r.length?r=r.concat(d("MStoriesUIConstants").HIDE_HEADER_URLS):r=d("MStoriesUIConstants").HIDE_HEADER_URLS;c("Stratcom").listen("history:change",null,T);c("Stratcom").listen("m:homepage:load",null,T);y=!a.staticTitle;n&&y&&(y=d("MTitleListener").init());y||c("CSS").addClass(z,"_6sow");if(!B){e=R();e=Q(e);e||I()}e=a.element.getElementsByClassName("_84gg");for(var a=0;a<e.length;++a)d("MJewelsTabability").listen(e[a],!1,"0");T();b&&n&&(c("Stratcom").listen("m:page:beforeloading",null,function(a){var b=A;A=!1;if(!a)return;a=a.getData();if(!a)return;var e=d("MPageController").getRenderedPath()||null;e=e&&d("MHome").isHome(e);if(e){D=!1;e=String(a).indexOf("?");if(e===-1)return;try{e=new(c("MURI"))(a);e=e.getQueryData()||{}}catch(a){e={}}e=e._bb_norefresh;e==="1"&&(D=!0)}else{e=d("MHome").isHome(a);var f=D;D=!1;b&&a&&e&&!f&&c("MPageCache").removeCachedPage(a)}}),c("Stratcom").listen("m:backnav:invalidate-cached-feed",null,function(){D=!1}))}function a(a){U(a)}g.init=a}),98);
__d("MBeeperController",["cx","$","Bootloader","CSS","DOM","MHistory","Stratcom","URI","getActiveElement","nullthrows","setTimeoutAcrossTransitions"],(function(a,b,c,d,e,f,g,h){var i,j,k,l,m=[],n,o=3e3;function a(a){n=a,c("setTimeoutAcrossTransitions")(function(){c("Stratcom").listen("m_notification",null,p),c("Stratcom").listen("blur",null,q),c("Stratcom").listen("m:history:change",null,v)},o)}function p(a){a=a.getData();if(!a||!a.data||n&&!a.data.type||n&&n.indexOf(a.data.type)===-1)return;a={notification:a.data};u(a);!i&&!j?c("Bootloader").loadModules(["ReactComponentRenderer","MBeeper.react"],function(a,b){i=a,j=b,v()},"MBeeperController"):v()}function q(a){a=a.getTarget();a instanceof HTMLElement&&s(a)&&setTimeout(v,50)}function r(){m.shift(),v()}function s(a){var b=a.tagName;return b==="INPUT"||b==="TEXTAREA"||a.contentEditable==="true"}function t(){return!s(c("getActiveElement")())&&c("$")("root").offsetHeight!==0}function u(a){var b=m.find(function(b){return b.notification.alert_id===a.notification.alert_id});b||m.push(a)}function v(){if(!t())return;var a=new(c("URI"))(c("MHistory").getPath());if(a.getQueryData().soft==="notifications"){m=[];return}a=m[0];if(!a)return;k||(k=d("DOM").create("div"),c("CSS").addClass(k,"_3hy8"),c("$")("page").appendChild(k));if(!l)i&&(l=new i(c("nullthrows")(j),k),l.setProps(babelHelpers["extends"]({},a,{onHide:r})));else{var b;((b=l.component)==null?void 0:b.isReady())&&l.setProps(a)}}g.init=a}),98);
__d("MFirstPageRecorder",["$","Arbiter","DOM","MDeepCopy","MPageCache","MPageController","MPageHeaderRight","MPageTitle","MRequestConfig","MResponseData","MURI","ScriptPath","ServerJS","Stratcom","ge"],(function(a,b,c,d,e,f,g){var h,i=!1,j=!1,k=[],l=new(c("MURI"))(d("MPageController").getRenderedPath()),m,n=[],o=[];({});var p=["m:chrome:schedulable-graph-search","first_response","last_response","MNotificationFlyoutContent","MMessegesFlyoutContent","MFriendRequestsFlyoutContent"];function q(){if(!m)return;c("MPageCache").setCachedPage(l,m);c("MPageCache").clearCachedIUIResponses(l);n.forEach(function(a){c("MPageCache").addCachedIUIResponse(l,a)});j=!0}function r(){if(i)return;i=!0;var a={ajax_response_token:c("MRequestConfig").ajaxResponseToken.secret,js:[],css:[],actions:[]},b=c("$")("root").cloneNode(!0),e=[];m=new(c("MResponseData"))({ajax_response_token:c("MRequestConfig").ajaxResponseToken.secret,js:[],css:[],actions:[{cmd:"script",type:"immediate",fn:function(){d("DOM").replace(c("$")("root"),b.cloneNode(!0))}}]});var f=d("MPageHeaderRight").getChromeHeaderRightContent();f&&f.length>0&&e.push(function(){var a=document.createDocumentFragment();for(var b=0;b<f.length;b++)a.appendChild(f[0]);d("MPageHeaderRight").setup({node:a})});var g=document.title;e.push(function(){d("MPageTitle").setTitle(g)});var h=d("ScriptPath").getPageInfo();h&&e.push(function(){d("ScriptPath").set(h.scriptPath,h.categoryToken,h.extraData)});a.actions=e.map(function(a){return{cmd:"script",type:"onload",fn:a}});n.push(new(c("MResponseData"))(a))}function s(a,b,d){var e={ajax_response_token:c("MRequestConfig").ajaxResponseToken.secret,js:[],css:[],actions:[]};e.actions=Object.keys(a).map(function(b){return{cmd:"replace",target:b,html:a[b],replaceifexists:!1,allownull:!1}});b&&e.actions.push({cmd:"append",target:"static_templates",html:b,replaceifexists:!0});d&&e.actions.push({cmd:"script",type:"onload",fn:function(){new(c("ServerJS"))().handle(c("MDeepCopy")(d))}});r();n.push(new(c("MResponseData"))(e))}function t(a,b){if(!a||p.includes(a.id))return;j?(s(a.contentMap,a.staticTemplates,a.jsmods),c("MPageCache").addCachedIUIResponse(l,n.pop())):o.push(a)}function u(){m=null,i=!0}function v(){for(var a=0,b=o.length;a<b;a++)s(o[a].contentMap,o[a].staticTemplates,o[a].jsmods);q();o=[];n=[]}function a(a){if(h)return;h=!0;a;c("MPageCache").setPageCacheComplete(l,!0);var b=c("Arbiter").subscribe(["pagelet_performing_replayable_actions","pagelet_performing_replayable_actions_failed","all_pagelets_loaded"],function(b,c){switch(b){case"pagelet_performing_replayable_actions":t(c,a);break;case"pagelet_performing_replayable_actions_failed":u();break;case"all_pagelets_loaded":v();break}}),d=c("Arbiter").subscribe(["MRenderingScheduler/pageletSchedule","MRenderingScheduler/dd"],function(a,b){switch(a){case"MRenderingScheduler/pageletSchedule":if(b.pageletConfig.type==="content"){a=(a={},a[b.id]=b.element?c("ge")(b.element).innerHTML:b.content.__html,a);s(a,b.pageletConfig.templates.__html,c("MDeepCopy")(b.pageletConfig.serverJSData))}break;case"MRenderingScheduler/dd":q();break}});k=[b,d]}c("Stratcom").listen("m:page:unload",null,function(){k.forEach(function(a){a&&a.unsubscribe()}),k=[],h=!0,m=null,n=[],o=[],c("Stratcom").removeCurrentListener()});g.startPageletCaching=a}),98);