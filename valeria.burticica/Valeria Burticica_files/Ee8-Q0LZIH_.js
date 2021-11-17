if (self.CavalryLogger) { CavalryLogger.start_js(["RVW9Ohd"]); }

__d("TypeaheadInternationalNormalizer",["TypeaheadNormalizer"],(function(a,b,c,d,e,f){var g={normalize:function(a){var c=g._charmap;return b("TypeaheadNormalizer").normalize(a).replace(/[\u00e0-\u0450]/g,function(a){return a in c?c[a]:a})},_charmap:{"\xe0":"a","\xe1":"a","\xe2":"a","\xe3":"a","\xe4":"a","\xe5":"a","\xe6":"ae","\xe7":"c","\xe8":"e","\xe9":"e","\xea":"e","\xeb":"e","\xec":"i","\xed":"i","\xee":"i","\xef":"i","\xf0":"d","\xf1":"n","\xf2":"o","\xf3":"o","\xf4":"o","\xf5":"o","\xf6":"o","\xf8":"o","\xf9":"u","\xfa":"u","\xfb":"u","\xfc":"u","\xfd":"y","\xff":"y","\u0153":"oe","\u0430":"a","\u0431":"b","\u0432":"v","\u0433":"g","\u0434":"d","\u0435":"e","\u0437":"z","\u0438":"i","\u0439":"j","\u043a":"k","\u043b":"l","\u043c":"m","\u043d":"n","\u043e":"o","\u043f":"p","\u0440":"r","\u0441":"s","\u0442":"t","\u0443":"u","\u0444":"f","\u0445":"h","\u0446":"c","\u0447":"ch","\u0448":"sh","\u044b":"y","\u044d":"e","\u044e":"u","\u044f":"ya"}};e.exports=g}),null);
__d("TypeaheadOnDemandSource",["TypeaheadSource","createDeprecatedProperties","setTimeoutAcrossTransitions"],(function(a,b,c,d,e,f){a=function(a){"use strict";babelHelpers.inheritsLoose(c,a);function c(b,c){c=a.call(this,c)||this;c.uri=b;c.haveData={"":!0};return c}var d=c.prototype;d.didChange=function(a){this.lastChange=Date.now(),a=this.normalize(a),this.haveData[a]?this.matchResults(a):(this.waitForResults(),b("setTimeoutAcrossTransitions")(this.sendRequest.bind(this,this.lastChange,a),this.getQueryDelay()))};d.sendRequest=function(){throw new Error("Use MTypeaheadOnDemandSource!")};d.ondata=function(a,b,c){if(c)for(var d=0;d<c.length;d++)this.addResult(c[d],b);this.haveData[b]=!0;if(a!=this.lastChange)return;this.matchResults(b)};d.clearCache=function(){a.prototype.clearCache.call(this),this.haveData={"":!0}};return c}(b("TypeaheadSource"));b("createDeprecatedProperties")(a,{queryDelay:125,auxiliaryData:{}});Object.assign(a.prototype,{uri:null,lastChange:null,haveData:null});e.exports=a}),null);
__d("TypeaheadCompositeSource",["TypeaheadOnDemandSource","TypeaheadSource","isElementNode"],(function(a,b,c,d,e,f){a=function(a){"use strict";babelHelpers.inheritsLoose(c,a);function c(c,d){var e;e=a.call(this)||this;d=d||{};e.sources=c;e.cacheSourceCount=c.length;e.isWorkUser=d.isWorkUser;e.delayRender=!1;e.allowEmptyMergeKey=!0;e.shouldMergeResults=!0;for(var c=0;c<e.sources.length;++c){d=e.sources[c];d.listen("waiting",e.childWaiting.bind(babelHelpers.assertThisInitialized(e)));d.listen("resultsready",e.childResultsReady.bind(babelHelpers.assertThisInitialized(e)));d.listen("complete",e.childComplete.bind(babelHelpers.assertThisInitialized(e)));d instanceof b("TypeaheadOnDemandSource")&&(d.listen("req_dispatch",e.childRequestDispatch.bind(babelHelpers.assertThisInitialized(e))),d.listen("req_sent",e.childRequestSent.bind(babelHelpers.assertThisInitialized(e))),d.listen("req_recv",e.childRequestReceived.bind(babelHelpers.assertThisInitialized(e))),d.listen("unlock_render",e.startRender.bind(babelHelpers.assertThisInitialized(e))),d.enableImmediateReturnOfCachedResults===!1&&--e.cacheSourceCount,d.enableEagerSendRequest&&(e.delayRender=!0),e.listen("initial_results_ready",d.setCacheResultsLength.bind(d)))}return e}var d=c.prototype;d.didChange=function(a){this.results=[];this.completeCount=0;this.readyCount=0;this.lockRender=!0;for(var b=0;b<this.sources.length;++b)this.sources[b].didChange(a)};d.didStart=function(){for(var a=0;a<this.sources.length;++a)this.sources[a].didStart()};d.didClear=function(){this.results=[]};d.addExcludeID=function(a){for(var b=0;b<this.sources.length;++b)this.sources[b].addExcludeID(a)};d.removeExcludeID=function(a){for(var b=0;b<this.sources.length;++b)this.sources[b].removeExcludeID(a)};d.childWaiting=function(){(!this.results||!this.results.length)&&this.invoke("waiting")};d.childResultsReady=function(a){this.shouldMergeResults?this.results=this.mergeResults(this.results||[],a):this.results=a,++this.readyCount,this.readyCount==this.cacheSourceCount&&(this.results!==null&&this.results.forEach(function(a){a.isFromCache=!0}),this.invoke("initial_results_ready",this.countValidResults(this.results))),(!this.delayRender||!this.lockRender)&&(this.invoke("resultsready",this.results),this.readyCount==this.cacheSourceCount&&this.invoke("initial_render"))};d.childComplete=function(){this.completeCount++,this.completeCount==this.sources.length&&(this.invoke("complete"),this.invoke("after_complete"))};d.childRequestDispatch=function(a){this.invoke("req_dispatch",a)};d.childRequestSent=function(){this.invoke("req_sent")};d.childRequestReceived=function(a){this.invoke("req_recv",a)};d.startRender=function(){this.lockRender=!1,this.invoke("resultsready",this.results),this.invoke("initial_render")};d.showQueryResultsOnFocus=function(){(!this.delayRender||!this.lockRender)&&this.invoke("resultsready",this.results)};d.countValidResults=function(a){var c=0;a.forEach(function(a){a=b("isElementNode")(a)?a.getAttribute(this.mergeKey):a[this.mergeKey];a!=null&&++c},this);return c};d.getResult=function(a){var b;for(var c=0;c<this.sources.length;++c){b=this.sources[c].getResult(a);if(b!==void 0)break}return b};d.disableEmptyMergeKey=function(){this.allowEmptyMergeKey=!1};d.mergeResults=function(a,c){var d=[].concat(a);if(c.length===0)return d;var e={},f;for(f=0;f<a.length;++f){var g=a[f];g=b("isElementNode")(g)?g.getAttribute(this.mergeKey):g[this.mergeKey];e[g]=!0}for(f=0;f<c.length;++f){g=c[f];a=b("isElementNode")(g)?g.getAttribute(this.mergeKey):g[this.mergeKey];(this.allowEmptyMergeKey||a!=null)&&!(a in e)&&d.push(g)}return d};d.setShouldMergeResults=function(a){this.shouldMergeResults=a};return c}(b("TypeaheadSource"));Object.assign(a.prototype,{sources:null,results:null,completeCount:0,mergeKey:"rel",isWorkUser:!1});e.exports=a}),null);
__d("TypeaheadPreloadedSource",["TypeaheadSource"],(function(a,b,c,d,e,f){a=function(a){"use strict";babelHelpers.inheritsLoose(b,a);function b(b){var c;c=a.call(this)||this;c.uri=b;return c}var c=b.prototype;c.didChange=function(a){this.ready?this.matchResults(a):(this.lastValue=a,this.waitForResults())};c.didStart=function(){throw new Error("Use MTypeaheadPreloadedSource!")};c.ondata=function(a){for(var b=0;b<a.length;++b)this.addResult(a[b]);this.lastValue!==null&&this.matchResults(this.lastValue);this.ready=!0};return b}(b("TypeaheadSource"));Object.assign(a.prototype,{ready:!1,uri:null,lastValue:null});e.exports=a}),null);
__d("MDynaTemplate",["HTML","err"],(function(a,b,c,d,e,f){var g={_otag:"[[",_regexOtag:"\\[\\[",_regexCtag:"\\]\\]",_regexTag:0,_regexNewTag:0,_templates:{},_alias:{},_contains:function(a,b){return b.indexOf(g._otag+a)!=-1},_escapeChar:function(a){switch(a){case"&":return"&amp;";case'"':return"&quot;";case"'":return"&#39;";case"<":return"&lt;";case">":return"&gt;";default:return a}},_escape:function(a){a=a===null?"":""+a;return a.replace(/&(?!\w+;)|[\"\'<>]/g,g._escapeChar)},registerTemplates:function(a){for(var b in a){var c=a[b];g._alias[c[0]]=c[1];g._templates[b]=c[1]}},renderToHtml:function(a,c){if(a.charAt(0)=="@")return g.renderToHtml(g._alias[a.substring(1)],c);(g._contains("#",a)||g._contains("^",a))&&(a=a.replace(g._regexTag,function(a,b,d,e){a=c[d];a=a&&a.__html!==void 0?a.__html:a;if(b=="^")if(!a||Array.isArray(a)&&a.length===0)return g.renderToHtml(e,c);else return"";else if(b=="#"){if(Array.isArray(a)){d=[];for(var b=0;b<a.length;b++)d.push(g.renderToHtml(e,a[b]));return d.join("")}else if(a&&typeof a==="object")return g.renderToHtml(e,a);else if(!(typeof a==="function"))if(a)return g.renderToHtml(e,c);return""}}));return!g._contains("",a)?a:a.replace(g._regexNewTag,function(a,d,e){e=e.replace(/^\s*|\s*$/g,"");a=c[e];if(!a||Array.isArray(a)&&a.length===0)return"";switch(d){case">":if(a[0].charAt(0)=="@")return g.renderToHtml(a[0],a[1]);else if(!(a[0]in g._templates))return"";return g.renderToHtml(g._templates[a[0]],a[1]);case"%":break;default:return window.HTML&&a instanceof b("HTML")?a.toString():a.__html!==void 0?a.__html:g._escape(a)}})}};(function(){g._regexTag=new RegExp(g._regexOtag+"(\\^|\\#)\\s*(.+)\\s*"+g._regexCtag+"\n*([\\s\\S]+?)"+g._regexOtag+"\\/\\s*\\2\\s*"+g._regexCtag+"\\s*","mg"),g._regexNewTag=new RegExp(g._regexOtag+"(>|\\[|%)?([^\\/#\\^]+?)\\1?"+g._regexCtag+"+","g")})();e.exports=g}),null);
__d("MSearchConst",[],(function(a,b,c,d,e,f){"use strict";a=46;b="news";c="video";d="content";e="mnns";var g="mnngns",h="click",i="imp";f.refid=a;f.news_search=b;f.video_search=c;f.content_search=d;f.msite_news_null_state=e;f.msite_news_non_gs_null_state=g;f.event_click=h;f.event_impression=i}),66);
__d("MRecentSearchesUpdater",["Stratcom","SubscriptionsHandler"],(function(a,b,c,d,e,f){var g="search-recent-queries";a=function(){"use strict";function a(a){this.$1=new(b("SubscriptionsHandler"))(),this.$1.addSubscriptions(a.listen("change",this.changeQuery.bind(this)),a.listen("select",this.addRecentSearchWithSelection.bind(this)),a.listen("show",this.changeResults.bind(this)),a.listen("query",this.addRecentSearchWithQuery.bind(this)),a.listen("refreshRecent",this.refreshRecent.bind(this)))}var c=a.prototype;c.destroy=function(){this.$1.release()};c.refreshRecent=function(){b("Stratcom").invoke("refreshRecent",g,{})};c.changeQuery=function(a){this.currentQuery=a};c.changeResults=function(a){a.show?this.results=a.show.slice():this.results=a.slice()};c.addRecentSearchWithQuery=function(){b("Stratcom").invoke("addRecentQuery",g,{query:this.currentQuery})};c.addRecentSearchWithSelection=function(a){a=a&&(a.rel||a.getAttribute("rel"));if(!a){this.addRecentSearchWithQuery();return}for(var c=0;c<this.results.length;c++)this.results[c].id===a&&b("Stratcom").invoke("addRecentSearch",g,{result:this.results[c]})};return a}();e.exports=a}),null);
__d("MSearchTypeaheadLogger",["invariant","DOM","MLegacyDataStore","MRequest","MTouchClick","Stratcom","SubscriptionsHandler","clearTimeout","setTimeoutAcrossTransitions"],(function(a,b,c,d,e,f,g,h){"use strict";var i=1e3;function j(a){var b=[];for(var c=0;c<a.length;c++){var e=a[c],f=e.getAttribute("rel");if(f!=null){f={id:f};var g=e.getAttribute("type");g!=null&&(f.type=g);g=e.getAttribute("renderType");g!=null&&(f.renderType=g);g=d("DOM").find(e,"a","typeahead-result");e=d("MLegacyDataStore").get(g);g=g.getAttribute("data-extra");if(g!=null)try{g=JSON.parse(g)}catch(a){g={}}f=babelHelpers["extends"]({},f,e,g);b.push(f)}}return b}a=function(){function a(a,b){this.typeahead=a,this.uri=b,this.initialize(),this.emptyQueryResults=[],this.addSubscriptions()}var b=a.prototype;b.destroy=function(){this.subscriptions.release()};b.addSubscriptions=function(){var a=this,b=d("MTouchClick").hasTouchEvents()?"touchend":"click";this.subscriptions&&this.subscriptions.release();this.subscriptions=new(c("SubscriptionsHandler"))();this.subscriptions.addSubscriptions(this.typeahead.listen("focus",function(){var b=a.typeahead.getValue();b!=null||h(0,6223);a.startSession(b,{force:!0})}),this.typeahead.listen("change",function(b,c){c===void 0&&(c={}),c.preventSessionStart||a.startSession(b),a.sessionInProgress()&&(a.data.query=b)}),this.typeahead.listen("keypress",function(b){a.keypressed+=1}),this.typeahead.listen("select",function(b){var d=b&&(b.rel||b.getAttribute("rel"));a.data.query||(a.data.null_state=1);a.data.click_event=Date.now();d?a.data.selected_id=d:a.data.selected_search=1;a.results&&a.results.length&&a.data.query&&a.data.query.length&&c("Stratcom").invoke("m:search-typeahead:select",null,{node:b,results:a.results.slice(),query:a.data.query.slice()});a.logToServer()}),this.typeahead.listen("show",function(b,c){c===void 0&&(c={});if(!c.preventSessionStart){c=a.typeahead.getValue();c!=null||h(0,6223);a.startSession(c)}a.sessionInProgress()&&(b.show?(a.results=j(b.show),a.typeahead.getValue()||(a.emptyQueryResults=a.results)):(a.data.candidate_results=b.slice().filter(function(a){return!a.isInvalidated}),a.typeahead.getValue()||(a.emptyQueryResults=a.data.candidate_results)))}),this.typeahead.listen("query",function(b,c){a.data.selected_search=1,a.data.selected_type=c,a.logToServer()}),c("Stratcom").listen(b,"search-activator",function(){a.startSession("",{force:!0})}),c("Stratcom").listen(b,"graph-search-activator",function(){a.startSession("",{force:!0})}),c("Stratcom").listen("m:search:typeahead:activated",null,function(){a.startSession("",{force:!0})}),this.typeahead.listen("scroll",function(){a.data.scrolled=1}))};b.updateTypeahead=function(a){this.typeahead=a,this.addSubscriptions()};b.blur=function(a){var b=this;this.blurInProgress=!0;this.blurTimeout=c("setTimeoutAcrossTransitions")(function(){b.data.session_end_reason=a,b.data.query||(b.data.null_state=1),b.logToServer()},i)};b.startSession=function(a,b){b===void 0&&(b={}),this.sessionID==null&&(a||b.force)&&(this.data={},this.keypressed=0,this.sessionID=Math.random().toString(),this.data.query=a,this.data.session_start=Date.now(),c("Stratcom").invoke("m-typeahead-logger:new-session-id",null,{sessionID:this.sessionID,query:a}))};b.sessionInProgress=function(){return this.sessionID!==null&&!this.blurInProgress?!0:!1};b.logToServer=function(){c("clearTimeout")(this.blurTimeout);if(this.sessionID!=null){this.data.sid=this.sessionID;this.data.count_keys_pressed=this.keypressed;this.data.typeahead_type=this.typeahead.getTypeaheadType&&this.typeahead.getTypeaheadType();this.data.candidate_results=this.data.candidate_results||[];this.data.candidate_results.length===0&&(this.data.candidate_results=this.results);this.data.null_state_candidate_results=this.emptyQueryResults;this.data.last_state=this.getLastState(this.data.query,this.data.candidate_results);var a=new(c("MRequest"))(this.uri);a.setMethod("POST").setData({stats:JSON.stringify(this.data)}).send()}this.initialize()};b.getLastState=function(a,b){var c="typed";a=a.length===0&&b.every(function(a){return a.isNullStateSuggestion});a&&(c="null_state");return c};b.initialize=function(){this.data={},this.sessionID=null,this.keypressed=0,this.results=[],this.blurInProgress=!1};return a}();g["default"]=a}),98);
__d("MTypeaheadCache",["MBootstrapCacheMaxCacheTime","MCache","URI"],(function(a,b,c,d,e,f){var g,h="1",i=12096e5;function j(a){var c=b("MCache").getItem(a);(!c||c.cacheVersion!==h)&&(c={cacheVersion:h,cachedKeys:{}},b("MCache").setItem(a,c));var d=c.cachedKeys,e=!1,f=b("MBootstrapCacheMaxCacheTime").maxCacheTimeByKey[a];f=f!=null?f:i;f=Date.now()-f;for(var g in d)d[g].time<f&&(e=!0,delete d[g]);e&&b("MCache").setItem(a,c);return c}function k(a){return"typeahead_"+a}function l(a){a=new(g||(g=b("URI")))(a);var c=a.getQueryData();c=c.cacheBust;c||a.addQueryData("noBust","");a.removeQueryData("cacheBust");a=a.toString();return{cacheKey:a,busterToken:c}}a={get:function(a,b){b=l(b);var c=b.cacheKey;b=b.busterToken;a=j(k(a)).cachedKeys[c];return a&&a.cacheBusterToken===b?a.data:null},set:function(a,c,d){a=k(a);var e=j(a);c=l(c);var f=c.cacheKey;c=c.busterToken;e.cachedKeys[f]={cacheBusterToken:c,time:Date.now(),data:d};b("MCache").setItem(a,e)}};e.exports=a}),null);
__d("MTypeaheadCachableSource",["MRequest","MTypeaheadCache","TypeaheadPreloadedSource","createDeprecatedProperties","eventsMixinDeprecated"],(function(a,b,c,d,e,f){a=function(a){"use strict";babelHelpers.inheritsLoose(c,a);function c(b,c){b=a.call(this,b)||this;b.sourceKey=c||null;return b}var d=c.prototype;d.didStart=function(){var a=this.ondata,d=c._bootstrapping;if(this.sourceKey){if(d[this.sourceKey]===!0){c.listen("bootstrapped",function(a){a.source_key===this.sourceKey&&this.didStart()}.bind(this));return}d=b("MTypeaheadCache").get(this.sourceKey,this.uri);if(d){this.invoke("rawresultsready",d);a.call(this,d);return}}this.uri&&this.sendRequest()};d.sendRequest=function(){var a=this,d=c._bootstrapping;d[this.sourceKey]=!0;var e=new(b("MRequest"))(this.uri).setMethod("GET").setIgnoreErrors(!0);e.listen("done",function(c){c=c!=null&&c.payload!=null?c.payload:c;c!=null&&Array.isArray(c.nullstate)&&(c=c.nullstate);Array.isArray(c)||(c=[]);for(var e=0;e<c.length;++e)c[e].bootstrap=1;a.sourceKey&&b("MTypeaheadCache").set(a.sourceKey,a.uri,c);a.invoke("rawresultsready",c);a.ondata.call(a,c);delete d[a.sourceKey];a.invoke("bootstrapped",{source_key:a.sourceKey})});e.listen("finally",function(){delete d[a.sourceKey]});e.listen("open",function(){var b=e.getTransport();b.withCredentials=!0;window.FW_ENABLED&&!a.getNofwheaders()&&(b.setRequestHeader("FB_FW","1"),window.FB_FW_VERSION&&b.setRequestHeader("FB_FW_VERSION",window.FB_FW_VERSION),window.FB_FW_DEVICE&&b.setRequestHeader("FB_FW_DEVICE",window.FB_FW_DEVICE))});this.getAuxiliaryData()&&e.setData(this.getAuxiliaryData());e.send()};return c}(b("TypeaheadPreloadedSource"));b("eventsMixinDeprecated")(a,["bootstrapped","rawresultsready"]);b("createDeprecatedProperties")(a,{nofwheaders:!1,showSecondaryAction:!1,auxiliaryData:{}});Object.assign(a,{_bootstrapping:{}});Object.assign(a.prototype,{sourceKey:null});e.exports=a}),null);
__d("MTypeaheadHelpers",["cx","fbt","CSS","DOM","FWLoader","HTML","MDynaTemplate","MLegacyDataStore","uniqueID"],(function(a,b,c,d,e,f,g,h){var i=b("FWLoader").FW,j=43,k=65536;a={getSecondaryAction:function(a){if(a.action=="phone")return this.getPhoneAction(a);else if(a.action=="add_friend")return this.getAddAction(a);else if(a.action=="add_contact")return this.getAddContactAction(a);else if(a.action=="message")return this.getMessageAction(a);return null},getPhoneAction:function(a){if(!a.paths||!(a.paths.mobile||a.paths.sms))return null;a=b("MDynaTemplate").renderToHtml("@CallButtonTemplate",{call_uri:a.paths.mobile,call_style:a.paths.mobile?"":"display:none;",sms_uri:a.paths.sms,sms_style:a.paths.sms?"":"display:none;"});return new(b("HTML"))(a)},getAddAction:function(a){return!a.paths||!a.paths[a.action]?null:new(b("HTML"))(a.paths[a.action])},getAddContactAction:function(a){return!a.paths||!a.paths[a.action]?null:a.paths[a.action]},getMessageAction:function(a){a=b("MDynaTemplate").renderToHtml("@MessageButtonTemplate",{message_uri:a.paths.message});return new(b("HTML"))(a)},determineIconSize:function(a,b){var c=b.photoSize||j;b=b.photo;var d=new Image(),e=function(b){var a=this;if(b.type==="load"){b=document.getElementById(a.targetID);if(b){if(a.naturalWidth>c||a.naturalHeight>c){var d=window.devicePixelRatio,e=Math.round(a.naturalHeight/d);d=Math.round(a.naturalWidth/d);e=Math.min(e,c);d=Math.min(d,c);b.style.backgroundSize=d<e?d+"px auto":"auto "+e+"px"}b.style.backgroundImage="url("+a.src+")"}}a.onload=null;a.onerror=null;a.targetID=null};d.targetID=a;d.onload=e;d.onerror=e;d.src=b},getI18NTypeMap:function(a){var b={App:h._(/*FBT_CALL*/"App"/*FBT_CALL*/),Event:h._(/*FBT_CALL*/"Event"/*FBT_CALL*/),Group:h._(/*FBT_CALL*/"Group"/*FBT_CALL*/),Page:h._(/*FBT_CALL*/"Page"/*FBT_CALL*/),page:h._(/*FBT_CALL*/"page"/*FBT_CALL*/),Place:h._(/*FBT_CALL*/"Place"/*FBT_CALL*/),User:h._(/*FBT_CALL*/"User"/*FBT_CALL*/)};return b[a]?b[a]:a},createNode:function(a,c){if(a instanceof HTMLElement)return a;var d=[];if(a.photo){var e=b("DOM").create("div",{className:"profile-icon"});d.push(e);this.determineIconSize(b("DOM").uniqID(e),a)}e=[a.display];if(a.verified)e.push(a.verified);else if(a.is_verified){var f=b("DOM").create("span",{className:"_56_f _5dzy _5dz_ _3twv badge"});e.push(f)}f=b("DOM").create("i",{className:"img presence",sigil:"presence"},"");b("DOM").hide(f);e.push(f);f=b("DOM").create("span",{className:"mfsl"},e);d.push(f);a.photo||b("CSS").conditionClass(f,"noimage",!0);e=a.subtext;b("CSS").conditionClass(f,"name",!0);if(e){f="subtext mfss fcg";a.photo||(f+=" subtext-noimage");d.push(b("DOM").create("span",{className:f},e))}f={href:a.uri,name:a.name||a.display,className:"primary touchable",sigil:"touchable typeahead-result",rel:a.id,role:"option"};a.meta&&(f.meta=a.meta);e=b("DOM").create("a",f,d);f=JSON.stringify(a);f.length>k||e.setAttribute("data-extra",f);e.setAttribute("data-testid",a.id);a.weak_reference&&e.setAttribute("weak_reference",!0);a.renderType&&e.setAttribute("renderType",a.renderType);window.FW_ENABLED&&i.isIOS()&&b("MLegacyDataStore").set(e,{nativeClick:!0});a.bootstrap&&b("MLegacyDataStore").set(e,{bootstrap:1});a.gender&&b("MLegacyDataStore").set(e,{gender:a.gender});a.untranslatedType&&b("MLegacyDataStore").set(e,{type:a.untranslatedType});a.openinnewtab&&e.setAttribute("target","_blank");a.isNullStateSuggestion&&b("MLegacyDataStore").set(e,{isNullStateSuggestion:a.isNullStateSuggestion});d=[e];if(c){f=this.getSecondaryAction(a);f&&d.push(f)}a.nativethirdpartyappicon&&d.push(new(b("HTML"))(b("MDynaTemplate").renderToHtml("@NativeThirdPartyAppIconTemplate")));e="jx-result";(a.nativethirdpartyappicon||c&&this.getSecondaryAction(a))&&(e+=" hasSecondaryAction");a.action=="add_friend"&&a.addfriendtemplate&&b("MDynaTemplate").renderToHtml("@AddFriendLoadResourcesTemplate");f=b("DOM").create("div",{className:e,id:b("uniqueID")(),rel:a.id,sigil:"jx-result"+(a.action=="add_friend"?" undoable-action":"")},d);a.renderType!=null&&f.setAttribute("renderType",a.renderType);a.untranslatedType!=null&&f.setAttribute("type",a.untranslatedType);a.category!=null&&f.setAttribute("category",a.category);return f}};e.exports=a}),null);
__d("MTypeaheadTouchSource",["MTypeaheadCachableSource","MTypeaheadHelpers","TypeaheadInternationalNormalizer","createDeprecatedProperties"],(function(a,b,c,d,e,f){a=function(a){"use strict";babelHelpers.inheritsLoose(c,a);function c(c,d){c=a.call(this,c,d)||this;c.setNormalizer(b("TypeaheadInternationalNormalizer").normalize);return c}var d=c.prototype;d.createNode=function(a){return b("MTypeaheadHelpers").createNode(a,this.getShowSecondaryAction())};d.matchResults=function(a){a=this.normalize(a);b("MTypeaheadCachableSource").prototype.matchResults.call(this,a)};d.ondata=function(a){for(var c=0;c<a.length;++c)a[c].idx=c;b("MTypeaheadCachableSource").prototype.ondata.apply(this,[a])};return c}(b("MTypeaheadCachableSource"));b("createDeprecatedProperties")(a,{transformer:function(a){var b=a.openinnewtab!=null?a.openinnewtab:a.type==="App";return{name:a.text,uri:a.path,id:a.uid,photo:a.photo,photoSize:a.photo_size,gender:a.gender,display:a.display||a.text,action:a.action,paths:a.paths,permissions:a.permissions,type:a.type,openinnewtab:b,subtext:a.subtext,nativethirdpartyappicon:a.nativethirdpartyappicon,bootstrap:a.bootstrap,idx:a.idx,tokenType:a.tokenType,renderType:a.render_type,untranslatedType:a.untranslated_type,weak_reference:a.weak_reference,is_verified:a.is_verified}},sortHandler:function(a,b,c){a=function(a,b){a=isNaN(a.idx)?Number.MAX_VALUE:a.idx;b=isNaN(b.idx)?Number.MAX_VALUE:b.idx;return a-b};b.sort(a)}});e.exports=a}),null);
__d("XLiveController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/sports/{?query}/",{source:{type:"String"},query:{type:"String"},name:{type:"String"},cursor:{type:"String"},date:{type:"Int"},ref:{type:"String"},region_id:{type:"Int"},year:{type:"Int"},fref:{type:"String"}})}),null);
__d("MTypeaheadNullstateSource",["MTypeaheadTouchSource","Stratcom","URI","XLiveController","setTimeoutAcrossTransitions"],(function(a,b,c,d,e,f){var g,h="graph-search-entry-point",i="search-recent-queries";a=function(a){"use strict";babelHelpers.inheritsLoose(c,a);function c(c,d){var e;e=a.call(this,c,d)||this;b("Stratcom").listen("setCurrentProfileID",h,function(a){a=a.getData().profileID;if(a===e.profileID)return;e.profileID=a;e.refresh()});b("Stratcom").listen("addRecentSearch",i,function(a){a=a.getData().result;if(!a)return;e.addRecentResult(a)});b("Stratcom").listen("addRecentQuery",i,function(a){a=a.getData().query;if(!a)return;a=e.makeRecentResultWithQuery(a);e.addRecentResult(a)});b("Stratcom").listen("refreshRecent",i,function(){e.refresh()});b("Stratcom").listen("searchRefreshNullstate",null,function(){return e.refresh()});b("Stratcom").listen("m:search:refresh-nullstate-with-delay",null,function(){b("setTimeoutAcrossTransitions")(function(){e.refresh()},3e4)});return e}var d=c.prototype;d.makeRecentResultWithQuery=function(a){return{display:a,name:a,id:a,uri:"/search/top/?q="+a,type:"keyword"}};d.addRecentResult=function(a){var b;if(a.isTrending)return;a.idx=0;a.isRecentSearch=!0;b=(b={},b[a.id]=a,b);var c=0;for(var d in this._raw)d!=a.id&&(c++,this._raw[d].idx=c,b[d]=this._raw[d]);this._raw=b};d.refresh=function(){this._raw={},this.sendRequest()};d.getAuxiliaryData=function(){var a;return{disable_single_state:Boolean(this.singleStateDisabled),enable_scoped:Boolean(this.scopedEnabled),profile_id:(a=(a=this.profileID)!=null?a:this.groupID)!=null?a:null}};d.ondata=function(b){a.prototype.ondata.call(this,b)};d.matchResults=function(a){var b=[];a===""&&(b=Object.keys(this._raw));b.sort(j(this._raw));this.invoke("resultsready",this.renderNodes(a,b));this.invoke("complete")};d.setCurrentProfileID=function(a){this.profileID=a};d.setForceDisableSingleState=function(a){this.singleStateDisabled=a};d.setEnableScoped=function(a){this.scopedEnabled=a};d.getTransformer=function(){return function(a){if(a.keyword_type==="trending"){var c=new(g||(g=b("URI")))("/topic/trending/"+a.id);a.isSport&&(c=b("XLiveController").getURIBuilder().setString("query",String(a.id)).setString("ref","m_search_null_state").getURI());return{id:a.name,display:a.name,name:a.name,uri:c.toString(),topicID:a.id,trendingQueryID:a.trendingQueryID,subtext:a.articleTitle,type:"trending",photo:a.articleImageURI,actionTime:0,isTrending:!0,isNullStateSuggestion:!0}}if(["grammar","keyword"].includes(a.type)){c=new(g||(g=b("URI")))(a.path||a.uri);return{cost:a.cost,idx:a.idx,display:a.text,name:a.text,type:"keyword",id:a.uid,uri:c.toString(),actionTime:a.action_time,isPYMK:a.pymk,isRecentSearch:a.recent_search,subtext:a.subtext,logInfo:a.logInfo,isNullStateSuggestion:!0,isScoped:a.is_scoped,isPopularSearch:a.popular_search}}return{actionTime:a.action_time,name:a.text,uri:a.path||a.uri,id:a.uid||a.id,display:a.name||a.text,photo:a.photo,category:a.category,cost:a.cost,idx:a.idx,tokens:a.tokens,type:a.type[0].toUpperCase()+a.type.slice(1),verticalType:a.vertical_type,is_verified:a.is_verified,subtext:a.subtext,isPYMK:a.pymk,isRecentSearch:a.recent_search,logInfo:a.logInfo,isNullStateSuggestion:!0,isScoped:a.is_scoped,isPopularSearch:a.popular_search,isWorkForeignEntity:a.is_work_foreign_entity}}};return c}(b("MTypeaheadTouchSource"));function j(a){return function(b,c){b=a[b];c=a[c];b=isNaN(b.idx)?Number.MAX_VALUE:b.idx;c=isNaN(c.idx)?Number.MAX_VALUE:c.idx;return b-c}}e.exports=a}),null);
__d("MTypeaheadOnDemandSource",["MRequest","MTypeaheadHelpers","Stratcom","TypeaheadInternationalNormalizer","TypeaheadNormalizer","TypeaheadOnDemandSource","createDeprecatedProperties","setTimeoutAcrossTransitions","throttle"],(function(a,b,c,d,e,f){a=function(a){"use strict";babelHelpers.inheritsLoose(c,a);function c(c,d){c=a.call(this,c,d)||this;c.previousResults=null;c.setNormalizer(b("TypeaheadInternationalNormalizer").normalize);c.setSanitizer(b("TypeaheadNormalizer").normalize);c._allowFreeformEntry=!1;c._cacheResultsLength=0;c._maxResults=1e6;b("Stratcom").listen("m-typeahead-logger:new-session-id",null,function(a){this._sessionID=a.getData().sessionID}.bind(babelHelpers.assertThisInitialized(c)));return c}var d=c.prototype;d.setAllowFreeformEntry=function(a){this._allowFreeformEntry=a};d.createNode=function(a){return b("MTypeaheadHelpers").createNode(a,this.getShowSecondaryAction())};d.didChange=function(a){this.lastChange=Date.now();var c=this.getSanitizer()(a);if(this.haveData[c]){c=this.normalize(c);c=this.getMatchedResults(c);this.invoke("resultsready",c);this.enableEagerSendRequest&&this.invoke("unlock_render");this.invoke("complete")}else{this.enableImmediateReturnOfCachedResults===!0?(this.previousResults=this.getMatchedResults(a),this.invoke("resultsready",this.previousResults)):this.previousResults=null;if(this._cacheResultsLength>=this._maxResults){this.enableEagerSendRequest&&this.invoke("unlock_render");this.invoke("complete");return}this.enableEagerSendRequest||this.waitForResults();this.invoke("req_dispatch",this._sessionID);this.throttleSendRequest?this.throttleSendRequest(this.lastChange,a):b("setTimeoutAcrossTransitions")(this.sendRequest.bind(this,this.lastChange,a),this.getQueryDelay());this.enableEagerSendRequest&&(this.invoke("unlock_render"),this.waitForResults())}};d.setEnableImmediateReturnOfCachedResults=function(a){this.enableImmediateReturnOfCachedResults=a};d.setEnableEagerSendRequest=function(a){this.enableEagerSendRequest=a};d.setThrottleSendRequest=function(a){this.throttleSendRequest=b("throttle").acrossTransitionsWithBlocking(this.sendRequest.bind(this),a)};d.setCacheResultsLength=function(a){this._cacheResultsLength=a};d.setMaxResults=function(a){this._maxResults=a};d.sendRequest=function(a,c){if(a!=this.lastChange)return;if(!this.uri)return;a=new(b("MRequest"))(this.uri);a.setData(Object.assign(this.getAuxiliaryData()||{},{q:c,session_id:this._sessionID}));a.setMethod("GET");a.listen("done",function(a,b,c){this.ondata(a,b,c)}.bind(this,this.lastChange,c));a.send();this.invoke("req_sent")};d.ondata=function(a,b,c){c=c.payload||c;this.invoke("req_recv",c?c.length:0);var d=0,e=0,f={};if(this.previousResults!=null){e=this.previousResults.length;for(d=0;d<this.previousResults.length;d++){var g=this.previousResults[d];g.idx=d;this._raw[g.id]=g;this.addToLookup(g.id,b);f[g.id]=g.id}}if(c){if(c.length!==0){for(g=0;g<c.length;++g)c[g].idx=g+e;for(g=0;g<c.length;g++)c[g].uid in f||this.addResult(c[g],b)}else this._allowFreeformEntry&&this.addResult({text:b,uid:0,path:"#"},b);this.haveData[b]=!0;if(a!=this.lastChange)return;this.matchResults(b)}};d.addResult=function(a,b){var c=this.addToLookup.bind(this);a.uid in this._raw&&(this._raw[a.uid].idx=a.idx);a=(this.getTransformer()||this._defaultTransformer)(a);this._firstSeenOnValue[a.id]=this._firstSeenOnValue[a.id]||b;!(a.id in this._raw)?(this._raw[a.id]=a,c(a.id,a.name),c(a.id,b)):(this._raw[a.id]=a,c(a.id,b))};d.addToLookup=function(a,b){b=this.tokenize(b);for(var c=0;c<b.length;++c)this._lookup[b[c]]=this._lookup[b[c]]||[],this._lookup[b[c]].push(a)};d.sortHits=function(a,b){a=function(a,b){a=this._raw[a];a=isNaN(a.idx)?Number.MAX_VALUE:a.idx;b=this._raw[b];b=isNaN(b.idx)?Number.MAX_VALUE:b.idx;return a-b}.bind(this);b.sort(a)};d.renderNodes=function(a,c){return b("TypeaheadOnDemandSource").prototype.renderNodes.apply(this,arguments)};d.clearCache=function(){a.prototype.clearCache.call(this),this.previousResults=null};return c}(b("TypeaheadOnDemandSource"));b("createDeprecatedProperties")(a,{sanitizer:null,transformer:function(a){return{name:a.text,uri:a.path,id:a.uid,photo:a.photo,display:a.display||a.text,action:a.action,paths:a.paths,permissions:a.permissions,photoSize:a.photo_size,type:a.type,openinnewtab:a.openinnewtab,subtext:a.text_only_subtext||a.subtext,nativethirdpartyappicon:a.nativethirdpartyappicon,idx:a.idx,renderType:a.render_type,untranslatedType:a.untranslated_type,verified:a.verified,weak_reference:a.weak_reference,geo_location_type:a.geo_location_type,city_id:a.city_id,city_text:a.city_text,isScoped:a.is_scoped,categoryID:a.cid,tagID:a.tid,category:a.category,location:a.location,street_address:a.street_address,postal_code:a.postal_code}},showSecondaryAction:!0});e.exports=a}),null);