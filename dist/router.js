(()=>{var e={840:(e,t,r)=>{const n=r(331),o=r(359),a=r(934),i=r(250),l=r(554),s=r(745),u=r(536),c=r(180),p=r(374),d=s(),f={"/":d,"/home":d,"/자유":n(),"/비밀":o(),"/정보":a(),"/홍보":i(),"/SW":l(),"/login":u(),"/login2":c(),"/signup":p()};function h(e,t){e.innerHTML=t}e.exports={initialRoutes:function(e){h(e,f["/"]),window.onpopstate=()=>h(e,f[window.location.pathname])},historyRouterPush:function(e,t){window.history.pushState({},e,window.location.origin+e),h(t,f[e])}}},554:(e,t,r)=>{var n=r(655);e.exports=(n.default||n).template({compiler:[8,">= 4.3.0"],main:function(e,t,r,n,o){return'<div class="page">\r\n  <h1>SW 게시판</h1>\r\n</div>'},useData:!0})},745:(e,t,r)=>{var n=r(655);e.exports=(n.default||n).template({compiler:[8,">= 4.3.0"],main:function(e,t,r,n,o){return'<div class="page">\r\n  <h1>Home</h1>\r\n</div>'},useData:!0})},536:(e,t,r)=>{var n=r(655);e.exports=(n.default||n).template({compiler:[8,">= 4.3.0"],main:function(e,t,r,n,o){return'<div class="page">\r\n    <div>ID를 입력하시오. <input type="text" id="userid" name="userid" style="width:100px;"> </div>\r\n    <button onclick=\'location.href="/login2"\' class=\'history\'>로그인</button>\r\n    <button onclick=\'location.href="/signup"\' class=\'history\'>회원가입</button>\r\n    <div id="history-app"></div>\r\n</div>\r\n'},useData:!0})},180:(e,t,r)=>{var n=r(655);e.exports=(n.default||n).template({compiler:[8,">= 4.3.0"],main:function(e,t,r,n,o){return'<div class="page">\r\n  <h1>Log in 2</h1>\r\n</div>'},useData:!0})},374:(e,t,r)=>{var n=r(655);e.exports=(n.default||n).template({compiler:[8,">= 4.3.0"],main:function(e,t,r,n,o){return'<div class="page">\r\n  <h1>Sign up</h1>\r\n</div>'},useData:!0})},359:(e,t,r)=>{var n=r(655);e.exports=(n.default||n).template({compiler:[8,">= 4.3.0"],main:function(e,t,r,n,o){return'<div class="page">\r\n  <h1>비밀 게시판</h1>\r\n</div>'},useData:!0})},331:(e,t,r)=>{var n=r(655);e.exports=(n.default||n).template({compiler:[8,">= 4.3.0"],main:function(e,t,r,n,o){return'<div class="page">\r\n  <p>자유 게시판</p>\r\n  <button type="button" class="btn">등록하기</button>\r\n  <div class="board">\r\n      <p>12/18 아주 비기너 참여하시는.. 익명 </p>\r\n      <p>12/18 아주 비기너 참여하시는.. 익명 </p>\r\n      <p>12/18 아주 비기너 참여하시는.. 익명 </p>\r\n      <p>12/18 아주 비기너 참여하시는.. 익명 </p>\r\n      <p>12/18 아주 비기너 참여하시는.. 익명 </p>\r\n      <p>12/18 아주 비기너 참여하시는.. 익명 </p>\r\n      <p>12/18 아주 비기너 참여하시는.. 익명 </p>\r\n  </div>\r\n</div>'},useData:!0})},934:(e,t,r)=>{var n=r(655);e.exports=(n.default||n).template({compiler:[8,">= 4.3.0"],main:function(e,t,r,n,o){return'<div class="page">\r\n  <h1>정보 게시판</h1>\r\n</div>'},useData:!0})},250:(e,t,r)=>{var n=r(655);e.exports=(n.default||n).template({compiler:[8,">= 4.3.0"],main:function(e,t,r,n,o){return'<div class="page">\r\n  <h1>홍보 게시판</h1>\r\n</div>'},useData:!0})},34:(e,t,r)=>{"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}t.__esModule=!0;var a=o(r(207)),i=n(r(586)),l=n(r(24)),s=o(r(704)),u=o(r(546)),c=n(r(179));function p(){var e=new a.HandlebarsEnvironment;return s.extend(e,a),e.SafeString=i.default,e.Exception=l.default,e.Utils=s,e.escapeExpression=s.escapeExpression,e.VM=u,e.template=function(t){return u.template(t,e)},e}var d=p();d.create=p,c.default(d),d.default=d,t.default=d,e.exports=t.default},207:(e,t,r)=>{"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.HandlebarsEnvironment=p;var o=r(704),a=n(r(24)),i=r(870),l=r(576),s=n(r(765)),u=r(467);t.VERSION="4.7.7",t.COMPILER_REVISION=8,t.LAST_COMPATIBLE_COMPILER_REVISION=7,t.REVISION_CHANGES={1:"<= 1.0.rc.2",2:"== 1.0.0-rc.3",3:"== 1.0.0-rc.4",4:"== 1.x.x",5:"== 2.0.0-alpha.x",6:">= 2.0.0-beta.1",7:">= 4.0.0 <4.3.0",8:">= 4.3.0"};var c="[object Object]";function p(e,t,r){this.helpers=e||{},this.partials=t||{},this.decorators=r||{},i.registerDefaultHelpers(this),l.registerDefaultDecorators(this)}p.prototype={constructor:p,logger:s.default,log:s.default.log,registerHelper:function(e,t){if(o.toString.call(e)===c){if(t)throw new a.default("Arg not supported with multiple helpers");o.extend(this.helpers,e)}else this.helpers[e]=t},unregisterHelper:function(e){delete this.helpers[e]},registerPartial:function(e,t){if(o.toString.call(e)===c)o.extend(this.partials,e);else{if(void 0===t)throw new a.default('Attempting to register a partial called "'+e+'" as undefined');this.partials[e]=t}},unregisterPartial:function(e){delete this.partials[e]},registerDecorator:function(e,t){if(o.toString.call(e)===c){if(t)throw new a.default("Arg not supported with multiple decorators");o.extend(this.decorators,e)}else this.decorators[e]=t},unregisterDecorator:function(e){delete this.decorators[e]},resetLoggedPropertyAccesses:function(){u.resetLoggedProperties()}};var d=s.default.log;t.log=d,t.createFrame=o.createFrame,t.logger=s.default},576:(e,t,r)=>{"use strict";t.__esModule=!0,t.registerDefaultDecorators=function(e){o.default(e)};var n,o=(n=r(642))&&n.__esModule?n:{default:n}},642:(e,t,r)=>{"use strict";t.__esModule=!0;var n=r(704);t.default=function(e){e.registerDecorator("inline",(function(e,t,r,o){var a=e;return t.partials||(t.partials={},a=function(o,a){var i=r.partials;r.partials=n.extend({},i,t.partials);var l=e(o,a);return r.partials=i,l}),t.partials[o.args[0]]=o.fn,a}))},e.exports=t.default},24:(e,t)=>{"use strict";t.__esModule=!0;var r=["description","fileName","lineNumber","endLineNumber","message","name","number","stack"];function n(e,t){var o=t&&t.loc,a=void 0,i=void 0,l=void 0,s=void 0;o&&(a=o.start.line,i=o.end.line,l=o.start.column,s=o.end.column,e+=" - "+a+":"+l);for(var u=Error.prototype.constructor.call(this,e),c=0;c<r.length;c++)this[r[c]]=u[r[c]];Error.captureStackTrace&&Error.captureStackTrace(this,n);try{o&&(this.lineNumber=a,this.endLineNumber=i,Object.defineProperty?(Object.defineProperty(this,"column",{value:l,enumerable:!0}),Object.defineProperty(this,"endColumn",{value:s,enumerable:!0})):(this.column=l,this.endColumn=s))}catch(e){}}n.prototype=new Error,t.default=n,e.exports=t.default},870:(e,t,r)=>{"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.registerDefaultHelpers=function(e){o.default(e),a.default(e),i.default(e),l.default(e),s.default(e),u.default(e),c.default(e)},t.moveHelperToHooks=function(e,t,r){e.helpers[t]&&(e.hooks[t]=e.helpers[t],r||delete e.helpers[t])};var o=n(r(810)),a=n(r(847)),i=n(r(780)),l=n(r(229)),s=n(r(328)),u=n(r(124)),c=n(r(89))},810:(e,t,r)=>{"use strict";t.__esModule=!0;var n=r(704);t.default=function(e){e.registerHelper("blockHelperMissing",(function(t,r){var o=r.inverse,a=r.fn;if(!0===t)return a(this);if(!1===t||null==t)return o(this);if(n.isArray(t))return t.length>0?(r.ids&&(r.ids=[r.name]),e.helpers.each(t,r)):o(this);if(r.data&&r.ids){var i=n.createFrame(r.data);i.contextPath=n.appendContextPath(r.data.contextPath,r.name),r={data:i}}return a(t,r)}))},e.exports=t.default},847:(e,t,r)=>{"use strict";t.__esModule=!0;var n,o=r(704),a=(n=r(24))&&n.__esModule?n:{default:n};t.default=function(e){e.registerHelper("each",(function(e,t){if(!t)throw new a.default("Must pass iterator to #each");var n,i=t.fn,l=t.inverse,s=0,u="",c=void 0,p=void 0;function d(t,r,n){c&&(c.key=t,c.index=r,c.first=0===r,c.last=!!n,p&&(c.contextPath=p+t)),u+=i(e[t],{data:c,blockParams:o.blockParams([e[t],t],[p+t,null])})}if(t.data&&t.ids&&(p=o.appendContextPath(t.data.contextPath,t.ids[0])+"."),o.isFunction(e)&&(e=e.call(this)),t.data&&(c=o.createFrame(t.data)),e&&"object"==typeof e)if(o.isArray(e))for(var f=e.length;s<f;s++)s in e&&d(s,s,s===e.length-1);else if(r.g.Symbol&&e[r.g.Symbol.iterator]){for(var h=[],v=e[r.g.Symbol.iterator](),m=v.next();!m.done;m=v.next())h.push(m.value);for(f=(e=h).length;s<f;s++)d(s,s,s===e.length-1)}else n=void 0,Object.keys(e).forEach((function(e){void 0!==n&&d(n,s-1),n=e,s++})),void 0!==n&&d(n,s-1,!0);return 0===s&&(u=l(this)),u}))},e.exports=t.default},780:(e,t,r)=>{"use strict";t.__esModule=!0;var n,o=(n=r(24))&&n.__esModule?n:{default:n};t.default=function(e){e.registerHelper("helperMissing",(function(){if(1!==arguments.length)throw new o.default('Missing helper: "'+arguments[arguments.length-1].name+'"')}))},e.exports=t.default},229:(e,t,r)=>{"use strict";t.__esModule=!0;var n,o=r(704),a=(n=r(24))&&n.__esModule?n:{default:n};t.default=function(e){e.registerHelper("if",(function(e,t){if(2!=arguments.length)throw new a.default("#if requires exactly one argument");return o.isFunction(e)&&(e=e.call(this)),!t.hash.includeZero&&!e||o.isEmpty(e)?t.inverse(this):t.fn(this)})),e.registerHelper("unless",(function(t,r){if(2!=arguments.length)throw new a.default("#unless requires exactly one argument");return e.helpers.if.call(this,t,{fn:r.inverse,inverse:r.fn,hash:r.hash})}))},e.exports=t.default},328:(e,t)=>{"use strict";t.__esModule=!0,t.default=function(e){e.registerHelper("log",(function(){for(var t=[void 0],r=arguments[arguments.length-1],n=0;n<arguments.length-1;n++)t.push(arguments[n]);var o=1;null!=r.hash.level?o=r.hash.level:r.data&&null!=r.data.level&&(o=r.data.level),t[0]=o,e.log.apply(e,t)}))},e.exports=t.default},124:(e,t)=>{"use strict";t.__esModule=!0,t.default=function(e){e.registerHelper("lookup",(function(e,t,r){return e?r.lookupProperty(e,t):e}))},e.exports=t.default},89:(e,t,r)=>{"use strict";t.__esModule=!0;var n,o=r(704),a=(n=r(24))&&n.__esModule?n:{default:n};t.default=function(e){e.registerHelper("with",(function(e,t){if(2!=arguments.length)throw new a.default("#with requires exactly one argument");o.isFunction(e)&&(e=e.call(this));var r=t.fn;if(o.isEmpty(e))return t.inverse(this);var n=t.data;return t.data&&t.ids&&((n=o.createFrame(t.data)).contextPath=o.appendContextPath(t.data.contextPath,t.ids[0])),r(e,{data:n,blockParams:o.blockParams([e],[n&&n.contextPath])})}))},e.exports=t.default},943:(e,t,r)=>{"use strict";t.__esModule=!0,t.createNewLookupObject=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return n.extend.apply(void 0,[Object.create(null)].concat(t))};var n=r(704)},467:(e,t,r)=>{"use strict";t.__esModule=!0,t.createProtoAccessControl=function(e){var t=Object.create(null);t.constructor=!1,t.__defineGetter__=!1,t.__defineSetter__=!1,t.__lookupGetter__=!1;var r=Object.create(null);return r.__proto__=!1,{properties:{whitelist:n.createNewLookupObject(r,e.allowedProtoProperties),defaultValue:e.allowProtoPropertiesByDefault},methods:{whitelist:n.createNewLookupObject(t,e.allowedProtoMethods),defaultValue:e.allowProtoMethodsByDefault}}},t.resultIsAllowed=function(e,t,r){return function(e,t){return void 0!==e.whitelist[t]?!0===e.whitelist[t]:void 0!==e.defaultValue?e.defaultValue:(function(e){!0!==a[e]&&(a[e]=!0,o.log("error",'Handlebars: Access has been denied to resolve the property "'+e+'" because it is not an "own property" of its parent.\nYou can add a runtime option to disable the check or this warning:\nSee https://handlebarsjs.com/api-reference/runtime-options.html#options-to-control-prototype-access for details'))}(t),!1)}("function"==typeof e?t.methods:t.properties,r)},t.resetLoggedProperties=function(){Object.keys(a).forEach((function(e){delete a[e]}))};var n=r(943),o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}(r(765)),a=Object.create(null)},205:(e,t)=>{"use strict";t.__esModule=!0,t.wrapHelper=function(e,t){return"function"!=typeof e?e:function(){return arguments[arguments.length-1]=t(arguments[arguments.length-1]),e.apply(this,arguments)}}},765:(e,t,r)=>{"use strict";t.__esModule=!0;var n=r(704),o={methodMap:["debug","info","warn","error"],level:"info",lookupLevel:function(e){if("string"==typeof e){var t=n.indexOf(o.methodMap,e.toLowerCase());e=t>=0?t:parseInt(e,10)}return e},log:function(e){if(e=o.lookupLevel(e),"undefined"!=typeof console&&o.lookupLevel(o.level)<=e){var t=o.methodMap[e];console[t]||(t="log");for(var r=arguments.length,n=Array(r>1?r-1:0),a=1;a<r;a++)n[a-1]=arguments[a];console[t].apply(console,n)}}};t.default=o,e.exports=t.default},179:(e,t,r)=>{"use strict";t.__esModule=!0,t.default=function(e){var t=void 0!==r.g?r.g:window,n=t.Handlebars;e.noConflict=function(){return t.Handlebars===e&&(t.Handlebars=n),e}},e.exports=t.default},546:(e,t,r)=>{"use strict";t.__esModule=!0,t.checkRevision=function(e){var t=e&&e[0]||1,r=i.COMPILER_REVISION;if(!(t>=i.LAST_COMPATIBLE_COMPILER_REVISION&&t<=i.COMPILER_REVISION)){if(t<i.LAST_COMPATIBLE_COMPILER_REVISION){var n=i.REVISION_CHANGES[r],o=i.REVISION_CHANGES[t];throw new a.default("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version ("+n+") or downgrade your runtime to an older version ("+o+").")}throw new a.default("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version ("+e[1]+").")}},t.template=function(e,t){if(!t)throw new a.default("No environment passed to template");if(!e||!e.main)throw new a.default("Unknown template object: "+typeof e);e.main.decorator=e.main_d,t.VM.checkRevision(e.compiler);var r=e.compiler&&7===e.compiler[0],n={strict:function(e,t,r){if(!e||!(t in e))throw new a.default('"'+t+'" not defined in '+e,{loc:r});return n.lookupProperty(e,t)},lookupProperty:function(e,t){var r=e[t];return null==r||Object.prototype.hasOwnProperty.call(e,t)||u.resultIsAllowed(r,n.protoAccessControl,t)?r:void 0},lookup:function(e,t){for(var r=e.length,o=0;o<r;o++)if(null!=(e[o]&&n.lookupProperty(e[o],t)))return e[o][t]},lambda:function(e,t){return"function"==typeof e?e.call(t):e},escapeExpression:o.escapeExpression,invokePartial:function(r,n,i){i.hash&&(n=o.extend({},n,i.hash),i.ids&&(i.ids[0]=!0)),r=t.VM.resolvePartial.call(this,r,n,i);var l=o.extend({},i,{hooks:this.hooks,protoAccessControl:this.protoAccessControl}),s=t.VM.invokePartial.call(this,r,n,l);if(null==s&&t.compile&&(i.partials[i.name]=t.compile(r,e.compilerOptions,t),s=i.partials[i.name](n,l)),null!=s){if(i.indent){for(var u=s.split("\n"),c=0,p=u.length;c<p&&(u[c]||c+1!==p);c++)u[c]=i.indent+u[c];s=u.join("\n")}return s}throw new a.default("The partial "+i.name+" could not be compiled when running in runtime-only mode")},fn:function(t){var r=e[t];return r.decorator=e[t+"_d"],r},programs:[],program:function(e,t,r,n,o){var a=this.programs[e],i=this.fn(e);return t||o||n||r?a=c(this,e,i,t,r,n,o):a||(a=this.programs[e]=c(this,e,i)),a},data:function(e,t){for(;e&&t--;)e=e._parent;return e},mergeIfNeeded:function(e,t){var r=e||t;return e&&t&&e!==t&&(r=o.extend({},t,e)),r},nullContext:Object.seal({}),noop:t.VM.noop,compilerInfo:e.compiler};function i(t){var r=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],o=r.data;i._setup(r),!r.partial&&e.useData&&(o=d(t,o));var a=void 0,l=e.useBlockParams?[]:void 0;function s(t){return""+e.main(n,t,n.helpers,n.partials,o,l,a)}return e.useDepths&&(a=r.depths?t!=r.depths[0]?[t].concat(r.depths):r.depths:[t]),(s=f(e.main,s,n,r.depths||[],o,l))(t,r)}return i.isTop=!0,i._setup=function(a){if(a.partial)n.protoAccessControl=a.protoAccessControl,n.helpers=a.helpers,n.partials=a.partials,n.decorators=a.decorators,n.hooks=a.hooks;else{var i=o.extend({},t.helpers,a.helpers);!function(e,t){Object.keys(e).forEach((function(r){var n=e[r];e[r]=function(e,t){var r=t.lookupProperty;return s.wrapHelper(e,(function(e){return o.extend({lookupProperty:r},e)}))}(n,t)}))}(i,n),n.helpers=i,e.usePartial&&(n.partials=n.mergeIfNeeded(a.partials,t.partials)),(e.usePartial||e.useDecorators)&&(n.decorators=o.extend({},t.decorators,a.decorators)),n.hooks={},n.protoAccessControl=u.createProtoAccessControl(a);var c=a.allowCallsToHelperMissing||r;l.moveHelperToHooks(n,"helperMissing",c),l.moveHelperToHooks(n,"blockHelperMissing",c)}},i._child=function(t,r,o,i){if(e.useBlockParams&&!o)throw new a.default("must pass block params");if(e.useDepths&&!i)throw new a.default("must pass parent depths");return c(n,t,e[t],r,0,o,i)},i},t.wrapProgram=c,t.resolvePartial=function(e,t,r){return e?e.call||r.name||(r.name=e,e=r.partials[e]):e="@partial-block"===r.name?r.data["partial-block"]:r.partials[r.name],e},t.invokePartial=function(e,t,r){var n=r.data&&r.data["partial-block"];r.partial=!0,r.ids&&(r.data.contextPath=r.ids[0]||r.data.contextPath);var l=void 0;if(r.fn&&r.fn!==p&&function(){r.data=i.createFrame(r.data);var e=r.fn;l=r.data["partial-block"]=function(t){var r=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];return r.data=i.createFrame(r.data),r.data["partial-block"]=n,e(t,r)},e.partials&&(r.partials=o.extend({},r.partials,e.partials))}(),void 0===e&&l&&(e=l),void 0===e)throw new a.default("The partial "+r.name+" could not be found");if(e instanceof Function)return e(t,r)},t.noop=p;var n,o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}(r(704)),a=(n=r(24))&&n.__esModule?n:{default:n},i=r(207),l=r(870),s=r(205),u=r(467);function c(e,t,r,n,o,a,i){function l(t){var o=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],l=i;return!i||t==i[0]||t===e.nullContext&&null===i[0]||(l=[t].concat(i)),r(e,t,e.helpers,e.partials,o.data||n,a&&[o.blockParams].concat(a),l)}return(l=f(r,l,e,i,n,a)).program=t,l.depth=i?i.length:0,l.blockParams=o||0,l}function p(){return""}function d(e,t){return t&&"root"in t||((t=t?i.createFrame(t):{}).root=e),t}function f(e,t,r,n,a,i){if(e.decorator){var l={};t=e.decorator(t,l,r,n&&n[0],a,i,n),o.extend(t,l)}return t}},586:(e,t)=>{"use strict";function r(e){this.string=e}t.__esModule=!0,r.prototype.toString=r.prototype.toHTML=function(){return""+this.string},t.default=r,e.exports=t.default},704:(e,t)=>{"use strict";t.__esModule=!0,t.extend=i,t.indexOf=function(e,t){for(var r=0,n=e.length;r<n;r++)if(e[r]===t)return r;return-1},t.escapeExpression=function(e){if("string"!=typeof e){if(e&&e.toHTML)return e.toHTML();if(null==e)return"";if(!e)return e+"";e=""+e}return o.test(e)?e.replace(n,a):e},t.isEmpty=function(e){return!e&&0!==e||!(!u(e)||0!==e.length)},t.createFrame=function(e){var t=i({},e);return t._parent=e,t},t.blockParams=function(e,t){return e.path=t,e},t.appendContextPath=function(e,t){return(e?e+".":"")+t};var r={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;","=":"&#x3D;"},n=/[&<>"'`=]/g,o=/[&<>"'`=]/;function a(e){return r[e]}function i(e){for(var t=1;t<arguments.length;t++)for(var r in arguments[t])Object.prototype.hasOwnProperty.call(arguments[t],r)&&(e[r]=arguments[t][r]);return e}var l=Object.prototype.toString;t.toString=l;var s=function(e){return"function"==typeof e};s(/x/)&&(t.isFunction=s=function(e){return"function"==typeof e&&"[object Function]"===l.call(e)}),t.isFunction=s;var u=Array.isArray||function(e){return!(!e||"object"!=typeof e)&&"[object Array]"===l.call(e)};t.isArray=u},655:(e,t,r)=>{e.exports=r(34).default}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var a=t[n]={exports:{}};return e[n](a,a.exports,r),a.exports}r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r(840)})();