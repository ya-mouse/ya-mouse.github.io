if (self.CavalryLogger) { CavalryLogger.start_js(["XvA7If1"]); }

__d("SchedulerFeatureFlags",["gkx","qex"],(function(a,b,c,d,e,f,g){var h;a=!0;b=c("gkx")("1099893");e=(d=c("qex")._("623"))!=null?d:!1;f=e;d=(d=c("qex")._("671"))!=null?d:5;h=(h=c("qex")._("706"))!=null?h:50;c=(c=c("qex")._("707"))!=null?c:300;g.enableSchedulerDebugging=a;g.enableProfiling=b;g.enableIsInputPending=e;g.enableIsInputPendingContinuous=f;g.frameYieldMs=d;g.continuousYieldMs=h;g.maxYieldMs=c}),98);
__d("Scheduler-dev.classic",["SchedulerFeatureFlags"],(function(a,b,c,d,e,f){"use strict"}),null);
__d("Scheduler-profiling.classic",["SchedulerFeatureFlags"],(function(b,c,d,e,f,g){"use strict";var h=(e=c("SchedulerFeatureFlags")).enableIsInputPending,i=e.enableSchedulerDebugging,j=e.enableProfiling;f=e.enableIsInputPendingContinuous;var k=e.frameYieldMs,l=e.continuousYieldMs,m=e.maxYieldMs;function n(b,c){var d=b.length;b.push(c);a:for(;0<d;){var e=d-1>>>1,f=b[e];if(0<q(f,c))b[e]=c,b[d]=f,d=e;else break a}}function o(b){return 0===b.length?null:b[0]}function p(b){if(0===b.length)return null;var c=b[0],d=b.pop();if(d!==c){b[0]=d;a:for(var e=0,f=b.length,g=f>>>1;e<g;){var h=2*(e+1)-1,i=b[h],j=h+1,k=b[j];if(0>q(i,d))j<f&&0>q(k,i)?(b[e]=k,b[j]=d,e=j):(b[e]=i,b[h]=d,e=h);else if(j<f&&0>q(k,d))b[e]=k,b[j]=d,e=j;else break a}}return c}function q(b,c){var d=b.sortIndex-c.sortIndex;return 0!==d?d:b.id-c.id}var r=0,s=0,t=0,u=null,v=null,w=0;function x(b){if(null!==v){var c=w;w+=b.length;if(w+1>t){t*=2;if(524288<t){y();return}var d=new Int32Array(4*t);d.set(v);u=d.buffer;v=d}v.set(b,c)}}function b(){t=131072,u=new ArrayBuffer(4*t),v=new Int32Array(u),w=0}function y(){var b=u;t=0;v=u=null;w=0;return b}if("object"===typeof performance&&"function"===typeof performance.now){var z=performance;g.unstable_now=function(){return z.now()}}else{var A=Date,B=A.now();g.unstable_now=function(){return A.now()-B}}var C=[],D=[],ba=1,E=!1;d=null;var F=3,G=!1,H=!1,I=!1,J="function"===typeof setTimeout?setTimeout:null,K="function"===typeof clearTimeout?clearTimeout:null,L="undefined"!==typeof setImmediate?setImmediate:null,M="undefined"!==typeof navigator&&void 0!==navigator.scheduling&&void 0!==navigator.scheduling.isInputPending?navigator.scheduling.isInputPending.bind(navigator.scheduling):null,ca={includeContinuous:f};function N(b){for(var c=o(D);null!==c;){if(null===c.callback)p(D);else if(c.startTime<=b)p(D),c.sortIndex=c.expirationTime,n(C,c),j&&(j&&null!==v&&x([1,1e3*b,c.id,c.priorityLevel]),c.isQueued=!0);else break;c=o(D)}}function O(b){I=!1;N(b);if(!H)if(null!==o(C))H=!0,$(P);else{var c=o(D);null!==c&&aa(O,c.startTime-b)}}function P(c,b){j&&j&&null!==v&&x([8,1e3*b,s]);H=!1;I&&(I=!1,K(T),T=-1);G=!0;var e=F;try{if(j)try{return Q(c,b)}catch(b){if(null!==d){var f=g.unstable_now();j&&null!==v&&x([3,1e3*f,d.id]);d.isQueued=!1}throw b}else return Q(c,b)}finally{d=null,F=e,G=!1,j&&(c=g.unstable_now(),j&&(s++,null!==v&&x([7,1e3*c,s])))}}function Q(c,b){N(b);for(d=o(C);!(null===d||i&&E||d.expirationTime>b&&(!c||X()));){var e=d.callback;if("function"===typeof e){d.callback=null;F=d.priorityLevel;var f=d.expirationTime<=b;if(j){var h=d;j&&(r++,null!==v&&x([5,1e3*b,h.id,r]))}e=e(f);b=g.unstable_now();"function"===typeof e?(d.callback=e,j&&j&&null!==v&&x([6,1e3*b,d.id,r])):(j&&(j&&null!==v&&x([2,1e3*b,d.id]),d.isQueued=!1),d===o(C)&&p(C));N(b)}else p(C);d=o(C)}if(null!==d)return!0;c=o(D);null!==c&&aa(O,c.startTime-b);return!1}var R=!1,S=null,T=-1,U=k,V=-1,W=!1;function X(){var b=g.unstable_now()-V;if(b<U)return!1;if(h){if(W)return!0;if(b<l){if(null!==M)return M()}else if(b<m&&null!==M)return M(ca)}return!0}function Y(){if(null!==S){var b=g.unstable_now();V=b;var c=!0;try{c=S(!0,b)}finally{c?Z():(R=!1,S=null)}}else R=!1;W=!1}var Z;if("function"===typeof L)Z=function(){L(Y)};else if("undefined"!==typeof MessageChannel){c=new MessageChannel();var da=c.port2;c.port1.onmessage=Y;Z=function(){da.postMessage(null)}}else Z=function(){J(Y,0)};function $(b){S=b,R||(R=!0,Z())}function aa(b,c){T=J(function(){b(g.unstable_now())},c)}e=j?{startLoggingProfilingEvents:b,stopLoggingProfilingEvents:y}:null;g.unstable_IdlePriority=5;g.unstable_ImmediatePriority=1;g.unstable_LowPriority=4;g.unstable_NormalPriority=3;g.unstable_Profiling=e;g.unstable_UserBlockingPriority=2;g.unstable_cancelCallback=function(b){if(j&&b.isQueued){var c=g.unstable_now();j&&null!==v&&x([4,1e3*c,b.id]);b.isQueued=!1}b.callback=null};g.unstable_continueExecution=function(){E=!1,H||G||(H=!0,$(P))};g.unstable_forceFrameRate=function(b){0>b||125<b?!1:U=0<b?Math.floor(1e3/b):k};g.unstable_getCurrentPriorityLevel=function(){return F};g.unstable_getFirstCallbackNode=function(){return o(C)};g.unstable_next=function(b){switch(F){case 1:case 2:case 3:var c=3;break;default:c=F}var d=F;F=c;try{return b()}finally{F=d}};g.unstable_pauseExecution=function(){E=!0};g.unstable_requestPaint=function(){h&&void 0!==navigator&&void 0!==navigator.scheduling&&void 0!==navigator.scheduling.isInputPending&&(W=!0)};g.unstable_runWithPriority=function(b,c){switch(b){case 1:case 2:case 3:case 4:case 5:break;default:b=3}var d=F;F=b;try{return c()}finally{F=d}};g.unstable_scheduleCallback=function(b,c,d){var e=g.unstable_now();"object"===typeof d&&null!==d?(d=d.delay,d="number"===typeof d&&0<d?e+d:e):d=e;switch(b){case 1:var f=-1;break;case 2:f=250;break;case 5:f=1073741823;break;case 4:f=1e4;break;default:f=5e3}f=d+f;b={id:ba++,callback:c,priorityLevel:b,startTime:d,expirationTime:f,sortIndex:-1};j&&(b.isQueued=!1);d>e?(b.sortIndex=d,n(D,b),null===o(C)&&b===o(D)&&(I?(K(T),T=-1):I=!0,aa(O,d-e))):(b.sortIndex=f,n(C,b),j&&(j&&null!==v&&x([1,1e3*e,b.id,b.priorityLevel]),b.isQueued=!0),H||G||(H=!0,$(P)));return b};g.unstable_shouldYield=X;g.unstable_wrapCallback=function(b){var c=F;return function(){var d=F;F=c;try{return b.apply(this,arguments)}finally{F=d}}}}),null);
__d("SchedulerFb-Internals_DO_NOT_USE",["Scheduler-dev.classic","Scheduler-profiling.classic","ifRequireable","requestAnimationFramePolyfill"],(function(a,b,c,d,e,f){"use strict";a.requestAnimationFrame===void 0&&(a.requestAnimationFrame=b("requestAnimationFramePolyfill"));var g;g=b("Scheduler-profiling.classic");e.exports={unstable_ImmediatePriority:g.unstable_ImmediatePriority,unstable_UserBlockingPriority:g.unstable_UserBlockingPriority,unstable_NormalPriority:g.unstable_NormalPriority,unstable_LowPriority:g.unstable_LowPriority,unstable_IdlePriority:g.unstable_IdlePriority,unstable_getCurrentPriorityLevel:g.unstable_getCurrentPriorityLevel,unstable_runWithPriority:g.unstable_runWithPriority,unstable_now:g.unstable_now,unstable_scheduleCallback:function(a,c,d){var e=b("ifRequireable")("TimeSlice",function(a){return a.guard(c,"unstable_scheduleCallback",{propagationType:a.PropagationType.CONTINUATION,registerCallStack:!0})},function(){return c});a=g.unstable_scheduleCallback(a,e,d);return a},unstable_cancelCallback:function(a){return g.unstable_cancelCallback(a)},unstable_wrapCallback:function(a){var c=b("ifRequireable")("TimeSlice",function(b){return b.guard(a,"unstable_wrapCallback",{propagationType:b.PropagationType.CONTINUATION,registerCallStack:!0})},function(){return a});return g.unstable_wrapCallback(c)},unstable_pauseExecution:function(){return g.unstable_pauseExecution()},unstable_continueExecution:function(){return g.unstable_continueExecution()},unstable_shouldYield:g.unstable_shouldYield,unstable_requestPaint:g.unstable_requestPaint,unstable_forceFrameRate:g.unstable_forceFrameRate,unstable_Profiling:g.unstable_Profiling}}),null);
__d("scheduler",["SchedulerFb-Internals_DO_NOT_USE"],(function(a,b,c,d,e,f){"use strict";e.exports=b("SchedulerFb-Internals_DO_NOT_USE")}),null);
__d("getUnqualifiedURI",["URI","unqualifyURI"],(function(a,b,c,d,e,f,g){function a(a){a=new(c("URI"))(a);c("unqualifyURI")(a);return a}g["default"]=a}),98);