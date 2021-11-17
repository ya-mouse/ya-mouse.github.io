if (self.CavalryLogger) { CavalryLogger.start_js(["rNp8PGB"]); }

__d("MLogoutClearCache",["MCache","Stratcom"],(function(a,b,c,d,e,f,g){c("Stratcom").listen("click","logout",d("MCache").clear)}),34);
__d("MVerifyCache",["MCache","WebStorage"],(function(a,b,c,d,e,f,g){function a(a){var b=d("MCache").VIEWER_KEY,e=d("MCache").getItem(b),f=a.viewer===0&&(h(c("WebStorage").getLocalStorage())||h(c("WebStorage").getSessionStorage()));(e!==a.viewer||f)&&((e||f)&&d("MCache").clear(),d("MCache").setItem(b,a.viewer,!0))}function h(a){if(a===null||a===void 0)return!1;a=Object.keys(a);for(var b=0;b<a.length;b++){var c=a[b];if(c.startsWith("sharedprefs.web."))return!0}return!1}g.main=a}),98);
__d("MPageError",["$","DOM","FBLogger","LoadingIndicator","MErrorCodes","MPageController","Stratcom"],(function(a,b,c,d,e,f){var g=b("$")("mErrorView"),h=b("DOM").find(g,"div","error-message");b("Stratcom").listen("click","MPageError:retry",b("MPageController").reload);b("Stratcom").listen("m:page:loading",null,function(a){b("DOM").hide(g)});b("Stratcom").listen("m:page:error",null,function(a){a=a.getData();var c=b("MErrorCodes").getMessage(a);b("LoadingIndicator").hide();b("DOM").setContent(h,c);b("DOM").show(g);b("FBLogger")("FIXME").warn("Error code: %s",a)})}),null);
__d("MPageHeaderAccessibility",["DOM","MAria","Stratcom"],(function(a,b,c,d,e,f){a=document.body;var g=b("DOM").scry(a,"*","mChromeHeaderCenter")[0],h=b("DOM").scry(a,"*","mChromeHeaderRight")[0],i=document.getElementById("root");function j(a){a&&b("MAria").show(a)}function k(a){a&&b("MAria").hide(a)}b("Stratcom").listen("m:side-area:show",null,function(a){k(g),k(h),k(i)});b("Stratcom").listen("m:side-area:hide",null,function(a){j(g),j(h),j(i)});e.exports={}}),null);
__d("MFirefoxAppDetect",[],(function(a,b,c,d,e,f){function a(a,b){if(!navigator.mozApps){b();return}if(window.locationbar&&!window.locationbar.visible){a();return}if(navigator.mozApps.getSelf){var c=navigator.mozApps.getSelf();c.onsuccess=function(){c.result?a():b()};c.onerror=b}else b()}f.isFirefoxApp=a}),null);
__d("MPageHeaderLeft",["$","DOM","MFirefoxAppDetect"],(function(a,b,c,d,e,f,g){var h={};function i(a){if(!h.back_button){var b=c("$")("page");h.back_button=d("DOM").find(b,"a","back-button");h.menu_button=d("DOM").find(b,"a","menu-link")}a.show_back_button?(d("DOM").hide(h.menu_button),d("DOM").show(h.back_button)):(d("DOM").hide(h.back_button),d("DOM").show(h.menu_button))}function j(a){var b=window.navigator;b.standalone||h.isMozApp?i(a):h.isMozApp===void 0&&(h.lastConfig=a,d("MFirefoxAppDetect").isFirefoxApp(function(){h.isMozApp=!0,a===h.lastConfig&&(j(a),delete h.lastConfig)},function(){h.isMozApp=!1}))}g.main=j}),98);
__d("RemoteDevice",["Banzai","Cookie","GeneratedLoggerUtils","MViewport","Run","isInIframe"],(function(a,b,c,d,e,f,g){var h=!1;function a(a){if(!c("isInIframe")()&&!window.APP_ENABLED&&!window.FW_ENABLED){if(/\((?:iPad|iPhone|iPod(?: touch));/.test(navigator.userAgent)){var b=Math.min(screen.width,screen.height),e=Math.max(screen.width,screen.height);b&&e&&(c("Cookie").set("wd",b+"x"+e),c("Cookie").set("m_pixel_ratio",window.devicePixelRatio));a&&a.performHardwareDetection&&a.hashId!==null&&d("Run").onAfterLoad(function(){i(a.hashId||"")});return}b=d("MViewport").getWidth();e=d("MViewport").getScreenHeight();if(!b||!e)return;c("Cookie").set("wd",b+"x"+e)}}function i(a){if(h)return;h=!0;var b=document.createElement("canvas");if(!b)return;b=b.getContext("webgl")||b.getContext("experimental-webgl");if(!b)return;var e=b.getExtension("WEBGL_debug_renderer_info");if(!e)return;var f="unknown",g="unknown";e!=null&&(f=b.getParameter(e.UNMASKED_RENDERER_WEBGL),g=b.getParameter(e.UNMASKED_VENDOR_WEBGL));b=0;window.navigator&&(b=window.navigator.hardwareConcurrency);e=window.screen.width;var i=window.screen.height,j=Math.min(e,i);e=Math.max(e,i);i={gpu_renderer:f,gpu_vendor:g,logical_cpu_count:b,screen_width_pixel:j,screen_height_pixel:e,device_pixel_ratio:window.devicePixelRatio,hashid:a};d("GeneratedLoggerUtils").log("logger:MHardwareDetectorLoggerConfig",i,c("Banzai").VITAL)}g.init=a;g.logHardwareInfo=i}),98);
__d("LogHistoryListeners",["Clock","ErrorPubSub","LogHistory"],(function(a,b,c,d,e,f,g){var h=d("LogHistory").getInstance("sys");c("Clock").addListener(c("Clock").ANOMALY,function(a){h.warn("clock_anomaly",c("Clock").getSamples())});c("ErrorPubSub").addListener(function(a){h.error("error",JSON.stringify({guard:a.guardList[0],line:a.line,message:a.message,script:a.script,stack:a.stack}))})}),34);
__d("MUnsupportedBrowserBanner",["DOM","Event","Stratcom"],(function(a,b,c,d,e,f,g){a={register:function(a){function b(){c("DOM").hide(a)}c("Event").listen(a,"click",b);c("Stratcom").listen("m:history:change",null,b)}};g["default"]=a}),98);
__d("LoggedOutLoginSignupBarTypedLogger",["Banzai","GeneratedLoggerUtils"],(function(a,b,c,d,e,f){"use strict";a=function(){function a(){this.$1={}}var c=a.prototype;c.log=function(a){b("GeneratedLoggerUtils").log("logger:LoggedOutLoginSignupBarLoggerConfig",this.$1,b("Banzai").BASIC,a)};c.logVital=function(a){b("GeneratedLoggerUtils").log("logger:LoggedOutLoginSignupBarLoggerConfig",this.$1,b("Banzai").VITAL,a)};c.logImmediately=function(a){b("GeneratedLoggerUtils").log("logger:LoggedOutLoginSignupBarLoggerConfig",this.$1,{signal:!0},a)};c.clear=function(){this.$1={};return this};c.getData=function(){return babelHelpers["extends"]({},this.$1)};c.updateData=function(a){this.$1=babelHelpers["extends"]({},this.$1,a);return this};c.setEvent=function(a){this.$1.event=a;return this};c.setIsPrimaryCtaReg=function(a){this.$1.is_primary_cta_reg=a;return this};c.setSurface=function(a){this.$1.surface=a;return this};return a}();c={event:!0,is_primary_cta_reg:!0,surface:!0};f["default"]=a}),66);
__d("MPopupSmallCta",["Event","LoggedOutLoginSignupBarTypedLogger","MAnimator","MViewport","Run","Style","clearTimeout","ge","setInterval"],(function(a,b,c,d,e,f){"use strict";var g=150,h=1e3,i=214;a={show:function(a,c,d,e){this._expandingCta=a,this._ctaUnit=c,this._closeIcon=d,this._ctaVisible=!1,this._ctaShownOnce=!1,this._ctaClosed=!1,this._referrerSurface=e,b("Run").onAfterLoad(this._init.bind(this))},_init:function(){var a=this,c,d=(c=b("ge"))("header"),e=c("header-notices"),f=c("mobile_login_bar");c=c("account_switcher_footer");this._scrollThreshold=0;this._height=i;if(d){b("Style").set(d,"z-index","0");d=d.clientHeight;d&&(this._scrollThreshold+=d)}if(e){b("Style").set(e,"z-index","0");d=e.clientHeight;d&&(this._scrollThreshold+=d)}if(f){e=f.clientHeight;e&&(this._scrollThreshold+=e,this._height=e)}if(c){d=c.clientHeight;d&&(this._scrollThreshold+=d,this._height=d)}b("setInterval")(this._updateCTA.bind(this),h);b("Event").listen(this._closeIcon,"click",function(){a._ctaClosed=!0,a._hideCTA()})},_hideCTA:function(){var a=this,c=this._expandingCta.clientHeight;b("MAnimator").play(c,0,g,function(c){return b("Style").set(a._expandingCta,"height",Math.round(c)+"px")});this._ctaVisible=!1;b("clearTimeout")(this._timerId)},_showCTA:function(){var a=this;if(this._ctaVisible)return;new(b("LoggedOutLoginSignupBarTypedLogger"))().setEvent("login_signup_bar_load").setSurface(this._referrerSurface).log();b("Style").set(this._ctaUnit,"margin-top","0px");b("Style").set(this._expandingCta,"background","none");b("MAnimator").play(0,this._height,g,function(c){return b("Style").set(a._expandingCta,"height",Math.round(c)+"px")});this._ctaVisible=!0;this._ctaShownOnce=!0;b("clearTimeout")(this._timerId)},_updateCTA:function(){var a=b("MViewport").getHeight();if(a<this._height)if(this._ctaVisible)this._hideCTA();else return;a=this._scrollThreshold;!this._ctaVisible&&!this._ctaClosed&&b("MViewport").getScrollTop()>a&&this._showCTA();this._ctaVisible&&b("MViewport").getScrollTop()<a&&this._hideCTA()}};e.exports=a}),null);
__d("MTimelineCTRLogger",["BanzaiLogger","MLegacyDataStore","Stratcom"],(function(a,b,c,d,e,f,g){var h="timeline-ctr-logger";c("Stratcom").listen("click",h,function(a){a=d("MLegacyDataStore").get(a.getNode(h));c("BanzaiLogger").log(a.config,a.data)});a={};g["default"]=a}),98);
__d("MAsyncPageLoadWithGraphSearch",["Stratcom"],(function(a,b,c,d,e,f,g){"use strict";var h="graph-search-entry-point";function a(a){c("Stratcom").invoke("setSearchText",h,{title:a.searchTitle||""}),c("Stratcom").invoke("setCurrentProfileID",h,{profileID:a.currentProfileID})}g.pageLoad=a}),98);
__d("MVisibilityToggle",["CSS","Event"],(function(a,b,c,d,e,f,g){"use strict";function h(a){}function a(a){var b=a.toggleButton,d=a.toggledElement,e=a.visible,f=a.onToggle||h;a=a.options;var g=!!a&&a.hideToggleButtonOnVisible===!0;c("Event").listen(b,"click",function(){e?c("CSS").hide(d):(c("CSS").show(d),g&&c("CSS").hide(b)),e=!e,f(e)})}g.setupOnClick=a}),98);
__d("MModalDialogInit",["MModalDialog"],(function(a,b,c,d,e,f){a.FW_ENABLED||b("MModalDialog").init()}),null);
__d("AccessibilityWebAssistiveTechTypedLogger",["Banzai","GeneratedLoggerUtils","nullthrows"],(function(a,b,c,d,e,f){"use strict";a=function(){function a(){this.$1={}}var c=a.prototype;c.log=function(a){b("GeneratedLoggerUtils").log("logger:AccessibilityWebAssistiveTechLoggerConfig",this.$1,b("Banzai").BASIC,a)};c.logVital=function(a){b("GeneratedLoggerUtils").log("logger:AccessibilityWebAssistiveTechLoggerConfig",this.$1,b("Banzai").VITAL,a)};c.logImmediately=function(a){b("GeneratedLoggerUtils").log("logger:AccessibilityWebAssistiveTechLoggerConfig",this.$1,{signal:!0},a)};c.clear=function(){this.$1={};return this};c.getData=function(){return babelHelpers["extends"]({},this.$1)};c.updateData=function(a){this.$1=babelHelpers["extends"]({},this.$1,a);return this};c.setIndicatedBrowsers=function(a){this.$1.indicated_browsers=b("GeneratedLoggerUtils").serializeVector(a);return this};c.setIsVirtualCursorAction=function(a){this.$1.is_virtual_cursor_action=a;return this};c.updateExtraData=function(a){a=b("nullthrows")(b("GeneratedLoggerUtils").serializeMap(a));b("GeneratedLoggerUtils").checkExtraDataFieldNames(a,g);this.$1=babelHelpers["extends"]({},this.$1,a);return this};c.addToExtraData=function(a,b){var c={};c[a]=b;return this.updateExtraData(c)};return a}();var g={indicated_browsers:!0,is_virtual_cursor_action:!0};f["default"]=a}),66);
__d("VirtualCursorStatus",["Event","UserAgent","emptyFunction","setImmediate"],(function(a,b,c,d,e,f){var g=null,h=null;function i(){h||(h=b("Event").listen(window,"blur",function(){g=null,j()}))}function j(){h&&(h.remove(),h=null)}function a(a){g=a.keyCode,i()}function c(){g=null,j()}if(typeof window!=="undefined"&&window.document&&window.document.createElement){d=document.documentElement;if(d)if(d.addEventListener)d.addEventListener("keydown",a,!0),d.addEventListener("keyup",c,!0);else if(d.attachEvent){f=d.attachEvent;f("onkeydown",a);f("onkeyup",c)}}var k={isKeyDown:function(){return!!g},getKeyDownCode:function(){return g}},l=!1,m=!1,n=null,o=!1;function p(a){var c=new Set(),d=k.isKeyDown(),e=a.clientX,f=a.clientY,g=a.isPrimary,h=a.isTrusted,i=a.offsetX,j=a.offsetY,n=a.pointerType,o=a.mozInputSource,p=a.WEBKIT_FORCE_AT_MOUSE_DOWN,q=a.webkitForce;a=a.target;var r=a.clientWidth;a=a.clientHeight;e===0&&f===0&&i>=0&&j>=0&&m&&h&&o==null&&c.add("Chrome");l&&m&&!d&&q!=null&&q<p&&i===0&&j===0&&o==null&&c.add("Safari-edge");e===0&&f===0&&i<0&&j<0&&m&&o==null&&c.add("Safari-old");!l&&!m&&d&&g===!1&&h&&n===""&&e===0&&f===0&&i===0&&j===0&&o==null;!l&&!m&&!d&&h&&b("UserAgent").isBrowser("IE >= 10")&&o==null&&(e<0&&f<0?c.add("IE"):(i<0||i>r)&&(j<0||j>a)&&c.add("MSIE"));o===0&&h&&c.add("Firefox");return c}function q(){l=!0,b("setImmediate")(function(){l=!1})}function r(){m=!0,b("setImmediate")(function(){m=!1})}function s(a,c){n===null&&(n=p(a));o=n.size>0;a=a.target.getAttribute("data-accessibilityid")==="virtual_cursor_trigger";c(o,n,a);b("setImmediate")(function(){o=!1,n=null})}d={isVirtualCursorTriggered:function(){return o},add:function(a,c){c===void 0&&(c=b("emptyFunction"));var d=function(a){return s(a,c)};a.addEventListener("click",d);var e=b("Event").listen(a,"mousedown",q),f=b("Event").listen(a,"mouseup",r);return{remove:function(){a.removeEventListener("click",d),e.remove(),f.remove()}}}};e.exports=d}),null);
__d("AccessibilityWebVirtualCursorClickLogger",["AccessibilityWebAssistiveTechTypedLogger","VirtualCursorStatus"],(function(a,b,c,d,e,f,g){function a(a){var b=this;a.forEach(function(a){d("VirtualCursorStatus").add(a,b._log)},this)}function b(a,b,d){d===void 0&&(d=!1),a&&new(c("AccessibilityWebAssistiveTechTypedLogger"))().setIndicatedBrowsers(b).setIsVirtualCursorAction(d).log()}g.init=a;g._log=b}),98);
__d("ArtillerySegment",["invariant","performanceAbsoluteNow"],(function(a,b,c,d,e,f,g,h){var i=0;a=function(){function a(a){a||h(0,1496),"category"in a&&"description"in a||h(0,3138,JSON.stringify(a)),this.$1=!1,this.$2=babelHelpers["extends"]({},a,{id:(i++).toString(36)}),this.$3=[]}var b=a.prototype;b.getID=function(){return this.$2.id};b.begin=function(){this.$2.begin=c("performanceAbsoluteNow")();return this};b.end=function(){this.$2.end=c("performanceAbsoluteNow")();return this};b.appendChild=function(){var a=this;this.$1&&h(0,37302,this.$2.description);for(var b=arguments.length,c=new Array(b),d=0;d<b;d++)c[d]=arguments[d];c.forEach(function(b){a.$3.push(b.getID())});return this};b.setPosted=function(){this.$1=!0;return this};b.getPostData=function(){return babelHelpers["extends"]({},this.$2,{id:this.$2.id,children:this.$3.slice()})};return a}();g["default"]=a}),98);
__d("ArtillerySequence",["invariant"],(function(a,b,c,d,e,f,g,h){var i=0;a=function(){function a(a){a||h(0,1496),"description"in a||h(0,1497,JSON.stringify(a)),this.$1=!1,this.$2=babelHelpers["extends"]({},a,{id:(i++).toString(36)}),this.$3=[]}var b=a.prototype;b.getID=function(){return this.$2.id};b.addSegment=function(){var a=this;this.$1&&h(0,37342,this.$2.description);for(var b=arguments.length,c=new Array(b),d=0;d<b;d++)c[d]=arguments[d];c.forEach(function(b){a.$3.push(b.getID())});return this};b.setPosted=function(){this.$1=!0;return this};b.getPostData=function(){return babelHelpers["extends"]({},this.$2,{id:this.$2.id,segments:this.$3.slice()})};return a}();g["default"]=a}),98);
__d("ArtilleryTrace",["invariant","ArtillerySegment","ArtillerySequence"],(function(a,b,c,d,e,f,g,h){a=function(){function a(){this.$1=!1,this.$3=void 0,this.$4={},this.$5={},this.$6=[],this.$7=[],this.$8={},this.$9=[],this.$10=null}var b=a.prototype;b.createSequence=function(a){this.$1&&h(0,4917);a=new(c("ArtillerySequence"))(a);this.$6.push(a);return a};b.createSegment=function(a){this.$1&&h(0,4918);a=new(c("ArtillerySegment"))(a);this.$7.push(a);return a};b.markSegment=function(a,b){this.$1&&h(0,4919);this.$8[b]=a.getID();return this};b.connectTrace=function(a,b){this.$1&&h(0,4919);b=b||this.$2;b||h(0,4920);this.$9.push({segment:a.getID(),trace:b});return this};b.setID=function(a,b){!this.$2&&!this.$3||h(0,4921);this.$2=a;this.$3=b;return this};b.getID=function(){return this.$2};b.getArtillery2ID=function(){return this.$3};b.addProperty=function(a,b){this.$4[a]=b;return this};b.addTagset=function(a,b){this.$5[a]=b;return this};b.addActivePolicies=function(a){this.addTagset("active_policies",a);this.addTagset("policy",a);return this};b.getProperty=function(a){return this.$4[a]};b.getTagset=function(a){return this.$5[a]};b.getActivePolicies=function(){return this.getTagset("active_policies")};b.post=function(){this.$1&&h(0,37290,this.$2);this.$1=!0;var a=this.$10;a&&a({id:this.$2,artillery2Id:this.$3,properties:this.$4,tagsets:this.$5,sequences:this.$6.map(function(a){return a.setPosted().getPostData()}),segments:this.$7.map(function(a){return a.setPosted().getPostData()}),marks:babelHelpers["extends"]({},this.$8),connections:this.$9.slice()})};b.setOnPost=function(a){this.$10&&h(0,4923);this.$10=a;return this};b.isPosted=function(){return this.$1};return a}();g["default"]=a}),98);
__d("ServiceWorkerRegistration",["BrowserPaymentHandlerConfig","ClientServiceWorkerMessage","EventListener","Promise","Run","promiseDone"],(function(a,b,c,d,e,f){var g=!!navigator.serviceWorker,h={},i={name:"Facebook Pay",method:self.location.origin+"/pay"};function j(a){if(!b("BrowserPaymentHandlerConfig").enabled)return;(a=a.paymentManager)==null?void 0:(a=a.instruments)==null?void 0:a.set("Facebook",i)}function k(){var a=navigator.serviceWorker;if(!g||!a)throw new Error("serviceWorker is not supported in this browser");return a}var l={isSupported:function(){return g},registerWorkerIfUnregisteredAfterDD:function(a){b("Run").onAfterLoad(function(){l.registerWorkerIfUnregistered(a)})},registerWorkerIfUnregistered:function(a){if(h[a])return h[a];var c=k(),d=h[a]=new(b("Promise"))(function(d,e){b("promiseDone")(l.getWorkerRegistration(a),function(f){if(!f){var g=b("EventListener").listen(window,"message",function(a){(a==null?void 0:(a=a.data)==null?void 0:a.command)==="ServiceWorkerInstallError"&&e()});b("promiseDone")(b("Promise").resolve(c.register(a,{updateViaCache:"all"})),function(){g.remove(),b("promiseDone")(b("Promise").resolve(c.ready),d)})}else d(f)})});b("promiseDone")(d,function(b){h[a]=null,j(b)});return d},unregisterControllingWorker:function(){return new(b("Promise"))(function(a,c){c=new(b("ClientServiceWorkerMessage"))("unregister",{},function(){a(!0)});c.sendViaController()})},getWorkerRegistration:function(a){var b=k();return b.getRegistration(a)},isAWorkerActivated:function(){return!navigator.serviceWorker||!navigator.serviceWorker.getRegistration?b("Promise").resolve(!1):navigator.serviceWorker.getRegistration().then(function(a){return!!(a&&a.active)})}};e.exports=l}),null);
__d("Artillery",["invariant","ArtilleryTrace","Banzai","ClientServiceWorkerMessage","Run","ServiceWorkerRegistration","forEachObject","mixInEventEmitter","performance"],(function(a,b,c,d,e,f,g,h){var i=!1,j=!1,k=[],l,m,n,o={},p={},q=!1,r=!1;function s(){if(i)return;i=!0;c("Banzai").subscribe(c("Banzai").SHUTDOWN,function(){u._postAll()})}function t(){m=null,l=null,p={},o={},n=null,r=!1}var u={isEnabled:function(){return j},createTrace:function(){s();var a=new(c("ArtilleryTrace"))();a.setOnPost(function(a){u.emitAndHold("posttrace",a)});k.push(a);return a},getPageTrace:function(){l||h(0,4261);if(n)return n;var a=u.createTrace().setID(l,m);c("forEachObject")(o,function(b,c,d){a.addProperty(c,b)});c("forEachObject")(p,function(b,c,d){a.addTagset(c,b)});n=a;return a},setPageProperties:function(a){o=a},addPageTagset:function(a,b){n==null?p[a]=b:n.addTagset(a,b)},setActivePolicies:function(a){u.addPageTagset("active_policies",a),u.addPageTagset("policy",a)},getPageActivePolicies:function(){return u.getPageTagset("active_policies")},enableLogServiceWorker:function(){c("ServiceWorkerRegistration").isSupported()&&(q=!0)},getPageProperty:function(a){if(n==null)return o[a];else return n.getProperty(a)},getPageTagset:function(a){if(n==null)return p[a];else return n.getTagset(a)},enable:function(){j=!0,r||(d("Run").onLeave(t),r=!0)},disable:function(){j=!1},setPageTraceID:function(a,b){if(l===a&&m===b)return;!l&&!m||h(0,4262);l=a;m=b;if(q&&c("performance")&&c("performance").timing&&c("performance").timing.navigationStart){a=new(c("ClientServiceWorkerMessage"))("asw-sendStartupData",{traceID:m,windowStart:c("performance").timing.navigationStart},null);a.sendViaController()}},addPiggyback:function(a,b){window.CavalryLogger&&window.CavalryLogger.getInstance().addPiggyback(a,b)},_postAll:function(){k.forEach(function(a){return!a.isPosted()&&a.post()})}};c("mixInEventEmitter")(u,{posttrace:!0});a=u;g["default"]=a}),98);
__d("ghlInternalCreateMap",["ODS"],(function(a,b,c,d,e,f,g){"use strict";var h=function(){function a(){}var b=a.prototype;b.get=function(){return null};b.has=function(a){return!1};b.set=function(a,b){return this};b["delete"]=function(a){return!1};return a}();function a(){var a;a=(a=(a=window.WeakMap)!=null?a:window.Map)!=null?a:h;a!==window.WeakMap&&d("ODS").bumpEntityKey(2966,"feed_ads","ghlCreateMap.fallback."+String(a===window.Map));return new a()}g["default"]=a}),98);
__d("GHLInternalMonitorStore_DO_NOT_USE",["invariant","ghlInternalCreateMap"],(function(a,b,c,d,e,f,g,h){"use strict";var i=[],j=c("ghlInternalCreateMap")(),k=[];a=function(a){i.push(a)};b=function(a){i.forEach(function(b,c){if(b.b!=="bsu")return;var d=a(b);if(d!=null){var e=babelHelpers["extends"]({},b,d);if(e.b==="bsb"){b=j.get(e.el);b!=null&&(b(e),j["delete"](e.el));k.forEach(function(a){return a(e)})}i[c]=e}})};var l=function(a){return i.find(function(b){return b.el===a})};d=function(a){return l(a)!=null};e=function(a,b){var c=l(a);j.has(a)&&h(0,18634);c!=null&&c.b==="bsb"?b(c):j.set(a,b);return{dispose:function(){return j["delete"](a)}}};f=function(a){k.push(a);i.filter(function(a){return a.b==="bsb"}).forEach(a);return{dispose:function(){return k=k.filter(function(b){return b===a})}}};g.add=a;g.mapUpdate=b;g.get=l;g.has=d;g.observe=e;g.observeAny=f}),98);
__d("GhlTestUbtFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f){"use strict";a=b("getFalcoLogPolicy_DO_NOT_USE")("1942319");c=b("FalcoLoggerInternal").create("ghl_test_ubt",a);e.exports=c}),null);
__d("ghlScan",["ODS"],(function(a,b,c,d,e,f,g){"use strict";var h=1;b=2;var i=3,j=4,k=5,l=6,m=/^[a-z0-9]{7}$/;function a(a){try{var c=new Set();n()&&c.add(i);a.getAttributeNames!=null&&a.getAttributeNames().find(function(b){return m.test(b)&&a.getAttribute(b)===""})&&c.add(k);document.getElementById(atob("c2Z4X2JhZGdl"))&&c.add(j);document.getElementById(atob("ZmJwdXJpdHlpbmZvd3JhcHBlcg=="))&&c.add(l);return c.size>0?c:new Set([h])}catch(a){d("ODS").bumpEntityKey(2966,"feed_ads","_ghlScan."+a);return new Set([b])}}var n=function(){var a=window,b=a.atob;a=a.getComputedStyle;if(b==null||a==null)return!1;a="."+[b("QWRCb3g"),b("QWQ"),b("YWR2ZXJ0"),b("cG9zdC1hZHM")].join(".");b=document.querySelector(a);if(!(b instanceof HTMLElement))return!1;b.style.display="inline";a=window.getComputedStyle(b);return a.getPropertyValue("display")==="block"};g["default"]=a}),98);
__d("ghlInternalLog",["Banzai","cr:1088657","ghlInternalBumpODSKey","ghlScan"],(function(a,b,c,d,e,f,g){"use strict";var h="swank",i=0,j=6;function a(a){var d=a.b,e=a.el,f=a.o,g=a.te,l=a.ts;a=a.xt;if(d!=="bsb"){c("ghlInternalBumpODSKey")("ghlInternalLog","missing-b");return}if(g==null){c("ghlInternalBumpODSKey")("ghlInternalLog","missing-te");return}d=k(l,g);l=["xtrackable:"+h,{token:a,event_code:f?j:i,hidden_delay:d,sources:Array.from(c("ghlScan")(e))}];c("Banzai").post.apply(c("Banzai"),l);b("cr:1088657")&&b("cr:1088657").b({hd:d,e:e,token:(g=a)!=null?g:""})}var k=function(a,b){return Math.max(0,100*Math.round((b-a)/100))};g["default"]=a}),98);
__d("queryThenMutateDOM",["ErrorUtils","Run","TimeSlice","emptyFunction","gkx","requestAnimationFrame"],(function(a,b,c,d,e,f){var g,h,i,j=[],k={};function l(a,c,d){if(!a&&!c)return{cancel:b("emptyFunction")};if(d&&Object.prototype.hasOwnProperty.call(k,d))return{cancel:b("emptyFunction")};else d&&(k[d]=1);c=b("TimeSlice").guard(c||b("emptyFunction"),"queryThenMutateDOM mutation callback",{propagationType:b("TimeSlice").PropagationType.CONTINUATION,registerCallStack:!0});a=b("TimeSlice").guard(a||b("emptyFunction"),"queryThenMutateDOM query callback",{propagationType:b("TimeSlice").PropagationType.CONTINUATION,registerCallStack:!0});var e={queryFunction:a,mutateFunction:c,output:null,deleted:!1};j.push(e);n();h||(h=!0,b("gkx")("708253")||b("Run").onLeave(function(){h=!1,i=!1,k={},j.length=0}));return{cancel:function(){e.deleted=!0,d&&delete k[d]}}}l.prepare=function(a,b,c){return function(){for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];e.unshift(this);var g=Function.prototype.bind.apply(a,e),h=b.bind(this);l(g,h,c)}};var m=b("TimeSlice").guard(function(){while(j.length){k={};var a=[];window.document.body.getClientRects();while(j.length){var b=j.shift();b.deleted||(b.output=o(b.queryFunction),a.push(b))}while(a.length){b=a.shift();b.deleted||o(b.mutateFunction,null,[b.output])}}i=!1},"queryThenMutateDOM runScheduledQueriesAndMutations",{propagationType:b("TimeSlice").PropagationType.ORPHAN});function n(){!i&&j.length&&(i=!0,b("requestAnimationFrame")(m))}function o(a,c,d,e,f){return(g||(g=b("ErrorUtils"))).applyWithGuard(a,c,d,e,f)}e.exports=l}),null);
__d("ghlMonitor",["invariant","GHLInternalMonitorStore_DO_NOT_USE","GHLTestElement","ghlInternalLog","once","queryThenMutateDOM","setIntervalAcrossTransitions"],(function(a,b,c,d,e,f,g,h){"use strict";function a(a,b,e,f){f===void 0&&(f=!1);if(!k(a))return;d("GHLInternalMonitorStore_DO_NOT_USE").add({b:"bsu",r:0,el:a,o:f,ts:Date.now(),te:null,s:b,xt:e});i();d("GHLInternalMonitorStore_DO_NOT_USE").observe(a,c("ghlInternalLog"))}var i=c("once")(function(){j(),c("setIntervalAcrossTransitions")(j,1e3)}),j=function(){c("queryThenMutateDOM")(function(){var a=15,b=1,c=2,e=5;d("GHLInternalMonitorStore_DO_NOT_USE").mapUpdate(function(f){var g=f.r,h=f.el;f=f.o;if(!f&&a*b<g||f&&c*e<g)return{b:"bsn",te:Date.now()};if(!f&&g%b!==0||f&&g%e!==0)return{r:g+1};f=d("GHLTestElement").testElementI(h,"ghlMonitor");return f?{b:"bsb",te:Date.now()}:{r:g+1}})})},k=function(a){return a.querySelectorAll("img").length===0?!1:!0};g["default"]=a}),98);
__d("GHLSurvey",["GHLInternalMonitorStore_DO_NOT_USE","GhlTestUbtFalcoEvent","ghlInternalBumpODSKey","ghlMonitor","ghlTestUBT"],(function(a,b,c,d,e,f,g){"use strict";a=function(){return c("ghlTestUBT")(function(a,b){c("GhlTestUbtFalcoEvent").log(function(){return{recent:b,ubt:a}})})};b=function(a,b){a=document.getElementById(a);if(a==null)return;h(a,b)};var h=function(a,b){if(d("GHLInternalMonitorStore_DO_NOT_USE").has(a)){c("ghlInternalBumpODSKey")("GHLSurvey","duplicate-b");return}if(b.t===""){c("ghlInternalBumpODSKey")("GHLSurvey","missing-t");return}c("ghlMonitor")(a,b.s,b.t,b.o)};g.survey=a;g.monitorID=b;g.monitorEl=h}),98);
__d("Queue",[],(function(a,b,c,d,e,f){var g={};a=function(){function a(a){this._timeout=null,this._interval=(a==null?void 0:a.interval)||0,this._processor=a==null?void 0:a.processor,this._queue=[],this._stopped=!0}var b=a.prototype;b._dispatch=function(a){var b=this;a===void 0;if(this._stopped||this._queue.length===0)return;a=this._processor;if(a==null){this._stopped=!0;throw new Error("No processor available")}var c=this._interval;if(c!=null)a.call(this,this._queue.shift()),this._timeout=setTimeout(function(){return b._dispatch()},c);else while(this._queue.length)a.call(this,this._queue.shift())};b.enqueue=function(a){this._processor&&!this._stopped?this._processor(a):this._queue.push(a);return this};b.start=function(a){a&&(this._processor=a);this._stopped=!1;this._dispatch();return this};b.isStarted=function(){return!this._stopped};b.dispatch=function(){this._dispatch(!0)};b.stop=function(a){this._stopped=!0;a&&this._timeout!=null&&clearTimeout(this._timeout);return this};b.merge=function(a,b){if(b){(b=this._queue).unshift.apply(b,a._queue)}else{(b=this._queue).push.apply(b,a._queue)}a._queue=[];this._dispatch();return this};b.getLength=function(){return this._queue.length};a.get=function(b,c){var d;b in g?d=g[b]:d=g[b]=new a(c);return d};a.exists=function(a){return a in g};a.remove=function(a){return delete g[a]};return a}();f["default"]=a}),66);
__d("FalcoLoggerTransports",["AnalyticsCoreData","Banzai","JSResource","ODS","PersistedQueue","Queue","WebSession","promiseDone"],(function(a,b,c,d,e,f,g){"use strict";var h=5*1024,i=60*1e3,j=1e3,k="falco:",l=new(c("Queue"))(),m=[],n=0,o,p=!1,q=!1,r=!1,s=!0;function t(a,b){var c=b.item.extra.length;n+c>h&&(clearTimeout(o),u());m.push([a,b]);n+=c}function u(){o=null;p=!1;var a=m;l.enqueue(function(b){return b.log(a.map(function(a){return a[1].item}),function(b){for(var c=0;c<a.length;c++){var d=a[c],e=d[0];d=d[1];e.markItem(d,b)}})});m=[];n=0}function v(a){return{events:a.map(function(a){return{name:a.name,extra:a.extra,rate:a.policy.r,time:a.time/1e3}})}}function w(a){return Object.freeze({deviceId:c("AnalyticsCoreData").device_id,sessionId:a,appId:c("AnalyticsCoreData").app_id,pushPhase:c("AnalyticsCoreData").push_phase})}function x(a,b){y("planes.banzai.write",a.length);for(var e=0;e<a.length;e++){var f,g=a[e];c("Banzai").post(k+g.name,(f={},f.e=g.extra,f.r=g.policy.r,f.d=c("AnalyticsCoreData").device_id,f.s=d("WebSession").getId(),f.t=g.time,f),b)}}function y(a,b){d("ODS").bumpEntityKey(1344,"falco.fabric.www."+c("AnalyticsCoreData").push_phase,a,b)}var z={log:function(a,b){x(a,c("Banzai").BASIC),b(!0)},logImmediately:function(a,b){x(a,c("Banzai").VITAL),b(!0)},logCritical:function(a,b){x(a,{signal:!0,retry:!0}),b(!0)}};function A(){if(q)return;c("JSResource").loadAll([c("JSResource")("TransportSelectingClientSingleton").__setRef("FalcoLoggerTransports"),c("JSResource")("RequestStreamCommonRequestStreamCommonTypes").__setRef("FalcoLoggerTransports")],function(a,b){var e=b.FlowStatus,f;b={onTermination:function(a){a.message==="Stream closed"?(l.stop(!0),q=!1):(s=!1,l.start(function(a){return a(z)}))},onFlowStatus:function(a){a===e.Started&&l.start(function(a){return a({log:function(b,a){y("planes.bladerunner.write",b.length);b=JSON.stringify(v(b));f&&(c("AnalyticsCoreData").enable_ack?c("promiseDone")(f.amendWithAck(b),function(){return a(!0)},function(){y("planes.bladerunner.ack_failed",1),a(!0)}):(f.amendWithoutAck(b),a(!0)))},logImmediately:function(b,a){this.log(b,a)},logCritical:function(b,a){this.log(b,a)}})})}};c("promiseDone")(a.requestStream({method:"Falco"},JSON.stringify(w(d("WebSession").getId())),b,{requestId:""}).then(function(a){f=a})["catch"](function(a){l.stop(!0),q=!1}))});q=!0}function B(a){return c("AnalyticsCoreData").enable_bladerunner&&s&&a.s===1}function a(){if(r)return;r=!0;c("PersistedQueue").setHandler("falco_queue_log",function(a){var b;while(b=a.dequeueItem())(function(b){B(b.item.policy)?(A(),o==null&&(o=setTimeout(u,i)),t(a,b)):z.log([b.item],function(c){return a.markItem(b,c)})})(b)});c("PersistedQueue").setHandler("falco_queue_immediately",function(a){var b;while(b=a.dequeueItem())(function(b){B(b.item.policy)?(A(),(o==null||!p)&&(clearTimeout(o),o=setTimeout(u,j),p=!0),t(a,b)):z.logImmediately([b.item],function(c){return a.markItem(b,c)})})(b)});c("PersistedQueue").setHandler("falco_queue_critical",function(a){var b;while(b=a.dequeueItem())(function(b){var c=b.item;B(c.policy)?(A(),l.enqueue(function(d){return d.logCritical([c],function(c){return a.markItem(b,c)})})):z.logCritical([c],function(c){return a.markItem(b,c)})})(b)})}g.attach=a}),98);
__d("EventProfiler",["cr:708886"],(function(a,b,c,d,e,f,g){g["default"]=b("cr:708886")}),98);