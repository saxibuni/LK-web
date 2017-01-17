/*! modernizr 3.3.1 (Custom Build) | MIT *
 * http://modernizr.com/download/?-applicationcache-audio-backgroundsize-borderimage-borderradius-boxshadow-canvas-canvastext-cssanimations-csscolumns-cssgradients-cssreflections-csstransforms-csstransforms3d-csstransitions-flexbox-fontface-generatedcontent-geolocation-hashchange-history-hsla-indexeddb-inlinesvg-input-inputtypes-localstorage-multiplebgs-opacity-postmessage-rgba-sessionstorage-smil-svg-svgclippaths-textshadow-video-webgl-websockets-websqldatabase-webworkers-addtest-domprefixes-hasevent-mq-prefixed-prefixes-shiv-testallprops-testprop-teststyles !*/
!function(e,t,n){function r(e,t){return typeof e===t}function a(){var e,t,n,a,o,i,s;for(var c in b)if(b.hasOwnProperty(c)){if(e=[],t=b[c],t.name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(a=r(t.fn,"function")?t.fn():t.fn,o=0;o<e.length;o++)i=e[o],s=i.split("."),1===s.length?Modernizr[s[0]]=a:(!Modernizr[s[0]]||Modernizr[s[0]]instanceof Boolean||(Modernizr[s[0]]=new Boolean(Modernizr[s[0]])),Modernizr[s[0]][s[1]]=a),T.push((a?"":"no-")+s.join("-"))}}function o(){return"function"!=typeof t.createElement?t.createElement(arguments[0]):S?t.createElementNS.call(t,"http://www.w3.org/2000/svg",arguments[0]):t.createElement.apply(t,arguments)}function i(){var e=t.body;return e||(e=o(S?"svg":"body"),e.fake=!0),e}function s(e,n,r,a){var s,c,l,d,u="modernizr",f=o("div"),p=i();if(parseInt(r,10))for(;r--;)l=o("div"),l.id=a?a[r]:u+(r+1),f.appendChild(l);return s=o("style"),s.type="text/css",s.id="s"+u,(p.fake?p:f).appendChild(s),p.appendChild(f),s.styleSheet?s.styleSheet.cssText=e:s.appendChild(t.createTextNode(e)),f.id=u,p.fake&&(p.style.background="",p.style.overflow="hidden",d=w.style.overflow,w.style.overflow="hidden",w.appendChild(p)),c=n(f,e),p.fake?(p.parentNode.removeChild(p),w.style.overflow=d,w.offsetHeight):f.parentNode.removeChild(f),!!c}function c(e){var t=w.className,n=Modernizr._config.classPrefix||"";if(S&&(t=t.baseVal),Modernizr._config.enableJSClass){var r=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");t=t.replace(r,"$1"+n+"js$2")}Modernizr._config.enableClasses&&(t+=" "+n+e.join(" "+n),S?w.className.baseVal=t:w.className=t)}function l(e,t){if("object"==typeof e)for(var n in e)E(e,n)&&l(n,e[n]);else{e=e.toLowerCase();var r=e.split("."),a=Modernizr[r[0]];if(2==r.length&&(a=a[r[1]]),"undefined"!=typeof a)return Modernizr;t="function"==typeof t?t():t,1==r.length?Modernizr[r[0]]=t:(!Modernizr[r[0]]||Modernizr[r[0]]instanceof Boolean||(Modernizr[r[0]]=new Boolean(Modernizr[r[0]])),Modernizr[r[0]][r[1]]=t),c([(t&&0!=t?"":"no-")+r.join("-")]),Modernizr._trigger(e,t)}return Modernizr}function d(e,t){return!!~(""+e).indexOf(t)}function u(e){return e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-")}function f(t,r){var a=t.length;if("CSS"in e&&"supports"in e.CSS){for(;a--;)if(e.CSS.supports(u(t[a]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var o=[];a--;)o.push("("+u(t[a])+":"+r+")");return o=o.join(" or "),s("@supports ("+o+") { #modernizr { position: absolute; } }",function(e){return"absolute"==getComputedStyle(e,null).position})}return n}function p(e){return e.replace(/([a-z])-([a-z])/g,function(e,t,n){return t+n.toUpperCase()}).replace(/^-/,"")}function m(e,t,a,i){function s(){l&&(delete N.style,delete N.modElem)}if(i=r(i,"undefined")?!1:i,!r(a,"undefined")){var c=f(e,a);if(!r(c,"undefined"))return c}for(var l,u,m,g,h,v=["modernizr","tspan"];!N.style;)l=!0,N.modElem=o(v.shift()),N.style=N.modElem.style;for(m=e.length,u=0;m>u;u++)if(g=e[u],h=N.style[g],d(g,"-")&&(g=p(g)),N.style[g]!==n){if(i||r(a,"undefined"))return s(),"pfx"==t?g:!0;try{N.style[g]=a}catch(y){}if(N.style[g]!=h)return s(),"pfx"==t?g:!0}return s(),!1}function g(e,t){return function(){return e.apply(t,arguments)}}function h(e,t,n){var a;for(var o in e)if(e[o]in t)return n===!1?e[o]:(a=t[e[o]],r(a,"function")?g(a,n||t):a);return!1}function v(e,t,n,a,o){var i=e.charAt(0).toUpperCase()+e.slice(1),s=(e+" "+_.join(i+" ")+i).split(" ");return r(t,"string")||r(t,"undefined")?m(s,t,a,o):(s=(e+" "+z.join(i+" ")+i).split(" "),h(s,t,n))}function y(e,t,r){return v(e,n,n,t,r)}var b=[],x={_version:"3.3.1",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){b.push({name:e,fn:t,options:n})},addAsyncTest:function(e){b.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=x,Modernizr=new Modernizr;var T=[],w=t.documentElement,S="svg"===w.nodeName.toLowerCase();S||!function(e,t){function n(e,t){var n=e.createElement("p"),r=e.getElementsByTagName("head")[0]||e.documentElement;return n.innerHTML="x<style>"+t+"</style>",r.insertBefore(n.lastChild,r.firstChild)}function r(){var e=b.elements;return"string"==typeof e?e.split(" "):e}function a(e,t){var n=b.elements;"string"!=typeof n&&(n=n.join(" ")),"string"!=typeof e&&(e=e.join(" ")),b.elements=n+" "+e,l(t)}function o(e){var t=y[e[h]];return t||(t={},v++,e[h]=v,y[v]=t),t}function i(e,n,r){if(n||(n=t),u)return n.createElement(e);r||(r=o(n));var a;return a=r.cache[e]?r.cache[e].cloneNode():g.test(e)?(r.cache[e]=r.createElem(e)).cloneNode():r.createElem(e),!a.canHaveChildren||m.test(e)||a.tagUrn?a:r.frag.appendChild(a)}function s(e,n){if(e||(e=t),u)return e.createDocumentFragment();n=n||o(e);for(var a=n.frag.cloneNode(),i=0,s=r(),c=s.length;c>i;i++)a.createElement(s[i]);return a}function c(e,t){t.cache||(t.cache={},t.createElem=e.createElement,t.createFrag=e.createDocumentFragment,t.frag=t.createFrag()),e.createElement=function(n){return b.shivMethods?i(n,e,t):t.createElem(n)},e.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+r().join().replace(/[\w\-:]+/g,function(e){return t.createElem(e),t.frag.createElement(e),'c("'+e+'")'})+");return n}")(b,t.frag)}function l(e){e||(e=t);var r=o(e);return!b.shivCSS||d||r.hasCSS||(r.hasCSS=!!n(e,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),u||c(e,r),e}var d,u,f="3.7.3",p=e.html5||{},m=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,g=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,h="_html5shiv",v=0,y={};!function(){try{var e=t.createElement("a");e.innerHTML="<xyz></xyz>",d="hidden"in e,u=1==e.childNodes.length||function(){t.createElement("a");var e=t.createDocumentFragment();return"undefined"==typeof e.cloneNode||"undefined"==typeof e.createDocumentFragment||"undefined"==typeof e.createElement}()}catch(n){d=!0,u=!0}}();var b={elements:p.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",version:f,shivCSS:p.shivCSS!==!1,supportsUnknownElements:u,shivMethods:p.shivMethods!==!1,type:"default",shivDocument:l,createElement:i,createDocumentFragment:s,addElements:a};e.html5=b,l(t),"object"==typeof module&&module.exports&&(module.exports=b)}("undefined"!=typeof e?e:this,t);var C=function(){var t=e.matchMedia||e.msMatchMedia;return t?function(e){var n=t(e);return n&&n.matches||!1}:function(t){var n=!1;return s("@media "+t+" { #modernizr { position: absolute; } }",function(t){n="absolute"==(e.getComputedStyle?e.getComputedStyle(t,null):t.currentStyle).position}),n}}();x.mq=C;var E;!function(){var e={}.hasOwnProperty;E=r(e,"undefined")||r(e.call,"undefined")?function(e,t){return t in e&&r(e.constructor.prototype[t],"undefined")}:function(t,n){return e.call(t,n)}}(),x._l={},x.on=function(e,t){this._l[e]||(this._l[e]=[]),this._l[e].push(t),Modernizr.hasOwnProperty(e)&&setTimeout(function(){Modernizr._trigger(e,Modernizr[e])},0)},x._trigger=function(e,t){if(this._l[e]){var n=this._l[e];setTimeout(function(){var e,r;for(e=0;e<n.length;e++)(r=n[e])(t)},0),delete this._l[e]}},Modernizr._q.push(function(){x.addTest=l});var k="Moz O ms Webkit",_=x._config.usePrefixes?k.split(" "):[];x._cssomPrefixes=_;var P={elem:o("modernizr")};Modernizr._q.push(function(){delete P.elem});var N={style:P.elem.style};Modernizr._q.unshift(function(){delete N.style});var z=x._config.usePrefixes?k.toLowerCase().split(" "):[];x._domPrefixes=z,x.testAllProps=v;var R=function(t){var r,a=M.length,o=e.CSSRule;if("undefined"==typeof o)return n;if(!t)return!1;if(t=t.replace(/^@/,""),r=t.replace(/-/g,"_").toUpperCase()+"_RULE",r in o)return"@"+t;for(var i=0;a>i;i++){var s=M[i],c=s.toUpperCase()+"_"+r;if(c in o)return"@-"+s.toLowerCase()+"-"+t}return!1};x.atRule=R;var $=x.prefixed=function(e,t,n){return 0===e.indexOf("@")?R(e):(-1!=e.indexOf("-")&&(e=p(e)),t?v(e,t,n):v(e,"pfx"))},A=x.testStyles=s,O=x.testProp=function(e,t,r){return m([e],n,t,r)};x.testAllProps=y;var L=function(){function e(e,t){var a;return e?(t&&"string"!=typeof t||(t=o(t||"div")),e="on"+e,a=e in t,!a&&r&&(t.setAttribute||(t=o("div")),t.setAttribute(e,""),a="function"==typeof t[e],t[e]!==n&&(t[e]=n),t.removeAttribute(e)),a):!1}var r=!("onblur"in t.documentElement);return e}();x.hasEvent=L;var M=x._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):[];x._prefixes=M;var B=function(){var e=navigator.userAgent,t=e.match(/applewebkit\/([0-9]+)/gi)&&parseFloat(RegExp.$1),n=e.match(/w(eb)?osbrowser/gi),r=e.match(/windows phone/gi)&&e.match(/iemobile\/([0-9])+/gi)&&parseFloat(RegExp.$1)>=9,a=533>t&&e.match(/android/gi);return n||a||r}();B?Modernizr.addTest("fontface",!1):A('@font-face {font-family:"font";src:url("https://")}',function(e,n){var r=t.getElementById("smodernizr"),a=r.sheet||r.styleSheet,o=a?a.cssRules&&a.cssRules[0]?a.cssRules[0].cssText:a.cssText||"":"",i=/src/i.test(o)&&0===o.indexOf(n.split(" ")[0]);Modernizr.addTest("fontface",i)}),Modernizr.addTest("backgroundsize",y("backgroundSize","100%",!0)),Modernizr.addTest("borderimage",y("borderImage","url() 1",!0)),Modernizr.addTest("borderradius",y("borderRadius","0px",!0)),Modernizr.addTest("boxshadow",y("boxShadow","1px 1px",!0)),Modernizr.addTest("flexbox",y("flexBasis","1px",!0)),Modernizr.addTest("hsla",function(){var e=o("a").style;return e.cssText="background-color:hsla(120,40%,100%,.5)",d(e.backgroundColor,"rgba")||d(e.backgroundColor,"hsla")}),Modernizr.addTest("multiplebgs",function(){var e=o("a").style;return e.cssText="background:url(https://),url(https://),red url(https://)",/(url\s*\(.*?){3}/.test(e.background)}),Modernizr.addTest("opacity",function(){var e=o("a").style;return e.cssText=M.join("opacity:.55;"),/^0.55$/.test(e.opacity)}),Modernizr.addTest("rgba",function(){var e=o("a").style;return e.cssText="background-color:rgba(150,255,150,.5)",(""+e.backgroundColor).indexOf("rgba")>-1}),Modernizr.addTest("textshadow",O("textShadow","1px 1px")),Modernizr.addTest("cssanimations",y("animationName","a",!0)),function(){Modernizr.addTest("csscolumns",function(){var e=!1,t=y("columnCount");try{(e=!!t)&&(e=new Boolean(e))}catch(n){}return e});for(var e,t,n=["Width","Span","Fill","Gap","Rule","RuleColor","RuleStyle","RuleWidth","BreakBefore","BreakAfter","BreakInside"],r=0;r<n.length;r++)e=n[r].toLowerCase(),t=y("column"+n[r]),("breakbefore"===e||"breakafter"===e||"breakinside"==e)&&(t=t||y(n[r])),Modernizr.addTest("csscolumns."+e,t)}(),A('#modernizr{font:0/0 a}#modernizr:after{content:":)";visibility:hidden;font:7px/1 a}',function(e){Modernizr.addTest("generatedcontent",e.offsetHeight>=7)}),Modernizr.addTest("cssgradients",function(){for(var e,t="background-image:",n="gradient(linear,left top,right bottom,from(#9f9),to(white));",r="",a=0,i=M.length-1;i>a;a++)e=0===a?"to ":"",r+=t+M[a]+"linear-gradient("+e+"left top, #9f9, white);";Modernizr._config.usePrefixes&&(r+=t+"-webkit-"+n);var s=o("a"),c=s.style;return c.cssText=r,(""+c.backgroundImage).indexOf("gradient")>-1}),Modernizr.addTest("cssreflections",y("boxReflect","above",!0)),Modernizr.addTest("csstransforms",function(){return-1===navigator.userAgent.indexOf("Android 2.")&&y("transform","scale(1)",!0)});var j="CSS"in e&&"supports"in e.CSS,F="supportsCSS"in e;Modernizr.addTest("supports",j||F),Modernizr.addTest("csstransforms3d",function(){var e=!!y("perspective","1px",!0),t=Modernizr._config.usePrefixes;if(e&&(!t||"webkitPerspective"in w.style)){var n,r="#modernizr{width:0;height:0}";Modernizr.supports?n="@supports (perspective: 1px)":(n="@media (transform-3d)",t&&(n+=",(-webkit-transform-3d)")),n+="{#modernizr{width:7px;height:18px;margin:0;padding:0;border:0}}",A(r+n,function(t){e=7===t.offsetWidth&&18===t.offsetHeight})}return e}),Modernizr.addTest("csstransitions",y("transition","all",!0)),Modernizr.addTest("applicationcache","applicationCache"in e),Modernizr.addTest("canvas",function(){var e=o("canvas");return!(!e.getContext||!e.getContext("2d"))}),Modernizr.addTest("canvastext",function(){return Modernizr.canvas===!1?!1:"function"==typeof o("canvas").getContext("2d").fillText}),Modernizr.addTest("hashchange",function(){return L("hashchange",e)===!1?!1:t.documentMode===n||t.documentMode>7}),Modernizr.addTest("history",function(){var t=navigator.userAgent;return-1===t.indexOf("Android 2.")&&-1===t.indexOf("Android 4.0")||-1===t.indexOf("Mobile Safari")||-1!==t.indexOf("Chrome")||-1!==t.indexOf("Windows Phone")?e.history&&"pushState"in e.history:!1}),Modernizr.addTest("audio",function(){var e=o("audio"),t=!1;try{(t=!!e.canPlayType)&&(t=new Boolean(t),t.ogg=e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),t.mp3=e.canPlayType('audio/mpeg; codecs="mp3"').replace(/^no$/,""),t.opus=e.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/,""),t.wav=e.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),t.m4a=(e.canPlayType("audio/x-m4a;")||e.canPlayType("audio/aac;")).replace(/^no$/,""))}catch(n){}return t}),Modernizr.addTest("video",function(){var e=o("video"),t=!1;try{(t=!!e.canPlayType)&&(t=new Boolean(t),t.ogg=e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),t.h264=e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),t.webm=e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,""),t.vp9=e.canPlayType('video/webm; codecs="vp9"').replace(/^no$/,""),t.hls=e.canPlayType('application/x-mpegURL; codecs="avc1.42E01E"').replace(/^no$/,""))}catch(n){}return t});var I;try{I=$("indexedDB",e)}catch(D){}Modernizr.addTest("indexeddb",!!I),I&&Modernizr.addTest("indexeddb.deletedatabase","deleteDatabase"in I);var W=o("input"),q="autocomplete autofocus list placeholder max min multiple pattern required step".split(" "),V={};Modernizr.input=function(t){for(var n=0,r=t.length;r>n;n++)V[t[n]]=!!(t[n]in W);return V.list&&(V.list=!(!o("datalist")||!e.HTMLDataListElement)),V}(q);var H="search tel url email datetime date month week time datetime-local number range color".split(" "),U={};Modernizr.inputtypes=function(e){for(var r,a,o,i=e.length,s="1)",c=0;i>c;c++)W.setAttribute("type",r=e[c]),o="text"!==W.type&&"style"in W,o&&(W.value=s,W.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(r)&&W.style.WebkitAppearance!==n?(w.appendChild(W),a=t.defaultView,o=a.getComputedStyle&&"textfield"!==a.getComputedStyle(W,null).WebkitAppearance&&0!==W.offsetHeight,w.removeChild(W)):/^(search|tel)$/.test(r)||(o=/^(url|email)$/.test(r)?W.checkValidity&&W.checkValidity()===!1:W.value!=s)),U[e[c]]=!!o;return U}(H),Modernizr.addTest("localstorage",function(){var e="modernizr";try{return localStorage.setItem(e,e),localStorage.removeItem(e),!0}catch(t){return!1}}),Modernizr.addTest("postmessage","postMessage"in e),Modernizr.addTest("sessionstorage",function(){var e="modernizr";try{return sessionStorage.setItem(e,e),sessionStorage.removeItem(e),!0}catch(t){return!1}}),Modernizr.addTest("websockets","WebSocket"in e&&2===e.WebSocket.CLOSING),Modernizr.addTest("websqldatabase","openDatabase"in e),Modernizr.addTest("webworkers","Worker"in e),Modernizr.addTest("geolocation","geolocation"in navigator),Modernizr.addTest("inlinesvg",function(){var e=o("div");return e.innerHTML="<svg/>","http://www.w3.org/2000/svg"==("undefined"!=typeof SVGRect&&e.firstChild&&e.firstChild.namespaceURI)});var G={}.toString;Modernizr.addTest("smil",function(){return!!t.createElementNS&&/SVGAnimate/.test(G.call(t.createElementNS("http://www.w3.org/2000/svg","animate")))}),Modernizr.addTest("svg",!!t.createElementNS&&!!t.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect),Modernizr.addTest("svgclippaths",function(){return!!t.createElementNS&&/SVGClipPath/.test(G.call(t.createElementNS("http://www.w3.org/2000/svg","clipPath")))}),Modernizr.addTest("webgl",function(){var t=o("canvas"),n="probablySupportsContext"in t?"probablySupportsContext":"supportsContext";return n in t?t[n]("webgl")||t[n]("experimental-webgl"):"WebGLRenderingContext"in e}),a(),delete x.addTest,delete x.addAsyncTest;for(var J=0;J<Modernizr._q.length;J++)Modernizr._q[J]();e.Modernizr=Modernizr}(window,document);
/*! jQuery v2.2.4 | (c) jQuery Foundation | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=a.document,e=c.slice,f=c.concat,g=c.push,h=c.indexOf,i={},j=i.toString,k=i.hasOwnProperty,l={},m="2.2.4",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return e.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:e.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a){return n.each(this,a)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(e.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor()},push:g,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(n.isPlainObject(d)||(e=n.isArray(d)))?(e?(e=!1,f=c&&n.isArray(c)?c:[]):f=c&&n.isPlainObject(c)?c:{},g[b]=n.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){var b=a&&a.toString();return!n.isArray(a)&&b-parseFloat(b)+1>=0},isPlainObject:function(a){var b;if("object"!==n.type(a)||a.nodeType||n.isWindow(a))return!1;if(a.constructor&&!k.call(a,"constructor")&&!k.call(a.constructor.prototype||{},"isPrototypeOf"))return!1;for(b in a);return void 0===b||k.call(a,b)},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?i[j.call(a)]||"object":typeof a},globalEval:function(a){var b,c=eval;a=n.trim(a),a&&(1===a.indexOf("use strict")?(b=d.createElement("script"),b.text=a,d.head.appendChild(b).parentNode.removeChild(b)):c(a))},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b){var c,d=0;if(s(a)){for(c=a.length;c>d;d++)if(b.call(a[d],d,a[d])===!1)break}else for(d in a)if(b.call(a[d],d,a[d])===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):g.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:h.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,e,g=0,h=[];if(s(a))for(d=a.length;d>g;g++)e=b(a[g],g,c),null!=e&&h.push(e);else for(g in a)e=b(a[g],g,c),null!=e&&h.push(e);return f.apply([],h)},guid:1,proxy:function(a,b){var c,d,f;return"string"==typeof b&&(c=a[b],b=a,a=c),n.isFunction(a)?(d=e.call(arguments,2),f=function(){return a.apply(b||this,d.concat(e.call(arguments)))},f.guid=a.guid=a.guid||n.guid++,f):void 0},now:Date.now,support:l}),"function"==typeof Symbol&&(n.fn[Symbol.iterator]=c[Symbol.iterator]),n.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(a,b){i["[object "+b+"]"]=b.toLowerCase()});function s(a){var b=!!a&&"length"in a&&a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ga(),z=ga(),A=ga(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+M+"))|)"+L+"*\\]",O=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+N+")*)|.*)\\)|)",P=new RegExp(L+"+","g"),Q=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),R=new RegExp("^"+L+"*,"+L+"*"),S=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),T=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),U=new RegExp(O),V=new RegExp("^"+M+"$"),W={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M+"|[*])"),ATTR:new RegExp("^"+N),PSEUDO:new RegExp("^"+O),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},X=/^(?:input|select|textarea|button)$/i,Y=/^h\d$/i,Z=/^[^{]+\{\s*\[native \w/,$=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,_=/[+~]/,aa=/'|\\/g,ba=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),ca=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},da=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(ea){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function fa(a,b,d,e){var f,h,j,k,l,o,r,s,w=b&&b.ownerDocument,x=b?b.nodeType:9;if(d=d||[],"string"!=typeof a||!a||1!==x&&9!==x&&11!==x)return d;if(!e&&((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,p)){if(11!==x&&(o=$.exec(a)))if(f=o[1]){if(9===x){if(!(j=b.getElementById(f)))return d;if(j.id===f)return d.push(j),d}else if(w&&(j=w.getElementById(f))&&t(b,j)&&j.id===f)return d.push(j),d}else{if(o[2])return H.apply(d,b.getElementsByTagName(a)),d;if((f=o[3])&&c.getElementsByClassName&&b.getElementsByClassName)return H.apply(d,b.getElementsByClassName(f)),d}if(c.qsa&&!A[a+" "]&&(!q||!q.test(a))){if(1!==x)w=b,s=a;else if("object"!==b.nodeName.toLowerCase()){(k=b.getAttribute("id"))?k=k.replace(aa,"\\$&"):b.setAttribute("id",k=u),r=g(a),h=r.length,l=V.test(k)?"#"+k:"[id='"+k+"']";while(h--)r[h]=l+" "+qa(r[h]);s=r.join(","),w=_.test(a)&&oa(b.parentNode)||b}if(s)try{return H.apply(d,w.querySelectorAll(s)),d}catch(y){}finally{k===u&&b.removeAttribute("id")}}}return i(a.replace(Q,"$1"),b,d,e)}function ga(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ha(a){return a[u]=!0,a}function ia(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ja(a,b){var c=a.split("|"),e=c.length;while(e--)d.attrHandle[c[e]]=b}function ka(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function la(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function na(a){return ha(function(b){return b=+b,ha(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function oa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=fa.support={},f=fa.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=fa.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=n.documentElement,p=!f(n),(e=n.defaultView)&&e.top!==e&&(e.addEventListener?e.addEventListener("unload",da,!1):e.attachEvent&&e.attachEvent("onunload",da)),c.attributes=ia(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ia(function(a){return a.appendChild(n.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Z.test(n.getElementsByClassName),c.getById=ia(function(a){return o.appendChild(a).id=u,!n.getElementsByName||!n.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ba,ca);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ba,ca);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return"undefined"!=typeof b.getElementsByClassName&&p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=Z.test(n.querySelectorAll))&&(ia(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\r\\' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ia(function(a){var b=n.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=Z.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ia(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",O)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=Z.test(o.compareDocumentPosition),t=b||Z.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===n||a.ownerDocument===v&&t(v,a)?-1:b===n||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,g=[a],h=[b];if(!e||!f)return a===n?-1:b===n?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return ka(a,b);c=a;while(c=c.parentNode)g.unshift(c);c=b;while(c=c.parentNode)h.unshift(c);while(g[d]===h[d])d++;return d?ka(g[d],h[d]):g[d]===v?-1:h[d]===v?1:0},n):n},fa.matches=function(a,b){return fa(a,null,null,b)},fa.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(T,"='$1']"),c.matchesSelector&&p&&!A[b+" "]&&(!r||!r.test(b))&&(!q||!q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return fa(b,n,null,[a]).length>0},fa.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},fa.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},fa.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},fa.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=fa.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=fa.selectors={cacheLength:50,createPseudo:ha,match:W,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ba,ca),a[3]=(a[3]||a[4]||a[5]||"").replace(ba,ca),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||fa.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&fa.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return W.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&U.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ba,ca).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=fa.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(P," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h,t=!1;if(q){if(f){while(p){m=b;while(m=m[p])if(h?m.nodeName.toLowerCase()===r:1===m.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){m=q,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n&&j[2],m=n&&q.childNodes[n];while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if(1===m.nodeType&&++t&&m===b){k[a]=[w,n,t];break}}else if(s&&(m=b,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n),t===!1)while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if((h?m.nodeName.toLowerCase()===r:1===m.nodeType)&&++t&&(s&&(l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),k[a]=[w,t]),m===b))break;return t-=e,t===d||t%d===0&&t/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||fa.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ha(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ha(function(a){var b=[],c=[],d=h(a.replace(Q,"$1"));return d[u]?ha(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ha(function(a){return function(b){return fa(a,b).length>0}}),contains:ha(function(a){return a=a.replace(ba,ca),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ha(function(a){return V.test(a||"")||fa.error("unsupported lang: "+a),a=a.replace(ba,ca).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Y.test(a.nodeName)},input:function(a){return X.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:na(function(){return[0]}),last:na(function(a,b){return[b-1]}),eq:na(function(a,b,c){return[0>c?c+b:c]}),even:na(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:na(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:na(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:na(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=la(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=ma(b);function pa(){}pa.prototype=d.filters=d.pseudos,d.setFilters=new pa,g=fa.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){c&&!(e=R.exec(h))||(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=S.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(Q," ")}),h=h.slice(c.length));for(g in d.filter)!(e=W[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?fa.error(a):z(a,i).slice(0)};function qa(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function ra(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j,k=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(j=b[u]||(b[u]={}),i=j[b.uniqueID]||(j[b.uniqueID]={}),(h=i[d])&&h[0]===w&&h[1]===f)return k[2]=h[2];if(i[d]=k,k[2]=a(b,c,g))return!0}}}function sa(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ta(a,b,c){for(var d=0,e=b.length;e>d;d++)fa(a,b[d],c);return c}function ua(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(c&&!c(f,d,e)||(g.push(f),j&&b.push(h)));return g}function va(a,b,c,d,e,f){return d&&!d[u]&&(d=va(d)),e&&!e[u]&&(e=va(e,f)),ha(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ta(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:ua(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=ua(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=ua(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function wa(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=ra(function(a){return a===b},h,!0),l=ra(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[ra(sa(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return va(i>1&&sa(m),i>1&&qa(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(Q,"$1"),c,e>i&&wa(a.slice(i,e)),f>e&&wa(a=a.slice(e)),f>e&&qa(a))}m.push(c)}return sa(m)}function xa(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,o,q,r=0,s="0",t=f&&[],u=[],v=j,x=f||e&&d.find.TAG("*",k),y=w+=null==v?1:Math.random()||.1,z=x.length;for(k&&(j=g===n||g||k);s!==z&&null!=(l=x[s]);s++){if(e&&l){o=0,g||l.ownerDocument===n||(m(l),h=!p);while(q=a[o++])if(q(l,g||n,h)){i.push(l);break}k&&(w=y)}c&&((l=!q&&l)&&r--,f&&t.push(l))}if(r+=s,c&&s!==r){o=0;while(q=b[o++])q(t,u,g,h);if(f){if(r>0)while(s--)t[s]||u[s]||(u[s]=F.call(i));u=ua(u)}H.apply(i,u),k&&!f&&u.length>0&&r+b.length>1&&fa.uniqueSort(i)}return k&&(w=y,j=v),t};return c?ha(f):f}return h=fa.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=wa(b[c]),f[u]?d.push(f):e.push(f);f=A(a,xa(e,d)),f.selector=a}return f},i=fa.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(ba,ca),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=W.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(ba,ca),_.test(j[0].type)&&oa(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&qa(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,!b||_.test(a)&&oa(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ia(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ia(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ja("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ia(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ja("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ia(function(a){return null==a.getAttribute("disabled")})||ja(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),fa}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.uniqueSort=n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},v=function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c},w=n.expr.match.needsContext,x=/^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,y=/^.[^:#\[\.,]*$/;function z(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(y.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return h.call(b,a)>-1!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=this.length,d=[],e=this;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;c>b;b++)if(n.contains(e[b],this))return!0}));for(b=0;c>b;b++)n.find(a,e[b],d);return d=this.pushStack(c>1?n.unique(d):d),d.selector=this.selector?this.selector+" "+a:a,d},filter:function(a){return this.pushStack(z(this,a||[],!1))},not:function(a){return this.pushStack(z(this,a||[],!0))},is:function(a){return!!z(this,"string"==typeof a&&w.test(a)?n(a):a||[],!1).length}});var A,B=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,C=n.fn.init=function(a,b,c){var e,f;if(!a)return this;if(c=c||A,"string"==typeof a){if(e="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:B.exec(a),!e||!e[1]&&b)return!b||b.jquery?(b||c).find(a):this.constructor(b).find(a);if(e[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(e[1],b&&b.nodeType?b.ownerDocument||b:d,!0)),x.test(e[1])&&n.isPlainObject(b))for(e in b)n.isFunction(this[e])?this[e](b[e]):this.attr(e,b[e]);return this}return f=d.getElementById(e[2]),f&&f.parentNode&&(this.length=1,this[0]=f),this.context=d,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?void 0!==c.ready?c.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};C.prototype=n.fn,A=n(d);var D=/^(?:parents|prev(?:Until|All))/,E={children:!0,contents:!0,next:!0,prev:!0};n.fn.extend({has:function(a){var b=n(a,this),c=b.length;return this.filter(function(){for(var a=0;c>a;a++)if(n.contains(this,b[a]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=w.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.uniqueSort(f):f)},index:function(a){return a?"string"==typeof a?h.call(n(a),this[0]):h.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.uniqueSort(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function F(a,b){while((a=a[b])&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return u(a,"parentNode")},parentsUntil:function(a,b,c){return u(a,"parentNode",c)},next:function(a){return F(a,"nextSibling")},prev:function(a){return F(a,"previousSibling")},nextAll:function(a){return u(a,"nextSibling")},prevAll:function(a){return u(a,"previousSibling")},nextUntil:function(a,b,c){return u(a,"nextSibling",c)},prevUntil:function(a,b,c){return u(a,"previousSibling",c)},siblings:function(a){return v((a.parentNode||{}).firstChild,a)},children:function(a){return v(a.firstChild)},contents:function(a){return a.contentDocument||n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(E[a]||n.uniqueSort(e),D.test(a)&&e.reverse()),this.pushStack(e)}});var G=/\S+/g;function H(a){var b={};return n.each(a.match(G)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?H(a):n.extend({},a);var b,c,d,e,f=[],g=[],h=-1,i=function(){for(e=a.once,d=b=!0;g.length;h=-1){c=g.shift();while(++h<f.length)f[h].apply(c[0],c[1])===!1&&a.stopOnFalse&&(h=f.length,c=!1)}a.memory||(c=!1),b=!1,e&&(f=c?[]:"")},j={add:function(){return f&&(c&&!b&&(h=f.length-1,g.push(c)),function d(b){n.each(b,function(b,c){n.isFunction(c)?a.unique&&j.has(c)||f.push(c):c&&c.length&&"string"!==n.type(c)&&d(c)})}(arguments),c&&!b&&i()),this},remove:function(){return n.each(arguments,function(a,b){var c;while((c=n.inArray(b,f,c))>-1)f.splice(c,1),h>=c&&h--}),this},has:function(a){return a?n.inArray(a,f)>-1:f.length>0},empty:function(){return f&&(f=[]),this},disable:function(){return e=g=[],f=c="",this},disabled:function(){return!f},lock:function(){return e=g=[],c||(f=c=""),this},locked:function(){return!!e},fireWith:function(a,c){return e||(c=c||[],c=[a,c.slice?c.slice():c],g.push(c),b||i()),this},fire:function(){return j.fireWith(this,arguments),this},fired:function(){return!!d}};return j},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().progress(c.notify).done(c.resolve).fail(c.reject):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=e.call(arguments),d=c.length,f=1!==d||a&&n.isFunction(a.promise)?d:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(d){b[a]=this,c[a]=arguments.length>1?e.call(arguments):d,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(d>1)for(i=new Array(d),j=new Array(d),k=new Array(d);d>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().progress(h(b,j,i)).done(h(b,k,c)).fail(g.reject):--f;return f||g.resolveWith(k,c),g.promise()}});var I;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(I.resolveWith(d,[n]),n.fn.triggerHandler&&(n(d).triggerHandler("ready"),n(d).off("ready"))))}});function J(){d.removeEventListener("DOMContentLoaded",J),a.removeEventListener("load",J),n.ready()}n.ready.promise=function(b){return I||(I=n.Deferred(),"complete"===d.readyState||"loading"!==d.readyState&&!d.documentElement.doScroll?a.setTimeout(n.ready):(d.addEventListener("DOMContentLoaded",J),a.addEventListener("load",J))),I.promise(b)},n.ready.promise();var K=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)K(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},L=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function M(){this.expando=n.expando+M.uid++}M.uid=1,M.prototype={register:function(a,b){var c=b||{};return a.nodeType?a[this.expando]=c:Object.defineProperty(a,this.expando,{value:c,writable:!0,configurable:!0}),a[this.expando]},cache:function(a){if(!L(a))return{};var b=a[this.expando];return b||(b={},L(a)&&(a.nodeType?a[this.expando]=b:Object.defineProperty(a,this.expando,{value:b,configurable:!0}))),b},set:function(a,b,c){var d,e=this.cache(a);if("string"==typeof b)e[b]=c;else for(d in b)e[d]=b[d];return e},get:function(a,b){return void 0===b?this.cache(a):a[this.expando]&&a[this.expando][b]},access:function(a,b,c){var d;return void 0===b||b&&"string"==typeof b&&void 0===c?(d=this.get(a,b),void 0!==d?d:this.get(a,n.camelCase(b))):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d,e,f=a[this.expando];if(void 0!==f){if(void 0===b)this.register(a);else{n.isArray(b)?d=b.concat(b.map(n.camelCase)):(e=n.camelCase(b),b in f?d=[b,e]:(d=e,d=d in f?[d]:d.match(G)||[])),c=d.length;while(c--)delete f[d[c]]}(void 0===b||n.isEmptyObject(f))&&(a.nodeType?a[this.expando]=void 0:delete a[this.expando])}},hasData:function(a){var b=a[this.expando];return void 0!==b&&!n.isEmptyObject(b)}};var N=new M,O=new M,P=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Q=/[A-Z]/g;function R(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(Q,"-$&").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:P.test(c)?n.parseJSON(c):c;
}catch(e){}O.set(a,b,c)}else c=void 0;return c}n.extend({hasData:function(a){return O.hasData(a)||N.hasData(a)},data:function(a,b,c){return O.access(a,b,c)},removeData:function(a,b){O.remove(a,b)},_data:function(a,b,c){return N.access(a,b,c)},_removeData:function(a,b){N.remove(a,b)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=O.get(f),1===f.nodeType&&!N.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),R(f,d,e[d])));N.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){O.set(this,a)}):K(this,function(b){var c,d;if(f&&void 0===b){if(c=O.get(f,a)||O.get(f,a.replace(Q,"-$&").toLowerCase()),void 0!==c)return c;if(d=n.camelCase(a),c=O.get(f,d),void 0!==c)return c;if(c=R(f,d,void 0),void 0!==c)return c}else d=n.camelCase(a),this.each(function(){var c=O.get(this,d);O.set(this,d,b),a.indexOf("-")>-1&&void 0!==c&&O.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){O.remove(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=N.get(a,b),c&&(!d||n.isArray(c)?d=N.access(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return N.get(a,c)||N.access(a,c,{empty:n.Callbacks("once memory").add(function(){N.remove(a,[b+"queue",c])})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=N.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var S=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,T=new RegExp("^(?:([+-])=|)("+S+")([a-z%]*)$","i"),U=["Top","Right","Bottom","Left"],V=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)};function W(a,b,c,d){var e,f=1,g=20,h=d?function(){return d.cur()}:function(){return n.css(a,b,"")},i=h(),j=c&&c[3]||(n.cssNumber[b]?"":"px"),k=(n.cssNumber[b]||"px"!==j&&+i)&&T.exec(n.css(a,b));if(k&&k[3]!==j){j=j||k[3],c=c||[],k=+i||1;do f=f||".5",k/=f,n.style(a,b,k+j);while(f!==(f=h()/i)&&1!==f&&--g)}return c&&(k=+k||+i||0,e=c[1]?k+(c[1]+1)*c[2]:+c[2],d&&(d.unit=j,d.start=k,d.end=e)),e}var X=/^(?:checkbox|radio)$/i,Y=/<([\w:-]+)/,Z=/^$|\/(?:java|ecma)script/i,$={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};$.optgroup=$.option,$.tbody=$.tfoot=$.colgroup=$.caption=$.thead,$.th=$.td;function _(a,b){var c="undefined"!=typeof a.getElementsByTagName?a.getElementsByTagName(b||"*"):"undefined"!=typeof a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&n.nodeName(a,b)?n.merge([a],c):c}function aa(a,b){for(var c=0,d=a.length;d>c;c++)N.set(a[c],"globalEval",!b||N.get(b[c],"globalEval"))}var ba=/<|&#?\w+;/;function ca(a,b,c,d,e){for(var f,g,h,i,j,k,l=b.createDocumentFragment(),m=[],o=0,p=a.length;p>o;o++)if(f=a[o],f||0===f)if("object"===n.type(f))n.merge(m,f.nodeType?[f]:f);else if(ba.test(f)){g=g||l.appendChild(b.createElement("div")),h=(Y.exec(f)||["",""])[1].toLowerCase(),i=$[h]||$._default,g.innerHTML=i[1]+n.htmlPrefilter(f)+i[2],k=i[0];while(k--)g=g.lastChild;n.merge(m,g.childNodes),g=l.firstChild,g.textContent=""}else m.push(b.createTextNode(f));l.textContent="",o=0;while(f=m[o++])if(d&&n.inArray(f,d)>-1)e&&e.push(f);else if(j=n.contains(f.ownerDocument,f),g=_(l.appendChild(f),"script"),j&&aa(g),c){k=0;while(f=g[k++])Z.test(f.type||"")&&c.push(f)}return l}!function(){var a=d.createDocumentFragment(),b=a.appendChild(d.createElement("div")),c=d.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),l.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",l.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var da=/^key/,ea=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,fa=/^([^.]*)(?:\.(.+)|)/;function ga(){return!0}function ha(){return!1}function ia(){try{return d.activeElement}catch(a){}}function ja(a,b,c,d,e,f){var g,h;if("object"==typeof b){"string"!=typeof c&&(d=d||c,c=void 0);for(h in b)ja(a,h,c,d,b[h],f);return a}if(null==d&&null==e?(e=c,d=c=void 0):null==e&&("string"==typeof c?(e=d,d=void 0):(e=d,d=c,c=void 0)),e===!1)e=ha;else if(!e)return a;return 1===f&&(g=e,e=function(a){return n().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=n.guid++)),a.each(function(){n.event.add(this,b,e,d,c)})}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=N.get(a);if(r){c.handler&&(f=c,c=f.handler,e=f.selector),c.guid||(c.guid=n.guid++),(i=r.events)||(i=r.events={}),(g=r.handle)||(g=r.handle=function(b){return"undefined"!=typeof n&&n.event.triggered!==b.type?n.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(G)||[""],j=b.length;while(j--)h=fa.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o&&(l=n.event.special[o]||{},o=(e?l.delegateType:l.bindType)||o,l=n.event.special[o]||{},k=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},f),(m=i[o])||(m=i[o]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,p,g)!==!1||a.addEventListener&&a.addEventListener(o,g)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),n.event.global[o]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=N.hasData(a)&&N.get(a);if(r&&(i=r.events)){b=(b||"").match(G)||[""],j=b.length;while(j--)if(h=fa.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=i[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&q!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete i[o])}else for(o in i)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(i)&&N.remove(a,"handle events")}},dispatch:function(a){a=n.event.fix(a);var b,c,d,f,g,h=[],i=e.call(arguments),j=(N.get(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())a.rnamespace&&!a.rnamespace.test(g.namespace)||(a.handleObj=g,a.data=g.data,d=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==d&&(a.result=d)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&("click"!==a.type||isNaN(a.button)||a.button<1))for(;i!==this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>-1:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},props:"altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,e,f,g=b.button;return null==a.pageX&&null!=b.clientX&&(c=a.target.ownerDocument||d,e=c.documentElement,f=c.body,a.pageX=b.clientX+(e&&e.scrollLeft||f&&f.scrollLeft||0)-(e&&e.clientLeft||f&&f.clientLeft||0),a.pageY=b.clientY+(e&&e.scrollTop||f&&f.scrollTop||0)-(e&&e.clientTop||f&&f.clientTop||0)),a.which||void 0===g||(a.which=1&g?1:2&g?3:4&g?2:0),a}},fix:function(a){if(a[n.expando])return a;var b,c,e,f=a.type,g=a,h=this.fixHooks[f];h||(this.fixHooks[f]=h=ea.test(f)?this.mouseHooks:da.test(f)?this.keyHooks:{}),e=h.props?this.props.concat(h.props):this.props,a=new n.Event(g),b=e.length;while(b--)c=e[b],a[c]=g[c];return a.target||(a.target=d),3===a.target.nodeType&&(a.target=a.target.parentNode),h.filter?h.filter(a,g):a},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==ia()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===ia()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&n.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}}},n.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c)},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?ga:ha):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={constructor:n.Event,isDefaultPrevented:ha,isPropagationStopped:ha,isImmediatePropagationStopped:ha,isSimulated:!1,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=ga,a&&!this.isSimulated&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=ga,a&&!this.isSimulated&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=ga,a&&!this.isSimulated&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return e&&(e===d||n.contains(d,e))||(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),n.fn.extend({on:function(a,b,c,d){return ja(this,a,b,c,d)},one:function(a,b,c,d){return ja(this,a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return b!==!1&&"function"!=typeof b||(c=b,b=void 0),c===!1&&(c=ha),this.each(function(){n.event.remove(this,a,c,b)})}});var ka=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,la=/<script|<style|<link/i,ma=/checked\s*(?:[^=]|=\s*.checked.)/i,na=/^true\/(.*)/,oa=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function pa(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function qa(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function ra(a){var b=na.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function sa(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(N.hasData(a)&&(f=N.access(a),g=N.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;d>c;c++)n.event.add(b,e,j[e][c])}O.hasData(a)&&(h=O.access(a),i=n.extend({},h),O.set(b,i))}}function ta(a,b){var c=b.nodeName.toLowerCase();"input"===c&&X.test(a.type)?b.checked=a.checked:"input"!==c&&"textarea"!==c||(b.defaultValue=a.defaultValue)}function ua(a,b,c,d){b=f.apply([],b);var e,g,h,i,j,k,m=0,o=a.length,p=o-1,q=b[0],r=n.isFunction(q);if(r||o>1&&"string"==typeof q&&!l.checkClone&&ma.test(q))return a.each(function(e){var f=a.eq(e);r&&(b[0]=q.call(this,e,f.html())),ua(f,b,c,d)});if(o&&(e=ca(b,a[0].ownerDocument,!1,a,d),g=e.firstChild,1===e.childNodes.length&&(e=g),g||d)){for(h=n.map(_(e,"script"),qa),i=h.length;o>m;m++)j=e,m!==p&&(j=n.clone(j,!0,!0),i&&n.merge(h,_(j,"script"))),c.call(a[m],j,m);if(i)for(k=h[h.length-1].ownerDocument,n.map(h,ra),m=0;i>m;m++)j=h[m],Z.test(j.type||"")&&!N.access(j,"globalEval")&&n.contains(k,j)&&(j.src?n._evalUrl&&n._evalUrl(j.src):n.globalEval(j.textContent.replace(oa,"")))}return a}function va(a,b,c){for(var d,e=b?n.filter(b,a):a,f=0;null!=(d=e[f]);f++)c||1!==d.nodeType||n.cleanData(_(d)),d.parentNode&&(c&&n.contains(d.ownerDocument,d)&&aa(_(d,"script")),d.parentNode.removeChild(d));return a}n.extend({htmlPrefilter:function(a){return a.replace(ka,"<$1></$2>")},clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=n.contains(a.ownerDocument,a);if(!(l.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(g=_(h),f=_(a),d=0,e=f.length;e>d;d++)ta(f[d],g[d]);if(b)if(c)for(f=f||_(a),g=g||_(h),d=0,e=f.length;e>d;d++)sa(f[d],g[d]);else sa(a,h);return g=_(h,"script"),g.length>0&&aa(g,!i&&_(a,"script")),h},cleanData:function(a){for(var b,c,d,e=n.event.special,f=0;void 0!==(c=a[f]);f++)if(L(c)){if(b=c[N.expando]){if(b.events)for(d in b.events)e[d]?n.event.remove(c,d):n.removeEvent(c,d,b.handle);c[N.expando]=void 0}c[O.expando]&&(c[O.expando]=void 0)}}}),n.fn.extend({domManip:ua,detach:function(a){return va(this,a,!0)},remove:function(a){return va(this,a)},text:function(a){return K(this,function(a){return void 0===a?n.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=a)})},null,a,arguments.length)},append:function(){return ua(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=pa(this,a);b.appendChild(a)}})},prepend:function(){return ua(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=pa(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return ua(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return ua(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(n.cleanData(_(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return K(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!la.test(a)&&!$[(Y.exec(a)||["",""])[1].toLowerCase()]){a=n.htmlPrefilter(a);try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(_(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=[];return ua(this,arguments,function(b){var c=this.parentNode;n.inArray(this,a)<0&&(n.cleanData(_(this)),c&&c.replaceChild(b,this))},a)}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=[],e=n(a),f=e.length-1,h=0;f>=h;h++)c=h===f?this:this.clone(!0),n(e[h])[b](c),g.apply(d,c.get());return this.pushStack(d)}});var wa,xa={HTML:"block",BODY:"block"};function ya(a,b){var c=n(b.createElement(a)).appendTo(b.body),d=n.css(c[0],"display");return c.detach(),d}function za(a){var b=d,c=xa[a];return c||(c=ya(a,b),"none"!==c&&c||(wa=(wa||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=wa[0].contentDocument,b.write(),b.close(),c=ya(a,b),wa.detach()),xa[a]=c),c}var Aa=/^margin/,Ba=new RegExp("^("+S+")(?!px)[a-z%]+$","i"),Ca=function(b){var c=b.ownerDocument.defaultView;return c&&c.opener||(c=a),c.getComputedStyle(b)},Da=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e},Ea=d.documentElement;!function(){var b,c,e,f,g=d.createElement("div"),h=d.createElement("div");if(h.style){h.style.backgroundClip="content-box",h.cloneNode(!0).style.backgroundClip="",l.clearCloneStyle="content-box"===h.style.backgroundClip,g.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",g.appendChild(h);function i(){h.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",h.innerHTML="",Ea.appendChild(g);var d=a.getComputedStyle(h);b="1%"!==d.top,f="2px"===d.marginLeft,c="4px"===d.width,h.style.marginRight="50%",e="4px"===d.marginRight,Ea.removeChild(g)}n.extend(l,{pixelPosition:function(){return i(),b},boxSizingReliable:function(){return null==c&&i(),c},pixelMarginRight:function(){return null==c&&i(),e},reliableMarginLeft:function(){return null==c&&i(),f},reliableMarginRight:function(){var b,c=h.appendChild(d.createElement("div"));return c.style.cssText=h.style.cssText="-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",c.style.marginRight=c.style.width="0",h.style.width="1px",Ea.appendChild(g),b=!parseFloat(a.getComputedStyle(c).marginRight),Ea.removeChild(g),h.removeChild(c),b}})}}();function Fa(a,b,c){var d,e,f,g,h=a.style;return c=c||Ca(a),g=c?c.getPropertyValue(b)||c[b]:void 0,""!==g&&void 0!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),c&&!l.pixelMarginRight()&&Ba.test(g)&&Aa.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f),void 0!==g?g+"":g}function Ga(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}var Ha=/^(none|table(?!-c[ea]).+)/,Ia={position:"absolute",visibility:"hidden",display:"block"},Ja={letterSpacing:"0",fontWeight:"400"},Ka=["Webkit","O","Moz","ms"],La=d.createElement("div").style;function Ma(a){if(a in La)return a;var b=a[0].toUpperCase()+a.slice(1),c=Ka.length;while(c--)if(a=Ka[c]+b,a in La)return a}function Na(a,b,c){var d=T.exec(b);return d?Math.max(0,d[2]-(c||0))+(d[3]||"px"):b}function Oa(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+U[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+U[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+U[f]+"Width",!0,e))):(g+=n.css(a,"padding"+U[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+U[f]+"Width",!0,e)));return g}function Pa(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=Ca(a),g="border-box"===n.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=Fa(a,b,f),(0>e||null==e)&&(e=a.style[b]),Ba.test(e))return e;d=g&&(l.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Oa(a,b,c||(g?"border":"content"),d,f)+"px"}function Qa(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=N.get(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&V(d)&&(f[g]=N.access(d,"olddisplay",za(d.nodeName)))):(e=V(d),"none"===c&&e||N.set(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Fa(a,"opacity");return""===c?"1":c}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;return b=n.cssProps[h]||(n.cssProps[h]=Ma(h)||h),g=n.cssHooks[b]||n.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=T.exec(c))&&e[1]&&(c=W(a,b,e),f="number"),null!=c&&c===c&&("number"===f&&(c+=e&&e[3]||(n.cssNumber[h]?"":"px")),l.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=Ma(h)||h),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=Fa(a,b,d)),"normal"===e&&b in Ja&&(e=Ja[b]),""===c||c?(f=parseFloat(e),c===!0||isFinite(f)?f||0:e):e}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?Ha.test(n.css(a,"display"))&&0===a.offsetWidth?Da(a,Ia,function(){return Pa(a,b,d)}):Pa(a,b,d):void 0},set:function(a,c,d){var e,f=d&&Ca(a),g=d&&Oa(a,b,d,"border-box"===n.css(a,"boxSizing",!1,f),f);return g&&(e=T.exec(c))&&"px"!==(e[3]||"px")&&(a.style[b]=c,c=n.css(a,b)),Na(a,c,g)}}}),n.cssHooks.marginLeft=Ga(l.reliableMarginLeft,function(a,b){return b?(parseFloat(Fa(a,"marginLeft"))||a.getBoundingClientRect().left-Da(a,{marginLeft:0},function(){return a.getBoundingClientRect().left}))+"px":void 0}),n.cssHooks.marginRight=Ga(l.reliableMarginRight,function(a,b){return b?Da(a,{display:"inline-block"},Fa,[a,"marginRight"]):void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+U[d]+b]=f[d]||f[d-2]||f[0];return e}},Aa.test(a)||(n.cssHooks[a+b].set=Na)}),n.fn.extend({css:function(a,b){return K(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=Ca(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return Qa(this,!0)},hide:function(){return Qa(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){V(this)?n(this).show():n(this).hide()})}});function Ra(a,b,c,d,e){return new Ra.prototype.init(a,b,c,d,e)}n.Tween=Ra,Ra.prototype={constructor:Ra,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||n.easing._default,this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=Ra.propHooks[this.prop];return a&&a.get?a.get(this):Ra.propHooks._default.get(this)},run:function(a){var b,c=Ra.propHooks[this.prop];return this.options.duration?this.pos=b=n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Ra.propHooks._default.set(this),this}},Ra.prototype.init.prototype=Ra.prototype,Ra.propHooks={_default:{get:function(a){var b;return 1!==a.elem.nodeType||null!=a.elem[a.prop]&&null==a.elem.style[a.prop]?a.elem[a.prop]:(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0)},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):1!==a.elem.nodeType||null==a.elem.style[n.cssProps[a.prop]]&&!n.cssHooks[a.prop]?a.elem[a.prop]=a.now:n.style(a.elem,a.prop,a.now+a.unit)}}},Ra.propHooks.scrollTop=Ra.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},_default:"swing"},n.fx=Ra.prototype.init,n.fx.step={};var Sa,Ta,Ua=/^(?:toggle|show|hide)$/,Va=/queueHooks$/;function Wa(){return a.setTimeout(function(){Sa=void 0}),Sa=n.now()}function Xa(a,b){var c,d=0,e={height:a};for(b=b?1:0;4>d;d+=2-b)c=U[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function Ya(a,b,c){for(var d,e=(_a.tweeners[b]||[]).concat(_a.tweeners["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function Za(a,b,c){var d,e,f,g,h,i,j,k,l=this,m={},o=a.style,p=a.nodeType&&V(a),q=N.get(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,l.always(function(){l.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=n.css(a,"display"),k="none"===j?N.get(a,"olddisplay")||za(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(o.display="inline-block")),c.overflow&&(o.overflow="hidden",l.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],Ua.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}m[d]=q&&q[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(m))"inline"===("none"===j?za(a.nodeName):j)&&(o.display=j);else{q?"hidden"in q&&(p=q.hidden):q=N.access(a,"fxshow",{}),f&&(q.hidden=!p),p?n(a).show():l.done(function(){n(a).hide()}),l.done(function(){var b;N.remove(a,"fxshow");for(b in m)n.style(a,b,m[b])});for(d in m)g=Ya(p?q[d]:0,d,l),d in q||(q[d]=g.start,p&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function $a(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function _a(a,b,c){var d,e,f=0,g=_a.prefilters.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=Sa||Wa(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{},easing:n.easing._default},c),originalProperties:b,originalOptions:c,startTime:Sa||Wa(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?(h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j,b])):h.rejectWith(a,[j,b]),this}}),k=j.props;for($a(k,j.opts.specialEasing);g>f;f++)if(d=_a.prefilters[f].call(j,a,k,j.opts))return n.isFunction(d.stop)&&(n._queueHooks(j.elem,j.opts.queue).stop=n.proxy(d.stop,d)),d;return n.map(k,Ya,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(_a,{tweeners:{"*":[function(a,b){var c=this.createTween(a,b);return W(c.elem,a,T.exec(b),c),c}]},tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.match(G);for(var c,d=0,e=a.length;e>d;d++)c=a[d],_a.tweeners[c]=_a.tweeners[c]||[],_a.tweeners[c].unshift(b)},prefilters:[Za],prefilter:function(a,b){b?_a.prefilters.unshift(a):_a.prefilters.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,null!=d.queue&&d.queue!==!0||(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(V).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=_a(this,n.extend({},a),f);(e||N.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=N.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&Va.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));!b&&c||n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=N.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(Xa(b,!0),a,d,e)}}),n.each({slideDown:Xa("show"),slideUp:Xa("hide"),slideToggle:Xa("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=0,c=n.timers;for(Sa=n.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||n.fx.stop(),Sa=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){Ta||(Ta=a.setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){a.clearInterval(Ta),Ta=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(b,c){return b=n.fx?n.fx.speeds[b]||b:b,c=c||"fx",this.queue(c,function(c,d){var e=a.setTimeout(c,b);d.stop=function(){a.clearTimeout(e)}})},function(){var a=d.createElement("input"),b=d.createElement("select"),c=b.appendChild(d.createElement("option"));a.type="checkbox",l.checkOn=""!==a.value,l.optSelected=c.selected,b.disabled=!0,l.optDisabled=!c.disabled,a=d.createElement("input"),a.value="t",a.type="radio",l.radioValue="t"===a.value}();var ab,bb=n.expr.attrHandle;n.fn.extend({attr:function(a,b){return K(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return"undefined"==typeof a.getAttribute?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),e=n.attrHooks[b]||(n.expr.match.bool.test(b)?ab:void 0)),void 0!==c?null===c?void n.removeAttr(a,b):e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:(a.setAttribute(b,c+""),c):e&&"get"in e&&null!==(d=e.get(a,b))?d:(d=n.find.attr(a,b),null==d?void 0:d))},attrHooks:{type:{set:function(a,b){if(!l.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(G);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)&&(a[d]=!1),a.removeAttribute(c)}}),ab={set:function(a,b,c){return b===!1?n.removeAttr(a,c):a.setAttribute(c,c),c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=bb[b]||n.find.attr;bb[b]=function(a,b,d){var e,f;return d||(f=bb[b],bb[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,bb[b]=f),e}});var cb=/^(?:input|select|textarea|button)$/i,db=/^(?:a|area)$/i;n.fn.extend({prop:function(a,b){return K(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[n.propFix[a]||a]})}}),n.extend({prop:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return 1===f&&n.isXMLDoc(a)||(b=n.propFix[b]||b,e=n.propHooks[b]),
void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=n.find.attr(a,"tabindex");return b?parseInt(b,10):cb.test(a.nodeName)||db.test(a.nodeName)&&a.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),l.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null},set:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex)}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this});var eb=/[\t\r\n\f]/g;function fb(a){return a.getAttribute&&a.getAttribute("class")||""}n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h,i=0;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,fb(this)))});if("string"==typeof a&&a){b=a.match(G)||[];while(c=this[i++])if(e=fb(c),d=1===c.nodeType&&(" "+e+" ").replace(eb," ")){g=0;while(f=b[g++])d.indexOf(" "+f+" ")<0&&(d+=f+" ");h=n.trim(d),e!==h&&c.setAttribute("class",h)}}return this},removeClass:function(a){var b,c,d,e,f,g,h,i=0;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,fb(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof a&&a){b=a.match(G)||[];while(c=this[i++])if(e=fb(c),d=1===c.nodeType&&(" "+e+" ").replace(eb," ")){g=0;while(f=b[g++])while(d.indexOf(" "+f+" ")>-1)d=d.replace(" "+f+" "," ");h=n.trim(d),e!==h&&c.setAttribute("class",h)}}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):n.isFunction(a)?this.each(function(c){n(this).toggleClass(a.call(this,c,fb(this),b),b)}):this.each(function(){var b,d,e,f;if("string"===c){d=0,e=n(this),f=a.match(G)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else void 0!==a&&"boolean"!==c||(b=fb(this),b&&N.set(this,"__className__",b),this.setAttribute&&this.setAttribute("class",b||a===!1?"":N.get(this,"__className__")||""))})},hasClass:function(a){var b,c,d=0;b=" "+a+" ";while(c=this[d++])if(1===c.nodeType&&(" "+fb(c)+" ").replace(eb," ").indexOf(b)>-1)return!0;return!1}});var gb=/\r/g,hb=/[\x20\t\r\n\f]+/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(gb,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.trim(n.text(a)).replace(hb," ")}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],(c.selected||i===e)&&(l.optDisabled?!c.disabled:null===c.getAttribute("disabled"))&&(!c.parentNode.disabled||!n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=n.inArray(n.valHooks.option.get(d),f)>-1)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>-1:void 0}},l.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var ib=/^(?:focusinfocus|focusoutblur)$/;n.extend(n.event,{trigger:function(b,c,e,f){var g,h,i,j,l,m,o,p=[e||d],q=k.call(b,"type")?b.type:b,r=k.call(b,"namespace")?b.namespace.split("."):[];if(h=i=e=e||d,3!==e.nodeType&&8!==e.nodeType&&!ib.test(q+n.event.triggered)&&(q.indexOf(".")>-1&&(r=q.split("."),q=r.shift(),r.sort()),l=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=f?2:3,b.namespace=r.join("."),b.rnamespace=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=e),c=null==c?[b]:n.makeArray(c,[b]),o=n.event.special[q]||{},f||!o.trigger||o.trigger.apply(e,c)!==!1)){if(!f&&!o.noBubble&&!n.isWindow(e)){for(j=o.delegateType||q,ib.test(j+q)||(h=h.parentNode);h;h=h.parentNode)p.push(h),i=h;i===(e.ownerDocument||d)&&p.push(i.defaultView||i.parentWindow||a)}g=0;while((h=p[g++])&&!b.isPropagationStopped())b.type=g>1?j:o.bindType||q,m=(N.get(h,"events")||{})[b.type]&&N.get(h,"handle"),m&&m.apply(h,c),m=l&&h[l],m&&m.apply&&L(h)&&(b.result=m.apply(h,c),b.result===!1&&b.preventDefault());return b.type=q,f||b.isDefaultPrevented()||o._default&&o._default.apply(p.pop(),c)!==!1||!L(e)||l&&n.isFunction(e[q])&&!n.isWindow(e)&&(i=e[l],i&&(e[l]=null),n.event.triggered=q,e[q](),n.event.triggered=void 0,i&&(e[l]=i)),b.result}},simulate:function(a,b,c){var d=n.extend(new n.Event,c,{type:a,isSimulated:!0});n.event.trigger(d,null,b)}}),n.fn.extend({trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),l.focusin="onfocusin"in a,l.focusin||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a))};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=N.access(d,b);e||d.addEventListener(a,c,!0),N.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=N.access(d,b)-1;e?N.access(d,b,e):(d.removeEventListener(a,c,!0),N.remove(d,b))}}});var jb=a.location,kb=n.now(),lb=/\?/;n.parseJSON=function(a){return JSON.parse(a+"")},n.parseXML=function(b){var c;if(!b||"string"!=typeof b)return null;try{c=(new a.DOMParser).parseFromString(b,"text/xml")}catch(d){c=void 0}return c&&!c.getElementsByTagName("parsererror").length||n.error("Invalid XML: "+b),c};var mb=/#.*$/,nb=/([?&])_=[^&]*/,ob=/^(.*?):[ \t]*([^\r\n]*)$/gm,pb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,qb=/^(?:GET|HEAD)$/,rb=/^\/\//,sb={},tb={},ub="*/".concat("*"),vb=d.createElement("a");vb.href=jb.href;function wb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(G)||[];if(n.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function xb(a,b,c,d){var e={},f=a===tb;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function yb(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&n.extend(!0,a,d),a}function zb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function Ab(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:jb.href,type:"GET",isLocal:pb.test(jb.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":ub,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?yb(yb(a,n.ajaxSettings),b):yb(n.ajaxSettings,a)},ajaxPrefilter:wb(sb),ajaxTransport:wb(tb),ajax:function(b,c){"object"==typeof b&&(c=b,b=void 0),c=c||{};var e,f,g,h,i,j,k,l,m=n.ajaxSetup({},c),o=m.context||m,p=m.context&&(o.nodeType||o.jquery)?n(o):n.event,q=n.Deferred(),r=n.Callbacks("once memory"),s=m.statusCode||{},t={},u={},v=0,w="canceled",x={readyState:0,getResponseHeader:function(a){var b;if(2===v){if(!h){h={};while(b=ob.exec(g))h[b[1].toLowerCase()]=b[2]}b=h[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===v?g:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return v||(a=u[c]=u[c]||a,t[a]=b),this},overrideMimeType:function(a){return v||(m.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>v)for(b in a)s[b]=[s[b],a[b]];else x.always(a[x.status]);return this},abort:function(a){var b=a||w;return e&&e.abort(b),z(0,b),this}};if(q.promise(x).complete=r.add,x.success=x.done,x.error=x.fail,m.url=((b||m.url||jb.href)+"").replace(mb,"").replace(rb,jb.protocol+"//"),m.type=c.method||c.type||m.method||m.type,m.dataTypes=n.trim(m.dataType||"*").toLowerCase().match(G)||[""],null==m.crossDomain){j=d.createElement("a");try{j.href=m.url,j.href=j.href,m.crossDomain=vb.protocol+"//"+vb.host!=j.protocol+"//"+j.host}catch(y){m.crossDomain=!0}}if(m.data&&m.processData&&"string"!=typeof m.data&&(m.data=n.param(m.data,m.traditional)),xb(sb,m,c,x),2===v)return x;k=n.event&&m.global,k&&0===n.active++&&n.event.trigger("ajaxStart"),m.type=m.type.toUpperCase(),m.hasContent=!qb.test(m.type),f=m.url,m.hasContent||(m.data&&(f=m.url+=(lb.test(f)?"&":"?")+m.data,delete m.data),m.cache===!1&&(m.url=nb.test(f)?f.replace(nb,"$1_="+kb++):f+(lb.test(f)?"&":"?")+"_="+kb++)),m.ifModified&&(n.lastModified[f]&&x.setRequestHeader("If-Modified-Since",n.lastModified[f]),n.etag[f]&&x.setRequestHeader("If-None-Match",n.etag[f])),(m.data&&m.hasContent&&m.contentType!==!1||c.contentType)&&x.setRequestHeader("Content-Type",m.contentType),x.setRequestHeader("Accept",m.dataTypes[0]&&m.accepts[m.dataTypes[0]]?m.accepts[m.dataTypes[0]]+("*"!==m.dataTypes[0]?", "+ub+"; q=0.01":""):m.accepts["*"]);for(l in m.headers)x.setRequestHeader(l,m.headers[l]);if(m.beforeSend&&(m.beforeSend.call(o,x,m)===!1||2===v))return x.abort();w="abort";for(l in{success:1,error:1,complete:1})x[l](m[l]);if(e=xb(tb,m,c,x)){if(x.readyState=1,k&&p.trigger("ajaxSend",[x,m]),2===v)return x;m.async&&m.timeout>0&&(i=a.setTimeout(function(){x.abort("timeout")},m.timeout));try{v=1,e.send(t,z)}catch(y){if(!(2>v))throw y;z(-1,y)}}else z(-1,"No Transport");function z(b,c,d,h){var j,l,t,u,w,y=c;2!==v&&(v=2,i&&a.clearTimeout(i),e=void 0,g=h||"",x.readyState=b>0?4:0,j=b>=200&&300>b||304===b,d&&(u=zb(m,x,d)),u=Ab(m,u,x,j),j?(m.ifModified&&(w=x.getResponseHeader("Last-Modified"),w&&(n.lastModified[f]=w),w=x.getResponseHeader("etag"),w&&(n.etag[f]=w)),204===b||"HEAD"===m.type?y="nocontent":304===b?y="notmodified":(y=u.state,l=u.data,t=u.error,j=!t)):(t=y,!b&&y||(y="error",0>b&&(b=0))),x.status=b,x.statusText=(c||y)+"",j?q.resolveWith(o,[l,y,x]):q.rejectWith(o,[x,y,t]),x.statusCode(s),s=void 0,k&&p.trigger(j?"ajaxSuccess":"ajaxError",[x,m,j?l:t]),r.fireWith(o,[x,y]),k&&(p.trigger("ajaxComplete",[x,m]),--n.active||n.event.trigger("ajaxStop")))}return x},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax(n.extend({url:a,type:b,dataType:e,data:c,success:d},n.isPlainObject(a)&&a))}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){var b;return n.isFunction(a)?this.each(function(b){n(this).wrapAll(a.call(this,b))}):(this[0]&&(b=n(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this)},wrapInner:function(a){return n.isFunction(a)?this.each(function(b){n(this).wrapInner(a.call(this,b))}):this.each(function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}}),n.expr.filters.hidden=function(a){return!n.expr.filters.visible(a)},n.expr.filters.visible=function(a){return a.offsetWidth>0||a.offsetHeight>0||a.getClientRects().length>0};var Bb=/%20/g,Cb=/\[\]$/,Db=/\r?\n/g,Eb=/^(?:submit|button|image|reset|file)$/i,Fb=/^(?:input|select|textarea|keygen)/i;function Gb(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||Cb.test(a)?d(a,e):Gb(a+"["+("object"==typeof e&&null!=e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)Gb(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)Gb(c,a[c],b,e);return d.join("&").replace(Bb,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&Fb.test(this.nodeName)&&!Eb.test(a)&&(this.checked||!X.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(Db,"\r\n")}}):{name:b.name,value:c.replace(Db,"\r\n")}}).get()}}),n.ajaxSettings.xhr=function(){try{return new a.XMLHttpRequest}catch(b){}};var Hb={0:200,1223:204},Ib=n.ajaxSettings.xhr();l.cors=!!Ib&&"withCredentials"in Ib,l.ajax=Ib=!!Ib,n.ajaxTransport(function(b){var c,d;return l.cors||Ib&&!b.crossDomain?{send:function(e,f){var g,h=b.xhr();if(h.open(b.type,b.url,b.async,b.username,b.password),b.xhrFields)for(g in b.xhrFields)h[g]=b.xhrFields[g];b.mimeType&&h.overrideMimeType&&h.overrideMimeType(b.mimeType),b.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest");for(g in e)h.setRequestHeader(g,e[g]);c=function(a){return function(){c&&(c=d=h.onload=h.onerror=h.onabort=h.onreadystatechange=null,"abort"===a?h.abort():"error"===a?"number"!=typeof h.status?f(0,"error"):f(h.status,h.statusText):f(Hb[h.status]||h.status,h.statusText,"text"!==(h.responseType||"text")||"string"!=typeof h.responseText?{binary:h.response}:{text:h.responseText},h.getAllResponseHeaders()))}},h.onload=c(),d=h.onerror=c("error"),void 0!==h.onabort?h.onabort=d:h.onreadystatechange=function(){4===h.readyState&&a.setTimeout(function(){c&&d()})},c=c("abort");try{h.send(b.hasContent&&b.data||null)}catch(i){if(c)throw i}},abort:function(){c&&c()}}:void 0}),n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(e,f){b=n("<script>").prop({charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&f("error"===a.type?404:200,a.type)}),d.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Jb=[],Kb=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Jb.pop()||n.expando+"_"+kb++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Kb.test(b.url)?"url":"string"==typeof b.data&&0===(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Kb.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Kb,"$1"+e):b.jsonp!==!1&&(b.url+=(lb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){void 0===f?n(a).removeProp(e):a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Jb.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||d;var e=x.exec(a),f=!c&&[];return e?[b.createElement(e[1])]:(e=ca([a],b,f),f&&f.length&&n(f).remove(),n.merge([],e.childNodes))};var Lb=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&Lb)return Lb.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>-1&&(d=n.trim(a.slice(h)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e||"GET",dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).always(c&&function(a,b){g.each(function(){c.apply(this,f||[a.responseText,b,a])})}),this},n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};function Mb(a){return n.isWindow(a)?a:9===a.nodeType&&a.defaultView}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,n.extend({},h))),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d=this[0],e={top:0,left:0},f=d&&d.ownerDocument;if(f)return b=f.documentElement,n.contains(b,d)?(e=d.getBoundingClientRect(),c=Mb(f),{top:e.top+c.pageYOffset-b.clientTop,left:e.left+c.pageXOffset-b.clientLeft}):e},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===n.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(d=a.offset()),d.top+=n.css(a[0],"borderTopWidth",!0),d.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-d.top-n.css(c,"marginTop",!0),left:b.left-d.left-n.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent;while(a&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Ea})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c="pageYOffset"===b;n.fn[a]=function(d){return K(this,function(a,d,e){var f=Mb(a);return void 0===e?f?f[b]:a[d]:void(f?f.scrollTo(c?f.pageXOffset:e,c?e:f.pageYOffset):a[d]=e)},a,d,arguments.length)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=Ga(l.pixelPosition,function(a,c){return c?(c=Fa(a,b),Ba.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return K(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.extend({bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)},size:function(){return this.length}}),n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var Nb=a.jQuery,Ob=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=Ob),b&&a.jQuery===n&&(a.jQuery=Nb),n},b||(a.jQuery=a.$=n),n});

/*!
 * Bootstrap v3.3.6 (http://getbootstrap.com)
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under the MIT license
 */
if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+function(a){"use strict";var b=a.fn.jquery.split(" ")[0].split(".");if(b[0]<2&&b[1]<9||1==b[0]&&9==b[1]&&b[2]<1||b[0]>2)throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 3")}(jQuery),+function(a){"use strict";function b(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var c in b)if(void 0!==a.style[c])return{end:b[c]};return!1}a.fn.emulateTransitionEnd=function(b){var c=!1,d=this;a(this).one("bsTransitionEnd",function(){c=!0});var e=function(){c||a(d).trigger(a.support.transition.end)};return setTimeout(e,b),this},a(function(){a.support.transition=b(),a.support.transition&&(a.event.special.bsTransitionEnd={bindType:a.support.transition.end,delegateType:a.support.transition.end,handle:function(b){return a(b.target).is(this)?b.handleObj.handler.apply(this,arguments):void 0}})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var c=a(this),e=c.data("bs.alert");e||c.data("bs.alert",e=new d(this)),"string"==typeof b&&e[b].call(c)})}var c='[data-dismiss="alert"]',d=function(b){a(b).on("click",c,this.close)};d.VERSION="3.3.6",d.TRANSITION_DURATION=150,d.prototype.close=function(b){function c(){g.detach().trigger("closed.bs.alert").remove()}var e=a(this),f=e.attr("data-target");f||(f=e.attr("href"),f=f&&f.replace(/.*(?=#[^\s]*$)/,""));var g=a(f);b&&b.preventDefault(),g.length||(g=e.closest(".alert")),g.trigger(b=a.Event("close.bs.alert")),b.isDefaultPrevented()||(g.removeClass("in"),a.support.transition&&g.hasClass("fade")?g.one("bsTransitionEnd",c).emulateTransitionEnd(d.TRANSITION_DURATION):c())};var e=a.fn.alert;a.fn.alert=b,a.fn.alert.Constructor=d,a.fn.alert.noConflict=function(){return a.fn.alert=e,this},a(document).on("click.bs.alert.data-api",c,d.prototype.close)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.button"),f="object"==typeof b&&b;e||d.data("bs.button",e=new c(this,f)),"toggle"==b?e.toggle():b&&e.setState(b)})}var c=function(b,d){this.$element=a(b),this.options=a.extend({},c.DEFAULTS,d),this.isLoading=!1};c.VERSION="3.3.6",c.DEFAULTS={loadingText:"loading..."},c.prototype.setState=function(b){var c="disabled",d=this.$element,e=d.is("input")?"val":"html",f=d.data();b+="Text",null==f.resetText&&d.data("resetText",d[e]()),setTimeout(a.proxy(function(){d[e](null==f[b]?this.options[b]:f[b]),"loadingText"==b?(this.isLoading=!0,d.addClass(c).attr(c,c)):this.isLoading&&(this.isLoading=!1,d.removeClass(c).removeAttr(c))},this),0)},c.prototype.toggle=function(){var a=!0,b=this.$element.closest('[data-toggle="buttons"]');if(b.length){var c=this.$element.find("input");"radio"==c.prop("type")?(c.prop("checked")&&(a=!1),b.find(".active").removeClass("active"),this.$element.addClass("active")):"checkbox"==c.prop("type")&&(c.prop("checked")!==this.$element.hasClass("active")&&(a=!1),this.$element.toggleClass("active")),c.prop("checked",this.$element.hasClass("active")),a&&c.trigger("change")}else this.$element.attr("aria-pressed",!this.$element.hasClass("active")),this.$element.toggleClass("active")};var d=a.fn.button;a.fn.button=b,a.fn.button.Constructor=c,a.fn.button.noConflict=function(){return a.fn.button=d,this},a(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(c){var d=a(c.target);d.hasClass("btn")||(d=d.closest(".btn")),b.call(d,"toggle"),a(c.target).is('input[type="radio"]')||a(c.target).is('input[type="checkbox"]')||c.preventDefault()}).on("focus.bs.button.data-api blur.bs.button.data-api",'[data-toggle^="button"]',function(b){a(b.target).closest(".btn").toggleClass("focus",/^focus(in)?$/.test(b.type))})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.carousel"),f=a.extend({},c.DEFAULTS,d.data(),"object"==typeof b&&b),g="string"==typeof b?b:f.slide;e||d.data("bs.carousel",e=new c(this,f)),"number"==typeof b?e.to(b):g?e[g]():f.interval&&e.pause().cycle()})}var c=function(b,c){this.$element=a(b),this.$indicators=this.$element.find(".carousel-indicators"),this.options=c,this.paused=null,this.sliding=null,this.interval=null,this.$active=null,this.$items=null,this.options.keyboard&&this.$element.on("keydown.bs.carousel",a.proxy(this.keydown,this)),"hover"==this.options.pause&&!("ontouchstart"in document.documentElement)&&this.$element.on("mouseenter.bs.carousel",a.proxy(this.pause,this)).on("mouseleave.bs.carousel",a.proxy(this.cycle,this))};c.VERSION="3.3.6",c.TRANSITION_DURATION=600,c.DEFAULTS={interval:5e3,pause:"hover",wrap:!0,keyboard:!0},c.prototype.keydown=function(a){if(!/input|textarea/i.test(a.target.tagName)){switch(a.which){case 37:this.prev();break;case 39:this.next();break;default:return}a.preventDefault()}},c.prototype.cycle=function(b){return b||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(a.proxy(this.next,this),this.options.interval)),this},c.prototype.getItemIndex=function(a){return this.$items=a.parent().children(".item"),this.$items.index(a||this.$active)},c.prototype.getItemForDirection=function(a,b){var c=this.getItemIndex(b),d="prev"==a&&0===c||"next"==a&&c==this.$items.length-1;if(d&&!this.options.wrap)return b;var e="prev"==a?-1:1,f=(c+e)%this.$items.length;return this.$items.eq(f)},c.prototype.to=function(a){var b=this,c=this.getItemIndex(this.$active=this.$element.find(".item.active"));return a>this.$items.length-1||0>a?void 0:this.sliding?this.$element.one("slid.bs.carousel",function(){b.to(a)}):c==a?this.pause().cycle():this.slide(a>c?"next":"prev",this.$items.eq(a))},c.prototype.pause=function(b){return b||(this.paused=!0),this.$element.find(".next, .prev").length&&a.support.transition&&(this.$element.trigger(a.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},c.prototype.next=function(){return this.sliding?void 0:this.slide("next")},c.prototype.prev=function(){return this.sliding?void 0:this.slide("prev")},c.prototype.slide=function(b,d){var e=this.$element.find(".item.active"),f=d||this.getItemForDirection(b,e),g=this.interval,h="next"==b?"left":"right",i=this;if(f.hasClass("active"))return this.sliding=!1;var j=f[0],k=a.Event("slide.bs.carousel",{relatedTarget:j,direction:h});if(this.$element.trigger(k),!k.isDefaultPrevented()){if(this.sliding=!0,g&&this.pause(),this.$indicators.length){this.$indicators.find(".active").removeClass("active");var l=a(this.$indicators.children()[this.getItemIndex(f)]);l&&l.addClass("active")}var m=a.Event("slid.bs.carousel",{relatedTarget:j,direction:h});return a.support.transition&&this.$element.hasClass("slide")?(f.addClass(b),f[0].offsetWidth,e.addClass(h),f.addClass(h),e.one("bsTransitionEnd",function(){f.removeClass([b,h].join(" ")).addClass("active"),e.removeClass(["active",h].join(" ")),i.sliding=!1,setTimeout(function(){i.$element.trigger(m)},0)}).emulateTransitionEnd(c.TRANSITION_DURATION)):(e.removeClass("active"),f.addClass("active"),this.sliding=!1,this.$element.trigger(m)),g&&this.cycle(),this}};var d=a.fn.carousel;a.fn.carousel=b,a.fn.carousel.Constructor=c,a.fn.carousel.noConflict=function(){return a.fn.carousel=d,this};var e=function(c){var d,e=a(this),f=a(e.attr("data-target")||(d=e.attr("href"))&&d.replace(/.*(?=#[^\s]+$)/,""));if(f.hasClass("carousel")){var g=a.extend({},f.data(),e.data()),h=e.attr("data-slide-to");h&&(g.interval=!1),b.call(f,g),h&&f.data("bs.carousel").to(h),c.preventDefault()}};a(document).on("click.bs.carousel.data-api","[data-slide]",e).on("click.bs.carousel.data-api","[data-slide-to]",e),a(window).on("load",function(){a('[data-ride="carousel"]').each(function(){var c=a(this);b.call(c,c.data())})})}(jQuery),+function(a){"use strict";function b(b){var c,d=b.attr("data-target")||(c=b.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,"");return a(d)}function c(b){return this.each(function(){var c=a(this),e=c.data("bs.collapse"),f=a.extend({},d.DEFAULTS,c.data(),"object"==typeof b&&b);!e&&f.toggle&&/show|hide/.test(b)&&(f.toggle=!1),e||c.data("bs.collapse",e=new d(this,f)),"string"==typeof b&&e[b]()})}var d=function(b,c){this.$element=a(b),this.options=a.extend({},d.DEFAULTS,c),this.$trigger=a('[data-toggle="collapse"][href="#'+b.id+'"],[data-toggle="collapse"][data-target="#'+b.id+'"]'),this.transitioning=null,this.options.parent?this.$parent=this.getParent():this.addAriaAndCollapsedClass(this.$element,this.$trigger),this.options.toggle&&this.toggle()};d.VERSION="3.3.6",d.TRANSITION_DURATION=350,d.DEFAULTS={toggle:!0},d.prototype.dimension=function(){var a=this.$element.hasClass("width");return a?"width":"height"},d.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var b,e=this.$parent&&this.$parent.children(".panel").children(".in, .collapsing");if(!(e&&e.length&&(b=e.data("bs.collapse"),b&&b.transitioning))){var f=a.Event("show.bs.collapse");if(this.$element.trigger(f),!f.isDefaultPrevented()){e&&e.length&&(c.call(e,"hide"),b||e.data("bs.collapse",null));var g=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded",!0),this.$trigger.removeClass("collapsed").attr("aria-expanded",!0),this.transitioning=1;var h=function(){this.$element.removeClass("collapsing").addClass("collapse in")[g](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!a.support.transition)return h.call(this);var i=a.camelCase(["scroll",g].join("-"));this.$element.one("bsTransitionEnd",a.proxy(h,this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i])}}}},d.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var b=a.Event("hide.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.dimension();this.$element[c](this.$element[c]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",!1),this.$trigger.addClass("collapsed").attr("aria-expanded",!1),this.transitioning=1;var e=function(){this.transitioning=0,this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")};return a.support.transition?void this.$element[c](0).one("bsTransitionEnd",a.proxy(e,this)).emulateTransitionEnd(d.TRANSITION_DURATION):e.call(this)}}},d.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()},d.prototype.getParent=function(){return a(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each(a.proxy(function(c,d){var e=a(d);this.addAriaAndCollapsedClass(b(e),e)},this)).end()},d.prototype.addAriaAndCollapsedClass=function(a,b){var c=a.hasClass("in");a.attr("aria-expanded",c),b.toggleClass("collapsed",!c).attr("aria-expanded",c)};var e=a.fn.collapse;a.fn.collapse=c,a.fn.collapse.Constructor=d,a.fn.collapse.noConflict=function(){return a.fn.collapse=e,this},a(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(d){var e=a(this);e.attr("data-target")||d.preventDefault();var f=b(e),g=f.data("bs.collapse"),h=g?"toggle":e.data();c.call(f,h)})}(jQuery),+function(a){"use strict";function b(b){var c=b.attr("data-target");c||(c=b.attr("href"),c=c&&/#[A-Za-z]/.test(c)&&c.replace(/.*(?=#[^\s]*$)/,""));var d=c&&a(c);return d&&d.length?d:b.parent()}function c(c){c&&3===c.which||(a(e).remove(),a(f).each(function(){var d=a(this),e=b(d),f={relatedTarget:this};e.hasClass("open")&&(c&&"click"==c.type&&/input|textarea/i.test(c.target.tagName)&&a.contains(e[0],c.target)||(e.trigger(c=a.Event("hide.bs.dropdown",f)),c.isDefaultPrevented()||(d.attr("aria-expanded","false"),e.removeClass("open").trigger(a.Event("hidden.bs.dropdown",f)))))}))}function d(b){return this.each(function(){var c=a(this),d=c.data("bs.dropdown");d||c.data("bs.dropdown",d=new g(this)),"string"==typeof b&&d[b].call(c)})}var e=".dropdown-backdrop",f='[data-toggle="dropdown"]',g=function(b){a(b).on("click.bs.dropdown",this.toggle)};g.VERSION="3.3.6",g.prototype.toggle=function(d){var e=a(this);if(!e.is(".disabled, :disabled")){var f=b(e),g=f.hasClass("open");if(c(),!g){"ontouchstart"in document.documentElement&&!f.closest(".navbar-nav").length&&a(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(a(this)).on("click",c);var h={relatedTarget:this};if(f.trigger(d=a.Event("show.bs.dropdown",h)),d.isDefaultPrevented())return;e.trigger("focus").attr("aria-expanded","true"),f.toggleClass("open").trigger(a.Event("shown.bs.dropdown",h))}return!1}},g.prototype.keydown=function(c){if(/(38|40|27|32)/.test(c.which)&&!/input|textarea/i.test(c.target.tagName)){var d=a(this);if(c.preventDefault(),c.stopPropagation(),!d.is(".disabled, :disabled")){var e=b(d),g=e.hasClass("open");if(!g&&27!=c.which||g&&27==c.which)return 27==c.which&&e.find(f).trigger("focus"),d.trigger("click");var h=" li:not(.disabled):visible a",i=e.find(".dropdown-menu"+h);if(i.length){var j=i.index(c.target);38==c.which&&j>0&&j--,40==c.which&&j<i.length-1&&j++,~j||(j=0),i.eq(j).trigger("focus")}}}};var h=a.fn.dropdown;a.fn.dropdown=d,a.fn.dropdown.Constructor=g,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=h,this},a(document).on("click.bs.dropdown.data-api",c).on("click.bs.dropdown.data-api",".dropdown form",function(a){a.stopPropagation()}).on("click.bs.dropdown.data-api",f,g.prototype.toggle).on("keydown.bs.dropdown.data-api",f,g.prototype.keydown).on("keydown.bs.dropdown.data-api",".dropdown-menu",g.prototype.keydown)}(jQuery),+function(a){"use strict";function b(b,d){return this.each(function(){var e=a(this),f=e.data("bs.modal"),g=a.extend({},c.DEFAULTS,e.data(),"object"==typeof b&&b);f||e.data("bs.modal",f=new c(this,g)),"string"==typeof b?f[b](d):g.show&&f.show(d)})}var c=function(b,c){this.options=c,this.$body=a(document.body),this.$element=a(b),this.$dialog=this.$element.find(".modal-dialog"),this.$backdrop=null,this.isShown=null,this.originalBodyPad=null,this.scrollbarWidth=0,this.ignoreBackdropClick=!1,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,a.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};c.VERSION="3.3.6",c.TRANSITION_DURATION=300,c.BACKDROP_TRANSITION_DURATION=150,c.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},c.prototype.toggle=function(a){return this.isShown?this.hide():this.show(a)},c.prototype.show=function(b){var d=this,e=a.Event("show.bs.modal",{relatedTarget:b});this.$element.trigger(e),this.isShown||e.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.setScrollbar(),this.$body.addClass("modal-open"),this.escape(),this.resize(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',a.proxy(this.hide,this)),this.$dialog.on("mousedown.dismiss.bs.modal",function(){d.$element.one("mouseup.dismiss.bs.modal",function(b){a(b.target).is(d.$element)&&(d.ignoreBackdropClick=!0)})}),this.backdrop(function(){var e=a.support.transition&&d.$element.hasClass("fade");d.$element.parent().length||d.$element.appendTo(d.$body),d.$element.show().scrollTop(0),d.adjustDialog(),e&&d.$element[0].offsetWidth,d.$element.addClass("in"),d.enforceFocus();var f=a.Event("shown.bs.modal",{relatedTarget:b});e?d.$dialog.one("bsTransitionEnd",function(){d.$element.trigger("focus").trigger(f)}).emulateTransitionEnd(c.TRANSITION_DURATION):d.$element.trigger("focus").trigger(f)}))},c.prototype.hide=function(b){b&&b.preventDefault(),b=a.Event("hide.bs.modal"),this.$element.trigger(b),this.isShown&&!b.isDefaultPrevented()&&(this.isShown=!1,this.escape(),this.resize(),a(document).off("focusin.bs.modal"),this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"),this.$dialog.off("mousedown.dismiss.bs.modal"),a.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",a.proxy(this.hideModal,this)).emulateTransitionEnd(c.TRANSITION_DURATION):this.hideModal())},c.prototype.enforceFocus=function(){a(document).off("focusin.bs.modal").on("focusin.bs.modal",a.proxy(function(a){this.$element[0]===a.target||this.$element.has(a.target).length||this.$element.trigger("focus")},this))},c.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keydown.dismiss.bs.modal",a.proxy(function(a){27==a.which&&this.hide()},this)):this.isShown||this.$element.off("keydown.dismiss.bs.modal")},c.prototype.resize=function(){this.isShown?a(window).on("resize.bs.modal",a.proxy(this.handleUpdate,this)):a(window).off("resize.bs.modal")},c.prototype.hideModal=function(){var a=this;this.$element.hide(),this.backdrop(function(){a.$body.removeClass("modal-open"),a.resetAdjustments(),a.resetScrollbar(),a.$element.trigger("hidden.bs.modal")})},c.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},c.prototype.backdrop=function(b){var d=this,e=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var f=a.support.transition&&e;if(this.$backdrop=a(document.createElement("div")).addClass("modal-backdrop "+e).appendTo(this.$body),this.$element.on("click.dismiss.bs.modal",a.proxy(function(a){return this.ignoreBackdropClick?void(this.ignoreBackdropClick=!1):void(a.target===a.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus():this.hide()))},this)),f&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!b)return;f?this.$backdrop.one("bsTransitionEnd",b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):b()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");var g=function(){d.removeBackdrop(),b&&b()};a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):g()}else b&&b()},c.prototype.handleUpdate=function(){this.adjustDialog()},c.prototype.adjustDialog=function(){var a=this.$element[0].scrollHeight>document.documentElement.clientHeight;this.$element.css({paddingLeft:!this.bodyIsOverflowing&&a?this.scrollbarWidth:"",paddingRight:this.bodyIsOverflowing&&!a?this.scrollbarWidth:""})},c.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:"",paddingRight:""})},c.prototype.checkScrollbar=function(){var a=window.innerWidth;if(!a){var b=document.documentElement.getBoundingClientRect();a=b.right-Math.abs(b.left)}this.bodyIsOverflowing=document.body.clientWidth<a,this.scrollbarWidth=this.measureScrollbar()},c.prototype.setScrollbar=function(){var a=parseInt(this.$body.css("padding-right")||0,10);this.originalBodyPad=document.body.style.paddingRight||"",this.bodyIsOverflowing&&this.$body.css("padding-right",a+this.scrollbarWidth)},c.prototype.resetScrollbar=function(){this.$body.css("padding-right",this.originalBodyPad)},c.prototype.measureScrollbar=function(){var a=document.createElement("div");a.className="modal-scrollbar-measure",this.$body.append(a);var b=a.offsetWidth-a.clientWidth;return this.$body[0].removeChild(a),b};var d=a.fn.modal;a.fn.modal=b,a.fn.modal.Constructor=c,a.fn.modal.noConflict=function(){return a.fn.modal=d,this},a(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(c){var d=a(this),e=d.attr("href"),f=a(d.attr("data-target")||e&&e.replace(/.*(?=#[^\s]+$)/,"")),g=f.data("bs.modal")?"toggle":a.extend({remote:!/#/.test(e)&&e},f.data(),d.data());d.is("a")&&c.preventDefault(),f.one("show.bs.modal",function(a){a.isDefaultPrevented()||f.one("hidden.bs.modal",function(){d.is(":visible")&&d.trigger("focus")})}),b.call(f,g,this)})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tooltip"),f="object"==typeof b&&b;(e||!/destroy|hide/.test(b))&&(e||d.data("bs.tooltip",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.type=null,this.options=null,this.enabled=null,this.timeout=null,this.hoverState=null,this.$element=null,this.inState=null,this.init("tooltip",a,b)};c.VERSION="3.3.6",c.TRANSITION_DURATION=150,c.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0}},c.prototype.init=function(b,c,d){if(this.enabled=!0,this.type=b,this.$element=a(c),this.options=this.getOptions(d),this.$viewport=this.options.viewport&&a(a.isFunction(this.options.viewport)?this.options.viewport.call(this,this.$element):this.options.viewport.selector||this.options.viewport),this.inState={click:!1,hover:!1,focus:!1},this.$element[0]instanceof document.constructor&&!this.options.selector)throw new Error("`selector` option must be specified when initializing "+this.type+" on the window.document object!");for(var e=this.options.trigger.split(" "),f=e.length;f--;){var g=e[f];if("click"==g)this.$element.on("click."+this.type,this.options.selector,a.proxy(this.toggle,this));else if("manual"!=g){var h="hover"==g?"mouseenter":"focusin",i="hover"==g?"mouseleave":"focusout";this.$element.on(h+"."+this.type,this.options.selector,a.proxy(this.enter,this)),this.$element.on(i+"."+this.type,this.options.selector,a.proxy(this.leave,this))}}this.options.selector?this._options=a.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.getOptions=function(b){return b=a.extend({},this.getDefaults(),this.$element.data(),b),b.delay&&"number"==typeof b.delay&&(b.delay={show:b.delay,hide:b.delay}),b},c.prototype.getDelegateOptions=function(){var b={},c=this.getDefaults();return this._options&&a.each(this._options,function(a,d){c[a]!=d&&(b[a]=d)}),b},c.prototype.enter=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),b instanceof a.Event&&(c.inState["focusin"==b.type?"focus":"hover"]=!0),c.tip().hasClass("in")||"in"==c.hoverState?void(c.hoverState="in"):(clearTimeout(c.timeout),c.hoverState="in",c.options.delay&&c.options.delay.show?void(c.timeout=setTimeout(function(){"in"==c.hoverState&&c.show()},c.options.delay.show)):c.show())},c.prototype.isInStateTrue=function(){for(var a in this.inState)if(this.inState[a])return!0;return!1},c.prototype.leave=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),b instanceof a.Event&&(c.inState["focusout"==b.type?"focus":"hover"]=!1),c.isInStateTrue()?void 0:(clearTimeout(c.timeout),c.hoverState="out",c.options.delay&&c.options.delay.hide?void(c.timeout=setTimeout(function(){"out"==c.hoverState&&c.hide()},c.options.delay.hide)):c.hide())},c.prototype.show=function(){var b=a.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(b);var d=a.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]);if(b.isDefaultPrevented()||!d)return;var e=this,f=this.tip(),g=this.getUID(this.type);this.setContent(),f.attr("id",g),this.$element.attr("aria-describedby",g),this.options.animation&&f.addClass("fade");var h="function"==typeof this.options.placement?this.options.placement.call(this,f[0],this.$element[0]):this.options.placement,i=/\s?auto?\s?/i,j=i.test(h);j&&(h=h.replace(i,"")||"top"),f.detach().css({top:0,left:0,display:"block"}).addClass(h).data("bs."+this.type,this),this.options.container?f.appendTo(this.options.container):f.insertAfter(this.$element),this.$element.trigger("inserted.bs."+this.type);var k=this.getPosition(),l=f[0].offsetWidth,m=f[0].offsetHeight;if(j){var n=h,o=this.getPosition(this.$viewport);h="bottom"==h&&k.bottom+m>o.bottom?"top":"top"==h&&k.top-m<o.top?"bottom":"right"==h&&k.right+l>o.width?"left":"left"==h&&k.left-l<o.left?"right":h,f.removeClass(n).addClass(h)}var p=this.getCalculatedOffset(h,k,l,m);this.applyPlacement(p,h);var q=function(){var a=e.hoverState;e.$element.trigger("shown.bs."+e.type),e.hoverState=null,"out"==a&&e.leave(e)};a.support.transition&&this.$tip.hasClass("fade")?f.one("bsTransitionEnd",q).emulateTransitionEnd(c.TRANSITION_DURATION):q()}},c.prototype.applyPlacement=function(b,c){var d=this.tip(),e=d[0].offsetWidth,f=d[0].offsetHeight,g=parseInt(d.css("margin-top"),10),h=parseInt(d.css("margin-left"),10);isNaN(g)&&(g=0),isNaN(h)&&(h=0),b.top+=g,b.left+=h,a.offset.setOffset(d[0],a.extend({using:function(a){d.css({top:Math.round(a.top),left:Math.round(a.left)})}},b),0),d.addClass("in");var i=d[0].offsetWidth,j=d[0].offsetHeight;"top"==c&&j!=f&&(b.top=b.top+f-j);var k=this.getViewportAdjustedDelta(c,b,i,j);k.left?b.left+=k.left:b.top+=k.top;var l=/top|bottom/.test(c),m=l?2*k.left-e+i:2*k.top-f+j,n=l?"offsetWidth":"offsetHeight";d.offset(b),this.replaceArrow(m,d[0][n],l)},c.prototype.replaceArrow=function(a,b,c){this.arrow().css(c?"left":"top",50*(1-a/b)+"%").css(c?"top":"left","")},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle();a.find(".tooltip-inner")[this.options.html?"html":"text"](b),a.removeClass("fade in top bottom left right")},c.prototype.hide=function(b){function d(){"in"!=e.hoverState&&f.detach(),e.$element.removeAttr("aria-describedby").trigger("hidden.bs."+e.type),b&&b()}var e=this,f=a(this.$tip),g=a.Event("hide.bs."+this.type);return this.$element.trigger(g),g.isDefaultPrevented()?void 0:(f.removeClass("in"),a.support.transition&&f.hasClass("fade")?f.one("bsTransitionEnd",d).emulateTransitionEnd(c.TRANSITION_DURATION):d(),this.hoverState=null,this)},c.prototype.fixTitle=function(){var a=this.$element;(a.attr("title")||"string"!=typeof a.attr("data-original-title"))&&a.attr("data-original-title",a.attr("title")||"").attr("title","")},c.prototype.hasContent=function(){return this.getTitle()},c.prototype.getPosition=function(b){b=b||this.$element;var c=b[0],d="BODY"==c.tagName,e=c.getBoundingClientRect();null==e.width&&(e=a.extend({},e,{width:e.right-e.left,height:e.bottom-e.top}));var f=d?{top:0,left:0}:b.offset(),g={scroll:d?document.documentElement.scrollTop||document.body.scrollTop:b.scrollTop()},h=d?{width:a(window).width(),height:a(window).height()}:null;return a.extend({},e,g,h,f)},c.prototype.getCalculatedOffset=function(a,b,c,d){return"bottom"==a?{top:b.top+b.height,left:b.left+b.width/2-c/2}:"top"==a?{top:b.top-d,left:b.left+b.width/2-c/2}:"left"==a?{top:b.top+b.height/2-d/2,left:b.left-c}:{top:b.top+b.height/2-d/2,left:b.left+b.width}},c.prototype.getViewportAdjustedDelta=function(a,b,c,d){var e={top:0,left:0};if(!this.$viewport)return e;var f=this.options.viewport&&this.options.viewport.padding||0,g=this.getPosition(this.$viewport);if(/right|left/.test(a)){var h=b.top-f-g.scroll,i=b.top+f-g.scroll+d;h<g.top?e.top=g.top-h:i>g.top+g.height&&(e.top=g.top+g.height-i)}else{var j=b.left-f,k=b.left+f+c;j<g.left?e.left=g.left-j:k>g.right&&(e.left=g.left+g.width-k)}return e},c.prototype.getTitle=function(){var a,b=this.$element,c=this.options;return a=b.attr("data-original-title")||("function"==typeof c.title?c.title.call(b[0]):c.title)},c.prototype.getUID=function(a){do a+=~~(1e6*Math.random());while(document.getElementById(a));return a},c.prototype.tip=function(){if(!this.$tip&&(this.$tip=a(this.options.template),1!=this.$tip.length))throw new Error(this.type+" `template` option must consist of exactly 1 top-level element!");return this.$tip},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},c.prototype.enable=function(){this.enabled=!0},c.prototype.disable=function(){this.enabled=!1},c.prototype.toggleEnabled=function(){this.enabled=!this.enabled},c.prototype.toggle=function(b){var c=this;b&&(c=a(b.currentTarget).data("bs."+this.type),c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c))),b?(c.inState.click=!c.inState.click,c.isInStateTrue()?c.enter(c):c.leave(c)):c.tip().hasClass("in")?c.leave(c):c.enter(c)},c.prototype.destroy=function(){var a=this;clearTimeout(this.timeout),this.hide(function(){a.$element.off("."+a.type).removeData("bs."+a.type),a.$tip&&a.$tip.detach(),a.$tip=null,a.$arrow=null,a.$viewport=null})};var d=a.fn.tooltip;a.fn.tooltip=b,a.fn.tooltip.Constructor=c,a.fn.tooltip.noConflict=function(){return a.fn.tooltip=d,this}}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.popover"),f="object"==typeof b&&b;(e||!/destroy|hide/.test(b))&&(e||d.data("bs.popover",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.init("popover",a,b)};if(!a.fn.tooltip)throw new Error("Popover requires tooltip.js");c.VERSION="3.3.6",c.DEFAULTS=a.extend({},a.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),c.prototype=a.extend({},a.fn.tooltip.Constructor.prototype),c.prototype.constructor=c,c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle(),c=this.getContent();a.find(".popover-title")[this.options.html?"html":"text"](b),a.find(".popover-content").children().detach().end()[this.options.html?"string"==typeof c?"html":"append":"text"](c),a.removeClass("fade top bottom left right in"),a.find(".popover-title").html()||a.find(".popover-title").hide()},c.prototype.hasContent=function(){return this.getTitle()||this.getContent()},c.prototype.getContent=function(){var a=this.$element,b=this.options;return a.attr("data-content")||("function"==typeof b.content?b.content.call(a[0]):b.content)},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")};var d=a.fn.popover;a.fn.popover=b,a.fn.popover.Constructor=c,a.fn.popover.noConflict=function(){return a.fn.popover=d,this}}(jQuery),+function(a){"use strict";function b(c,d){this.$body=a(document.body),this.$scrollElement=a(a(c).is(document.body)?window:c),this.options=a.extend({},b.DEFAULTS,d),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",a.proxy(this.process,this)),this.refresh(),this.process()}function c(c){return this.each(function(){var d=a(this),e=d.data("bs.scrollspy"),f="object"==typeof c&&c;e||d.data("bs.scrollspy",e=new b(this,f)),"string"==typeof c&&e[c]()})}b.VERSION="3.3.6",b.DEFAULTS={offset:10},b.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)},b.prototype.refresh=function(){var b=this,c="offset",d=0;this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight(),a.isWindow(this.$scrollElement[0])||(c="position",d=this.$scrollElement.scrollTop()),this.$body.find(this.selector).map(function(){var b=a(this),e=b.data("target")||b.attr("href"),f=/^#./.test(e)&&a(e);return f&&f.length&&f.is(":visible")&&[[f[c]().top+d,e]]||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){b.offsets.push(this[0]),b.targets.push(this[1])})},b.prototype.process=function(){var a,b=this.$scrollElement.scrollTop()+this.options.offset,c=this.getScrollHeight(),d=this.options.offset+c-this.$scrollElement.height(),e=this.offsets,f=this.targets,g=this.activeTarget;if(this.scrollHeight!=c&&this.refresh(),b>=d)return g!=(a=f[f.length-1])&&this.activate(a);if(g&&b<e[0])return this.activeTarget=null,this.clear();for(a=e.length;a--;)g!=f[a]&&b>=e[a]&&(void 0===e[a+1]||b<e[a+1])&&this.activate(f[a])},b.prototype.activate=function(b){this.activeTarget=b,this.clear();var c=this.selector+'[data-target="'+b+'"],'+this.selector+'[href="'+b+'"]',d=a(c).parents("li").addClass("active");
d.parent(".dropdown-menu").length&&(d=d.closest("li.dropdown").addClass("active")),d.trigger("activate.bs.scrollspy")},b.prototype.clear=function(){a(this.selector).parentsUntil(this.options.target,".active").removeClass("active")};var d=a.fn.scrollspy;a.fn.scrollspy=c,a.fn.scrollspy.Constructor=b,a.fn.scrollspy.noConflict=function(){return a.fn.scrollspy=d,this},a(window).on("load.bs.scrollspy.data-api",function(){a('[data-spy="scroll"]').each(function(){var b=a(this);c.call(b,b.data())})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tab");e||d.data("bs.tab",e=new c(this)),"string"==typeof b&&e[b]()})}var c=function(b){this.element=a(b)};c.VERSION="3.3.6",c.TRANSITION_DURATION=150,c.prototype.show=function(){var b=this.element,c=b.closest("ul:not(.dropdown-menu)"),d=b.data("target");if(d||(d=b.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,"")),!b.parent("li").hasClass("active")){var e=c.find(".active:last a"),f=a.Event("hide.bs.tab",{relatedTarget:b[0]}),g=a.Event("show.bs.tab",{relatedTarget:e[0]});if(e.trigger(f),b.trigger(g),!g.isDefaultPrevented()&&!f.isDefaultPrevented()){var h=a(d);this.activate(b.closest("li"),c),this.activate(h,h.parent(),function(){e.trigger({type:"hidden.bs.tab",relatedTarget:b[0]}),b.trigger({type:"shown.bs.tab",relatedTarget:e[0]})})}}},c.prototype.activate=function(b,d,e){function f(){g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!1),b.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",!0),h?(b[0].offsetWidth,b.addClass("in")):b.removeClass("fade"),b.parent(".dropdown-menu").length&&b.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!0),e&&e()}var g=d.find("> .active"),h=e&&a.support.transition&&(g.length&&g.hasClass("fade")||!!d.find("> .fade").length);g.length&&h?g.one("bsTransitionEnd",f).emulateTransitionEnd(c.TRANSITION_DURATION):f(),g.removeClass("in")};var d=a.fn.tab;a.fn.tab=b,a.fn.tab.Constructor=c,a.fn.tab.noConflict=function(){return a.fn.tab=d,this};var e=function(c){c.preventDefault(),b.call(a(this),"show")};a(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',e).on("click.bs.tab.data-api",'[data-toggle="pill"]',e)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.affix"),f="object"==typeof b&&b;e||d.data("bs.affix",e=new c(this,f)),"string"==typeof b&&e[b]()})}var c=function(b,d){this.options=a.extend({},c.DEFAULTS,d),this.$target=a(this.options.target).on("scroll.bs.affix.data-api",a.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",a.proxy(this.checkPositionWithEventLoop,this)),this.$element=a(b),this.affixed=null,this.unpin=null,this.pinnedOffset=null,this.checkPosition()};c.VERSION="3.3.6",c.RESET="affix affix-top affix-bottom",c.DEFAULTS={offset:0,target:window},c.prototype.getState=function(a,b,c,d){var e=this.$target.scrollTop(),f=this.$element.offset(),g=this.$target.height();if(null!=c&&"top"==this.affixed)return c>e?"top":!1;if("bottom"==this.affixed)return null!=c?e+this.unpin<=f.top?!1:"bottom":a-d>=e+g?!1:"bottom";var h=null==this.affixed,i=h?e:f.top,j=h?g:b;return null!=c&&c>=e?"top":null!=d&&i+j>=a-d?"bottom":!1},c.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(c.RESET).addClass("affix");var a=this.$target.scrollTop(),b=this.$element.offset();return this.pinnedOffset=b.top-a},c.prototype.checkPositionWithEventLoop=function(){setTimeout(a.proxy(this.checkPosition,this),1)},c.prototype.checkPosition=function(){if(this.$element.is(":visible")){var b=this.$element.height(),d=this.options.offset,e=d.top,f=d.bottom,g=Math.max(a(document).height(),a(document.body).height());"object"!=typeof d&&(f=e=d),"function"==typeof e&&(e=d.top(this.$element)),"function"==typeof f&&(f=d.bottom(this.$element));var h=this.getState(g,b,e,f);if(this.affixed!=h){null!=this.unpin&&this.$element.css("top","");var i="affix"+(h?"-"+h:""),j=a.Event(i+".bs.affix");if(this.$element.trigger(j),j.isDefaultPrevented())return;this.affixed=h,this.unpin="bottom"==h?this.getPinnedOffset():null,this.$element.removeClass(c.RESET).addClass(i).trigger(i.replace("affix","affixed")+".bs.affix")}"bottom"==h&&this.$element.offset({top:g-b-f})}};var d=a.fn.affix;a.fn.affix=b,a.fn.affix.Constructor=c,a.fn.affix.noConflict=function(){return a.fn.affix=d,this},a(window).on("load",function(){a('[data-spy="affix"]').each(function(){var c=a(this),d=c.data();d.offset=d.offset||{},null!=d.offsetBottom&&(d.offset.bottom=d.offsetBottom),null!=d.offsetTop&&(d.offset.top=d.offsetTop),b.call(c,d)})})}(jQuery);
;(function () {
	'use strict';

	/**
	 * @preserve FastClick: polyfill to remove click delays on browsers with touch UIs.
	 *
	 * @codingstandard ftlabs-jsv2
	 * @copyright The Financial Times Limited [All Rights Reserved]
	 * @license MIT License (see LICENSE.txt)
	 */

	/*jslint browser:true, node:true*/
	/*global define, Event, Node*/


	/**
	 * Instantiate fast-clicking listeners on the specified layer.
	 *
	 * @constructor
	 * @param {Element} layer The layer to listen on
	 * @param {Object} [options={}] The options to override the defaults
	 */
	function FastClick(layer, options) {
		var oldOnClick;

		options = options || {};

		/**
		 * Whether a click is currently being tracked.
		 *
		 * @type boolean
		 */
		this.trackingClick = false;


		/**
		 * Timestamp for when click tracking started.
		 *
		 * @type number
		 */
		this.trackingClickStart = 0;


		/**
		 * The element being tracked for a click.
		 *
		 * @type EventTarget
		 */
		this.targetElement = null;


		/**
		 * X-coordinate of touch start event.
		 *
		 * @type number
		 */
		this.touchStartX = 0;


		/**
		 * Y-coordinate of touch start event.
		 *
		 * @type number
		 */
		this.touchStartY = 0;


		/**
		 * ID of the last touch, retrieved from Touch.identifier.
		 *
		 * @type number
		 */
		this.lastTouchIdentifier = 0;


		/**
		 * Touchmove boundary, beyond which a click will be cancelled.
		 *
		 * @type number
		 */
		this.touchBoundary = options.touchBoundary || 10;


		/**
		 * The FastClick layer.
		 *
		 * @type Element
		 */
		this.layer = layer;

		/**
		 * The minimum time between tap(touchstart and touchend) events
		 *
		 * @type number
		 */
		this.tapDelay = options.tapDelay || 200;

		/**
		 * The maximum time for a tap
		 *
		 * @type number
		 */
		this.tapTimeout = options.tapTimeout || 700;

		if (FastClick.notNeeded(layer)) {
			return;
		}

		// Some old versions of Android don't have Function.prototype.bind
		function bind(method, context) {
			return function() { return method.apply(context, arguments); };
		}


		var methods = ['onMouse', 'onClick', 'onTouchStart', 'onTouchMove', 'onTouchEnd', 'onTouchCancel'];
		var context = this;
		for (var i = 0, l = methods.length; i < l; i++) {
			context[methods[i]] = bind(context[methods[i]], context);
		}

		// Set up event handlers as required
		if (deviceIsAndroid) {
			layer.addEventListener('mouseover', this.onMouse, true);
			layer.addEventListener('mousedown', this.onMouse, true);
			layer.addEventListener('mouseup', this.onMouse, true);
		}

		layer.addEventListener('click', this.onClick, true);
		layer.addEventListener('touchstart', this.onTouchStart, false);
		layer.addEventListener('touchmove', this.onTouchMove, false);
		layer.addEventListener('touchend', this.onTouchEnd, false);
		layer.addEventListener('touchcancel', this.onTouchCancel, false);

		// Hack is required for browsers that don't support Event#stopImmediatePropagation (e.g. Android 2)
		// which is how FastClick normally stops click events bubbling to callbacks registered on the FastClick
		// layer when they are cancelled.
		if (!Event.prototype.stopImmediatePropagation) {
			layer.removeEventListener = function(type, callback, capture) {
				var rmv = Node.prototype.removeEventListener;
				if (type === 'click') {
					rmv.call(layer, type, callback.hijacked || callback, capture);
				} else {
					rmv.call(layer, type, callback, capture);
				}
			};

			layer.addEventListener = function(type, callback, capture) {
				var adv = Node.prototype.addEventListener;
				if (type === 'click') {
					adv.call(layer, type, callback.hijacked || (callback.hijacked = function(event) {
						if (!event.propagationStopped) {
							callback(event);
						}
					}), capture);
				} else {
					adv.call(layer, type, callback, capture);
				}
			};
		}

		// If a handler is already declared in the element's onclick attribute, it will be fired before
		// FastClick's onClick handler. Fix this by pulling out the user-defined handler function and
		// adding it as listener.
		if (typeof layer.onclick === 'function') {

			// Android browser on at least 3.2 requires a new reference to the function in layer.onclick
			// - the old one won't work if passed to addEventListener directly.
			oldOnClick = layer.onclick;
			layer.addEventListener('click', function(event) {
				oldOnClick(event);
			}, false);
			layer.onclick = null;
		}
	}

	/**
	* Windows Phone 8.1 fakes user agent string to look like Android and iPhone.
	*
	* @type boolean
	*/
	var deviceIsWindowsPhone = navigator.userAgent.indexOf("Windows Phone") >= 0;

	/**
	 * Android requires exceptions.
	 *
	 * @type boolean
	 */
	var deviceIsAndroid = navigator.userAgent.indexOf('Android') > 0 && !deviceIsWindowsPhone;


	/**
	 * iOS requires exceptions.
	 *
	 * @type boolean
	 */
	var deviceIsIOS = /iP(ad|hone|od)/.test(navigator.userAgent) && !deviceIsWindowsPhone;


	/**
	 * iOS 4 requires an exception for select elements.
	 *
	 * @type boolean
	 */
	var deviceIsIOS4 = deviceIsIOS && (/OS 4_\d(_\d)?/).test(navigator.userAgent);


	/**
	 * iOS 6.0-7.* requires the target element to be manually derived
	 *
	 * @type boolean
	 */
	var deviceIsIOSWithBadTarget = deviceIsIOS && (/OS [6-7]_\d/).test(navigator.userAgent);

	/**
	 * BlackBerry requires exceptions.
	 *
	 * @type boolean
	 */
	var deviceIsBlackBerry10 = navigator.userAgent.indexOf('BB10') > 0;

	/**
	 * Determine whether a given element requires a native click.
	 *
	 * @param {EventTarget|Element} target Target DOM element
	 * @returns {boolean} Returns true if the element needs a native click
	 */
	FastClick.prototype.needsClick = function(target) {
		switch (target.nodeName.toLowerCase()) {

		// Don't send a synthetic click to disabled inputs (issue #62)
		case 'button':
		case 'select':
		case 'textarea':
			if (target.disabled) {
				return true;
			}

			break;
		case 'input':

			// File inputs need real clicks on iOS 6 due to a browser bug (issue #68)
			if ((deviceIsIOS && target.type === 'file') || target.disabled) {
				return true;
			}

			break;
		case 'label':
		case 'iframe': // iOS8 homescreen apps can prevent events bubbling into frames
		case 'video':
			return true;
		}

		return (/\bneedsclick\b/).test(target.className);
	};


	/**
	 * Determine whether a given element requires a call to focus to simulate click into element.
	 *
	 * @param {EventTarget|Element} target Target DOM element
	 * @returns {boolean} Returns true if the element requires a call to focus to simulate native click.
	 */
	FastClick.prototype.needsFocus = function(target) {
		switch (target.nodeName.toLowerCase()) {
		case 'textarea':
			return true;
		case 'select':
			return !deviceIsAndroid;
		case 'input':
			switch (target.type) {
			case 'button':
			case 'checkbox':
			case 'file':
			case 'image':
			case 'radio':
			case 'submit':
				return false;
			}

			// No point in attempting to focus disabled inputs
			return !target.disabled && !target.readOnly;
		default:
			return (/\bneedsfocus\b/).test(target.className);
		}
	};


	/**
	 * Send a click event to the specified element.
	 *
	 * @param {EventTarget|Element} targetElement
	 * @param {Event} event
	 */
	FastClick.prototype.sendClick = function(targetElement, event) {
		var clickEvent, touch;

		// On some Android devices activeElement needs to be blurred otherwise the synthetic click will have no effect (#24)
		if (document.activeElement && document.activeElement !== targetElement) {
			document.activeElement.blur();
		}

		touch = event.changedTouches[0];

		// Synthesise a click event, with an extra attribute so it can be tracked
		clickEvent = document.createEvent('MouseEvents');
		clickEvent.initMouseEvent(this.determineEventType(targetElement), true, true, window, 1, touch.screenX, touch.screenY, touch.clientX, touch.clientY, false, false, false, false, 0, null);
		clickEvent.forwardedTouchEvent = true;
		targetElement.dispatchEvent(clickEvent);
	};

	FastClick.prototype.determineEventType = function(targetElement) {

		//Issue #159: Android Chrome Select Box does not open with a synthetic click event
		if (deviceIsAndroid && targetElement.tagName.toLowerCase() === 'select') {
			return 'mousedown';
		}

		return 'click';
	};


	/**
	 * @param {EventTarget|Element} targetElement
	 */
	FastClick.prototype.focus = function(targetElement) {
		var length;

		// Issue #160: on iOS 7, some input elements (e.g. date datetime month) throw a vague TypeError on setSelectionRange. These elements don't have an integer value for the selectionStart and selectionEnd properties, but unfortunately that can't be used for detection because accessing the properties also throws a TypeError. Just check the type instead. Filed as Apple bug #15122724.
		if (deviceIsIOS && targetElement.setSelectionRange && targetElement.type.indexOf('date') !== 0 && targetElement.type !== 'time' && targetElement.type !== 'month') {
			length = targetElement.value.length;
			targetElement.setSelectionRange(length, length);
		} else {
			targetElement.focus();
		}
	};


	/**
	 * Check whether the given target element is a child of a scrollable layer and if so, set a flag on it.
	 *
	 * @param {EventTarget|Element} targetElement
	 */
	FastClick.prototype.updateScrollParent = function(targetElement) {
		var scrollParent, parentElement;

		scrollParent = targetElement.fastClickScrollParent;

		// Attempt to discover whether the target element is contained within a scrollable layer. Re-check if the
		// target element was moved to another parent.
		if (!scrollParent || !scrollParent.contains(targetElement)) {
			parentElement = targetElement;
			do {
				if (parentElement.scrollHeight > parentElement.offsetHeight) {
					scrollParent = parentElement;
					targetElement.fastClickScrollParent = parentElement;
					break;
				}

				parentElement = parentElement.parentElement;
			} while (parentElement);
		}

		// Always update the scroll top tracker if possible.
		if (scrollParent) {
			scrollParent.fastClickLastScrollTop = scrollParent.scrollTop;
		}
	};


	/**
	 * @param {EventTarget} targetElement
	 * @returns {Element|EventTarget}
	 */
	FastClick.prototype.getTargetElementFromEventTarget = function(eventTarget) {

		// On some older browsers (notably Safari on iOS 4.1 - see issue #56) the event target may be a text node.
		if (eventTarget.nodeType === Node.TEXT_NODE) {
			return eventTarget.parentNode;
		}

		return eventTarget;
	};


	/**
	 * On touch start, record the position and scroll offset.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
	FastClick.prototype.onTouchStart = function(event) {
		var targetElement, touch, selection;

		// Ignore multiple touches, otherwise pinch-to-zoom is prevented if both fingers are on the FastClick element (issue #111).
		if (event.targetTouches.length > 1) {
			return true;
		}

		targetElement = this.getTargetElementFromEventTarget(event.target);
		touch = event.targetTouches[0];

		if (deviceIsIOS) {

			// Only trusted events will deselect text on iOS (issue #49)
			selection = window.getSelection();
			if (selection.rangeCount && !selection.isCollapsed) {
				return true;
			}

			if (!deviceIsIOS4) {

				// Weird things happen on iOS when an alert or confirm dialog is opened from a click event callback (issue #23):
				// when the user next taps anywhere else on the page, new touchstart and touchend events are dispatched
				// with the same identifier as the touch event that previously triggered the click that triggered the alert.
				// Sadly, there is an issue on iOS 4 that causes some normal touch events to have the same identifier as an
				// immediately preceeding touch event (issue #52), so this fix is unavailable on that platform.
				// Issue 120: touch.identifier is 0 when Chrome dev tools 'Emulate touch events' is set with an iOS device UA string,
				// which causes all touch events to be ignored. As this block only applies to iOS, and iOS identifiers are always long,
				// random integers, it's safe to to continue if the identifier is 0 here.
				if (touch.identifier && touch.identifier === this.lastTouchIdentifier) {
					event.preventDefault();
					return false;
				}

				this.lastTouchIdentifier = touch.identifier;

				// If the target element is a child of a scrollable layer (using -webkit-overflow-scrolling: touch) and:
				// 1) the user does a fling scroll on the scrollable layer
				// 2) the user stops the fling scroll with another tap
				// then the event.target of the last 'touchend' event will be the element that was under the user's finger
				// when the fling scroll was started, causing FastClick to send a click event to that layer - unless a check
				// is made to ensure that a parent layer was not scrolled before sending a synthetic click (issue #42).
				this.updateScrollParent(targetElement);
			}
		}

		this.trackingClick = true;
		this.trackingClickStart = event.timeStamp;
		this.targetElement = targetElement;

		this.touchStartX = touch.pageX;
		this.touchStartY = touch.pageY;

		// Prevent phantom clicks on fast double-tap (issue #36)
		if ((event.timeStamp - this.lastClickTime) < this.tapDelay) {
			event.preventDefault();
		}

		return true;
	};


	/**
	 * Based on a touchmove event object, check whether the touch has moved past a boundary since it started.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
	FastClick.prototype.touchHasMoved = function(event) {
		var touch = event.changedTouches[0], boundary = this.touchBoundary;

		if (Math.abs(touch.pageX - this.touchStartX) > boundary || Math.abs(touch.pageY - this.touchStartY) > boundary) {
			return true;
		}

		return false;
	};


	/**
	 * Update the last position.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
	FastClick.prototype.onTouchMove = function(event) {
		if (!this.trackingClick) {
			return true;
		}

		// If the touch has moved, cancel the click tracking
		if (this.targetElement !== this.getTargetElementFromEventTarget(event.target) || this.touchHasMoved(event)) {
			this.trackingClick = false;
			this.targetElement = null;
		}

		return true;
	};


	/**
	 * Attempt to find the labelled control for the given label element.
	 *
	 * @param {EventTarget|HTMLLabelElement} labelElement
	 * @returns {Element|null}
	 */
	FastClick.prototype.findControl = function(labelElement) {

		// Fast path for newer browsers supporting the HTML5 control attribute
		if (labelElement.control !== undefined) {
			return labelElement.control;
		}

		// All browsers under test that support touch events also support the HTML5 htmlFor attribute
		if (labelElement.htmlFor) {
			return document.getElementById(labelElement.htmlFor);
		}

		// If no for attribute exists, attempt to retrieve the first labellable descendant element
		// the list of which is defined here: http://www.w3.org/TR/html5/forms.html#category-label
		return labelElement.querySelector('button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea');
	};


	/**
	 * On touch end, determine whether to send a click event at once.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
	FastClick.prototype.onTouchEnd = function(event) {
		var forElement, trackingClickStart, targetTagName, scrollParent, touch, targetElement = this.targetElement;

		if (!this.trackingClick) {
			return true;
		}

		// Prevent phantom clicks on fast double-tap (issue #36)
		if ((event.timeStamp - this.lastClickTime) < this.tapDelay) {
			this.cancelNextClick = true;
			return true;
		}

		if ((event.timeStamp - this.trackingClickStart) > this.tapTimeout) {
			return true;
		}

		// Reset to prevent wrong click cancel on input (issue #156).
		this.cancelNextClick = false;

		this.lastClickTime = event.timeStamp;

		trackingClickStart = this.trackingClickStart;
		this.trackingClick = false;
		this.trackingClickStart = 0;

		// On some iOS devices, the targetElement supplied with the event is invalid if the layer
		// is performing a transition or scroll, and has to be re-detected manually. Note that
		// for this to function correctly, it must be called *after* the event target is checked!
		// See issue #57; also filed as rdar://13048589 .
		if (deviceIsIOSWithBadTarget) {
			touch = event.changedTouches[0];

			// In certain cases arguments of elementFromPoint can be negative, so prevent setting targetElement to null
			targetElement = document.elementFromPoint(touch.pageX - window.pageXOffset, touch.pageY - window.pageYOffset) || targetElement;
			targetElement.fastClickScrollParent = this.targetElement.fastClickScrollParent;
		}

		targetTagName = targetElement.tagName.toLowerCase();
		if (targetTagName === 'label') {
			forElement = this.findControl(targetElement);
			if (forElement) {
				this.focus(targetElement);
				if (deviceIsAndroid) {
					return false;
				}

				targetElement = forElement;
			}
		} else if (this.needsFocus(targetElement)) {

			// Case 1: If the touch started a while ago (best guess is 100ms based on tests for issue #36) then focus will be triggered anyway. Return early and unset the target element reference so that the subsequent click will be allowed through.
			// Case 2: Without this exception for input elements tapped when the document is contained in an iframe, then any inputted text won't be visible even though the value attribute is updated as the user types (issue #37).
			if ((event.timeStamp - trackingClickStart) > 100 || (deviceIsIOS && window.top !== window && targetTagName === 'input')) {
				this.targetElement = null;
				return false;
			}

			this.focus(targetElement);
			this.sendClick(targetElement, event);

			// Select elements need the event to go through on iOS 4, otherwise the selector menu won't open.
			// Also this breaks opening selects when VoiceOver is active on iOS6, iOS7 (and possibly others)
			if (!deviceIsIOS || targetTagName !== 'select') {
				this.targetElement = null;
				event.preventDefault();
			}

			return false;
		}

		if (deviceIsIOS && !deviceIsIOS4) {

			// Don't send a synthetic click event if the target element is contained within a parent layer that was scrolled
			// and this tap is being used to stop the scrolling (usually initiated by a fling - issue #42).
			scrollParent = targetElement.fastClickScrollParent;
			if (scrollParent && scrollParent.fastClickLastScrollTop !== scrollParent.scrollTop) {
				return true;
			}
		}

		// Prevent the actual click from going though - unless the target node is marked as requiring
		// real clicks or if it is in the whitelist in which case only non-programmatic clicks are permitted.
		if (!this.needsClick(targetElement)) {
			event.preventDefault();
			this.sendClick(targetElement, event);
		}

		return false;
	};


	/**
	 * On touch cancel, stop tracking the click.
	 *
	 * @returns {void}
	 */
	FastClick.prototype.onTouchCancel = function() {
		this.trackingClick = false;
		this.targetElement = null;
	};


	/**
	 * Determine mouse events which should be permitted.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
	FastClick.prototype.onMouse = function(event) {

		// If a target element was never set (because a touch event was never fired) allow the event
		if (!this.targetElement) {
			return true;
		}

		if (event.forwardedTouchEvent) {
			return true;
		}

		// Programmatically generated events targeting a specific element should be permitted
		if (!event.cancelable) {
			return true;
		}

		// Derive and check the target element to see whether the mouse event needs to be permitted;
		// unless explicitly enabled, prevent non-touch click events from triggering actions,
		// to prevent ghost/doubleclicks.
		if (!this.needsClick(this.targetElement) || this.cancelNextClick) {

			// Prevent any user-added listeners declared on FastClick element from being fired.
			if (event.stopImmediatePropagation) {
				event.stopImmediatePropagation();
			} else {

				// Part of the hack for browsers that don't support Event#stopImmediatePropagation (e.g. Android 2)
				event.propagationStopped = true;
			}

			// Cancel the event
			event.stopPropagation();
			event.preventDefault();

			return false;
		}

		// If the mouse event is permitted, return true for the action to go through.
		return true;
	};


	/**
	 * On actual clicks, determine whether this is a touch-generated click, a click action occurring
	 * naturally after a delay after a touch (which needs to be cancelled to avoid duplication), or
	 * an actual click which should be permitted.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
	FastClick.prototype.onClick = function(event) {
		var permitted;

		// It's possible for another FastClick-like library delivered with third-party code to fire a click event before FastClick does (issue #44). In that case, set the click-tracking flag back to false and return early. This will cause onTouchEnd to return early.
		if (this.trackingClick) {
			this.targetElement = null;
			this.trackingClick = false;
			return true;
		}

		// Very odd behaviour on iOS (issue #18): if a submit element is present inside a form and the user hits enter in the iOS simulator or clicks the Go button on the pop-up OS keyboard the a kind of 'fake' click event will be triggered with the submit-type input element as the target.
		if (event.target.type === 'submit' && event.detail === 0) {
			return true;
		}

		permitted = this.onMouse(event);

		// Only unset targetElement if the click is not permitted. This will ensure that the check for !targetElement in onMouse fails and the browser's click doesn't go through.
		if (!permitted) {
			this.targetElement = null;
		}

		// If clicks are permitted, return true for the action to go through.
		return permitted;
	};


	/**
	 * Remove all FastClick's event listeners.
	 *
	 * @returns {void}
	 */
	FastClick.prototype.destroy = function() {
		var layer = this.layer;

		if (deviceIsAndroid) {
			layer.removeEventListener('mouseover', this.onMouse, true);
			layer.removeEventListener('mousedown', this.onMouse, true);
			layer.removeEventListener('mouseup', this.onMouse, true);
		}

		layer.removeEventListener('click', this.onClick, true);
		layer.removeEventListener('touchstart', this.onTouchStart, false);
		layer.removeEventListener('touchmove', this.onTouchMove, false);
		layer.removeEventListener('touchend', this.onTouchEnd, false);
		layer.removeEventListener('touchcancel', this.onTouchCancel, false);
	};


	/**
	 * Check whether FastClick is needed.
	 *
	 * @param {Element} layer The layer to listen on
	 */
	FastClick.notNeeded = function(layer) {
		var metaViewport;
		var chromeVersion;
		var blackberryVersion;
		var firefoxVersion;

		// Devices that don't support touch don't need FastClick
		if (typeof window.ontouchstart === 'undefined') {
			return true;
		}

		// Chrome version - zero for other browsers
		chromeVersion = +(/Chrome\/([0-9]+)/.exec(navigator.userAgent) || [,0])[1];

		if (chromeVersion) {

			if (deviceIsAndroid) {
				metaViewport = document.querySelector('meta[name=viewport]');

				if (metaViewport) {
					// Chrome on Android with user-scalable="no" doesn't need FastClick (issue #89)
					if (metaViewport.content.indexOf('user-scalable=no') !== -1) {
						return true;
					}
					// Chrome 32 and above with width=device-width or less don't need FastClick
					if (chromeVersion > 31 && document.documentElement.scrollWidth <= window.outerWidth) {
						return true;
					}
				}

			// Chrome desktop doesn't need FastClick (issue #15)
			} else {
				return true;
			}
		}

		if (deviceIsBlackBerry10) {
			blackberryVersion = navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/);

			// BlackBerry 10.3+ does not require Fastclick library.
			// https://github.com/ftlabs/fastclick/issues/251
			if (blackberryVersion[1] >= 10 && blackberryVersion[2] >= 3) {
				metaViewport = document.querySelector('meta[name=viewport]');

				if (metaViewport) {
					// user-scalable=no eliminates click delay.
					if (metaViewport.content.indexOf('user-scalable=no') !== -1) {
						return true;
					}
					// width=device-width (or less than device-width) eliminates click delay.
					if (document.documentElement.scrollWidth <= window.outerWidth) {
						return true;
					}
				}
			}
		}

		// IE10 with -ms-touch-action: none or manipulation, which disables double-tap-to-zoom (issue #97)
		if (layer.style.msTouchAction === 'none' || layer.style.touchAction === 'manipulation') {
			return true;
		}

		// Firefox version - zero for other browsers
		firefoxVersion = +(/Firefox\/([0-9]+)/.exec(navigator.userAgent) || [,0])[1];

		if (firefoxVersion >= 27) {
			// Firefox 27+ does not have tap delay if the content is not zoomable - https://bugzilla.mozilla.org/show_bug.cgi?id=922896

			metaViewport = document.querySelector('meta[name=viewport]');
			if (metaViewport && (metaViewport.content.indexOf('user-scalable=no') !== -1 || document.documentElement.scrollWidth <= window.outerWidth)) {
				return true;
			}
		}

		// IE11: prefixed -ms-touch-action is no longer supported and it's recomended to use non-prefixed version
		// http://msdn.microsoft.com/en-us/library/windows/apps/Hh767313.aspx
		if (layer.style.touchAction === 'none' || layer.style.touchAction === 'manipulation') {
			return true;
		}

		return false;
	};


	/**
	 * Factory method for creating a FastClick object
	 *
	 * @param {Element} layer The layer to listen on
	 * @param {Object} [options={}] The options to override the defaults
	 */
	FastClick.attach = function(layer, options) {
		return new FastClick(layer, options);
	};


	if (typeof define === 'function' && typeof define.amd === 'object' && define.amd) {

		// AMD. Register as an anonymous module.
		define(function() {
			return FastClick;
		});
	} else if (typeof module !== 'undefined' && module.exports) {
		module.exports = FastClick.attach;
		module.exports.FastClick = FastClick;
	} else {
		window.FastClick = FastClick;
	}
}());

/*
Copyright (c) 2010,2011,2012,2013,2014 Morgan Roderick http://roderick.dk
License: MIT - http://mrgnrdrck.mit-license.org

https://github.com/mroderick/PubSubJS
*/
(function (root, factory){
	'use strict';

    if (typeof define === 'function' && define.amd){
        // AMD. Register as an anonymous module.
        define(['exports'], factory);

    } else if (typeof exports === 'object'){
        // CommonJS
        factory(exports);

    }

    // Browser globals
    var PubSub = {};
    root.PubSub = PubSub;
    factory(PubSub);
    
}(( typeof window === 'object' && window ) || this, function (PubSub){
	'use strict';

	var messages = {},
		lastUid = -1;

	function hasKeys(obj){
		var key;

		for (key in obj){
			if ( obj.hasOwnProperty(key) ){
				return true;
			}
		}
		return false;
	}

	/**
	 *	Returns a function that throws the passed exception, for use as argument for setTimeout
	 *	@param { Object } ex An Error object
	 */
	function throwException( ex ){
		return function reThrowException(){
			throw ex;
		};
	}

	function callSubscriberWithDelayedExceptions( subscriber, message, data ){
		try {
			subscriber( message, data );
		} catch( ex ){
			setTimeout( throwException( ex ), 0);
		}
	}

	function callSubscriberWithImmediateExceptions( subscriber, message, data ){
		subscriber( message, data );
	}

	function deliverMessage( originalMessage, matchedMessage, data, immediateExceptions ){
		var subscribers = messages[matchedMessage],
			callSubscriber = immediateExceptions ? callSubscriberWithImmediateExceptions : callSubscriberWithDelayedExceptions,
			s;

		if ( !messages.hasOwnProperty( matchedMessage ) ) {
			return;
		}

		for (s in subscribers){
			if ( subscribers.hasOwnProperty(s)){
				callSubscriber( subscribers[s], originalMessage, data );
			}
		}
	}

	function createDeliveryFunction( message, data, immediateExceptions ){
		return function deliverNamespaced(){
			var topic = String( message ),
				position = topic.lastIndexOf( '.' );

			// deliver the message as it is now
			deliverMessage(message, message, data, immediateExceptions);

			// trim the hierarchy and deliver message to each level
			while( position !== -1 ){
				topic = topic.substr( 0, position );
				position = topic.lastIndexOf('.');
				deliverMessage( message, topic, data, immediateExceptions );
			}
		};
	}

	function messageHasSubscribers( message ){
		var topic = String( message ),
			found = Boolean(messages.hasOwnProperty( topic ) && hasKeys(messages[topic])),
			position = topic.lastIndexOf( '.' );

		while ( !found && position !== -1 ){
			topic = topic.substr( 0, position );
			position = topic.lastIndexOf( '.' );
			found = Boolean(messages.hasOwnProperty( topic ) && hasKeys(messages[topic]));
		}

		return found;
	}

	function publish( message, data, sync, immediateExceptions ){
		var deliver = createDeliveryFunction( message, data, immediateExceptions ),
			hasSubscribers = messageHasSubscribers( message );

		if ( !hasSubscribers ){
			return false;
		}

		if ( sync === true ){
			deliver();
		} else {
			setTimeout( deliver, 0 );
		}
		return true;
	}

	/**
	 *	PubSub.publish( message[, data] ) -> Boolean
	 *	- message (String): The message to publish
	 *	- data: The data to pass to subscribers
	 *	Publishes the the message, passing the data to it's subscribers
	**/
	PubSub.publish = function( message, data ){
		return publish( message, data, false, PubSub.immediateExceptions );
	};

	/**
	 *	PubSub.publishSync( message[, data] ) -> Boolean
	 *	- message (String): The message to publish
	 *	- data: The data to pass to subscribers
	 *	Publishes the the message synchronously, passing the data to it's subscribers
	**/
	PubSub.publishSync = function( message, data ){
		return publish( message, data, true, PubSub.immediateExceptions );
	};

	/**
	 *	PubSub.subscribe( message, func ) -> String
	 *	- message (String): The message to subscribe to
	 *	- func (Function): The function to call when a new message is published
	 *	Subscribes the passed function to the passed message. Every returned token is unique and should be stored if
	 *	you need to unsubscribe
	**/
	PubSub.subscribe = function( message, func ){
		if ( typeof func !== 'function'){
			return false;
		}

		// message is not registered yet
		if ( !messages.hasOwnProperty( message ) ){
			messages[message] = {};
		}

		// forcing token as String, to allow for future expansions without breaking usage
		// and allow for easy use as key names for the 'messages' object
		var token = 'uid_' + String(++lastUid);
		messages[message][token] = func;

		// return token for unsubscribing
		return token;
	};

	/* Public: Clears all subscriptions
	 */
	PubSub.clearAllSubscriptions = function clearAllSubscriptions(){
		messages = {};
	};

	/*Public: Clear subscriptions by the topic
	*/
	PubSub.clearSubscriptions = function clearSubscriptions(topic){
		var m; 
		for (m in messages){
			if (messages.hasOwnProperty(m) && m.indexOf(topic) === 0){
				delete messages[m];
			}
		}
	};

	/* Public: removes subscriptions.
	 * When passed a token, removes a specific subscription.
	 * When passed a function, removes all subscriptions for that function
	 * When passed a topic, removes all subscriptions for that topic (hierarchy)
	 *
	 * value - A token, function or topic to unsubscribe.
	 *
	 * Examples
	 *
	 *		// Example 1 - unsubscribing with a token
	 *		var token = PubSub.subscribe('mytopic', myFunc);
	 *		PubSub.unsubscribe(token);
	 *
	 *		// Example 2 - unsubscribing with a function
	 *		PubSub.unsubscribe(myFunc);
	 *
	 *		// Example 3 - unsubscribing a topic
	 *		PubSub.unsubscribe('mytopic');
	 */
	PubSub.unsubscribe = function(value){
		var isTopic    = typeof value === 'string' && messages.hasOwnProperty(value),
			isToken    = !isTopic && typeof value === 'string',
			isFunction = typeof value === 'function',
			result = false,
			m, message, t;

		if (isTopic){
			delete messages[value];
			return;
		}

		for ( m in messages ){
			if ( messages.hasOwnProperty( m ) ){
				message = messages[m];

				if ( isToken && message[value] ){
					delete message[value];
					result = value;
					// tokens are unique, so we can just stop here
					break;
				}

				if (isFunction) {
					for ( t in message ){
						if (message.hasOwnProperty(t) && message[t] === value){
							delete message[t];
							result = true;
						}
					}
				}
			}
		}

		return result;
	};
}));

//Dialog的基类

(function () {
	function IMDialog (opt) {
		this.opt = opt;
	}

	IMDialog.prototype.showOverlay = function () {
		var height1 = parseInt($('.bet .main').css('height'));
		var height2 = parseInt($('.bet .left-nav').css('height'));
		var height  = Math.max(height1, height2) + 'px';

		this.zone.next('.overlay').css('height', height);
		this.zone.removeClass('modal-dialog-deactive');
		this.zone.addClass('modal-dialog-active');
	};

	IMDialog.prototype.hideOverlay = function () {
		this.zone.removeClass('modal-dialog-active');
		this.zone.addClass('modal-dialog-deactive');
	};

	//给BettingRecords和UserFeedback用的
	IMDialog.prototype.showContentOverlay = function () {
		var height1 = parseInt($('.bet .main').css('height'));
		var height2 = parseInt($('.bet .left-nav').css('height'));
		var height  = Math.max(height1, height2) + 'px';

		this.zone.next('.overlay').css('height', height);
		this.zone.removeClass('content-dialog-deactive');
		this.zone.addClass('content-dialog-active');
	};

	//给BettingRecords和UserFeedback用的
	IMDialog.prototype.hideContentOverlay = function () {
		this.zone.removeClass('content-dialog-active');
		this.zone.addClass('content-dialog-deactive');
	};

	IMDialog.prototype.bindOverlayEvents = function () {
		var that = this;

		this.isPC = !Util.isMobile.any();

		if (this.isPC) {
			this.zone.find('.dialog').css('transition', 'all .5s');
		}

		this.zone.next('.overlay').click(function () {
			that.hide();
		});
	};

	window.IMDialog = IMDialog;
}());
/*
** 继承自IMDialog
*/

(function () {
	function ConfirmDialog (opt) {
		IMDialog.call(this, (opt || {}));

		this.text = this.opt.text;
		this.el   = this.initDom();
	}

	ConfirmDialog.prototype = new IMDialog();

	ConfirmDialog.prototype.initDom = function () {
		var temp;

		this.cancel = new IMButton({
			text: '取消',
			className: 'cancel-button'
		});

		this.ok = new IMButton({
			text: '确定',
			className: 'ok-button'
		});

		temp = 	'<div class="confirm-dialog">' +
					'<div class="dialog-wrapper">' +
						'<div class="dialog">' +
							'<div class="title">温馨提示</div>'+
							'<div class="content">' +
								this.text +
							'</div>' +
							'<div class="button-zone">' +
								'<div class="cancel">' +
									this.cancel.getDom() +
								'</div>' +

								'<div class="ok">' +
									this.ok.getDom() +
								'</div>' +
							'</div>' +
						'</div>' +
					'</div>' +
				'</div>' +

				'<div class="overlay overlay3"></div>';

		return temp;
	};

	ConfirmDialog.prototype.getDom = function () {
		return this.el;
	};

	ConfirmDialog.prototype.show = function (text) {
		this.zone.find('.content').empty();
		this.zone.find('.content').text(text);
		this.showOverlay();
	};
	ConfirmDialog.prototype.showConfirm = function (text1,text2,text3) {
		this.zone.find('.content').empty();
		var str = '';
		if(text3){
			str +='<div class="diawNumber">当前'
		}else{
			str += '<div class="diawNumber">'
		}
			str += '<span>'+text1+'</span>期';
		if(text3){
			str += '追号<span>'+text3+'</span>期'
		}
		str +='</div><div class="totalMoney">投注总额<span>'+Util.addDotToNumber(text2,2)+'</span></div>';
		this.zone.find('.content').append(str);
		this.showOverlay();
	};
	ConfirmDialog.prototype.hide = function () {
		this.hideOverlay();
	};

	ConfirmDialog.prototype.bindEvents = function () {
		var button;
		var that = this;

		this.zone = $('.confirm-dialog');
		
		this.zone.find('.cancel-button').click(function () {
			if ((that.opt.cancelCallback) && (typeof that.opt.cancelCallback === 'function')) {
				that.opt.cancelCallback();
			}

			that.hide();
		});

		this.zone.find('.ok-button').click(function () {
			if ((that.opt.okCallback) && (typeof that.opt.okCallback === 'function')) {
				that.opt.okCallback();
			}

			that.hide();
		});

		this.bindOverlayEvents();
	};

	window.ConfirmDialog = ConfirmDialog;
}());

(function () {

	function IMBettingTimes (opt) {
		var i;

		this.opt = opt;
		this.id  = this.opt.id;
		this.options = [1, 5, 10, 50, 100, 200];

		this.el  = 	'<div class="im-betting-times" id="' + this.id + '">' +
						'<span class="name">投注倍数：</span>' +
						'<div class="control">' +
							'<div class="minus">-</div>' +
							'<div class="select">' +
								'<input type="text" value="1"/>' +
								'<ul class="options">';

		for (i = 0; i < this.options.length; i++) {
			this.el +=     			'<li class="item">' + this.options[i] + '</li>';
		}

		this.el +=				'</ul>' +
							'</div>' +
							'<div class="plus">+</div>' +
						'</div>' +
					'</div>' +

					'<div class="select-overlay"></div>';
	}

	IMBettingTimes.prototype.getDom = function () {
		return this.el;
	};

	IMBettingTimes.prototype.getValue = function () {
		return parseInt(this.zone.find('input').val());
	};

	IMBettingTimes.prototype.bindEvents = function () {
		var ul;
		var input;
		var value;
		var plus;
		var minus;
		var control;
		var select;
		var overlay;
		var that = this;
		var clickOrTouch = Util.isMobile.any()?'touchstart': 'click';

		this.zone = $('#' + this.id);
		control   = this.zone.find('.control');
		select    = this.zone.find('.select');
		ul        = this.zone.find('.options');
		input     = this.zone.find('input');
		plus      = this.zone.find('.plus');
		minus     = this.zone.find('.minus');
		overlay   = this.zone.next('.select-overlay');

		ul.delegate('li', 'click', function (e) {
			value = $(this).text();
			value = that.getCount(value).num;
			input.val(value);
			that.setModelZoneData(BetRuleInstance, value);
			ul.hide();
			e.stopPropagation();
		});

		input.focus(function (e) {
			ul.show();
			overlay.show();
			e.stopPropagation();
		}).keyup(function () {
			value = input.val();
			if (isNaN(value)) {
				value = 1;
				input.val(1);
			}
			value = parseInt(value);
			value = that.getCount(value).num;
			input.val(value);
			that.setModelZoneData(BetRuleInstance, value);
		});

		plus.click(function () {
			value = parseInt(input.val());
			if (value >= 0) {
				value++;
				value = that.getCount(value).num;
				input.val(value);
				that.setModelZoneData(BetRuleInstance, value);
			}
		});

		minus.click(function () {
			value = parseInt(input.val());

			if (value > 1) {
				value--;
				input.val(value);
				that.setModelZoneData(BetRuleInstance, value);
			}
		});

		overlay.click(function (){
			ul.hide();
			overlay.hide();
		});

		this.getCount = function(value){
			var maxCount = 0;
			var num = 0;
			switch (BetRuleInstance.betUnit){
				case 2 :maxCount = BetRuleInstance.maxCount; break;
				case 0.2 : maxCount =  BetRuleInstance.maxCount * 10 ;break;
				case 0.02 : maxCount =  BetRuleInstance.maxCount * 100 ;break;
			}
			num = value < maxCount ? value : maxCount;
			var numers = {
				maxCount : maxCount,
				num :num
			}
			return numers;
		}

		this.setModelZoneData = function(sender, betTimes){
			sender.multiple = betTimes;
			var opt = BetAlgorithm.getModelZoneData(sender.betCount, sender.multiple);
			sender.setModelZoneData(sender.betCount, opt.winMoney, opt.returnMoney, opt.totalMoney, betTimes);
		}
	};

	window.IMBettingTimes = IMBettingTimes;
}());


(function () {

	function IMButton (opt) {
		this.id   = opt.id;
		this.opt  = opt;
		this.isPC = !Util.isMobile.any();
		this.el   = this.initDom();
	}

	IMButton.prototype.getDom = function () {
		return this.el;
	};

	IMButton.prototype.initDom = function () {
		var classes         = 'im-button';
		var padClass        = this.isPC?' btn-hover': '';
		var additionalClass = (this.opt.className?(' ' + this.opt.className): '');

		classes += additionalClass + padClass;

		var temp = 	'<a' + (this.id?(' id="' + this.id + '"'): '') + ' class="' + classes + '">' +
						'<div class="im-button-wrapper">' +
							'<div class="button-overturn im-button-row1">' +
								(this.opt.imgSrc? ('<img src="' + this.opt.imgSrc + '" height=20 width=20></img>'): '') +
								'<span class="text">' + this.opt.text + '</span>' +
							'</div>' +
							'<div class="button-overturn im-button-row2">' +
							'</div>' +
							'<div class="button-overturn im-button-row3">' +
								(this.opt.imgSrc? ('<img src="' + this.opt.imgSrc + '" height=20 width=20></img>'): '') +
								'<span class="text">' + this.opt.text + '</span>' +
							'</div>' +
						'</div>' +
					'</a>';
		return temp;
	};

	IMButton.prototype.disabled = function () {
		if(!this.zone)this.zone = $('#' + this.id);
		this.zone.attr('disabled', 'disabled');
		this.zone.addClass('btn-disabled');
		this.zone.removeClass('btn-hover');
	};

	IMButton.prototype.enabled = function () {
		this.zone.removeAttr('disabled');
		this.zone.addClass('btn-hover');
		this.zone.removeClass('btn-disabled');
	};

	IMButton.prototype.inProgress = function () {
		this.setImage('../img/loading.png');
		this.setText('提交中');
		this.zone.addClass('but-noClick');
		this.zone.addClass('btn-disabled');
		if (this.isPC) {
			this.zone.removeClass('btn-hover');
		}
	};
	IMButton.prototype.inNormal = function () {
		this.setImage('../img/select-mark.png');
		this.setText('确定');
		this.zone.removeClass('but-noClick');
		this.zone.removeClass('btn-disabled');
		if (this.isPC) {
			this.zone.removeClass('btn-hover');
		}
	};
	IMButton.prototype.recover = function () {
		if (this.opt.imgSrc) {
			this.setImage(this.opt.imgSrc);
		}
		
		this.setText(this.opt.text);

		if (this.isPC) {
			this.zone.addClass('btn-hover');
		}
	};

	IMButton.prototype.setImage = function (src) {
		this.zone.find('img').attr('src', src);
	};

	IMButton.prototype.setText = function (text) {
		this.zone.find('.text').text(text);
	};

	IMButton.prototype.bindEvents = function (callback) {
		var clickOrtouch = Util.isMobile.any()?'touchstart': 'click';
		this.zone = $('#' + this.id);

		this.zone.bind(clickOrtouch, function () {
			if (typeof callback === 'function') {
				callback();
			}
		});
	};

	window.IMButton = IMButton;
}());


(function () {

	function IMCheckBox (opt) {
		this.opt = opt || {};
		this.el = this.initDom();
	}

	IMCheckBox.prototype.getDom = function () {
		return this.el;
	};

	IMCheckBox.prototype.initDom = function () {
		var temp = 	'<div class="im-checkbox' +
							(this.opt.checked? ' checked': '')  + '"' + 
							(this.opt.id?(' id="' + this.opt.id + '"'): '') + 
							(this.opt.value?(' data-value="' + this.opt.value + '"'): '') +
							'>' +
						'<div class="circle"></div>' +
						(this.opt.text? ('<span class="text">' + this.opt.text + '</span>'): '') +
					'</div>';

		return temp;
	};

	IMCheckBox.prototype.bindEvents = function () {
	};

	window.IMCheckBox = IMCheckBox;
}());


(function () {
	function IMDatetimepicker (opt) {
		this.opt = opt;
		this.el  =	'<div class="im-datetimepicker ' + this.opt.className + '">' +
						'<div class="time-label">' + this.opt.text + '</div>' +
	                    '<input type="text"/>' +
	                '</div>';
	}

	IMDatetimepicker.prototype.getDom = function () {
		return this.el;
	};

	window.IMDatetimepicker = IMDatetimepicker;
}());
(function () {
	function IMInput (opt) {
		this.opt = opt;
		this.el  =	'<div class="im-input ' + this.opt.className + '">' +
						'<div class="input-label">' + this.opt.text + '</div>' +
	                    '<input type="text" placeholder="' + (this.opt.placeHolder || '') + '"/>' +
	                '</div>';
	}

	IMInput.prototype.getDom = function () {
		return this.el;
	};

	window.IMInput = IMInput;
}());

(function () {

	function IMMoneyModel (opt) {
		this.opt = opt;
		this.id  = opt.id;

		this.el  =	'<div class="im-money-model" id="' + this.id + '">' +
						'<div class="name">资金模式：</div>' +
						'<div class="unit">' +
							'<div class="item yuan selected"><span>元</span></div>' +
							'<div class="item jiao"><span>角</span></div>' +
							'<div class="item fen"><span>分</span></div>' +
							'<div class="trick">元</div>' +
						'</div>' +
					'</div>';
	}

	IMMoneyModel.prototype.getDom = function () {
		return this.el;
	};

	IMMoneyModel.prototype.bindEvents = function () {
		var left;
		var trick;
		var gap;
		var yuan;
		var unit = 0;
		var that = this;

		this.zone = $('#' + this.id);
		trick     = this.zone.find('.trick');
		yuan      = this.zone.find('.yuan');

		this.zone.delegate('.item', 'click', function () {
			trick.text('');

			that.zone.find('.item').removeClass('selected');
			$(this).addClass('selected');

			gap = parseInt(yuan.width());

			if ($(this).hasClass('yuan')) {
				left = 0;
			} else if ($(this).hasClass('jiao')) {
				left = gap;
			} else {
				left = gap*2;
			}

			trick.css('left', left + 'px');

			it = BetRuleInstance;
			if ($(this).hasClass('yuan')) {
				trick.text('元');
				it.betUnit = 2;
			} else if ($(this).hasClass('jiao')) {
				trick.text('角');
				it.betUnit = 0.2;	
			} else {
				trick.text('分');
				it.betUnit = 0.02;	
			}
			that.setModelZoneData(it);	
		});

		this.setModelZoneData = function(sender){
			var it = BetRuleInstance;
			var currentNum =  it.multiple == undefined ? 1 : it.multiple ;
			var max = app.currentModule.modelZone.bettingTimes.getCount(currentNum).maxCount;
			var inputVal = currentNum < max ? currentNum : max;
			app.currentModule.modelZone.bettingTimes.zone.find('input').val(inputVal);
			it.multiple = inputVal;
			var opt = BetAlgorithm.getModelZoneData(sender.betCount, sender.multiple);
			sender.setModelZoneData(sender.betCount, opt.winMoney, opt.returnMoney, opt.totalMoney, inputVal);
		}

		this.getBetUnit = function(target){
			var unit = this.zone.find('.item.selected');
	        if (unit.hasClass('yuan')) {
	            target.betUnit = 2;
	        } else if (unit.hasClass('jiao')) {
	            target.betUnit = 0.2;
	        } else {
	            target.betUnit = 0.02;
	        }
		}

	};

	window.IMMoneyModel = IMMoneyModel;
}());


(function () {
	function IMOverlay (opt) {
		this.opt = opt;
		this.el = '<div class="im-overlay"></div>';

		opt.position.append(this.el);
		this.zone = opt.position.children('.im-overlay');
	}

	IMOverlay.prototype.show = function () {
		var height1 = parseInt($('.bet .main').css('height'));
		var height2 = parseInt($('.bet .left-nav').css('height'));
		var height  = Math.max(height1, height2) + 'px';

		this.zone.css('height', height);
		this.zone.show();
	};
	IMOverlay.prototype.showImg = function () {
		var str = '<div class="overlay-loading"></div>';
		$('body').append(str);
	};
	IMOverlay.prototype.hideImg = function () {
		$('.overlay-loading').remove()
	};
	IMOverlay.prototype.hide = function () {
		this.zone.hide();
	};

	window.IMOverlay = IMOverlay;
}());


(function () {
	function IMPager (opt) {
		this.opt            = opt;
		this.id             = this.opt.id;
		this.currentPage    = 1;
		this.totalPage      = 1;
		this.pageRange      = 4;
		this.firstItemValue = 1;
		this.el             = this.initDom();
	}
	IMPager.prototype.initDom = function () {
		var temp;
		
        temp  = '<ul class="im-pager" id="' + this.id + '">' +
					'<li><a class="btn first"    href="#">第一页</a></li>' +
					'<li><a class="btn previous" href="#">上一页</a></li>' +
					'<li><a class="item selected" href="#" data-value="1">1</a></li>' +
					'<li><a class="item"     	 href="#" data-value="2">2</a></li>' +
					'<li><a class="item"     	 href="#" data-value="3">3</a></li>' +
					'<li><a class="item"     	 href="#" data-value="4">4</a></li>' +
					'<li><a class="item more"    href="#">...</a></li>' +
					'<li><a class="btn next"     href="#">下一页</a></li>' +
					'<li><a class="btn last"     href="#">最后一页</a></li>' +
                '</ul>';

		return temp;
	};

	IMPager.prototype.getDom = function () {
		return this.el;
	};

	IMPager.prototype.reloadPageItem = function (start) {
		var i;
		var items = this.zone.find('.item');

		for (i = 0; i < this.pageRange; i++) {
			if (start + i <= this.totalPage) {
				$(items[i]).text(start + i);
				$(items[i]).attr('data-value', start + i);
				$(items[i]).show();
			} else {
				$(items[i]).hide();
			}
		}
	};

	IMPager.prototype.setSelected = function (value) {
		var i;
		var items = this.zone.find('.item');

		for (i = 0; i < 4; i++) {
			if (parseInt($(items[i]).attr('data-value')) === this.currentPage) {
				items.removeClass('selected');
				$(items[i]).addClass('selected');
			}
		}
	};
	IMPager.prototype.isDisable = function(){
		var zone = this.zone;
		if(this.currentPage == 1){
			zone.find('.btn').removeClass('btn-disabled');
			zone.find('.first').addClass('btn-disabled');
			zone.find('.previous').addClass('btn-disabled');
			if(this.currentPage == this.totalPage){
				zone.find('.more').hide();
			}else{
				zone.find('.more').show();
			}
		}else if(this.currentPage == this.totalPage){
			zone.find('.btn').removeClass('btn-disabled');
			zone.find('.next').addClass('btn-disabled');
			zone.find('.last').addClass('btn-disabled');
			zone.find('.more').hide();
		}else{
			zone.find('.more').show();
			zone.find('.btn').removeClass('btn-disabled');
		}
	};
	IMPager.prototype.bindEvents = function () {
		var that = this;

		this.zone = $('#' + this.id);

		this.reloadPageItem(this.currentPage);

		this.zone.delegate('a', 'click', function () {
			var currentPage = that.currentPage;
			if ($(this).hasClass('first')) {
				that.currentPage = 1;
				that.firstItemValue = 1;
				that.reloadPageItem(that.firstItemValue);
				that.setSelected();
			} else if ($(this).hasClass('last')) {
				that.currentPage = that.totalPage;
				that.firstItemValue = parseInt(that.totalPage/that.pageRange) * that.pageRange;
				if(that.totalPage%that.pageRange != 0){
					that.firstItemValue++
				}
				that.reloadPageItem(that.firstItemValue);
				that.setSelected();
			} else if ($(this).hasClass('previous')) {
				if (that.currentPage > 1) {
					if (that.currentPage === that.firstItemValue) {
						that.firstItemValue -= that.pageRange;
						if(that.firstItemValue == 0){
							that.firstItemValue = 1
						}
						that.reloadPageItem(that.firstItemValue);
					}

					that.currentPage -= 1;
					that.setSelected();
				}
			} else if ($(this).hasClass('next')) {
				if (that.currentPage < that.totalPage) {
					if (that.currentPage === (that.firstItemValue + (that.pageRange - 1))) {
						that.firstItemValue += that.pageRange;
						that.reloadPageItem(that.firstItemValue);
					}

					that.currentPage += 1;
					that.setSelected();
				}
			} else if ($(this).hasClass('more')) {
				that.zone.find('.item').removeClass('selected');
				that.firstItemValue = parseInt(that.zone.find('.item:first').attr('data-value'));

				if (that.firstItemValue + (that.pageRange - 1) < that.totalPage) {
					that.firstItemValue += that.pageRange;
					that.currentPage = that.firstItemValue;
					that.reloadPageItem(that.firstItemValue);
				}

				that.setSelected();
			} else {
				that.currentPage = parseInt($(this).attr('data-value'));
				that.setSelected();
			}
			if(currentPage != that.currentPage){
				if(typeof(app) != 'undefined'){
					if(app.bettingRecords.type == 1){
						app.bettingRecords.getBetHistory();
					}else{
						app.bettingRecords.getChaseHistory();
					}

				}else{
					if(recordsQuery.type == 1){
						recordsQuery.getBetHistory();
					}else{
						recordsQuery.getChaseHistory();
					}
				}
			}
			that.isDisable()
		});
	};

	window.IMPager = IMPager;
}());


(function () {

	function IMRangeSlider (id) {
		this.data = {
			0: {
				turnOver: '0%',
				jjz: 1950
			},
			0.5: {
				turnOver: '0.5%',
				jjz: 1940
			},
			1: {
				turnOver: '1%',
				jjz: 1930
			},
			1.5: {
				turnOver: '1.5%',
				jjz: 1920
			},
			2: {
				turnOver: '2%',
				jjz: 1900
			},
			2.5: {
				turnOver: '2.5%',
				jjz: 1890
			},
			3: {
				turnOver: '3%',
				jjz: 1880
			},
			3.5: {
				turnOver: '3.5%',
				jjz: 1870
			},
			4: {
				turnOver: '4%',
				jjz: 1860
			},
			4.5: {
				turnOver: '4.5%',
				jjz: 1850
			},
			5: {
				turnOver: '5%',
				jjz: 1840
			},
			5.5: {
				turnOver: '5.5%',
				jjz: 1830
			},
			6: {
				turnOver: '6%',
				jjz: 1820
			},
			6.5: {
				turnOver: '6.5%',
				jjz: 1810
			},
			7: {
				turnOver: '7%',
				jjz: 1800
			},
			7.5: {
				turnOver: '7.5%',
				jjz: 1790
			},
			8: {
				turnOver: '8%',
				jjz: 1780
			},
			8.5: {
				turnOver: '8.5%',
				jjz: 1770
			},
			9: {
				turnOver: '9%',
				jjz: 1760
			},
			9.5: {
				turnOver: '9.5%',
				jjz: 1750
			},
			10: {
				turnOver: '10%',
				jjz: 1740
			}
		};
		
		this.el = 	'<div class="row im-range-slider">' +
						'<div class="col-md-3 turn-over">' +
							'返点' +
							'<span class="turn-over-value">7.5%</span>' +
						'</div>' +
						'<div class="col-md-6 range-slider-zone">' +
							'<input type="range" min="0" max="10" step="0.5" value="7.5">' +
						'</div>' +
						'<div class="col-md-3 jjz">' +
							'<span class="jjz-value">1800</span>' +
							'奖金组' +
						'</div>' +
					'</div>';
	}

	IMRangeSlider.prototype.getDom = function () {
		return this.el;
	};

	IMRangeSlider.prototype.bindEvents = function () {
		var jjz;
		var turnOver;
		var that = this;

		this.zone   = $('.im-range-slider');
		this.slider = this.zone.find('input[type="range"]');
		jjz         = this.zone.find('.jjz-value');
		turnOver    = this.zone.find('.turn-over-value');

		this.slider.rangeslider({
		    polyfill: false,
		    rangeClass: 'rangeslider',
		    disabledClass: 'rangeslider--disabled',
		    horizontalClass: 'rangeslider--horizontal',
		    verticalClass: 'rangeslider--vertical',
		    fillClass: 'rangeslider__fill',
		    handleClass: 'rangeslider__handle',
		    onInit: function() {},
		    onSlide: function(position, value) {
		    	turnOver.text(that.data[value].turnOver);
		    	jjz.text(that.data[value].jjz);
		    },
		    onSlideEnd: function(position, value) {
		    }
		});
	};

	window.IMRangeSlider = IMRangeSlider;
}());


(function () {
	function IMSelect (opt) {
		this.opt = opt;
		this.id  = this.opt.id;
		this.el  = this['initType' + this.opt.type]() + '<div class="select-overlay"></div>';
	}

	IMSelect.prototype.getDom = function () {
		return this.el;
	};

	IMSelect.prototype.initType1 = function () {
		var temp = 	'<div class="im-select' + (this.opt.className? (' ' + this.opt.className) : '') + '" id="' + this.id + '">' +
						  	'<button id="' + this.id + '-button' + '">' +
						    	'<span class="buttonName">' +
						    		this.opt.data[0].text +
						    	'</span>' +
						    	'<div class="select-down-arrow"></div>' +
						 	'</button>' +
						  	'<ul class="dropdown-menu">' +
						    	this.generateTypeList() +
						  	'</ul>' +
					'</div>';

		return temp;
	};

	IMSelect.prototype.initType2 = function () {
		var temp = 	'<div class="im-select' + (this.opt.className? (' ' + this.opt.className) : '') + '" id="' + this.id + '">' +
						  	'<button id="' + this.id + '-button' + '">' +
								'<div class="select-label">' +
									this.opt.text +
								'</div>' +
						    	'<span class="buttonName">' +
						    		this.opt.data[0].text +
						    	'</span>' +
						    	'<div class="select-down-arrow"></div>' +
						 	'</button>' +

						  	'<ul class="dropdown-menu">' +
						    	this.generateTypeList() +
						  	'</ul>' +
					'</div>';

		return temp;
	};

	IMSelect.prototype.generateTypeList = function () {
		var i;
		var temp = '';
		var data = this.opt.data;

		for (i = 0; i < data.length; i++) {
			temp += ' <li><a href="#" data-value="' + data[i].value + '">' + data[i].text + '</a></li>'
		}

		return temp;
	};

	IMSelect.prototype.getValue = function () {
		return this.value;
	};

	IMSelect.prototype.bindEvents = function () {
		var ul;
		var value;
		var text;
		var buttonName;
		var button;
		var overlay;
		var that = this;
		that.value = that.opt.data[0].value;
		this.zone  = $('#' + this.id);
		overlay    = this.zone.next('.select-overlay');
		ul         = this.zone.find('ul.dropdown-menu');
		button     = this.zone.find('button');
		buttonName = this.zone.find('.buttonName');

		button.click(function (e) {
			e.preventDefault();
			ul.toggle();
			overlay.toggle();
		});

		ul.delegate('li', 'click', function (e) {
			e.preventDefault();
	    	text       = $(this).children('a').text();
			value      = $(this).children('a').attr('data-value');
			that.value = value;
			buttonName.text(text);
			if (that.opt.callback && typeof that.opt.callback == 'function') {
				that.opt.callback(that.value.split('--')[0]);
			};
			ul.hide();
			overlay.hide();
		});

		overlay.click(function (){
			ul.hide();
			overlay.hide();
		});
	};

	window.IMSelect = IMSelect;
}());


(function () {
	function IMTip (opt) {
		this.opt = opt;
		this.el = this.init();
	}

	IMTip.prototype.init = function () {
		var temp = 	'<div class="im-tip">' +
						'<div class="tip-content" id="title"></div>' +'<div class="tip-content" id="method"></div>'+
						'<div class="arrow"></div>' +
					'</div>';
		return temp;
	};

	IMTip.prototype.getDom = function () {
		return this.el;
	};

	IMTip.prototype.show = function (opt) {
		this.zone = $('.im-tip');
		this.zone.find('#title').text(opt.text.methodName);
		this.zone.find('#method').text(opt.text.winningRule);
		
		delete opt.text;
		opt.display = 'inline-block';
		this.zone.css(opt);
	};

	IMTip.prototype.hide = function () {
		this.zone.hide();
	};

	window.IMTip = IMTip;
}());


(function () {
	function ProgressLine (opt) {
		this.opt = opt;
		this.id  = this.opt.id;
		this.el  = 	'<div class="im-progressline" id="' + this.id + '">' +
						'<div class="progress"></div>' +
					'</div>';
	}

	ProgressLine.prototype.getDom = function () {
		return this.el;
	};

	ProgressLine.prototype.active = function () {
		this.zone.children('.progress').addClass('active');
	};

	ProgressLine.prototype.deactive = function () {
		this.zone.children('.progress').removeClass('active');
	};

	ProgressLine.prototype.start = function (beginTimeSerials, closeTimeSerials, endTimeSerials) {
		var timeout;
		var start = 0;
		var that  = this;
		var serverTimeSerials = (new Date()).getTime() + window.jetLag;
		var totalTime = closeTimeSerials - beginTimeSerials;
		var progress = this.zone.children('.progress');

		progress.css({
			'transition-duration': '0s',
			'width': '0px'
		});

		this.zone.css({
			'opacity': '1'
		});

		if (beginTimeSerials > serverTimeSerials) totalTime = closeTimeSerials - serverTimeSerials;

		timeout = setTimeout(function () {
			that.zone.css('background-color', '#5B6483');
			progress.css({
				'transition-duration': '.3s',
				'width': (((closeTimeSerials - serverTimeSerials) / totalTime) * 100 + '%'),
			    '-webkit-transition-timing-function': 'ease-in',
			    'transition-timing-function': 'ease-in'
			});
			clearTimeout(timeout);
		}, 100);

		this.timeout = setTimeout(function () {
			progress.attr('style','');
			progress.css('width', (((closeTimeSerials - serverTimeSerials) / totalTime) * 100 + '%'));
			that.interval && clearInterval(that.interval);
			that.interval = setInterval(function(){
				serverTimeSerials = (new Date()).getTime() + window.jetLag;
				progress.css('width', (((closeTimeSerials - serverTimeSerials) / totalTime) * 100 + '%'));
			},1000);

			clearTimeout(that.timeout);
		}, 600);

	};

	ProgressLine.prototype.stop = function () {
		var timeout1;
		var timeout2;
		var that = this;
		var width;
		var zoneWidth;
		var progress = this.zone.children('.progress');

		width     = parseInt(progress.css('width'));
		zoneWidth = parseInt(this.zone.css('width'));

		clearTimeout(this.timeout);
		clearInterval(this.interval);
		progress.attr('style', '');
		progress.css('width', ((width / zoneWidth)*100 + '%'));
		this.zone.css('background-color', 'transparent');

		timeout1 = setTimeout(function () {
			progress.css({
				'transition-duration': '.3s',
				'width': '0px',
			    '-webkit-transition-timing-function': 'ease-in',
			    'transition-timing-function': 'ease-in'
			});

			clearTimeout(timeout1);
		}, 100);

		timeout2 = setTimeout(function () {
			that.zone.css({
				'opacity': '0'
			});

			clearTimeout(timeout2);
		}, 600);
	};

	ProgressLine.prototype.bindEvents = function () {
		this.zone = $('#' + this.id);
	};

	window.ProgressLine = ProgressLine;
}());


(function() {
    function BetRule(betType, gameCode) {
        this.ruleData = RULE_CONFIG.filter(function(item, index, array) {
            return item.betType == betType && item.gameCode == gameCode;
        })[0];

        //临时处理 没数据的情况下防止错误  后面删掉
        if (!this.ruleData) {
            this.ruleData = {
                dataFormatter: [
                    []
                ]
            };
        }

        this.result = this.copyResult(this.ruleData.dataFormatter);
        this.betType = betType;
        this.gameCode = gameCode;
        this.betCount = 0;

        this.getBetUnit();
        this.changeComms(betType, this.gameCode);
        this.setModelZoneData(0, 0, 0, 0, 1);
        this.changePlaceholder();
        this.changeBtnClass();
    };

    //普通号码球
    BetRule.prototype.checkSelect = function($target) {
        var gameCode = this.gameCode;
        var rowData = this.getRowData($target, this.ruleData);
        var rowIndex = rowData.rowIndex;
        var $selectBall = rowData.selectBall;
        var num = $target.attr('data-value');
        if ($.inArray(num, this.result[rowIndex]) > -1) {
            $target.removeClass('selected');
            this.result[rowIndex].remove(num);
        } else {
            var selectDataLengthArr = this.ruleData.selectDataLength;
            if (selectDataLengthArr && selectDataLengthArr[rowIndex]) {
                if ($selectBall.length < selectDataLengthArr[rowIndex]) {
                    $target.addClass('selected');
                    this.result[rowIndex].push(num);
                } else {
                    var ballValue = this.result[rowIndex].pop();
                    $selectBall.filter('[data-value=' + ballValue + ']').removeClass('selected');
                    $target.addClass('selected');
                    this.result[rowIndex].push(num);
                }
            } else {
                $target.addClass('selected');
                this.result[rowIndex].push(num);
            }
        }
        this.dtSelectLimit(this.result, $target, rowIndex, num)
        CalcSpecialOdds.setSpecialOdds(this, gameCode);
        if (gameCode == 'LT')
            BetAlgorithm.getCount(this.result, this.betType);
        else if (gameCode == 'HL11x5')
            HL11X5_BetAlgorithm.getCount(this.result, this.betType);
    };

    //万，千，百，十，个 位数多选
    BetRule.prototype.checkUnitGroup = function($target) {
        var num = $target.attr('data-value');
        var arr = this.result[this.result.length - 1];
        if ($.inArray(num, arr) > -1) {
            $target.removeClass('checked');
            arr.remove(num);
        } else {
            $target.addClass('checked');
            arr.push(num);
        }

        BetAlgorithm.getCount(this.result, this.betType);
    }

    //K3号码球
    BetRule.prototype.checkK3BallSelect = function($target) {
        var $plateTarget = $target.closest('.dice-plate');
        var $selectBall = $plateTarget.find('.sum-ul-item.selected');
        var num = $target.attr('data-value');
        if ($.inArray(num, this.result[0]) > -1) {
            $target.removeClass('selected');
            this.result[0].remove(num);
        } else {
            $target.addClass('selected');
            this.result[0].push(num);
        }
        CalcSpecialOdds.K3_getOdds(this.result, this.betType);
        K3_BetAlgorithm.getCount(this.result, this.betType);

    }

    //K3骰子
    BetRule.prototype.checkK3DiceSelect = function($target) {
        var $plateTarget = $target.closest('.dice-plate');
        var $selectBall;
        var num = $target.attr('data-item');
        if (this.ruleData.plateType.indexOf('13') > -1) {
            $selectBall = $plateTarget.find('.big-ul-item.active');
        } else {
            $selectBall = $plateTarget.find('.dice-item.active');
        }
        if ($.inArray(num, this.result[0]) > -1) {
            $target.removeClass('active');
            this.result[0].remove(num);
        } else {
            $target.addClass('active');
            this.result[0].push(num);
        }
        K3_BetAlgorithm.getCount(this.result, this.betType);
    }

    //胆码和拖码的限制
    BetRule.prototype.dtSelectLimit = function(result, $target, rowIndex, num) {
        var dtBetType = [
            'G3BH',
            'G2BH',
            'A2B',
            'A3B',
            'A4B',
            'A5B',
            'A6B',
            'A7B',
            'A8B'
        ];
        if ($.inArray(this.betType, dtBetType) == -1 || this.gameCode != 'HL11x5') return;

        if (rowIndex == 0) { //胆码
            if ($.inArray(num, result[1]) > -1) { //拖码中有号码与刚选择的胆码相同
                result[1].remove(num);
                $target.parents('.plate2-row').next().find('[data-value=' + num + ']').removeClass('selected')
            }
        } else {
            if ($.inArray(num, result[0]) > -1) { //胆码中有号码与刚选择的拖码相同
                result[0].remove(num);
                $target.parents('.plate2-row').prev().find('[data-value=' + num + ']').removeClass('selected')
            }
        }
    };

    //获取选中行的数据
    BetRule.prototype.getRowData = function($target, ruleData) {
        var $rowTarget,
            rowIndex,
            $selectBall;
        switch (ruleData.plateType) {
            case 1:
                $rowTarget = $target.parent('.row').parent().parent();
                rowIndex = parseInt($rowTarget.attr('data-index'));
                $selectBall = $rowTarget.find('.ball-item.selected');
                break;
            case 3:
            case 4:
            case 6:
                $rowTarget = $target.parent('.row');
                rowIndex = 0;
                $selectBall = $rowTarget.find('.ball-item.selected');
                break;
            case 5:
                $rowTarget = $target.parent('.row').parent().parent();
                rowIndex = parseInt($rowTarget.attr('data-index'));
                $selectBall = $rowTarget.find('.ball-item.selected');
                break;
            case 7:
            case 8:
                var funRow = ruleData.funRow;
                $rowTarget = $target.parent('.row').parent().parent();
                rowIndex = this.fixIndex($rowTarget);
                if (rowIndex < funRow.length) { //趣味下注区
                    $selectBall = $rowTarget.find('.fun-ball-item.selected');
                } else {
                    $selectBall = $rowTarget.find('.ball-item.selected');
                }
                break;
            case 9:
                $rowTarget = $target.parent('ul');
                rowIndex = 0;
                $selectBall = $rowTarget.find('.ball-item.selected')
                break;
            case 10:
            case 11:
                $rowTarget = $target.parents('.plate2-row');
                rowIndex = parseInt($rowTarget.attr('data-index'));
                $selectBall = $rowTarget.find('.ball-item.selected');
                break;
        }
        return {
            rowIndex: rowIndex,
            selectBall: $selectBall
        }
    }

    //修复索引  类似’任选‘等玩法  索引不对
    BetRule.prototype.fixIndex = function($rowTarget) {
        var hideNodeCount = $rowTarget.prevAll(":hidden").length;
        var index = parseInt($rowTarget.attr('data-index')) - hideNodeCount;
        return index;
    }

    //normal array deepcopy
    BetRule.prototype.copyResult = function(data) {
        var result = [];
        for (var i = 0; i < data.length; i++)
            result[i] = data[i].slice(0);
        return result;
    }

    //获取返点率
    BetRule.prototype.changeComms = function(type, gameCode) {
        var currentOddsGroup = Global.betSetting.currentOddsGroup[gameCode];
        var oddsGroupData = Global.betSetting[gameCode][currentOddsGroup].filter(function(item, index, array){
            return type == item.betType;
        })[0] || [];
        var data = [];
        this.odds = oddsGroupData.odds;
        this.maxCount = oddsGroupData.maxCount;
        this.comm = oddsGroupData.comm;

        for(var i = 0; i < Global.betSetting.oddsGroups[gameCode].length; i++){
            var oddsGroupName = Global.betSetting.oddsGroups[gameCode][i];
            var tempOddsGroupData = Global.betSetting[gameCode][currentOddsGroup].filter(function(item, index, array){
                return type == item.betType;
            })[0] || [];
            data.push({
                'text': oddsGroupName + '--' + tempOddsGroupData.comm,
                'value': oddsGroupName + '--' + tempOddsGroupData.comm,
                'oddsGroupName': oddsGroupName
            });
        }
        app.currentModule.modelZone.changeComm(data,gameCode);
    }

    //设置modelZone和betRuleIntance的数据
    BetRule.prototype.setModelZoneData = function(amout, winMoney, returnMoney, totalMoney, betTimes) {
        var opt = {
            amout: amout,
            winMoney: winMoney,
            returnMoney: returnMoney,
            totalMoney: totalMoney,
            betTimes: betTimes
        };
        app.currentModule.modelZone.setModelZoneData(opt);
    }

    //获取资金模式
    BetRule.prototype.getBetUnit = function() {
        var target = this;
        app.currentModule.modelZone.moneyModel.getBetUnit(target);
    }

    //获取单式的placeholder
    BetRule.prototype.changePlaceholder = function() {
        var betRuleTip = this.ruleData.betRuleTip == undefined ? "" : this.ruleData.betRuleTip;
        var currentPlate = app.currentModule.playingNav.currentPlate;
        if (currentPlate instanceof InputPlate) {
            currentPlate.placeholderText = '说明:\n' +
                '1. 支持常见的各种单式格式, 间隔符如： 换行符 回车 逗号 分号等\n' +
                '2. 上传文件后缀名必须是TXT格式，支持拖拽文件到文本框进行上传\n' +
                '3. 文件较大时会导致上传时间较长，请耐心等待!\n\n' + betRuleTip;
            currentPlate.zone.find("textarea").val(currentPlate.placeholderText);
            currentPlate.zone.find("textarea").addClass('placeholder');
        }
    }

    //改变’直接投注‘和’添加‘的数据
    BetRule.prototype.changeBtnClass = function() {
        if (this.betCount) {
            app.currentModule.modelZone.betNowButton.enabled();
            app.currentModule.modelZone.addButton.enabled();
        } else {
            app.currentModule.modelZone.betNowButton.disabled();
            app.currentModule.modelZone.addButton.disabled()
        }
    }


    window.BetRule = BetRule;


}());


BetTrolley = {

    //添加注单
    addBetRecord: function() {
        var it = BetRuleInstance;
        var items;
        var data;

        var market = app.currentSocket.market,
            gameCode = app.currentSocket.gameCode,
            list = [],
            resultItem = [],
            trolleyZoneData = Global.betZoneData.filter(function(item, index) {
                return market == item.market && gameCode == item.gameCode;
            })[0];
        var betUIContent = this.getBetUIContent(it);
        if(app.currentSocket.gameCode == 'LT')
            data = LT_PlaceBet.bet.bind(LT_PlaceBet)(true, it.betType);
        if(app.currentSocket.gameCode == 'HL11x5')
            data = HL11x5_PlaceBet.bet.bind(HL11x5_PlaceBet)(true, it.betType);
        if(app.currentSocket.gameCode == 'K3')
            data = K3_PlaceBet.bet.bind(K3_PlaceBet)(true, it.betType);
        items = data.items;
        //var items = '';
        var betFamilyName = app.currentModule.playingNav.zone.find('.family-item.selected').attr('data-value');
        var serialNo = it.serialNo;
        serialNo = serialNo ? serialNo : (new Date().format('yyyyMMddhhmmss') + Math.random());

        list = [
            it.ruleData.name,
            betUIContent,
            it.betCount,
            it.multiple,
            it.betAmount,
            it.betType,
            it.comm,
            it.result.slice(0),
            betFamilyName,
            it.betUnit,
            it.odds,
            items,
            serialNo,
            it.maxCount,
            data
        ];

        this.addTrolleyZoneData(trolleyZoneData, list, serialNo, it, betUIContent);
        this.setConfirmZoneData(trolleyZoneData);
        it.serialNo = undefined;
        app.currentModule.bettingOrder.addList(trolleyZoneData.data);
    },

    getBetUIContent: function(betRule) {
        var selectStr = ["Big", "Small", "Odd", "Even", "L", "H", "T", "TRI", "PAIR", "SN", "5th", "4th", "3rd", "2nd", "1st", "R1", "R2", "R3", "R4", "R5","O5E0","O4E1","O3E2","O2E3","O1E4","O0E5","FMN"],
            convertStr = ["大", "小", "单", "双", "龙", "虎", "和", "豹子", "对子", "顺子", "万", "千", "百", "十", "个", "一区", "二区", "三区", "四区", "五区","5单0双","4单1双","3单2双","2单3双","1单4双","0单5双","猜中位"],
            betTypeStr = ["G5X60", "G5X30", "G5X20", "G5X10", "G5X5", "G4X12", "G4X6", "G4X4", "A4G4X4", "A4G4X12","G3BH","G2BH","A2B","A3B","A4B","A5B","A6B","A7B","A8B"]; //G4X6
        var betUIConent = '',
            ballName = '';

        for (var i = 0; i < betRule.result.length; i++) {
            if(app.currentSocket.market == 'CN3D' && betRule.betType == 'N1' && i>2)break;
            var result = betRule.result[i],
                rowResultContent = '';
            for (var j = 0; j < result.length; j++) {
                if ($.inArray(result[j], selectStr) > -1)
                    ballName = convertStr[$.inArray(result[j], selectStr)];
                else
                    ballName = result[j];

                rowResultContent += ballName + ',';
                if (j == result.length - 1) rowResultContent = rowResultContent.substring(0, rowResultContent.length - 1);
            }

            if ($.inArray(betRule.betType, betTypeStr) > -1)
                betUIConent += rowResultContent + '*';
            else
                betUIConent += rowResultContent + '|';
        }

        betUIConent = betUIConent.substring(0, betUIConent.length - 1);
        if (betUIConent.indexOf('*') > -1) {
            var arr = betUIConent.split("*");
            var length = arr.length;
            if (length > 2) {
                if($.inArray(betRule.betType, betTypeStr) < 10){
                    betUIConent = arr[2] + "|" + arr[0] + ">" + arr[1];
                }else{
                    betUIConent = arr[0] + "|" + arr[1] + ">" + arr[2];
                }

            } else {
                betUIConent = arr[0] + ">" + arr[1];
            }
        }

        return betUIConent;
    },

    sameSetBet: function(trolleyZoneData, list) {
        var sameSetArr = trolleyZoneData.data.filter(function(item, index) {
            return item[0] == list[0] &&
                item[1] == list[1] &&
                item[2] == list[2] &&
                item[5] == list[5] &&
                item[9] == list[9] &&
                item[14]['prizeGroup'] == list[14]['prizeGroup']
        })[0];

        return sameSetArr;
    },

    updateBet: function(trolleyZoneData, list, serialNo) {
        var updateBetArr = trolleyZoneData.data.filter(function(item, index) {
            return serialNo == item[12];
        })[0];

        return updateBetArr;
    },

    addTrolleyZoneData: function(trolleyZoneData, list, serialNo, betRule, betUIContent) {
        var updateBetArr = this.updateBet(trolleyZoneData, list, serialNo);
        var sameSetBetArr = this.sameSetBet(trolleyZoneData, list);
        if (updateBetArr) {
            updateBetArr[1] = betUIContent;
            updateBetArr[2] = list[2];
            updateBetArr[3] = list[3];
            updateBetArr[4] = list[4];
            updateBetArr[6] = list[6];
            updateBetArr[10] = list[10];
            updateBetArr[7] = list[7].slice(0);
            updateBetArr[9] = list[9];
            updateBetArr[11] = list[11];
            updateBetArr[14] = list[14];
        } else if (sameSetBetArr) {
            sameSetBetArr[3] += list[3];
            sameSetBetArr[4] = sameSetBetArr[3] *  list[9];
            app.noticeDialog.show({
                subTitle: "温馨提示",
                text: "您选择的号码在号码篮已存在，将直接进行倍数累加返点以第一单为准",
                buttonName: "确定",
                autoHide: true,
                timeout: 3000
            });
            if (sameSetBetArr[3] > betRule.maxCount) {
                sameSetBetArr[3] = betRule.maxCount;
                sameSetBetArr[4] = betRule.maxCount * list[9];
                app.noticeDialog.show({
                    subTitle: "温馨提示",
                    text: "该组号码倍数已经超过最大限制(" + betRule.maxCount + "倍),将调整为系统支持的最大倍数进行添加",
                    buttonName: "确定",
                    autoHide: true,
                    timeout: 3000
                });
            }
        } else {
            trolleyZoneData.data.splice(0, 0, list);
        }
    },

    setConfirmZoneData: function(trolleyZoneData) {
        var betCount = 0,
            betAmount = 0,
            betCommAmount = 0;
        var $comfirmBet = app.currentModule.comfirmBet.zone;

        for (var i = 0; i < trolleyZoneData.data.length; i++) {
            betCount += trolleyZoneData.data[i][2];
            betAmount += trolleyZoneData.data[i][4];
            betCommAmount += trolleyZoneData.data[i][4] * trolleyZoneData.data[i][6];
        }

        $comfirmBet.find('.bet-number').text(betCount + '注');
        $comfirmBet.find('.amount').text(Util.addDotToNumber(betAmount) + '元');
        $comfirmBet.find('.return').text(Util.addDotToNumber(betCommAmount, 4) + '元');
    }

}

BuildBetSelect = {

    build: function(data, index) {
        var betData = {
            betType: data[5],
            betCount: data[2],
            multiple: data[3],
            totalMoney: data[4],
            betUnit: data[9],
            result: data[7],
            familyName: data[8],
            comm: data[6],
            odds: data[10],
            serialNo: data[12],
            prizeGroup: data[14].prizeGroup
        };

        var anyBetTypeArr = [
            'A2S',
            'A2T',
            'A2G2',
            'A2G2S',
            'A2G2T',
            'A3S',
            'A3T',
            'A3G3X3',
            'A3G3X3S',
            'A3G3X6',
            'A3G3X6S',
            'A3G3MX',
            'A3G3T',
            'A4S',
            'A4G4X24',
            'A4G4X12',
            'A4G4X6',
            'A4G4X4'
        ];

        if (app.currentSocket.gameCode == 'K3')
            this.switchBetPlate_k3(betData.familyName, betData.betType);
        else
            this.switchBetPlate(betData.familyName, betData.betType);

        this.setBallSelect(betData);
        this.setBetRuleInfo(betData);
        BetRuleInstance.changeBtnClass();

        if ($.inArray(betData.betType, anyBetTypeArr) > -1 && app.currentSocket.gameCode == 'LT')
            this.selectUnitGroup(betData);
    },

    switchBetPlate: function(familyName, betType) {
        var gap = 8.33,
            index = 0,
            $playingNav = app.currentModule.playingNav.zone,
            $playingFamily = $playingNav.find('.playing-family'),
            $playingGroups = $playingNav.find('.playing-groups'),
            $stick = $playingFamily.children('.stick'),

            $familyItem = $playingFamily.find('.family-item').filter('[data-value=' + familyName + ']'),
            $methodItem = $playingGroups.find('.method-item').filter('[data-value=' + betType + ']');

        if ($familyItem.hasClass('selected') && $methodItem.hasClass('selected')) {
            app.currentModule.playingNav.showPlate(betType);
            return;
        }

        if (!$familyItem.hasClass('selected')) {
            $playingFamily.children('.family-item').removeClass('selected');
            $familyItem.addClass('selected');
            index = $familyItem.index();
            $stick.css('left', index * gap + '%');
            $playingGroups.html(app.currentModule.playingNav.dict1[familyName]);

            $playingGroups.find('.method-item').removeClass('selected');
            $methodItem = $playingGroups.find('.method-item').filter('[data-value=' + betType + ']');
            $methodItem.addClass('selected');
            app.currentModule.playingNav.showPlate(betType);

        } else {
            if (!$methodItem.hasClass('selected')) {
                $playingGroups.find('.method-item').removeClass('selected');
                $methodItem.addClass('selected');
            }
            app.currentModule.playingNav.showPlate(betType);
        }
    },

    switchBetPlate_k3: function(familyName, betType) {
        var gap = 8.33,
            index = 0,
            $playingNav = app.currentModule.playingNav.zone,
            $playingFamily = $playingNav.find('.playing-family'),
            $stick = $playingFamily.children('.stick'),
            $familyItem = $playingFamily.find('.family-item').filter('[data-value=' + familyName + ']');

        if ($familyItem.hasClass('selected')) {
            app.currentModule.playingNav.showPlate(betType);
            return;
        } else {
            $playingFamily.children('.family-item').removeClass('selected');
            $familyItem.addClass('selected');
            index = $familyItem.index();
            $stick.css('left', index * gap + '%');
            app.currentModule.playingNav.showPlate(betType);
        }
    },

    setBallSelect: function(data) {
        var $currentRowTarge,
            currentRowData,
            currentPlate = app.currentModule.playingNav.currentPlate,
            plateType = currentPlate.id.substring(currentPlate.id.indexOf('parentPlate') + 11);
        switch (plateType) {
            case '1':
            case '5':
                for (var i = 0; i < data.result.length; i++) {
                    currentRowData = data.result[i];
                    if (plateType == '1')
                        $currentRowTarge = currentPlate.zone.children('.betting-number').find('[data-index=' + i + ']');
                    else
                        $currentRowTarge = currentPlate.zone.find('[data-index=' + i + ']');

                    $currentRowTarge.find('[data-value]').removeClass('selected');
                    for (var j = 0; j < currentRowData.length; j++) {
                        if ($currentRowTarge.is(":visible"))
                            $currentRowTarge.find('[data-value=' + currentRowData[j] + ']').addClass('selected');
                    }
                };
                break;
            case '2':
                var $textarea = currentPlate.zone.find('textarea');
                $textarea.removeClass('placeholder');
                $textarea.val(data.result[0]);
                break;
            case '3':
                $currentRowTarge = currentPlate.zone.children('.betting-number').find('.row');
                $currentRowTarge.find('[data-value]').removeClass('selected');
                currentRowData = data.result[0];
                for (var i = 0; i < currentRowData.length; i++) {
                    if ($currentRowTarge.is(":visible"))
                        $currentRowTarge.find('[data-value=' + currentRowData[i] + ']').addClass('selected');
                }
                break;
            case '4':
            case '6':
                $currentRowTarge = currentPlate.zone.find('.row');
                $currentRowTarge.find('[data-value]').removeClass('selected');
                currentRowData = data.result[0];
                for (var i = 0; i < currentRowData.length; i++)
                    $currentRowTarge.find('[data-value=' + currentRowData[i] + ']').addClass('selected');
                break;
            case '7':
            case '8':
                var funRow,
                    normalRow;
                if (plateType == '7') {
                    funRow = currentPlate.zone.children('.betting-number').find('.row.funrow').filter(':visible');
                    normalRow = currentPlate.zone.children('.betting-number').find('.row.nofunrow').filter(':visible');
                } else {
                    funRow = currentPlate.zone.children('.betting-number').find('.row.zonerow').filter(':visible');
                    normalRow = currentPlate.zone.children('.betting-number').find('.row.nozonerow').filter(':visible');
                }
                funRow.find('[data-value]').removeClass('selected');
                normalRow.find('[data-value]').removeClass('selected');
                for (var i = 0; i < data.result.length; i++) {
                    currentRowData = data.result[i];
                    if (i < funRow.length) {
                        for (var j = 0; j < currentRowData.length; j++) {
                            $(funRow[i]).find('[data-value=' + currentRowData[j] + ']').addClass('selected');
                        }
                    } else {
                        for (var j = 0; j < currentRowData.length; j++) {
                            $(normalRow[i - funRow.length]).find('[data-value=' + currentRowData[j] + ']').addClass('selected');
                        }
                    }
                }
                break;
            case '9':
                $currentRowTarge = currentPlate.zone.find('ul');
                currentRowData = data.result[0];
                for (var i = 0; i < currentRowData.length; i++)
                    $currentRowTarge.find('[data-value=' + currentRowData[i] + ']').addClass('selected');
                break;
            case '10':
            case '11':
                for (var i = 0; i < data.result.length; i++) {
                    currentRowData = data.result[i];
                    $currentRowTarge = currentPlate.zone.find('[data-index=' + i + ']');
                    $currentRowTarge.find('[data-value]').removeClass('selected');
                    for (var j = 0; j < currentRowData.length; j++) {
                        if ($currentRowTarge.is(":visible"))
                            $currentRowTarge.find('[data-value=' + currentRowData[j] + ']').addClass('selected');
                    }
                }
                break;
            case '12':
                currentPlate.zone.find('[data-value]').removeClass('selected');
                for (var i = 0; i < data.result[0].length; i++) {
                    currentPlate.zone.find('[data-value=' + data.result[0][i] + ']').addClass('selected');
                }
                break;
            case '13-1':
            case '13-2':
            case '13-3':
            case '13-4':
            case '13-5':
            case '14':
                var imgs,    
                    $currentTarget;
                this.resetK3plate(currentPlate);
                for (var i = 0; i < data.result[0].length; i++) {
                    $currentTarget = currentPlate.zone.find('[data-item=' + data.result[0][i] + ']');
                    $currentTarget.addClass('active');
                    imgs = $currentTarget.find('img');
                    for(var j = 0; j < imgs.length; j++){
                        currentPlate.setImageActive($(imgs[j]));
                    }
                    if (plateType == '13-5')
                        currentPlate.setGroupClassStatus($currentTarget);
                }
                break;
        }

        this.setOperationBallSelect(currentPlate, plateType, data.result);
    },

    setOperationBallSelect: function(currentPlate, plateType, result) {
        var lotto_operationBall = [
            ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
            ['5', '6', '7', '8', '9'],
            ['0', '1', '2', '3', '4'],
            ['1', '3', '5', '7', '9'],
            ['0', '2', '4', '6', '8']
        ];

        var hl11x5_operationBall = [
            ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11'],
            ['06', '07', '08', '09', '10', '11'],
            ['01', '02', '03', '04', '05'],
            ['01', '03', '05', '07', '09', '11'],
            ['02', '04', '06', '08', '10']
        ];

        var hl11x5_czw_operationBall = [
            ['03', '04', '05', '06', '07', '08', '09'],
            ['06', '07', '08', '09'],
            ['03', '04', '05'],
            ['03', '05', '07', '09'],
            ['04', '06', '08']
        ];
        switch (plateType) {
            case '1':
                for (var i = 0; i < result.length; i++) {
                    for (var j = 0; j < 5; j++) {
                        var operationTarget = currentPlate.zone
                            .children('.betting-operation')
                            .children('.row:eq(' + i + ')')
                            .children('.operation-item:eq(' + j + ')');
                        if (result[i].eqaul(lotto_operationBall[j])) {
                            operationTarget.addClass('selected');
                        } else {
                            operationTarget.removeClass('selected');
                        }
                    }
                };
                break;
            case '7':
            case '8':
                var funRowLength,
                    operationRow;
                if (plateType == '7') {
                    funRowLength = currentPlate.zone.children('.betting-number').find('.row.funrow').filter(':visible').length;
                    operationRow = currentPlate.zone.children('.betting-operation').find('.row.nofunrow').filter(':visible');
                } else {
                    funRowLength = currentPlate.zone.children('.betting-number').find('.row.zonerow').filter(':visible').length;
                    operationRow = currentPlate.zone.children('.betting-operation').find('.row.nozonerow').filter(':visible');
                }
                for (var i = funRowLength; i < result.length; i++) {
                    for (var j = 0; j < 5; j++) {
                        var operationTarget = $(operationRow[i - funRowLength]).children('.operation-item:eq(' + j + ')');
                        if (result[i].eqaul(lotto_operationBall[j])) {
                            operationTarget.addClass('selected');
                        } else {
                            operationTarget.removeClass('selected');
                        }
                    }
                };
                break;
            case '10':
            case '11':
                for (var i = 0; i < result.length; i++) {
                    for (var j = 0; j < 5; j++) {
                        var operationTarget = currentPlate.zone
                            .children('[data-index=' + i + ']')
                            .children('.plate2-operations')
                            .children('.operation-item:eq(' + j + ')');

                        if (plateType == '10' && result[i].eqaul(hl11x5_operationBall[j])) {
                            operationTarget.addClass('selected');
                        } else if (plateType == '11' && result[i].eqaul(hl11x5_czw_operationBall[j])) {
                            operationTarget.addClass('selected');
                        } else {
                            operationTarget.removeClass('selected');
                        }
                    }
                }
                break;
        }
    },

    selectUnitGroup: function(data) {
        var currentData = data.result[data.result.length - 1];
        var $unitGroup = app.currentModule.playingNav.unitGroup.zone;
        $unitGroup.find('.im-checkbox').removeClass('checked');
        for (var i = 0; i < currentData.length; i++) {
            $unitGroup.find('[data-value=' + currentData[i] + ']').addClass('checked');
        }
    },

    resetK3plate: function(currentPlate){
        var images = currentPlate.zone.find('img');
        for (var i = 0; i < images.length; i++) {
            currentPlate.setImageDeactive($(images[i]));
        }
        currentPlate.zone.find('li').removeClass('active');
    },

    setBetRuleInfo: function(data) {
        var it = BetRuleInstance;
        var winMoney;
        var returnMoney;
        var turnoverBonusSelect = app.currentModule.modelZone.turnoverBonusSelect;

        Global.betSetting.currentOddsGroup[it.gameCode] = data.prizeGroup;
        turnoverBonusSelect.zone.find('.buttonName').text(data.prizeGroup + '--' + data.comm);
        it.serialNo = data.serialNo; //标记该下注实例来自投注篮重新构建的
        it.betAmount = data.totalMoney;
        it.multiple = data.multiple;
        it.betCount = data.betCount;
        it.odds = data.odds;
        it.comm = data.comm;
        for (var i = 0; i < data.result.length; i++)
            it.result[i] = data.result[i].slice(0);

        winMoney = data.totalMoney * it.odds / data.betCount / 2;
        returnMoney = data.totalMoney * it.comm;
        it.setModelZoneData(data.betCount, winMoney, returnMoney, it.betAmount, it.multiple);

        var modelIdx = 0,
            left = 0,
            text = "";
        var $moneyModel = app.currentModule.modelZone.moneyModel.zone;
        switch (data.betUnit) {
            case 2:
                text = "元";
                break;
            case 0.2:
                modelIdx = 1;
                text = "角";
                break;
            case 0.02:
                modelIdx = 2;
                text = "分";
                break;
        }
        left = modelIdx * 50;
        $moneyModel.find(".unit").find('.item').removeClass('selected');
        $moneyModel.find(".unit").find(".item").eq(modelIdx).addClass("selected");
        $moneyModel.find(".unit").find(".trick").css('left', left + 'px');
        $moneyModel.find(".unit").find(".trick").text(text);
    }
};

CalcSpecialOdds = {
	LT:{
		TSHM_odds:[
			'S3SF',
			'S3SM',
			'S3SL'
		],
		ZXHZ_odds:[
			'G3TF',
			'G3TM',
			'G3TL',
			'A3G3T'
		],
		LHH_odds:[
			'LH54',
			'LH53',
			'LH52',
			'LH51',
			'LH43',
			'LH42',
			'LH41',
			'LH32',
			'LH31',
			'LH21'
		]
	},
	HL11x5:{
		BDW_odds:[
			'FOEC',
			'FMN'
		]
	},


	setSpecialOdds :function(it,gameCode){
		var functionName = "";
		for (var i in CalcSpecialOdds[gameCode]) {
			if ($.inArray(it.betType, CalcSpecialOdds[gameCode][i]) > -1) {
				functionName = i;
				break;
			}
		}
		functionName = functionName.replace('_odds','');
		if(functionName)
			this[functionName](it);
	},
	//龙虎和
	LHH: function(it){
		var betType = it.betType;
		var oddsList = [];
		var odds,maxCount,comm;
		var filterData = Global.betSetting.LT[Global.betSetting.currentOddsGroup[it.gameCode]].filter(function(item,index){
			return item.betType == betType;
		});
		//虎
		var Tie = filterData.filter(function(item,index){
			return item.betItem == 'T';
		})[0];
		//龙
		var Long = filterData.filter(function(item,index){
			return item.betItem == 'L';
		})[0];
		//和
		var He = filterData.filter(function(item,index){
			return item.betItem == 'H';
		})[0];
		if(it.result[0].indexOf('T') >= 0)oddsList.push({odds:Tie.odds,maxCount:Tie.maxCount,comm:Tie.comm});
		if(it.result[0].indexOf('L') >= 0)oddsList.push({odds:Long.odds,maxCount:Long.maxCount,comm:Long.comm});
		if(it.result[0].indexOf('H') >= 0)oddsList.push({odds:He.odds,maxCount:He.maxCount,comm:He.comm});
		if(oddsList.length > 0){
			odds = oddsList[0].odds;
			maxCount = oddsList[0].maxCount;
			comm = oddsList[0].comm;
		}
		if(oddsList.length > 1){
			for(var i = 1; i < oddsList.length; i++){
				if(odds < oddsList[i].odds){
					odds = oddsList[i].odds;
					maxCount = oddsList[i].maxCount;
					comm = oddsList[i].comm;
				}
			}
		}
		it.odds = odds;
		it.maxCount = maxCount;
		it.comm = comm;
	},

	/*前三，中三，后三和值尾数,前三，中三，后三特殊号码*/
	TSHM:function(it){
		var betType = it.betType;
		var filterData = Global.betSetting.LT[Global.betSetting.currentOddsGroup[it.gameCode]].filter(function(item,index){
			return item.betType == betType
		});
		var PN = filterData.filter(function(item,index){
			return item.betItem == 'PAIR'
		})[0];
		var SN = filterData.filter(function(item,index){
			return item.betItem == 'SN'
		})[0];
		var TN = filterData.filter(function(item,index){
			return item.betItem == 'TRI'
		})[0];

		if(it.result[0].join(' ').indexOf('TRI')>=0){
			it.maxCount = TN.maxCount;
			it.odds = TN.odds;
			it.comm = TN.comm;
		}else if(it.result[0].join(' ').indexOf('SN') >=0){
			it.maxCount = SN.maxCount;
			it.odds = SN.odds;
			it.comm = SN.comm;
		}else{
			it.maxCount = PN.maxCount;
			it.odds = PN.odds;
			it.comm = PN.comm;
		}

	},
	//组选和值
	ZXHZ:function(it){
		var betType = it.betType;
		var filterData = Global.betSetting.LT[Global.betSetting.currentOddsGroup[it.gameCode]].filter(function(item,index){
			return item.betType == betType
		});
		var list;
		if(it.result[0].length == 0) return false;
		for(var i = 0; i < it.result[0].length; i++){
			var data = filterData.filter(function(item,index){
				return item.betItem == it.result[0][i]
			})[0];
			if(!list ||　data.odds > list.odds){
				list = {
					maxCount:data.maxCount,
					odds:data.odds,
					comm:data.comm
				}
			}
		}
		it.maxCount = list.maxCount;
		it.odds = list.odds;
		it.comm = list.comm;

	},
	K3_getOdds:function(data,betType){
		var it = BetRuleInstance;
		var filterData = Global.betSetting.K3[Global.betSetting.currentOddsGroup[it.gameCode]].filter(function(item,index){
			return item.betType == betType
		});
		if(it.result[0].length == 1){
			var oneData =  filterData.filter(function(item,index){
				return item.betItem == it.result[0][0]
			})[0];
			it.odds = oneData.odds;
			it.maxCount = oneData.maxCount;
			it.comm = oneData.comm;
		}else if(it.result[0].length > 1){
			var allData = [];
			for(var i = 0; i < it.result[0].length;i++){
				var listData = filterData.filter(function(item,index){
					return item.betItem == it.result[0][i]
				})[0];
				allData.push({odds:listData.odds,maxCount:listData.maxCount,comm:listData.comm})
			}
			allData.sort(Util.sortNumber('desc','odds'));
			it.odds = allData[0].odds;
			it.maxCount = allData[0].odds;
			it.comm = allData[0].odds;
		}
	},
	BDW:function(it){
		var betType = it.betType;
		var filterData = Global.betSetting.HL11x5[Global.betSetting.currentOddsGroup[it.gameCode]].filter(function(item,index){
			return item.betType == betType
		});
		if(it.result[0].length == 1){
			var oneData =  filterData.filter(function(item,index){
				return item.betItem == it.result[0][0]
			})[0];
			it.odds = oneData.odds
		}else if(it.result[0].length > 1){
			var allData = [];
			for(var i = 0; i < it.result[0].length;i++){
				var listData = filterData.filter(function(item,index){
					return item.betItem == it.result[0][i]
				})[0];
				allData.push({odds:listData.odds,maxCount:listData.maxCount,comm:listData.comm})
			}
			allData.sort(Util.sortNumber('desc','odds'));
			it.odds = allData[0].odds;
			it.maxCount = allData[0].odds;
			it.comm = allData[0].odds;
		}
	}
};
Global = {
    //投注区变量
    betZoneData: [],

    //玩法设置集合
    betSetting: {},

    //市场列表信息
    marketList: [{
        id: 'cqssc',
        gameCode: 'LT',
        market: 'CQ',
        marketCNName: '重庆时时彩',
        drawNumLength: 3
    }, {
        id: 'tjssc',
        gameCode: 'LT',
        market: 'TJ',
        marketCNName: '天津时时彩',
        drawNumLength: 3
    }, {
        id: 'xjssc',
        gameCode: 'LT',
        market: 'XJ',
        marketCNName: '新疆时时彩',
        drawNumLength: 2
    },
    // {
    //     id: 'jxssc',
    //     gameCode: 'LT',
    //     market: 'JX',
    //     marketCNName: '江西时时彩',
    //     drawNumLength: 3 
    // },
    {
        id: 'sh11x5',
        gameCode: 'HL11x5',
        market: 'SH',
        marketCNName: '上海11选5',
        drawNumLength: 2
    }, {
        id: 'gd11x5',
        gameCode: 'HL11x5',
        market: 'GD',
        marketCNName: '广东11选5',
        drawNumLength: 2
    }, {
        id: 'jx11x5',
        gameCode: 'HL11x5',
        market: 'JX',
        marketCNName: '江西11选5',
        drawNumLength: 2
    }, {
        id: 'sd11x5',
        gameCode: 'HL11x5',
        market: 'SD',
        marketCNName: '山东11选5',
        drawNumLength: 2
    }, {
        id: 'jsk3',
        gameCode: 'K3',
        market: 'JS',
        marketCNName: '江苏快三',
        drawNumLength: 3
    }, {
        id: 'ahk3',
        gameCode: 'K3',
        market: 'AH',
        marketCNName: '安徽快三',
        drawNumLength: 3
    }
    //    , {
    //    id: 'cn3d',
    //    gameCode: 'LT',
    //    market: 'CN3D',
    //    marketCNName: '福彩3D',
    //    drawNumLength: 3
    //}
    ]
};

Local =  {
    "1" : "系统错误！",
    "2" : "无效的请求！",
    "3" : "服务未通过！",
    "5" : "登陆过期！",
    "6" : "权限不足！",
    "7" : "会话过期！",
    "8" : "重复登录！",

    "100" : "请求超时！",
    "101" : "请求限制！",
    "102" : "会员限制！",
    "103" : "程序限制！",
    "104" : "禁止请求！",
    "105" : "参数丢失！",
    "106" : "无效的参数！",
    "107" : "重复的会话号！",
    "1000" : "请求超时！",

    "11101" : "余额不足！",
    "11102" : "停止投注！",
    "11103" : "该玩法暂不支持！",
    "11104" : "投注信息不完整！",
    "11105" : "帐号资料异常！",
    "11106" : "彩期不存在！",
    "11107" : "重复请求 ！",
    "11108" : "赔率已改变！",
    "11110" : "超出下注限制范围！",
    "11121" : '记录不存在',
    "11122" : '重复提交，您点的太快了',
    "11123" : '取消失败',

    "50010" : "账户不存在!",
    "50100" : "账户不存在!",
    "50101" : "账户未激活!",
    "50102" : "账户被限制交易!",
    "50103" : "账户被暂停交易!",
    "50104" : "账户验证失败!",
    "50110" : "余额不足!",
    "50111" : "超过最大交易额!",
    "50112" : "货币无效!",
    "50113" : "金额无效!"

};
$(function() {

    (function init(callback) {
        var acctId = Util.getQueryString("acctId");
        var sessionId = Util.getQueryString("sid");
        var token = Util.getQueryString("token");
        acctId = (acctId == null || acctId == "") ? "test_player" : acctId;
        var req = {
            /* acctId: "TESTPLAYER17@TEST",*/
            acctId: sessionId == null ?acctId:null,
            passwd: sessionId == null ?"000000":null,
            sessionId: sessionId,
            token: token
        };
        app.overlay.show();
        app.overlay.showImg();
        service.login(req, function(res) {
            if (res.code == 0) {
                var marketInfo = Global.marketList[0],
                    gameCode = marketInfo.gameCode,
                    market = marketInfo.market,
                    lottorySocketName = gameCode + '_' + market + '_' + 'LottorySocket';
                app[lottorySocketName] = new lottorySocket(marketInfo.gameCode, marketInfo.market);
                app.lottorySocketNames.add(lottorySocketName);
                app.currentSocket = app[lottorySocketName];
                app.currentSocket.prepare();
            }
        });
    })();

    function lottorySocket(gameCode, market) {
        this.gameCode = gameCode;
        this.market = market;
    }

    //所有非交互性的socket请求放在此处
    lottorySocket.prototype.prepare = function() {
        window.req2resTimeArr = [];
        this.queryAcctInfo();
        this.queryHotAndNewMarket();
        this.queryServerTimeAndMarket(this.gameCode, this.market, 5);
        this.queryLotteryTimeLine(this.gameCode, this.market);
        this.queryGameSetting(this.gameCode);
    }

    //获取用户信息
    lottorySocket.prototype.queryAcctInfo = function() {
        var that = this;
        var lotteryModule;
        service.queryAcctInfo({}, function(res) {
            if (res.code == 0) {
                var acct = res.acct;
                var header = $('.bet .nav-title');
                header.find('.user').attr('title', acct.acctName);
                app.money = Util.addDotToNumber(acct.balance, 4);
                header.find('.money').text(app.money);
                header.find('.name').text(acct.acctName);
                app.features.forEach(function(name, index){
                    app[name].comfirmBet.zone.find('.balance').text(app.money);
                });
            }
        });
    }

    //获取市场状态
    lottorySocket.prototype.queryHotAndNewMarket = function(){
        var that = this;
        var list;

        service.queryHotAndNew({},function(res){
            var marketObj;
            if (res.code == 0) {
                list = res.list;
                list.forEach(function(item, index) {
                    marketObj = app.tree.items.filter(function(treeItem, index) {
                        return treeItem.opt.type == item.gameCode && treeItem.opt.market == item.market;
                    });

                    if (marketObj.length > 0) {
                        if (item.iHot) marketObj[0].zone.find('.status:eq(0)').addClass('hot');
                        if (item.iNew) marketObj[0].zone.find('.status:eq(1)').addClass('new');
                    }
                });
            }    
        });
    }

    //获取服务器时间和市场信息
    lottorySocket.prototype.queryServerTimeAndMarket = function(gameCode, market, requstTimes) {
        var that = this;
        var t1 = (new Date()).getTime(),
            t2 = 0;
        service.queryServerTime({}, function(res) {
            t2 = (new Date()).getTime();
            if (res.code == 0) {
                if (requstTimes > 0) {
                    window.req2resTimeArr.push(t2 - t1);
                    requstTimes--;
                    that.queryServerTimeAndMarket(gameCode,market,requstTimes);
                }else{
                    window.req2resTimeArr.push(t2 - t1);
                    var serverTime = window.req2resTimeArr.reduce(function(prev, cur) {
                        return prev + cur; }) / (2 * 6) + res.timeMillis;
                    window.serverTime = serverTime;
                    window.jetLag = serverTime - t2; //服务器与本地时间差
                    that.queryMarket(gameCode, market, false);
                                      
                }
            }
        });
    }

    //获取市场信息
    lottorySocket.prototype.queryMarket = function(gameCode, market, isNextDraw) {
        var that = this;
        var req = { gameCode: gameCode, market: market };
        service.queryDrawInfo(req, function(res) {
            if (res.code == 0) {
                var data = res.list;
                if (data[0] && !data[0].marketClosed) {
                    that.drawData = data[0];
                    if (that.isPrevDraw(data[0])) that.drawData = data[0].nextDraw;
                    that.marketStatus = true;
                    if (!isNextDraw)
                        that.startCountDownTime(gameCode, market, that.drawData);
                } else {
                    //没有数据 市场关闭
                    this.marketStatus = false;
                    app.marketCloseNotice(market, 5000);
                }
            }
        });
    }

    //判断刚进来时是不是取的上一期draw的数据
    lottorySocket.prototype.isPrevDraw = function(data){
        var that = this;
        var beginTimeSerials = Util.getDateByDateString(data.beginTime).getTime(),
            closeTimeSerials = Util.getDateByDateString(data.closeTime).getTime(),
            endTimeSerials = Util.getDateByDateString(data.endTime).getTime();
            currentTimeSerials = new Date().getTime() + window.jetLag;

        var flag = (closeTimeSerials < currentTimeSerials) ? true : false;

        if (flag) {
            var timeoutId = setInterval(function(){
                currentTimeSerials = new Date().getTime() + window.jetLag;
                if (currentTimeSerials > endTimeSerials) {
                    that.queryMarket(that.gameCode, that.market, true);
                    clearInterval(timeoutId);
                }
            },1000);   
        }

        return flag;
    }

    //启动倒计时
    lottorySocket.prototype.startCountDownTime = function(gameCode, market, data) {
        this.drawData = data;

        var beginTimeSerials = Util.getDateByDateString(data.beginTime).getTime(),
            closeTimeSerials = Util.getDateByDateString(data.closeTime).getTime(),
            endTimeSerials = Util.getDateByDateString(data.endTime).getTime();

        var countdownTimeData = {
            beginTimeSerials: beginTimeSerials,
            closeTimeSerials: closeTimeSerials,
            endTimeSerials: endTimeSerials,
            market: market,
            gameCode: gameCode
        }
        PubSub.publish('onBindCountTime', countdownTimeData);
    }

    //启动倒计时 同时看是否需要获取下一期彩期
    lottorySocket.prototype.nextDraw = function(gameCode, market, data, isNextDraw, endtime2closetime) {
        var that = this;
        this.startCountDownTime(gameCode, market, data);

        if (isNextDraw) {
            //endtime结束 10秒后取下一期数据
            setTimeout(function() {
                that.queryMarket(gameCode, market, isNextDraw);
            }, 10000 + endtime2closetime);
        }
    }

    lottorySocket.prototype.queryLotteryTimeLine = function(gameCode, market) {
        var req = { gameCode: gameCode, market: market };
        var $timeLineTarget = null;
        var currentLottery = app.getLotteryByMarket(market, gameCode);
        service.queryResultList(req, function(res) {
            if (res.code == 0) {
                var data = res.list;
                currentLottery.timeline.data = data;
                currentLottery.timeline.dataFormatter(gameCode, market);
                currentLottery.timeline.evalWidth();
                $timeLineTarget = $(currentLottery.timeline.createEvents());
                currentLottery.timeline.zone.find(".events-wrapper").html($timeLineTarget.html());

                //当前中奖号码
                if (data.length > 0) {
                    if (gameCode == 'LT' || gameCode == 'K3')
                        currentLottery.lotteryBall.data = data[0].result.replace(/\[|\]/g, '').split('');
                    else if (gameCode == 'HL11x5')
                        currentLottery.lotteryBall.data = data[0].result.replace(/\[|\]/g, '').split(',');

                    currentLottery.lotteryBall.lastIssue = data[0].number;
                    currentLottery.lotteryBall.requestLastNumber();
                }
            }
        });
    }

    lottorySocket.prototype.queryGameSetting = function(gameCode) {
        service.queryGameSetting({}, function(res) {
            if (res.code == 0) {
                $('.bet').css('visibility', 'visible');
                app.overlay.hide();
                app.overlay.hideImg();
                Global.betSetting = res.map;
                Global.betSetting.oddsGroups = res.availableGroup;
                Global.betSetting.currentOddsGroup = {
                    LT: res.availableGroup['LT'][0],
                    HL11x5: res.availableGroup['HL11x5'][0],
                    K3: res.availableGroup['K3'][0]
                };
                window.BetRuleInstance = new BetRule(app.currentModule.playingNav.currentMethodId, gameCode);
            }
        });
    }

    lottorySocket.prototype.bindLottoryData = function() {
        var gameCode = this.gameCode;
        var market = this.market;
        var lotteryModule;
        this.queryMarket(gameCode, market, false);
        this.queryLotteryTimeLine(gameCode, market);
        lotteryModule = app.getLotteryByMarket(market, gameCode);
        lotteryModule.comfirmBet.zone.find('.balance').text(app.money);
    }

    window.lottorySocket = lottorySocket;

});

OriginalItemObj = {

    LT:{
        //万千百十个
        WQBSG_item:[
            'N5P',
            'N5C',
            'N4P',
            'N4C',
            'N3PF',
            'N3CF',
            'N3PM',
            'N3CM',
            'N3PL',
            'N3CL',
            'N2PL',
            'N2PF',
            "N1",
            "A2P",
            "A3P",
            "A4P"
        ],
        //龙虎和大小单双,//趣味
        LHTDXDS_item:[
            "BSOEL2",
            "BSOEL3",
            "BSOEF2",
            "BSOEF3",
            "BSOEM3",
            "LH54",
            "LH53",
            "LH52",
            "LH51",
            "LH43",
            "LH42",
            "LH41",
            "LH32",
            "LH31",
            "LH21",
            "F5N3",
            "F4N3",
            "F3N2L",
            "F3N2F",
            "F3N2M",
            "R5N3",
            "R4N3",
            "R3N2L",
            "R3N2F",
            "R3N2F"
        ],
        //任选
        RX_item:[

            "A2S",
            "A2T",
            "A2G2",
            "A2G2S",
            "A2G2T",

            "A3S",
            "A3T",
            "A3G3X3",
            "A3G3X3S",
            "A3G3X6",
            "A3G3X6S",
            "A3G3MX",
            "A3G3T",

            "A4S",
            "A4G4X24",
            "A4G4X12",
            "A4G4X6",
            "A4G4X4"
        ],
        //单式
        DX_item:[
            'N5S',
            'G5X120',
            'N4S',
            'G4X24',
            'N3SF',
            'N3TF',
            'N3DF',
            'G3X3F',
            'G3X6F',
            'G3MXF',
            'G3TF',
            'G3X3SF',
            'G3X6SF',
            'G3BF',
            'S3TDF',
            'S3SF',
            'N3SM',
            'N3TM',
            'N3DM',
            'G3X3M',
            'G3X6M',
            'G3MXM',
            'G3TM',
            'G3X3SM',
            'G3X6SM',
            'G3BM',
            'S3TDM',
            'S3SM',
            'N3SL',
            'N3TL',
            'N3DL',
            'G3X3L',
            'G3X6L',
            'G3MXL',
            'G3TL',
            'G3X3SL',
            'G3X6SL',
            'G3BL',
            'S3TDL',
            'S3SL',
            'N2SL',
            'N2TL',
            'N2DL',
            'N2SF',
            'N2TF',
            "N2DF",
            "G2L",
            "G2SL",
            "G2TL",
            "G2BL",
            "G2F",
            "G2SF",
            "G2TF",
            "G2BF",
            "A1L3",
            "A2L3",
            "A1F3",
            "A2F3",
            "A1M3",
            "A2M3",
            "A1L4",
            "A2L4",
            "A2N5",
            "A3N5",
            "SA1",
            "SA2",
            "SA3",
            "SA4"
        ],
        //二重号-单号
        ZXR_item:[
            'G5X60',
            'G5X30',
            'G5X20',
            'G5X10',
            'G5X5',
            'G4X6',
            'G4X4',
            'G4X12'
        ]
    },
    /****************************************11x5**********************************************************/
    //复式
    //11x5直选复式
    HL11x5:{
        ZXFS11x5_item:[
            'N3PH',
            'N2PH',
            'P3'


        ],
        //单式
        DS11x5_item:[
            'N3SH',
            'G3SH',
            'N2SH',
            'G2SH',
            'A1S',
            'A2S',
            'A3S',
            'A4S',
            'A5S',
            'A6S',
            'A7S',
            'A8S'
        ],
        //胆拖
        DT11x5_item:[
            'G3BH',
            'G2BH',
            'A2B',
            'A3B',
            'A4B',
            'A5B',
            'A6B',
            'A7B',
            'A8B'
        ],
        //前三  //前二
        QSQE11x5_item:[
            'G3H',
            'A1H3',
            'G2H'
        ],
        //任选复式
        RXFS11x5_item:[
            'A1',
            'A2',
            'A3',
            'A4',
            'A5',
            'A6',
            'A7',
            'A8'
        ],
        QW11x5_item:[
            'FOEC'
        ],
        CZW11x5_item:[
            'FMN'
        ]
    },
    /**************************快三*************************************/
    K3:{
        K3_item:[
            'N3T',
            'N3D',
            'N3TRI',
            'N3SN',
            'N3PAIR',
            'N2D',
            'N1'
        ]
    }
};
OriginalItem = {
    text:function(data){
        var betType;
        var gameCode;
        var functionName;
        betType = data.betType;
        gameCode = data.gameCode;
        functionName = this.createFunction(betType,gameCode);
        return	this[functionName](data)
    },
    //获取对应玩法的方法
    createFunction: function(betType,gameCode) {
        var functionName = "";
        for (var i in OriginalItemObj[gameCode]) {
            if ($.inArray(betType, OriginalItemObj[gameCode][i]) > -1) {
                functionName = i;
                break;
            }
        }
        return functionName.replace('_item', '');
    },
    ballNameMap:function(str){
        var list = {};
        var selectStr = ["Big", "Small", "Odd", "Even", "L", "H", "T", "TRI", "PAIR", "SN", "5th", "4th", "3rd", "2nd", "1st", "R1", "R2", "R3", "R4", "R5",'O5E0','O4E1','O3E2','O2E3','O1E4','O0E5'];
        var convertStr = ["大", "小", "单", "双", "龙", "虎", "和", "豹子", "对子", "顺子", "万", "千", "百", "十", "个", "一区", "二区", "三区", "四区", "五区",'5单0双','4单1双','3单2双','2单3双','1单4双','0单5双'];
        for(var i = 0;i < selectStr.length; i++){
            list[selectStr[i]] = convertStr[i]
        }
        var numList = str.replace(/,/g, "&&").split('&&');
        for(var x = 0; x< numList.length;x++){
            if(isNaN(numList[x])){
                if(numList[x].indexOf('|') >= 0){
                    numList[x] = numList[x].replace(/[ | ]/g, " ").split(' ');
                    for(var m = 0; m < numList[x].length; m++){
                        if(isNaN(numList[x][m])){
                            numList[x][m] = list[numList[x][m]]
                        }
                    }
                    numList[x] = numList[x].join('|');
                }else if(numList[x].indexOf('>') >= 0){
                    numList[x] = numList[x].replace(/[ > ]/g, " ").split(' ');
                    for(var m = 0; m < numList[x].length; m++){
                        if(isNaN(numList[x][m])){
                            numList[x][m] = list[numList[x][m]]
                        }
                    }
                    numList[x] = numList[x].join('>');
                }else if(!list[numList[x]]){
                    numList[x] = numList[x];
                }else{
                    numList[x] = list[numList[x]]
                }
            }
        }
        return numList.toString();
    },
    getTextFSWQBSG:function(selection){
        var text = '';
        for(var i = 0; i < selection.length; i++){
            var betItem = selection[i].betItem.toString();
            var drawType = selection[i].drawType;
            if(drawType == '5th')
                text += '万位：'+ betItem +"<br/>";
            else if(drawType == '4th')
                text += '千位：'+ betItem + '<br/>';
            else if(drawType == '3rd')
                text += '百位：'+ betItem +'<br/>';
            else if(drawType == '2nd')
                text += '十位：'+ betItem +'<br/>';
            else if(drawType == '1st')
                text += '个位：'+ betItem +'<br/>';
            else
                text += betItem;
        }
        return text;
    },
    getOrder:function(data){
        var list = data.split(',');
        list.sort(function(a,b){
            return b.substr(0, 1) - a.substr(0, 1)
        });
        return list.join(",");
    },
    getTextZX:function(selection,nameList){
        var text = '';
        for(var i = 0; i < selection.length; i++){
            var betItem = selection[i].betItem.toString();
            text += nameList[i] + ':' + betItem + "<br/>"
        }
        return text
    },
    getTextLHH:function(selection){
        var text = '';
        for(var i = 0; i < selection.length; i++){
            text += selection[i].betItem.toString()
        }
        text = this.ballNameMap(text);
        return text;
    },
    //复式
    WQBSG:function(data){
        var selection = JSON.parse(data.selection);
        var text = this.getTextFSWQBSG(selection);
        return text;
    },
    //单式
    DX:function(data){
        return this.ballNameMap(data.betNumber)
    },
    //二重号-单号
    ZXR:function(data){
        var nameList = [
            ['二重号','单号'],
            ['三重号','单号'],
            ['三重号','二重号'],
            ['四重号','单号'],
            ['二重号'],
        ];
        var betTypelist = [
            ['G5X60','G5X30','G4X12','A4G4X12'],//二重号-单号
            ['G5X20','G4X4','A4G4X4'],//三重号-单号
            ['G5X10'],//三重号-二重号
            ['G5X5'],//四重号-单号
            ['G4X6','A4G4X6']//二重号
        ];
        var num;
        for(var i = 0; i< betTypelist.length; i++){
            if(betTypelist[i].indexOf(data.betType) >= 0){
                num = i;
                break;
            }
        }
        var selection = JSON.parse(data.selection);
        return this.getTextZX(selection,nameList[num])
    },
    //龙虎和大小单双//趣味
    LHTDXDS:function(data){
        var selection = JSON.parse(data.selection);
        for(var i = 0; i< selection.length; i++){
            for(var x = 0; x< selection[i].betItem.length; x++){
                selection[i].betItem[x] = this.ballNameMap(selection[i].betItem[x])
            }
        };
        var text = this.getTextFSWQBSG(selection);
        return text;
    },
    //任选
    RX:function(data){
        var text = '';
        var list = ['A4G4X12','A4G4X4','A4G4X6'];
        var selection = JSON.parse(data.selection);
        var drawType = data.drawType;
        drawType =  this.getOrder(data.drawType);
        text += this.ballNameMap(drawType) + '<br/>';
        if(list.indexOf(data.betType)>=0){
            text += this.ZXR(data);
        }else{
            text += this.ballNameMap(data.betNumber)
        }
        return text ;
    },
    ZXFS11x5:function(data){
        var text = '';
        var selection = JSON.parse(data.selection);
        for(var i = 0; i < selection.length; i++){
            if(i == 0) text +='一位：'+selection[i].betItem.toString()+'<br/>';
            if(i == 1) text +='二位：'+selection[i].betItem.toString()+'<br/>';
            if(i == 2) text +='三位：'+selection[i].betItem.toString()+'<br/>';
        }
        return text;
    },
    DS11x5:function(data){
        var text = '';
        var selection = JSON.parse(data.selection);
        for(var  i = 0; i < selection.length; i++){
            for(var x = 0; x < selection[i].betItem.length; x++){
                text += selection[i].betItem[x] + '|'
            }
        }
        return text.substring(0,text.length -1);
    },
    DT11x5:function(data){
        var text = '';
        var selection = JSON.parse(data.selection);
        for(var i = 0; i < selection.length; i++){
            if(i == 0) text +='胆码：'+selection[i].betItem.toString()+'<br/>';
            if(i == 1) text +='拖码：'+selection[i].betItem.toString()+'<br/>';
        }
        return text;
    },
    QSQE11x5:function(data){
        var text = '';
        var selection = JSON.parse(data.selection);
        if(data.betType == 'G2H'){
            text += '前二：'+selection[0].betItem.toString()+'<br/>';
        }else{
            text += '前三：'+selection[0].betItem.toString()+'<br/>';
        }

        return text;
    },
    RXFS11x5:function(data){
        var text = '';
        var b;
        var selection = JSON.parse(data.selection);
        var a = data.betType.substring(1,2);
        if(a >5){
            b = 5;
        }else{
            b = a;
        }
        text += '任'+a+'选'+b+'：'+selection[0].betItem.toString()+'<br/>';
        return text;
    },
    //定单双
    QW11x5:function(data){
        var text = '';
        var selection = JSON.parse(data.selection);
        for(var i = 0; i < selection[0].betItem.length; i++){
            if(selection[0].betItem[i] == 'O5E0') text += '5单0双' +',';
            if(selection[0].betItem[i] == 'O4E1') text += '4单1双' +',';
            if(selection[0].betItem[i] == 'O3E2') text += '3单2双' +',';
            if(selection[0].betItem[i] == 'O2E3') text += '2单3双' +',';
            if(selection[0].betItem[i] == 'O1E4') text += '1单4双' +',';
            if(selection[0].betItem[i] == 'O0E5') text += '0单5双' +','
        }
        return text.substring(0,text.length -1)
    },
    CZW11x5:function(data){
        var text = '';
        var selection = JSON.parse(data.selection);
        text += '猜中位：'+selection[0].betItem.toString()+'<br/>';
        return text;
    },
    K3:function(data){
        var text = '';
        var selection = JSON.parse(data.selection);
        var betItem = selection[0].betItem.toString()
        var betType = data.betType;
        switch (betType) {
            case 'N3T':
                text = '合值：'+betItem;
                break;
            case 'N3D':
                text = '三不同号：'+betItem;
                break;
            case 'N3TRI':
                text = '三同号：'+betItem;
                break;
            case 'N3SN':
                text = '三连号：'+betItem;
                break;
            case 'N3PAIR':
                text = '二同号：'+betItem;
                break;
            case 'N2D':
                text = '二不同号：'+ betItem;
                break;
            case 'N1':
                text = '单挑一骰：'+ betItem;
                break;
            default: return
        }
        return text;
    }
};
$(function() {

    // Kickout = -1;
    // AcctInfoUpdated = -3;
    // OddsChanged = -5;
    // PushNotice = -7;
    // MarketOpen = -9;
    // MarketClosed = -10;
    // DrawClosed = -11;
    // DrawAward = -12;
    //当市场开启了 才处理它的推送消息

    PushMessage = {

        marketOpen: function() {
            service.bindPushEvent(-9, function(res) {
                if (res.market == app.currentSocket.market) {
                    app.noticeDialog.show({
                        subTitle: '市场开启',
                        text: '当前市场已经重新开启，可以重新下注',
                        buttonName: '确定',
                        autoHide: true,
                        timeout: 5000
                    });

                    //市场开启 请求市场数据
                    app.currentSocket.bindLottoryData();
                } else {
                    var lottorySocketName = res.gameCode + '_' + res.market + '_' + 'LottorySocket';
                    if ($.inArray(lottorySocketName, app.lottorySocketNames) > -1)
                        app[lottorySocketName].bindLottoryData();
                }
            });
            return this;
        },

        marketClose: function() {
            service.bindPushEvent(-10, function(res) {
                if (res.market == app.currentSocket.market) {
                    //激活的当前市场 给市场关闭提示
                    app.marketCloseNotice(res.market, 5000);

                    //清空倒计时状态栏
                    var li = app.tree.zone.find('li[market=' + res.market + ']');
                    app.tree.clearItemStatus(li);
                } else {
                    //激活的市场 如果收到的关闭市场的消息 则将当前市场改为未激活状态
                    var lottorySocketName = res.gameCode + '_' + res.market + '_' + 'LottorySocket';
                    if ($.inArray(lottorySocketName, app.lottorySocketNames) > -1) {
                        app.tree.zone
                            .find("li[market=" + res.market + "][lotter-type=" + res.gameCode + "]")
                            .children('.cancel')
                            .trigger('click');
                    }
                }
            });
            return this;
        },

        drawClose: function() {
            service.bindPushEvent(-11, function(res) {


            });
            return this;
        },

        drawAward: function() {
            service.bindPushEvent(-12, function(res) {
                var gameCode = res.gameCode;
                var market = res.market;
                var lottorySocketName = gameCode + '_' + market + '_' + 'LottorySocket';
                var length;
                if ($.inArray(lottorySocketName, app.lottorySocketNames) > -1) {
                    var $timeLineTarget;
                    var currentLottery = app.getLotteryByMarket(market, gameCode);
                    var timelineLength = currentLottery.timeline.data.length;
                    var timelineFirstDrawNumber;
                    var timelineLastDrawNumber;
                    if (timelineLength > 0) {
                        timelineFirstDrawNumber = currentLottery.timeline.data[0].drawNumber;
                        timelineLastDrawNumber = currentLottery.timeline.data[currentLottery.timeline.data.length - 1].drawNumber;
                    }
                    //新开的中奖号码
                    if (timelineLength == 0 || parseInt(res.drawNumber) > parseInt(timelineFirstDrawNumber)) {
                        if (gameCode == 'LT' || gameCode == 'K3')
                            currentLottery.lotteryBall.data = res.result.replace(/\[|\]/g, '').split('');
                        else if (gameCode == 'HL11x5')
                            currentLottery.lotteryBall.data = res.result.replace(/\[|\]/g, '').split(',');

                        length = Global.marketList.filter(function(item, index, array) {
                            return item.gameCode == gameCode && item.market == market;
                        })[0].drawNumLength;
                        length = 0 - length;
                        currentLottery.lotteryBall.lastIssue = res.drawNumber.slice(length);
                        currentLottery.lotteryBall.requestLastNumber();

                        var timeLineList = currentLottery.timeline.data;
                        var addObj = {
                            number: currentLottery.lotteryBall.lastIssue.slice(length),
                            result: res.result.replace(/\[|\]/g, '').toString(),
                            drawNumber: res.drawNumber
                        };
                        currentLottery.timeline.data.unshift(addObj); //添加到首位
                        currentLottery.timeline.data = timeLineList = timeLineList.length > 15 ? timeLineList.slice(0, 15) : timeLineList;
                        currentLottery.timeline.evalWidth();
                        $timeLineTarget = $(currentLottery.timeline.createEvents());
                        currentLottery.timeline.zone.find(".events-wrapper").html($timeLineTarget.html());
                    } else if (parseInt(res.drawNumber) <= parseInt(timelineFirstDrawNumber) && parseInt(res.drawNumber) >= parseInt(timelineLastDrawNumber)) {
                        var timelineData = currentLottery.timeline.data;
                        var rollbackData = timelineData.filter(function(item, index) {
                            return item.drawNumber == res.drawNumber;
                        })[0];

                        if (rollbackData) {
                            rollbackData.result = res.result.replace(/\[|\]/g, '').toString();
                            currentLottery.timeline.evalWidth();
                            $timeLineTarget = $(currentLottery.timeline.createEvents());
                            currentLottery.timeline.zone.find(".events-wrapper").html($timeLineTarget.html());

                            //如果rollback的彩期是最新的彩期  则更新lotteryball
                            if (res.drawNumber == timelineData[0].drawNumber) {
                                if (gameCode == 'LT' || gameCode == 'K3')
                                    currentLottery.lotteryBall.data = res.result.replace(/\[|\]/g, '').split('');
                                else if (gameCode == 'HL11x5')
                                    currentLottery.lotteryBall.data = res.result.replace(/\[|\]/g, '').split(',');

                                length = Global.marketList.filter(function(item, index, array) {
                                    return item.gameCode == gameCode && item.market == market;
                                })[0].drawNumLength;
                                length = 0 - length;
                                currentLottery.lotteryBall.lastIssue = res.drawNumber.slice(length);
                                currentLottery.lotteryBall.requestLastNumber();
                            }
                        }
                    }
                    if (app.bettingRecords && app.bettingRecords.isOpen()) {
                        if (app.bettingRecords.type == 1) {
                            app.bettingRecords.getBetHistory();
                        } else {
                            app.bettingRecords.getChaseHistory();
                        }
                    }

                }
            });
            return this;
        },

        acctInfoUpdate: function() {
            service.bindPushEvent(-3, function(res) {
                var currentLottery = app.currentSocket;
                currentLottery.queryAcctInfo();
            });
            return this;
        },

        kickoutUser: function() {
            service.bindPushEvent(-1, function(res) {

            });
            return this;
        },

        oddsChange: function() {
            service.bindPushEvent(-5, function(res) {

            });
            return this;
        },

        pushNotice: function() {
            service.bindPushEvent(-7, function(res) {

            });
            return this;
        }

    };

    PushMessage
        .marketOpen()
        .marketClose()
        .drawClose()
        .drawAward()
        .acctInfoUpdate();

    //没隔5分钟取一次balance
    setTimeout(function(argument) {
        setInterval(function() {
            var currentLottery = app.currentSocket;
            currentLottery.queryAcctInfo();
        }, 1000 * 60 * 5);
    }, 1000 * 60 * 5);



});

$(function () {
    var HL11X5_BetTypeObj = {

        //前三 前二 直选复式
        ZSFS_betType:[
            "N3PH",
            "N2PH"
        ],
        //前三组选复式 G3H
        QSZUXFS_betType:[
            "G3H",
        ],
        //前二组选复式 G2H
        QEZUXFS_betType:[
            "G2H"
        ],

        //不定位 A1H3 趣味型 任选一中一复式A1
        BDWQWRXY_betType:[
            "A1H3",
            "FOEC",
            "FMN",
            "A1"
        ],
        //定位胆 P3
        DWD_betType:[
            "P3"
        ],
        //任选二中二复式  到  任选八中五复
        RXXZXFS_betType:[
            "A2",
            "A3",
            "A4",
            "A5",
            "A6",
            "A7",
            "A8"
        ],
        //任选胆拖
        RXREZEDT_betType:[
            'A2B',
            'A3B',
            'A4B',
            'A5B',
            'A6B',
            'A7B',
            'A8B',
            "G3BH",
            "G2BH"
        ],
        //单式
        DX_betType:[
            'N3SH',
            'G3SH',
            'N2SH',
            'G2SH',
            'A1S',
            'A2S',
            'A3S',
            'A4S',
            'A5S',
            'A6S',
            'A7S',
            'A8S'

        ]
    };
    //前三 前二 直选复式 N3PH
    var ZSFS =function(data,betType){
        var count = 0;
        var a = data[0];
        var b = data[1];
        var c = data[2];
        for(var i = 0;i < a.length; i++){
            for(var x = 0;x < b.length; x++){
                if(a[i] != b[x]){

                    if(typeof c == "undefined"){
                        count ++;
                    }else{
                        for(var y = 0;y < c.length; y++){
                            if(b[x] != c[y] && c[y] != a[i]){
                                count ++;
                            }
                        }
                    }
                }
            }
        }
        return count;
    };
    //任选胆拖
    var RXREZEDT = function(data,betType){
        var count = 0;
        var num = parseInt(betType.substring(1,2));
        var y = num - data[0].length;
        var x = data[1].length;
        if (data[0].length ==  0) return 0;
        count = Util.rangeCount(x,y);
        return count;
    };
    //单式
    var  DX = function(data,betType){
        var error = '';
        var text = '';
        var it = BetRuleInstance;
        var num = parseInt(betType.substring(1,2));
        var count = 0;
        var numList = ['01','02','03','04','05','06','07','08','09','10','11'];
        var str = data[0];
        str = str.replace(/[\n]/g,'|').replace(/[,，；;|]/g,'|');
        var list = str.split('|');
        for(var i = 0; i < list.length; i++){
            var a = list[i].split(" ");
            var d = [];
            for(var m = a.length -1 ; m >= 0;m-- ){
                if(a[m] == '')a.splice(m,1);
            }
            for(var x = 0; x < a.length; x++){
                if(numList.indexOf(a[x]) < 0 || d.indexOf(a[x]) >= 0){
                    error += a.join(' ');
                    break
                }else{
                    d.push(a[x])
                }
                if(x == num-1 && x ==  a.length - 1){
                    text += a.join(' ') + '|';
                    count ++
                }
            }
        }
        it.errorBetText_6 = error == '' ?undefined:error;
        it.result[0] = text.substring(0,text.length-1).split('|');
        return count;
    };
    //前三组选复式 G3H
    var QSZUXFS = function(data){
        var count = 0;
        if(data[0].length>=3){
            count = Math.abs(Util.rangeCount(data[0].length,3));
        }
        return count;
    };
    //前二组选复式 G2H
    var QEZUXFS = function(data){
        var count = 0;
        if(data[0].length >= 2){

            count = Math.abs(Util.rangeCount(data[0].length,data[0].length - 2));
        }
        return count;
    };
    //不定位 A1H3 趣味型 任选一中一复式A1
    var BDWQWRXY =function(data,betType){
        var count = 0;
        if(data[0].length > 0){
            count = data[0].length;
        }
        return count;
    };
    //定位胆 P3
    var  DWD = function(data){
        var count = 0;
        count = data[0].length + data[1].length + data[2].length;
        return count;
    };
    //任选二中二复式 A2
    var  RXXZXFS = function(data,betType){
        var count = 0;
        var x = betType.toString().substr(1,2);
        if(data[0].length >= x){
            count = Math.abs(Util.rangeCount(data[0].length,data[0].length - x));
        }
        return count;
    };
    function HL11X5_BetAlgorithm(){
        this.HL11X5_BetTypeObj = HL11X5_BetTypeObj;
        this.ZSFS = ZSFS;
        this.RXREZEDT = RXREZEDT;
        this.DX = DX;
        this.QSZUXFS = QSZUXFS;
        this.QEZUXFS = QEZUXFS;
        this.BDWQWRXY = BDWQWRXY;
        this.DWD = DWD;
        this.RXXZXFS = RXXZXFS;
    };
    HL11X5_BetAlgorithm.prototype = new IBetAlgorithm(HL11X5_BetTypeObj);
    window.HL11X5_BetAlgorithm = new HL11X5_BetAlgorithm();
});

//11选5玩法
var RULE_CONFIG = (RULE_CONFIG || []).concat([

    //三码
    {
        betType: 'N3PH',
        gameCode: 'HL11x5',
        name: '前三直选复式',
        dataFormatter: [
            [],
            [],
            []
        ],
        plateType: 10,
        title: "三码-直选-前三直选复式",
        selectMethod: "从第一位、第二位、第三位中至少各选择1个号码",
        winningRule: "从01-11共11个号码中选择3个不重复的号码组成一注，所选号码与当期顺序摇出的5个号码中的前3个号码相同，且顺序一致，即为中奖。"
    }, {
        betType: 'N3SH',
        gameCode: 'HL11x5',
        name: '前三直选单式',
        dataFormatter: [
            []
        ],
        plateType: 2,
        title: "三码-直选-前三直选单式",
        selectMethod: "手动输入至少3个号码组成一注",
        winningRule: "手动输入3个号码组成一注，所输入的号码与当期顺序摇出的5个号码中的前3个号码相同，且顺序一致，即为中奖。",
        betRuleTip: "格式范例：01 02 03|03 04 05|07 08 11"
    },

    {
        betType: 'G3H',
        gameCode: 'HL11x5',
        name: '前三组选复式',
        dataFormatter: [
            []
        ],
        plateType: 10,
        title: "三码-组选-前三组选复式",
        selectMethod: "从01-11中任意选择3个或3个以上号码",
        winningRule: "从01-11中共11个号码中选择3个号码，所选号码与当期顺序摇出的5个号码中的前3个号码相同，顺序不限，即为中奖。"
    }, {
        betType: 'G3SH',
        gameCode: 'HL11x5',
        name: '前三组选单式',
        dataFormatter: [
            []
        ],
        plateType: 2,
        title: "三码-组选-前三组选单式",
        selectMethod: "手动输入至少3个号码组成一注",
        winningRule: "手动输入3个号码组成一注，所输入的号码与当期顺序摇出的5个号码中的前3个号码相同，顺序不限，即为中奖。",
        betRuleTip: "格式范例：01 02 03|03 04 05|07 08 11"
    }, {
        betType: 'G3BH',
        gameCode: 'HL11x5',
        name: '前三组选胆拖',
        dataFormatter: [
            [],
            []
        ],
        plateType: 10,
        selectDataLength: [2],
        title: "三码-组选-前三组选胆拖",
        selectMethod: "从01-11中，选取3个或3个以上号码进行投注，胆码个数=1个或2个，胆码加拖码个数≥3个",
        winningRule: "分别从胆码和拖码的01-11中，选取3个及以上的号码进行投注，胆码个数=1个或2个，胆码加拖码个数≥3个，所选单注号码与当期顺序摇出的5个号码中的前3个号码相同，顺序不限，即为中奖。"
    },

    //二码
    {
        betType: 'N2PH',
        gameCode: 'HL11x5',
        name: '前二直选复式',
        dataFormatter: [
            [],
            []
        ],
        plateType: 10,
        title: "二码-直选-前二直选复式",
        selectMethod: "从第一位、第二位中至少各选择1个号码",
        winningRule: "从01-11共11个号码中选择2个不重复的号码组成一注，所选号码与当期顺序摇出的5个号码中的前2个号码相同，且顺序一致，即中奖。"
    }, {
        betType: 'N2SH',
        gameCode: 'HL11x5',
        name: '前二直选单式',
        dataFormatter: [
            []
        ],
        plateType: 2,
        title: "二码-直选-前二直选单式",
        selectMethod: "手动输入号码，至少输入1个两位数号码组成一注",
        winningRule: "手动输入2个号码组成一注，所输入的号码与当期顺序摇出的5个号码中的前2个号码相同，且顺序一致，即为中奖。",
        betRuleTip: "格式范例：01 02|03 04|07 08"
    },

    {
        betType: 'G2H',
        gameCode: 'HL11x5',
        name: '前二组选复式',
        dataFormatter: [
            []
        ],
        plateType: 10,
        title: "二码-组选-前二组选复式",
        selectMethod: "从01-11中任意选择2个或2个以上号码",
        winningRule: "从01-11中共11个号码中选择2个号码，所选号码与当期顺序摇出的5个号码中的前2个号码相同，顺序不限，即为中奖。"
    }, {
        betType: 'G2SH',
        gameCode: 'HL11x5',
        name: '前二组选单式',
        dataFormatter: [
            []
        ],
        plateType: 2,
        title: "二码-组选-前二组选单式",
        selectMethod: "手动输入号码，至少输入1个两位数号码组成一注",
        winningRule: "手动输入2个号码组成一注，所输入的号码与当期顺序摇出的5个号码中的前2个号码相同，顺序不限，即为中奖。",
        betRuleTip: "格式范例：01 02|03 04|07 08"
    }, {
        betType: 'G2BH',
        gameCode: 'HL11x5',
        name: '前二组选胆拖',
        dataFormatter: [
            [],
            []
        ],
        plateType: 10,
        selectDataLength: [1],
        title: "二码-组选-前二组选胆拖",
        selectMethod: "从01-11中，选取2个或2个以上号码进行投注，胆码个数=1个，胆码加拖码个数≥2个",
        winningRule: "分别从胆码和拖码的01-11中，选取2个及以上的号码进行投注，胆码个数=1个，胆码加拖码个数≥2个，所选单注号码与当期顺序摇出的5个号码中的前2个号码相同，顺序不限，即为中奖。"
    },

    //不定式
    {
        betType: 'A1H3',
        gameCode: 'HL11x5',
        name: '前三不定式',
        dataFormatter: [
            []
        ],
        plateType: 10,
        title: "不定位-不定位-前三不定位",
        selectMethod: "从01-11中任意选择1个或1个以上号码",
        winningRule: "从01-11中共11个号码中选择1个号码，每注号码由1个号码组成，只要当期顺利摇出的第一位、第二位、第三位开奖号码中包含所选号码，即为中奖"
    },

    //趣味型
    {
        betType: 'FOEC',
        gameCode: 'HL11x5',
        name: '定单双',
        dataFormatter: [
            []
        ],
        plateType: 9,
        title: "趣味型-趣味型-定单双",
        selectMethod: "从不同的单双组合中任意选择1个或1个以上的组合",
        winningRule: "从6种单双个数组合中选择1种组合，当期开奖号码的单双个数与所选单双组合一致，即为中奖。"
    }, {
        betType: 'FMN',
        gameCode: 'HL11x5',
        name: '猜中位',
        dataFormatter: [
            []
        ],
        plateType: 11,
        title: "趣味型-趣味型-猜中位",
        selectMethod: "从3-9中任意选择1个或1个以上数字",
        winningRule: "从3-9中选择1个号码进行购买，所选号码与5个开奖号码按照大小顺序排列后的第3个号码相同，即为中奖。"
    },

    //定位胆
    {
        betType: 'P3',
        gameCode: 'HL11x5',
        name: '定位胆',
        dataFormatter: [
            [],
            [],
            []
        ],
        plateType: 10,
        title: "定位胆-定位胆-定位胆",
        selectMethod: "从第一位，第二位，第三位任意位置上任意选择1个或1个以上号码",
        winningRule: "从第一位、第二位、第三位任意1个位置或多个位置上选择1个号码，所选号码与相同位置上的开奖号码一致，即为中奖。"
    },

    //任选复式
    {
        betType: 'A1',
        gameCode: 'HL11x5',
        name: '任选一中一复式',
        dataFormatter: [
            []
        ],
        plateType: 10,
        title: "任选复式-任选复式-任选一中一复式",
        selectMethod: "从01-11中任意选择1个或1个以上号码",
        winningRule: "从01-11共11个号码中选择1个号码进行购买，只要当期顺序摇出的5个开奖号码中包含所选号码，即为中奖。"
    }, {
        betType: 'A2',
        gameCode: 'HL11x5',
        name: '任选二中二复式',
        dataFormatter: [
            []
        ],
        plateType: 10,
        title: "任选复式-任选复式-任选二中二复式",
        selectMethod: "从01-11中任意选择2个或2个以上号码",
        winningRule: "从01-11共11个号码中选择2个号码进行购买，只要当期顺序摇出的5个开奖号码中包含所选号码，即为中奖。"
    }, {

        betType: 'A3',
        gameCode: 'HL11x5',
        name: '任选三中三复式',
        dataFormatter: [
            []
        ],
        plateType: 10,
        title: "任选复式-任选复式-任选三中三复式",
        selectMethod: "从01-11中任意选择3个或3个以上号码",
        winningRule: "从01-11共11个号码中选择3个号码进行购买，只要当期顺序摇出的5个开奖号码中包含所选号码，即为中奖。"
    }, {

        betType: 'A4',
        gameCode: 'HL11x5',
        name: '任选四中四复式',
        dataFormatter: [
            []
        ],
        plateType: 10,
        title: "任选复式-任选复式-任选四中四复式",
        selectMethod: "从01-11中任意选择4个或4个以上号码",
        winningRule: "从01-11共11个号码中选择4个号码进行购买，只要当期顺序摇出的5个开奖号码中包含所选号码，即为中奖。"
    }, {

        betType: 'A5',
        gameCode: 'HL11x5',
        name: '任选五中五复式',
        dataFormatter: [
            []
        ],
        plateType: 10,
        title: "任选复式-任选复式-任选五中五复式",
        selectMethod: "从01-11中任意选择5个或5个以上号码",
        winningRule: "从01-11共11个号码中选择5个号码进行购买，只要当期顺序摇出的5个开奖号码中包含所选号码，即为中奖。"
    }, {

        betType: 'A6',
        dataFormatter: [
            []
        ],
        plateType: 10,
        gameCode: 'HL11x5',
        name: '任选六中五复式',
        title: "任选复式-任选复式-任选六中五复式",
        selectMethod: "从01-11中任意选择6个或6个以上号码",
        winningRule: "投注方案：01 02 03 04 05 06；开奖号码包含01 02 03 04 05，顺序不限，即中任六中五一等奖"
    }, {
        betType: 'A7',
        gameCode: 'HL11x5',
        name: '任选七中五复式',
        dataFormatter: [
            []
        ],
        plateType: 10,
        title: "任选复式-任选复式-任选七中五复式",
        selectMethod: "从01-11中任意选择7个或7个以上号码",
        winningRule: "从01-11共11个号码中选择7个号码进行购买，只要当期顺序摇出的5个开奖号码中包含所选号码，即为中奖。"

    }, {
        betType: 'A8',
        gameCode: 'HL11x5',
        name: '任选八中五复式',
        dataFormatter: [
            []
        ],
        plateType: 10,
        title: "任选复式-任选复式-任选八中五复式",
        selectMethod: "从01-11中任意选择8个或8个以上号码",
        winningRule: "从01-11共11个号码中选择8个号码进行购买，只要当期顺序摇出的5个开奖号码中包含所选号码，即为中奖。"
    },

    //任选单式
    {
        betType: 'A1S',
        gameCode: 'HL11x5',
        name: '任选一中一单式',
        dataFormatter: [
            []
        ],
        plateType: 2,
        title: "任选单式-任选单式-任选一中一单式",
        selectMethod: "手动输入号码，从01-11中任意输入1个号码组成一注",
        winningRule: "从01-11中手动输入1个号码进行购买，只要当期摇出的5个开奖号码中包含所输入号码，即为中奖",
        betRuleTip: "格式范例：01|03|07"
    }, {
        betType: 'A2S',
        gameCode: 'HL11x5',
        name: '任选二中二单式',
        dataFormatter: [
            []
        ],
        plateType: 2,
        title: "任选单式-任选单式-任选二中二单式",
        selectMethod: "手动输入号码，从01-11中任意输入2个号码组成一注",
        winningRule: "从01-11中手动输入2个号码进行购买，只要当期摇出的5个开奖号码中包含所输入号码，即为中奖",
        betRuleTip: "格式范例：01 02|03 04|07 08"
    }, {
        betType: 'A3S',
        gameCode: 'HL11x5',
        name: '任选三中三单式',
        dataFormatter: [
            []
        ],
        plateType: 2,
        title: "任选单式-任选单式-任选三中三单式",
        selectMethod: "手动输入号码，从01-11中任意输入3个号码组成一注",
        winningRule: "从01-11中手动输入3个号码进行购买，只要当期摇出的5个开奖号码中包含所输入号码，即为中奖",
        betRuleTip: "格式范例：01 02 03|03 04 05|07 08 11"
    }, {
        betType: 'A4S',
        gameCode: 'HL11x5',
        name: '任选四中四单式',
        dataFormatter: [
            []
        ],
        plateType: 2,
        title: "任选单式-任选单式-任选四中四单式",
        selectMethod: "手动输入号码，从01-11中任意输入4个号码组成一注",
        winningRule: "从01-11中手动输入4个号码进行购买，只要当期摇出的5个开奖号码中包含所输入号码，即为中奖",
        betRuleTip: "格式范例：01 02 03 04|05 06 07 08"
    }, {
        betType: 'A5S',
        gameCode: 'HL11x5',
        name: '任选五中五单式',
        dataFormatter: [
            []
        ],
        plateType: 2,
        title: "任选单式-任选单式-任选五中五单式",
        selectMethod: "手动输入号码，从01-11中任意输入5个号码组成一注",
        winningRule: "从01-11中手动输入5个号码进行购买，只要当期摇出的5个开奖号码中包含所输入号码，即为中奖",
        betRuleTip: "格式范例：01 02 03 04 05|04 05 06 07 08"
    }, {
        betType: 'A6S',
        gameCode: 'HL11x5',
        name: '任选六中五单式',
        dataFormatter: [
            []
        ],
        plateType: 2,
        title: "任选单式-任选单式-任选六中五单式",
        selectMethod: "手动输入号码，从01-11中任意输入6个号码组成一注",
        winningRule: "从01-11中手动输入6个号码进行购买，只要当期摇出的5个开奖号码中包含所输入号码，即为中奖",
        betRuleTip: "格式范例：01 02 03 04 05 06|03 04 05 06 07 08"
    }, {
        betType: 'A7S',
        gameCode: 'HL11x5',
        name: '任选七中五单式',
        dataFormatter: [
            []
        ],
        plateType: 2,
        title: "任选单式-任选单式-任选七中五单式",
        selectMethod: "手动输入号码，从01-11中任意输入7个号码组成一注",
        winningRule: "从01-11中手动输入7个号码进行购买，只要当期摇出的5个开奖号码中包含所输入号码，即为中奖",
        betRuleTip: "格式范例：01 02 03 04 05 06 07|02 03 04 05 06 07 08"
    }, {
        betType: 'A8S',
        gameCode: 'HL11x5',
        name: '任选八中五单式',
        dataFormatter: [
            []
        ],
        plateType: 2,
        title: "任选单式-任选单式-任选八中五单式",
        selectMethod: "手动输入号码，从01-11中任意输入8个号码组成一注",
        winningRule: "从01-11中手动输入8个号码进行购买，只要当期摇出的5个开奖号码中包含所输入号码，即为中奖",
        betRuleTip: "格式范例：01 02 03 04 05 06 07 08|02 03 04 05 06 07 08 09"
    },

    //任选胆拖
    {
        betType: 'A2B',
        gameCode: 'HL11x5',
        name: '任选二中二胆拖',
        dataFormatter: [
            [],
            []
        ],
        plateType: 10,
        selectDataLength: [1],
        title: "任选胆拖-任选胆拖-任选二中二胆拖",
        selectMethod: "从01-11中，选取2个及以上的号码进行投注，每注需至少包括1个胆码及1个拖码",
        winningRule: "从01-11共11个号码中选择2个及以上号码进行投注，每注需至少包括1个胆码及1个拖码。只要当期顺序摇出的5个号码中包含所选单注号码，即为中奖"
    }, {
        betType: 'A3B',
        gameCode: 'HL11x5',
        name: '任选三中三胆拖',
        dataFormatter: [
            [],
            []
        ],
        plateType: 10,
        selectDataLength: [2],
        title: "任选胆拖-任选胆拖-任选三中三胆拖",
        selectMethod: "从01-11中，选取3个及以上的号码进行投注，每注需至少包括1个胆码及2个拖码",
        winningRule: "从01-11共11个号码中选择3个及以上号码进行投注，每注需至少包括1个胆码及2个拖码。只要当期顺序摇出的5个号码中包含所选单注号码，即为中奖"
    }, {
        betType: 'A4B',
        gameCode: 'HL11x5',
        name: '任选四中四胆拖',
        dataFormatter: [
            [],
            []
        ],
        plateType: 10,
        selectDataLength: [3],
        title: "任选胆拖-任选胆拖-任选四中四胆拖",
        selectMethod: "从01-11中，选取4个及以上的号码进行投注，每注需至少包括1个胆码及3个拖码",
        winningRule: "从01-11共11个号码中选择4个及以上号码进行投注，每注需至少包括1个胆码及3个拖码。只要当期顺序摇出的5个号码中包含所选单注号码，即为中奖"
    }, {
        betType: 'A5B',
        gameCode: 'HL11x5',
        name: '任选五中五胆拖',
        dataFormatter: [
            [],
            []
        ],
        plateType: 10,
        selectDataLength: [4],
        title: "任选胆拖-任选胆拖-任选五中五胆拖",
        selectMethod: "从01-11中，选取5个及以上的号码进行投注，每注需至少包括1个胆码及4个拖码",
        winningRule: "从01-11共11个号码中选择5个及以上号码进行投注，每注需至少包括1个胆码及4个拖码。只要当期顺序摇出的5个号码中包含所选单注号码，即为中奖"
    }, {
        betType: 'A6B',
        gameCode: 'HL11x5',
        name: '任选六中五胆拖',
        dataFormatter: [
            [],
            []
        ],
        plateType: 10,
        selectDataLength: [5],
        title: "任选胆拖-任选胆拖-任选六中五胆拖",
        selectMethod: "从01-11中，选取6个及以上的号码进行投注，每注需至少包括1个胆码及5个拖码",
        winningRule: "从01-11共11个号码中选择6个及以上号码进行投注，每注需至少包括1个胆码及5个拖码。只要当期顺序摇出的5个号码中包含所选单注号码，即为中奖"
    }, {
        betType: 'A7B',
        gameCode: 'HL11x5',
        name: '任选七中五胆拖',
        dataFormatter: [
            [],
            []
        ],
        plateType: 10,
        selectDataLength: [6],
        title: "任选胆拖-任选胆拖-任选七中五胆拖",
        selectMethod: "从01-11中，选取7个及以上的号码进行投注，每注需至少包括1个胆码及6个拖码",
        winningRule: "从01-11共11个号码中选择7个及以上号码进行投注，每注需至少包括1个胆码及6个拖码。只要当期顺序摇出的5个号码中包含所选单注号码，即为中奖"
    }, {
        betType: 'A8B',
        gameCode: 'HL11x5',
        name: '任选八中五胆拖',
        dataFormatter: [
            [],
            []
        ],
        plateType: 10,
        selectDataLength: [7],
        title: "任选胆拖-任选胆拖-任选八中五胆拖",
        selectMethod: "从01-11中，选取8个及以上的号码进行投注，每注需至少包括1个胆码及7个拖码",
        winningRule: "从01-11共11个号码中选择8个及以上号码进行投注，每注需至少包括1个胆码及7个拖码。只要当期顺序摇出的5个号码中包含所选单注号码，即为中奖"
    }
]);

$(function() {
    var placeBetObj = {
        //11x5直选复式
        ZXFS11x5_bet: [
            'N3PH',
            'N2PH',
            'P3'
        ],
        //胆拖
        DS11x5_bet: [
            'N3SH',
            'G3SH',
            'N2SH',
            'G2SH',
            'A1S',
            'A2S',
            'A3S',
            'A4S',
            'A5S',
            'A6S',
            'A7S',
            'A8S'
        ],

        //胆拖
        DT11x5_bet: [
            'G3BH',
            'G2BH',
            'A2B',
            'A3B',
            'A4B',
            'A5B',
            'A6B',
            'A7B',
            'A8B'
        ],

        //猜中位,任选复式，前三复式
        RXFS11x5_bet: [
            'FMN',
            'FOEC',
            'A1',
            'A2',
            'A3',
            'A4',
            'A5',
            'A6',
            'A7',
            'A8',
            'G3H',
            'G2H',
            'A1H3',
        ]
    }

    //11x5 复式
    var getBet11x5Item = function(bet) {
        var list = BetRuleInstance.result;
        var item = [];
        var a = '';
        for (var i = 0; i < list.length; i++) {
            if(list[i].length != 0){
                if (i == 0) a = '1';
                if (i == 1) a = '2';
                if (i == 2) a = '3';
                item.push({
                    betItem: list[i],
                    drawType: a
                });
            }
        }
        return item;
    }

    //复式
    var ZXFS11x5 = function(bet, state) {
        var data = this.getCommonData();
        data.items = this.getBet11x5Item(bet);
        if (state) {
            return data;
        } else {
            this.commitBet(data);
        }
    }

    //单式
    var DS11x5 = function(bet, state) {
        var data = this.getCommonData();
        data.items = [{
            "betItem": BetRuleInstance.result[0],
            "drawType": bet
        }];
        if (state) {
            return data;
        } else {
            this.commitBet(data);
        }
    }

    //胆拖
    var DT11x5 = function(bet, state) {
        var data = this.getCommonData();
        data.items = [{
            "betItem": BetRuleInstance.result[0],
            "drawType": 'Banker'
        }, {
            "betItem": BetRuleInstance.result[1],
            "drawType": 'Ball'
        }];
        if (state) {
            return data;
        } else {
            this.commitBet(data);
        }
    }

    //猜中位,任选复式，前三复式
    var RXFS11x5 = function(bet, state) {
        var data = this.getCommonData();
        data.items = [{
            "betItem": BetRuleInstance.result[0],
            "drawType": bet
        }];
        if (state) {
            return data;
        } else {
            this.commitBet(data);
        }
    }

    function HL11x5_PlaceBet() {
        this.getBet11x5Item     =   getBet11x5Item;
        this.ZXFS11x5           =   ZXFS11x5;
        this.DS11x5             =   DS11x5;
        this.DT11x5             =   DT11x5;
        this.RXFS11x5           =   RXFS11x5;
    }

    HL11x5_PlaceBet.prototype = new IPlaceBet(placeBetObj);
    window.HL11x5_PlaceBet = new HL11x5_PlaceBet();
});

function IBetAlgorithm(BetTypeObj){
	this.BetTypeObj = BetTypeObj
}

IBetAlgorithm.prototype.getCount = function(data,betType){
	var it = BetRuleInstance;
	var count = 0,
		opt;
	var betTimes = parseInt(app.currentModule.modelZone.bettingTimes.zone.find('input').val());
	var functionName = this.createFunction(betType);
	if (this[functionName]){
		count = this[functionName](data, betType);
		it.betCount = count;
	};
	opt = this.getModelZoneData(count, betTimes);
	it.setModelZoneData(count, opt.winMoney, opt.returnMoney, opt.totalMoney, betTimes);
	it.changeBtnClass();
};
IBetAlgorithm.prototype.getModelZoneData = function(count, betTimes) {
	var it = BetRuleInstance;
	var totalMoney = it.betUnit * betTimes * count;
	var returnMoney = totalMoney * it.comm;
	var winMoney = totalMoney == 0 ? 0 : (totalMoney * it.odds / count / 2);
	it.betAmount = totalMoney;
	it.multiple = betTimes;

	return {
		totalMoney: totalMoney,
		returnMoney: returnMoney,
		winMoney: winMoney
	};
};
IBetAlgorithm.prototype.createFunction =  function(betType) {
	var functionName = "";
	for (var i in this.BetTypeObj) {
		if ($.inArray(betType, this.BetTypeObj[i]) > -1) {
			functionName = i;
			break;
		}
	}
	return functionName.replace('_betType', '');
};
function IPlaceBet(placeBetObj) {
    this.placeBetObj = placeBetObj;
}

//下注OR添加到投注篮
IPlaceBet.prototype.bet = function(state, betType) {
    var functionName;
    var it = BetRuleInstance;
    functionName = this.createFunction(betType);
    if (state) {
        return this[functionName](betType, state)
    } else {
        this[functionName](betType, state);
    }
}

//获取下注方法
IPlaceBet.prototype.createFunction = function(betType) {
    var functionName = "";
    for (var i in this.placeBetObj) {
        if ($.inArray(betType, this.placeBetObj[i]) > -1) {
            functionName = i;
            break;
        }
    }
    return functionName.replace('_bet', '');
}

//移除投注篮对应数据
IPlaceBet.prototype.removeZoneData = function(it) {
    var serialNo = it.serialNo;
    if (serialNo) {
        var gameCode = app.currentSocket.gameCode;
        var market = app.currentSocket.market;
        var $bettingOrder = app.currentModule.bettingOrder.zone;
        var trolleyZoneData = Global.betZoneData.filter(function(item, index) {
            return market == item.market && gameCode == item.gameCode;
        })[0];
        var index = 0;
        for (var i = 0; i < trolleyZoneData.data.length; i++) {
            if (trolleyZoneData.data[i][12] == serialNo) {
                index = i;
                break;
            }
        }
        $bettingOrder.find('.cancel:eq(' + index + ')').trigger('click');
    }
};

//投注
IPlaceBet.prototype.commitBet = function(data) {
    var that = this;
    var it = BetRuleInstance;
    var modelZone = app.currentModule.modelZone;
    if(app.currentModule.playingNav.parentPlate2){
        var isType = app.currentModule.playingNav.parentPlate2.clearErrorModel(function(){
            that.commitBet(data);
        });
        if(isType == '1') return false;
    }
    modelZone.betNowButton.inProgress();
    service.placeBet(data, function(res) {
        if (res.code == 0) {
            app.money = Util.addDotToNumber(res.balance, 4);
            var header = $('.bet .nav-title');
            if(header.find('.secret').children('a').text() == '隐藏'){
                header.find('.money').text(app.money);
            }
            app.features.forEach(function(name, index){
                app[name].comfirmBet.zone.find('.balance').text(app.money);
            });
            app.noticeDialog.show({
                subTitle: "投注成功",
                text: "投注成功",
                buttonName: "确定",
                autoHide: true,
                timeout: 3000
            });
            that.clearDataAndSelect(it);
            modelZone.showDot(1);
        } else {
            app.noticeDialog.show({
                subTitle: "投注失败",
                text: Local[res.code],
                buttonName: "确定",
                autoHide: true,
                timeout: 3000
            });
        }
        modelZone.betNowButton.recover();
    });
}

//清空数据和选择状态  仅适合时时彩和11选5
IPlaceBet.prototype.clearDataAndSelect = function(it) {
    var playingNav = app.currentModule.playingNav;
    playingNav.zone.find('.ball-item').removeClass('selected');
    playingNav.zone.find('.operation-item').removeClass('selected');
    playingNav.zone.find('.fun-ball-item').removeClass('selected');
    playingNav.zone.find('.zone-ball-item').removeClass('selected');
    playingNav.zone.find('.input-plate').children('textarea').val("");
    for (var i = 0; i < it.result.length; i++) {
        it.result[i] = [];
    }
    playingNav.showUnitGroup();
    this.removeZoneData(it);
    it.serialNo = undefined;
    it.betCount = 0;
    it.betAmount = 0;
    it.setModelZoneData(0, 0, 0, 0, 1);
    it.changeBtnClass();
}

//获得Data 其它通用的参数
IPlaceBet.prototype.getCommonData = function() {
    var it = BetRuleInstance;
    var commonBetData = {
        "betType": it.betType,
        "market": app.currentSocket.market,
        "gameCode": app.currentSocket.gameCode,
        "drawId": app.currentSocket.drawData.drawId,
        "betAmount": it.betAmount,
        "odds": it.odds,
        "comm": it.comm,
        "multiple": it.multiple,
        "betCount": it.betCount,
        "betUnit": it.betUnit,
        "prizeGroup": Global.betSetting.currentOddsGroup[it.gameCode]
    };
    return commonBetData;
}

$(function(){
    var K3_BetTypeObj = {
        //前三 前二 直选复式
        K3_betType:[
            'N3T',
            'N3D',
            'N3TRI',
            'N3SN',
            'N3PAIR',
            'N2D',
            'N1'
        ]
    };
    var K3 = function(data,betTyep){
        return data[0].length;
    };
    function K3_BetAlgorithm(){
        this.K3 = K3;
    }
    K3_BetAlgorithm.prototype = new IBetAlgorithm(K3_BetTypeObj);
    window.K3_BetAlgorithm = new K3_BetAlgorithm();
})

//快3
var RULE_CONFIG = (RULE_CONFIG || []).concat([

    //和值
    {
        betType: 'N3T',
        gameCode: 'K3',
        name: '和值',
        dataFormatter: [
            []
        ],
        plateType: '12',
        title: "快3-快3-和值",
        selectMethod: '至少选择1个和值（3个号码之和）',//15.60
        winningRule: "至少选择1个和值（3个号码之和）进行投注，所选和值与开奖的3个号码的和值相同即中奖"
    },

    //三不同号
    {
        betType: 'N3D',
        gameCode: 'K3',
        name: '三不同号',
        dataFormatter: [
            []
        ],
        plateType: '13-1',
        title: "快3-快3-三不同号",
        selectMethod: '对所有3不同号进行单选或多选',//70.20
        winningRule: "对所有3不同号进行单选或多选，选号与开奖号相同（顺序不限）即中奖"
    },

    //三同号
    {
        betType: 'N3TRI',
        gameCode: 'K3',
        name: '三同号',
        dataFormatter: [
            []
        ],
        plateType: '13-2',
        title: "快3-快3-三同号",
        selectMethod: '豹子号（111，222，333，444，555，666）进行单选或通选',//421.20
        winningRule: "对豹子号（111，222，333，444，555，666）进行单选或通选投注，选号与开奖号相同即中奖"
    },

    //三连号
    {
        betType: 'N3SN',
        gameCode: 'K3',
        name: '三连号',
        dataFormatter: [
            []
        ],
        plateType: '13-3',
        title: "快3-快3-三连号",
        selectMethod: '3个相连的号码（123，234，345，456)进行单选或多选',//70.20
        winningRule: "对所有3个相连的号码（123，234，345，456)进行单选或多选投注，选号与开奖号相同（顺序不限）即中奖"
    },

    //二不同号
    {
        betType: 'N2D',
        gameCode: 'K3',
        name: '二不同号',
        dataFormatter: [
            []
        ],
        plateType: '13-4',
        title: "快3-快3-二不同号",
        selectMethod: '2不同号进行单选或多选',//14.04
        winningRule: "对所有2不同号进行单选或多选，选号与开奖号中任意2个号码相同即中奖"
    },

    //二同号
    {
        betType: 'N3PAIR',
        gameCode: 'K3',
        name: '二同号',
        dataFormatter: [
            []
        ],
        plateType: '13-5',
        title: "快3-快3-二同号",
        selectMethod: '选择1对相同号码和1个不同号码',//140.40
        winningRule: "选择1对相同号码和1个不同号码进行单选或者多选投注，选号与开奖号相同（顺序不限）即中奖"
    },

    //单挑一骰
    {
        betType: 'N1',
        gameCode: 'K3',
        name: '单挑一骰',
        dataFormatter: [
            []
        ],
        plateType: '14',
        title: "快3-快3-单挑一骰",
        selectMethod: '选择1个或者多个骰号',//4.63
        winningRule: "选择1个或者多个骰号，如果开奖号码中包含该号（顺序不限）即中奖"
    }

]);

$(function() {
    var placeBetObj = {
        //11x5直选复式
        K3_bet: [
            'N3T',
            'N3D',
            'N3TRI',
            'N3SN',
            'N3PAIR',
            'N2D',
            'N1'
        ]
    };

    var clearDataAndSelect = function(it) {
        clearSelect(it);
        this.removeZoneData(it);
        it.result[0] = [];
        it.serialNo = undefined;
        it.betCount = 0;
        it.betAmount = 0;
        it.setModelZoneData(0, 0, 0, 0, 1);
        it.changeBtnClass();
    };

    var clearSelect = function(it) {
        var plateType = it.ruleData.plateType;
        var currentPlate = app.currentModule.playingNav.currentPlate;
        if (plateType == '12') {
            currentPlate.zone.find('[data-value]').removeClass('selected');
        } else {
            var images = currentPlate.zone.find('img');
            for (var i = 0; i < images.length; i++) {
                currentPlate.setImageDeactive($(images[i]));
            }
            currentPlate.zone.find('li').removeClass('active');
        };
    };

    var K3 = function(bet, state) {
        var data = this.getCommonData();
        data.items = [{
            "betItem": BetRuleInstance.result[0],
            "drawType": bet
        }];
        if (state) {
            return data;
        } else {
            this.commitBet(data);
        }
    }

    function K3_PlaceBet(){
        this.clearDataAndSelect =   clearDataAndSelect;
        this.K3                 =   K3;
    }

    K3_PlaceBet.prototype = new IPlaceBet(placeBetObj);
    window.K3_PlaceBet = new K3_PlaceBet();
});

$(function(){
    var LT_BetTypeObj = {
        //五星、四星、前三、中三、后三的直选复式
        //二星直选 ---> 后二复式  前二复式
        ZSFS_betType: [
            'N5P',
            'N4P',
            'N3PF',
            'N3PM',
            'N3PL',
            'N2PL',
            'N2PF'
        ],

        //五星、四星、前三、中三、后三的直选组合
        ZSZH_betType: [
            'N5C',
            'N4C',
            'N3CF',
            'N3CM',
            'N3CL'
        ],

        //五星组选,四星组选
        ZSDCH_betType: [
            'G5X120',
            'G5X60',
            'G5X30',
            'G5X20',
            'G5X10',
            'G5X5',

            'G4X24',
            'G4X12',
            'G4X6',
            'G4X4'
        ],

        //前三，中三，后三直选合值
        QSZXHZ_betType: [
            'N3TF',
            'N3TM',
            'N3TL'
        ],

        //前三，中三，后三直选跨度
        QSKD_betType: [
            'N3DF',
            'N3DM',
            'N3DL'
        ],

        //前三，中三，后三组三
        QSZS_betType: [
            'G3X3F',
            'G3X3M',
            'G3X3L'
        ],

        //前三，中三，后三组六
        QSZL_betType: [
            'G3X6F',
            'G3X6M',
            'G3X6L'
        ],

        //前三，中三，后三组选合值
        QSHZ_betType: [
            'G3TF',
            'G3TM',
            'G3TL'
        ],

        /*前三，中三，后三包胆*/
        QSBD_betType: [
            'G3BF',
            'G3BM',
            'G3BL'
        ],

        /*前三，中三，后三和值尾数,前三，中三，后三特殊号码*/
        //后三,前三，中三一码不定式
        //四星一码不定式
        //趣味 --->  一帆风顺、好事成双、三星报喜、四季发财
        QSHZWS_QSTSHM_betType: [
            'S3TDF',
            'S3SF',
            'S3TDM',
            'S3SM',
            'S3TDL',
            'S3SL',

            'A1L3',
            'A1F3',
            'A1M3',
            'A1L4',

            'SA1',
            'SA2',
            'SA3',
            'SA4'
        ],


        /*两星 直选 后二跨度,前二跨度*/
        EXZXEKD_betType: [
            'N2DL',
            'N2DF'
        ],
        /*两星 直选 (后二和值,前二和值) 组选(后二和值,前二和值)*/
        LXHZ_betType: [
            'N2TL',
            'N2TF',
            'G2TL',
            'G2TF'
        ],
        /*两星 组选  后二包胆 前二包胆*/
        LXBD_betType: [
            'G2BL',
            'G2BF'
        ],


        /*一星定位胆*/
        YXDWD_betType: [
            'N1'
        ],

        //后三，前三，中三二码不定式
        //四星二码不定式
        //五星二码不定式
        //二星 ---> 组选 ---> 后二复式  前二复式
        BDS_betType: [
            'A2L3',
            'A2F3',
            'A2M3',
            'A2L4',
            'A2N5',
            'A3N5',

            'G2L',
            'G2F'
        ],

        //大小单双
        DXDS_betType: [
            'BSOEL2',
            'BSOEL3',
            'BSOEF2',
            'BSOEF3',
            'BSOEM3'
        ],

        //趣味区间
        QWQJ_betType: [
            'F5N3',
            'F4N3',
            'F3N2L',
            'F3N2F',
            'F3N2M',
            'R5N3',
            'R4N3',
            'R3N2L',
            'R3N2F',
            'R3N2M'
        ],

        //龙虎和
        LHH_betType: [
            'LH54',
            'LH53',
            'LH52',
            'LH51',
            'LH43',
            'LH42',
            'LH41',
            'LH32',
            'LH31',
            'LH21'
        ],
        //任选2,3,4--直选复式
        RXZXFS_betType: [
            'A2P',
            'A3P',
            'A4P'
        ],
        //任选2,3--直选合值
        RXZXHZ_betType: [
            'A2T',
            'A3T'
        ],
        //任选2,3--组选复式，组三复式,组六复式
        RXFS_betType: [
            'A2G2',
            'A3G3X3',
            'A3G3X6'
        ],
        //任选2,3--组选合值
        RXHZ_betType: [
            'A2G2T',
            'A3G3T'
        ],
        //任选24--组选24  12 6
        RXSZX_betType: [
            'A4G4X24',
            'A4G4X12',
            'A4G4X6',
            'A4G4X4'
        ],

        //直选单式

        //不含对子号，重复号（不管顺序即 12 = 21）去掉
        ZXEXDS2_betType: [
            'G2SL', //二星组选后二单式
            'G2SF', //二星组选前二单式
            'A2G2S' //任选二组选单式
        ],
        //2个号相同，不含豹子号,重复号（不管顺序即 123 = 132 = 321）去掉
        ZXDSS_betType: [
            'G3X3SF', //前三组三单式
            'G3X3SM', //中三组三单式
            'G3X3SL', //后三组三单式
            'A3G3X3S' //任选三组三单式
        ],
        //3个号都不相同，重复号（不管顺序即 123 = 132 = 321）去掉
        ZXDS3ZL_betType: [
            'G3X6SF', //前三组六单式
            'G3X6SM', //中三组六单式
            'G3X6SL', //后三组六单式
            'A3G3X6S' //任三组六单式
        ],

        //重复号（不管顺序即 123 = 132 = 321）去掉，不含豹子号
        ZXHH3_betType: [
            'G3MXF', //前三混合组选
            'G3MXM', //中三混合组选
            'G3MXL', //后三混合组选
            'A3G3MX' //任三混合组选
        ],
        ZXDS4And5_betType: [
            'N5S', //5星直选单式
            'N4S', //4星直选单式
            'A4S', //任四直选单式
            'N3SF', //前三直选单式
            'N3SM', //中三直选单式
            'N3SL', //后三直选单式
            'A3S', //任选三直选单式
            'N2SL', //二星直选后二单式
            'N2SF', //二星直选前二单式
            'A2S' //任选二直选单式
        ]
    };
    //直选复式
    var  ZSFS = function(data, betType) {
        var count = 1;
        for (var i = 0; i < data.length; i++) {
            count *= data[i].length;
        }
        return count;

    };
    //直选组合
    var ZSZH = function(data) {
        var count = 1;
        for (var i = 0; i < data.length; i++) {
            count *= data[i].length;
        }
        return count * data.length;
    };
    //组选多重号
   var ZSDCH = function(data, type) {
        var count = 1;
        var d0Length,
            d1Length,
            d2Length,
            d3Length,
            d4Length;

        data[0] && (d0Length = data[0].length);
        data[1] && (d1Length = data[1].length);
        data[2] && (d2Length = data[2].length);
        data[3] && (d3Length = data[3].length);
        data[4] && (d4Length = data[4].length);

        if (type == 'G5X120') { // 五星组选120
            count = Util.rangeCount(data[0].length, 5);
        }
        if (type == 'G5X60') { //五星组选60
            var sameBallCount = Util.sameBallCount(data[0], data[1]);
            var value1 = Util.rangeCount(d0Length, 1);
            var value2 = Util.rangeCount(d1Length, 3);
            var value3 = sameBallCount * value2 * (1 - (Util.rangeCount(d1Length - 1, 3) / value2));
            count = value1 * value2 - value3;
            count = isNaN(count) ? 0 : count;
        }
        if (type == 'G5X30') { //五星组选30
            var sameBallCount = Util.sameBallCount(data[0], data[1]);
            var value1 = Util.rangeCount(d0Length, 2);
            var value2 = Util.rangeCount(d1Length, 1);
            var value3 = sameBallCount * value1 * (1 - (Util.rangeCount(d0Length - 1, 2) / value1));
            count = value1 * value2 - value3;
            count = isNaN(count) ? 0 : count;
        }
        if (type == 'G5X20' || type == 'G4X12') { //五星组选20  四星组选12
            var sameBallCount = Util.sameBallCount(data[0], data[1]);
            var value1 = Util.rangeCount(d0Length, 1);
            var value2 = Util.rangeCount(d1Length, 2);
            var value3 = sameBallCount * value2 * (1 - (Util.rangeCount(d1Length - 1, 2) / value2));
            count = value1 * value2 - value3;
            count = isNaN(count) ? 0 : count;
        }
        if (type == 'G5X10' || type == 'G5X5' || type == 'G4X4') { //五星组选10 五星组选5  四星组选4
            var sameBallCount = Util.sameBallCount(data[0], data[1]);
            var value1 = Util.rangeCount(d0Length, 1);
            var value2 = Util.rangeCount(d1Length, 1);
            var value3 = sameBallCount * value2 * (1 - (Util.rangeCount(d1Length - 1, 1) / value2));
            count = value1 * value2 - value3;
            count = isNaN(count) ? 0 : count;
        }

        if (type == 'G4X24') { //四星组选24
            count = Util.rangeCount(data[0].length, 4);
        }
        if (type == 'G4X6') { //四星组选6
            count = Util.rangeCount(data[0].length, 2);
        }

        return Math.round(count);
    };
    //前三，中三，后三直选和值
   var QSZXHZ = function(data) {
        var count = 0;
        for (var i = 0; i < 10; i++) {
            for (var m = 0; m < 10; m++) {
                for (var n = 0; n < 10; n++) {
                    for (var x = 0; x < data[0].length; x++) {
                        if (i + m + n == data[0][x]) {
                            count += 1;
                        }
                    }
                }
            }
        }
        return count;
    };
    //前三，中三，后三跨度
   var QSKD = function(data) {
        var count = 0;
        for (var i = 0; i < 10; i++) {
            for (var m = 0; m < 10; m++) {
                for (var n = 0; n < 10; n++) {
                    for (var x = 0; x < data[0].length; x++) {
                        var max = i > m ? i : m;
                        max = max > n ? max : n;
                        var min = i > m ? m : i;
                        min = min > n ? n : min;
                        if (max - min == data[0][x]) {
                            count += 1;
                        }
                    }
                }
            }
        }
        return count;
    };
    //前三，中三，后三组三
   var QSZS = function(data) {
        var count = 0;
        if (data[0].length >= 2) {
            count = Util.rangeCount(data[0].length, 2) * 2;
        }
        return count;
    };
    //前三，中三，后三组六
   var QSZL = function(data) {
        var count = 0;
        if (data[0].length >= 3) {
            count = Util.rangeCount(data[0].length, 3);
        }
        return count;
    };
    //前三，中三，后三组选合值
   var QSHZ = function(data) {
        var count = 0;
        for (var i = 0; i < 10; i++) {
            for (var m = i; m < 10; m++) {
                for (var n = m; n < 10; n++) {
                    for (var x = 0; x < data[0].length; x++) {
                        if (i + m + n == data[0][x]) {
                            if (i == m) {
                                if (m == n) {
                                    break;
                                }
                            }
                            count += 1;
                        }
                    }
                }
            }
        }
        return count;
    };
    /*前三，中三，后三包胆*/
   var QSBD = function(data) {
        var count = 0;
        for (var i = 0; i < 10; i++) {
            for (var j = i; j < 10; j++) {
                for (var k = j; k < 10; k++) {
                    if (i == data[0][0] || j == data[0][0] || k == data[0][0]) {
                        if (i == j && j == k) continue;
                        count += 1;
                    }
                }
            }
        }
        return count;
    };
    /*前三，中三，后三和值尾数,前三，中三，后三特殊号码*/
   var QSHZWS_QSTSHM = function(data,type) {
        var count = 0;
        count = data[0].length;
        return count;
    };
    /*两星 直选 后二跨度 前二跨度*/
   var EXZXEKD = function(data) {
        var count = 0;
        for (var x = 0; x < 10; x++) {
            for (var y = 0; y < 10; y++) {
                var max = x > y ? x : y;
                var min = x > y ? y : x;
                for (var m = 0; m < data[0].length; m++) {
                    if (max - min == data[0][m]) {
                        count += 1;
                    }
                }
            }
        }
        return count;
    };
    /*两星 直选 (后二和值,前二和值) 组选(后二和值,前二和值)*/
   var LXHZ = function(data, type) {
        var count = 0;
        //直选
        if (type == 'N2TL' || type == 'N2TF') {
            for (var x = 0; x < 10; x++) {
                for (var y = 0; y < 10; y++) {
                    for (var j = 0; j < data[0].length; j++) {
                        if (data[0][j] == x + y) {
                            count += 1;
                        }
                    }
                }
            }
        } else {
            for (var x = 0; x < 10; x++) {
                for (var y = x; y < 10; y++) {
                    for (var j = 0; j < data[0].length; j++) {
                        if ((data[0][j] == x + y) && x != y) {
                            count += 1;
                        }
                    }
                }
            }
        }
        return count;
    };
    /*两星 组选  后二包胆 前二包胆*/
   var LXBD = function(data) {
        var count = 0;
        for (var x = 0; x < 10; x++) {
            for (var y = x; y < 10; y++) {
                if (data[0][0] == x || data[0][0] == y) {
                    if (x == y) continue;
                    count += 1;

                }
            }
        }
        return count;
    };
    //一星定胆号
   var YXDWD = function(data) {
        var count = 0;
        for (var i = 0; i < data.length; i++) {
            count += data[i].length;
        }
        return count;
    };
    //后三，前三，中三二码不定式
    //四星二码不定式
    //五星二码不定式  五星三码不定式
   var BDS = function(data, betType) {
        var count = 0;
        if (betType == 'A3N5')
            count = Util.rangeCount(data[0].length, 3);
        else
            count = Util.rangeCount(data[0].length, 2);
        return count;
    };
    //大小单双
   var DXDS = function(data) {
        var count = 1;
        for (var i = 0; i < data.length; i++) {
            if (data[i].length == 0)
                return 0;
            else
                count *= data[i].length;
        }
        return count;
    };
    //趣味 区间
   var QWQJ = function(data) {
        return this.DXDS(data);
    };
    //龙虎和
   var LHH = function(data,type) {
        return this.QSHZWS_QSTSHM(data);
    };
    //任选 2, 3, 4 -直选复式
   var RXZXFS = function(data, betType) {
        var count = 0;
        var zeroTimes = 0;
        if (betType == 'A2P') {
            var allNumLength = data[0].length + data[1].length + data[2].length + data[3].length + data[4].length;
            var repeatTimes = Util.rangeCount(data[0].length, 2) + Util.rangeCount(data[1].length, 2) + Util.rangeCount(data[2].length, 2) + Util.rangeCount(data[3].length, 2) + Util.rangeCount(data[4].length, 2);
            var allPossible = Util.rangeCount(allNumLength, 2);
            count = allPossible - repeatTimes;
        } else if (betType == 'A3P') {
            var num = [
                [0, 1, 2],
                [0, 1, 3],
                [0, 1, 4],
                [0, 2, 3],
                [0, 2, 4],
                [0, 3, 4],
                [1, 2, 3],
                [1, 2, 4],
                [1, 3, 4],
                [2, 3, 4]
            ];
            for (var i = 0; i < num.length; i++) {
                count = count + data[num[i][0]].length * data[num[i][1]].length * data[num[i][2]].length;
            }

        } else if (betType == 'A4P') {
            var num = [
                [0, 1, 2, 3],
                [0, 1, 2, 4],
                [0, 1, 3, 4],
                [0, 2, 3, 4],
                [1, 2, 3, 4],
            ];
            for (var i = 0; i < num.length; i++) {
                count = count + data[num[i][0]].length * data[num[i][1]].length * data[num[i][2]].length * data[num[i][3]].length
            }
        }
        return count;
    };
    //任选2,3--直选合值
    var RXZXHZ = function(data, betType) {
        var count = 0;
        if (betType == 'A2T') {
            var AndValue = 0;
            var probably = Util.rangeCount(data[1].length, 2);
            if (data[0].length > 0 && data[1].length >= 2) {
                for (var i = 0; i < 10; i++) {
                    for (var x = 0; x < 10; x++) {
                        for (var m = 0; m < data[0].length; m++) {
                            if (x + i == parseInt(data[0][m])) {
                                AndValue++;
                            }
                        }
                    }
                }
            } else {
                AndValue = 0
            }
            count = probably * AndValue;
        } else if (betType == 'A3T') {
            var AndValue = 0;
            var probably = Util.rangeCount(data[1].length, 3);
            if (data[0].length > 0 && data[1].length >= 3) {
                for (var i = 0; i < 10; i++) {
                    for (var x = 0; x < 10; x++) {
                        for (var y = 0; y < 10; y++) {
                            for (var m = 0; m < data[0].length; m++) {
                                if (x + i + y == parseInt(data[0][m])) {
                                    AndValue++;
                                }
                            }
                        }
                    }
                }
            } else {
                AndValue = 0
            }
            count = probably * AndValue;
        }

        return count;
    };

    var RXFS = function(data, betType) {
        var count = 0
        if (betType == 'A2G2') {
            var probably = Util.rangeCount(data[1].length, 2);
            if (data[0].length > 0 && data[1].length >= 2) {
                count = Util.rangeCount(data[0].length, 2) * probably;
            }
        } else if (betType == 'A3G3X3') {
            var probably = Util.rangeCount(data[1].length, 3);
            if (data[0].length > 0 && data[1].length >= 3) {
                count = Util.combination(data[0].length, 2) * probably;
            }
        } else if (betType == 'A3G3X6') {
            var probably = Util.rangeCount(data[1].length, 3);
            if (data[0].length > 0 && data[1].length >= 3) {
                count = Util.rangeCount(data[0].length, 3) * probably;
            }
        }
        return count;
    };
    //任选2,3--组选合值
    var RXHZ = function(data, betType) {
        var count = 0;
        if (betType == 'A2G2T') {
            var probably = Util.rangeCount(data[1].length, 2);
            var num = 0;
            for (var i = 0; i < 10; i++) {
                for (var x = i; x < 10; x++) {
                    for (var m = 0; m < data[0].length; m++) {
                        if (x + i == data[0][m] && x != i) {
                            num++;
                        }
                    }
                }
            }
            count = probably * num
        } else if (betType == 'A3G3T') {
            var probably = Util.rangeCount(data[1].length, 3);
            var num = 0;
            for (var i = 0; i < 10; i++) {
                for (var x = i; x < 10; x++) {
                    for (var y = x; y < 10; y++) {
                        for (var m = 0; m < data[0].length; m++) {
                            if (x == i) {
                                if (i == y) {
                                    continue;
                                }
                            }
                            if (x + i + y == data[0][m]) {
                                num++;
                            }
                        }
                    }
                }
            }
            count = probably * num
        }
        return count;
    };
    //任选24--组选24  12 6
    var RXSZX = function(data, betType) {
        var count = 0;
        if (betType == 'A4G4X24') {
            count = Util.rangeCount(data[1].length, 4) * Util.rangeCount(data[0].length, 4)
        } else if (betType == 'A4G4X12') {
            var probably = Util.rangeCount(data[2].length, 4);
            var sameBallCount = Util.sameBallCount(data[0], data[1]);
            var value1 = Util.rangeCount(data[0].length, 1);
            var value2 = Util.rangeCount(data[1].length, 2);
            var value3 = sameBallCount * value2 * (1 - (Util.rangeCount(data[1].length - 1, 2) / value2));
            count = value1 * value2 - value3;
            count = isNaN(count) ? 0 : count * probably;
        } else if (betType == 'A4G4X6') {
            count = Util.rangeCount(data[1].length, 4) * Util.rangeCount(data[0].length, 2)
        } else if (betType == 'A4G4X4') {
            var probably = Util.rangeCount(data[2].length, 4);
            var sameBallCount = Util.sameBallCount(data[0], data[1]);
            var value1 = Util.rangeCount(data[0].length, 1);
            var value2 = Util.rangeCount(data[1].length, 1);
            var value3 = sameBallCount * value2 * (1 - (Util.rangeCount(data[1].length - 1, 1) / value2));
            count = value1 * value2 - value3;
            count = isNaN(count) ? 0 : count * probably;
        }
        return Math.round(count);
    };

    //4星 5星 直选单式
    var ZXDS4And5 = function(data, betType) {
        var result = BetRuleInstance.result;
        var type, count = 0,
            resultText, probably = 0;
        var $target = app.currentModule.playingNav.parentPlate2;
        if (betType.indexOf('5') >= 0) {
            type = 5
        } else if (betType.indexOf('4') >= 0) {
            type = 4;
        } else if (betType.indexOf('3') >= 0) {
            type = 3;
        } else if (betType.indexOf('2') >= 0) {
            type = 2;
        }
        if (betType.indexOf('A') >= 0) {
            probably = Util.rangeCount(result[1].length, type);
        } else {
            probably = 1
        }
        resultText = Util.fifter(data[0], type);
        BetRuleInstance.result[0] = resultText;
        count = resultText.length;
        return count * probably;
    };
    //重复号（不管顺序即 123 = 132 = 321）去掉，不含豹子号
    var ZXHH3 = function(data, betType) {
        var type = 3,
            count = 0,
            resultText, probably = 0;
        var result = BetRuleInstance.result;
        var $target = app.currentModule.playingNav.parentPlate2;
        if (betType.indexOf('A') >= 0) {
            probably = Util.rangeCount(result[1].length, 3);
        } else {
            probably = 1
        }
        resultText = Util.fifter(data[0], type);
        resultText = Util.removeRepeat(resultText);
        resultText = Util.pairThreeNo(resultText);
        BetRuleInstance.result[0] = resultText;
        count = resultText.length;
        return count * probably;
    };
    //3个号都不相同，重复号（不管顺序即 123 = 132 = 321）去掉
    var ZXDS3ZL = function(data, betType) {
        var type = 3,
            count = 0,
            resultText, probably = 0;
        var result = BetRuleInstance.result;
        var $target = app.currentModule.playingNav.parentPlate2;
        if (betType.indexOf('A') >= 0) {
            probably = Util.rangeCount(result[1].length, 3);
        } else {
            probably = 1
        }
        resultText = Util.fifter(data[0], type);
        resultText = Util.removeRepeat(resultText);
        resultText = Util.noIdentical(resultText);
        BetRuleInstance.result[0] = resultText;
        count = resultText.length;
        return count * probably;
    };
    //2个号相同，不含豹子号,重复号（不管顺序即 123 = 132 = 321）去掉
    var ZXDSS = function(data, betType) {
        var type = 3,
            count = 0,
            resultText, probably = 0;
        var result = BetRuleInstance.result;
        var $target = app.currentModule.playingNav.parentPlate2;
        if (betType.indexOf('A') >= 0) {
            probably = Util.rangeCount(result[1].length, 3);
        } else {
            probably = 1
        }
        resultText = Util.fifter(data[0], type);
        resultText = Util.removeRepeat(resultText);
        resultText = Util.pairThreeNo(resultText);
        resultText = Util.pairTwo(resultText);
        BetRuleInstance.result[0] = resultText;
        count = resultText.length;
        return count * probably;
    };
    //不含对子号，重复号（不管顺序即 12 = 21）去掉
    var ZXEXDS2 = function(data, betType) {
        var type = 2,
            count = 0,
            resultText, probably = 0;
        var result = BetRuleInstance.result;
        var $target = app.currentModule.playingNav.parentPlate2;
        if (betType.indexOf('A') >= 0) {
            probably = Util.rangeCount(result[1].length, 2);
        } else {
            probably = 1
        }
        resultText = Util.fifter(data[0], type);
        resultText = Util.removeRepeat(resultText);
        resultText = Util.noPair(resultText);
        BetRuleInstance.result[0] = resultText;
        count = resultText.length;
        return count * probably;
    };
    function BetAlgorithm(){
        this.LT_BetTypeObj = LT_BetTypeObj;
        this.ZSFS = ZSFS;
        this.ZSZH = ZSZH;
        this.ZSDCH = ZSDCH;
        this.QSZXHZ = QSZXHZ;
        this.QSKD = QSKD;
        this.QSZS = QSZS;
        this.QSZL = QSZL;
        this.QSHZ = QSHZ;
        this.QSBD = QSBD;
        this.QSHZWS_QSTSHM = QSHZWS_QSTSHM;
        this.EXZXEKD = EXZXEKD;
        this.LXHZ = LXHZ;
        this.LXBD = LXBD;
        this.YXDWD = YXDWD;
        this.BDS = BDS;
        this.DXDS = DXDS;
        this.QWQJ = QWQJ;
        this.LHH = LHH;
        this.RXZXFS = RXZXFS;
        this.RXZXHZ = RXZXHZ;
        this.RXFS = RXFS;
        this.RXHZ = RXHZ;
        this.RXSZX = RXSZX;
        this.ZXDS4And5 = ZXDS4And5;
        this.ZXHH3 = ZXHH3;
        this.ZXDS3ZL = ZXDS3ZL;
        this.ZXDSS = ZXDSS;
        this.ZXDSS = ZXDSS;
        this.ZXEXDS2 = ZXEXDS2;
    }
    BetAlgorithm.prototype = new IBetAlgorithm(LT_BetTypeObj);
    window.BetAlgorithm = new BetAlgorithm();
})


//时时彩
var RULE_CONFIG = (RULE_CONFIG || []).concat([

    //五星
    {
        betType: 'N5P',
        gameCode: 'LT',
        name: '五星直选复式',
        dataFormatter: [
            [],
            [],
            [],
            [],
            []
        ],
        plateType: 1,
        title: "五星-直选-直选复式",
        selectMethod: '从个、十、百、千、万位各选一个号码组成一注',
        winningRule: "从万位、千位、百位、十位、个位中各选择一个号码组成一注，所选号码与开奖号码全部相同，且顺序一致，即为中奖"
    }, { //特殊情况 上传
        betType: 'N5S',
        gameCode: 'LT',
        name: '五星直选单式',
        dataFormatter: [
            []
        ],
        plateType: 2,
        title: "五星-直选-直选单式",
        selectMethod: "手动输入号码，至少输入1个五位数号码组成一注",
        winningRule: "手动输入一个5位数号码组成一注，所选号码的万位、千位、百位、十位、个位与开奖号码相同，且顺序一致，即为中奖。",
        betRuleTip: "格式范例：12345 23456 88767 33021 98897"
    }, {
        betType: 'N5C',
        gameCode: 'LT',
        name: '五星直选组合',
        dataFormatter: [
            [],
            [],
            [],
            [],
            []
        ],
        plateType: 1,
        title: "五星-直选-直选组合",
        selectMethod: "从个、十、百、千、万位各选一个号码组成五注",
        winningRule: "从万位、千位、百位、十位、个位中各选一个号码组成1-5星的组合，共五注，所选号码的个位与开奖号码全部相同，则中1个5等奖；所选号码的个位、十位与开奖号码相同，则中1个5等奖以及1个4等奖，依此类推，最高可中5个奖。"
    },

    {
        betType: 'G5X120',
        gameCode: 'LT',
        name: '五星组选120',
        dataFormatter: [
            []
        ],
        plateType: 1,
        title: "五星-组选-组选120",
        selectMethod: "从0-9中选择5个号码组成一注",
        winningRule: "从0-9中任意选择5个号码组成一注，所选号码与开奖号码的万位、千位、百位、十位、个位相同，顺序不限，即为中奖。"
    }, {
        betType: 'G5X60',
        gameCode: 'LT',
        name: '五星组选60',
        dataFormatter: [
            [],
            []
        ],
        plateType: 1,
        title: "五星-组选-组选60",
        selectMethod: "从“二重号”选择一个号码，“单号”中选择三个号码组成一注",
        winningRule: "选择1个“二重号”和3个单号号码组成一注，所选的单号号码与开奖号码相同，且所选二重号码在开奖号码中出现了2次，即为中奖。"
    }, {
        betType: 'G5X30',
        gameCode: 'LT',
        name: '五星组选30',
        dataFormatter: [
            [],
            []
        ],
        plateType: 1,
        title: "五星-组选-组选30",
        selectMethod: "从“二重号”选择两个号码，“单号”中选择一个号码组成一注",
        winningRule: "选择2个二重号和1个单号号码组成一注，所选的单号号码与开奖号码相同，且所选的2个二重号码分别在开奖号码中出现了2次，即为中奖"
    }, {
        betType: 'G5X20',
        gameCode: 'LT',
        name: '五星组选20',
        dataFormatter: [
            [],
            []
        ],
        plateType: 1,
        title: "五星-组选-组选20",
        selectMethod: "从“三重号”选择一个号码，“单号”中选择两个号码组成一注",
        winningRule: "选择1个三重号码和2个单号号码组成一注，所选的单号号码与开奖号码相同，且所选三重号码在开奖号码中出现了3次，即为中奖。"
    }, {
        betType: 'G5X10',
        gameCode: 'LT',
        name: '五星组选10',
        dataFormatter: [
            [],
            []
        ],
        plateType: 1,
        title: "五星-组选-组选10",
        selectMethod: "从“三重号”选择一个号码，“二重号”中选择一个号码组成一注",
        winningRule: "选择1个三重号码和1个二重号码，所选三重号码在开奖号码中出现3次，并且所选二重号码在开奖号码中出现了2次，即为中奖。"
    }, {
        betType: 'G5X5',
        gameCode: 'LT',
        name: '五星组选5',
        dataFormatter: [
            [],
            []
        ],
        plateType: 1,
        title: "五星-组选-组选5",
        selectMethod: "从“四重号”选择一个号码，“单号”中选择一个号码组成一注",
        winningRule: "选择1个四重号码和1个单号号码组成一注，所选的单号号码与开奖号码相同，且所选四重号码在开奖号码中出现了4次，即为中奖。"
    },


    //四星玩法组规则
    {
        betType: 'N4P',
        gameCode: 'LT',
        name: '四星直选复式',
        dataFormatter: [
            [],
            [],
            [],
            []
        ],
        plateType: 1,
        title: "四星-直选-直选复式",
        selectMethod: "从个、十、百、千位各选一个号码组成一注",
        winningRule: "从千位、百位、十位、个位中各选择一个号码组成一注，所选号码与开奖号码相同，且顺序一致，即为中奖。"
    }, { //特殊情况 上传
        betType: 'N4S',
        gameCode: 'LT',
        name: '四星直选单式',
        dataFormatter: [
            []
        ],
        plateType: 2,
        title: "四星-直选-直选单式",
        selectMethod: "手动输入号码，至少输入1个四位数号码组成一注",
        winningRule: "手动输入一个4位数号码组成一注，所选号码的千位、百位、十位、个位与开奖号码相同，且顺序一致，即为中奖。",
        betRuleTip: "格式范例：1234 2345 8876 3301 9897"
    }, {
        betType: 'N4C',
        gameCode: 'LT',
        name: '四星组合',
        dataFormatter: [
            [],
            [],
            [],
            []
        ],
        plateType: 1,
        title: "四星-直选-直选组合",
        selectMethod: "从个、十、百、千位各选一个号码组成四注",
        winningRule: "从千位、百位、十位、个位中至少各选一个号码组成1-4星的组合，共四注，所选号码的个位与开奖号码相同，则中1个4等奖；所选号码的个位、十位与开奖号码相同，则中1个4等奖以及1个3等奖，依此类推，最高可中4个奖。"
    },

    {
        betType: 'G4X24',
        gameCode: 'LT',
        name: '四星组选24',
        dataFormatter: [
            []
        ],
        plateType: 1,
        title: "四星-组选-组选24",
        selectMethod: "从0-9中选择4个号码组成一注",
        winningRule: "从0-9中任意选择4个号码组成一注，所选号码与开奖号码的千位、百位、十位、个位相同，且顺序不限，即为中奖"
    }, {
        betType: 'G4X12',
        gameCode: 'LT',
        name: '四星组选12',
        dataFormatter: [
            [],
            []
        ],
        plateType: 1,
        title: "四星-组选-组选12",
        selectMethod: "从“二重号”选择一个号码，“单号”中选择两个号码组成一注",
        winningRule: "选择1个二重号码和2个单号号码组成一注，所选单号号码与开奖号码相同，且所选二重号码在开奖号码中出现了2次，即为中奖。"
    }, {
        betType: 'G4X6',
        gameCode: 'LT',
        name: '四星组选6',
        dataFormatter: [
            []
        ],
        plateType: 1,
        title: "四星-组选-组选6",
        selectMethod: "从“二重号”选择两个号码组成一注",
        winningRule: "选择2个二重号码组成一注，所选的2个二重号码在开奖号码中分别出现了2次，即为中奖。"
    }, {
        betType: 'G4X4',
        gameCode: 'LT',
        name: '四星组选4',
        dataFormatter: [
            [],
            []
        ],
        plateType: 1,
        title: "四星-组选-组选4",
        selectMethod: "从“三重号”选择一个号码，“单号”中选择两个号码组成一注",
        winningRule: "选择1个三重号码和1个单号号码组成一注，所选单号号码与开奖号码相同，且所选三重号码在开奖号码中出现了3次，即为中奖。"
    },


    //前三玩法组规则
    {
        betType: 'N3PF',
        gameCode: 'LT',
        name: '前三直选复式',
        dataFormatter: [
            [],
            [],
            []
        ],
        plateType: 1,
        title: "前三-直选-直选复式",
        selectMethod: "从万、千、百位各选一个号码组成一注",
        winningRule: "从万位、千位、百位中选择一个3位数号码组成一注，所选号码与开奖号码的前3位相同，且顺序一致，即为中奖。"
    }, { //特殊情况 上传
        betType: 'N3SF',
        gameCode: 'LT',
        name: '前三直选单式',
        dataFormatter: [
            []
        ],
        plateType: 2,
        title: "前三-直选-直选单式",
        selectMethod: "手动输入号码，至少输入1个三位数号码组成一注",
        winningRule: "手动输入一个3位数号码组成一注，所选号码的万位、千位、百位与开奖号码相同且顺序一致，即为中奖。",
        betRuleTip: "格式范例：123 456 768 330 988"
    }, {
        betType: 'N3TF',
        gameCode: 'LT',
        name: '前三直选和值',
        dataFormatter: [
            []
        ],
        plateType: 3,
        title: "前三-直选-直选和值",
        selectMethod: "从0-27中任意选择1个或1个以上号码。",
        winningRule: "所选数值等于开奖号码的万位、千位、百位三个数字相加之和，即为中奖。"
    }, {
        betType: 'N3DF',
        gameCode: 'LT',
        name: '前三直选跨度',
        dataFormatter: [
            []
        ],
        plateType: 1,
        title: "前三-直选-直选跨度",
        selectMethod: "从0-9中选择1个号码",
        winningRule: "所选数值等于开奖号码的前3位最大与最小数字相减之差，即为中奖。"
    }, {
        betType: 'N3CF',
        gameCode: 'LT',
        name: '前三直选组合',
        dataFormatter: [
            [],
            [],
            []
        ],
        plateType: 1,
        title: "前三-直选-直选组合",
        selectMethod: "从万、千、百位各选一个号码组成三注",
        winningRule: "从万位、千位、百位中至少各选择一个号码组成1-3星的组合共三注，当百位号码与开奖号码相同，则中1个3等奖；如果百位与千位号码与开奖号码相同，则中1个3等奖以及1个2等奖，依此类推，最高可中3个奖。"
    },

    {
        betType: 'G3X3F',
        gameCode: 'LT',
        name: '前三组三',
        dataFormatter: [
            []
        ],
        plateType: 1,
        title: "前三-组选-组三",
        selectMethod: "从0-9中任意选择2个或2个以上号码",
        winningRule: "从0-9中选择2个数字组成两注，所选号码与开奖号码的万位、千位、百位相同，且顺序不限，即为中奖。"
    }, {
        betType: 'G3X6F',
        gameCode: 'LT',
        name: '前三组六',
        dataFormatter: [
            []
        ],
        plateType: 1,
        title: "前三-组选-组六",
        selectMethod: "从0-9中任意选择3个或3个以上号码",
        winningRule: "从0-9中任意选择3个号码组成一注，所选号码与开奖号码的万位、千位、百位相同，顺序不限，即为中奖。"
    }, { //特殊情况 上传
        betType: 'G3MXF',
        gameCode: 'LT',
        name: '前三混合组选',
        dataFormatter: [
            []
        ],
        plateType: 2,
        title: "前三-组选-混合组选",
        selectMethod: "手动输入号码，至少输入1个三位数号码",
        winningRule: "手动输入组三或组六号码，3个数字为一注，所选号码与开奖号码的万位、千位、百位相同，顺序不限，即为中奖",
        betRuleTip: "格式范例：123 456 768 330 988"
    }, {
        betType: 'G3TF',
        gameCode: 'LT',
        name: '前三混合和值',
        dataFormatter: [
            []
        ],
        plateType: 3,
        title: "前三-组选-组选和值",
        selectMethod: "从1-26中选择1个号码",
        winningRule: "所选数值等于开奖号码万位、千位、百位三个数字相加之和(不含豹子号)，即为中奖。"
    }, { //特殊情况 上传
        betType: 'G3X3SF',
        gameCode: 'LT',
        name: '前三组三单式',
        dataFormatter: [
            []
        ],
        plateType: 2,
        title: "前三-组选-组三单式",
        selectMethod: "手动输入号码，至少输入 1 个三位数号码。(三个数字当中有二个数字相同)",
        winningRule: "手动输入一个3位数号码组成一注(不含豹子号)，开奖号码的万位、千位、百位相同，顺序不限，即为中奖。",
        betRuleTip: "格式范例：122 454 778 330 988"
    }, { //特殊情况 上传
        betType: 'G3X6SF',
        gameCode: 'LT',
        name: '前三组六单式',
        dataFormatter: [
            []
        ],
        plateType: 2,
        title: "前三-组选-组六单式",
        selectMethod: "手动输入号码，至少输入 1 个三位数号码。(三个数字全不相同)",
        winningRule: "手动输入一个3位数号码组成一注(不含豹子号)，开奖号码的万位、千位、百位相同，顺序不限，即为中奖。",
        betRuleTip: "格式范例：123 456 768 350 987"
    }, {
        betType: 'G3BF',
        gameCode: 'LT',
        name: '前三包胆',
        dataFormatter: [
            []
        ],
        selectDataLength: [1],
        plateType: 3,
        title: "前三-组选-包胆",
        selectMethod: "从0-9中选择1个号码",
        winningRule: "从0-9中任意选择1个包胆号码，开奖号码的万位、千位、百位中任意1位只要和所选包胆号码相同(不含豹子号)，即为中奖。"
    },

    {
        betType: 'S3TDF',
        gameCode: 'LT',
        name: '前三和值尾数',
        dataFormatter: [
            []
        ],
        plateType: 1,
        title: "前三-其他-和值尾数",
        selectMethod: "从0-9中选择1个号码",
        winningRule: "所选数值等于开奖号码的万位、千位、百位三个数字相加之和的尾数，即为中奖。"
    }, {
        betType: 'S3SF',
        gameCode: 'LT',
        name: '前三特殊号码',
        dataFormatter: [
            []
        ],
        plateType: 4,
        title: "前三-其他-特殊号码",
        selectMethod: "选择一个号码形态",
        winningRule: "所选的号码特殊属性和开奖号码前3位的属性一致，即为中奖。其中：1.豹子号的万、千、百位出现三个相同号码； 2.顺子号的万、千、百位不分顺序；3.对子号指的是开奖号码的前三位当中，任意2位数字相同的三位数号码。"
    },


    //中三玩法组规则
    {
        betType: 'N3PM',
        gameCode: 'LT',
        name: '中三直选复式',
        dataFormatter: [
            [],
            [],
            []
        ],
        plateType: 1,
        title: "中三-直选-直选复式",
        selectMethod: "从千、百、十位各选一个号码组成一注",
        winningRule: "从千位、百位、十位中选择一个3位数号码组成一注，所选号码与开奖号码的中间3位相同，且顺序一致，即为中奖。"
    }, { //特殊情况 上传
        betType: 'N3SM',
        gameCode: 'LT',
        name: '中三直选单式',
        dataFormatter: [],
        plateType: 2,
        title: "中三-直选-直选单式",
        selectMethod: "手动输入号码，至少输入1个三位数号码组成一注",
        winningRule: "手动输入一个3位数号码组成一注，所选号码的千位、百位、十位与开奖号码相同且顺序一致，即为中奖。",
        betRuleTip: "格式范例：123 456 768 330 988"
    }, {
        betType: 'N3TM',
        gameCode: 'LT',
        name: '中三直选和值',
        dataFormatter: [
            []
        ],
        plateType: 3,
        title: "中三-直选-直选和值",
        selectMethod: "从0-27中任意选择1个或1个以上号码。",
        winningRule: "所选数值等于开奖号码的千位、百位、十位三个数字相加之和，即为中奖。"
    }, {
        betType: 'N3DM',
        gameCode: 'LT',
        name: '中三直选跨度',
        dataFormatter: [
            []
        ],
        plateType: 1,
        title: "中三-直选-直选跨度",
        selectMethod: "从0-9中选择1个号码",
        winningRule: "所选数值等于开奖号码的中间3位最大与最小数字相减之差，即为中奖。"
    }, {
        betType: 'N3CM',
        gameCode: 'LT',
        name: '中三直选组合',
        dataFormatter: [
            [],
            [],
            []
        ],
        plateType: 1,
        title: "中三-直选-直选组合",
        selectMethod: "从千、百、十位各选一个号码组成三注",
        winningRule: "从千位、百位、十位中至少各选择一个号码组成1-3星的组合共三注，当十位号码与开奖号码相同，则中1个3等奖；如果十位与百位号码与开奖号码相同，则中1个3等奖以及1个2等奖，依此类推，最高可中3个奖。"
    },

    {
        betType: 'G3X3M',
        gameCode: 'LT',
        name: '中三组三',
        dataFormatter: [
            []
        ],
        plateType: 1,
        title: "中三-组选-组三",
        selectMethod: "从0-9中任意选择2个或2个以上号码",
        winningRule: "从0-9中选择2个数字组成两注，所选号码与开奖号码的千位、百位、十位相同，且顺序不限，即为中奖。"
    }, {
        betType: 'G3X6M',
        gameCode: 'LT',
        name: '中三组六',
        dataFormatter: [
            []
        ],
        plateType: 1,
        title: "中三-组选-组六",
        selectMethod: "从0-9中任意选择3个或3个以上号码",
        winningRule: "从0-9中任意选择3个号码组成一注，所选号码与开奖号码的千位、百位、十位相同，顺序不限，即为中奖。"
    }, { //特殊情况 上传
        betType: 'G3MXM',
        gameCode: 'LT',
        name: '中三混合组选',
        dataFormatter: [
            []
        ],
        plateType: 2,
        title: "中三-组选-混合组选",
        selectMethod: "手动输入号码，至少输入1个三位数号码",
        winningRule: "手动输入组三或组六号码，3个数字为一注，所选号码与开奖号码的千位、百位、十位相同，顺序不限，即为中奖",
        betRuleTip: "格式范例：123 456 768 330 988"
    }, {
        betType: 'G3TM',
        gameCode: 'LT',
        name: '中三组选和值',
        dataFormatter: [
            []
        ],
        plateType: 3,
        title: "中三-组选-组选和值",
        selectMethod: "从1-26中选择1个号码",
        winningRule: "所选数值等于开奖号码千位、百位、十位三个数字相加之和(不含豹子号)，即为中奖。"
    }, { //特殊情况 上传
        betType: 'G3X3SM',
        gameCode: 'LT',
        name: '中三组三单式',
        dataFormatter: [
            []
        ],
        plateType: 2,
        title: "中三-组选-组三单式",
        selectMethod: "手动输入号码，至少输入 1 个三位数号码。(三个数字当中有二个数字相同)",
        winningRule: "手动输入组三号码，3个数字为一注，所选号码与开奖号码的千位、百位、十位相同，顺序不限，即为中奖",
        betRuleTip: "格式范例：122 455 778 330 988"
    }, { //特殊情况 上传
        betType: 'G3X6SM',
        gameCode: 'LT',
        name: '中三组六单式',
        dataFormatter: [
            []
        ],
        plateType: 2,
        title: "中三-组选-组六单式",
        selectMethod: "手动输入号码，至少输入 1 个三位数号码。(三个数字全不相同)",
        winningRule: "手动输入一个3位数号码组成一注(不含豹子号)，开奖号码的千位、百位、十位相同，顺序不限，即为中奖。",
        betRuleTip: "格式范例：123 456 768 340 987"
    }, {
        betType: 'G3BM',
        gameCode: 'LT',
        name: '中三包胆',
        dataFormatter: [
            []
        ],
        selectDataLength: [1],
        plateType: 3,
        title: "中三-组选-包胆",
        selectMethod: "从0-9中选择1个号码",
        winningRule: "从0-9中任意选择1个包胆号码，开奖号码的千位、百位、十位中任意1位只要和所选包胆号码相同(不含豹子号)，即为中奖。"
    },

    {
        betType: 'S3TDM',
        gameCode: 'LT',
        name: '中三和值尾数',
        dataFormatter: [
            []
        ],
        plateType: 1,
        title: "中三-其他-和值尾数",
        selectMethod: "从0-9中选择1个号码",
        winningRule: "所选数值等于开奖号码的千位、百位、十位三个数字相加之和的尾数，即为中奖。"
    }, {
        betType: 'S3SM',
        gameCode: 'LT',
        name: '中三特殊号码',
        dataFormatter: [
            []
        ],
        plateType: 4,
        title: "中三-其他-特殊号码",
        selectMethod: "选择一个号码形态",
        winningRule: "所选的号码特殊属性和开奖号码中间3位的属性一致，即为中奖。其中：1.豹子号的千、百、十位出现三个相同号码； 2.顺子号的千、百、十位不分顺序；3.对子号指的是开奖号码的中间三位当中，任意2位数字相同的三位数号码。"
    },


    //后三玩法组规则
    {
        betType: 'N3PL',
        gameCode: 'LT',
        name: '后三直选复式',
        dataFormatter: [
            [],
            [],
            []
        ],
        plateType: 1,
        title: "后三-直选-直选复式",
        selectMethod: "从个、十、百位各选一个号码组成一注",
        winningRule: "从百位、十位、个位中选择一个3位数号码组成一注，所选号码与开奖号码后3位相同，且顺序一致，即为中奖。"
    }, { //特殊情况 上传
        betType: 'N3SL',
        gameCode: 'LT',
        name: '后三直选单式',
        dataFormatter: [
            []
        ],
        plateType: 2,
        title: "后三-直选-直选单式",
        selectMethod: "手动输入号码，至少输入1个三位数号码组成一注",
        winningRule: "手动输入一个3位数号码组成一注，所选号码的百位、十位、个位与开奖号码相同，且顺序一致，即为中奖。",
        betRuleTip: "格式范例：123 456 768 330 988"
    }, {
        betType: 'N3TL',
        gameCode: 'LT',
        name: '后三直选和值',
        dataFormatter: [
            []
        ],
        plateType: 3,
        title: "后三-直选-直选和值",
        selectMethod: "从0-27中任意选择1个或1个以上号码",
        winningRule: "所选数值等于开奖号码的百位、十位、个位三个数字相加之和，即为中奖。"
    }, {
        betType: 'N3DL',
        gameCode: 'LT',
        name: '后三直选跨度',
        dataFormatter: [
            []
        ],
        plateType: 1,
        title: "后三-直选-直选跨度",
        selectMethod: "从0-9中选择1个号码。",
        winningRule: "所选数值等于开奖号码的后3位最大与最小数字相减之差，即为中奖。"
    }, {
        betType: 'N3CL',
        gameCode: 'LT',
        name: '后三直选组合',
        dataFormatter: [
            [],
            [],
            []
        ],
        plateType: 1,
        title: "后三-直选-直选组合",
        selectMethod: "从个、十、百位各选一个号码组成三注",
        winningRule: "从百位、十位、个位中至少各选择一个号码组成1-3星的组合共三注，当个位号码与开奖号码相同，则中1个3等奖；如果个位与十位号码与开奖号码相同，则中1个3等奖以及1个2等奖，依此类推，最高可中3个奖。"
    },

    {
        betType: 'G3X3L',
        gameCode: 'LT',
        name: '后三组三',
        dataFormatter: [
            []
        ],
        plateType: 1,
        title: "后三-组选-组三",
        selectMethod: "从0-9中任意选择2个或2个以上号码",
        winningRule: "从0-9中选择2个数字组成两注，所选号码与开奖号码的百位、十位、个位相同，且顺序不限，即为中奖。"
    }, {
        betType: 'G3X6L',
        gameCode: 'LT',
        name: '后三组六',
        dataFormatter: [
            []
        ],
        plateType: 1,
        title: "后三-组选-组六",
        selectMethod: "从0-9中任意选择3个或3个以上号码。",
        winningRule: "从0-9中任意选择3个号码组成一注，所选号码与开奖号码的百位、十位、个位相同，顺序不限，即为中奖。"
    }, { //特殊情况 上传
        betType: 'G3MXL',
        gameCode: 'LT',
        name: '后三混合组选',
        dataFormatter: [
            []
        ],
        plateType: 2,
        title: "后三-组选-混合组选",
        selectMethod: "手动输入号码，至少输入1个三位数号码。",
        winningRule: "手动输入组三或组六号码，3个数字为一注，所选号码与开奖号码的百位、十位、个位相同，顺序不限，即为中奖。",
        betRuleTip: "格式范例：123 456 768 330 988"
    }, {
        betType: 'G3TL',
        gameCode: 'LT',
        name: '后三组选和值',
        dataFormatter: [
            []
        ],
        plateType: 3,
        title: "后三-组选-组选和值",
        selectMethod: "从1-26中选择1个号码",
        winningRule: "所选数值等于开奖号码百位、十位、个位三个数字相加之和(不含豹子号)，即为中奖。"
    }, { //特殊情况 上传
        betType: 'G3X3SL',
        gameCode: 'LT',
        name: '后三组三单式',
        dataFormatter: [
            []
        ],
        plateType: 2,
        title: "后三-组选-组三单式",
        selectMethod: "手动输入号码，至少输入 1 个三位数号码。(三个数字当中有二个数字相同)",
        winningRule: "手动输入组三号码，3个数字为一注，所选号码与开奖号码的百位、十位、个位相同，顺序不限，即为中奖",
        betRuleTip: "格式范例：113 446 778 330 988"
    }, { //特殊情况 上传
        betType: 'G3X6SL',
        gameCode: 'LT',
        name: '后三组六单式',
        dataFormatter: [
            []
        ],
        plateType: 2,
        title: "后三-组选-组六单式",
        selectMethod: "手动输入号码，至少输入 1 个三位数号码。(三个数字全不相同)",
        winningRule: "手动输入组六号码，3个数字为一注，所选号码与开奖号码的百位、十位、个位相同，顺序不限，即为中奖",
        betRuleTip: "格式范例：123 456 768 340 908"
    }, {
        betType: 'G3BL',
        gameCode: 'LT',
        name: '后三包胆',
        dataFormatter: [
            []
        ],
        selectDataLength: [1],
        plateType: 3,
        title: "后三-组选-包胆",
        selectMethod: "从0-9中选择1个号码。",
        winningRule: "从0-9中任意选择1个包胆号码，开奖号码的百位、十位、个位中任意1位与所选包胆号码相同(不含豹子号)，即为中奖。"
    },

    {
        betType: 'S3TDL',
        gameCode: 'LT',
        name: '后三和值尾数',
        dataFormatter: [
            []
        ],
        plateType: 1,
        title: "后三-其他-和值尾数",
        selectMethod: "从0-9中选择1个号码",
        winningRule: "所选数值等于开奖号码的百位、十位、个位三个数字相加之和的尾数，即为中奖。"
    }, {
        betType: 'S3SL',
        gameCode: 'LT',
        name: '后三特殊号码',
        dataFormatter: [
            []
        ],
        plateType: 4,
        title: "后三-其他-特殊号码",
        selectMethod: "选择一个号码形态",
        winningRule: "所选的号码特殊属性和开奖号码后3位的属性一致，即为中奖。其中：1.豹子号的个、十、百位出现三个相同号码；2.顺子号的个、十、百位不分顺序；3.对子号指的是开奖号码的后三位当中，任意2位数字相同的三位数号码。"
    },


    //二星玩法组规则
    {
        betType: 'N2PL',
        gameCode: 'LT',
        name: '二星直选后二复式',
        dataFormatter: [
            [],
            []
        ],
        plateType: 1,
        title: "二星-直选-后二复式",
        selectMethod: "从十、个位各选一个号码组成一注",
        winningRule: "从十位、个位中选择一个2位数号码组成一注，所选号码与开奖号码的十位、个位相同，且顺序一致，即为中奖。"
    }, { //特殊情况 上传
        betType: 'N2SL',
        gameCode: 'LT',
        name: '二星直选后二单式',
        dataFormatter: [
            []
        ],
        plateType: 2,
        title: "二星-直选-后二单式",
        selectMethod: "手动输入号码，至少输入1个两位数号码",
        winningRule: "手动输入一个2位数号码组成一注，所选号码的十位、个位与开奖号码相同，且顺序一致，即为中奖。",
        betRuleTip: "格式范例：12 45 78 33 88"
    }, {
        betType: 'N2TL',
        gameCode: 'LT',
        name: '二星直选后二和值',
        dataFormatter: [
            []
        ],
        plateType: 3,
        title: "二星-直选-后二和值",
        selectMethod: "从0-18中任意选择1个或1个以上号码",
        winningRule: "所选数值等于开奖号码的十位、个位二个数字相加之和，即为中奖。"
    }, {
        betType: 'N2DL',
        gameCode: 'LT',
        name: '二星直选后二跨度',
        dataFormatter: [
            []
        ],
        plateType: 1,
        title: "二星-直选-后二跨度",
        selectMethod: "从0-9中任意选择1个号码 ",
        winningRule: "所选数值等于开奖号码的后2位最大与最小数字相减之差，即为中奖。"
    }, {
        betType: 'N2PF',
        gameCode: 'LT',
        name: '二星直选前二复式',
        dataFormatter: [
            [],
            []
        ],
        plateType: 1,
        title: "二星-直选-前二复式",
        selectMethod: "从万、千位各选一个号码组成一注",
        winningRule: "从万位、千位中选择一个2位数号码组成一注，所选号码与开奖号码的万位、千位相同，且顺序一致，即为中奖。"
    }, { //特殊情况 上传
        betType: 'N2SF',
        gameCode: 'LT',
        name: '二星直选前二单式',
        dataFormatter: [
            []
        ],
        plateType: 2,
        title: "二星-直选-前二单式",
        selectMethod: "手动输入号码，至少输入1个两位数号码",
        winningRule: "手动输入一个2位数号码组成一注，所选号码的万位、千位与开奖号码相同，且顺序一致，即为中奖。",
        betRuleTip: "格式范例：12 45 78 33 88"
    }, {
        betType: 'N2TF',
        gameCode: 'LT',
        name: '二星直选前二和值',
        dataFormatter: [
            []
        ],
        plateType: 3,
        title: "二星-直选-前二和值",
        selectMethod: "从0-18中任意选择1个或1个以上号码",
        winningRule: "所选数值等于开奖号码的万位、千位二个数字相加之和，即为中奖。"
    }, {
        betType: 'N2DF',
        gameCode: 'LT',
        name: '二星直选前二跨度',
        dataFormatter: [
            []
        ],
        plateType: 1,
        title: "二星-直选-前二跨度",
        selectMethod: "从0-9中任意选择1个号码。",
        winningRule: "所选数值等于开奖号码的前2位最大与最小数字相减之差，即为中奖。"
    },

    {
        betType: 'G2L',
        gameCode: 'LT',
        name: '二星组选后二复式',
        dataFormatter: [
            []
        ],
        plateType: 1,
        title: "二星-组选-后二复式",
        selectMethod: "从0-9中任意选择2个或2个以上号码。",
        winningRule: "从0-9中选2个号码组成一注，所选号码与开奖号码的十位、个位相同，顺序不限（不含对子号），即为中奖。"
    }, { //特殊情况 上传
        betType: 'G2SL',
        gameCode: 'LT',
        name: '二星组选后二单式',
        dataFormatter: [
            []
        ],
        plateType: 2,
        title: "二星-组选-后二单式",
        selectMethod: "手动输入号码，至少输入1个两位数号码",
        winningRule: "手动输入一个2位数号码组成一注，所选号码的十位、个位与开奖号码相同，顺序不限（不含对子号），即为中奖。",
        betRuleTip: "格式范例：12 45 78 34 89"
    }, {
        betType: 'G2TL',
        gameCode: 'LT',
        name: '二星组选后二和值',
        dataFormatter: [
            []
        ],
        plateType: 3,
        title: "二星-组选-后二和值",
        selectMethod: "从1-17中任意选择1个或1个以上号码",
        winningRule: "所选数值等于开奖号码的十位、个位二个数字相加之和（不含对子号），即为中奖。"
    }, {
        betType: 'G2BL',
        gameCode: 'LT',
        name: '二星组选后二包胆',
        dataFormatter: [
            []
        ],
        plateType: 3,
        selectDataLength: [1],
        title: "二星-组选-后二包胆",
        selectMethod: "从0-9中任意选择1个包胆号码",
        winningRule: "从0-9中任意选择1个包胆号码，开奖号码的十位、个位中任意1位包含所选的包胆号码相同（不含对子号），即为中奖。"
    }, {
        betType: 'G2F',
        gameCode: 'LT',
        name: '二星组选前二复式',
        dataFormatter: [
            []
        ],
        plateType: 1,
        title: "二星-组选-前二复式",
        selectMethod: "从0-9中任意选择2个或2个以上号码",
        winningRule: "从0-9中选2个号码组成一注，所选号码与开奖号码的万位、千位相同，顺序不限（不含对子号），即为中奖。"
    }, { //特殊情况 上传
        betType: 'G2SF',
        gameCode: 'LT',
        name: '二星组选前二单式',
        dataFormatter: [
            []
        ],
        plateType: 2,
        title: "二星-组选-前二单式",
        selectMethod: "手动输入号码，至少输入1个两位数号码组成一注",
        winningRule: "手动输入2个号码组成一注，所输入的号码与当期顺序摇出的5个号码中的前2个号码相同，顺序不限，即为中奖。",
        betRuleTip: "格式范例：12 45 78 34 89"
    }, {
        betType: 'G2TF',
        gameCode: 'LT',
        name: '二星组选前二和值',
        dataFormatter: [
            []
        ],
        plateType: 3,
        title: "二星-组选-前二和值",
        selectMethod: "从1-17中任意选择1个或1个以上号码",
        winningRule: "所选数值等于开奖号码的万位、千位二个数字相加之和（不含对子号），即为中奖。"
    }, {
        betType: 'G2BF',
        gameCode: 'LT',
        name: '二星组选前二包胆',
        dataFormatter: [
            []
        ],
        plateType: 3,
        selectDataLength: [1],
        title: "二星-组选-前二包胆",
        selectMethod: "从0-9中任意选择1个包胆号码",
        winningRule: "从0-9中任意选择1个包胆号码，开奖号码的万位、千位中任意1位包含所选的包胆号码相同（不含对子号），即为中奖。"
    },

    //一星玩法组规则
    {
        betType: 'N1',
        gameCode: 'LT',
        name: '一星定位胆',
        dataFormatter: [
            [],
            [],
            [],
            [],
            []
        ],
        plateType: 1,
        title: "一星-定位胆-定位胆",
        selectMethod: "在万位，千位，百位，十位，个位任意位置上任意选择1个或1个以上号码",
        winningRule: "从万位、千位、百位、十位、个位任意位置上至少选择1个以上号码，所选号码与相同位置上的开奖号码一致，即为中奖。"
    },


    //不定式玩法组规则
    {
        betType: 'A1L3',
        gameCode: 'LT',
        name: '后三一码不定位',
        dataFormatter: [
            []
        ],
        plateType: 1,
        title: "不定位-三星不定位-后三一码不定位",
        selectMethod: "从0-9中任意选择1个以上号码",
        winningRule: "从0-9中选择1个号码，每注由1个号码组成，只要开奖号码的百位、十位、个位中包含所选号码，即为中奖。"
    }, {
        betType: 'A2L3',
        gameCode: 'LT',
        name: '后三二码不定位',
        dataFormatter: [
            []
        ],
        plateType: 1,
        title: "不定位-三星不定位-后三二码不定位",
        selectMethod: "从0-9中任意选择2个以上号码",
        winningRule: "从0-9中选择2个号码，每注由2个不同的号码组成，开奖号码的百位、十位、个位中同时包含所选的2个号码，即为中奖。"
    }, {
        betType: 'A1F3',
        gameCode: 'LT',
        name: '前三一码不定位',
        dataFormatter: [
            []
        ],
        plateType: 1,
        title: "不定位-三星不定位-前三一码不定位",
        selectMethod: "从0-9中任意选择1个以上号码",
        winningRule: "从0-9中选择1个号码，每注由1个号码组成，只要开奖号码的万位、千位、百位中包含所选号码，即为中奖。"
    }, {
        betType: 'A2F3',
        gameCode: 'LT',
        name: '前三二码不定位',
        dataFormatter: [
            []
        ],
        plateType: 1,
        title: "不定位-三星不定位-前三二码不定位",
        selectMethod: "从0-9中任意选择2个以上号码",
        winningRule: "从0-9中选择2个号码，每注由2个不同的号码组成，开奖号码的万位、千位、百位中同时包含所选的2个号码，即为中奖。"
    }, {
        betType: 'A1M3',
        gameCode: 'LT',
        name: '中三一码不定位',
        dataFormatter: [
            []
        ],
        plateType: 1,
        title: "不定位-三星不定位-中三一码不定位",
        selectMethod: "从0-9中任意选择1个以上号码",
        winningRule: "从0-9中选择1个号码，每注由1个号码组成，只要开奖号码的千位、百位、十位中包含所选号码，即为中奖。"
    }, {
        betType: 'A2M3',
        gameCode: 'LT',
        name: '中三二码不定位',
        dataFormatter: [
            []
        ],
        plateType: 1,
        title: "不定位-三星不定位-中三二码不定位",
        selectMethod: "从0-9中任意选择2个以上号码",
        winningRule: "从0-9中选择2个号码，每注由2个不同的号码组成，开奖号码的千位、百位、十位中同时包含所选的2个号码，即为中奖。"
    },

    {
        betType: 'A1L4',
        gameCode: 'LT',
        name: '四星一码不定位',
        dataFormatter: [
            []
        ],
        plateType: 1,
        title: "不定位-四星不定位-四星一码不定位",
        selectMethod: "从0-9中任意选择1个以上号码",
        winningRule: "从0-9中选择1个号码，每注由1个号码组成，只要开奖号码的千位、百位、十位、个位中包含所选号码，即为中奖。"
    }, {
        betType: 'A2L4',
        gameCode: 'LT',
        name: '四星二码不定位',
        dataFormatter: [
            []
        ],
        plateType: 1,
        title: "不定位-四星不定位-四星二码不定位",
        selectMethod: "从0-9中任意选择2个以上号码",
        winningRule: "从0-9中选择2个号码，每注由2个不同的号码组成，开奖号码的千位、百位、十位、个位中同时包含所选的2个号码，即为中奖"
    },

    {
        betType: 'A2N5',
        gameCode: 'LT',
        name: '五星二码不定位',
        dataFormatter: [
            []
        ],
        plateType: 1,
        title: "不定位-五星不定位-五星二码不定位",
        selectMethod: "从0-9中任意选择2个以上号码",
        winningRule: "从0-9中选择2个号码，每注由2个不同的号码组成，开奖号码的万位、千位、百位、十位、个位中同时包含所选的2个号码，即为中奖。"
    }, {
        betType: 'A3N5',
        gameCode: 'LT',
        name: '五星三码不定位',
        dataFormatter: [
            []
        ],
        plateType: 1,
        title: "不定位-五星不定位-五星三码不定位",
        selectMethod: "从0-9中任意选择3个以上号码",
        winningRule: "从0-9中选择3个号码，每注由3个不同的号码组成，开奖号码的万位、千位、百位、十位、个位中同时包含所选的3个号码，即为中奖。"
    },


    //大小单双玩法组规则
    {
        betType: 'BSOEL2',
        gameCode: 'LT',
        name: '后二大小单双',
        dataFormatter: [
            [],
            []
        ],
        plateType: 5,
        title: "大小单双-大小单双-后二大小单双",
        selectMethod: "从十位、个位中的“大、小、单、双”中至少各选一个组成一注",
        winningRule: "对十位和个位的“大（56789）小（01234）、单（13579）双（02468）”形态进行购买，所选号码的位置、形态与开奖号码的位置、形态相同，即为中奖。"
    }, {
        betType: 'BSOEL3',
        gameCode: 'LT',
        name: '后三大小单双',
        dataFormatter: [
            [],
            [],
            []
        ],
        plateType: 5,
        title: "大小单双-大小单双-后三大小单双",
        selectMethod: "从百位、十位、个位中的“大、小、单、双”中至少各选一个组成一注",
        winningRule: "对百位、十位和个位的“大（56789）小（01234）、单（13579）双（02468）”形态进行购买，所选号码的位置、形态与开奖号码的位置、形态相同，即为中奖。"
    }, {
        betType: 'BSOEF2',
        gameCode: 'LT',
        name: '前二大小单双',
        dataFormatter: [
            [],
            []
        ],
        plateType: 5,
        title: "大小单双-大小单双-前二大小单双",
        selectMethod: "从万位、千位中的“大、小、单、双”中至少各选一个组成一注",
        winningRule: "对万位、千位的“大（56789）小（01234）、单（13579）双（02468）”形态进行购买，所选号码的位置、形态与开奖号码的位置、形态相同，即为中奖。"
    }, {
        betType: 'BSOEF3',
        gameCode: 'LT',
        name: '前三大小单双',
        dataFormatter: [
            [],
            [],
            []
        ],
        plateType: 5,
        title: "大小单双-大小单双-前三大小单双",
        selectMethod: "从万位、千位、百位中的“大、小、单、双”中至少各选一个组成一注",
        winningRule: "对万位、千位和百位的“大（56789）小（01234）、单（13579）双（02468）”形态进行购买，所选号码的位置、形态与开奖号码的位置、形态相同，即为中奖。"
    }, {
        betType: 'BSOEM3',
        gameCode: 'LT',
        name: '中三大小单双',
        dataFormatter: [
            [],
            [],
            []
        ],
        plateType: 5,
        title: "大小单双-大小单双-中三大小单双",
        selectMethod: "从千位、百位、十位中的“大、小、单、双”中至少各选一个组成一注",
        winningRule: "对千位和百位、十位的“大（56789）小（01234）、单（13579）双（02468）”形态进行购买，所选号码的位置、形态与开奖号码的位置、形态相同，即为中奖。"
    },



    //趣味玩法组规则
    {
        betType: 'F5N3',
        gameCode: 'LT',
        name: '五码趣味三星',
        dataFormatter: [
            [],
            [],
            [],
            [],
            []
        ],
        plateType: 7,
        funRow: [1, 2],
        title: "趣味-趣味-五码趣味三星",
        selectMethod: "分别从万位与千位中各选择一个大小号属性，并从百位、十位、个位中至少各选1个号码组成一注",
        winningRule: "在个位、十位、百位上至少各选1个号码，并从千位与万位的“大小号”中分别任选一种号码进行投注。其中，0-4为“小号”；5-9为“大号”。投注内容只要和开奖号码的后三位相同，顺序一致，即可中奖。"
    }, {
        betType: 'F4N3',
        gameCode: 'LT',
        name: '四码趣味三星',
        dataFormatter: [
            [],
            [],
            [],
            []
        ],
        plateType: 7,
        funRow: [1],
        title: "趣味-趣味-四码趣味三星",
        selectMethod: "选择一个千位的大小号属性，并从百位、十位、个位中至少各选1个号码",
        winningRule: "在个位、十位、百位上至少各选1个号码，并从千位“大小号”中任选一种号码属性进行投注。其中，0-4为“小号”；5-9为“大号”。投注内容只要和开奖号码的后三位相同，顺序一致，即可中奖。"
    }, {
        betType: 'F3N2L',
        gameCode: 'LT',
        name: '后三趣味二星',
        dataFormatter: [
            [],
            [],
            []
        ],
        plateType: 7,
        funRow: [1],
        title: "趣味-趣味-后三趣味二星",
        selectMethod: "选择一个百位的大小号属性，并从十位、个位中至少各选1个号码",
        winningRule: "在个位、十位上至少各选1个号码，并从百位“大小号”中任选一种号码属性进行投注。其中，0-4为“小号”；5-9为“大号”。投注内容和开奖号码的后二位相同，顺序一致，即可中奖。"
    }, {
        betType: 'F3N2F',
        gameCode: 'LT',
        name: '前三趣味二星',
        dataFormatter: [
            [],
            [],
            []
        ],
        plateType: 7,
        funRow: [1],
        title: "趣味-趣味-前三趣味二星",
        selectMethod: "选择一个万位的大小号属性，并从千位、百位中至少各选1个号码",
        winningRule: "在千位、百位上至少各选1个号码，并从万位 “大小号”中任选一种号码属性进行投注。0-4为“小号”；5-9为“大号”。投注内容只要和开奖号码的千位和百位相同，顺序一致，即可中奖。"
    }, {
        betType: 'F3N2M',
        gameCode: 'LT',
        name: '中三趣味二星',
        dataFormatter: [
            [],
            [],
            []
        ],
        plateType: 7,
        funRow: [1],
        title: "趣味-趣味-中三趣味二星",
        selectMethod: "选择一个千位的大小号属性，并从百位、十位中至少各选1个号码",
        winningRule: "在百位、十位上至少各选1个号码，并从千位 “大小号”中任选一种号码属性进行投注。0-4为“小号”；5-9为“大号”。投注内容只要和开奖号码的百位和十位相同，顺序一致，即可中奖。"
    },

    {
        betType: 'R5N3',
        gameCode: 'LT',
        name: '五码区间三星',
        dataFormatter: [
            [],
            [],
            [],
            [],
            []
        ],
        plateType: 8,
        funRow: [1, 2],
        title: "趣味-区间-五码区间三星",
        selectMethod: "分别从万位与千位中各选择一个区间，并从百位、十位、个位中至少各选1个号码组成一注",
        winningRule: "在个位、十位、百位上至少各选1个号码，并从千位及万位的5个区间中至少分别选择一个区间进行投注。投注内容只要和开奖号码的后三位相同，顺序一致，即可中奖。"
    }, {
        betType: 'R4N3',
        gameCode: 'LT',
        name: '四码区间三星',
        dataFormatter: [
            [],
            [],
            [],
            []
        ],
        plateType: 8,
        funRow: [1],
        title: "趣味-区间-四码区间三星",
        selectMethod: "选择一个千位号码区间，并从百位、十位、个位中至少各选择1个号码组成一注",
        winningRule: "在个位、十位、百位上至少各选1个号码，并从千位的5个区间中至少任选一个区间进行投注。投注内容只要和开奖号码的后三位相同，顺序一致，即可中奖。"
    }, {
        betType: 'R3N2L',
        gameCode: 'LT',
        name: '后三区间二星',
        dataFormatter: [
            [],
            [],
            []
        ],
        plateType: 8,
        funRow: [1],
        title: "趣味-区间-后三区间二星",
        selectMethod: "选择一个百位号码区间，并从十位、个位中至少各选择1个号码组成一注",
        winningRule: "选择一个百位号码区间，并从十位、个位中各选择1个号码组成一注。投注内容只要和开奖号码的后二位相同，顺序一致，即可中奖。"
    }, {
        betType: 'R3N2F',
        gameCode: 'LT',
        name: '前三区间二星',
        dataFormatter: [
            [],
            [],
            []
        ],
        plateType: 8,
        funRow: [1],
        title: "趣味-区间-前三区间二星",
        selectMethod: "选择一个万位号码区间，并从千位、百位中至少各选择1个号码组成一注",
        winningRule: "选择一个万位号码区间，并从千位、百位中至少各选择1个号码组成一注。投注内容只要和开奖号码的千位和百位相同，顺序一致，即可中奖。"
    }, {
        betType: 'R3N2M',
        gameCode: 'LT',
        name: '中三区间二星',
        dataFormatter: [
            [],
            [],
            []
        ],
        plateType: 8,
        funRow: [1],
        title: "趣味-区间-中三区间二星",
        selectMethod: "选择一个千位号码区间，并从百位、十位中至少各选择1个号码组成一注",
        winningRule: "选择一个千位号码区间，并从百位、十位中至少各选择1个号码组成一注。投注内容只要和开奖号码的百位和十位相同，顺序一致，即可中奖。"
    },

    {
        betType: 'SA1',
        gameCode: 'LT',
        name: '一帆风顺',
        dataFormatter: [
            []
        ],
        plateType: 1,
        title: "趣味-特殊-一帆风顺",
        selectMethod: "从0-9中任意选择1个以上号码",
        winningRule: "从0-9中任意选择1个号码组成一注，只要开奖号码的万位、千位、百位、十位、个位中包含所选号码，即为中奖。"
    }, {
        betType: 'SA2',
        gameCode: 'LT',
        name: '好事成双',
        dataFormatter: [
            []
        ],
        plateType: 1,
        title: "趣味-特殊-好事成双",
        selectMethod: "从0-9中任意选择1个以上的二重号码",
        winningRule: "从0-9中任意选择1个号码组成一注，只要所选号码在开奖号码的万位、千位、百位、十位、个位中出现2次，即为中奖。"
    }, {
        betType: 'SA3',
        gameCode: 'LT',
        name: '三星报喜',
        dataFormatter: [
            []
        ],
        plateType: 1,
        title: "趣味-特殊-三星报喜",
        selectMethod: "从0-9中任意选择1个以上的三重号码",
        winningRule: "从0-9中任意选择1个号码组成一注，只要所选号码在开奖号码的万位、千位、百位、十位、个位中出现3次，即为中奖。"
    }, {
        betType: 'SA4',
        gameCode: 'LT',
        name: '四季发财',
        dataFormatter: [
            []
        ],
        plateType: 1,
        title: "趣味-特殊-四季发财",
        selectMethod: "从0-9中任意选择1个以上的四重号码",
        winningRule: "从0-9中任意选择1个号码组成一注，只要所选号码在开奖号码的万位、千位、百位、十位、个位中出现4次，即为中奖。"
    },


    //任选玩法组规则
    {
        betType: 'A2P',
        gameCode: 'LT',
        name: '任选二直选复式',
        dataFormatter: [
            [],
            [],
            [],
            [],
            []
        ],
        plateType: 1,
        title: "任选-任选二-直选复式",
        selectMethod: "从万位、千位、百位、十位、个位中至少两位上各选1个号码组成一注。",
        winningRule: "所选号码与开奖号码的指定位置上的号码相同，且顺序一致，即为中奖。如投注方案：万位5，百位8。开奖号码：51812，即中任二直选。"
    }, { //特殊情况 上传
        betType: 'A2S',
        gameCode: 'LT',
        name: '任选二直选单式',
        dataFormatter: [
            [],
            []
        ],
        plateType: 2,
        unitGroup: true,
        title: "任选-任选二-直选单式",
        selectMethod: "从万位、千位、百位、十位、个位中至少选择两个位置，至少手动输入一个两位数的号码构成一注。",
        winningRule: "所选号码与开奖号码的指定位置上的号码相同，且顺序一致，即为中奖。如投注方案：位置选择万位、百位，输入号码58。开奖号码：51812，即中任二直选单式。",
        betRuleTip: "格式范例：12 45 78 33 88"
    }, {
        betType: 'A2T',
        gameCode: 'LT',
        name: '任选二直选和值',
        dataFormatter: [
            [],
            []
        ],
        plateType: 3,
        unitGroup: true,
        title: "任选-任选二-直选和值",
        selectMethod: "从万位、千位、百位、十位、个位中至少选择两个位置，至少选择一个和值号码构成一注。",
        winningRule: "所选号码与开奖号码的和值相同，即为中奖。如投注方案：位置选择万位、百位，选择和值号码13。开奖号码：51812，即中任二直选和值。"
    }, {
        betType: 'A2G2',
        gameCode: 'LT',
        name: '任选二组选复式',
        dataFormatter: [
            [],
            []
        ],
        plateType: 1,
        unitGroup: true,
        title: "任选-任选二-组选复式",
        selectMethod: "从万位、千位、百位、十位、个位中至少选择两个位置，号码区至少选择两个号码构成一注。",
        winningRule: "所选号码与开奖号码的指定位置上的号码相同，且顺序不限，即为中奖。如投注方案：选择万位和百位，选择号码5和8。开奖号码：51812或81512，即中任二组选复试。"
    }, { //特殊情况 上传
        betType: 'A2G2S',
        gameCode: 'LT',
        name: '任选二组选单式',
        dataFormatter: [
            [],
            []
        ],
        plateType: 2,
        unitGroup: true,
        title: "任选-任选二-组选单式",
        selectMethod: "从万位、千位、百位、十位、个位中至少选择两个位置，至少手动输入一个两位数的号码构成一注。",
        winningRule: "所选号码与开奖号码的指定位置上的号码相同，且顺序不限，即为中奖。如投注方案：选择万位和百位，选择号码5和8。开奖号码：51812或81512，即中任二组选单式。",
        betRuleTip: "格式范例：12 45 78 34 89"
    }, {
        betType: 'A2G2T',
        gameCode: 'LT',
        name: '任选二组选和值',
        dataFormatter: [
            [],
            []
        ],
        plateType: 3,
        unitGroup: true,
        title: "任选-任选二-组选和值",
        selectMethod: "从万位、千位、百位、十位、个位中至少选择两个位置，至少选择一个和值号码构成一注。",
        winningRule: "所选号码数值等于开奖号码的二个数字相加之和，即为中奖。如投注方案：选择万位和百位，选择和值13。开奖号码：51812或81512，即中任二组选和值。"
    },

    {
        betType: 'A3P',
        gameCode: 'LT',
        name: '任选三直选复式',
        dataFormatter: [
            [],
            [],
            [],
            [],
            []
        ],
        plateType: 1,
        title: "任选-任选三-直选复式",
        selectMethod: "从万位、千位、百位、十位、个位中至少三位上各选1个号码组成一注，",
        winningRule: "所选号码与开奖号码的指定位置上的号码相同，且顺序一致，即为中奖。如投注方案：万位5，千位8，个位2。开奖号码58692，即中任三直选。"
    }, { //特殊情况 上传
        betType: 'A3S',
        gameCode: 'LT',
        name: '任选三直选单式',
        dataFormatter: [
            [],
            []
        ],
        plateType: 2,
        unitGroup: true,
        title: "任选-任选三-直选单式",
        selectMethod: "从万位、千位、百位、十位、个位中至少选择三个位置，至少手动输入一个三位数的号码构成一注。",
        winningRule: "所选号码与开奖号码的指定位置上的号码相同，且顺序一致，即为中奖。投注方案：位置选择万位、百位和个位，输入号码528，开奖号码57298，即中任三直选（单式）。",
        betRuleTip: "格式范例：123 456 789 335 882"
    }, {
        betType: 'A3T',
        gameCode: 'LT',
        name: '任选三直选和值',
        dataFormatter: [
            [],
            []
        ],
        plateType: 3,
        unitGroup: true,
        title: "任选-任选三-直选和值",
        selectMethod: "从万位、千位、百位、十位、个位中至少选择三个位置，至少选择一个和值号码构成一注，所选号码与开奖号码的和值相同，即为中奖。",
        winningRule: "所选号码与开奖号码的和值相同，即为中奖。如投注方案：位置选择万位、百位和个位，选择和值号码15，开奖号码51812，即中任三直选和值。"
    }, {
        betType: 'A3G3X3',
        gameCode: 'LT',
        name: '任选三组三复式',
        dataFormatter: [
            [],
            []
        ],
        plateType: 1,
        unitGroup: true,
        title: "任选-任选三-组三复式",
        selectMethod: "从万位、千位、百位、十位、个位中至少选择三个位置，号码区至少选择两个号码构成一注。",
        winningRule: "所选号码与开奖号码的指定位置上的号码相同，且顺序不限，即为中奖。如投注方案：选择位置万位、十位、个位，选择号码12，开奖号码11812，即中任三组三。"
    }, { //特殊情况 上传
        betType: 'A3G3X3S',
        gameCode: 'LT',
        name: '任选三组三单式',
        dataFormatter: [
            [],
            []
        ],
        plateType: 2,
        unitGroup: true,
        title: "任选-任选三-组三单式",
        selectMethod: "从万位、千位、百位、十位、个位中至少选择三个位置，手动输入号码，至少1个三位数号码。（三个数字当中有两个数字相同）",
        winningRule: "所选号码与开奖号码的指定位置上的号码相同，且顺序不限，即为中奖，如投注方案：选择位置万位、十位、个位，输入号码112，开奖号码：17421，即中任三组三（单式）。",
        betRuleTip: "格式范例：122 446 779 335 882"
    }, {
        betType: 'A3G3X6',
        gameCode: 'LT',
        name: '任选三组六复式',
        dataFormatter: [
            [],
            []
        ],
        plateType: 1,
        unitGroup: true,
        title: "任选-任选三-组六复式",
        selectMethod: "从万位、千位、百位、十位、个位中至少选择三个位置，号码区至少选择三个号码构成一注。",
        winningRule: "所选号码与开奖号码的指定位置上的号码相同，且顺序不限，即为中奖。如投注方案：选择位置万位、十位、个位，选择号码512，开奖号码51812，即中任三组六。"
    }, { //特殊情况 上传
        betType: 'A3G3X6S',
        gameCode: 'LT',
        name: '任选三组六单式',
        dataFormatter: [
            [],
            []
        ],
        plateType: 2,
        unitGroup: true,
        title: "任选-任选三-组六单式",
        selectMethod: "从万位、千位、百位、十位、个位中至少选择三个位置，手动输入至少三个号码构成一注（三个号码不相同）。",
        winningRule: "所选号码与开奖号码的指定位置上的号码相同，且顺序不限，即为中奖。如投注方案：选择位置万位、十位、个位，输入号码512，开奖号码51812，即中任三组六（单式）。",
        betRuleTip: "格式范例：123 456 789 345 892"
    }, { //特殊情况 上传
        betType: 'A3G3MX',
        gameCode: 'LT',
        name: '任选三混合组选',
        dataFormatter: [
            [],
            []
        ],
        plateType: 2,
        unitGroup: true,
        title: "任选-任选三-混合组选",
        selectMethod: "从万位、千位、百位、十位、个位中至少选择三个位置，手动至少输入三个号码构成一注（不包含豹子号）。",
        winningRule: "所选号码与开奖号码的指定位置的号码相同，且顺序不限，即为中奖。如投注方案：选择位置万位、十位、个位，输入号码512，开奖号码51812，即中任三混合组选。",
        betRuleTip: "格式范例：123 456 789 335 882"
    }, {
        betType: 'A3G3T',
        gameCode: 'LT',
        name: '任选三组选和值',
        dataFormatter: [
            [],
            []
        ],
        plateType: 3,
        title: "任选-任选三-组选和值",
        selectMethod: "从万位、千位、百位、十位、个位中至少选择三个位置，至少选择一个和值号码构成一注",
        winningRule: "所选号码与开奖号码（不含豹子号）的指定位置的号码之和相同，且顺序不限，即为中奖。如投注方案：选择位置万位、十位、个位，选择和值号码8，开奖号码51812，即中任三组选和值。"
    },

    {
        betType: 'A4P',
        gameCode: 'LT',
        name: '任选四直选复式',
        dataFormatter: [
            [],
            [],
            [],
            [],
            []
        ],
        plateType: 1,
        title: "任选-任选四-直选复式",
        selectMethod: "从万位、千位、百位、十位、个位中至少四位上各选1个号码组成一注。",
        winningRule: "所选号码与开奖号码的指定位置上的号码相同，且顺序一致，即为中奖。如投注方案：万位5，千位1，百位8，个位1，开奖号码51821，即中任四直选复式。"
    }, { //特殊情况 上传
        betType: 'A4S',
        gameCode: 'LT',
        name: '任选四直选单式',
        dataFormatter: [
            [],
            []
        ],
        plateType: 2,
        unitGroup: true,
        title: "任选-任选四-直选单式",
        selectMethod: "从万位、千位、百位、十位、个位中至少选择四个位置，至少手动输入一个四位数的号码构成一注。",
        winningRule: "所选号码与开奖号码的指定位置上的号码相同，且顺序一致，即为中奖。如投注方式：选择万位、千位、百位和个位，输入号码5181，开奖号码51821，即中任四直选单式。",
        betRuleTip: "格式范例：1234 4567 6789 3352 8827"
    }, {
        betType: 'A4G4X24',
        gameCode: 'LT',
        name: '任选四组选24',
        dataFormatter: [
            [],
            []
        ],
        plateType: 1,
        unitGroup: true,
        title: "任选-任选四-组选24",
        selectMethod: "从万位、千位、百位、十位、个位中至少选择四个位置，号码区至少选择四个号码构成一注。",
        winningRule: "所选号码与开奖号码的指定位置上的号码相同，且顺序不限，即为中奖。如投注方式：位置选择万位、百位、十位和个位，号码选择0568，开奖号码57086（顺序不限），即中任四组选24。"
    }, {
        betType: 'A4G4X12',
        gameCode: 'LT',
        name: '任选四组选12',
        dataFormatter: [
            [],
            [],
            []
        ],
        plateType: 1,
        unitGroup: true,
        title: "任选-任选四-组选12",
        selectMethod: "从万位、千位、百位、十位、个位中至少选择四个位置，从“二重号”选择一个号码，“单号”中选择两个号码组成一注。",
        winningRule: "所选号码与开奖号码的指定位置上的号码相同，且顺序不限，即为中奖。如投注方式：位置选择千位、百位、十位和个位，二重号：8，单号：06，开奖号码58086（顺序不限），即中任四组选12。"
    }, {
        betType: 'A4G4X6',
        gameCode: 'LT',
        name: '任选四组选6',
        dataFormatter: [
            [],
            []
        ],
        plateType: 1,
        unitGroup: true,
        title: "任选-任选四-组选6",
        selectMethod: "从万位、千位、百位、十位、个位中至少选择四个位置，从“二重号”中至少选择两个号码组成一注。",
        winningRule: "所选号码与开奖号码的指定位置上的号码相同，且顺序不限，即为中奖。如投注方式：位置选择千位、百位、十位和个位，二重号：28，开奖号码58282（顺序不限），即中任四组选6。"
    }, {
        betType: 'A4G4X4',
        gameCode: 'LT',
        name: '任选四组选4',
        dataFormatter: [
            [],
            [],
            []
        ],
        plateType: 1,
        unitGroup: true,
        title: "任选-任选四-组选4",
        selectMethod: "从万位、千位、百位、十位、个位中至少选择四个位置，从“三重号”中选择一个号码，“单号”中选择一个号码组成一注。",
        winningRule: "所选号码与开奖号码的指定位置上的号码相同，且顺序不限，即为中奖。如投注方式：位置选择千位、百位、十位和个位，三重号：8，单号：2，开奖号码58882（顺序不限），即中任四组选4。"
    },


    //龙虎和玩法组规则 
    {
        betType: 'LH54',
        gameCode: 'LT',
        name: '龙虎和万千',
        dataFormatter: [
            []
        ],
        plateType: 6,
        title: "龙虎-龙虎和-万千",
        selectMethod: "从万位、千位上选择一个形态组成一注。",
        winningRule: "根据万位、千位号码数值比大小，万位号码大于千位号码为龙，万位号码小于千位号码为虎，号码相同则为和。所选形态与开奖号码形态一致，即为中奖。"
    }, {
        betType: 'LH53',
        gameCode: 'LT',
        name: '龙虎和万百',
        dataFormatter: [
            []
        ],
        plateType: 6,
        title: "龙虎-龙虎和-万百",
        selectMethod: "从万位、百位上选择一个形态组成一注。",
        winningRule: "根据万位、百位号码数值比大小，万位号码大于百位号码为龙，万位号码小于百位号码为虎，号码相同则为和。所选形态与开奖号码形态一致，即为中奖。"
    }, {
        betType: 'LH52',
        gameCode: 'LT',
        name: '龙虎和万十',
        dataFormatter: [
            []
        ],
        plateType: 6,
        title: "龙虎-龙虎和-万十",
        selectMethod: "从万位、十位上选择一个形态组成一注。",
        winningRule: "根据万位、十位号码数值比大小，万位号码大于十位号码为龙，万位号码小于十位号码为虎，号码相同则为和。所选形态与开奖号码形态一致，即为中奖。"
    }, {
        betType: 'LH51',
        gameCode: 'LT',
        name: '龙虎和万个',
        dataFormatter: [
            []
        ],
        plateType: 6,
        title: "龙虎-龙虎和-万个",
        selectMethod: "从万位、个位上选择一个形态组成一注。",
        winningRule: "根据万位、个位号码数值比大小，万位号码大于个位号码为龙，万位号码小于个位号码为虎，号码相同则为和。所选形态与开奖号码形态一致，即为中奖。"
    }, {
        betType: 'LH43',
        gameCode: 'LT',
        name: '龙虎和千百',
        dataFormatter: [
            []
        ],
        plateType: 6,
        title: "龙虎-龙虎和-千百",
        selectMethod: "从千位、百位上选择一个形态组成一注。",
        winningRule: "根据千位、百位号码数值比大小，千位号码大于百位号码为龙，千位号码小于百位号码为虎，号码相同则为和。所选形态与开奖号码形态一致，即为中奖。"
    }, {
        betType: 'LH42',
        gameCode: 'LT',
        name: '龙虎和千十',
        dataFormatter: [
            []
        ],
        plateType: 6,
        title: "龙虎-龙虎和-千十",
        selectMethod: "从千位、十位上选择一个形态组成一注。",
        winningRule: "根据千位、十位号码数值比大小，千位号码大于十位号码为龙，千位号码小于十位号码为虎，号码相同则为和。所选形态与开奖号码形态一致，即为中奖。"
    }, {
        betType: 'LH41',
        gameCode: 'LT',
        name: '龙虎和千个',
        dataFormatter: [
            []
        ],
        plateType: 6,
        title: "龙虎-龙虎和-千个",
        selectMethod: "从千位、个位上选择一个形态组成一注。",
        winningRule: "根据千位、个位号码数值比大小，千位号码大于个位号码为龙，千位号码小于个位号码为虎，号码相同则为和。所选形态与开奖号码形态一致，即为中奖。"
    }, {
        betType: 'LH32',
        gameCode: 'LT',
        name: '龙虎和百十',
        dataFormatter: [
            []
        ],
        plateType: 6,
        title: "龙虎-龙虎和-百十",
        selectMethod: "从百位、十位上选择一个形态组成一注。",
        winningRule: "根据百位、十位号码数值比大小，百位号码大于十位号码为龙，百位号码小于十位号码为虎，号码相同则为和。所选形态与开奖号码形态一致，即为中奖。"
    }, {
        betType: 'LH31',
        gameCode: 'LT',
        name: '龙虎和百个',
        dataFormatter: [
            []
        ],
        plateType: 6,
        title: "龙虎-龙虎和-百个",
        selectMethod: "从百位、个位上选择一个形态组成一注。",
        winningRule: "根据百位、个位号码数值比大小，百位号码大于个位号码为龙，百位号码小于个位号码为虎，号码相同则为和。所选形态与开奖号码形态一致，即为中奖。"
    }, {
        betType: 'LH21',
        gameCode: 'LT',
        name: '龙虎和十个',
        dataFormatter: [
            []
        ],
        plateType: 6,
        title: "龙虎-龙虎和-十个",
        selectMethod: "从十位、个位上选择一个形态组成一注。",
        winningRule: "根据十位、个位号码数值比大小，十位号码大于个位号码为龙，十位号码小于个位号码为虎，号码相同则为和。所选形态与开奖号码形态一致，即为中奖。"
    }
]);

$(function() {
    var placeBetObj = {
        //复式
        ZSFS_bet: [
            'N5P',
            'N4P',
            'N3PF',
            'N3PM',
            'N3PL',
            'N2PL',
            'N2PF',
            'N5C',
            'N4C',
            'N3CF',
            'N3CM',
            'N3CL',
            'N1'
        ],

        RXZXDS_bet: [
            'A2S',
            'A2G2S',
            'A3S',
            'A3G3X3S',
            'A3G3X6S',
            'A3G3MX',
            'A4S'
        ],

        RXZX_bet: [
            'A4G4X12',
            'A4G4X24',
            'A4G4X6',
            'A4G4X4'
        ],

        RXFS_bet: [
            'A2P',
            'A3P',
            'A4P'
        ],

        DXDS_bet: [
            ////大小单双
            'BSOEL2',
            'BSOEL3',
            'BSOEF2',
            'BSOEF3',
            'BSOEM3'
        ],

        //五星直选单式
        ZXDS_bet: [
            'N5S',
            'N4S',

            'N3SF',
            'G3MXF',
            'G3X3SF',
            'G3X6SF',

            'N3SM',
            'G3MXM',
            'G3X3SM',
            'G3X6SM',

            'N3SL',
            'G3MXL',
            'G3X3SL',
            'G3X6SL',

            'N2SL',
            'N2SF',
            'G2SL',
            'G2SF'
        ],

        //五星组选120
        ZX120_bet: [
            'G5X120',
            'G4X24',

            'N3TF',
            'N3DF',
            'G3X3F',
            'G3X6F',
            'G3TF',
            'G3BF',
            'S3TDF',

            'N3TM',
            'N3DM',
            'G3X3M',
            'G3X6M',
            'G3TM',
            'G3BM',
            'S3TDM',

            'N3TL',
            'N3DL',
            'G3X3L',
            'G3X6L',
            'G3TL',
            'G3BL',
            'S3TDL',

            'N2TL',
            'N2DL',
            'N2TF',
            'N2DF',

            'G2L',
            'G2TL',
            'G2BL',
            'G2F',
            'G2TF',
            'G2BF',

            'A1L3',
            'A2L3',
            'A1F3',
            'A2F3',
            'A1M3',
            'A2M3',
            'A1L4',
            'A2L4',
            'A1N5',
            'A2N5',
            'A3N5',

            'SA1',
            'SA2',
            'SA3',
            'SA4'
        ],

        //五星组选60
        ZX60_bet: [
            'G5X60',
            'G5X30',
            'G5X20',
            'G5X10',
            'G5X5',
            'G4X12',
            'G4X6',
            'G4X4'
        ],

        //前三特殊号码
        QSTX_bet: [
            'S3SF',
            'S3SM',
            'S3SL',
            'LH54',
            'LH53',
            'LH52',
            'LH51',
            'LH43',
            'LH42',
            'LH41',
            'LH32',
            'LH31',
            'LH21'
        ],

        //五码趣味三星
        WMQWSX_bet: [
            'F5N3',
            'F4N3',
            'F3N2L',
            'F3N2F',
            'F3N2M',
            'R5N3',
            'R4N3',
            'R3N2L',
            'R3N2F',
            'R3N2M'
        ],

        //任意选二--直选合值
        RXEZXHZ_bet: [
            'A2T',
            'A2G2',
            'A2G2T',
            'A3T',
            'A3G3X3',
            'A3G3X6',
            'A3G3T',
            'A4G4X6'
        ]
    };

    //万，千，百，十，个 items赋值
    var getBetItem = function(betType) {
        var it = BetRuleInstance;
        var betResult = [];
        var drawType = null;
        var betTypeArr = [
            ['N5P', 'N1', 'N5C', 'F5N3', 'R5N3'], //五星
            ['N4P', 'N4C', 'F4N3', 'R4N3'], //四星
            ['N3PF', 'N3CF', 'F3N2F', 'R3N2F'], //前三
            ['N3PM', 'N3CM', 'F3N2M', 'R3N2M'], //中三
            ['N3PL', 'N3CL', 'F3N2L', 'R3N2L'], //后三
            ['N2PL'], //后二
            ['N2PF'] //前二
        ];
        var drawTypeArr = [
            ['5th', '4th', '3rd', '2nd', '1st'],
            ['4th', '3rd', '2nd', '1st'],
            ['5th', '4th', '3rd'],
            ['4th', '3rd', '2nd'],
            ['3rd', '2nd', '1st'],
            ['2nd', '1st'],
            ['5th', '4th']
        ];
        var drawTypeArr_3D = [['3rd','2nd'],['3rd','2nd','1st']];
        for (var i = 0; i < it.result.length; i++) {
            if (it.result[i].length == 0) continue;

            for (var j = 0; j < drawTypeArr.length; j++) {
                if (betTypeArr[j].indexOf(betType) > -1) {
                    //3D特殊判断
                    if(app.currentSocket.market == 'CN3D'&& betType == 'N2PF'){
                        drawType = drawTypeArr_3D[0][i]
                    }else if(app.currentSocket.market == 'CN3D'&& betType == 'N1'){
                        drawType = drawTypeArr_3D[1][i]
                    }else{
                        drawType = drawTypeArr[j][i];
                    }
                    break;
                }
            }
            betResult.push({
                betItem: it.result[i],
                drawType: drawType
            })
        }
        return betResult;
    };

    //大小单双 items赋值
    var getBigSmellOddEvenBetItem = function(betType) {
        var it = BetRuleInstance;
        var betResult = [];
        var drawType = null;
        var betTypeArr = ['BSOEL2', 'BSOEL3', 'BSOEF2', 'BSOEF3', 'BSOEM3'];
        var drawTypeArr = [
            ['2nd', '1st'],
            ['3rd', '2nd', '1st'],
            ['5th', '4th'],
            ['5th', '4th', '3rd'],
            ['4th', '3rd', '2nd']
        ];
        var drawTypeArr_3D = ['3rd','2nd'];
        for (var i = 0; i < it.result.length; i++) {
            if (it.result[i].length == 0) continue;
            for (var j = 0; j < drawTypeArr.length; j++) {
                if (betTypeArr[j] == betType) {
                    if(app.currentSocket.market == 'CN3D'&& betType == 'BSOEF2'){
                        drawType = drawTypeArr_3D[i]
                    }else{
                        drawType = drawTypeArr[j][i];
                    }
                    break;
                }
            }
            betResult.push({
                betItem: it.result[i],
                drawType: drawType
            })
        }
        return betResult;
    };

    //任选复式 items赋值
    var getRXFSBetItem = function() {
        var it = BetRuleInstance;
        var betResult = [];
        var drawType = null;
        var drawTypeArr = ['5th', '4th', '3rd', '2nd', '1st'];
        for (var i = 0; i < it.result.length; i++) {
            if (it.result[i].length == 0) continue;
            drawType = drawTypeArr[i];
            betResult.push({
                betItem: it.result[i],
                drawType: drawType
            });
        }
        return betResult;
    };

    //五星直选
    var ZSFS = function(bet, state) {
        var data = this.getCommonData();
        data.items = this.getBetItem(bet);
        if (state) {
            return data;
        } else {
            this.commitBet(data);
        }
    };

    //任选复式
    var RXFS = function(bet, state) {
        var data = this.getCommonData();
        data.items = this.getRXFSBetItem();
        if (state) {
            return data;
        } else {
            this.commitBet(data);
        }
    };

    //任选直选单式
    var RXZXDS = function(bet, state) {
        var it = BetRuleInstance;
        var data = this.getCommonData();
        data.items = [{
            "betItem": it.result[0],
            "drawType": it.betType
        }];
        data.anyDrawTypes = it.result[1].slice(0);
        if (state) {
            return data;
        } else {
            this.commitBet(data);
        }
    };

    //大小单双
    var DXDS = function(bet, state) {
        var data = this.getCommonData();
        data.items = this.getBigSmellOddEvenBetItem(bet);
        if (state) {
            return data;
        } else {
            this.commitBet(data);
        }
    };

    //五星直选单式
    var ZXDS = function(bet, state) {
        var it = BetRuleInstance;
        var data = this.getCommonData();
        var list = it.result[0];
        var betItem = [];
        for (var i = 0; i < list.length; i++) {
            if (list[i] != '')
                betItem.push(list[i])
        }
        data.items = [{
            "betItem": betItem,
            "drawType": it.betType
        }];
        if (state) {
            return data;
        } else {
            this.commitBet(data);
        }
    };

    //五星组选120
    var ZX120 = function(bet, state) {
        var it = BetRuleInstance;
        var data = this.getCommonData();
        data.items = [{
            "betItem": it.result[0],
            "drawType": it.betType
        }];
        if (state) {
            return data;
        } else {
            this.commitBet(data);
        }
    };

    //五星组选60
    var ZX60 = function(bet, state) {
        var it = BetRuleInstance;
        var data = this.getCommonData();
        data.items = [];
        for (var i = 0; i < it.result.length; i++) {
            if (it.result[i].length > 0) {
                data.items.push({
                    "betItem": it.result[i] || '',
                    "drawType": i == 0 ? 'Banker' : 'Ball'
                })
            }
        }
        if (state) {
            return data;
        } else {
            this.commitBet(data);
        }
    };

    //前三特殊号码
    var QSTX = function(bet, state) {
        var it = BetRuleInstance;
        var data = this.getCommonData();
        data.items = [{
            "betItem": it.result[0],
            "drawType": it.betType,
        }];
        if (state) {
            return data;
        } else {
            this.commitBet(data);
        }
    };

    //五码趣味三星
    var WMQWSX = function(bet, state) {
        var data = this.getCommonData();
        data.items = this.getBetItem(bet);
        if (state) {
            return data;
        } else {
            this.commitBet(data);
        }
    };

    //任选二--直选合值
    var RXEZXHZ = function(bet, state) {
        var it = BetRuleInstance;
        var data = this.getCommonData();
        data.items = [{
            "betItem": it.result[0],
            "drawType": it.betType
        }];
        data.anyDrawTypes = it.result[1].slice(0);
        if (state) {
            return data;
        } else {
            this.commitBet(data);
        }
    };

    var RXZX = function(bet, state) {
        var it = BetRuleInstance;
        var data = this.getCommonData();
        data.items = [];
        for (var i = 0; i < it.result.length; i++) {
            if (it.result[i].length > 0 && i != it.result.length - 1) {
                data.items.push({
                    "betItem": it.result[i] || '',
                    "drawType": i == 0 ? 'Banker' : 'Ball'
                })
            }
        }
        data.anyDrawTypes = it.result[it.result.length - 1].slice(0);
        if (state) {
            return data;
        } else {
            this.commitBet(data);
        }
    };

    function LT_PlaceBet() {
        this.getBetItem                 =   getBetItem;
        this.getBigSmellOddEvenBetItem  =   getBigSmellOddEvenBetItem;
        this.getRXFSBetItem             =   getRXFSBetItem;
        this.ZSFS                       =   ZSFS;
        this.RXFS                       =   RXFS;
        this.RXZXDS                     =   RXZXDS;
        this.DXDS                       =   DXDS;
        this.ZXDS                       =   ZXDS;
        this.ZX120                      =   ZX120;
        this.ZX60                       =   ZX60;
        this.QSTX                       =   QSTX;
        this.WMQWSX                     =   WMQWSX;
        this.RXEZXHZ                    =   RXEZXHZ;
        this.RXZX                       =   RXZX;
    }

    LT_PlaceBet.prototype = new IPlaceBet(placeBetObj);
    window.LT_PlaceBet = new LT_PlaceBet();
});

/*
 *  豹子，对子，顺子 投注盘 BDSPlate.js
 */

(function () {
    function BDSPlate (opt) {
        this.opt = opt;
        this.id  = this.opt.id;
        this.el  = this.initDom();
    }

    BDSPlate.prototype.initDom = function () {
        var temp;

        temp =  '<div class="row bds-plate" id="' + this.id + '">' +
                    '<div class="col-md-3"></div>' +
                    '<div class="col-md-6">' +
                        '<div class="row">' +
                            '<div class="col-md-2 ball-item" data-value="TRI">' +
                                '<span>' +
                                    '豹子' +
                                '</span>' +
                            '</div>' +
                            '<div class="col-md-2 ball-item" data-value="PAIR">' +
                                '<span>' +
                                    '对子' +
                                '</span>' +
                            '</div>' +
                            '<div class="col-md-2 ball-item" data-value="SN">' +
                                '<span>' +
                                    '顺子' +
                                '</span>' +
                            '</div>' +
                        '</div>' +
                    '</div>' +
                    '<div class="col-md-3"></div>' +
                '</div>';

        return temp;
    };

    BDSPlate.prototype.getDom = function () {
        return this.el;
    };

    BDSPlate.prototype.showPlate = function (opt) {
        this.zone.show();
    };

    BDSPlate.prototype.hide = function () {
        this.zone.find('.selected').removeClass('selected');
        this.zone.hide();
    };

    BDSPlate.prototype.bindEvents = function () {
        this.zone = $('#' + this.id);

        this.zone.delegate('.ball-item', 'click', function () {
            BetRuleInstance.checkSelect($(this));
        });
    };

    window.BDSPlate = BDSPlate;
}());


/*
** 继承自IMDialog
*/

(function () {
	function BetOrderDetail (opt) {
		IMDialog.call(this, (opt || {}));
		this.id = this.opt.id;
		this.el = this.initDom();
	}

	BetOrderDetail.prototype = new IMDialog();

	BetOrderDetail.prototype.initDom = function () {
		var temp;

		this.cancel = new IMButton({
			text: '撤单',
			className: 'cancel-order',
			imgSrc: '../img/cancel.png'
		});

		this.ok = new IMButton({
			text: '确定',
			className: 'ok-button',
			imgSrc: '../img/dash.png'
		});

		temp = 	'<div class="bet-order-detail" id="' + this.id + '">' +
					'<div class="dialog-wrapper">' +
						'<div class="dialog">' +
							'<div class="close-dialog">✕</div>' +
							'<div class="content">' +
								'<table>' +
									'<tbody>' +
										'<tr class="even ">' +
											'<td class="text">注单编号：</td>' +
											'<td class="value singleNumber" ></td>' +
										'</tr>' +
										'<tr class="odd">' +
											'<td class="text">游戏名称</td>' +
											'<td class="value gameName" ></td>' +
										'</tr>' +
										'<tr class="even">' +
											'<td class="text">游戏玩法：</td>' +
											'<td class="value gamePlay" ></td>' +
										'</tr>' +
										'<tr class="odd">' +
											'<td class="text">游戏期号：</td>' +
											'<td class="value gameSeries" ></td>' +
										'</tr>' +
										'<tr class="even">' +
											'<td class="text">投注时间：</td>' +
											'<td class="value betTime"></td>' +
										'</tr>' +
										'<tr class="odd">' +
											'<td class="text">开奖号码：</td>' +
											'<td class="value lotteryNumbers" ></td>' +
										'</tr>' +
										'<tr class="even">' +
											'<td class="text">开奖金额：</td>' +
											'<td class="value amount" ></td>' +
										'</tr>' +
										'<tr class="odd">' +
											'<td class="text">倍数：</td>' +
											'<td class="value multiple"></td>' +
										'</tr>' +
										//'<tr class="odd">' +
										//	'<td class="text">单位：</td>' +
										//	'<td class="value betUnit"></td>' +
										//'</tr>' +
										'<tr class="odd">' +
											'<td class="text">注数：</td>' +
											'<td class="value betCount"></td>' +
										'</tr>' +
										'<tr class="odd">' +
											'<td class="text">投注金额：</td>' +
											'<td class="value betAmount"></td>' +
										'</tr>' +
										'<tr class="even">' +
											'<td class="text">奖金组及返点：</td>' +
											'<td class="value groupRebates" ></td>' +
										'</tr>' +
										'<tr class="odd">' +
											'<td class="text">下注金额(返水后）：</td>' +
											'<td class="value netAmount"></td>' +
										'</tr>' +
										'<tr class="even">' +
											'<td class="text">状态：</td>' +
											'<td class="value betType" ></td>' +
										'</tr>' +
									'</tbody>' +
								'</table>' +

								'<div class="number-content">' +
									'投注内容: ' +
								'</div>' +
								'<div class="textarea">' +
									'<textarea></textarea>' +
								'</div>' +
							'</div>' +

							'<div class="button-zone">' +
								'<div class="cancel">' +
									this.cancel.getDom() +
								'</div>' +

								'<div class="ok">' +
									this.ok.getDom() +
								'</div>' +
							'</div>' +
						'</div>' +
					'</div>' +
				'</div>' +
				'<div class="overlay overlay2"></div>';

		return temp;
	};

	BetOrderDetail.prototype.getDom = function () {
		return this.el;
	};
	BetOrderDetail.prototype.show = function (data) {
		if (!data.canCancel) {
			this.zone.find('.cancel').addClass('can-not-cancel');
		} else {
			this.zone.find('.cancel').removeClass('can-not-cancel');
		}
		this.ticketId = data.ticketId;
		this.showOverlay();
	};

	BetOrderDetail.prototype.hide = function () {
		this.hideOverlay();
	};

	BetOrderDetail.prototype.bindEvents = function () {
		var button;
		var that = this;

		this.zone = $('#' + this.id);

		this.zone.find('.close-dialog').click(function () {
			that.hide();
		});

		this.zone.find('.cancel-order').click(function () {
			if ($(this).parent('.cancel').hasClass('can-not-cancel')) {
				return;
			}

			var okCallback = function () {
				var req = {
					ticketId:that.ticketId
				};
				var obj = [];
				if(typeof(app) != 'undefined'){
					obj = app;
				}else{
					obj = recordsQuery
				}
				service.cancelBetHistory(req,function(res){
					if(res.code == 0){
						that.hide();
						obj.noticeDialog.show({
							subTitle : "取消成功",
							text: "取消成功",
							buttonName: "确定",
							autoHide: true,
							timeout: 3000
						});
						if(typeof(app) != 'undefined'){
							app.bettingRecords.getBetHistory();
						}else{
							recordsQuery.getBetHistory();
						}
						that.hide();
					}else{
						Util.errorModel(res.code,'取消失败');
					}
				})
			};

			if (!that.confirmDialog) {
				that.confirmDialog = new ConfirmDialog({
					text: '确定取消当前投注吗？',
					okCallback: okCallback.bind(this)
				});

				$('body').append(that.confirmDialog.getDom());
				that.confirmDialog.bindEvents();
			}

			that.confirmDialog.show('确定取消当前投注吗？');
		});

		this.zone.find('.ok-button').click(function () {
			that.hide();
		});

		this.bindOverlayEvents();
	};

	window.BetOrderDetail = BetOrderDetail;
}());

(function () {
	function BettingOrder (opt) {
		this.opt  = opt;
		this.id   = this.opt.id;
		this.data = [];
		this.el   = this.initDom(this.data);
	}

	BettingOrder.prototype.initDom = function (data) {
		var i;
		var j;
		var cols;
		var temp;

		temp  =	'<div class="betting-order" id="' + this.id + '">' +
					'<div class="table">' +
						'<div class="thead">' +
							'<div class="tr" style="top:0px">' +
								'<div class="td td0"><span><span>&nbsp</span></span></div>' +
								'<div class="td td1"><span>玩法</span></div>' +
								'<div class="td td2"><span>号码</span></div>' +
								'<div class="td td3"><span>注数</span></div>' +
								'<div class="td td4"><span>倍数</span></div>' +
								'<div class="td td5"><span>金额</span></div>' +
							'</div>' +
						'</div>' +

						'<div class="tbody">';

		for (i = 0; i < data.length; i++) {
			cols = data[i];
			temp += 		'<div class="tr" style="top:' + (i*30 + 'px') + '">';
			temp +=				'<div class="td td0"><span><span class="dot"></span></span></div>';
			temp +=				'<div class="td td1"><span>' + cols[0] + '</span></div>';
			temp +=				'<div class="td td2"><span>' + cols[1] + '</span></div>';
			temp +=				'<div class="td td3"><span>' + cols[2] + '</span></div>';
			temp +=				'<div class="td td4"><span>' + cols[3] + '</span></div>';
			temp +=				'<div class="td td5"><span>' + Util.addDotToNumber(cols[4]) + '</span></div>';
			//temp +=				'<div class="td td6"><span>' + cols[5] + '</span></div>';
			temp +=				'<div class="td td7"><span class="cancel">✕</span></div>';
			temp += 		'</div>';
		}
		
		temp +=			'</div>' +
					'</div>' +

					'<div class="notice">' +
						'<img src="../img/no-bet-records.png" height="109" width="127">' +
					'</div>' +
				'</div>';
		return temp;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
	};

	BettingOrder.prototype.getDom = function () {
		return this.el;
	};

	BettingOrder.prototype.addList = function(data){
		var cols;
		var temp = '';
		var $demo = $("#" + this.id).find('.tbody');

		$demo.empty();
		for (var i = 0; i < data.length; i++) {
			cols = data[i];
			temp += 		'<div class="tr" style="top:' + (i*30 + 'px') + '">';
			temp +=				'<div class="td td0"><span><span class="dot"></span></span></div>';
			temp +=				'<div class="td td1"><span>' + cols[0] + '</span></div>';
			temp +=				'<div class="td td2" title="'+cols[1]+'"><span>' + cols[1] + '</span></div>';
			temp +=				'<div class="td td3"><span>' + cols[2] + '</span></div>';
			temp +=				'<div class="td td4"><span>' + cols[3] + '</span></div>';
			temp +=				'<div class="td td5"><span>' + Util.addDotToNumber(cols[4]) + '</span></div>';
			//temp +=				'<div class="td td6"><span>' + cols[5] + '</span></div>';
			temp +=				'<div class="td td7"><span class="cancel">✕</span></div>';
			temp += 		'</div>';
		}
		$demo.append(temp);
		this.hideAndShow();
	};

	BettingOrder.prototype.removeList = function(index){
		var comfirmBet = app.currentModule.comfirmBet,
			chaseNumber = app.currentModule.chaseNumber;
		var market = app.currentSocket.market;
		var gameCode = app.currentSocket.gameCode;
		var filterData = Global.betZoneData.filter(function(item, index) {
			return item.market == market && item.gameCode == gameCode;
		})[0];
		filterData.data.splice(index,1); //删除全局变量中的数据

		var betCount = 0;
		var betAmount = 0;
		var betCommAmount = 0;
		for(var i = 0; i < filterData.data.length;i++){
			if( filterData.data[i]){
				betCount +=  filterData.data[i][2];
				betAmount +=  filterData.data[i][4];
				betCommAmount +=  filterData.data[i][4] *  filterData.data[i][6];
			}
		}
		comfirmBet.zone.find('.bet-number').text(betCount + '注');
		comfirmBet.zone.find('.amount').text(Util.addDotToNumber(betAmount) + '元');
		comfirmBet.zone.find('.return').text(Util.addDotToNumber(betCommAmount, 4) + '元');

		if(filterData.data.length == 0){
			comfirmBet.confirmBetButton.disabled();
			chaseNumber.addChaseNumber.disabled();
			chaseNumber.addChaseNumber2.disabled();
			chaseNumber.addChaseNumber3.disabled();
		}
	};

	BettingOrder.prototype.hideAndShow = function(){
		var table;
		var tbody;
		var notice;
		var singleFlag;
		table     = this.zone.children('.table');
		tbody     = table.children('.tbody');
		notice    = this.zone.find('.notice');
		singleFlag = (tbody.find('.tr').length === 0);

		if (singleFlag) {
			table.hide();
			notice.show();
		}else{
			table.show();
			notice.hide();
		}
	};
	
	BettingOrder.prototype.removeAllList = function(){
		var table  = this.zone.children('.table');
		for(var i = table.find('.cancel').length -1 ;i >= 0; i--){
			$(table.find('.cancel')[i]).trigger('click');
		}
		var notice = this.zone.find('.notice');
		table.hide();
		notice.show();

	};
	BettingOrder.prototype.bindEvents = function () {
		var table;
		var tbody;
		var that = this;
		var trs;
		var timeout;
		var index;
		var top;
		var targetTr;
		var i;
		var singleFlag;
		var notice;

		this.zone = $('#' + this.id);
		table     = this.zone.children('.table');
		tbody     = table.children('.tbody');
		trs       = tbody.find('.tr');
		cross     = this.zone.find('.cross');
		notice    = this.zone.find('.notice');

		tbody.delegate('.cancel', 'click', function () {
			targetTr   = $(this).parent().parent();
			index      = targetTr.index();
			top        = parseInt(targetTr.css('top'));
			trs        = tbody.find('.tr:gt(' + index + ')');
			singleFlag = (tbody.find('.tr').length === 1);

			targetTr.css('left', '100%');

			timeout = setTimeout(function () {
				targetTr.remove();

				for (i = 0; i < trs.length; i++) {
					$(trs[i]).css('top', top + i*30 +'px');
				}

				if (singleFlag) {
					table.hide();
					notice.show();
				}

				clearTimeout(timeout);
			}, 500);
			that.removeList(index);
		});

		tbody.delegate('.tr','click',function(e) {
			if ($(e.target).hasClass('cancel')) return false;
			var index = $(this).index();
			var market = app.currentSocket.market;
			var gameCode = app.currentSocket.gameCode;
			var filterData = Global.betZoneData.filter(function(item, index) {
				return item.market == market && item.gameCode == gameCode;
			})[0];
			console.log(filterData.data[index]);
			BuildBetSelect.build(filterData.data[index], index);
		});

		this.hideAndShow();
	};

	window.BettingOrder = BettingOrder;
}());

/*
 *  投注记录 下拉界面 BettingRecords.js
 *  继承自: IMDialog
 */

(function () {
	var Opt;

	function BettingRecords (opt) {
		IMDialog.call(this, (opt || {}));
		var data = Global.marketList
		this.data = [];
		this.obj = {};
		this.betName = {};
		for(var x = 0;x < RULE_CONFIG.length;x++){
			this.obj[RULE_CONFIG[x].betType + RULE_CONFIG[x].gameCode] = RULE_CONFIG[x].name
		}
		for(var x = 0;x < data.length;x++){
			this.betName[data[x].market+'_'+data[x].gameCode] = data[x].marketCNName
		}
		this.el = this.initDom();
		this.getBetHistory();
	}

	BettingRecords.prototype = new IMDialog();

	//投注记录
	BettingRecords.prototype.getBetHistory = function () {
		var that = this;
		var time = Util.getLocalTime(serverTime);
		var req = {
			"page": {
				"pageNo": this.pager1.currentPage || 1,
				"pageSize":10
			},

			"beginDate": time.split(' ')[0],
			"beginTime": time.split(' ')[1]
		};
		if(	app.bettingRecords){
			app.bettingRecords.zone.find('.content1 .table-zone tbody').empty();
		}
		service.betHistory(req, function(res) {
			if (res.code == 0) {
				that.betData = that.formatBetList(res);
				that.resBet = res;
				if(that.pager1.totalPage != res.page.pageCount){
					that.pager1.totalPage = res.page.pageCount || 1;
					that.pager1.initDom();
					app.bettingRecords.zone.find('.content1 .pager-zone ').empty();
					app.bettingRecords.zone.find('.content1 .pager-zone ').append(that.pager1.getDom());
					that.pager1.bindEvents();
				}
				that.refreshHtml();
			}else{
				that.promptModel('温馨提示',res)
			}
		});
	};
	BettingRecords.prototype.promptModel = function(subTitle,res,text,buttonName){
		buttonName && (buttonName = '确定');
		if(res.code == 0){
			app.noticeDialog.show({
				subTitle : subTitle,
				text: text,
				buttonName: buttonName,
				autoHide: true,
				timeout: 3000
			});
		}else{
			app.noticeDialog.show({
				subTitle : subTitle,
				text: Local[res.code],
				buttonName: buttonName,
				autoHide: true,
				timeout: 3000
			});
		}
	};
	//投注记录
	BettingRecords.prototype.formatBetList = function (res) {
		var that = this;
		var list = [];
		$.each(res.list,function(index,item){
			list.push([
				that.betName[item.market+'_'+item.gameCode],
				that.obj[item.betType + item.gameCode],
				item.drawNumber,
				item.result == undefined ?'-':item.result,
				OriginalItem.ballNameMap(item.betNumber),
				Util.addDotToNumber(item.betAmount) + '元',
				item.multiple+'倍',
				item.oddsGroup+'-'+  ( item.comm * 100 ).toFixed(2) + '%',
				that.getWinAndChaseIsState(item.winState,1,item.wlAmt,item.cancelBy),
				item.winState == 'P'?1:0
			])
		});
		return list;
	};
	//追号记录
	BettingRecords.prototype.getChaseHistory = function () {
		var that = this;
		var time = Util.getLocalTime(serverTime);
		var req = {
			"page": {
				"pageNo": this.pager2.currentPage || 1,
				"pageSize":10
			},
			"beginDate": time.split(' ')[0],
			"beginTime": time.split(' ')[1]
		};
		if(app.bettingRecords){
			app.bettingRecords.zone.find('.content2 .table-zone tbody').empty();
		}
		service.chaseHistory(req, function(res) {
			if (res.code == 0) {
				that.chaseData = that.formatChaseList(res);

				that.resChase = res;
				var chaseOrder = that.chaseOrderDetail;
				if(chaseOrder){
					var list = that.resChase.list[that.dataIndex];
					chaseOrder.zone.find('.total-issue').text(list.totalDraw);
					chaseOrder.zone.find('.finished-issue').text(list.finishedDraw);
				}
				if(that.pager2.totalPage != res.page.pageCount){
					that.pager2.totalPage = res.page.pageCount || 1;
					that.pager2.initDom();
					app.bettingRecords.zone.find('.content2 .pager-zone ').empty();
					app.bettingRecords.zone.find('.content2 .pager-zone ').append(that.pager2.getDom())
					that.pager2.bindEvents();
				}
				that.refreshHtml();
			}else{
				that.promptModel('温馨提示',res)
			}
		});
	};
	//追号记录
	BettingRecords.prototype.formatChaseList = function (res) {
		var that = this;
		var list = [];
		$.each(res.list,function(index,item){
			list.push([
				that.betName[item.market+'_'+item.gameCode],
				that.obj[item.betType + item.gameCode],
				item.drawNumber,
				OriginalItem.ballNameMap(item.betNumber),
				Util.addDotToNumber(item.betAmount) + '元',
				item.oddsGroup+'-'+ ( item.comm * 100 ).toFixed(2) + '%',
				item.stopUtilWin == true?'是':'否',
				item.finishedDraw+'/'+item.totalDraw,
				item.cancelled == false?'1':'0',
			])
		});
		return list;
	};
	BettingRecords.prototype.getWinAndChaseIsState = function(state,type,wlAmt,cancelBy){
		var text;
		if(type == 1){
			if(state == 'W') text =  Util.addDotToNumber(wlAmt);
			if(state == 'C') text = cancelBy == '-'?'系统撤销':'用户撤销';
			if(state == 'L') text = '未中奖';
			if(state == 'P') text = '待开奖';
		}else if(type == 2){
			if(state == 'C') text =  cancelBy == '-'?'系统撤销':'用户撤销';
			if(state == 'H') text = '已完成';
			if(state == 'P') text = '未开始';
			if(state == 'L') text = '未中奖';
			if(state == 'W') text = '已中奖';
		}
		return text;
	};
	BettingRecords.prototype.initDom = function () {
		var temp;

		this.pager1 = new IMPager({id: 'betting-records-pager',pageSize:10});
		this.pager2 = new IMPager({id: 'chase-records-pager',pageSize:10});
		this.tip    = new IMTip();

		temp = 	'<div class="betting-records">' +
					'<div class="dialog-wrapper">' +
						'<div class="row">' +
							'<div class="col-md-4 head-height">' +
								'<ul class="tabs">' +
									'<li class="tab1 active"><span>我的投注</span></li>' +
									'<li class="tab2"><span>追号记录</span></li>' +
								'</ul>' +

								'<div class="stick"></div>' +
							'</div>' +
 
							'<div class="col-md-4 head-height">' +
								'<div class="zone2">' +
									//'<span class="text">总投注</span>' +
									//'<span class="value">20</span>' +
									//'<span class="text">注，返还</span>' +
									//'<span class="value">0.000</span>' +
									//'<span class="text">元，共</span>' +
									//'<span class="value">0.400</span>' +
									//'<span class="text">元</span>' +
								'</div>' +
							'</div>' +

							'<div class="col-md-4 head-height">' +
								'<div class="zone3">' +
									'<span class="text go-to-records-query">查询详细记录</span>' +
									'<span class="close-icon">✕</span>' +
								'</div>' +
							'</div>' +
						'</div>' +

						'<div class="cont content1">' +
							'<div class="table-zone">' +
								this.createTable(1) +
							'</div>' +
							'<div class="pager-zone">' +
								this.pager1.getDom() +
							'</div>' +
						'</div>' +
						
						'<div class="cont content2">' +
							'<div class="table-zone">' +
								this.createTable(2) +
							'</div>' +
							'<div class="pager-zone">' +
								this.pager2.getDom() +
							'</div>' +
						'</div>' +

						this.tip.getDom() +
					'</div>' +
				'</div>' +

				'<div class="overlay overlay1"></div>';

		return temp;
	};

	BettingRecords.prototype.getDom = function () {
		return this.el;
	};

	BettingRecords.prototype.show = function () {
		this.showContentOverlay();
	};

	BettingRecords.prototype.hide = function (flag, callback) {
		var that = this;

		this.hideContentOverlay();

		//flag用来标明是否是在是直接切换投注记录与用户反馈,
		//如果是就不用清除higher-z-index, 在bet.js中调用。
		if (!flag) {
			this.timeout = setTimeout(function () {
				$('.bet-record').removeClass('highlight');
				$('.nav-title').removeClass('higher-z-index');
				clearTimeout(that.timeout);
				that.timeout = undefined;

				if (typeof callback === 'function') {
					callback();
				}
			}, 300);
		} else {
			$('.bet-record').removeClass('highlight');
		}
	};

	BettingRecords.prototype.hasTimeout = function () {
		if (this.timeout) {
			return true;
		}

		return false;
	};

	BettingRecords.prototype.isOpen = function () {
		return this.zone.hasClass('content-dialog-active');
	};

	BettingRecords.prototype.bindEvents = function (state) {
		var left;
		var content;
		var content1;
		var content2;
		var tabs;
		var betTable;
		var chaseTable;
		var temp;
		var that = this;
		if(!this.type){
			this.type = 1
		}
		this.zone  = $('.betting-records');
		tabs       = this.zone.find('.tabs');
		stick      = this.zone.find('.stick');
		content    = this.zone.find('.cont');
		content1   = this.zone.find('.content1');
		content2   = this.zone.find('.content2');
		betTable   = this.zone.find('.content1 table');
		chaseTable = this.zone.find('.content2 table');

		tabs.unbind();
		betTable.unbind();
		chaseTable.unbind();
		betTable.unbind();
		chaseTable.unbind();
		this.zone.find('.go-to-records-query').unbind();
		this.zone.next('.overlay1').unbind();

		this.zone.find('.close-icon').click(function () {
			that.hide();
		});

		tabs.delegate('li', 'click', function () {
			tabs.children('li').removeClass('active');
			$(this).addClass('active');
			content.hide();
			
			if ($(this).hasClass('tab1')) {
				left = 0;
				content1.show();
				that.type = 1
				that.getBetHistory();
			} else if ($(this).hasClass('tab2')) {
				left = 120;
				content2.show();
				that.type = 2;
				that.getChaseHistory();
			}

			stick.css('left', left + 'px');
		});

		betTable.delegate('td', 'click', function () {
			temp = $(this).children('span');
			if (temp && temp.hasClass('order-detail')) {
				//修改处-DB
				that.dataIndex = parseInt($(this).attr('data-index'));
				if (!that.betOrderDetail) {
					that.betOrderDetail = new BetOrderDetail({id: 'bet-order-detail'});
					$('body').append(that.betOrderDetail.getDom());
					that.betOrderDetail.bindEvents();
					that.assignmentModel();
				} else {
					that.assignmentModel();
				}
				var canCancel =  parseInt($(this).attr('data-value'));
				var ticketId = that.resBet.list[that.dataIndex].ticketId;
				that.betOrderDetail.show({'canCancel':canCancel,ticketId:ticketId});
			} else if (temp && temp.hasClass('cancel-order')) {
				if (!that.confirmDialog) {
					that.confirmDialog = new ConfirmDialog({
						text: ''
					});

					$('body').append(that.confirmDialog.getDom());
					that.confirmDialog.bindEvents();
				}

				that.confirmDialog.show('确定撤单吗？');
			}
		});

		chaseTable.delegate('td', 'click', function () {
			temp = $(this).children('span');
			that.dataIndex = parseInt($(this).attr('data-index'));
			if (temp && temp.hasClass('order-detail')) {
				if (!that.chaseOrderDetail) {
					that.chaseOrderDetail = new ChaseOrderDetail({id: 'chase-order-detail'});
					$('body').append(that.chaseOrderDetail.getDom());
					that.chaseOrderDetail.bindEvents();
					that.assignmentChaseModel();
				}else{
					that.assignmentChaseModel();
				}
				var list = that.resChase.list[that.dataIndex];
				var canCancel = parseInt($(this).attr('data-value'));
				var dataList = {
					finishedDraw:list.finishedDraw,
					totalDraw:list.totalDraw,
					chaseId:list.chaseId
				};
				that.chaseOrderDetail.show({'canCancel': canCancel,dataList:dataList});
			} else if (temp && temp.hasClass('cancel-order')) {
				if (!that.confirmDialog) {
					that.confirmDialog = new ConfirmDialog({
						text: ''
					});

					$('body').append(that.confirmDialog.getDom());
					that.confirmDialog.bindEvents();
				}

				that.confirmDialog.show('确定撤单吗？');
			}
		});

		betTable.delegate('.lottery-number', 'mouseover', function () {
			var offset;
			var left;
			var top;
			var text;
			var span = $(this).children('span');
			var pos  = span.position();

			left    = pos.left + parseInt(span.width())/2;
			top     = pos.top + parseInt(span.height());
			text    = span.text();
			that.tip.show({
				left: left, 
				top: top, 
				text: text
			});
		}).delegate('.lottery-number', 'mouseout', function () {
			that.tip.hide();	
		});

		chaseTable.delegate('.lottery-number', 'mouseover', function () {
			var offset;
			var left;
			var top;
			var text;
			var span = $(this).children('span');
			var pos  = span.position();

			left    = pos.left + parseInt(span.width())/2;
			top     = pos.top + parseInt(span.height());
			text    = span.text();
			that.tip.show({left:left, top:top, text:text});
		}).delegate('.lottery-number', 'mouseout', function () {
			that.tip.hide();
		});

		this.zone.find('.go-to-records-query').click(function () {
			//var params = window.location.href.substring(window.location.href.indexOf('?'));
			//window.location.href.indexOf('?') == - 1 && (params = '');
			var params = '?sessionId=' +window.session + '&' +'token=' + window.token;
			window.open('recordsQuery.html' + params);
		});

		if(!state){
			this.pager1.bindEvents();
			this.pager2.bindEvents();
		}

		this.bindOverlayEvents();
	};

	BettingRecords.prototype.createTable = function (type) {
		var temp = '';
		if(type == 1){
			temp =	'<table>' +
				'<thead>' +
				'<tr>' +
				'<td>游戏</td>' +
				'<td>玩法</td>' +
				'<td>期号</td>' +
				'<td>开奖号</td>' +
				'<td>投注内容</td>' +
				'<td>投注金额</td>' +
				'<td>倍数</td>' +
				'<td>奖金组/返点</td>' +
				'<td>状态</td>' +
				'<td>操作</td>' +
				'</tr>' +
				'</thead>' +

				'<tbody>' +
				this.createRows(type) +
				'</tbody>' +
				'</table>';
		}else{
			temp =	'<table>' +
				'<thead>' +
				'<tr>' +
				'<td>游戏</td>' +
				'<td>玩法</td>' +
				'<td>起始期号</td>' +
				'<td>投注内容</td>' +
				'<td>追号总金额</td>' +
				'<td>奖金组/返点</td>' +
				'<td>追中即停</td>' +
				'<td>状态</td>' +
				'<td>操作</td>' +
				'</tr>' +
				'</thead>' +

				'<tbody>' +
				this.createRows(type) +
				'</tbody>' +
				'</table>';
		}
		return temp;
	};
	//切换页面数据
	BettingRecords.prototype.refreshHtml = function(){
		if(this.type == 1){
			this.data = this.betData;
			app.bettingRecords.zone.find('.content1 .table-zone tbody').empty();
			app.bettingRecords.zone.find('.content1 .table-zone tbody').append(this.createRows(1))
		}else{
			this.data = this.chaseData;
			app.bettingRecords.zone.find('.content2 .table-zone tbody').empty();
			app.bettingRecords.zone.find('.content2 .table-zone tbody').append(this.createRows(2))
		}

	};
	BettingRecords.prototype.createRows = function (type) {
		var i;
		var temp = '';
		for (i = 0; i < this.data.length; i++) {
			temp +=	'<tr>';

			for (j = 0; j < this.data[i].length; j++) {
				if (j === 0) {
					temp += '<td><span class="dot"></span>' + this.data[i][j] + '</td>';
				} else if (j === 4 && type == 1 || j === 3 && type == 2) {
					temp += '<td title="' + this.data[i][j] +'"><span>' + this.data[i][j] + '</span></td>';
				} else if (j === this.data[i].length-1) {
					temp += '<td data-index ="'+i+'" data-value="' + this.data[i][j] + '"><span class="order-detail">' + '详情' + '</span></td>';
				} else if( j === 8 ){
					var state = this.data[i][j].replace(/[,]/g,'');
					var color;
					if(!isNaN(state)) color = '#f86f70';
					if(state == '用户撤销' || state == '系统撤销') color = '#cccccc';
					if(state == '未中奖') color = '#cccccc';
					if(state == '待开奖') color = '#a3e2cf';
					temp += '<td style="color: '+color+'">' + this.data[i][j] + '</td>';
				}else{
					temp += '<td>' + this.data[i][j] + '</td>';
				}
			}

			temp += '</tr>';
		}

		return temp;
	};
	//投注点击，跟弹框赋值
	BettingRecords.prototype.assignmentModel = function(){
		var that = this;
		var betOrder;
		betOrder = this.betOrderDetail.zone;
		var modelList =  that.resBet.list[that.dataIndex];
		var modelData = [
			modelList.ticketId,
			that.betName[modelList.market+'_'+modelList.gameCode],
			that.obj[modelList.betType + modelList.gameCode],
			modelList.drawNumber,
			modelList.betTime,
			modelList.result == undefined ?'-':modelList.result,
			Util.addDotToNumber((modelList.odds * modelList.betUnit)/2,4),
			modelList.multiple + '倍',
			modelList.oddsGroup+'-'+ ( modelList.comm * 100 ).toFixed(2) + '%',
			modelList.selection,
			Util.addDotToNumber(modelList.betAmount) + '元',
			that.getWinAndChaseIsState(modelList.winState,1,modelList.wlAmt,modelList.cancelBy),
			Util.addDotToNumber(modelList.betUnit),
			modelList.betCount,
			Util.addDotToNumber(modelList.netAmount,4)
		];
		var color;
		if(!isNaN(modelData[11])) color = '#f86f70';
		if(modelData[11] == '系统撤销' || modelData[11] == '用户撤销') color = '#cccccc';
		if(modelData[11] == '未中奖') color = '#cccccc';
		if(modelData[11] == '待开奖') color = '#a3e2cf';
		betOrder.find('.singleNumber').text(modelData[0]);//注单编号
		betOrder.find(".gameName").text(modelData[1]);//游戏名称
		betOrder.find(".gamePlay").text(modelData[2]);
		betOrder.find(".gameSeries").text(modelData[3]);
		betOrder.find(".betTime").text(modelData[4]);
		betOrder.find(".lotteryNumbers").text(modelData[5]);
		betOrder.find(".amount").text(modelData[6]);
		betOrder.find(".multiple").text(modelData[7]);
		betOrder.find(".groupRebates").text(modelData[8]);
		betOrder.find(".betAmount").text(modelData[10]);
		betOrder.find(".betType").text(modelData[11]);
		betOrder.find(".betUnit").text(modelData[12]);
		betOrder.find(".betCount").text(modelData[13]);
		betOrder.find(".netAmount").text(modelData[14]);
		betOrder.find(".betType").css('color',color);
		betOrder.find(".textarea").html(OriginalItem.text(modelList));

	};
	//追号 点击，跟弹框赋值
	BettingRecords.prototype.assignmentChaseModel = function(){
		var that = this;
		var chaseOrder;
		chaseOrder = that.chaseOrderDetail;
		var list = this.resChase.list[this.dataIndex];
		var req = {
			chaseId:list.chaseId
		};
		service.chaseDetail(req,function(res){
			if(res.code == 0){
				var dataList = [];
				$.each(res.list,function(index,item){
					dataList.push([
						item.drawNumber,
						OriginalItem.ballNameMap(item.betNumber),
						item.multiple,
						Util.addDotToNumber(item.betAmount),
						that.getWinAndChaseIsState(item.chaseState,2,item.wlAmt,item.cancelBy),
						that.getWinAndChaseIsState(item.winState,1,item.wlAmt,item.cancelBy),
						item.chaseState == 'P'?1:0
					])
				});
				chaseOrder.data = dataList;
				chaseOrder.resData = res;
				chaseOrder.zone.find('tbody').empty();
				chaseOrder.zone.find('tbody').append(chaseOrder.createRows());
				if(!res.canStop)chaseOrder.cancel.disabled();
			}else{
				that.promptModel('温馨提示',res)
			}
		});
	};

	window.BettingRecords = BettingRecords;
}());


(function () {
	function ChaseNumber (opt) {
		this.opt  = opt;
		this.id   = this.opt.id;
		this.data = [];
		this.tabTypeChaseNum = 1;
		this.el = this.initDom(this.data);
	}

	ChaseNumber.prototype.initDom = function (data) {
		var temp;

		this.addChaseNumber = new IMButton({
			text: '生成追号计划',
			className: 'add-chase-number',
			id: this.id + '-add-chase-number'
		});
		this.addChaseNumber2 = new IMButton({
			text: '生成追号计划',
			className: 'add-chase-number',
			id: this.id + '-add-chase-number2'
		});
		this.addChaseNumber3 = new IMButton({
			text: '生成追号计划',
			className: 'add-chase-number',
			id: this.id + '-add-chase-number3'
		});

		temp = 	'<div class="chase-number" id="' + this.id + '">' +
					'<ul class="tabs">' +
						'<li class="tab1 active" data-value="1"><span>利润追号</span></li>' +
						'<li class="tab2" data-value="2"><span>同倍追号</span></li>' +
						'<li class="tab3" data-value="3"><span>翻倍追号</span></li>' +
					'</ul>' +

					'<div class="stick"></div>' +

					'<div class="cont content1">' + 
						'<div class="row">' +
							'<div class="col-md-6">' +
								'<div class="form-group">' +
								    '<label class="col-sm-6 name">最低收益率:</label>' +
								    '<div class="col-sm-5">' +
								      	'<input type="text" class="form-control interest1" value="50">' +
								    '</div>' +
									'<label class="col-sm-1 name">%</label>'+
								'</div>' +
							'</div>' +

							'<div class="col-md-6">' +
								'<div class="form-group">' +
								    '<label class="col-sm-6 name">追号期数:</label>' +
								    '<div class="col-sm-6">' +
								      	'<input type="text" class="form-control periods1" value="10">' +
								    '</div>' +
								'</div>' +
							'</div>' +
						'</div>' +
						'<div class="row">' +
							this.addChaseNumber.getDom() +
						'</div>' +
					'</div>' +
					'<div class="cont content2">' + 
						'<div class="row">' +
							'<div class="col-md-6">' +
								'<div class="form-group">' +
								    '<label class="col-sm-6 name">起始倍数:</label>' +
								    '<div class="col-sm-6">' +
								      	'<input type="text" class="form-control startMultiple2" value="1">' +
								    '</div>' +
								'</div>' +
							'</div>' +

							'<div class="col-md-6">' +
								'<div class="form-group">' +
								    '<label class="col-sm-6 name">追号期数:</label>' +
								    '<div class="col-sm-6">' +
								      	'<input type="text" class="form-control periods2" value="10">' +
								    '</div>' +
								'</div>' +
							'</div>' +
						'</div>' +
						'<div class="row">' +
							this.addChaseNumber2.getDom() +
						'</div>' +
					'</div>' +
					'<div class="cont content3">' +
						'<div class="row row-gap">' +
							'<div class="col-md-6 first">' +
								'<div class="form-group">' +
								    '<label class="col-sm-6 name">起始倍数:</label>' +
								    '<div class="col-sm-5">' +
								      	'<input type="text" class="form-control startMultiple3" value="1">' +
								    '</div>' +
								'</div>' +
							'</div>' +

							'<div class="col-md-6 second">' +
								'<div class="form-group">' +
								    '<label class="col-sm-6 name">隔:</label>' +
								    '<div class="col-sm-5">' +
								      	'<input type="text" class="form-control interval3" value="2">' +
								    '</div>' +
								'</div>' +
							'</div>' +

						'</div>' +

						'<div class="row">' +
							'<div class="col-md-6 first">' +
								'<div class="form-group">' +
								    '<label class="col-sm-6 name">期倍x</label>' +
								    '<div class="col-sm-5">' +
								      	'<input type="text" class="form-control multiple3" value="2">' +
								    '</div>' +
								'</div>' +
							'</div>' +

							'<div class="col-md-6 second">' +
								'<div class="form-group">' +
								    '<label class="col-sm-6 name">期数:</label>' +
								    '<div class="col-sm-5">' +
								      	'<input type="text" class="form-control periods3" value="10">' +
								    '</div>' +
								'</div>' +
							'</div>' +
						'</div>' +
						'<div class="row">' +
							this.addChaseNumber3.getDom() +
						'</div>' +
					'</div>' +
				'</div>';

		return temp;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
	};

	ChaseNumber.prototype.getDom = function () {
		return this.el;
	};

	ChaseNumber.prototype.bindEvents = function () {
		var ul;
		var stick;
		var left;
		var content;
		var content1;
		var content2;
		var content3;
		var callback;
		var button;
		var tabValue;
		var inpChange;
		var buttonCallback;
		var that = this;

		this.zone = $('#' + this.id);

		ul        = this.zone.children('ul');
		inpChange = this.zone.find('.form-control');
		stick     = this.zone.children('.stick');
		content   = this.zone.children('.cont');
		content1  = this.zone.children('.content1');
		content2  = this.zone.children('.content2');
		content3  = this.zone.children('.content3');
		button    = this.zone.find('.add-chase-number');

		ul.delegate('li', 'click', function () {
			ul.children('li').removeClass('active');
			$(this).addClass('active');
			content.hide();
			
			if ($(this).hasClass('tab1')) {
				left = 0;
				that.tabTypeChaseNum = 1;
				content1.show();
			} else if ($(this).hasClass('tab2')) {
				left = '33.3%';
				that.tabTypeChaseNum = 2;
				content2.show();
			} else {
				left = '66.6%';
				that.tabTypeChaseNum = 3;
				content3.show();
			}

			stick.css('left', left);
		});
		callback = function(){
			var market = app.currentSocket.market,
				gameCode = app.currentSocket.gameCode,
				filterData = Global.betZoneData.filter(function(item, index) {
					return item.market == market && item.gameCode == gameCode;
				})[0];
			if(filterData.data.length  == 0){
				var title = '生成失败';
				var message = "请先添加到投注篮子号码";
				var btnName = '确定';
				app.noticeDialog.show({
					subTitle : title,
					text: message,
					buttonName: btnName,
					autoHide: true,
					timeout: 3000
				});
				return false
			}else if(filterData.data.length != 1 && that.tabTypeChaseNum == 1){
				for(var i = 0; i < filterData.data.length - 1; i++){
					if(filterData.data[0][14].betType != filterData.data[i+1][14].betType || filterData.data[0][14].betUnit != filterData.data[i+1][14].betUnit){
						app.noticeDialog.show({
							subTitle : '追号失败',
							text: '利润率追号不支持混投请确保您的投注都为同一玩法类型且元角模式一致',
							buttonName: '确定',
							autoHide: true,
							timeout: 5000
						});
						return false
					}
				}
					//app.noticeDialog.show({
					//	subTitle : '追号失败',
					//	text: '追号计划不支持混投',
					//	buttonName: '确定',
					//	autoHide: true,
					//	timeout: 5000
					//});
					//return false
			}
			tabValue = parseInt(ul.find('li.active').attr('data-value'));
			var $chaseNumber = app.currentModule.chaseNumber.zone;
			if(tabValue == 1){
				var interest1 = $chaseNumber.find('.interest1').val();//利润-最低收益
				var periods1 = $chaseNumber.find('.periods1').val();//利润-追号期数
				if(interest1 == '' || periods1 == ''){
					app.noticeDialog.show({
						subTitle : '追号失败',
						text: '投注信息不完整',
						buttonName: '确定',
						autoHide: true,
						timeout: 5000
					});
					return false
				}
			}else if(tabValue == 2){
				var startMultiple2 = $chaseNumber.find('.startMultiple2').val();//同倍-起始倍数
				var periods2 = $chaseNumber.find('.periods2').val();//同倍-追号期数
				if(startMultiple2 == '' || periods2 == ''){
					app.noticeDialog.show({
						subTitle : '追号失败',
						text: '投注信息不完整',
						buttonName: '确定',
						autoHide: true,
						timeout: 5000
					});
					return false
				}
			}else{
				var startMultiple3 = $chaseNumber.find('.startMultiple3').val();
				var interval3 = $chaseNumber.find('.interval3').val();
				var multiple3 = $chaseNumber.find('.multiple3').val();
				var periods3 = $chaseNumber.find('.periods3').val();
				if(startMultiple3 == '' || interval3 == '' || multiple3 == '' || periods3 == ''){
					app.noticeDialog.show({
						subTitle : '追号失败',
						text: '投注信息不完整',
						buttonName: '确定',
						autoHide: true,
						timeout: 5000
					});
					return false
				}
			}
			if (!that.chaseNumberDialog) {
				that.chaseNumberDialog = new ChaseNumberDialog({id: that.id + '-dialog'});
				$('body').append(that.chaseNumberDialog.getDom());
				that.chaseNumberDialog.bindEvents();
				that.chaseNumberDialog.inpValue();
				that.chaseNumberDialog.refreshDialog(false, tabValue);
			}else{
				that.chaseNumberDialog.refreshDialog(false, tabValue)
			}
			// that.chaseNumberDialog.show({'tab': tabValue});
		};
		inpChange.on('input',function(e){
			if(e.keyCode == 37 || e.keyCode == 38|| e.keyCode == 39 || e.keyCode == 40)return false;
			$(this).val($(this).val().replace(/\D/gi,""));
			if($(this).hasClass('periods1') || $(this).hasClass('periods2') || $(this).hasClass('periods3')){
				if($(this).val() == '')
					$(this).val('');
			}
			if($(this).hasClass('startMultiple2') || $(this).hasClass('startMultiple3')){
				if($(this).val() == '')
					$(this).val('');
			}
		});
		this.addChaseNumber.bindEvents(callback.bind(this));
		this.addChaseNumber2.bindEvents(callback.bind(this));
		this.addChaseNumber3.bindEvents(callback.bind(this));
		this.addChaseNumber.disabled();
		this.addChaseNumber2.disabled();
		this.addChaseNumber3.disabled();

	};

	window.ChaseNumber = ChaseNumber;
}());

/*
** 继承自IMDialog  
*/

(function () {
	function ChaseNumberDialog (opt) {
		IMDialog.call(this, (opt || {}));
		this.id      = this.opt.id;
		this.isDataEnd = true;
		this.isChangeMultipleModel = false;//是否有提示框
		this.checkedIndex = [[],[],[]];//取消的投号
		this.lrTitle = ['序号', '追号期数', '倍数', '金额', '奖金', '盈利金额', '盈利率', '操作'];
		this.tbTitle = ['序号', '追号期数', '倍数', '金额', '预计开奖时间', '操作'];
		this.fbTitle = ['序号', '追号期数', '倍数', '金额', '预计开奖时间', '操作'];
		this.tabType = 1;
		this.dataList();
		this.el = this.initDom(this.data);

	}

	ChaseNumberDialog.prototype = new IMDialog();

	ChaseNumberDialog.prototype.initDom = function (data) {
		var temp;
		this.addChaseNumber = new IMButton({
			text: '生成追号计划',
			className: 'chase-dialog-add-chase-number'
		});

		this.stopAfterWinCheckBox = new IMCheckBox({
			text: '中奖后终止',
			checked:true
		});

		this.cancelBet = new IMButton({
			text: '取消投注',
			className: 'cancel-bet-button'
		});

		this.comfirmBet = new IMButton({
			text: '确认投注',
			className: 'comfirm-bet-button',
			id:'comfirm-bet-button'
		});
		temp = 	'<div class="chase-number-dialog"' + (this.id? (' id="' + this.id + '"') : '') + '>' +
					'<div class="dialog-wrapper">' +
						'<div class="dialog">' +
							'<ul class="tabs">' +
								'<li class="tab1" data-value="1"><span>利润追号</span></li>' +
								'<li class="tab2" data-value="2"><span>同倍追号</span></li>' +
								'<li class="tab3" data-value="3"><span>翻倍追号</span></li>' +
								'<span class="close">✕</span>' +
							'</ul>' +

							'<div class="stick"></div>' +

							'<div class="cont content1">' +
								'<div class="row row1">' +
									'<div class="col-sm-4 col-md-4">' +
										'<div class="form-group col-sm-11">' +
										    '<label class="name">最低收益率:</label>' +
										    '<input type="text" class="form-control zdsyl interest1">' +
										'</div>' +
										'<div class="col-sm-1 sign">%</div>'+
									'</div>' +

									'<div class="col-sm-4 col-md-4">' +
										'<div class="form-group">' +
										    '<label class="name">追号期数:</label>' +
										    '<input type="text" class="form-control zhqs periods1">' +
										'</div>' +
									'</div>' +

									'<div class="col-sm-4 col-md-4">' +
										'<div>' +
											this.addChaseNumber.getDom() +
										'</div>' +
									'</div>' +
								'</div>' +

								'<div class="row2">' +
									'<div class="table-zone lrData">' +
										this.createTable(this.lrData) +
									'</div>' +
								'</div>' +

								'<div class="row3">' +
									'<div class="summary">' +
										'共追号' + 
										'<span class="value issue-num">0</span>' +
										'期, ' +
										'<span class="value orders-num">0</span>' +
										'注, 金额￥' +
										'<span class="value amount">0.00</span>' +
										'元' +
									'</div>' +

									'<div class="operations">' +
										this.stopAfterWinCheckBox.getDom() +
										'<div class="clear-chase-number">清除追号</div>' +
									'</div>' +
								'</div>' +

								'<div class="row4">' +
									'<div class="cancel">' +
										this.cancelBet.getDom() +
									'</div>' +

									'<div class="ok">' +
										this.comfirmBet.getDom() +
									'</div>' +
								'</div>' +
							'</div>' +

							'<div class="cont content2">' + 
								'<div class="row row1">' +
									'<div class="col-sm-4 col-md-4">' +
										'<div class="form-group">' +
										    '<label class="name">起始倍数:</label>' +
										    '<input type="text" class="form-control zdsyl startMultiple2">' +
										'</div>' +
									'</div>' +

									'<div class="col-sm-4 col-md-4">' +
										'<div class="form-group">' +
										    '<label class="name">追号期数:</label>' +
										    '<input type="text" class="form-control zhqs periods2">' +
										'</div>' +
									'</div>' +

									'<div class="col-sm-4 col-md-4">' +
										'<div>' +
											this.addChaseNumber.getDom() +
										'</div>' +
									'</div>' +
								'</div>' +

								'<div class="row2">' +
									'<div class="table-zone tbData">' +
										this.createTable(this.tbData) +
									'</div>' +
								'</div>' +

								'<div class="row3">' +
									'<div class="summary">' +
										'共追号' + 
										'<span class="value issue-num">0</span>' +
										'期, ' +
										'<span class="value orders-num">0</span>' +
										'注, 金额￥' +
										'<span class="value amount">0.00</span>' +
										'元' +
									'</div>' +

									'<div class="operations">' +
										this.stopAfterWinCheckBox.getDom() +
										'<div class="clear-chase-number">清除追号</div>' +
									'</div>' +
								'</div>' +

								'<div class="row4">' +
									'<div class="cancel">' +
										this.cancelBet.getDom() +
									'</div>' +

									'<div class="ok">' +
										this.comfirmBet.getDom() +
									'</div>' +
								'</div>' +
							'</div>' +

							'<div class="cont content3">' +
								'<div class="row1">' +
									'<div class="form-group">' +
									    '<label class="name">起始倍数:</label>' +
									    '<input type="text" class="form-control zdsyl startMultiple3">' +
									'</div>' +

									'<div class="form-group">' +
									    '<label class="name">隔:</label>' +
									    '<input type="text" class="form-control zhqs interval3">' +
									'</div>' +

									'<div class="form-group">' +
									    '<label class="name">期倍x</label>' +
									    '<input type="text" class="form-control zhqs multiple3">' +
									'</div>' +

									'<div class="form-group">' +
									    '<label class="name">期数:</label>' +
									    '<input type="text" class="form-control zhqs periods3">' +
									'</div>' +

									'<div class="button-zone">' +
										this.addChaseNumber.getDom() +
									'</div>' +
								'</div>' +

								'<div class="row2">' +
									'<div class="table-zone fbData">' +
										this.createTable(this.fbData) +
									'</div>' +
								'</div>' +

								'<div class="row3">' +
									'<div class="summary">' +
										'共追号' + 
										'<span class="value issue-num">0</span>' +
										'期, ' +
										'<span class="value orders-num">0</span>' +
										'注, 金额￥' +
										'<span class="value amount">0.00</span>' +
										'元' +
									'</div>' +

									'<div class="operations">' +
										this.stopAfterWinCheckBox.getDom() +
										'<div class="clear-chase-number">清除追号</div>' +
									'</div>' +
								'</div>' +

								'<div class="row4">' +
									'<div class="cancel">' +
										this.cancelBet.getDom() +
									'</div>' +

									'<div class="ok">' +
										this.comfirmBet.getDom() +
									'</div>' +
								'</div>' +
							'</div>' +
						'</div>' +
					'</div>' +
				'</div>' +

				'<div class="overlay overlay2">' +
				'</div>';

		return temp;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
	};

	ChaseNumberDialog.prototype.dataList = function(){
		this.lrRowData =[];
		this.tbRowData = [];
		this.fbRowData = [];
		if(!this.lrData)this.lrData = {'title': this.lrTitle,'rowData':this.lrRowData};
		if(!this.tbData)this.tbData = {'title': this.tbTitle,'rowData':this.tbRowData};
		if(!this.fbData)this.fbData = {'title': this.fbTitle,'rowData':this.fbRowData};
		var that = this;
		//app.currentSocket.drawData.drawId
		var market = app.currentSocket.market,
			gameCode = app.currentSocket.gameCode,
			filterData = Global.betZoneData.filter(function(item, index) {
				return item.market == market && item.gameCode == gameCode;
			})[0];
		that.maxCount = filterData.data[0][13];
		for(var i = 0; i< filterData.data.length; i++){
			if(!filterData.data[i+1]) break;
			if(filterData.data[i][13] <= filterData.data[i+1][13]){
				that.maxCount = filterData.data[i][13];
			}else{
				that.maxCount = filterData.data[i+1][13];
			}
		}
		that.lrAmount = 0;
		that.tbAmount = 0;
		that.fbAmount = 0;
		that.checkedIndex = [[],[],[]];
		var allAmount = 0;
		var lrMultiple = 1;//利润倍数
		var totalLrMoney = 0;//利润总投入
		var profitAmount = 0;//利润盈利总金额
		var LrMoney = filterData.data[0][9]* filterData.data[0][10]/2;//利润最大奖金
		var profitMargin = 0;
		var $zone = $('#' +　this.id);
		var content1 = $zone.find('.content1');
		var content2 = $zone.find('.content2');
		var content3 = $zone.find('.content3');
		for(var m = 0;m< filterData.data.length;m++){
			allAmount = allAmount + filterData.data[m][4]/filterData.data[m][3];
		}

		if(that.tabType == 1){
			for(var i = 0;i< parseInt(this.periods1);i++ ){
				if(!that.openDrawList[i])break;
				for(var x = 0;;x++){
					var allM = totalLrMoney + (allAmount*lrMultiple);
					if((LrMoney*lrMultiple - allM)/allM *100 >= parseInt(this.interest1)){
						if(lrMultiple > filterData.data[0][13])
							break;
						totalLrMoney = allM;
						profitAmount = LrMoney*lrMultiple - totalLrMoney;
						profitMargin = ((LrMoney*lrMultiple - totalLrMoney)/totalLrMoney * 100).toFixed(2) + '%';
						break;
					}else{
						if(lrMultiple > filterData.data[0][13])
							break;
						lrMultiple ++;
					}
				}
				if(lrMultiple > filterData.data[0][13])
					break;
				this.lrRowData.push([i+1, that.openDrawList[i].number ,lrMultiple,Util.addDotToNumber(allAmount*lrMultiple),Util.addDotToNumber(LrMoney*lrMultiple,4),Util.addDotToNumber(profitAmount,4),profitMargin]);
			}
			that.lrAmount = totalLrMoney;
			that.setContentVal(this.lrRowData.length,this.lrRowData.length,Util.addDotToNumber(that.lrAmount),1);
			this.lrData.rowData = this.lrRowData;
		}


		if(that.tabType == 2){
			if(this.startMultiple2 == 0){this.startMultiple2 = 1}
			for(var i = 0;i<parseInt(this.periods2);i++){
				if(!that.openDrawList[i])break;
				if(this.startMultiple2 > that.maxCount){
					this.startMultiple2 = that.maxCount;
				}
				this.tbRowData.push([i+1,that.openDrawList[i].number,this.startMultiple2,Util.addDotToNumber(this.startMultiple2*allAmount),that.timeList[that.openDrawList[i].number]]);
				that.tbAmount = that.tbAmount + allAmount*this.startMultiple2
			}
			that.setContentVal(this.tbRowData.length,this.tbRowData.length,Util.addDotToNumber(that.tbAmount),2);
			this.tbData.rowData = this.tbRowData;
		}


		if(that.tabType == 3){
			var multiple3 = parseInt(this.multiple3) || 1;
			var startMultiple3  = parseInt(this.startMultiple3) || 1;//起始倍数
			var Multiple;
			var interval3 = parseInt(this.interval3) || 1;//隔
			for(var i = 0;i<parseInt(this.periods3);i++){
				if(!that.openDrawList[i])break;
				if(i == 0){
					if(startMultiple3  < that.maxCount){
						Multiple = startMultiple3
					}else{
						Multiple = that.maxCount;
					}
				}else if( i%interval3 == 0){
					if(Multiple * multiple3 < that.maxCount){
						Multiple = Multiple * multiple3;
					}else{
						Multiple = that.maxCount;
					}
				}
				this.fbRowData.push([i+1,that.openDrawList[i].number,Multiple,Util.addDotToNumber(allAmount*Multiple),that.timeList[that.openDrawList[i].number]]);
				that.fbAmount = that.fbAmount + allAmount*Multiple;
			}
			that.setContentVal(this.fbRowData.length,this.fbRowData.length,Util.addDotToNumber(that.fbAmount),3);
			this.fbData.rowData = this.fbRowData;
		}
	};
	//自动调整倍数
	ChaseNumberDialog.prototype.changeMultiple = function(){
		var that = this;
		var $chaseNumber = app.currentModule.chaseNumber.zone;
		var $chaseNumberDialog = app.currentModule.chaseNumber.chaseNumberDialog.zone;
		if(this.tabType ==  2 && that.maxCount < that.startMultiple2){
			that.isChangeMultipleModel = true;
			app.noticeDialog.show({
				subTitle : '倍数超出',
				text:'您选择的玩法无法实现设置的投注倍数，系统已自动为您调整计划',
				buttonName: '确定',
				autoHide: true,
				timeout: 5000,
				okCallback: function(){
					that.isChangeMultipleModel = false;
					that.show({'tab': that.tabType});
					$chaseNumber.find('.startMultiple2').val(that.maxCount);
					$chaseNumberDialog.find('.startMultiple2').val(that.maxCount);
				}
			});
		}else if(this.tabType == 3  && that.maxCount < that.startMultiple3){
			that.isChangeMultipleModel = true;
			app.noticeDialog.show({
				subTitle : '倍数超出',
				text:'您选择的玩法无法实现设置的投注倍数，系统已自动为您调整计划',
				buttonName: '确定',
				autoHide: true,
				timeout: 5000,
				okCallback: function(){
					that.isChangeMultipleModel = false;
					that.show({'tab': that.tabType});
					$chaseNumber.find('.startMultiple3').val(that.maxCount);
					$chaseNumberDialog.find('.startMultiple3').val(that.maxCount);
				}
			});
		}
	};
	ChaseNumberDialog.prototype.changePeriods = function(){
		var that = this;
		var $chaseNumber = app.currentModule.chaseNumber.zone;
		var $chaseNumberDialog = app.currentModule.chaseNumber.chaseNumberDialog.zone;
		if(this.tabType ==  1){
			if(this.CustomaryPeriods1 > this.periods1 ){
				app.noticeDialog.show({
					subTitle : '期数超出',
					text:'您选择的玩法无法实现设置的投注期数，系统已自动为您调整计划。',
					buttonName: '确定',
					autoHide: true,
					timeout: 5000,
					okCallback: function(){
						that.show({'tab': that.tabType});
						that.periods1 = that.lrRowData.length;
						$chaseNumber.find('.periods1').val(that.periods1);
						$chaseNumberDialog.find('.periods1').val(that.periods1);
					}
				});
			}else if(that.lrRowData.length == 0 && this.CustomaryPeriods1 != 0){
				app.noticeDialog.show({
					subTitle : '收益率过大',
					text:'您设置的最低收益率过大，请重新设置',
					buttonName: '确定',
					autoHide: true,
					timeout: 3000,
					okCallback: function(){
						that.show({'tab': that.tabType});
					}
				});
			}else if(that.lrRowData.length != this.CustomaryPeriods1) {
				var subTitle = '';
				if(this.CustomaryPeriods1 > that.maxPeriods ){
					subTitle = '期数超出'
				}else{
					subTitle = '倍数超出'
				}
				app.noticeDialog.show({
					subTitle : subTitle,
					text:'您选择的玩法无法实现设置的投注期数，系统已自动为您调整计划。',
					buttonName: '确定',
					autoHide: true,
					timeout: 3000,
					okCallback: function(){
						that.show({'tab': that.tabType});
						that.periods1 = that.lrRowData.length;
						$chaseNumber.find('.periods1').val(that.periods1);
						$chaseNumberDialog.find('.periods1').val(that.periods1);
					}
				});
			}else{
				if(!that.isChangeMultipleModel)
					that.show({'tab': that.tabType});
			}
		}else if(this.tabType ==  2){
			if(this.CustomaryPeriods2 > this.periods2 ){
				if(!that.isChangeMultipleModel){
					app.noticeDialog.show({
						subTitle : '期数超出',
						text:'超出最大追号计划数，最大追号'+(that.endId)+'期,将自动调整到最大期数',
						buttonName: '确定',
						autoHide: true,
						timeout: 5000,
						okCallback: function(){
							that.show({'tab': that.tabType});
							$chaseNumber.find('.periods2').val(that.periods2);
							$chaseNumberDialog.find('.periods2').val(that.periods2);
						}
					});
				}else{
					$chaseNumber.find('.periods2').val(that.periods2);
					$chaseNumberDialog.find('.periods2').val(that.periods2);
				}
			}else{
				if(!that.isChangeMultipleModel)
					that.show({'tab': that.tabType});
			}
		}else{
		 if(this.CustomaryPeriods3 != that.fbRowData.length){
			 if(!that.isChangeMultipleModel){
				 app.noticeDialog.show({
					 subTitle : '期数超出',
					 text:'您选择的玩法无法实现设置的期数，系统已自动为您调整计划。',
					 buttonName: '确定',
					 autoHide: true,
					 timeout: 5000,
					 okCallback: function(){
						 that.show({'tab': that.tabType});
						 that.periods3 = that.fbRowData.length;
						 $chaseNumber.find('.periods3').val(that.periods3);
						 $chaseNumberDialog.find('.periods3').val(that.periods3);
					 }
				 });
			 }else{
				 that.periods3 = that.fbRowData.length;
				 $chaseNumber.find('.periods3').val(that.periods3);
				 $chaseNumberDialog.find('.periods3').val(that.periods3);
			 }
			}else if(this.CustomaryPeriods3 > this.periods3 ){
				 if(that.maxCount > that.startMultiple3){
					 app.noticeDialog.show({
						 subTitle : '期数超出',
						 text:'超出最大追号计划数，最大追号'+(that.endId)+'期,将自动调整到最大期数',
						 buttonName: '确定',
						 autoHide: true,
						 timeout: 5000,
						 okCallback: function(){
							 that.show({'tab': that.tabType});
							 $chaseNumber.find('.periods3').val(that.periods3);
							 $chaseNumberDialog.find('.periods3').val(that.periods3);
						 }
					 });
				 }else{
					 if(!that.isChangeMultipleModel)
						 that.show({'tab': that.tabType});
					 $chaseNumber.find('.periods3').val(that.periods3);
					 $chaseNumberDialog.find('.periods3').val(that.periods3);
				 }
			}else{
			 if(!that.isChangeMultipleModel)
			 	that.show({'tab': that.tabType});
			}
		}
	};
	ChaseNumberDialog.prototype.getInpValue = function(){
		//修改--DB
		var $chaseNumber = app.currentModule.chaseNumber.zone;
		var $chaseNumberDialog = app.currentModule.chaseNumber.chaseNumberDialog.zone;
		this.interest1 = $chaseNumberDialog.find('.interest1').val();//利润-最低收益
		this.periods1 = $chaseNumberDialog.find('.periods1').val();//利润-追号期数
		this.startMultiple2 = $chaseNumberDialog.find('.startMultiple2').val();//同倍-起始倍数
		this.periods2 = $chaseNumberDialog.find('.periods2').val();//同倍-追号期数
		this.startMultiple3 = $chaseNumberDialog.find('.startMultiple3').val();
		this.interval3 = $chaseNumberDialog.find('.interval3').val();
		this.multiple3 = $chaseNumberDialog.find('.multiple3').val();
		this.periods3 = $chaseNumberDialog.find('.periods3').val();

		$chaseNumber.find('.interest1').val(this.interest1);
		$chaseNumber.find('.periods1').val(this.periods1);
		$chaseNumber.find('.startMultiple2').val(this.startMultiple2);
		$chaseNumber.find('.periods2').val(this.periods2);
		$chaseNumber.find('.startMultiple3').val(this.startMultiple3);
		$chaseNumber.find('.interval3').val(this.interval3);
		$chaseNumber.find('.multiple3').val(this.multiple3);
		$chaseNumber.find('.periods3').val(this.periods3);
	};

	ChaseNumberDialog.prototype.inpValue = function(){
		//修改--DB
		var $chaseNumber = app.currentModule.chaseNumber.zone;
		var $chaseNumberDialog = app.currentModule.chaseNumber.chaseNumberDialog.zone;
		this.interest1 = $chaseNumber.find('.interest1').val();//利润-最低收益
		this.periods1 = $chaseNumber.find('.periods1').val();//利润-追号期数
		this.startMultiple2 = $chaseNumber.find('.startMultiple2').val();//同倍-起始倍数
		this.periods2 = $chaseNumber.find('.periods2').val();//同倍-追号期数
		this.startMultiple3 = $chaseNumber.find('.startMultiple3').val();
		this.interval3 = $chaseNumber.find('.interval3').val();
		this.multiple3 = $chaseNumber.find('.multiple3').val();
		this.periods3 = $chaseNumber.find('.periods3').val();

		$chaseNumberDialog.find('.interest1').val(this.interest1);
		$chaseNumberDialog.find('.periods1').val(this.periods1);
		$chaseNumberDialog.find('.startMultiple2').val(this.startMultiple2);
		$chaseNumberDialog.find('.periods2').val(this.periods2);
		$chaseNumberDialog.find('.startMultiple3').val(this.startMultiple3);
		$chaseNumberDialog.find('.interval3').val(this.interval3);
		$chaseNumberDialog.find('.multiple3').val(this.multiple3);
		$chaseNumberDialog.find('.periods3').val(this.periods3);

	};
	//赋值
	ChaseNumberDialog.prototype.setContentVal = function(val1,val2,val3,type){
		var $zone = $('#' +　this.id);
		var content1 = $zone.find('.content1');
		var content2 = $zone.find('.content2');
		var content3 = $zone.find('.content3');
		if(type == 1){
			//利润
			content1.children().find('.issue-num').text(val1);
			content1.children().find('.orders-num').text(val2);
			content1.children().find('.amount').text(val3);
		}else if(type == 2){
			//同倍
			content2.children().find('.issue-num').text(val1);
			content2.children().find('.orders-num').text(val2);
			content2.children().find('.amount').text(val3);
		}else if(type == 3) {
			//翻倍
			content3.children().find('.issue-num').text(val1);
			content3.children().find('.orders-num').text(val2);
			content3.children().find('.amount').text(val3);
		}
	};
	ChaseNumberDialog.prototype.getDom = function () {
		return this.el;
	};

	ChaseNumberDialog.prototype.createTable = function (data) {
		var i;
		var temp = '';
		var px = '20px';
		if(Util.isMobile.ios()){
			px = 0
		}
		temp =	'<table>' +
					'<thead>' +
						'<tr style="padding-right: '+px+'">';

		for (i = 0; i < data.title.length; i++) {
			if(this.tabType == 1){
				temp +=  		'<td class="td-width td-w'+(i+1)+'">' + data.title[i] + '</td>';
			}else{
				temp +=  		'<td class="td-width">' + data.title[i] + '</td>';
			}
		}

		temp +=			'</tr>' +
					'</thead>' +

					'<tbody>' +
						this.createRows(data.rowData) +
					'</tbody>' +
				'</table>';

		return temp;
	};

	ChaseNumberDialog.prototype.createRows = function (data) {
		var i;
		var temp = '';
		var checkbox;

		for (i = 0; i < data.length; i++) {
			temp +=	'<tr>';

			for (j = 0; j < data[i].length + 1; j++) {
				var cla = this.tabType == 1 ? 'td-w'+(j+1)+'':'';
				if (j === 2) {
					temp += '<td class="td-width '+cla+'"><span class="bs-input">' + data[i][j] + '</span>' + '</td>';
				} else if (j === data[i].length) {
					checkbox = new IMCheckBox({checked: true});
					temp += '<td class="td-width '+cla+' oper-checkbox">' + checkbox.getDom() + '</td>';
				} else {
					temp += '<td class="td-width '+cla+'">' + data[i][j] + '</td>';
				}
			}

			temp += '</tr>';
		}

		return temp;
	};

	ChaseNumberDialog.prototype.show = function (data) {
		var ul       = this.zone.find('ul.tabs');
		var selected = ul.children('li[data-value=' + data.tab + ']'); 

		selected.click();
		this.showOverlay();
	};

	ChaseNumberDialog.prototype.hide = function () {
		this.hideOverlay();
	};

	ChaseNumberDialog.prototype.refreshDialog = function(state, tabType){
		var that = this;
		tabType && (that.tabType = tabType);
		if(that.isDataEnd){
			that.isDataEnd = false;
		}else{
			return false;
		}
		var $chaseNumber = app.currentModule.chaseNumber.zone;
		var $chaseNumberDialog = app.currentModule.chaseNumber.chaseNumberDialog.zone;
		var req = {
			"gameCode":app.currentSocket.gameCode,
			"market": app.currentSocket.market
		};
		var $chaseNumberDialog = app.currentModule.chaseNumber.chaseNumberDialog.zone;
		if(that.tabType == 1){
			var interest1 = $chaseNumberDialog.find('.interest1').val();//利润-最低收益
			var periods1 = $chaseNumberDialog.find('.periods1').val();//利润-追号期数
			if(interest1 == '' || periods1 == ''){
				app.noticeDialog.show({
					subTitle : '追号失败',
					text: '投注信息不完整',
					buttonName: '确定',
					autoHide: true,
					timeout: 5000
				});
				return false
			}
		}else if(that.tabType == 2){
			var startMultiple2 = $chaseNumberDialog.find('.startMultiple2').val();//同倍-起始倍数
			var periods2 = $chaseNumberDialog.find('.periods2').val();//同倍-追号期数
			if(startMultiple2 == '' || periods2 == ''){
				app.noticeDialog.show({
					subTitle : '追号失败',
					text: '投注信息不完整',
					buttonName: '确定',
					autoHide: true,
					timeout: 5000
				});
				return false
			}
		}else{
			var startMultiple3 = $chaseNumberDialog.find('.startMultiple3').val();
			var interval3 = $chaseNumberDialog.find('.interval3').val();
			var multiple3 = $chaseNumberDialog.find('.multiple3').val();
			var periods3 = $chaseNumberDialog.find('.periods3').val();
			if(startMultiple3 == '' || interval3 == '' || multiple3 == '' || periods3 == ''){
				app.noticeDialog.show({
					subTitle : '追号失败',
					text: '投注信息不完整',
					buttonName: '确定',
					autoHide: true,
					timeout: 5000
				});
				return false
			}
		}
		service.openDrawList(req,function(res){
			that.isDataEnd = true;
			if(res.code == 0){
				if( res.list.length == 0){
				app.noticeDialog.show({
						subTitle: "追号失败",
						text: "追号计划暂不支持",
						buttonName: "确定",
						autoHide: true,
						timeout: 3000
					});
					return false;
				}
				if(res.list[0].id < app.currentSocket.drawData.drawId)res.list.splice(0,1);
				that.firstId = parseInt(res.list[0].number);
				that.openDrawList = res.list;
				that.endId = parseInt(res.list[res.list.length -1].number);
				that.maxPeriods = res.list[res.list.length -1].number - res.list[0].number + 1;
				if(!state){
					that.inpValue();
					that.getInpValue();
				}else{
					that.getInpValue();
					that.inpValue();
				}
				that.CustomaryPeriods1 = that.periods1;
				that.CustomaryPeriods2 = that.periods2;
				that.CustomaryPeriods3 = that.periods3;
				if(that.tabType == 1 &&  that.periods1 > (that.endId  - that.firstId + 1)){
					that.periods1 = that.endId  - that.firstId + 1;
				}else if(that.tabType == 2 && that.periods2 > (that.endId  - that.firstId + 1)){
					that.periods2 = that.endId  - that.firstId + 1;
				}else if(that.tabType == 3 && that.periods3 > that.endId  - that.firstId){
					that.periods3 = that.endId  - that.firstId + 1;
				}
				that.timeList = [];
				for(var b = 0; b < res.list.length; b++){
					that.timeList[res.list[b].number] = res.list[b].endTime
				};
				that.changeMultiple();
				that.setHtml();//生成HTML；
				that.changePeriods();//自动调整期数
			}else{
				Util.errorModel(res.code,'追号失败');
			}

		});
	};
	ChaseNumberDialog.prototype.setHtml = function(){
		var that = this;
		that.dataList();
		var hadeHtml = app.currentModule.chaseNumber.chaseNumberDialog.zone;
		if(that.tabType == 1){
			var lrHtml = that.createTable(that.lrData);
			hadeHtml.find('.lrData').empty();
			hadeHtml.find('.lrData').append(lrHtml);
		}else if(that.tabType == 2){
			var tbHtml = that.createTable(that.tbData);
			hadeHtml.find('.tbData').empty();
			hadeHtml.find('.tbData').append(tbHtml);
		}else if(that.tabType == 3){
			var fbHtml = that.createTable(that.fbData);
			hadeHtml.find('.fbData').empty();
			hadeHtml.find('.fbData').append(fbHtml);
		}
	};
	ChaseNumberDialog.prototype.serviceChaseBack = function(res,req,chaseItems){
		var that = this;
		that.comfirmBet.recover();
		that.comfirmBet.enabled();
		if(res.code == 0){
			app.money = Util.addDotToNumber(res.balance, 4);
			var header = $('.bet .nav-title');
			if(header.find('.secret').children('a').text() == '隐藏'){
				header.find('.money').text(app.money);
			}
			app.features.forEach(function(name, index){
				app[name].comfirmBet.zone.find('.balance').text(app.money);
			});

			var modelZone = app.currentModule.modelZone;
			if(req.batch)modelZone.showDot(chaseItems.length * req.batch.length);
			if(!req.batch)modelZone.showDot(chaseItems.length);
			var okCallback = function () {
				that.hide();
				app.currentModule.comfirmBet.confirmBetButton.disabled();
				app.currentModule.chaseNumber.addChaseNumber.disabled();
				app.currentModule.chaseNumber.addChaseNumber2.disabled();
				app.currentModule.chaseNumber.addChaseNumber3.disabled();
				app.currentModule.bettingOrder.removeAllList();
			};
			app.noticeDialog.show({
				subTitle: '投注成功',
				text: '您可以通过"投注记录"查询您的投注记录!',
				buttonName: '关闭',
				autoHide: true,
				timeout: 5000
			});
			okCallback();
		}else{
			Util.errorModel(res.code,'投注失败');
		}
	}
	ChaseNumberDialog.prototype.bindEvents = function () {
		var ul;
		var stick;
		var left;
		var content;
		var content1;
		var content2;
		var content3;
		var button;
		var inpChange;
		var that = this;
		var table;
		var clearChaseNumberButton;
		that.tabType = 1;
		this.zone = $('#' + this.id);

		ul        = this.zone.find('ul');
		stick     = this.zone.find('.stick');
		inpChange = this.zone.find('.form-control');
		content   = this.zone.find('.cont');
		content1  = this.zone.find('.content1');
		content2  = this.zone.find('.content2');
		content3  = this.zone.find('.content3');
		button    = this.zone.find('.add-chase-number');
		table     = this.zone.find('table');
		clearChaseNumberButton = this.zone.find('.clear-chase-number');

		ul.delegate('li', 'click', function () {
			ul.children('li').removeClass('active');
			$(this).addClass('active');
			content.hide();

			if ($(this).hasClass('tab1')) {
				that.tabType = 1;
				left = 0;
				content1.show();
			} else if ($(this).hasClass('tab2')) {
				that.tabType = 2;
				left = '100px';
				content2.show();
			} else {
				that.tabType = 3;
				left = '200px';
				content3.show();
			}

			stick.css('left', left);
		});
		inpChange.on('input',function(e){
			if(e.keyCode == 37 || e.keyCode == 38|| e.keyCode == 39 || e.keyCode == 40)return false;
			$(this).val($(this).val().replace(/\D/gi,""));
			if($(this).hasClass('startMultiple2') || $(this).hasClass('startMultiple3')){
				if($(this).val() == 0)
					$(this).val('');
				if($(this).val() > that.maxCount)
					$(this).val(that.maxCount)
			}
			if($(this).hasClass('periods1') || $(this).hasClass('periods2') || $(this).hasClass('periods3')){
				if($(this).val() == 0)
					$(this).val('');
			}
		});
		this.zone.delegate('.im-checkbox', 'click', function (e) {
			$(this).toggleClass('checked');
			var Allmoney = parseInt($(this).parents('tr').find('.td-width:nth-child(4)').text().replace(/,/g, ""));
			var $zone = $('#' +　that.id);
			var index = $(this).parents('tr').index();
			if(isNaN(Allmoney)) return false;
			if($(this).hasClass('checked')){
				if(that.tabType == 1){
					that.checkedIndex[0].remove(index)
				}else if(that.tabType == 2){
					that.checkedIndex[1].remove(index)
				}else{
					that.checkedIndex[2].remove(index)
				}
			}else{
				if(that.tabType == 1){
					that.checkedIndex[0].push(index)
				}else if(that.tabType == 2){
					that.checkedIndex[1].push(index)
				}else{
					that.checkedIndex[2].push(index)
				}
			}
			if(that.tabType == 1){
				var Allmoney = 0;
				for(var i = 0; i < that.checkedIndex[0].length;i++){
					Allmoney += parseInt($(this).parents('tr').parent().children().eq(that.checkedIndex[0][i]).children().eq(3).text().replace(/,/g, ""))
				}
				var val1 = that.lrRowData.length - that.checkedIndex[0].length;
				var val2 = that.lrRowData.length - that.checkedIndex[0].length;
				var val3 = Util.addDotToNumber(parseInt(that.lrAmount) - Allmoney);
				that.setContentVal(val1,val2,val3,1);
			}else if(that.tabType == 2){
				var Allmoney = 0;
				for(var i = 0; i < that.checkedIndex[1].length;i++){
					Allmoney += parseInt($(this).parents('tr').parent().children().eq(that.checkedIndex[1][i]).children().eq(3).text().replace(/,/g, ""))
				}
				var val1 = that.tbRowData.length - that.checkedIndex[1].length;
				var val2 = that.tbRowData.length - that.checkedIndex[1].length;
				var val3 = Util.addDotToNumber(parseInt(that.tbAmount) - Allmoney);
				that.setContentVal(val1,val2,val3,2);
			}else{
				var Allmoney = 0;
				for(var i = 0; i < that.checkedIndex[2].length;i++){
					Allmoney += parseInt($(this).parents('tr').parent().children().eq(that.checkedIndex[2][i]).children().eq(3).text().replace(/,/g, ""))
				}
				var val1 = that.fbRowData.length - that.checkedIndex[1].length;
				var val2 = that.fbRowData.length - that.checkedIndex[1].length;
				var val3 = Util.addDotToNumber(parseInt(that.fbAmount) - Allmoney);
				that.setContentVal(val1,val2,val3,3);
			}
		});
		this.zone.find('.chase-dialog-add-chase-number').click(function () {
			that.refreshDialog(true);
		});

		var clickOrtouch = Util.isMobile.any()?'touchstart': 'click';
		
		this.zone.find('.cancel-bet-button').bind(clickOrtouch, function () {
			var okCallback = function () {
				that.hide();
			};

			if (!that.confirmDialog) {
				that.confirmDialog = new ConfirmDialog({
					text: '',
					okCallback: okCallback.bind(this)
				});

				$('body').append(that.confirmDialog.getDom());
				that.confirmDialog.bindEvents();
			}

			that.confirmDialog.show('确定停止追号吗？');
		});

		var comfirmBet = function(){
			var stopUtilWin;
			var market = app.currentSocket.market,
				gameCode = app.currentSocket.gameCode,
				filterData = Global.betZoneData.filter(function(item, index) {
					return item.market == market && item.gameCode == gameCode;
				})[0];
			if(filterData.data.length != 1 &&　that.tabType == 1){
				for(var i = 0; i < filterData.data.length - 1; i++){
					if(filterData.data[0][14].betType != filterData.data[i+1][14].betType || filterData.data[0][14].betUnit != filterData.data[i+1][14].betUnit){
						app.noticeDialog.show({
							subTitle : '追号失败',
							text: '利润率追号不支持混投请确保您的投注都为同一玩法类型且元角模式一致',
							buttonName: '确定',
							autoHide: true,
							timeout: 5000
						});
						return false
					}
				}
				//app.noticeDialog.show({
				//	subTitle : '追号失败',
				//	text: '追号计划不支持混投',
				//	buttonName: '确定',
				//	autoHide: true,
				//	timeout: 5000
				//});
				//return false
			}
			var chaseItems = [];
			var idNumberList = {};
			for(var i = 0; i < that.openDrawList.length; i++){
				idNumberList[that.openDrawList[i].number] = that.openDrawList[i].id
			}
			//判断是否选中中奖后停止追号
			if(that.tabType == 1){
				var data = that.lrData.rowData;
				var isRemove = that.checkedIndex[0];
				stopUtilWin = that.zone.find('.content1 .operations .im-checkbox').hasClass('checked')
			}else if(that.tabType == 2){
				var data = that.tbData.rowData;
				var isRemove = that.checkedIndex[1];
				stopUtilWin = that.zone.find('.content2 .operations .im-checkbox').hasClass('checked')
			}else{
				var data = that.fbData.rowData;
				var isRemove = that.checkedIndex[2];
				stopUtilWin = that.zone.find('.content3 .operations .im-checkbox').hasClass('checked')
			}
			//获得追号chaseItem
			for(var i = 0; i< data.length; i++){
				if(isRemove.indexOf(i) < 0){
					chaseItems.push({
						"drawId": idNumberList[data[i][1]], //draw id
						"drawNumber": data[i][1], //draw number
						"multiple": data[i][2],
						"betAmount": data[i][3].replace(/,/g,'')
					})
				}
			}
			if(chaseItems.length == 0){
				app.noticeDialog.show({
					subTitle : '追号失败',
					text: '追号计划不能为空',
					buttonName: '确定',
					autoHide: true,
					timeout: 5000
				});
				return false
			}
			var batch = function(){
				var data = [];
				for(var i = 0; i < filterData.data.length; i++){
					data.push({
						"betType": filterData.data[i][5],
						"items": filterData.data[i][11],
						"odds": filterData.data[i][10],
						"comm":  filterData.data[i][6],
						"betCount": filterData.data[i][2],
						"betUnit": filterData.data[i][9],
						"prizeGroup":filterData.data[i][14].prizeGroup,
						"chaseItems": chaseItems
					});
					if(filterData.data[i][14].anyDrawTypes) data[i].anyDrawTypes = filterData.data[0][14].anyDrawTypes;
				}
				return data;
			};


			if(!that.comfirmBet.zone)that.comfirmBet.zone = $('.'+that.comfirmBet.id);
			that.comfirmBet.inProgress();
			that.comfirmBet.disabled();
			if(filterData.data.length == 1){
				//单个追号
				var req ={
					"stopUtilWin":stopUtilWin,
					"gameCode": app.currentSocket.gameCode,
					"market": filterData.market,
					"chaseItems": chaseItems,
					"betType": filterData.data[0][5],
					"items": filterData.data[0][11],
					"odds": filterData.data[0][10],
					"comm":  filterData.data[0][6],
					"betCount": filterData.data[0][2],
					"betUnit": filterData.data[0][9],
					"prizeGroup":filterData.data[0][14].prizeGroup
				};
				if(filterData.data[0][14].anyDrawTypes) req.anyDrawTypes = filterData.data[0][14].anyDrawTypes;
				service.chaseNumber(req,function(res){
					that.serviceChaseBack(res,req,chaseItems);
				})
			}else{
				//多个追号
				var req ={
					"stopUtilWin":stopUtilWin,
					"gameCode": app.currentSocket.gameCode,
					"market": filterData.market,
					'batch':batch()
				};
				service.multipleChase(req,function(res){
					that.serviceChaseBack(res,req,chaseItems);
				})
			}


		};
		//生成追号计划  确定投注
		this.zone.find('.comfirm-bet-button').bind(clickOrtouch, function () {
			if (!that.confirmDialog2) {
				that.confirmDialog2 = new ConfirmDialog({
					okCallback: function () {
						comfirmBet();
					}
				});
				$('body').append(that.confirmDialog2.getDom());
				that.confirmDialog2.bindEvents();
			}
			//判断是否选中中奖后停止追号
			if(that.tabType == 1){
				var data = that.lrData.rowData;
				var isRemove = that.checkedIndex[0];
			}else if(that.tabType == 2){
				var data = that.tbData.rowData;
				var isRemove = that.checkedIndex[1];
			}else{
				var data = that.fbData.rowData;
				var isRemove = that.checkedIndex[2];
			}
			//获得追号chaseItem
			var drawNumber = 0;
			var money = 0;
			var issue = 0;
			for(var i = 0; i< data.length; i++){
				if(isRemove.indexOf(i) < 0){
					if(drawNumber == 0){
						drawNumber = data[i][1];
					}
					money += parseFloat(data[i][3].replace(/,/g, ""));
					issue += 1;
				}
			}
			if(issue == 0){
				app.noticeDialog.show({
					subTitle : '追号失败',
					text: '追号计划不能为空',
					buttonName: '确定',
					autoHide: true,
					timeout: 5000
				});
				return false
			}
			that.confirmDialog2.showConfirm(drawNumber,money,issue)
		});

		clearChaseNumberButton.click(function () {
			that.zone.find('.cont:visible table tbody').html('');
			if(that.tabType == 1){
				that.lrData.rowData = [];
				that.setContentVal(0,0,0,1);
			}else if(that.tabType == 2){
				that.tbData.rowData = [];
				that.setContentVal(0,0,0,2);
			}else{
				that.fbData.rowData = [];
				that.setContentVal(0,0,0,3);
			}
		});

		this.zone.find('.close').click(function () {
			that.hide();
		});

		this.bindOverlayEvents();
	};

	window.ChaseNumberDialog = ChaseNumberDialog;
}());

/*
** 继承自IMDialog
*/

(function () {
	function ChaseOrderDetail (opt) {
		IMDialog.call(this, (opt || {}));
		this.id = this.opt.id;
		this.data =  [];
		this.el   = this.initDom();
	}

	ChaseOrderDetail.prototype = new IMDialog();

	ChaseOrderDetail.prototype.initDom = function () {
		var temp;

		this.cancel = new IMButton({
			text: '停止追号',
			className: 'cancel-order',
			imgSrc: '../img/cancel.png',
			id:this.id + 'btnCancel'
		});

		this.ok = new IMButton({
			text: '确定',
			className: 'ok-button',
			imgSrc: '../img/dash.png'
		});

		temp = 	'<div class="chase-order-detail" id="' + this.id + '">' +
					'<div class="dialog-wrapper">' +
						'<div class="dialog">' +
							'<div class="head">' +
								'<div class="head-text">' +
									'共<span class="total-issue">0</span>期，已完成' +
									'<span class="finished-issue">0</span>期' +
									//'<span>0</span>' +
								'</div>' +
								'<div class="close-dialog">✕</div>' +
							'</div>' +
							
							'<div class="content">' +
								this.createTable() +
							'</div>' +

							'<div class="button-zone">' +
								'<div class="cancel">' +
									this.cancel.getDom() +
								'</div>' +

								'<div class="ok">' +
									this.ok.getDom() +
								'</div>' +
							'</div>' +
						'</div>' +
					'</div>' +
				'</div>' +
				'<div class="overlay overlay2"></div>';
		return temp;
	};

	ChaseOrderDetail.prototype.createTable = function () {
		var temp = '';
		var px = '20px';
		if(Util.isMobile.ios()){
			px = 0
		}
		temp =	'<table>' +
					'<thead>' +
						'<tr style="padding-right: '+px+'">' +
							'<td class="td-width tdW1">奖期</td>' +
							'<td class="td-width tdW2">追号内容</td>' +
							'<td class="td-width tdW3">追号倍数</td>' +
							'<td class="td-width tdW3">投注金额</td>' +
							'<td class="td-width tdW3">追号状态</td>' +
							'<td class="td-width tdW3">状态</td>' +
							'<td class="td-width tdW3">操作</td>' +
						'</tr>' +
					'</thead>' +

					'<tbody>' +
						this.createRows() +
					'</tbody>' +
				'</table>';

		return temp;
	};

	ChaseOrderDetail.prototype.createRows = function () {
		var i;
		var that = this;
		var temp = '';
		for (i = 0; i < this.data.length; i++) {
			temp +=	'<tr class="tdW">';

			for (j = 0; j < this.data[i].length; j++) {
				if (j === 0) {
					temp += '<td class="td-width"><span class="dot"></span>' + this.data[i][j] + '</td>';
				} else if (j === this.data[i].length-1 && this.data[i][j] === '取消本期'){
					temp += '<td class="td-width"><span class="cancel-current">' + this.data[i][j] + '</span></td>';
				} else if (j === this.data[i].length-1 && this.data[i][j] === '详情'){
					temp += '<td class="td-width"><span class="order-detail">' + this.data[i][j] + '</span></td>';
				} else if(j === 6){
					if( this.data[i][j] == 1){
						temp += '<td class="td-width cancel-order">撤单</td>';
					}else{
						temp += '<td class="td-width cancel-order can-not-cancel" >撤单</td>';
					}

				}else {
					if(j === 5 || j === 4){
						var color = '#cccccc';
						this.data[i][j] = this.data[i][j].replace(/[,]/g,'');
						if(!isNaN(this.data[i][j])) color = '#f86f70';
						if(this.data[i][j] == '用户撤销' || this.data[i][j] == '系统撤销') color = '#cccccc';
						if(this.data[i][j] == '未中奖') color = '#cccccc';
						if(this.data[i][j ]== '待开奖') color = '#a3e2cf';
						temp += '<td class="td-width" style="color: '+color+'">' + this.data[i][j] + '</td>';
					}else if(j=== 1){
						temp += '<td class="td-width" title="'+ this.data[i][j]+'">' + this.data[i][j] + '</td>';
					}else{
						temp += '<td class="td-width">' + this.data[i][j] + '</td>';
					}
				}
			}

			temp += '</tr>';
		}
		return temp;
	};
	ChaseOrderDetail.prototype.getDom = function () {
		return this.el;
	};

	ChaseOrderDetail.prototype.show = function (data) {
		if (!data.canCancel) {
			this.zone.find('.cancel').addClass('can-not-cancel');
		} else {
			this.zone.find('.cancel').removeClass('can-not-cancel');
		}
		this.chaseId = data.dataList.chaseId;
		this.finishedDraw = data.dataList.finishedDraw;
		this.totalDraw  = data.dataList.totalDraw;
		this.zone.find('.total-issue').text(this.totalDraw);
		this.zone.find('.finished-issue').text(this.finishedDraw);
		this.showOverlay();
	};

	ChaseOrderDetail.prototype.hide = function () {
		this.hideOverlay();
	};

	ChaseOrderDetail.prototype.bindEvents = function () {
		var button;
		var table;
		var cancelOrder;
		var that = this;
		this.zone = $('#' + this.id);
		table = this.zone.find('table');
		table.delegate('.cancel-order','click',function(){
			var  data = that.resData.list;
			var index = $(this).parents('tr').index();
			$(this).addClass('btn-disabled can-not-cancel');
			var ticketId = data[index].ticketId;
			service.cancelBetHistory({ticketId:ticketId},function(res){
				if(res.code == 0){
					if(typeof(app) != 'undefined'){
						app.noticeDialog.show({
							subTitle : "撤单成功",
							text: '撤单成功',
							buttonName: "确定",
							autoHide: true,
							timeout: 3000,
							okCallback: app.bettingRecords.getChaseHistory()
						});
						app.bettingRecords.assignmentChaseModel();
					}else{
						recordsQuery.noticeDialog.show({
							subTitle : "撤单成功",
							text: '撤单成功',
							buttonName: "确定",
							autoHide: true,
							timeout: 3000,
							okCallback:recordsQuery.getChaseHistory()
						});
						recordsQuery.assignmentChaseModel()
					}
				}else{
					$(this).removeClass('btn-disabled can-not-cancel');
					Util.errorModel(res.code,'撤单失败');
					if(typeof(app) != 'undefined'){
						app.bettingRecords.assignmentChaseModel();
					}else{
						recordsQuery.assignmentChaseModel()
					}
				}
			})
		});
		table.delegate('td', 'click', function () {
			if (!$(this).children('span').hasClass('cancel-current')) {
				return;
			}

			if (!that.confirmDialog) {
				var okCallback = function () {
					that.hide();
				};

				that.confirmDialog = new ConfirmDialog({
					text: '',
					okCallback: okCallback.bind(this)
				});

				$('body').append(that.confirmDialog.getDom());
				that.confirmDialog.bindEvents();
			}

			that.confirmDialog.show('确定取消本期吗？');
		});

		this.zone.find('.close-dialog').click(function () {
			that.hide();
		});

		this.zone.find('.cancel-order').click(function () {
			var okCallback = function () {
				that.confirmDialog.zone.find('.ok').addClass('.btn-disabled');
				service.cancelChaseHistory({'chaseId':that.chaseId},function(res){
					that.hide();
					that.confirmDialog.zone.find('.ok').removeClass('.btn-disabled');
					if(res.code == 0){
						if(typeof(app) != 'undefined'){
							app.noticeDialog.show({
								subTitle : "停止成功",
								text: '停止成功',
								buttonName: "确定",
								autoHide: true,
								timeout: 3000
							});
							app.bettingRecords.getChaseHistory();
						}else{
							recordsQuery.noticeDialog.show({
								subTitle : "停止成功",
								text: '停止成功',
								buttonName: "确定",
								autoHide: true,
								timeout: 3000
							});
							recordsQuery.getChaseHistory()
						}

					}else{
						Util.errorModel(res.code,'停止失败');
					}
				})

			};

			if (!that.confirmDialog) {
				that.confirmDialog = new ConfirmDialog({
					text: '',
					okCallback: okCallback.bind(this)
				});

				$('body').append(that.confirmDialog.getDom());
				that.confirmDialog.bindEvents();
			}

			that.confirmDialog.show('确定停止追号吗？');
		});

		this.zone.find('.order-detail').click(function () {
			if (!app.betOrderDetail) {
				app.betOrderDetail = new BetOrderDetail({id: 'bet-order-detail'});
				$('body').append(app.betOrderDetail.getDom());
				app.betOrderDetail.bindEvents();
			}

			app.betOrderDetail.show({'canCancel': true});
		});

		this.zone.find('.ok-button').click(function () {
			that.hide();
		});
		this.bindOverlayEvents();
	};

	window.ChaseOrderDetail = ChaseOrderDetail;
}());

(function () {
	function ComfirmBet (opt) {
		this.opt  = opt;
		this.id   = this.opt.id;
		this.data = {
			balance: 0,
			return: 0,
			betNumber: 0,
			amount: 0
		};

		this.el = this.initDom(this.data);
	}

	ComfirmBet.prototype.initDom = function (data) {
		var temp;

		this.confirmBetButton = new IMButton({
			text: '确认投注',
			imgSrc: '../img/select-mark.png',
			className: 'confirm-bet-button',
			id: this.id + '-confirm-bet-button'
		});

		this.betFinishButton = new IMButton({
			text: '确定',
			className: 'bet-finish-button',
			id: this.id + '-bet-finish-button'
		});

		this.betFailedButton = new IMButton({
			text: '投注失败',
			imgSrc: '../img/error-cross.png',
			className: 'bet-failed-button',
			id: this.id + '-bet-failed-button'
		});

		temp = 	'<div class="confirm-bet" id="' + this.id + '">' +
					'<div class="page1">' +
						'<div class="row info-zone">' +
							'<div class="col-md-6 left">' +
								'<div class="name">' +
									'钱包余额' +
								'</div>' +
								'<div class="value balance">' +
									data.balance + '元' +
								'</div>' +
								'<div class="name">' +
									'总投注' +
								'</div>' +
								'<div class="value bet-number">' +
									data.betNumber + '注' +
								'</div>' +
							'</div>' +
							'<div class="col-md-6 right">' +
								'<div class="name">' +
									'返还金额' +
								'</div>' +
								'<div class="value return">' +
									data.return + '元' +
								'</div>' +
								'<div class="name">' +
									'总金额' +
								'</div>' +
								'<div class="value amount">' +
									data.amount + '元' +
								'</div>' +
							'</div>' +
						'</div>' +
						'<div class="button-zone">' +
							this.confirmBetButton.getDom() +
						'</div>' +
					'</div>' +

					'<div class="page2">' +
						'<div class="error-info">' +
							'<div class="cry">' +
								'<img src="../img/cry.png">' +
							'</div>' +
							'<p class="info">' +
								'<span>请检查您的网络是否正常，如果问题继续存在请刷新页面。</span>' +
							'</p>' +
						'</div>' +

						'<div class="button-zone">' +
							this.betFailedButton.getDom() +
						'</div>' +
					'</div>' +

					'<div class="page3">' +
						'<div class="success-info">' +
							'<img src="../img/bet-success.png">' +
						'</div>' +

						'<div class="button-zone">' +
							this.betFinishButton.getDom() +
						'</div>' +
					'</div>' +
				'</div>';
				
		return temp;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
	};

	ComfirmBet.prototype.getDom = function () {
		return this.el;
	};

	ComfirmBet.prototype.bindEvents = function () {
		var page1;
		var page2;
		var page3;
		var timeout;
		var callback3;
		var callback2;
		var callback1;
		var that = this;

		this.zone = $('#' + this.id);
		page1     = this.zone.find('.page1'); //提交中
		page2     = this.zone.find('.page2');//投注失败
		page3     = this.zone.find('.page3');//投注成功
		var Confirm = function(){
			if (!that.confirmDialog) {
				that.confirmDialog = new ConfirmDialog({
					okCallback: function () {
						callback1.bind(this)();
					}
				});
				$('body').append(that.confirmDialog.getDom());
				that.confirmDialog.bindEvents();
			}
			var amount = that.zone.find('.amount').text().substring(0,that.zone.find('.amount').text().length-1);
			that.confirmDialog.showConfirm(app.currentSocket.drawData.drawNumber,amount)
		};
		callback1 = function () {
			var callback = function () {
				page1.hide();
				page3.show();
			};

			that.confirmBetButton.inProgress();
			that.commit(page1,page2,page3,callback2,callback3);
		};

		callback2 = function () {
			page3.hide();
			page1.show();
			that.confirmBetButton.recover();
			that.confirmBetButton.inNormal()
		};
		callback3 = function () {
			page2.hide();
			page1.show();
			that.confirmBetButton.inNormal()
		};
		//确认提交
		this.confirmBetButton.bindEvents(Confirm);
		this.confirmBetButton.disabled();
		//提交中
		this.betFinishButton.bindEvents(callback2.bind(this));

		this.betFailedButton.bindEvents(callback3.bind(this));
	};
	ComfirmBet.prototype.dataList = function(){
		var data;
		var market = app.currentSocket.market,
			gameCode = app.currentSocket.gameCode,
			filterData = Global.betZoneData.filter(function(item, index) {
				return item.market == market && item.gameCode == gameCode;
			})[0];
		var list = filterData;
			if(list.data.length > 0){
				data = {
					"market": list.data[0][14].market,
					"gameCode": list.data[0][14].gameCode,
					"drawId":  app.currentSocket.drawData.drawId,
					"batch":[]
				};
				for(var i = 0; i < list.data.length;i++){
					var item = list.data[i][14];
					data.batch.push({
						"betType": item.betType,
						"items":item.items,
						"betAmount": item.betAmount,
						"odds": item.odds,
						"comm": item.comm,
						"multiple": item.multiple,
						"betCount": item.betCount,
						"betUnit": item.betUnit,
						"prizeGroup":item.prizeGroup
					});
					if(item.anyDrawTypes){
						data.batch[i]["anyDrawTypes"] = item.anyDrawTypes;
					}
				}
			}
		return data;
	};
	ComfirmBet.prototype.commit = function (page1,page2,page3,callback2,callback3) {
		var that = this;
		if(!app.currentSocket.drawData){
			app.marketCloseNotice(app.currentSocket.market,3000);
			return false;
		}
		var data = this.dataList();
		if(!data){
			app.noticeDialog.show({
				subTitle: '温馨提示',
				text: '请先添加号码到投注篮',
				buttonName: '确定',
				autoHide: true,
				timeout: timeout
			});
		}
		service.betchPlaceBet(data,function(res){
			var timeCancel;
			if(res.code == 0){

				app.money = Util.addDotToNumber(res.balance, 4);
				var header = $('.bet .nav-title');
				if(header.find('.secret').children('a').text() == '隐藏'){
					header.find('.money').text(app.money);
				}
				app.features.forEach(function(name, index){
					app[name].comfirmBet.zone.find('.balance').text(app.money);
				});

				var modelZone = app.currentModule.modelZone;
				modelZone.showDot(data.batch.length);
				app.currentModule.bettingOrder.removeAllList();
				page1.hide();
				page3.show();
				timeCancel = setTimeout(function(){
					callback2()
				},3000);
				app.currentModule.comfirmBet.confirmBetButton.disabled();
				app.currentModule.chaseNumber.addChaseNumber.disabled();
				app.currentModule.chaseNumber.addChaseNumber2.disabled();
				app.currentModule.chaseNumber.addChaseNumber3.disabled();
			}else{
				var text = Local[res.code];
				page2.find('.info').children().text(text);
				page1.hide();
				page2.show();
				timeCancel = setTimeout(function(){
					callback3()
				},3000);
			}
		});
	};

	window.ComfirmBet = ComfirmBet;
}());

/*
** 继承自IMDialog  
*/

(function () {
	function CountDownDialog (opt) {
		this.currentIssue = '';
		this.nextIssue = '';
		this.count = 3;

		IMDialog.call(this, (opt || {}));
		this.el = this.initDom();
	}

	CountDownDialog.prototype = new IMDialog();

	CountDownDialog.prototype.initDom = function (data) {
		var temp;

		this.sure = new IMButton({
			text: '确定',
			className: 'sure'
		});

		temp = 	'<div class="countdown-dialog">' +
					'<div class="dialog-wrapper">' +
						'<div class="dialog">' +
							'<div class="title">温馨提示</div>' +
							'<div class="image">' +
								'<img src="../img/notice.png">' +
							'</div>' +
							'<div class="content">' +
								'第<span class="current-issue">' +
								this.currentIssue + 
								'</span>' +
								'期已结束，点击确定后切换到' +
								'<span class="next-issue">' +
								this.nextIssue +
								'</span>' +
								'期' +
							'</div>' +

							'<div class="button-zone">' +
								this.sure.getDom() +
							'</div>' +
						'</div>' +
					'</div>' +
				'</div>' +

				'<div class="overlay overlay3"></div>';

		return temp;
	};

	CountDownDialog.prototype.getDom = function () {
		return this.el;
	};

	CountDownDialog.prototype.start = function () {
		var that = this;
		var button = this.zone.find('.sure .text');

        this.countDownInterval = setInterval(function () {
        	if (that.count === 0) {
        		that.hide();
        		clearInterval(that.countDownInterval);
        	}

        	button.text('确定(' + that.count + 's)');
        	that.count--;
        }, 1000);
	};

	CountDownDialog.prototype.stop = function () {
		clearInterval(this.countDownInterval);
	};

	CountDownDialog.prototype.show = function () {		
		this.showOverlay();
		this.zone = $('.countdown-dialog');
		this.zone.find('.current-issue').text(this.currentIssue);
		this.zone.find('.next-issue').text(this.nextIssue);
		this.start();
	};

	CountDownDialog.prototype.hide = function () {
		this.hideOverlay();
		clearInterval(this.countDownInterval);
	};

	CountDownDialog.prototype.bindEvents = function () {
		var button;
		var that = this;

		this.zone = $('.countdown-dialog');

		button = this.zone.find('.sure').click(function () {
			that.hide();
			that.stop();
		});

		this.bindOverlayEvents();
	};

	window.CountDownDialog = CountDownDialog;
}());

/*
 *  大小单双 投注盘 DDSPlate.js  parentPlateId: 9
 */

(function () {
	function DDSPlate (opt) {
		this.opt  = opt;
		this.id   = this.opt.id;
		this.el   = this.initDom(this.data);
	}

	DDSPlate.prototype.initDom = function () {
		var i;
		var value;
		var temp = '';
		var balls = [
			{
				text: '5单0双',
				value: 'O5E0'
			},
			{
				text: '4单1双',
				value: 'O4E1'
			},
			{
				text: '3单2双',
				value: 'O3E2'
			},
			{
				text: '2单3双',
				value: 'O2E3'
			},
			{
				text: '1单4双',
				value: 'O1E4'
			},
			{
				text: '0单5双',
				value: 'O0E5'
			}
		];

		temp += '<div class="dds-plate" id="' + this.id + '">' +
					'<ul>';

		for (i = 0; i < balls.length; i++) {
			temp += 	'<li class="ball-item" data-value="' + balls[i].value + '">' + balls[i].text + '</li>'; 
		}

		temp += 	'</ul>' +
				'</div>';

		return temp;
	};

	DDSPlate.prototype.getDom = function () {
		return this.el;
	};

	DDSPlate.prototype.showPlate = function () {
		this.zone.show();
	};

	DDSPlate.prototype.hide = function () {
		this.zone.find('.selected').removeClass('selected');
		this.zone.hide();
	};
	
	DDSPlate.prototype.bindEvents = function () {
		this.zone = $('#' + this.id);

		this.zone.delegate('.ball-item', 'click', function () {
			BetRuleInstance.checkSelect($(this));
		});
	};

	window.DDSPlate = DDSPlate;
}());


/*
 *   骰子投注盘  DicePlate.js
 */

(function () {
	function DicePlate (opt) {
		this.opt  = opt;
		this.id   = this.opt.id;
		this.data = this.opt.data;

		this.el   = this.initDom(this.data);
	}

	DicePlate.prototype.initDom = function (data) {
		if (this.data.parentPlate.indexOf('13') !== -1) {
			return this.createParentPlate13(data);
		} else {
			return this['createParentPlate' + this.data.parentPlate](data);
		}
	};

	DicePlate.prototype.getDom = function () {
		return this.el;
	};

	DicePlate.prototype.createParentPlate12 = function (data) {
		var i;
		var value;
		var numbers = data.numbers;

		var temp =	'<div class="dice-plate" id="' + this.id + '">';

		temp +=			'<ul class="sum-ul">';
		for (i = numbers.start; i <= 10; i++) {
			value = ((i >= 10)?i: ('0' + i));
			temp += 		'<li class="sum-ul-item" data-value="' + value + '">' + value + '</li>';
		}
		temp +=			'</ul>';

		temp +=			'<ul class="sum-ul">';
		for (i = 11; i <= numbers.end; i++) {
			value = ((i >= 10)?i: ('0' + i));
			temp += 		'<li class="sum-ul-item" data-value="' + value + '">' + value + '</li>';
		}
		temp +=			'</ul>';

		temp +=		'</div>';

		return temp;
	};

	DicePlate.prototype.createParentPlate13 = function (data) {
		var i;
		var j;
		var k;
		var arr = data.data;
		var arr1;
		var diceStr;
		var temp =	'<div class="dice-plate" id="' + this.id + '">';

		for (i = 0; i < arr.length; i++) {
			arr1 = arr[i];
			temp += 	'<ul class="big-ul">';

			for (j = 0; j < arr1.length; j++) {
				diceStr = arr1[j];
				temp +=		'<li class="big-ul-item" data-item="' + diceStr + '">' +
								'<ul class="dice-col-' + j + ' small-ul">';

				for (k = 0; k < diceStr.length; k++) {
					temp += 		'<li class="small-ul-item" data-value="' + diceStr[k] + '">' +
										'<img src="../img/s-dice-' + (diceStr[k]) + '.png" />' +
									'</li>';
				}

				temp +=			'</ul>' +
							'</li>';
			}

			temp += 	'</ul>';
		}

		temp += 	'</div>';

		return temp;
	};

	DicePlate.prototype.createParentPlate14 = function (data) {
		var i;
		var arr  = data.data;
		var temp =	'<div class="dice-plate" id="' + this.id + '">' +
						'<ul class="dtyt-ul">';
		
		for (i = 0; i < arr.length; i++) {
			temp += 		'<li class="dice-item" data-item="' + (i + 1) + '">' +
								'<img src="../img/b-dice-' + (i + 1) + '.png" />' +
							'</li>';
		}

		temp +=			'</ul>' +
					'</div>';

		return temp;
	};

	DicePlate.prototype.showPlate = function () {
		this.zone.show();
	};

	DicePlate.prototype.hide = function () {
		var i;
		var src;
		var images = this.zone.find('img');

		if (parseInt(this.data.parentPlate) === 12) {
			this.zone.find('li').removeClass('selected');
		} else {
			for (i = 0; i < images.length; i++) {
				this.setImageDeactive($(images[i]));
			}
			this.zone.find('li').removeClass('active');
		}

		this.zone.hide();
	};

	DicePlate.prototype.bindEvents = function () {
		var img;
		var smallUl;
		var lis;
		var i;
		var j;
		var that = this;
		
		this.zone = $('#' + this.id);

		if (this.data.parentPlate === '12') {
			this.zone.delegate('.sum-ul-item', 'click', function () {
				BetRuleInstance.checkK3BallSelect($(this));
			});
		} else if (this.data.parentPlate.indexOf('13') !== -1) {
			this.zone.delegate('.big-ul-item', 'click', function () {
				smallUl = $(this).children('.small-ul');
				lis     = smallUl.children('.small-ul-item');

				if (that.data.parentPlate === '13-5' && 
					$(this).parent('.big-ul').index() === 5) {
					that.groupSelect($(this));
				} else {
					for (i = 0; i < lis.length; i++) {
						img = $(lis[i]).children('img');
						that.toggleImageStatus(img);
					}
					BetRuleInstance.checkK3DiceSelect($(this));

					if (that.data.parentPlate === '13-5') 
						that.setGroupClassStatus($(this));
				}
			});
		} else if (this.data.parentPlate === '14') {
			this.zone.delegate('.dice-item', 'click', function () {
				img    = $(this).children('img');
				that.toggleImageStatus(img);
				BetRuleInstance.checkK3DiceSelect($(this));
			});
		}
	};

	DicePlate.prototype.groupSelect = function ($target) {
		var temp;
		var itemValue;
		var $itemTarget;
		var it = BetRuleInstance;
		var colClass = '.dice-col-' + $target.index();
		var cols = this.zone.find(colClass);

		for (var i = 0; i < cols.length - 1; i++) {
			$itemTarget = $(cols[i]).parent();
			itemValue = $itemTarget.attr('data-item');

			if ($target.hasClass('active')) {
				if (it.result[0].indexOf(itemValue) > -1) {
					it.result[0].remove(itemValue);
					$itemTarget.removeClass('active');
				}
			}else{
				if (it.result[0].indexOf(itemValue) == -1){
					it.result[0].push(itemValue);
					$itemTarget.addClass('active');
				}
			}

			temp = $(cols[i]).children('.small-ul-item');
			for (var j = 0; j < temp.length; j++) {
				img = $(temp[j]).children('img');
				if ($target.hasClass('active')) {
					this.setImageDeactive(img);
				} else {
					this.setImageActive(img);
				}
			}
		}
		$target.toggleClass('active');
		K3_BetAlgorithm.getCount(it.result, it.betType);
	}

	DicePlate.prototype.setGroupClassStatus = function($target){
		var colClass = '.dice-col-' + $target.index();
		var cols = this.zone.find(colClass);
		var activeItemCount = 0;
		for (var i = 0; i < cols.length - 1; i++) {
			if ($(cols[i]).parent().hasClass('active')) 
				activeItemCount++;
		}
		if (activeItemCount == 5) 
			$(cols[5]).parent().addClass('active');
		else
			$(cols[5]).parent().removeClass('active');
	}

	DicePlate.prototype.setImageActive = function (img) {
		var pos1;
		var pos2;

		imgSrc  = img.attr('src');
		pos1    = imgSrc.indexOf('-active');
		pos2    = imgSrc.indexOf('.png');

		if (pos1 !== -1) {
			return;
		}

		imgSrc = imgSrc.substring(0, pos2);
		imgSrc += '-active' + '.png';
		img.attr('src', imgSrc);
	};

	DicePlate.prototype.setImageDeactive = function (img) {
		var pos1;
		var pos2;

		imgSrc = img.attr('src');
		pos1    = imgSrc.indexOf('-active');
		pos2    = imgSrc.indexOf('.png');

		if (pos1 === -1) {
			return;
		}

		imgSrc = imgSrc.substring(0, pos1) + '.png';
		img.attr('src', imgSrc);
	};

	DicePlate.prototype.toggleImageStatus = function (img) {
		var pos1;
		var pos2;

		imgSrc = img.attr('src');
		pos1    = imgSrc.indexOf('-active');
		pos2    = imgSrc.indexOf('.png');

		if (pos1 === -1) {
			imgSrc = imgSrc.substring(0, pos2);
			imgSrc += '-active' + '.png';
		} else {
			imgSrc = imgSrc.substring(0, pos1) + '.png';
		}

		img.attr('src', imgSrc);
	};

	window.DicePlate = DicePlate;
}());


/*
 *  大小单双 投注盘 DXDSPlate.js
 */

(function () {
	function DXDSPlate (opt) {
		this.opt  = opt;
		this.id   = this.opt.id;
		this.data = {
			names: ['百位', '十位', '个位']
		};
		this.el   = this.initDom(this.data);
	}

	DXDSPlate.prototype.initDom = function (data) {
		var i;
		var temp;

		temp = 	'<div class="dxds-plate" id="' + this.id + '">';

		for (i = 0; i < data.names.length; i++) {
			temp += '<div class="row" data-index='+ i +'>' +
						'<div class="col-md-1">' +
							'<span class="name">' +
								data.names[i] +
							'</span>' +
						'</div>' +

						'<div class="col-md-4">' +
							'<div class="row">' +
								'<div class="col-md-1 ball-item" data-value="Big">' +
									'<span>' +
										'大' +
									'</span>' +
								'</div>' +
								'<div class="col-md-1 ball-item" data-value="Small">' +
									'<span>' +
										'小' +
									'</span>' +
								'</div>' +
								'<div class="col-md-1 ball-item" data-value="Odd">' +
									'<span>' +
										'单' +
									'</span>' +
								'</div>' +
								'<div class="col-md-1 ball-item" data-value="Even">' +
									'<span>' +
										'双' +
									'</span>' +
								'</div>' +
							'</div>' +
						'</div>' +
					'</div>';
		}

		temp += '</div>';

		return temp;
	};

	DXDSPlate.prototype.getDom = function () {
		return this.el;
	};

	DXDSPlate.prototype.showPlate = function (opt) {
		var i;
		var len;
		var rows;
		var visibleRows;
		var nameSpans;
		var names = opt.plate.names;

		this.zone.show();
		this.methodId = opt.methodId;
		rows          = this.zone.children('.row');
		len           = names.length;

		rows.show();
		this.zone.children('.row:gt(' + (len-1) + ')').hide();
		visibleRows = this.zone.children('.row:visible');
		nameSpans   = this.zone.find('span.name');

		for (i = 0; i < len; i++) {
			$(nameSpans[i]).text(names[i]);
		}
	};

	DXDSPlate.prototype.hide = function () {
		this.zone.find('.selected').removeClass('selected');
		this.zone.hide();
	};
	
	DXDSPlate.prototype.bindEvents = function () {
		this.zone = $('#' + this.id);

		this.zone.delegate('.ball-item', 'click', function () {
            BetRuleInstance.checkSelect($(this));
		});
	};

	window.DXDSPlate = DXDSPlate;
}());


/*
** 继承自IMDialog  
*/

(function () {
	function FilterDialog (opt) {
		IMDialog.call(this, (opt || {}));
		
		this.opt = opt;
		this.id  = opt.id;
		this.el  = this.initDom();
	}

	FilterDialog.prototype = new IMDialog();

	FilterDialog.prototype.initDom = function (data) {
		var temp;

		this.close = new IMButton({
			text: '关闭',
			className: 'close-filter'
		});

		temp = 	'<div class="filter-dialog" id="' + this.id + '">' +
					'<div class="dialog-wrapper">' +
						'<div class="dialog">' +
							'<div class="title">温馨提示</div>' +
							'<div class="content">' +
								'以下号码错误，已进行自动过滤' +
							'</div>' +

							'<div class="textarea">' +
								'<textarea disabled="disabled"></textarea>' +
							'</div>' +

							'<div class="button-zone">' +
								this.close.getDom() +
							'</div>' +
						'</div>' +
					'</div>' +
				'</div>' +

				'<div class="overlay overlay3"></div>';

		return temp;
	};

	FilterDialog.prototype.getDom = function () {
		return this.el;
	};

	FilterDialog.prototype.show = function () {
		this.showOverlay();
	};

	FilterDialog.prototype.hide = function () {
		this.hideOverlay();
	};
	FilterDialog.prototype.bindEvents = function () {
		var button;
		var that = this;

		this.zone = $('#' + this.id);

		this.zone.find('.close-filter').on('click touchstart', function () {
			that.hide();
			if(that.callback)that.callback(true)
		});

		this.bindOverlayEvents();
	};

	window.FilterDialog = FilterDialog;
}());

/*
 *  单式 投注盘 InputPlate.js
 */

(function() {
    function InputPlate(opt) {
        this.opt = opt;
        this.id = this.opt.id;
        this.el = this.initDom();
    }

    InputPlate.prototype.initDom = function() {
        var temp = '';

        this.imporButton = new IMButton({
            text: '导入注单',
            imgSrc: '../img/import.png',
            className: 'import'
        });

        this.clearErrorButton = new IMButton({
            text: '清除错误与重复',
            imgSrc: '../img/clear-error.png',
            className: 'clear-error'
        });

        this.clearTextButton = new IMButton({
            text: '清除文本框',
            imgSrc: '../img/clear-text.png',
            className: 'clear-text'
        });

        temp += '<div class="input-plate" id="' + this.id + '">' +

                    '<textarea class="placeholder" spellcheck="false">' +
                    this.placeholderText +
                    '</textarea>' +

                    '<div class="opes">' +
                        '<input id="load-file" class="load-txt" type="file" accept=".txt">' +
                        this.imporButton.getDom() +
                        this.clearErrorButton.getDom() +
                        this.clearTextButton.getDom() +
                    '</div>' +
                '</div>';

        return temp;
    };

    InputPlate.prototype.getDom = function() {
        return this.el;
    };

    InputPlate.prototype.showPlate = function(opt) {
        this.zone.show();
    };

    InputPlate.prototype.hide = function() {
        this.zone.hide();
    };

    InputPlate.prototype.fileDraggable = function() {
        var dropZone;
        var textarea = this.zone.children('textarea');
        var fileLoader = this.zone.find('#load-file');

        function handleFileSelect(evt) {
            var file;

            evt.stopPropagation();
            evt.preventDefault();

            function upLoadedFunc(evt) {
                fileString = evt.target.result;
                textarea.val(fileString);
                textarea.removeClass('placeholder');
                fileLoader.val('');
                zone.find("textarea").trigger("input");
            };

            file = evt.dataTransfer.files[0];
            reader = new FileReader();
            reader.readAsText(file);
            reader.onload = upLoadedFunc;
            textarea.removeClass('file-hover');
        }

        function handleDragOver(evt) {
            evt.stopPropagation();
            evt.preventDefault();
            evt.dataTransfer.dropEffect = 'copy';
            textarea.addClass('file-hover');
        }

        function handleDragLeave(evt) {
            evt.stopPropagation();
            evt.preventDefault();
            textarea.removeClass('file-hover');
        }

        dropZone = this.zone.children('textarea')[0];
        dropZone.addEventListener('dragover', handleDragOver, false);
        dropZone.addEventListener('drop', handleFileSelect, false);
        dropZone.addEventListener('dragleave', handleDragLeave, false);
    };
    InputPlate.prototype.clearErrorModel = function(fun){
        var errorBetText = '';
        var that = this;
        var isType = '0';
        var it = BetRuleInstance;
        for(var i = 1; i<7;i++){
            if(it['errorBetText_'+i]){
                errorBetText += it['errorBetText_'+i] + ' '
            }
            if( i == 6 && errorBetText.length != 0)errorBetText = errorBetText.substring(0,errorBetText.length -1)
        }
        if(errorBetText || (it.errorBetText_1 != undefined && it.flagError)){
            that.clearError(fun);
            isType = '1';
            return isType;
        }
        return isType;
    }

    InputPlate.prototype.bindEvents = function() {
        var input;
        var file;
        var reader;
        var temp;
        var fileString;
        var upLoadedFunc;
        var that = this;
        var zone = $('#' + this.id);
        var textarea = zone.children('textarea');
        var fileLoader = zone.find('#load-file');

        this.zone = zone;
        var clearError = function(fun){
            if (!that.filterDialog) {
                that.filterDialog = new FilterDialog({id: that.id + '-filter-dialog'});
                $('body').append(that.filterDialog.getDom());
                that.filterDialog.bindEvents();
            }
            $('#'+that.id).children('textarea').val(BetRuleInstance.result[0].join('|'));
            var errorBetText = '';
            for(var i = 1; i<7;i++){
                if(BetRuleInstance['errorBetText_'+i]){
                    errorBetText += BetRuleInstance['errorBetText_'+i] + ' '
                }
                if( i == 6 && errorBetText.length != 0)errorBetText = errorBetText.substring(0,errorBetText.length -1)
            }
            if(errorBetText || errorBetText != ''){
                that.filterDialog.zone.find('textarea').val(errorBetText);
                that.filterDialog.show();
                if(typeof  fun == 'function'){
                    that.filterDialog.callback = fun
                }else{
                    that.filterDialog.callback = undefined
                };
                for(var i = 1; i<7;i++){
                    if(BetRuleInstance['errorBetText_'+i]){
                        BetRuleInstance['errorBetText_'+i] = '';
                    }
                }
                BetRuleInstance.flagError = false;
            }else if(BetRuleInstance.flagError){
                that.filterDialog.zone.find('textarea').val('');
                that.filterDialog.show();
                if(typeof  fun == 'function'){
                    that.filterDialog.callback = fun
                }else{
                    that.filterDialog.callback = undefined
                };
                BetRuleInstance.flagError = false;
            }
        };
        this.clearError = clearError;
        textarea.focus(function() {
            if ($(this).hasClass('placeholder')) {
                $(this).val('');
                $(this).removeClass('placeholder');
            }
        });

        textarea.blur(function() {
            if (!$.trim($(this).val())) {
                $(this).val(that.placeholderText);
                $(this).addClass('placeholder');
            }
        });

        fileLoader.change(function(e) {
            input = e.target;
            file = e.target.files[0];

            if (!file) {
                return;
            }

            upLoadedFunc = function(evt) {
                fileString = evt.target.result;
                textarea.val(fileString);
                textarea.removeClass('placeholder');
                fileLoader.val('');
                zone.find("textarea").trigger("input");
                clearError();
            };

            reader = new FileReader();
            reader.readAsText(file);
            reader.onload = upLoadedFunc;
        });

        zone.find('.clear-text').click(function() {
            if (textarea.val() !== that.placeholderText) {
                textarea.val(that.placeholderText);
                textarea.addClass('placeholder');
            }
        });
        zone.find('.clear-error').click(function() {
            clearError()
        });

        zone.on('input', 'textarea', function() {
            var it = BetRuleInstance;
            var type = it.betType;
            var gameCode = app.currentSocket.gameCode;
            it.result[0] = $(this).val();

            if (gameCode == 'LT') 
                BetAlgorithm.getCount(it.result, type);
            else 
                HL11X5_BetAlgorithm.getCount(it.result,type);
        });

        this.fileDraggable();
    };

    window.InputPlate = InputPlate;
}());

/*
 *  龙虎和 投注盘 LHHPlate.js
 */

(function () {
	function LHHPlate (opt) {
		this.opt  = opt;
		this.id   = this.opt.id;
		this.data = {name: '万:千'};
		this.el   = this.initDom(this.data);
	}

	LHHPlate.prototype.initDom = function (data) {
		var temp;

		temp = 	'<div class="row lhh-plate" id="' + this.id + '">' +
					'<div class="col-md-1">' +
						'<span class="name">' +
							data.name +
						'</span>' +
					'</div>' +

					'<div class="col-md-6">' +
						'<div class="row">' +
							'<div class="col-md-1 ball-item" data-value="L">' +
								'<span>' +
									'龙' +
								'</span>' +
							'</div>' +
							'<div class="col-md-1 ball-item" data-value="H">' +
								'<span>' +
									'虎' +
								'</span>' +
							'</div>' +
							'<div class="col-md-1 ball-item" data-value="T">' +
								'<span>' +
									'和' +
								'</span>' +
							'</div>' +
						'</div>' +
					'</div>' +
				'</div>';

		return temp;
	};

	LHHPlate.prototype.getDom = function () {
		return this.el;
	};

	LHHPlate.prototype.hide = function () {
		this.zone.find('.selected').removeClass('selected');
		this.zone.hide();
	};

	LHHPlate.prototype.showPlate = function (opt) {
		this.zone.show();
		this.methodId = opt.methodId;
		this.changeName(opt.plate.names[0]);
	};

	LHHPlate.prototype.changeName = function (name, value) {
		this.zone.find('.name').text(name);
	};

	LHHPlate.prototype.bindEvents = function () {
		this.zone = $('#' + this.id);

		this.zone.delegate('.ball-item', 'click', function () {
            BetRuleInstance.checkSelect($(this));
		});
	};

	window.LHHPlate = LHHPlate;
}());


(function () {
	function LotteryBall (opt) {
		this.opt = opt;
		this.id  = opt.id;
		this.gameCode = opt.gameCode;
		this.market = opt.market;
		this.el  = 	'<div class="lottery-ball" id="' + this.id + '">' +
						'<div class="description">' +
							'<span>上期(</span>' +
							'<span class="last-issue"></span>' +
							'<span>)开奖号码</span>' +
						'</div>' +

						'<ul>' +
							this.createLiItem() +
						'</ul>' +
					'</div>';
		this.data = ['-', '-', '-', '-', '-'];
		this.lastIssue = '10000';
	}

	LotteryBall.prototype.getDom = function () {
		return this.el;
	};

	LotteryBall.prototype.createLiItem = function(){
		var html = '';
		var ballCount = 0;
		if (this.gameCode == 'K3' || this.market == 'CN3D') 
			ballCount = 3;
		else ballCount = 5;

		for(var i = 0; i < ballCount; i++){
			html += '<li class="three-d-y"><span>--</span></li>';
		}
		return html;
	}

	LotteryBall.prototype.requestLastNumber = function () {
		var i;
		var lis;
		var count = 0;
		var that = this;

		this.zone = $('#' + this.id);
		lis       = this.zone.find('ul li');
		lastIssue = this.zone.find('.last-issue');

		lastIssue.html(this.lastIssue);

		lis.removeAttr('style');
		setTimeout(function(){
			lis.css('transform', 'rotateZ(0deg)');
			lis.css('transition', '1s');
		},100);

		this.interval = setInterval(function () {
			if (count > lis.length - 1) {
				clearInterval(that.interval);
				that.interval = undefined;
				return;
			}

			$(lis[count]).children('span').text(that.data[count]);
			$(lis[count]).css('transform', 'rotateZ(1080deg)');
			count++;

		}, 1000);
	};

	LotteryBall.prototype.bindEvents = function () {
		// this.requestLastNumber();
	};

	window.LotteryBall = LotteryBall;
}());

(function () {
	function ModelZone (opt) {
		this.opt  = opt;
		this.id   = opt.id;
		this.turnoverBonusData=[
			{'text': '', 'value': ''}
		];
		this.el   = this.initDom();

	}

	ModelZone.prototype.initDom = function () {
		var temp;

		this.betNowButton = new IMButton({
			text: '直接投注',
			imgSrc: '../img/select-mark.png',
			className: 'bet-now',
			id: this.id + '-bet-now'
		});

		this.addButton = new IMButton({
			text: '添加',
			imgSrc: '../img/add.png',
			className: 'add-to-table',
			id: this.id + '-add-to-table'
		});

		this.bettingTimes = new IMBettingTimes({id: this.id + 'betting-times'});
		this.moneyModel   = new IMMoneyModel({id: this.id + 'money-model'});
		this.turnoverBonusSelect = new IMSelect({
			id: this.id + 'turnover-bonus-select',
			data: this.turnoverBonusData,
			className: 'turnover-bonus-select',
			type: 1,
			callback: function(OddsGroup) {
			    var oddsGroupData;
				var list = ['TSHM','ZXHZ','LHH','BDW'];
				var specialType = [];
			    var it = BetRuleInstance;
				Global.betSetting.currentOddsGroup[it.gameCode] = OddsGroup;
				if(CalcSpecialOdds[it.gameCode]){
					//获得所有特殊号码
					for(var x = 0; x< list.length ;x++){
						if(CalcSpecialOdds[it.gameCode][list[x]+'_odds']){
							for(var y = 0; y< CalcSpecialOdds[it.gameCode][list[x]+'_odds'].length; y++){
								specialType.push(CalcSpecialOdds[it.gameCode][list[x]+'_odds'][y])
							}
						}
					}
				}
				if(it.gameCode == 'K3' && it.betType == 'N3T'){
					CalcSpecialOdds.K3_getOdds(it.result, it.betType);
				}else if(specialType.indexOf(it.betType) >= 0){
					CalcSpecialOdds.setSpecialOdds(it, it.gameCode);
				}else{
					oddsGroupData = Global.betSetting[it.gameCode][OddsGroup].filter(function(item, index, array) {
							return it.betType == item.betType;
						})[0] || [];
					it.odds = oddsGroupData.odds;
					it.maxCount = oddsGroupData.maxCount;
					it.comm = oddsGroupData.comm;
				}
			    if (it.betCount > 0) {
			        var opt = BetAlgorithm.getModelZoneData(it.betCount, it.multiple);
			        it.setModelZoneData(it.betCount, opt.winMoney, opt.returnMoney, opt.totalMoney, it.multiple);
			    };
			}
		});

		temp = 	'<div class="model-zone" id="' + this.id + '">' +
					'<div class="row">' +
						'<div class="col-md-8 info">' +
							'您选择了<span class="amount highlight">0</span>注，' +
							'最高可赢<span class="win-money highlight">0</span>元，' +
							'返还<span class="return-money highlight">0</span>元，' +
							'共投<span class="total-money highlight">0</span>元' +
						'</div>' +
						'<div class="col-md-4 bet-now-button">' +
							this.betNowButton.getDom() +
						'</div>' +
					'</div>' +
					'<div class="row">' +
						'<div class="col-md-3">' +
							'<span class="bonus-turnover-name">奖金组-返点：</span>' +
							this.turnoverBonusSelect.getDom() +
						'</div>' +
						'<div class="col-md-3 center">' +
							this.bettingTimes.getDom() +
						'</div>' +
						'<div class="col-md-3 center">' +
							this.moneyModel.getDom() +
						'</div>' +
						'<div class="col-md-3 add-to-table-button">' +
							this.addButton.getDom() +
						'</div>' +
					'</div>' +
				'</div>';

		return temp;
	};

	ModelZone.prototype.getDom = function () {
		return this.el;
	};

	ModelZone.prototype.goToBottom = function () {
		$('body').animate({scrollTop: document.body.scrollHeight}, 500);
	};

	ModelZone.prototype.availableButton = function () {
		app.currentModule.chaseNumber.addChaseNumber.enabled();
		app.currentModule.chaseNumber.addChaseNumber2.enabled();
		app.currentModule.chaseNumber.addChaseNumber3.enabled();
		app.currentModule.comfirmBet.confirmBetButton.enabled();
	}

	ModelZone.prototype.clearSelectAndData = function (it) {
		if (app.currentSocket.gameCode == 'K3') 
			K3_PlaceBet.clearDataAndSelect(it);
		else
			LT_PlaceBet.clearDataAndSelect(it);
	}

	ModelZone.prototype.showDot = function(count){
		var timeout;
		var num;
		var dot;
		dot = $('.nav-title .bet-record .dot');
		dot.show();
		num = parseInt(dot.children('span').text());
		num += count;
		dot.children('span').text(num);
		// dot.addClass('dot-zoom');
		// timeout = setTimeout(function () {
		// 	$('.nav-title .bet-record .dot').removeClass('dot-zoom');
		// }, 1000);
	}

	ModelZone.prototype.changeComm = function(data,gameCode){
		var html;
		var oddsGroupIndex;
        var currentOddsGroup = Global.betSetting.currentOddsGroup[gameCode];
        for(var i = 0; i < data.length; i++){
        	if (currentOddsGroup == data[i].oddsGroupName) {
        		oddsGroupIndex = i;
        		break;
        	}
        };
		this.turnoverBonusSelect.opt.data = data;
        html = this.turnoverBonusSelect.generateTypeList();
        this.zone.find('.dropdown-menu').html(html);
        this.zone.find('.buttonName').text(data[oddsGroupIndex].text);
	}

	ModelZone.prototype.setModelZoneData = function(data){
		var $moneyZone = this.zone;
        var $bettingTimesZone = this.bettingTimes.zone;
        var amout = data.amout,
        	winMoney = data.winMoney,
        	returnMoney = data.returnMoney,
        	totalMoney = data.totalMoney,
        	betTimes = data.betTimes;

        $moneyZone.find('.amount').attr('data-value', amout).text(amout);
        $moneyZone.find('.win-money').attr('data-value', winMoney).text(Util.addDotToNumber(winMoney, 4));
        $moneyZone.find('.return-money').attr('data-value', returnMoney).text(Util.addDotToNumber(returnMoney, 4));
        $moneyZone.find('.total-money').attr('data-value', totalMoney).text(Util.addDotToNumber(totalMoney));
		$bettingTimesZone.find('input').val(betTimes);
	}

	ModelZone.prototype.bindEvents = function () {
		var that = this;
		var Confirm = function(){
			if (!that.confirmDialog) {
				that.confirmDialog = new ConfirmDialog({
					okCallback: function () {
						betNowCallback.bind(that)();
					}
				});
				$('body').append(that.confirmDialog.getDom());
				that.confirmDialog.bindEvents();
			}
			that.confirmDialog.showConfirm(app.currentSocket.drawData.drawNumber, BetRuleInstance.betAmount)
		}
		var betNowCallback = function (e) {
			//that.goToBottom();
			var it = BetRuleInstance;
			if(!it.betCount  || it.betAmount > Util.rmoney(app.money)){
				var message;
				if(!it.betCount){
					message = "请选择正确号码";
				}else{
					message = "您的余额已经不足了，请充值";
				}
				app.noticeDialog.show({
					subTitle : '下注失败',
					text: message,
					buttonName: '确定',
					autoHide: true,
					timeout: 3000
				});
				return false;
			}

			if (app.currentSocket.marketStatus){
				if(app.currentSocket.gameCode == 'LT')
					LT_PlaceBet.bet.bind(LT_PlaceBet)(false, it.betType);
				if(app.currentSocket.gameCode == 'HL11x5')
					HL11x5_PlaceBet.bet.bind(HL11x5_PlaceBet)(false, it.betType);
				if(app.currentSocket.gameCode == 'K3')
					K3_PlaceBet.bet.bind(K3_PlaceBet)(false, it.betType);
			}
        	else app.marketCloseNotice(app.currentSocket.market, 3000);
		};

		var addTotableCallback = function (e) {
			if(app.currentModule.playingNav.parentPlate2){
				var isType = app.currentModule.playingNav.parentPlate2.clearErrorModel(function(){
					addTotableCallback(e);
				});
				if(isType == '1') return false;
			}
			var it = BetRuleInstance;
			if(!app.currentSocket.drawData){
				app.marketCloseNotice(app.currentSocket.market,3000);
				return false;
			}
			if(!it.betCount){
				app.noticeDialog.show({
					subTitle : '添加失败',
					text: "请选择正确号码",
					buttonName: '确定',
					autoHide: true,
					timeout: 3000
				});
				return false
			}else{
				that.availableButton();
			}

			BetTrolley.addBetRecord();
			that.clearSelectAndData(it);
		};

		this.zone = $('#' + this.id);
		this.betNowButton.bindEvents(Confirm);
		this.betNowButton.disabled();
		this.addButton.bindEvents(addTotableCallback.bind(this));
		this.addButton.disabled();

		this.turnoverBonusSelect.bindEvents();
		this.bettingTimes.bindEvents();
		this.moneyModel.bindEvents();
	};

	window.ModelZone = ModelZone;
}());


/*
** 继承自IMDialog
*/

(function () {
	function NoticeDialog (opt) {
		IMDialog.call(this, opt || {});
		this.id  = this.opt.id;
		this.opt = opt || {};
		this.el  = this.initDom();
	}

	NoticeDialog.prototype = new IMDialog();
	
	NoticeDialog.prototype.initDom = function (data) {
		var temp;

		this.sure = new IMButton({
			text: '确定',
			className: 'sure',
			id: this.id + '-sure'
		});

		temp = 	'<div class="notice-dialog" id="' + this.id + '">' +
					'<div class="dialog-wrapper">' +
						'<div class="dialog' + (this.opt.subTitle?'': ' no-sub-title') + '">' +
							'<div class="title">温馨提示</div>' +
							'<div class="image">' +
								'<img src="../img/notice.png">' +
							'</div>' +
							'<div class="sub-title">' +
								(this.opt.subTitle || '') +
							'</div>' +
							'<div class="content">' +
								(this.opt.text || '') +
							'</div>' +

							'<div class="button-zone">' +
								this.sure.getDom() +
							'</div>' +
						'</div>' +
					'</div>' +
				'</div>' + 

				'<div class="overlay overlay3"></div>';

		return temp;
	};

	NoticeDialog.prototype.getDom = function () {
		return this.el;
	};

	NoticeDialog.prototype.show = function (data) {
		var that = this;

		if (data.okCallback) {
			this.okCallback = data.okCallback;
		} else {
			this.okCallback = null;
		}

		if (data.subTitle) {
			this.zone.find('.sub-title').show();
			this.zone.find('.sub-title').text(data.subTitle);
		} else {
			this.zone.find('.dialog').addClass('no-sub-title');
		}

		this.zone.find('.content').text(data.text);
		this.zone.find('.button-zone .im-button .text').text(data.buttonName);
		this.showOverlay();

		if (data.autoHide) {
			this.timeout = setTimeout(function () {
				that.hide();
			}, data.timeout || 3000);
		}
	};

	NoticeDialog.prototype.hide = function () {
		if (this.okCallback) this.okCallback();
		clearTimeout(this.timeout);
		this.hideOverlay();
	};

	NoticeDialog.prototype.bindEvents = function () {
		var button;
		var that = this;

		this.zone = $('#' + this.id);
		button = this.zone.find('.sure');

		button.click(function (e) {
			e.preventDefault();
			
			if (typeof that.okCallback === 'function') {
				that.okCallback();
			}
			clearTimeout(this.timeout);
			that.hide();
		});

		this.bindOverlayEvents();
	};

	window.NoticeDialog = NoticeDialog;
}());

/*
 *   号码投注盘  NumberPlate.js   parentPlateId: 1, 3, 7, 8
 *   包含了： 普通投注盘， 趣味投注盘， 区间投注盘
 */

(function () {
	function NumberPlate (opt) {
		this.opt  = opt;
		this.id   = this.opt.id;
		this.data = this.opt.data;
		this.el   = this.initDom(this.data);
		this.operationBall = [
			['0','1','2','3','4','5','6','7','8','9'],
			['5','6','7','8','9'],
			['0','1','2','3','4'],
			['1','3','5','7','9'],
			['0','2','4','6','8']
		];
	}

	NumberPlate.prototype.initDom = function (data) {
		if (data.parentPlate === 1) {
			return this.createParentPlate1(data);
		} else if (data.parentPlate === 3){
			return this.createParentPlate3(data);
		} else if (data.parentPlate === 7){
			return this.createParentPlate7(data);
		} else if (data.parentPlate === 8) {
			return this.createParentPlate8(data);
		}
	};

	NumberPlate.prototype.getDom = function () {
		return this.el;
	};

	NumberPlate.prototype.createParentPlate1 = function (data) {
		var i;
		var j;
		var temp = '';

		temp += '<div class="row number-plate" id="' + this.id + '">' +

					'<div class="col-md-7 betting-number">';

		for (i = 0; i < data.numbers.length; i++) {
			temp +=		'<div class="row" data-index="' + i + '">' +
							'<div class="col-md-2 name-item">' +
								'<span>' +
									((data.names && data.names.length >0 )?data.names[i]: '' ) + ':' +
								'</span>' +
							'</div>' +

							'<div class="col-md-10">' +
								'<div class="row">';

			for (j = data.numbers[i].start; j <= data.numbers[i].end; j++) {
				temp += 			'<div class="col-md-1 ball-item" data-value="' + j + '">' + 
										'<span>' +
											j +
										'</span>' +
									'</div>';
			}
				
			temp +=				'</div>' +
							'</div>' +
						'</div>';
			}

			temp +=	'</div>';


			temp +=	'<div class="col-md-5 betting-operation">';
			
		for (i = 0; i < data.numbers.length; i++) {
			temp +=		'<div class="row" data-index="' + i + '">';

			for (j = 0; j < data.opes.length; j++) {
				if (j === 5) {
					temp += 	'<div class="col-md-2 operation-item" data-value="' + j + '">' + 
									'<span>' +
										data.opes[j] +
									'</span>' +
								'</div>';
				} else {
						temp += '<div class="col-md-2 operation-item" data-value="' + j + '">' +
									'<span>' +
										data.opes[j] +
									'</span>' +
								'</div>';
				}
			}

			temp += 	'</div>';
		}

		temp +=		'</div>' +
				'</div>';

		return temp;
	};

	NumberPlate.prototype.createParentPlate3 = function (data) {
		var i;
		var j;
		var temp = '';

		temp += '<div class="row number-plate" id="' + this.id + '">' +

					'<div class="col-md-11 betting-number">';

		for (i = 0; i < data.numbers.length; i++) {
			temp +=			'<div class="col-md-11 center-ball">' +
								'<div class="row">';

			for (j = data.numbers[i].start; j <= data.numbers[i].end; j++) {
				temp +=		 		'<div class="col-md-1 ball-item" data-value="' + j + '">' + 
										'<span>' +
											j +
										'</span>' + 
									'</div>';
			}
				
			temp +=				'</div>' +
							'</div>' +
						'</div>';
		}

		temp +=		'</div>' +
				'</div>';

		return temp;
	};

	NumberPlate.prototype.createParentPlate7 = function (data) {
		var i;
		var j;
		var temp = '';
		var names = data.names;

		temp += '<div class="row number-plate" id="' + this.id + '">' +

					'<div class="col-md-7 betting-number">';

		for (i = 0; i < names.length; i++) {
			temp +=		'<div class="row' + ((i < 2)? ' funrow': ' nofunrow') + '" data-index="' + i + '">' +
							'<div class="col-md-2 name-item">' +
								'<span>' +
									names[i] + ':' +
								'</span>' +
							'</div>' +

							'<div class="col-md-10">' +
								'<div class="row">';

			if (i < 2) {
				temp += 			'<div class="col-md-3 fun-ball-item" data-value="Small">' +
										'<span>' +
											'小(0-4)' +
										'</span>' +
									'</div>' +

									'<div class="col-md-3 fun-ball-item" data-value="Big">' +
										'<span>' +
											'大(5-9)' +
										'</span>' +
									'</div>';
			} else {
				for (j = data.numbers[i].start; j <= data.numbers[i].end; j++) {
					temp += 		'<div class="col-md-1 ball-item" data-value="' + j + '">' + 
										'<span>' +
											j +
										'</span>' + 
									'</div>';
				}
			}

			temp +=				'</div>' +
							'</div>' +
						'</div>';
		}

		temp +=		'</div>';
		temp +=		'<div class="col-md-5 betting-operation">';
			
		for (i = 0; i < data.numbers.length; i++) {
			temp +=		'<div class="row' + ((i < 2)? ' funrow': ' nofunrow') + '" data-index="' + i + '">';

			if (i >= 2) {
				for (j = 0; j < data.opes.length; j++) {
					if (j === 5) {
						temp += '<div class="col-md-2 operation-item" data-value="' + j + '">' + 
									'<span>' +
										data.opes[j] +
									'</span>' +
								'</div>';
					} else {
						temp += '<div class="col-md-2 operation-item" data-value="' + j + '">' +
									'<span>' +
										data.opes[j] +
									'</span>' +
								'</div>';
					}
				}
			} else {
				temp += 		'<div class="col-md-2 operation-item">' + 
									'<span class="blank"></span>' +
								'</div>';
			}

			temp += 	'</div>';
		}

		temp +=		'</div>' +
				'</div>';

		return temp;
	};

	NumberPlate.prototype.createParentPlate8 = function (data) {
		var i;
		var j;
		var temp = '';
		var zoneNames = ['一区(0,1)', '二区(2,3)', '三区(4,5)', '四区(6,7)', '五区(8,9)'];
		var dataIndexValue =['0','1','2','3','4','5'];
		var dataValue = ['R1','R2','R3','R4','R5'];
		temp += '<div class="row number-plate" id="' + this.id + '">' +

					'<div class="col-md-7 betting-number">';

		for (i = 0; i < data.numbers.length; i++) {
			temp +=		'<div class="row' + ((i < 2)?' zonerow': ' nozonerow') + '" data-index="' + dataIndexValue[i] + '">' +
							'<div class="col-md-2 name-item">' +
								'<span>' +
									data.names[i] + ':' +
								'</span>' +
							'</div>' +

							'<div class="col-md-10">' +
								'<div class="row">';

			if (i < 2) {
				for (j = 0; j < zoneNames.length; j++) {
					temp += 		'<div class="col-md-2 zone-ball-item" data-value="' + dataValue[j] + '">' +
										'<span>' +
											zoneNames[j] +
										'</span>' +
									'</div>';
				}
			} else {
				for (j = data.numbers[i].start; j <= data.numbers[i].end; j++) {
					temp += 		'<div class="col-md-1 ball-item" data-value="' + j + '">' +
										'<span>' +
											j +
										'</span>' + 
									'</div>';
				}
			}

			temp +=				'</div>' +
							'</div>' +
						'</div>';
		}

		temp +=		'</div>';
		temp +=		'<div class="col-md-5 betting-operation">';
			
		for (i = 0; i < data.numbers.length; i++) {
			temp +=		'<div class="row' + ((i < 2)?' zonerow': ' nozonerow') + '" data-index="' + dataIndexValue[i] + '">';

			if (i >= 2) {
				for (j = 0; j < data.opes.length; j++) {
					if (j === 5) {
						temp += '<div class="col-md-2 operation-item" data-value="' + dataIndexValue[j] + '">' +
									'<span>' +
										data.opes[j] +
									'</span>' +
								'</div>';
					} else {
						temp += '<div class="col-md-2 operation-item" data-value="' + dataIndexValue[j] + '">' +
									'<span>' +
										data.opes[j] +
									'</span>' +
								'</div>';
					}
				}
			} else {
				temp += 		'<div class="col-md-2 operation-item">' + 
									'<span class="blank"></span>' +
								'</div>';
			}

			temp += 	'</div>';
		}

		temp +=		'</div>' +
				'</div>';

		return temp;
	};

	NumberPlate.prototype.showOperations = function () {
		this.zone.find('.betting-operation').show();
	};

	NumberPlate.prototype.hideOperations = function () {
		this.zone.find('.betting-operation').hide();
	};

	NumberPlate.prototype.showAllRows = function (opt) {
		this.zone.find('.betting-number .row').show();
		this.zone.find('.betting-operation .row').show();
	};

	NumberPlate.prototype.showPlate = function (opt) {
		var i;
		var start;
		var end;
		var visibleRows;
		var funrows;
		var nofunrows;
		var zonerows;
		var nozonerows;
		var len;
		var len2;
		var names = opt.plate.names;
		var namespans;

		this.methodid = opt.methodid;

		this.zone.show();

		if (this.data.parentPlate === 1) {
			len = names.length;

			this.showAllRows();
			this.zone.children('.betting-number').children('.row:gt(' + (len-1) + ')').hide();
			this.zone.children('.betting-operation').children('.row:gt(' + (len-1) + ')').hide();
			// visibleRows = this.zone.children('.betting-number').children('.row:visible');
			visibleRows = this.zone.children('.betting-number').children('.row:lt(' + len + ')');

			for (i = 0; i < len; i++) {
				if (names[i]) {
					$(visibleRows[i]).find('.name-item span').text(names[i] + ':');
				} else {
					$(visibleRows[i]).find('.name-item span').text('');
				}
			}
		} else if (this.data.parentPlate === 3) {
			start = opt.plate.numbers[0].start;
			end   = opt.plate.numbers[0].end;
			this.zone.find('.betting-number .ball-item').show();
			this.zone.find('.betting-number .ball-item:lt(' + start + ')').hide();
			this.zone.find('.betting-number .ball-item:gt(' + end + ')').hide();
		} else if (this.data.parentPlate === 7) {
			len  = Object.keys(opt.plate.funrow).length;
			len2 = names.length - len;

			this.zone.find('.betting-number .funrow').show();
			this.zone.find('.betting-number .nofunrow').show();
			this.zone.find('.betting-operation .funrow').show();
			this.zone.find('.betting-operation .nofunrow').show();

			this.zone.find('.betting-number .funrow:gt(' + (len-1) + ')').hide();
			this.zone.find('.betting-number .nofunrow:gt(' + (len2-1) + ')').hide();
			this.zone.find('.betting-operation .funrow:gt(' + (len-1) + ')').hide();
			this.zone.find('.betting-operation .nofunrow:gt(' + (len2-1) + ')').hide();

			visibleRows = this.zone.children('.betting-number').children('.row:visible');
			namespans = visibleRows.find('.name-item span');

			for (i = 0; i < names.length; i++) {
				$(namespans[i]).text(names[i]);
			}
		} else if (this.data.parentPlate === 8) {
			len  = Object.keys(opt.plate.zonerow).length;
			len2 = names.length - len;

			this.zone.find('.betting-number .zonerow').show();
			this.zone.find('.betting-number .nozonerow').show();
			this.zone.find('.betting-operation .zonerow').show();
			this.zone.find('.betting-operation .nozonerow').show();

			this.zone.find('.betting-number .zonerow:gt(' + (len-1) + ')').hide();
			this.zone.find('.betting-number .nozonerow:gt(' + (len2-1) + ')').hide();
			this.zone.find('.betting-operation .zonerow:gt(' + (len-1) + ')').hide();
			this.zone.find('.betting-operation .nozonerow:gt(' + (len2-1) + ')').hide();

			visibleRows = this.zone.children('.betting-number').children('.row:visible');
			namespans = visibleRows.find('.name-item span');

			for (i = 0; i < names.length; i++) {
				$(namespans[i]).text(names[i]);
			}
		}
	};

	NumberPlate.prototype.hide = function () {
		$('.number-plate-unit-group').hide();
		this.zone.find('.selected').removeClass('selected');
		this.zone.hide();
	};

	NumberPlate.prototype.bindEvents = function () {
		var opeval;
		var rowIndex;
		var numberRows;
		var targetRow;
		var that = this;
		var zone = $('#' + this.id);

		numberRows = zone.find('.betting-number').children('.row');

		this.zone = zone;
		this.rows = numberRows;

        zone.delegate('.ball-item', 'click', function() {
            BetRuleInstance.checkSelect($(this));
			if (app.currentModule.playingNav.currentPlate.zone.find('.betting-operation').length >0)
				that.setOperationBall($(this));
        });

		zone.delegate('.fun-ball-item', 'click', function () {
            BetRuleInstance.checkSelect($(this));
		});

		zone.delegate('.zone-ball-item', 'click', function () {
            BetRuleInstance.checkSelect($(this));
		});

		zone.delegate('.operation-item', 'click', function () {
			opeval    = parseInt($(this).attr('data-value'));
			rowIndex  = parseInt($(this).parent('.row').attr('data-index'));
			targetRow = $(numberRows[rowIndex]);

			if (that['randomInterval'+ targetRow.index()]) {
				clearInterval(that['randomInterval'+ targetRow.index()]);
                that['randomInterval'+ targetRow.index()] = undefined;				
				targetRow.find('.ball-item').removeClass('run-item');
			}

			if (targetRow.hasClass('zonerow') || targetRow.hasClass('funrow')) {
				return;
			}

			if ($(this).hasClass('selected') && opeval!== 5) {
				$(this).removeClass('selected');
				targetRow.find('.ball-item').removeClass('selected');
				that.setBetResult(targetRow, opeval);
				return;
			}
			
			$(this).siblings('.operation-item').removeClass('selected');

			if (opeval!== 5) {
				$(this).addClass('selected');
			}

			that.processOperations(targetRow, opeval);
			that.setBetResult(targetRow, opeval);
		});
	};

	NumberPlate.prototype.randomAnimation = function (targetRow) {
		var index;
		var that = this;
		var i = 0;

		if(that['randomInterval'+ targetRow.index()]!= undefined) return false;
		targetRow.find('.ball-item').removeClass('selected');
		index = Math.floor(Math.random() * 10);
		that.index = [index] || [];
		targetRow.find('.ball-item').removeClass('run-item');
		if(index.length == 0) return false;
		this['randomInterval'+ targetRow.index()] = setInterval(function () {
			if (i < index) {
				targetRow.find('.ball-item').removeClass('run-item');
				targetRow.find('.ball-item:eq(' + i + ')').addClass('run-item');
			} else {
				targetRow.find('.ball-item').removeClass('run-item');
				targetRow.find('.ball-item:eq(' + i + ')').addClass('selected');
				clearInterval(that['randomInterval'+ targetRow.index()]);
				that['randomInterval'+ targetRow.index()] = undefined;
				return;
			}

			i++;
		}, (i+1)*40);
	};

	NumberPlate.prototype.processOperations = function (targetRow, opeval) {
		var i;
		var mid = 5;

		switch (opeval) {
			case 0:
				targetRow.find('.ball-item').addClass('selected');
				break;
			case 1:
				targetRow.find('.ball-item').removeClass('selected');
				targetRow.find('.ball-item:gt(4)').addClass('selected');
				break;
			case 2:
				targetRow.find('.ball-item').removeClass('selected');
				targetRow.find('.ball-item:lt(5)').addClass('selected');
				break;
			case 3:
				targetRow.find('.ball-item').removeClass('selected');
				targetRow.find('.ball-item:odd').addClass('selected');
				break;
			case 4:
				targetRow.find('.ball-item').removeClass('selected');
				targetRow.find('.ball-item:even').addClass('selected');
				break;
			case 5:
				//if (this.randomInterval) {
				//	return;
				//}
				this.mathNum(targetRow);
				//this.randomAnimation(targetRow);
				break;
			default:
				break;
		}
	};

	NumberPlate.prototype.setBetResult = function (targetRow, opeval) {
		var it = BetRuleInstance;
		var that = this;
		var resultIndex = it.fixIndex(targetRow);
		var arr1 = it.result[resultIndex];
		var arr2 = this.operationBall[opeval];
		if (opeval != 5) {
			if (arr1.eqaul(arr2)) 
				it.result[resultIndex] = [];
			else 
				it.result[resultIndex] = arr2.slice(0);
			BetAlgorithm.getCount(it.result, it.betType);				
		}else {
			//随机动画
			it.result[resultIndex] = [];
			for(var i = 0; i < that.index.length;i++){
				it.result[resultIndex].push(that.index[i].toString())
			}
			BetAlgorithm.getCount(it.result, it.betType);
		}
	}

	NumberPlate.prototype.setOperationBall = function (target) {
		var it = BetRuleInstance;
		var rowTarget = target.parent('.row').parent().parent();
		var rowIndex  = parseInt(rowTarget.attr('data-index'));
		var resultIndex = it.fixIndex(rowTarget);
		for(var i = 0; i < 5; i++) {
			var operationTarget = this.zone
					.children('.betting-operation')
					.children('.row:eq(' + rowIndex + ')')
					.children('.operation-item:eq(' + i + ')')
			if (it.result[resultIndex].eqaul(this.operationBall[i])) {
				operationTarget.addClass('selected');
			}else {
				operationTarget.removeClass('selected');
			}
		}

	}

	NumberPlate.prototype.mathNum = function (targetRow) {
		var that = this;
		this.mathFun(targetRow);
		var betType = BetRuleInstance.betType;
		var numList = [
			['G5X120'],//机选5个
			['G4X24','A4G4X24'],//机选4个
			['G3X6F','G3X6M','G3X6L','A3N5','A3G3X6'],//机选3个
			['G4X6','G3X3F','G3X3M','G3X3L','G2L','G2F','A2L3','A2F3','A2M3','A2L4','A2G2','A4G4X6','A2N5','A3G3X3'],//机选2个
			['G5X60'],// 1/3
			['G5X30'],//2/1
			['G4X12','A4G4X12','G5X20'],//1/2
			['G5X10','G5X5','G4X4','A4G4X4']//1/1
		];
		var numIndexType;
		for(var i = 0; i < numList.length; i++){
			if(numList[i].indexOf(betType) >= 0){
				numIndexType = i;
				break;
			}
		}
		switch (numIndexType) {
			case 0:
				that.mathManyRandom(5);
				break;
			case 1:
			    that.mathManyRandom(4);
				break;
			case 2:
				that.mathManyRandom(3);
				break;
			case 3:
				that.mathManyRandom(2);
				break;
			case 4:
				that.mathRandom('1_3');
				break;
			case 5:
				that.mathRandom('2_1');
				break;
			case 6:
				that.mathRandom('1_2');
				break;
			case 7:
				that.mathRandom('1_1');
				break;
			default:
				this.randomAnimation(targetRow);
				break;
		}
	};
	NumberPlate.prototype.mathFun = function(targetRow){
		var that = this;
		this.mathManyRandom = function(typeNum){
			var index = [];
			var manyNum = 0;
			for(var i = 0; ;i++){
				var num = Math.floor(Math.random() * 10);
				if(manyNum == typeNum)break;
				if(index.indexOf(num) < 0){
					index.push(num);
					manyNum++;
				}
			}
			that.addIndexAnimation(index.sort());
		};
		this.mathRandom = function(type){
			var ruleIndex = BetRuleInstance.fixIndex(targetRow);
			var ruleType = type.split('_')[ruleIndex];
			var dataList = BetRuleInstance.result;
			var index = [];
			var manyNum = 0;
			var a;
			if(ruleIndex == 0){
				a = 1;
			}else{
				a = 0;
			}
			for(var i = 0; ;i++){

				var num = Math.floor(Math.random() * 10);
				if(manyNum == ruleType)break;
				if(i > 100){
					if(dataList[ruleIndex].join(' ').indexOf(num) >=0)continue;
					index.push(num);
					manyNum++
				}
				if(dataList[a].join(' ').indexOf(num) >=0)continue;
				if(index.indexOf(num) < 0){
					index.push(num);
					manyNum++;
				}
			}
			that.addIndexAnimation(index.sort());
		};
		this.addIndexAnimation = function (index) {
			var i = 0;
			if(that['randomInterval'+ targetRow.index()] != undefined) return false;
			that.index = index || [];
			targetRow.find('.ball-item').removeClass('selected');
			if(index.length == 0) return false;
			that['randomInterval'+ targetRow.index()] = setInterval(function () {
				if (i < 10) {
					targetRow.find('.ball-item').removeClass('run-item');
					targetRow.find('.ball-item:eq(' + i + ')').addClass('run-item');
				} else {
					targetRow.find('.ball-item').removeClass('run-item');
						for(var x = 0; x<index.length;x++){
							targetRow.find('.ball-item:eq(' + index[x] + ')').addClass('selected');
						}
						clearInterval(that['randomInterval'+ targetRow.index()]);
						that['randomInterval'+ targetRow.index()] = undefined
				}
				i++;
			}, (i+1)*40);
		}
	};
	window.NumberPlate = NumberPlate;
}());


/*
 *  投注盘 NumberPlate2.js  parentPlateId: 10, 11
 */

(function() {
    function NumberPlate2(opt) {
        this.opt = opt;
        this.id = this.opt.id;
        this.parentPlate = this.opt.data.parentPlate;
        this.data = this.opt.data;
        this.el = this.initDom(this.data);
        this.operationBall = [
            ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11'],
            ['06', '07', '08', '09', '10', '11'],
            ['01', '02', '03', '04', '05'],
            ['01', '03', '05', '07', '09', '11'],
            ['02', '04', '06', '08', '10']
        ];
        this.czw_operationBall = [
            ['03', '04', '05', '06', '07', '08', '09'],
            ['06', '07', '08', '09'],
            ['03', '04', '05'],
            ['03', '05', '07', '09'],
            ['04', '06', '08']
        ];
    }

    NumberPlate2.prototype.initDom = function(data) {
        var i;
        var j;
        var k;
        var value;
        var temp = '';

        temp += '<div class="number-plate2" id="' + this.id + '">';

        for (i = 0; i < data.names.length; i++) {
            temp += '<div class="clearfix plate2-row" data-index="' + i + '">' +
                '<div class="name">' + data.names[i] + '</div>' +

                '<ul class="plate2-balls">';
            for (j = data.numbers[i].start; j <= data.numbers[i].end; j++) {
                // if (this.parentPlate === 10) {
                // 	value = ((j > 9)?j: ('0' + j));
                // } else {
                // 	value = j;
                // }
                value = ((j > 9) ? j : ('0' + j));
                if (this.parentPlate === 11)
                    temp += '<li class="ball-item" data-value="' + value + '"><span>' + j + '</span></li>';
                else
                    temp += '<li class="ball-item" data-value="' + value + '"><span>' + value + '</span></li>';
            }
            temp += '</ul>';

            temp += '<ul class="plate2-operations">';
            for (k = 0; k < data.opes.length; k++) {
                temp += '<li class="operation-item" data-value="' + k + '"><span>' + data.opes[k] + '</span></li>';
            }
            temp += '</ul>';
            temp += '</div>';
        }

        temp += '</div>';

        return temp;
    };

    NumberPlate2.prototype.showPlate = function(data) {
        var i;
        var len;
        var rows;
        var names;
        var operations;

        names = data.plate.names;
        len = names.length;
        operations = data.plate.operations;
        this.methodid = data.methodid;

        this.zone.show();

        if (this.parentPlate === 10) {
            this.zone.find('.plate2-row').show();
            this.zone.find('.plate2-balls').show();
            this.zone.find('.plate2-operations').show();
            this.zone.find('.plate2-row:gt(' + (len - 1) + ')').hide();
            rows = this.zone.find('.plate2-row:lt(' + len + ')');

            for (i = 0; i < len; i++) {
                $(rows[i]).children('.name').text(names[i]);
            }

            if (operations) {
                for (i = 0; i < len; i++) {
                    if (!operations[i]) {
                        $(rows[i]).children('.plate2-operations').hide();
                    }
                };
            }
        }
    };

    NumberPlate2.prototype.getDom = function() {
        return this.el;
    };

    NumberPlate2.prototype.hide = function() {
        this.zone.find('.selected').removeClass('selected');
        this.zone.hide();
    };
    NumberPlate2.prototype.mathNum = function(targetRow) {
        var that = this;
        this.mathFun(targetRow);
        var betType = BetRuleInstance.betType;
        var numList = [
            ['A8'], //机选8个
            ['A7'], //机选7个
            ['A6'], //机选6个
            ['A5'], //机选5个
            ['A4'], //机选4个
            ['G3H', 'A3'], //机选3个
            ['G2H', 'A2'], //机选2个
            ['N3PH'], //1/1/1
            ['N2PH'], //1/1
            ['G2BH', 'A2B'], //胆码+拖码 = 2
            ['G3BH', 'A3B'], //胆码+拖码 = 3
            ['A4B'], //胆码+拖码 = 4
            ['A5B'], //胆码+拖码 = 5
            ['A6B'], //胆码+拖码 = 6
            ['A7B'], //胆码+拖码 = 7
            ['A8B'], //胆码+拖码 = 8
            ['FMN'], //3-9猜中位
        ];
        var numIndexType;
        for (var i = 0; i < numList.length; i++) {
            if (numList[i].indexOf(betType) >= 0) {
                numIndexType = i;
                break;
            }
        }
        switch (numIndexType) {
            case 0:
                that.mathManyRandom(8);
                break;
            case 1:
                that.mathManyRandom(7);
                break;
            case 2:
                that.mathManyRandom(6);
                break;
            case 3:
                that.mathManyRandom(5);
                break;
            case 4:
                that.mathManyRandom(4);
                break;
            case 5:
                that.mathManyRandom(3);
                break;
            case 6:
                that.mathManyRandom(2);
                break;
            case 7:
                that.mathRandom('1_1_1');
                break;
            case 8:
                that.mathRandom('1_1');
                break;
            case 9:
                that.mathDT('1_1', targetRow);
                break;
            case 10:
                that.mathDT('1_2', targetRow);
                break;
            case 11:
                that.mathDT('1_3', targetRow);
                break;
            case 12:
                that.mathDT('1_4', targetRow);
                break;
            case 13:
                that.mathDT('1_5', targetRow);
                break;
            case 14:
                that.mathDT('1_6', targetRow);
                break;
            case 15:
                that.mathDT('1_7', targetRow);
                break;
            case 16:
                that.randomAnimation(targetRow, '3_9');
                break;
            default:
                that.randomAnimation(targetRow);
                break;
        }
    };
    NumberPlate2.prototype.mathFun = function(targetRow) {
        var that = this;
        this.mathManyRandom = function(typeNum) {
            var index = [];
            var manyNum = 0;
            for (var i = 0;; i++) {
                var num = Math.ceil(Math.random() * 11);
                if (manyNum == typeNum) break;
                if (index.indexOf(num) < 0) {
                    index.push(num);
                    manyNum++;
                }
            }
            that.addIndexAnimation(index.sort());
        };
        this.mathRandom = function(type) {
            var ruleIndex = parseInt(targetRow.parent().attr('data-index'));
            var ruleType = type.split('_')[ruleIndex];
            var dataList = BetRuleInstance.result;
            var index = [];
            var manyNum = 0;
            for (var i = 0;; i++) {

                var num = Math.ceil(Math.random() * 11);

                if (num < 10) {
                    num = '0' + num;
                }
                if (manyNum == ruleType) break;
                if (i > 100) {
                    if (dataList[ruleIndex].join(' ').indexOf(num) >= 0) continue;
                    index.push(num);
                    manyNum++
                }
                var isRrepeatNum = false;
                for (var x = 0; x < type.split('_').length; x++) {
                    if (dataList[x].join(' ').indexOf(num) >= 0 && ruleIndex != x) {
                        isRrepeatNum = true;
                        break;
                    }
                }
                if (isRrepeatNum) {
                    continue;
                }
                if (index.indexOf(num) < 0) {
                    index.push(parseInt(num));
                    manyNum++;
                }
            }
            that.addIndexAnimation(index.sort());
        };
        this.addIndexAnimation = function(index) {
            var i = 0;
            var intervalIndex = targetRow.parent('.plate2-row').index();
            that.index = index || [];
            if (that['randomInterval'+ intervalIndex] != undefined) return false;
            targetRow.find('.ball-item').removeClass('selected');
            if (index.length == 0) return false;
            that['randomInterval'+ intervalIndex] = setInterval(function() {
                if (i < 10) {
                    targetRow.find('.ball-item').removeClass('run-item');
                    targetRow.find('.ball-item:eq(' + i + ')').addClass('run-item');
                } else {
                    targetRow.find('.ball-item').removeClass('run-item');
                    for (var x = 0; x < index.length; x++) {
                        targetRow.find('.ball-item:eq(' + (index[x] - 1) + ')').addClass('selected');
                    }
                    clearInterval(that['randomInterval'+ intervalIndex]);
                    that['randomInterval'+ intervalIndex] = undefined
                }
                i++;
            }, (i + 1) * 40);
        }
    };
    //胆拖
    NumberPlate2.prototype.mathDT = function(type, targetRow) {
        var that = this;
        that.addIndexAnimationDT = function(index, zone,fun) {
            var i = 0;
            var intervalIndex = targetRow.parent('.plate2-row').index();
            that.index = index || [];
            if (that['randomInterval'+ intervalIndex] != undefined) return false;
            zone.find('.ball-item').removeClass('selected');
            if (index.length == 0) return false;
            that['randomInterval'+ intervalIndex] = setInterval(function() {
                if (i < 10) {
                    zone.find('.ball-item').removeClass('run-item');
                    zone.find('.ball-item:eq(' + i + ')').addClass('run-item');
                } else {
                    zone.find('.ball-item').removeClass('run-item');
                    for (var x = 0; x < index.length; x++) {
                        zone.find('.ball-item:eq(' + (index[x] - 1) + ')').addClass('selected');
                    }
                    clearInterval(that['randomInterval'+ intervalIndex]);
                    that['randomInterval'+ intervalIndex] = undefined;
                    if(fun){
                        fun(true);
                    }
                }
                i++;
            }, (i + 1) * 40);
        };

        var a = type.split('_');
        var aIndex = a[0];
        var bIndex = parseInt(a[1]);
        var num1 = [Math.ceil(Math.random() * 11)];
        var num2 = [];
        var number = 0;
        for (var i = 0;; i++) {
            var c = Math.ceil(Math.random() * 11);
            if (num1[0] != c && num2.indexOf(c) < 0) {
                num2.push(c);
                number++;
            }
            if (number == bIndex) break
        }
        var target = targetRow.parent().prev().find('.plate2-balls');
        that.addIndexAnimationDT(num1.sort(), target,function(){
            that.addIndexAnimationDT(num2.sort(), targetRow);
            that.setBetResult(1, 5)
        });
        that.setBetResult(0, 5)

    };
    NumberPlate2.prototype.bindEvents = function() {
        var opeval;
        var rowIndex;
        // var numberRows;
        var targetRow;
        var intervalIndex;
        var that = this;

        this.zone = $('#' + this.id);

        this.zone.delegate('.ball-item', 'click', function() {
        	var target = $(this);
            BetRuleInstance.checkSelect(target);
            that.setOperationBall(target);
            that.setDtOperationBall(target, BetRuleInstance);
        });

        this.zone.delegate('.operation-item', 'click', function() {
            opeval = parseInt($(this).attr('data-value'));
            rowIndex = parseInt($(this).parents('.plate2-row').attr('data-index'));
            targetRow = $(this).parent('.plate2-operations').prev('.plate2-balls');
            intervalIndex = targetRow.parent('.plate2-row').index();

            if (that['randomInterval'+ intervalIndex]) {
                clearInterval(that['randomInterval'+ intervalIndex]);
                that['randomInterval'+ intervalIndex] = undefined;
                targetRow.find('.ball-item').removeClass('run-item');
                targetRow.parent().prev().find('.ball-item').removeClass('run-item');
            }

            if ($(this).hasClass('selected') && opeval !== 5) {
                $(this).removeClass('selected');
                targetRow.find('.ball-item').removeClass('selected');
                that.setBetResult(rowIndex, opeval);
                return;
            }

            $(this).siblings('.operation-item').removeClass('selected');

            if (opeval !== 5) {
                $(this).addClass('selected');
            }

            that.processOperations(targetRow, opeval);
            that.setBetResult(rowIndex, opeval, targetRow);
        });
    };

    NumberPlate2.prototype.randomAnimation = function(targetRow, type) {
        var index;
        var intervalIndex = targetRow.parent('.plate2-row').index();
        var that = this;
        var i = 0;

        if (that['randomInterval'+ intervalIndex] != undefined) return false;
        targetRow.find('.ball-item').removeClass('selected');
        if (type) {
            var min = type.split('_')[0];
            var max = type.split('_')[1];
            index = Math.floor(Math.random() * (max - min + 1) + min);
        } else {
            index = Math.ceil(Math.random() * 11);
        }

        that.index = [index] || [];
        targetRow.find('.ball-item').removeClass('run-item');
        if (index.length == 0) return false;
        this['randomInterval'+ intervalIndex] = setInterval(function() {
            if (i < (index - 1)) {
                targetRow.find('.ball-item').removeClass('run-item');
                targetRow.find('.ball-item:eq(' + i + ')').addClass('run-item');
            } else {
                targetRow.find('.ball-item').removeClass('run-item');
                targetRow.find('.ball-item:eq(' + i + ')').addClass('selected');
                clearInterval(that['randomInterval'+ intervalIndex]);
                that['randomInterval'+ intervalIndex] = undefined;
                return;
            }

            i++;
        }, (i + 1) * 40);
    };

    NumberPlate2.prototype.processOperations = function(targetRow, opeval) {
        var i;
        var low;
        var high;

        if (this.parentPlate === 10) {
            low = 4;
            high = 5;
        } else {
            low = 2;
            high = 3;
        }

        switch (opeval) {
            case 0:
                targetRow.find('.ball-item').addClass('selected');
                break;
            case 1:
                targetRow.find('.ball-item').removeClass('selected');
                targetRow.find('.ball-item:gt(' + low + ')').addClass('selected');
                break;
            case 2:
                targetRow.find('.ball-item').removeClass('selected');
                targetRow.find('.ball-item:lt(' + high + ')').addClass('selected');
                break;
            case 3:
                targetRow.find('.ball-item').removeClass('selected');
                targetRow.find('.ball-item:even').addClass('selected');
                break;
            case 4:
                targetRow.find('.ball-item').removeClass('selected');
                targetRow.find('.ball-item:odd').addClass('selected');
                break;
            case 5:
                //if (this.randomInterval) {
                //	return;
                //}
                this.mathNum(targetRow);
                //this.randomAnimation(targetRow);
                break;
            default:
                break;
        }
    };

    NumberPlate2.prototype.setBetResult = function(rowIndex, opeval, targetRow) {
        var it = BetRuleInstance;
        var that = this;
        var resultIndex = rowIndex;
        var arr1 = it.result[resultIndex];
        var arr2 = [];
        if (this.parentPlate == 10)
            arr2 = this.operationBall[opeval];
        else
            arr2 = this.czw_operationBall[opeval];

        if (opeval != 5) {
            if (arr1.eqaul(arr2))
                it.result[resultIndex] = [];
            else
                it.result[resultIndex] = arr2.slice(0);

            this.dtRowDataSetting(it.betType, it.result, arr2, targetRow)
            HL11X5_BetAlgorithm.getCount(it.result, it.betType);
        } else {
            //随机动画
            it.result[resultIndex] = [];
            for (var i = 0; i < that.index.length; i++) {
                var numIndex = parseInt(that.index[i].toString());
                if (numIndex < 10) {
                    numIndex = '0' + numIndex;
                } else {
                    numIndex = numIndex.toString();
                }
                it.result[resultIndex].push(numIndex)
            }
            HL11X5_BetAlgorithm.getCount(it.result, it.betType);
        }
    }

    NumberPlate2.prototype.setOperationBall = function(target) {
        var it = BetRuleInstance;
        var rowTarget = target.parents('.plate2-row');
        var rowIndex = parseInt(rowTarget.attr('data-index'));
        var operationRow = this.zone.children('.plate2-row:eq(' + rowIndex + ')').children('.plate2-operations');
        if (operationRow.is(':hidden')) return;
        for (var i = 0; i < 5; i++) {
            var operationTarget = operationRow.children('.operation-item:eq(' + i + ')');

            if (it.result[rowIndex].eqaul(this.operationBall[i]) && this.parentPlate == 10) {
                operationTarget.addClass('selected');
            } else if (it.result[rowIndex].eqaul(this.czw_operationBall[i]) && this.parentPlate == 11) {
                operationTarget.addClass('selected');
            } else {
                operationTarget.removeClass('selected');
            }
        }
    }

    NumberPlate2.prototype.dtRowDataSetting = function(betType, result, arr2, targetRow) {
        var $currentRow;
        var temResult;
        if (!this.isDtPlayMethod(betType) || !targetRow) return;

        $currentRow = targetRow.parent().prev().children('.plate2-balls');
        temResult = result[0].slice(0);
        for (var i = 0; i < temResult.length; i++) {
            var itemValue = temResult[i];
            if ($.inArray(itemValue, arr2) > -1) {
                result[0].remove(itemValue);
                $currentRow.find('[data-value=' + itemValue + ']').removeClass('selected');
            }
        }
    }

    NumberPlate2.prototype.setDtOperationBall = function(target, it) {
        var $operationRow;
        var $operationTarget;
        if (!this.isDtPlayMethod(it.betType)) return;

        $operationRow = target.closest('.plate2-row').next().children('.plate2-operations');
        for (var i = 0; i < 5; i++) {
            $operationTarget = $operationRow.children('.operation-item:eq(' + i + ')');
            if (it.result[1].eqaul(this.operationBall[i])) 
            	$operationTarget.addClass('selected');
            else
            	$operationTarget.removeClass('selected');
        }
    }

    //是否是胆拖玩法
    NumberPlate2.prototype.isDtPlayMethod = function(betType) {
        var dtBetType = [
            'G3BH',
            'G2BH',
            'A2B',
            'A3B',
            'A4B',
            'A5B',
            'A6B',
            'A7B',
            'A8B'
        ];

        if ($.inArray(betType, dtBetType) == -1) return false;
        return true;
    }


    window.NumberPlate2 = NumberPlate2;
}());

(function () {
	function PlayingDescriptionTip (opt) {
		this.opt = opt;
		this.id = opt.id;
		this.el = this.init();
		this.data = {};
	}

	PlayingDescriptionTip.prototype.init = function () {
		var temp = 	'<div class="playing-description-tip" id="' + this.id + '">' +
						'<div class="method-name"></div>' +
						'<div class="select-method"></div>' +
						'<div class="winning-rule"></div>' +
					'</div>' + 
					'<div class="arrow"></div>';

		return temp;
	};

	PlayingDescriptionTip.prototype.getDom = function () {
		return this.el;
	};

	PlayingDescriptionTip.prototype.show = function () {
		if (!this.zone) {
			this.zone = $('#' + this.id);
		}
		
		this.zone.children('.method-name').text(this.data.methodName);
		this.zone.children('.select-method').text(this.data.selectMethod);
		this.zone.children('.winning-rule').text(this.data.winningRule);

		this.zone.css('display', 'inline-block');
	};

	PlayingDescriptionTip.prototype.hide = function () {
		this.zone.hide();
	};

	PlayingDescriptionTip.prototype.isOpen = function (opt) {
		if (!this.zone) {
			this.zone = $('#' + this.id);
			return false;
		}

		if (this.zone.css('display') === 'none') {
			return false;
		}

		return true;
	};

	window.PlayingDescriptionTip = PlayingDescriptionTip;
}());


/*
 *  玩法导航区  PlayingNav.js
 */

(function () {
	function PlayingNav (opt) {
		var parentPlateId;

		this.opt   		= opt;
		this.id    		= opt.id;
		this.gameCode 	= opt.gameCode;
		this.market   = opt.market;
		this.data  		= opt.playingNavData;
		this.dict1 		= {};  //玩法群所对应的玩法组
		this.dict2 		= {};  //玩法所对应的投注盘

		this.plateDict       = this.formatPlateDict(this.data);
		this.currentMethodId = this.data[0].playingGroups[0].playingMethods[0].methodId;
		parentPlateId        = this.plateDict[this.currentMethodId].plate.parentPlate;
		this.currentPlate    = this.createParentPlate(parentPlateId, this.currentMethodId);
		this.unitGroup       = new UnitGroup({id: this.id + 'unit-group'});
		this.createPlayingGroups();

		this.playingDescriptionTip = new PlayingDescriptionTip({id: 'description-tip-' + this.id});
		this.setPlayingIntro(this.currentMethodId);

		this.el = 	'<div class="container-fluid playing-nav" id="' + this.id + '">' +

						this.createPlayingFamilys() +

						'<div class="row top-gap">' +
							'<div class="col-md-9 playing-groups">' +
								this.dict1[Object.keys(this.dict1)[0]] +
							'</div>' +
							'<div class="col-md-2 playing-description">' +
								'<span class="tip"></span>' +
								'<span class="text">选号规则</span>' +
								this.playingDescriptionTip.getDom() +
							'</div>' +
						'</div>' +

						'<hr class="divider">' +

						'<div class="unit-group-wrapper">' +
							this.unitGroup.getDom() +
						'</div>' +

						this.currentPlate.getDom() +

					'</div>';
	}

	PlayingNav.prototype.getDom = function () {
		return this.el;
	};

	PlayingNav.prototype.createPlayingFamilys = function () {
		var i;
		var temp = 	'<div class="row playing-family">';

		for (i = 0; i < this.data.length; i++) {
			if (i === 0) {
				temp += '<div class="col-md-1 family-item selected" data-value="' + this.data[i].familyName + '"><span>' + this.data[i].familyName + '</span></div>';
			} else {
				temp += '<div class="col-md-1 family-item" data-value="' + this.data[i].familyName + '"><span>' + this.data[i].familyName + '</span></div>';
			}
		}

		temp +=     	'<div class="stick"></div>';
		temp +=		'</div>';

		return temp;
	};

	PlayingNav.prototype.createPlayingGroups = function () {
		var i;
		var j;
		var k;
		var temp;
		var groupName;
		var colRatio;
		var playingGroups;
		var playingMethods;

		for (i = 0; i < this.data.length; i++) {
			temp = '';
			colRatio = this.data[i].colRatio;
			playingGroups = this.data[i].playingGroups;

			for (j = 0; j < playingGroups.length; j++) {
				playingMethods = playingGroups[j].playingMethods;

				temp += '<div class="row playing-group">' +
							'<div class="col-md-2 group-name">' +
								playingGroups[j].groupName + ': ' +
							'</div>' +

							'<div class="col-md-10">' +
								'<div class="row">';

				for (k = 0; k < playingMethods.length; k++) {
					temp += 		'<div class="col-md-' + colRatio + ' method-item' + (j===0&&k===0 ? ' selected': '') + '" data-value="' + playingMethods[k].methodId + '">' +
										'<span class="method-item-name">' +
											playingMethods[k].methodName +
										'</span>' +
									'</div>';
				}

				temp += 		'</div>' +
							'</div>' +
						'</div>';
			}

			this.dict1[this.data[i].familyName] = temp;
		}

		return temp;
	};

	PlayingNav.prototype.formatPlateDict = function () {
		var i;
		var j;
		var k;
		var temp1;
		var temp2;
		var temp3;
		var dict = {};

		for (i = 0; i < this.data.length; i++) {
			temp1 = this.data[i].playingGroups;

			for (j = 0; j < temp1.length; j++) {
				temp2 = temp1[j].playingMethods;

				for (k = 0; k < temp2.length; k++) {
					dict[temp2[k].methodId] = {
						methodId: temp2[k].methodId,
						plate: temp2[k].plate
					};
				}
			}
		}

		return dict;
	};

	PlayingNav.prototype.bindEvents = function () {
		var familyName;
		var playingGroups;
		var playingFamily;
		var method;
		var index;
		var gap = 8.33;
		var stick;
		var parentPlateId;
		var selectedItem;
		var that = this;


		this.zone     = $('#' + this.id);
		playingFamily = this.zone.find('.playing-family');
		playingGroups = this.zone.find('.playing-groups');
		stick         = playingFamily.children('.stick');

		playingFamily.delegate('.family-item', 'click', function () {
			if ($(this).hasClass('selected')) {
				return;
			}

			familyName = $(this).attr('data-value');
			playingFamily.children('.family-item').removeClass('selected');
			$(this).addClass('selected');
			index = $(this).index();
			stick.css('left', index*gap + '%');

			playingGroups.html(that.dict1[familyName]);
			selectedItem = playingGroups.children('.playing-group:eq(0)').find('.method-item:eq(0)');
			method = selectedItem.attr('data-value');
			that.showPlate(method);

			app.resetTreeHeight();
		});

		playingGroups.delegate('.method-item', 'click', function () {
			if ($(this).hasClass('selected')) {
				return;
			}

			method = $(this).attr('data-value');
			playingGroups.find('.method-item').removeClass('selected');
			$(this).addClass('selected');
			that.showPlate(method);

			app.resetTreeHeight();
		});

		if (Util.isMobile.any()) {
			this.zone.find('.playing-description').bind('touchstart', function () {
				if (!that.playingDescriptionTip.isOpen()) {
					that.playingDescriptionTip.show();
				} else {
					that.playingDescriptionTip.hide();
				}
			});
		} else {
			this.zone.find('.playing-description').mouseover(function () {
				that.playingDescriptionTip.show();
			}).mouseout(function () {
				that.playingDescriptionTip.hide();
			});
		}

		this.currentPlate.bindEvents();
		this.unitGroup.bindEvents();

		if (this.plateDict[this.currentMethodId].plate.unitGroup) {
			this.showUnitGroup();
		} else {
			this.hideUnitGroup();
		}
	};

	PlayingNav.prototype.showPlate = function (method) {
		var parentPlateId;

		parentPlateId = this.plateDict[method].plate.parentPlate;
		this.setPlayingIntro(method);
		if (!this['parentPlate' + parentPlateId]) {
			this.currentPlate = this.createParentPlate(parentPlateId);
			this.zone.append(this.currentPlate.getDom());
			this.currentPlate.bindEvents();
		} else {
			this.currentPlate = this['parentPlate' + parentPlateId];
		}

		this.hideAllPlate();
		this.currentPlate.showPlate(this.plateDict[method]);

		//下注盘切换 重新定义规则
		window.BetRuleInstance = new BetRule(method, this.gameCode);

		if (this.plateDict[method].plate.unitGroup) {
			this.showUnitGroup();
		} else {
			this.hideUnitGroup();
		}
	};

	PlayingNav.prototype.setPlayingIntro = function(method){
		var that = this;
		var title;
		var selectMethod;
		var winningRule;
		var filterData = RULE_CONFIG.filter(function(item,index){
			return item.betType == method && item.gameCode == that.gameCode ;
		})[0] || {};
		title = filterData.title;
		selectMethod = filterData.selectMethod;
		winningRule = filterData.winningRule;
		if(this.market == 'CN3D'&& method == 'N2PF'){
			title = "二星-直选-前二直选";
			selectMethod = selectMethod.replace(/千/g, '十').replace(/万/g, '百');
			winningRule = winningRule.replace(/千/g, '十').replace(/万/g, '百')
		}
		if(this.market == 'CN3D'&& method == 'N1'){
			selectMethod = selectMethod.replace('万位，', '').replace('千位，', '');
			winningRule = winningRule.replace(/万位、/g, '').replace(/千位、/g, '')
		}
		if(this.market == 'CN3D'&& (method == 'BSOEF2' || method == 'G2F' || method == 'N2SF')){
			selectMethod = selectMethod.replace(/千/g, '十').replace(/万/g, '百');
			winningRule = winningRule.replace(/千/g, '十').replace(/万/g, '百')
		}
		if(this.market == 'CN3D' && title.indexOf('后三') >= 0){
			title = title.replace(/后三/g, '三星')
		}
		this.playingDescriptionTip.data = {
			methodName:title,
			selectMethod:selectMethod,
			winningRule:winningRule
		};
	};

	PlayingNav.prototype.showUnitGroup = function () {
		var it = BetRuleInstance;
		this.unitGroup.clearChecks();
		var checkArray = ["A2S","A2T","A2G2","A2G2S","A2G2T","A3S","A3T","A3G3X3","A3G3X3S","A3G3X6","A3G3X6S","A3G3MX","A3G3T","A4S","A4G4X24","A4G4X12","A4G4X6","A4G4X4"]
		if($.inArray(it.betType,checkArray) > -1 && this.gameCode == 'LT'){
			var checkLength = it.betType.substr(1,1);
			for(var i=0 ;i<checkLength;i++){
				it.checkUnitGroup(this.unitGroup.zone.children("div").eq(4-i).children("div"));
			}
			this.zone.find('.unit-group-wrapper').show();
		}

	};

	PlayingNav.prototype.hideUnitGroup = function () {
		this.unitGroup.clearChecks();
		this.zone.find('.unit-group-wrapper').hide();
	};

	PlayingNav.prototype.hideAllPlate = function () {
		var i;

		for (i = 1; i <= 11; i++) {
			if (this['parentPlate' + i]) {
				this['parentPlate' + i].hide();
			}
		}
	};

	PlayingNav.prototype.createParentPlate = function (parentPlateId, betType) {
		var data;
		var id = this.id + '-parentPlate' + parentPlateId;

		if (parentPlateId === 1) {
			data = {
				parentPlate: 1,
				names: ['万位', '千位','百位', '十位', '个位'],
				opes: ['全', '大', '小', '奇', '偶', '机选'],
				numbers: [
					{start:0 , end: 9},
					{start:0 , end: 9},
					{start:0 , end: 9},
					{start:0 , end: 9},
					{start:0 , end: 9}
				]
			};
			if (betType == 'N3PL') {  //福彩3D第一次创建表盘
				data = {
					parentPlate: 1,
					names: ['百位', '十位', '个位'],
					opes: ['全', '大', '小', '奇', '偶', '机选'],
					numbers: [
						{start:0 , end: 9},
						{start:0 , end: 9},
						{start:0 , end: 9}
					]
				};
			}

			this.parentPlate1 = new NumberPlate({id: id, data: data});
			return this.parentPlate1;
		} else if (parentPlateId === 2) {
			this.parentPlate2 = new InputPlate({id: id});
			return this.parentPlate2;
		} else if (parentPlateId === 3) {
			data = {
				parentPlate: 3,
				names: [''],
				numbers: [{start:0 , end: 27}]
			};

			this.parentPlate3 = new NumberPlate({id: id, data: data});
			return this.parentPlate3;
		} else if (parentPlateId === 4) {
			this.parentPlate4 = new BDSPlate({id: id});
			return this.parentPlate4;
		} else if (parentPlateId === 5) {
			this.parentPlate5 = new DXDSPlate({id: id});
			return this.parentPlate5;
		} else if (parentPlateId === 6) {
			this.parentPlate6 = new LHHPlate({id: id});
			return this.parentPlate6;
		} else if (parentPlateId === 7) {
			data = {
				parentPlate: 7,
				names: ['万位', '千位', '百位', '十位', '个位'],
				opes: ['全', '大', '小', '奇', '偶', '机选'],
				numbers: [
					{start:0 , end: 9},
					{start:0 , end: 9},
					{start:0 , end: 9},
					{start:0 , end: 9},
					{start:0 , end: 9}
				]
			};

			this.parentPlate7 = new NumberPlate({id: id, data: data});
			return this.parentPlate7;
		} else if (parentPlateId === 8) {
			data = {
				parentPlate: 8,
				names: ['万位', '千位','百位', '十位', '个位'],
				opes: ['全', '大', '小', '奇', '偶', '机选'],
				numbers: [
					{start:0 , end: 9},
					{start:0 , end: 9},
					{start:0 , end: 9},
					{start:0 , end: 9},
					{start:0 , end: 9}
				]
			};

			this.parentPlate8 = new NumberPlate({id: id, data: data});
			return this.parentPlate8;
		} else if (parentPlateId === 9) {
			this.parentPlate9 = new DDSPlate({id: id});
			return this.parentPlate9;
		} else if (parentPlateId === 10) {
			data = {
				parentPlate: 10,
				names: ['一位', '二位','三位'],
				opes: ['全', '大', '小', '奇', '偶', '机选'],
				numbers: [
					{start:1 , end: 11},
					{start:1 , end: 11},
					{start:1 , end: 11}
				]
			};

			this.parentPlate10 = new NumberPlate2({id: id, data: data});
			return this.parentPlate10;
		} else if (parentPlateId === 11) {
			data = {
				parentPlate: 11,
				names: ['猜中位'],
				opes: ['全', '大', '小', '奇', '偶', '机选'],
				numbers: [
					{start: 3 , end: 9}
				]
			};

			this.parentPlate11 = new NumberPlate2({id: id, data: data});
			return this.parentPlate11;
		}
	};

	window.PlayingNav = PlayingNav;
}());

/*
 *  玩法导航区  PlayingNavK3.js
 */

(function () {
	function PlayingNavK3 (opt) {
		this.opt   			 = opt;
		this.id   			 = opt.id;
		this.gameCode 		 = opt.gameCode;
		this.data            = opt.playingNavData;
		this.currentMethodId = this.data[0].methodId;
		this.plateDict       = this.formatPlateDict(this.data);
		parentPlateId        = this.plateDict[this.currentMethodId].plate.parentPlate;
		this.currentPlate    = this.createParentPlate(parentPlateId);
		this.playingDescriptionTip = new PlayingDescriptionTip({id: 'description-tip-' + this.id});
		this.setPlayingIntro(this.currentMethodId);
		this.initDom();
	}

	PlayingNavK3.prototype.setPlayingIntro = function(currentMethodId){
		var that = this;
		var filterData = RULE_CONFIG.filter(function(item,index){
				return item.betType == currentMethodId && that.gameCode == item.gameCode;
			})[0] || {};
		this.playingDescriptionTip.data = {
			methodName:filterData.title,
			selectMethod:filterData.selectMethod,
			winningRule:filterData.winningRule
		};
	};
	PlayingNavK3.prototype.initDom = function () {
		this.el = 	'<div class="container-fluid playing-nav" id="' + this.id + '">' +
						this.createPlayingFamilys() +
						this.currentPlate.getDom() +
					'</div>';
	};

	PlayingNavK3.prototype.getDom = function () {
		return this.el;
	};

	PlayingNavK3.prototype.formatPlateDict = function () {
		var i;
		var dict = {};

		for (i = 0; i < this.data.length; i++) {
			dict[this.data[i].methodId] = {
				methodId: this.data[i].methodId,
				plate: this.data[i].plate
			};
		}

		return dict;
	};

	PlayingNavK3.prototype.createPlayingFamilys = function () {
		var i;
		var temp;

		temp     = 	'<div class="row playing-family">';

		for (i = 0; i < this.data.length; i++) {
			if (i === 0) {
				temp += '<div class="col-md-1 family-item selected" data-value="' + this.data[i].methodId + '"><span>' + this.data[i].familyName + '</span></div>';
			} else {
				temp += '<div class="col-md-1 family-item" data-value="' + this.data[i].methodId + '"><span>' + this.data[i].familyName + '</span></div>';
			}
		}

		temp += 		'<div class="col-md-5 playing-description-k3">' +
							'<div class="tip">' +
								'<img src="../img/tip.png" height=15 width=15></img>' +
								'<span class="text">选号规则</span>' +
							'</div>' +
							
							this.playingDescriptionTip.getDom() +
						'</div>' +

						'<div class="stick"></div>';

		temp +=		'</div>';

		return temp;
	};

	PlayingNavK3.prototype.createParentPlate = function (parentPlateId) {
		var id   = this.id + '-parentPlate' + parentPlateId;
		var data = this.plateDict[this.currentMethodId].plate;

		this['parentPlate' + parentPlateId] = new DicePlate({id: id, data: data});
		return this['parentPlate' + parentPlateId];
	};

	PlayingNavK3.prototype.hideAllPlate = function () {
		var i;
		var arr = ['12', '13-1', '13-2', '13-3', '13-4', '13-5', '14'];

		for (i = 0; i < arr.length; i++) {
			if (this['parentPlate' + arr[i]]) {
				this['parentPlate' + arr[i]].hide();
			}
		}
	};

	PlayingNavK3.prototype.showPlate = function (method) {
		var parentPlateId;

		parentPlateId = this.plateDict[method].plate.parentPlate;

		if (!this['parentPlate' + parentPlateId]) {
			this.currentPlate = this.createParentPlate(parentPlateId);
			this.zone.append(this.currentPlate.getDom());
			this.currentPlate.bindEvents();
		} else {
			this.currentPlate = this['parentPlate' + parentPlateId];
		}

		this.hideAllPlate();
		this.currentPlate.showPlate(this.plateDict[method]);

		//下注盘切换 重新定义规则
		window.BetRuleInstance = new BetRule(method, this.gameCode);
	};

	PlayingNavK3.prototype.bindEvents = function () {
		var familyName;
		var playingFamily;
		var method;
		var index;
		var gap = 8.33;
		var stick;
		var parentPlateId;
		var selectedItem;
		var pickRule;
		var that = this;

		this.zone     = $('#' + this.id);
		playingFamily = this.zone.find('.playing-family');
		pickRule      = this.zone.find('.playing-description-k3 .tip');
		stick         = playingFamily.children('.stick');

		playingFamily.delegate('.family-item', 'click', function () {
			if ($(this).hasClass('selected')) {
				return;
			}

			playingFamily.children('.family-item').removeClass('selected');
			$(this).addClass('selected');
			index = $(this).index();
			stick.css('left', index*gap + '%');

			method =  $(this).attr('data-value');
			that.currentMethodId = method;
			that.setPlayingIntro(that.currentMethodId);
			that.showPlate(method);
		});

		if (Util.isMobile.any()) {
			this.zone.find('.playing-description-k3').bind('touchstart', function () {
				if (!that.playingDescriptionTip.isOpen()) {
					that.playingDescriptionTip.show();
				} else {
					that.playingDescriptionTip.hide();
				}
			});
		} else {
			this.zone.find('.playing-description-k3').mouseover(function () {
				that.playingDescriptionTip.show();
			}).mouseout(function () {
				that.playingDescriptionTip.hide();
			});
		}

		this.currentPlate.bindEvents();
	};

	window.PlayingNavK3 = PlayingNavK3;
}());

(function() {
    var ITEM_WIDTH = 44;
    var TIMELINE_ITEM_COUNT = 7;
    var TIMELINE_RATIO = 0.8;
    var ARROW_WIDTH = ITEM_WIDTH;
    var TIMELINE_ITEM_WIDTH = ITEM_WIDTH;

    function Timeline(opt) {
        this.opt = opt;
        this.issueWidth = (this.opt.gameCode == 'HL11x5') ? 80 : 44;
        this.id = opt.id;
        this.data = [];


        this.evalWidth();
        this.el = '<div class="timeline-wrapper" id="' + this.id + '">' +
            '<div class="timeline">' +
            this.createEvents() +
            this.createNavigator() +
            '</div>' +
            this.trendItem() +
            '</div>';
    }
    Timeline.prototype.evalWidth = function() {
        this.itemGap = 54.3;
        this.eventsWidth = this.data.length * TIMELINE_ITEM_WIDTH + (this.data.length + 1) * this.itemGap;
        this.transformWidth = TIMELINE_ITEM_COUNT * (TIMELINE_ITEM_WIDTH + this.itemGap);
        this.eventsWidth = this.eventsWidth * 2; //加长是为了在某些情况下不出现断线的情况。
    }
    Timeline.prototype.getDom = function() {
        return this.el;
    };

    Timeline.prototype.createEvents = function(gameCode, market) {
        var i;
        var temp = '';
        var left = this.itemGap;

        temp += '<div class="events-wrapper">' +
            '<div class="events" style="width: ' + 5000 + 'px; transform: translateX(0px)">' +
            '<ol>';

        for (i = 0; i < this.data.length; i++) {
            temp += this.createItem(this.data[i], left);
            left += (this.itemGap + TIMELINE_ITEM_WIDTH);
        }

        temp += '</ol>' +
            '</div>' +
            '</div>';

        return temp;
    };

    Timeline.prototype.createItem = function(data, left) {
        var temp = '<li>' +
            '<a class="number" href="#0" style="left: ' + left + 'px;">' +
            data.result.replace("[", "").replace("]", "") +
            '</a>' +

            '<a class="issue" href="#0" style="left: ' + left + 'px;width: ' + this.issueWidth + 'px;">' +
            data.number + '期' +
            '</a>' +
            '</li>';
        return temp;
    };

    Timeline.prototype.createNavigator = function(data) {
        var temp = '<ul class="cd-timeline-navigation">' +
            '<li><a href="#0" class="prev inactive">Prev</a></li>' +
            '<li><a href="#0" class="next">Next</a></li>' +
            '</ul>';
        return temp;
    };

    Timeline.prototype.trendItem = function() {
        var temp = '<div class="trend">' +
            '<div class="line"></div>' +
            '<div class="text">' +
            '<div class="up">开奖</div>' +
            '<div class="down">走势</div>' +
            '</div>' +
            '</div>';

        return temp;
    };

    Timeline.prototype.reInitTimeline = function() {
        var screenWidth = parseInt($(window).width());
        this.count = 0;

        if (screenWidth > 1730) {
            this.transformWidth = 7 * (TIMELINE_ITEM_WIDTH + this.itemGap);
            this.maxCount = 7;
        } else if (screenWidth > 1550 && screenWidth <= 1730) {
            this.transformWidth = 6 * (TIMELINE_ITEM_WIDTH + this.itemGap);
            this.maxCount = 6;
        } else if (screenWidth > 1440 && screenWidth <= 1550) {
            this.transformWidth = 5 * (TIMELINE_ITEM_WIDTH + this.itemGap);
            this.maxCount = 5;
        } else if (screenWidth > 1230 && screenWidth <= 1440) {
            this.transformWidth = 4 * (TIMELINE_ITEM_WIDTH + this.itemGap);
            this.maxCount = 4;
        } else if (screenWidth <= 1230) {
            this.transformWidth = 3 * (TIMELINE_ITEM_WIDTH + this.itemGap);
            this.maxCount = 3;
        }
        this.allNum = {
            transformWidth: this.transformWidth,
            maxCount: this.maxCount,
            count: this.count
        };
        return this.allNum;
    };

    Timeline.prototype.dataFormatter = function(gameCode, market) {
        var length = Global.marketList.filter(function(item, index, array) {
            return item.gameCode == gameCode && item.market == market;
        })[0].drawNumLength;
        length = 0 - length;
        this.data.forEach(function(item, index) {
            item.drawNumber = item.number;
            item.number = item.number.slice(length);
        });
    };

    Timeline.prototype.bindEvents = function() {
        var eventsEle;
        var eventsPos;
        var timelineWidth;
        var that = this;

        this.zone = $('#' + this.id);
        eventsEle = this.zone.find('.events');
        eventsPos = this.getTransformX(eventsEle.css('transform')) || 0;

        var allNum = this.reInitTimeline();

        $(window).resize(function() {
            allNum = that.reInitTimeline();
            eventsPos = that.getTransformX(eventsEle.css('transform')) || 0;
        });
        this.zone.find('a.next').click(function() {
            if (Math.abs(allNum.count) != Math.ceil(that.data.length / allNum.maxCount) - 1) {
                allNum.count += 1;
                eventsPos -= allNum.transformWidth;

                that.zone.find('.events').css('transform', 'translateX(' + eventsPos + 'px)');
            }
        });

        this.zone.find('a.prev').click(function() {
            if (Math.abs(allNum.count) != Math.ceil(that.data.length / allNum.maxCount) && allNum.count != 0) {
                allNum.count -= 1;
                eventsPos += allNum.transformWidth;

                that.zone.find('.events').css('transform', 'translateX(' + eventsPos + 'px)');
            }
        });

        this.zone.find('.trend .text').click(function() {
            var gameCode = app.currentSocket.gameCode;
            var marketCode = app.currentSocket.market;
            window.open ('trendView.html?gameCode=' + gameCode + '&marketCode=' + marketCode);
        });
    };

    Timeline.prototype.getTransformX = function(matrix) {
        var pos1 = matrix.indexOf('(');
        var pos2 = matrix.indexOf(')');
        var temp = matrix.substring(pos1 + 1, pos2);
        var arr = temp.split(',')

        return parseFloat(arr[4]);
    };

    window.Timeline = Timeline;
}());

(function() {
    function Tree(opt) {
        this.data = this.getTreeItemData();
        this.fnQueue = [];
        this.initDom();
        this.drawList();
    }

    Tree.prototype.initDom = function() {
        var i;
        var obj;

        this.el = '';
        this.items = [];

        for (i = 0; i < this.data.length; i++) {
            obj = new TreeItem(this.data[i]);
            this.items.push(obj);
        }

        for (i = 0; i < this.items.length; i++) {
            this.el += this.items[i].getDom();
        }

        this.el += '<div class="arrow"></div>';
    };

    Tree.prototype.getDom = function() {
        return this.el;
    };

    Tree.prototype.setSelectTreeItem = function(li) {
        var i;

        var serialNumber = parseInt(li.attr('serial-number'));
        var that = this;

        var callback = function(beginTimeSerials, closeTimeSerials, endTimeSerials, flag, gameCode, market) {
            that.zone.find('li').removeClass('active');
            li.addClass('active');
            li.addClass('open');
            li.find('.cancel').removeClass('invisible');
            li.find('.time').removeClass('invisible');
            that.setArrowPosition(li);

            for (i = 0; i < that.items.length; i++) {
                that.items[i].deactiveProgress();
            }

            if (flag) { //市场从未激活状态到激活状态
                var serialIndex = that.data.filter(function(item, index) {
                    return item.market == market && item.type == gameCode;
                })[0].serialNumber;
                var activeIndex = that.data.filter(function(item,index){
                    return item.market == app.currentSocket.market && item.type == app.currentSocket.gameCode;
                })[0].serialNumber;
                that.items[activeIndex].activeProgress();
                that.items[serialIndex].startProgress(beginTimeSerials, closeTimeSerials, endTimeSerials, gameCode, market);
            } else { //激活状态下 市场切换
                that.items[serialNumber].activeProgress();
            }
        };

        this.callback = callback;

        this.getCountdownTime(callback, serialNumber);
    };

    Tree.prototype.getCountdownTime = function(callback, serialNumber) {
        callback();
    };

    Tree.prototype.setArrowPosition = function(li) {
        var top = parseInt(li.find('.cancel').offset().top);
        var arrow = this.zone.find('.arrow');

        arrow.css('top', top - 37 + 'px');
    };

    Tree.prototype.bindEvents = function() {
        var i;
        var serialNumber;
        var pageIndex;
        var type;
        var lis;
        var that = this;

        this.zone = $('.bet .tree');
        lis = this.zone.find('li');

        this.zone.delegate('.info, .pre-draw-number', 'click', function(e) {
            var li;
            var timeout;
            var market;

            li = $(this).parent('li');

            if (li.hasClass('can-not-click-info') || li.hasClass('can-not-click-cancel')) {
                return;
            }

            li.addClass('can-not-click-info');

            that.setSelectTreeItem(li);

            timeout = setTimeout(function() {
                li.removeClass('can-not-click-info');
                clearTimeout(timeout);
            }, 1000);

            type = li.attr('lotter-type');
            pageIndex = li.attr('page-index');
            market = li.attr('market');

            PubSub.publish('onTreeItemClick', {
                pageIndex: pageIndex,
                type: type,
                market: market
            });

        });

        this.zone.delegate('.cancel', 'click', function(e) {
            var li;
            var timeout;
            var callback;
            var market;
            var gameCode;

            li = $(this).parent('li');
            market = li.attr('market');
            gameCode = li.attr('lotter-type');

            if (li.hasClass('can-not-click-cancel')) {
                return;
            }

            callback = function() {
                li.removeClass('open');
                li.addClass('can-not-click-cancel');
                serialNumber = parseInt(li.attr('serial-number'));
                li.find('.cancel').addClass('invisible');
                that.clearItemStatus(li);
                timeout = setTimeout(function() {
                    li.removeClass('can-not-click-cancel');
                    clearTimeout(timeout);
                }, 1000);
            }

            pageIndex = li.attr('page-index');

            PubSub.publish('onCancelTreeItemClick', {
                pageIndex: pageIndex,
                callback: callback,
                market: market,
                gameCode: gameCode
            });
        });

        for (i = 0; i < this.items.length; i++) {
            this.items[i].bindEvents();
        }

        this.setSelectTreeItem($(lis[0]));
        this.subscribeEvents();
    };

    Tree.prototype.subscribeEvents = function() {
        var li;
        var that = this;

        this.setActiveItemTopic = PubSub.subscribe('onSetActiveItem', function(msg, data) {
            li = that.zone.find('li[page-index=' + data.pageIndex + ']');
            that.setSelectTreeItem(li);
        });
    };

    Tree.prototype.clearItemStatus = function(li) {
        var serialNumber = parseInt(li.attr('serial-number'));
        li.find('.time').addClass('invisible');
        this.items[serialNumber].cancelProgress();
        li.find('.time').text('');
    }

    Tree.prototype.drawList = function(){
        var that = this;
        var beginTime;
        var closeTime;
        var endTime;
        var serverTime;
        var gameCode;
        var market;
        var lottorySocketName;

        setInterval(function(){
            that.fnQueue.forEach(function(fnObj,index){
                beginTime = fnObj.argument.beginTimeSerials;
                closeTime = fnObj.argument.closeTimeSerials;
                endTime = fnObj.argument.endTimeSerials;
                serverTime = new Date().getTime() + window.jetLag;
                gameCode = fnObj.argument.gameCode;
                market =  fnObj.argument.market;
                lottorySocketName = gameCode + '_' + market + '_' + 'LottorySocket';
                if ($.inArray(lottorySocketName, app.lottorySocketNames) > -1) 
                    fnObj.fn(beginTime, closeTime, endTime, gameCode, market);
            });
        },1000);
    }

    Tree.prototype.getTreeItemData = function() {
        var data = [];
        $.each(Global.marketList, function(index, item) {
        	//treeItem init
            data.push({
                id: item.id,
                type: item.gameCode,
                serialNumber: index,
                active: false,
                name: item.marketCNName,
                iHot: item.iHot,
                iNew: item.iNew,
                progressId: 'progress' + index,
                market: item.market
            });
            //betZoneData init
            Global.betZoneData.push({
                gameCode: item.gameCode,
                market: item.market,
                data: []
            });
        });
        return data;
    }

    window.Tree = Tree;
}());

(function () {
	function TreeItem (opt) {
		this.opt = opt;
		this.progressLine = new ProgressLine({id: this.opt.progressId});

		this.el  = 	'<li class="tree-item' + (opt.active?' active open"': '"') +
								' page-index="' + opt.id + '"' +
								' lotter-type="' + opt.type + '"' +
								' market="' + opt.market + '"' +
								' serial-number="' + opt.serialNumber + '">' +
						'<div class="info">' +
							'<div class="dot"></div>' +
							'<div class="name">' + (opt.name || '') + '</div>' +
							'<div class="status"></div>' +
							'<div class="status"></div>' +
						'</div>' +

						'<div class="cancel' + (opt.active?'': ' invisible') + '">✕</div>' +

						'<div class="pre-draw-number">' +
							'<div class="text">当前期：</div>' +
							'<div class="draw-number"></div>' +
							'<div class="time' + (opt.active?'': ' invisible') + '">' +  '</div>' +
						'</div>' +

						this.progressLine.getDom() +
					'</li>';
	}
TreeItem.prototype.getDom = function() {
    return this.el;
};

TreeItem.prototype.startProgress = function(beginTimeSerials, closeTimeSerials, endTimeSerials, gameCode, market) {
    this.progressLine.start(beginTimeSerials, closeTimeSerials, endTimeSerials);
    this.startTimeout(beginTimeSerials, closeTimeSerials, endTimeSerials, gameCode, market);
};

TreeItem.prototype.deactiveProgress = function() {
    this.progressLine.deactive();
};

TreeItem.prototype.activeProgress = function() {
    this.progressLine.active();
};

TreeItem.prototype.cancelProgress = function() {
    this.progressLine.stop();
};

TreeItem.prototype.setCountDownTime = function(timeSerials, gameCode, market) {
    //tip: js起始时间为1970-01-01 : 08:00:00
    var now = new Date();
    var timeLeft;
    timeSerials = timeSerials < 0 ? 0 : timeSerials;
    now.setTime(timeSerials - 480 * 60000);

    if (gameCode == 'LT' && market == 'CN3D') {
        timeLeft = now.format("hh:mm:ss");
    } else {
        timeLeft = now.format('mm:ss');
    }
    this.zone.find('.time').text(timeLeft);
};

TreeItem.prototype.startTimeout = function(beginTimeSerials, closeTimeSerials, endTimeSerials, gameCode, market) {
    var that = this;
    var serverTimeSerials;
    var lottorySocketName = gameCode + '_' + market + '_' + 'LottorySocket';

    this.currentDrawNo(lottorySocketName);

    var fn = function(beginTimeSerials, closeTimeSerials, endTimeSerials, gameCode, market) {
        serverTimeSerials = (new Date()).getTime() + window.jetLag;
        that.setCountDownTime(closeTimeSerials - serverTimeSerials, gameCode, market);

        // //1.当前时间到彩期停止时间（当前彩期的最后一分钟） 当前市场提示停止下注
        // if (parseInt((closeTimeSerials - serverTimeSerials) / 1000) == 60 && market == app.currentSocket.market) {
        // 	var title = '下注提示';
        // 	var message = "第" + app.currentSocket.drawData.drawNumber + "期已经停止下注";
        // 	var btnName = '确定';
        // 	app.noticeDialog.show({
        // 		subTitle : title,
        // 		text: message,
        // 		buttonName: btnName,
        // 		autoHide: true,
        // 		timeout: 5000
        // 	});			
        // };

        //2.倒数第三秒 弹出进入下一期提示框  由于弹出框弹出有延时  多加一秒
        if (parseInt((closeTimeSerials - serverTimeSerials) / 1000) == 4) {
            var nextDraw = app[lottorySocketName].drawData.nextDraw;
            if (nextDraw && Object.getOwnPropertyNames(nextDraw).length > 0) {
                if (market == app.currentSocket.market) {
                    app.countDownDialog.count = 3;
                    app.countDownDialog.currentIssue = app.currentSocket.drawData.drawNumber;
                    app.countDownDialog.nextIssue = nextDraw.drawNumber;
                    app.countDownDialog.show();
                }
            } else {
                if (market == app.currentSocket.market) {
                    app.noticeDialog.show({
                        subTitle: '下注提示',
                        text: '彩期已停止，没有下一彩期数据',
                        buttonName: '确定',
                        autoHide: true,
                        timeout: 5000
                    });
                }
            }
        };

        //3.当前结束  进入下一期
        //4.定时器fix chrome浏览器在最小化时 定时器偶尔会出现时间间隔2秒的情况
        //  就会有 serverTimeSerials > closeTimeSerials 的情况
        if (parseInt((closeTimeSerials - serverTimeSerials) / 1000) == 0 || serverTimeSerials > closeTimeSerials) {
            var nextDraw = app[lottorySocketName].drawData.nextDraw;
            var chaseDialog = app.currentModule.chaseNumber.chaseNumberDialog;
            if (nextDraw && Object.getOwnPropertyNames(nextDraw).length > 0)
                that.nextDraw(lottorySocketName, endTimeSerials - closeTimeSerials);
            if (chaseDialog && chaseDialog.zone.is(':visible'))
                chaseDialog.hide(); //切换到下一期时，追号对话框
        };
    };

    var func = app.tree.fnQueue.filter(function(fnObj, index) {
        return fnObj.argument.gameCode == gameCode && fnObj.argument.market == market;
    });

    if (func.length == 0) {
        app.tree.fnQueue.push({
            fn: fn,
            argument: {
                beginTimeSerials: beginTimeSerials,
                closeTimeSerials: closeTimeSerials,
                endTimeSerials: endTimeSerials,
                gameCode: gameCode,
                market: market
            },
            fnTag: gameCode + '_' + market
        });
    } else {
        func[0].argument = {
            beginTimeSerials: beginTimeSerials,
            closeTimeSerials: closeTimeSerials,
            endTimeSerials: endTimeSerials,
            gameCode: gameCode,
            market: market
        };
    };

};

TreeItem.prototype.bindEvents = function() {
    this.zone = $('#' + this.opt.progressId).parent('.tree-item');
    this.progressLine.bindEvents();
};

TreeItem.prototype.nextDraw = function(lottorySocketName, endtime2closetime) {
    var currentSocket = app[lottorySocketName];
    var nextDrawData = currentSocket.drawData.nextDraw;
    currentSocket.nextDraw(currentSocket.gameCode, currentSocket.market, nextDrawData, true, endtime2closetime);
}

TreeItem.prototype.currentDrawNo = function(lottorySocketName) {
    var currentSocket = app[lottorySocketName];
    this.zone.find('.draw-number').text('(' + currentSocket.drawData.drawNumber + ')');
}

window.TreeItem = TreeItem;
}());

(function () {
	function UnitGroup (opt) {
		this.opt = opt;
		this.id  = this.opt.id;

		this.wan  = new IMCheckBox({text: '万位', value: '5th'});
		this.qian = new IMCheckBox({text: '千位', value: '4th'});
		this.bai  = new IMCheckBox({text: '百位', value: '3rd'});
		this.shi  = new IMCheckBox({text: '十位', value: '2nd'});
		this.ge   = new IMCheckBox({text: '个位', value: '1st'});

		this.el = 	'<div class="row unit-group" id="' + this.id + '">' +
						'<div class="col-md-1">' +
							this.wan.getDom() +
						'</div>' +
						'<div class="col-md-1">' +
							this.qian.getDom() +
						'</div>' +
						'<div class="col-md-1">' +
							this.bai.getDom() +
						'</div>' +
						'<div class="col-md-1">' +
							this.shi.getDom() +
						'</div>' +
						'<div class="col-md-1">' +
							this.ge.getDom() +
						'</div>' +
					'</div>';
	}

	UnitGroup.prototype.getDom = function () {
		return this.el;
	};

	UnitGroup.prototype.show = function () {
		this.zone.show();
	};

	UnitGroup.prototype.hide = function () {
		this.zone.hide();
	};

	UnitGroup.prototype.clearChecks = function () {
		this.zone.find('.im-checkbox').removeClass('checked');
	};

	UnitGroup.prototype.bindEvents = function () {
		var that = this;

		this.zone = $('#' + this.id);

		this.zone.delegate('.im-checkbox', 'click', function (e) {
            BetRuleInstance.checkUnitGroup($(this));
		});
	};

	window.UnitGroup = UnitGroup;
}());

/*
 *  用户反馈 下拉界面 UserFeedback.js
 */

(function () {
	function UserFeedback (opt) {
		IMDialog.call(this, (opt || {}));
		this.el = this.initDom();
		this.getFeedBackQeustion();
	}

	UserFeedback.prototype = new IMDialog();
	
	UserFeedback.prototype.initDom = function () {
		var temp;

		this.submit     = new IMButton({
			text: '提交反馈',
			className: 'submit-feedback'
		});

		this.sure = new IMButton({
			text: '确定',
			className: 'sure'
		});

		temp = 	'<div class="user-feedback">' +
					'<div class="dialog-wrapper">' +
						'<div class="page1">' +
							// '<div class="introduction">' +
							// 	'用30秒，让我们为您更好的服务!' +
							// '</div>' +

							// '<div class="survey survey1">' +
							// 	'<div class="title">' +
							// 		'<div class="number">1</div>' +
							// 		'<div class="text">您觉得这次改版最满意的地方是?</div>' +
							// 	'</div>' +

							// 	'<ul>' +
							// 		'<li>' +
							// 			this.checkbox1.getDom() +
							// 		'</li>' +
							// 		'<li>' +
							// 			this.checkbox2.getDom() +
							// 		'</li>' +
							// 		'<li>' +
							// 			this.checkbox3.getDom() +
							// 		'</li>' +
							// 		'<li>' +
							// 			this.checkbox4.getDom() +
							// 		'</li>' +
							// 	'</ul>' +
							// '</div>' +

							// '<div class="survey survey2">' +
							// 	'<div class="title">' +
							// 		'<div class="number">2</div>' +
							// 		'<div class="text">您觉得还需要改进的地方是?</div>' +
							// 	'</div>' +

							// 	'<ul>' +
							// 		'<li>' +
							// 			this.checkbox5.getDom() +
							// 		'</li>' +
							// 		'<li>' +
							// 			this.checkbox6.getDom() +
							// 		'</li>' +
							// 		'<li>' +
							// 			this.checkbox7.getDom() +
							// 		'</li>' +
							// 		'<li>' +
							// 			this.checkbox8.getDom() +
							// 		'</li>' +
							// 	'</ul>' +
							// '</div>' +

							this.submit.getDom() +
						'</div>' +

						'<div class="page2">' +
							'<div class="smile">' +
								'<img src="../img/smile.png">' +
							'</div>' +

							'<div class="text1">' +
								'提交成功' +
							'</div>' +

							'<div class="text2">' +
								'谢谢您宝贵的意见，我们会做的更好' +
							'</div>' +
							
							this.sure.getDom() +
						'</div>' +
					'</div>' +
				'</div>' +

				'<div class="overlay overlay1"></div>';

		return temp;
	};

	UserFeedback.prototype.getDom = function () {
		return this.el;
	};

	UserFeedback.prototype.show = function () {
		this.showContentOverlay();
	};

	UserFeedback.prototype.hide = function (flag, callback) {
		var that = this;

		this.hideContentOverlay();

		//flag用来标明是否是在是直接切换投注记录与用户反馈,
		//如果是就不用清除higher-z-index, 在bet.js中调用。
		if (!flag) {
			this.timeout = setTimeout(function () {
				$('.feedback').removeClass('highlight');
				$('.nav-title').removeClass('higher-z-index');
				clearTimeout(that.timeout);
				that.timeout = undefined;

				if (typeof callback === 'function') {
					callback();
				}
			}, 300);
		} else {
			$('.feedback').removeClass('highlight');
		}
	};

	UserFeedback.prototype.hasTimeout = function () {
		if (this.timeout) {
			return true;
		}

		return false;
	};

	UserFeedback.prototype.isOpen = function () {
		return this.zone.hasClass('content-dialog-active');
	};
	
	UserFeedback.prototype.bindEvents = function () {
		var submit;
		var sure;
		var page1;
		var page2;
		var that = this;

		this.zone = $('.user-feedback');
		
		submit = this.zone.find('.submit-feedback');
		sure   = this.zone.find('.sure');
		page1  = this.zone.find('.page1');
		page2  = this.zone.find('.page2');

		submit.click(function () {
			that.commitFeedBack(page1, page2);
		});

		sure.click(function () {
			clearTimeout(that.timeout);
			page1.show();
			page2.hide();
			that.hide();
		});

		this.zone.delegate('.im-checkbox', 'click', function (e) {
			$(this).toggleClass('checked');
		});

		this.bindOverlayEvents();
	};

	UserFeedback.prototype.getFeedBackQeustion = function() {
	    var html = '';
	    var that = this;
	    var checkboxObj = {};
	    var groupName;

	    service.paperQuestion({}, function(res) {
	    	if (res.code == 0) {	    		
		    	var questions = res.paper.questions;
		    	if (questions.length > 0) {
			    	that.paperId = res.paper.id;
			        for (var i = 0; i < questions.length; i++) {
			            groupName = questions[i].id;
			            for (var key in questions[i]) {
			                if (key != 'id' && key != 'content') {
			                    if (!checkboxObj[groupName]) {
			                        checkboxObj[groupName] = [];
			                    }
			                    if (questions[i][key]!="") {
			                    	checkboxObj[groupName].push(new IMCheckBox({ id: key, text: questions[i][key], value: key.replace('selection','') }));		                    	
			                    }
			                }
			            }
			        }

			        html += '<div class="introduction">' + res.paper.title + '</div>';
			        for(var j = 0; j < questions.length; j++){
			        	groupName = questions[j].id;
			        	html += '<div class="survey survey'+ (j + 1) +'" questionsId = '+res.paper.questions[j].id+'>';
			        	html += '<div class="title">' + 
			        				'<div class="number">' + (j + 1) + '</div>' +
			        				'<div class="text">' + questions[j].content + '</div>' + 
			        			'</div>';
			        	html += '<ul>';
			        	for(var k = 0; k < checkboxObj[groupName].length; k++){
			        		html += '<li>'+
			        					checkboxObj[groupName][k].getDom() +
			        				'</li>';
			        	}
			        	html += '</ul>';
			        	html += '</div>';
			        }
			        $(html).insertBefore(that.zone.find('.submit-feedback'));
		    	}

	    	}else{
				Util.errorModel(res.code);
			}
	    });
	};

	UserFeedback.prototype.commitFeedBack = function(page1, page2) {
		var that = this;
		var req = {
			paperId: that.paperId,
			answer: []
		};
		var $survey = $('.survey');
		$survey.each(function(index, item){
			var imCheck = $(item).find('.im-checkbox.checked');
			var questionId =  $(item).attr('questionsId');
			if (imCheck.length > 0) {
				req.answer.push({
					questionId: questionId,
					selection: []
				});
				$.each(imCheck,function(index, el){
					if ($(el).hasClass('checked')) {
						req.answer[req.answer.length - 1].selection.push($(el).attr('data-value'))
					}
				});
			}
		});
		if (req.answer.length == 0) return;
	    service.paperAnswer(req, function(res) {
	    	if (res.code == 0) {
				//清除
				$('.survey').find('.im-checkbox').removeClass('checked');
				page1.hide();
				page2.show();

				that.timeout = setTimeout(function(){
					page1.show();
					page2.hide();
				},5000);
	    	}else{
				Util.errorModel(res.code);
			}
	    });
	}


	window.UserFeedback = UserFeedback;
}());

/*
**  Lottery.js： Components组装区
*/

(function () {
	'use strict';

	function Lottery (opt) {
		var playingNavData;

		this.opt        = opt;
		this.id         = opt.id;

		if (opt['playingNav'] === 'LT' && opt['market'] != 'CN3D') {
			playingNavData = [
				{
					"familyName": "五星",
					"colRatio": "2",
					"playingGroups": [
						{
							"groupName": "直选",
							"playingMethods": [
								{
									"methodId": "N5P",
									"methodName": "复式",
									"plate": {
										"parentPlate": 1,
										"names": ['万位', '千位', '百位', '十位', '个位'],
										"unitGroup": false
									}
								},
								{
									"methodId": "N5S",
									"methodName": "单式",
									"plate": {
										"parentPlate": 2,
										"unitGroup": false
									}
								},
								{
									"methodId": "N5C",
									"methodName": "组合",
									"plate": {
										"parentPlate": 1,
										"names": ['万位', '千位', '百位', '十位', '个位'],
										"unitGroup": false
									}
								}
							]
						},
						{
							"groupName": "组选",
							"playingMethods": [
								{
									"methodId": "G5X120",
									"methodName": "组选120",
									"plate": {
										"parentPlate": 1,
										"names": [''],
										"unitGroup": false
									}
								},
								{
									"methodId": "G5X60",
									"methodName": "组选60",
									"plate": {
										"parentPlate": 1,
										"names": ['二重号', '单号'],
										"unitGroup": false
									}
								},
								{
									"methodId": "G5X30",
									"methodName": "组选30",
									"plate": {
										"parentPlate": 1,
										"names": ['二重号', '单号'],
										"unitGroup": false
									}
								},
								{
									"methodId": "G5X20",
									"methodName": "组选20",
									"plate": {
										"parentPlate": 1,
										"names": ['三重号', '单号'],
										"unitGroup": false
									}
								},
								{
									"methodId": "G5X10",
									"methodName": "组选10",
									"plate": {
										"parentPlate": 1,
										"names": ['三重号', '二重号'],
										"unitGroup": false
									}
								},
								{
									"methodId": "G5X5",
									"methodName": "组选5",
									"plate": {
										"parentPlate": 1,
										"names": ['四重号', '单号'],
										"unitGroup": false
									}
								}
							]
						}
					] 
				},
				{
					"familyName": "四星",
					"colRatio": "2",
					"playingGroups": [
						{
							"groupName": "直选",
							"playingMethods": [
								{
									"methodId": "N4P",
									"methodName": "复式",
									"plate": {
										"parentPlate": 1,
										"names": ['千位', '百位', '十位', '个位'],
										"unitGroup": false
									}
								},
								{
									"methodId": "N4S",
									"methodName": "单式",
									"plate": {
										"parentPlate": 2,
										"unitGroup": false
									}
								},
								{
									"methodId": "N4C",
									"methodName": "组合",
									"plate": {
										"parentPlate": 1,
										"names": ['千位', '百位', '十位', '个位'],
										"unitGroup": false
									}
								}
							]
						},
						{
							"groupName": "组选",
							"playingMethods": [
								{
									"methodId": "G4X24",
									"methodName": "组选24",
									"plate": {
										"parentPlate": 1,
										"names": [''],
										"unitGroup": false
									}
								},
								{
									"methodId": "G4X12",
									"methodName": "组选12",
									"plate": {
										"parentPlate": 1,
										"names": ['二重号', '单号'],
										"unitGroup": false
									}
								},
								{
									"methodId": "G4X6",
									"methodName": "组选6",
									"plate": {
										"parentPlate": 1,
										"names": ['二重号'],
										"unitGroup": false
									}
								},
								{
									"methodId": "G4X4",
									"methodName": "组选4",
									"plate": {
										"parentPlate": 1,
										"names": ['三重号', '单号'],
										"unitGroup": false
									}
								}
							]
						}
					]
				},
				{
					"familyName": "前三",
					"colRatio": "3",
					"playingGroups": [
						{
							"groupName": "直选",
							"playingMethods": [
								{
									"methodId": "N3PF",
									"methodName": "复式",
									"plate": {
										"parentPlate": 1,
										"names": ['万位', '千位', '百位'],
										"unitGroup": false
									}
								},
								{
									"methodId": "N3SF",
									"methodName": "单式",
									"plate": {
										"parentPlate": 2,
										"unitGroup": false
									}
								},
								{
									"methodId": "N3TF",
									"methodName": "和值",
									"plate": {
										"parentPlate": 3,
										"unitGroup": false,
										"names": [''],
										"numbers": [{"start": 0, "end": 27}]
									}
								},
								{
									"methodId": "N3DF",
									"methodName": "跨度",
									"plate": {
										"parentPlate": 1,
										"unitGroup": false,
										"names": ['']
									}
								},
								{
									"methodId": "N3CF",
									"methodName": "组合",
									"plate": {
										"parentPlate": 1,
										"names": ['万位', '千位', '百位'],
										"unitGroup": false
									}
								}
							]
						},
						{
							"groupName": "组选",
							"playingMethods": [
								{
									"methodId": "G3X3F",
									"methodName": "组三",
									"plate": {
										"parentPlate": 1,
										"names": ['组三'],
										"unitGroup": false
									}
								},
								{
									"methodId": "G3X6F",
									"methodName": "组六",
									"plate": {
										"parentPlate": 1,
										"names": ['组六'],
										"unitGroup": false
									}
								},
								{
									"methodId": "G3MXF",
									"methodName": "混合组选",
									"plate": {
										"parentPlate": 2,
										"unitGroup": false
									}
								},
								{
									"methodId": "G3TF",
									"methodName": "组选和值",
									"plate": {
										"parentPlate": 3,
										"unitGroup": false,
										"names": [''],
										"numbers": [{"start": 1, "end": 26}]
									}
								},
								{
									"methodId": "G3X3SF",
									"methodName": "组三单式",
									"plate": {
										"parentPlate": 2,
										"unitGroup": false
									}
								},
								{
									"methodId": "G3X6SF",
									"methodName": "组六单式",
									"plate": {
										"parentPlate": 2,
										"unitGroup": false
									}
								},
								{
									"methodId": "G3BF",
									"methodName": "包胆",
									"plate": {
										"parentPlate": 3,
										"unitGroup": false,
										"names": [''],
										"numbers": [{"start": 0, "end": 9}]
									}
								}
							]
						},
						{
							"groupName": "其他",
							"playingMethods": [
								{
									"methodId": "S3TDF",
									"methodName": "和值尾数",
									"plate": {
										"parentPlate": 1,
										"unitGroup": false,
										"names": ['']
									}
								},
								{
									"methodId": "S3SF",
									"methodName": "特殊号码",
									"plate": {
										"parentPlate": 4
									}
								}
							]
						}
					]
				},
				{
					"familyName": "中三",
					"colRatio": "3",
					"playingGroups": [
						{
							"groupName": "直选",
							"playingMethods": [
								{
									"methodId": "N3PM",
									"methodName": "复式",
									"plate": {
										"parentPlate": 1,
										"names": ['千位', '百位', '十位'],
										"unitGroup": false
									}
								},
								{
									"methodId": "N3SM",
									"methodName": "单式",
									"plate": {
										"parentPlate": 2,
										"unitGroup": false
									}
								},
								{
									"methodId": "N3TM",
									"methodName": "和值",
									"plate": {
										"parentPlate": 3,
										"names": [''],
										"numbers": [{"start": 0, "end": 27}]
									}
								},
								{
									"methodId": "N3DM",
									"methodName": "跨度",
									"plate": {
										"parentPlate": 1,
										"names": [''],
										"unitGroup": false
									}
								},
								{
									"methodId": "N3CM",
									"methodName": "组合",
									"plate": {
										"parentPlate": 1,
										"names": ['千位', '百位', '十位'],
										"unitGroup": false
									}
								}
							]
						},
						{
							"groupName": "组选",
							"playingMethods": [
								{
									"methodId": "G3X3M",
									"methodName": "组三",
									"plate": {
										"parentPlate": 1,
										"names": ['组三'],
										"unitGroup": false
									}
								},
								{
									"methodId": "G3X6M",
									"methodName": "组六",
									"plate": {
										"parentPlate": 1,
										"names": ['组六'],
										"unitGroup": false
									}
								},
								{
									"methodId": "G3MXM",
									"methodName": "混合组选",
									"plate": {
										"parentPlate": 2
									}
								},
								{
									"methodId": "G3TM",
									"methodName": "组选和值",
									"plate": {
										"parentPlate": 3,
										"names": [''],
										"unitGroup": false,
										"numbers": [{"start": 1, "end": 26}]
									}
								},
								{
									"methodId": "G3X3SM",
									"methodName": "组三单式",
									"plate": {
										"parentPlate": 2
									}
								},
								{
									"methodId": "G3X6SM",
									"methodName": "组六单式",
									"plate": {
										"parentPlate": 2
									}
								},
								{
									"methodId": "G3BM",
									"methodName": "包胆",
									"plate": {
										"parentPlate": 3,
										"names": [''],
										"unitGroup": false,
										"numbers": [{"start": 1, "end": 9}]
									}
								}
							]
						},
						{
							"groupName": "其他",
							"playingMethods": [
								{
									"methodId": "S3TDM",
									"methodName": "和值尾数",
									"plate": {
										"parentPlate": 1,
										"names": [''],
										"unitGroup": false
									}
								},
								{
									"methodId": "S3SM",
									"methodName": "特殊号码",
									"plate": {
										"parentPlate": 4,
										"unitGroup": false
									}
								}
							]
						}
					]
				},
				{
					"familyName": "后三",
					"colRatio": "3",
					"playingGroups": [
						{
							"groupName": "直选",
							"playingMethods": [
								{
									"methodId": "N3PL",
									"methodName": "复式",
									"plate": {
										"parentPlate": 1,
										"names": ['百位', '十位', '个位'],
										"unitGroup": false
									}
								},
								{
									"methodId": "N3SL",
									"methodName": "单式",
									"plate": {
										"parentPlate": 2,
										"unitGroup": false
									}
								},
								{
									"methodId": "N3TL",
									"methodName": "和值",
									"plate": {
										"parentPlate": 3,
										"unitGroup": false,
										"names": [''],
										"numbers": [{"start": 0, "end": 27}]
									}
								},
								{
									"methodId": "N3DL",
									"methodName": "跨度",
									"plate": {
										"parentPlate": 1,
										"unitGroup": false,
										"names": ['']
									}
								},
								{
									"methodId": "N3CL",
									"methodName": "组合",
									"plate": {
										"parentPlate": 1,
										"names": ['百位', '十位', '个位'],
										"unitGroup": false
									}
								}
							]
						},
						{
							"groupName": "组选",
							"playingMethods": [
								{
									"methodId": "G3X3L",
									"methodName": "组三",
									"plate": {
										"parentPlate": 1,
										"names": ['组三'],
										"unitGroup": false
									}
								},
								{
									"methodId": "G3X6L",
									"methodName": "组六",
									"plate": {
										"parentPlate": 1,
										"names": ['组六'],
										"unitGroup": false
									}
								},
								{
									"methodId": "G3MXL",
									"methodName": "混合组选",
									"plate": {
										"parentPlate": 2,
										"unitGroup": false
									}
								},
								{
									"methodId": "G3TL",
									"methodName": "组选和值",
									"plate": {
										"parentPlate": 3,
										"names": [''],
										"unitGroup": false,
										"numbers": [{"start": 1, "end": 26}]
									}
								},
								{
									"methodId": "G3X3SL",
									"methodName": "组三单式",
									"plate": {
										"parentPlate": 2,
										"unitGroup": false
									}
								},
								{
									"methodId": "G3X6SL",
									"methodName": "组六单式",
									"plate": {
										"parentPlate": 2,
										"unitGroup": false
									}
								},
								{
									"methodId": "G3BL",
									"methodName": "包胆",
									"plate": {
										"parentPlate": 3,
										"names": [''],
										"unitGroup": false,
										"numbers": [{"start": 0, "end": 9}]
									}
								}
							]
						},
						{
							"groupName": "其他",
							"playingMethods": [
								{
									"methodId": "S3TDL",
									"methodName": "和值尾数",
									"plate": {
										"parentPlate": 1,
										"names": [''],
										"unitGroup": false
									}
								},
								{
									"methodId": "S3SL",
									"methodName": "特殊号码",
									"plate": {
										"parentPlate": 4,
										"unitGroup": false
									}
								}
							]
						}
					]
				},
				{
					"familyName": "二星",
					"colRatio": "3",
					"playingGroups": [
						{
							"groupName": "直选",
							"playingMethods": [
								{
									"methodId": "N2PL",
									"methodName": "后二复式",
									"plate": {
										"parentPlate": 1,
										"names": ['十位', '个位'],
										"unitGroup": false
									}
								},
								{
									"methodId": "N2SL",
									"methodName": "后二单式",
									"plate": {
										"parentPlate": 2,
										"unitGroup": false
									}
								},
								{
									"methodId": "N2TL",
									"methodName": "后二和值",
									"plate": {
										"parentPlate": 3,
										"unitGroup": false,
										"names": [''],
										"numbers": [{"start": 0, "end": 18}]
									}
								},
								{
									"methodId": "N2DL",
									"methodName": "后二跨度",
									"plate": {
										"parentPlate": 1,
										"unitGroup": false,
										"names": ['']
									}
								},
								{
									"methodId": "N2PF",
									"methodName": "前二复式",
									"plate": {
										"parentPlate": 1,
										"names": ['万位', '千位'],
										"unitGroup": false
									}
								},
								{
									"methodId": "N2SF",
									"methodName": "前二单式",
									"plate": {
										"parentPlate": 2,
										"unitGroup": false
									}
								},
								{
									"methodId": "N2TF",
									"methodName": "前二和值",
									"plate": {
										"parentPlate": 3,
										"unitGroup": false,
										"names": [''],
										"numbers": [{"start": 0, "end": 18}]
									}
								},
								{
									"methodId": "N2DF",
									"methodName": "前二跨度",
									"plate": {
										"parentPlate": 1,
										"unitGroup": false,
										"names": ['']
									}
								}
							]
						},
						{
							"groupName": "组选",
							"playingMethods": [
								{
									"methodId": "G2L",
									"methodName": "后二复式",
									"plate": {
										"parentPlate": 1,
										"unitGroup": false,
										"names": ['组选']
									}
								},
								{
									"methodId": "G2SL",
									"methodName": "后二单式",
									"plate": {
										"parentPlate": 2,
										"unitGroup": false
									}
								},
								{
									"methodId": "G2TL",
									"methodName": "后二和值",
									"plate": {
										"parentPlate": 3,
										"unitGroup": false,
										"names": [''],
										"numbers": [{"start": 1, "end": 17}]
									}
								},
								{
									"methodId": "G2BL",
									"methodName": "后二包胆",
									"plate": {
										"parentPlate": 3,
										"unitGroup": false,
										"names": [''],
										"numbers": [{"start": 0, "end": 9}]
									}
								},
								{
									"methodId": "G2F",
									"methodName": "前二复式",
									"plate": {
										"parentPlate": 1,
										"unitGroup": false,
										"names": ['组选']
									}
								},
								{
									"methodId": "G2SF",
									"methodName": "前二单式",
									"plate": {
										"parentPlate": 2,
										"unitGroup": false
									}
								},
								{
									"methodId": "G2TF",
									"methodName": "前二和值",
									"plate": {
										"parentPlate": 3,
										"unitGroup": false,
										"names": [''],
										"numbers": [{"start": 1, "end": 17}]
									}
								},
								{
									"methodId": "G2BF",
									"methodName": "前二包胆",
									"plate": {
										"parentPlate": 3,
										"unitGroup": false,
										"names": [''],
										"numbers": [{"start": 0, "end": 9}]
									}
								}
							]
						}
					]
				},
				{
					"familyName": "一星",
					"colRatio": "2",
					"playingGroups": [
						{
							"groupName": "定位胆",
							"playingMethods": [
								{
									"methodId": "N1",
									"methodName": "定位胆",
									"plate": {
										"parentPlate": 1,
										"unitGroup": false,
										"names": ["万位", "千位", "百位", "十位", "个位"]
									}
								}
							]
						}
					]
				},
				{
					"familyName": "不定位",
					"colRatio": "3",
					"playingGroups": [
						{
							"groupName": "三星不定位",
							"playingMethods": [
								{
									"methodId": "A1L3",
									"methodName": "后三一码不定位",
									"plate": {
										"parentPlate": 1,
										"unitGroup": false,
										"names": ["不定位"]
									}
								},
								{
									"methodId": "A2L3",
									"methodName": "后三二码不定位",
									"plate": {
										"parentPlate": 1,
										"unitGroup": false,
										"names": ["不定位"]
									}
								},
								{
									"methodId": "A1F3",
									"methodName": "前三一码不定位",
									"plate": {
										"parentPlate": 1,
										"unitGroup": false,
										"names": ["不定位"]
									}
								},
								{
									"methodId": "A2F3",
									"methodName": "前三二码不定位",
									"plate": {
										"parentPlate": 1,
										"unitGroup": false,
										"names": ["不定位"]
									}
								},
								{
									"methodId": "A1M3",
									"methodName": "中三一码不定位",
									"plate": {
										"parentPlate": 1,
										"unitGroup": false,
										"names": ["不定位"]
									}
								},
								{
									"methodId": "A2M3",
									"methodName": "中三二码不定位",
									"plate": {
										"parentPlate": 1,
										"unitGroup": false,
										"names": ["不定位"]
									}
								}
							]
						},
						{
							"groupName": "四星不定位",
							"playingMethods": [
								{
									"methodId": "A1L4",
									"methodName": "四星一码不定位",
									"plate": {
										"parentPlate": 1,
										"unitGroup": false,
										"names": ["不定位"]
									}
								},
								{
									"methodId": "A2L4",
									"methodName": "四星二码不定位",
									"plate": {
										"parentPlate": 1,
										"unitGroup": false,
										"names": ["不定位"]
									}
								}
							]
						},
						{
							"groupName": "五星不定位",
							"playingMethods": [
								{
									"methodId": "A2N5",
									"methodName": "五星二码不定位",
									"plate": {
										"parentPlate": 1,
										"unitGroup": false,
										"names": ["不定位"]
									}
								},
								{
									"methodId": "A3N5",
									"methodName": "五星三码不定位",
									"plate": {
										"parentPlate": 1,
										"unitGroup": false,
										"names": ["不定位"]
									}
								}
							]
						}
					]
				},
				{
					"familyName": "大小单双",
					"colRatio": "3",
					"playingGroups": [
						{
							"groupName": "大小单双",
							"playingMethods": [
								{
									"methodId": "BSOEL2",
									"methodName": "后二大小单双",
									"plate": {
										"parentPlate": 5,
										"unitGroup": false,
										"names": ["十位", "个位"]
									}
								},
								{
									"methodId": "BSOEL3",
									"methodName": "后三大小单双",
									"plate": {
										"parentPlate": 5,
										"unitGroup": false,
										"names": ["百位", "十位", "个位"]
									}
								},
								{
									"methodId": "BSOEF2",
									"methodName": "前二大小单双",
									"plate": {
										"parentPlate": 5,
										"unitGroup": false,
										"names": ["万位", "千位"]
									}
								},
								{
									"methodId": "BSOEF3",
									"methodName": "前三大小单双",
									"plate": {
										"parentPlate": 5,
										"unitGroup": false,
										"names": ["万位", "千位", "百位"]
									}
								},
								{
									"methodId": "BSOEM3",
									"methodName": "中三大小单双",
									"plate": {
										"parentPlate": 5,
										"unitGroup": false,
										"names": ["千位", "百位", "十位"]
									}
								}
							]
						}
					]
				},
				{
					"familyName": "趣味",
					"colRatio": "3",
					"playingGroups": [
						{
							"groupName": "趣味",
							"playingMethods": [
								{
									"methodId": "F5N3",
									"methodName": "五码趣味三星",
									"plate": {
										"parentPlate": 7,
										"names": ["万位", "千位", "百位", "十位", "个位"],
										"funrow": {"万位": true, "千位": true}
									}
								},
								{
									"methodId": "F4N3",
									"methodName": "四码趣味三星",
									"plate": {
										"parentPlate": 7,
										"names": ["千位", "百位", "十位", "个位"],
										"funrow": {"千位": true}
									}
								},
								{
									"methodId": "F3N2L",
									"methodName": "后三趣味二星",
									"plate": {
										"parentPlate": 7,
										"names": ["百位", "十位", "个位"],
										"funrow": {"百位": true}
									}
								},
								{
									"methodId": "F3N2F",
									"methodName": "前三趣味二星",
									"plate": {
										"parentPlate": 7,
										"names": ["万位", "千位", "百位"],
										"funrow": {"万位": true}
									}
								},
								{
									"methodId": "F3N2M",
									"methodName": "中三趣味二星",
									"plate": {
										"parentPlate": 7,
										"names": ["千位", "百位", "十位"],
										"funrow": {"千位": true}
									}
								}
							]
						},
						{
							"groupName": "区间",
							"playingMethods": [
								{
									"methodId": "R5N3",
									"methodName": "五码区间三星",
									"plate": {
										"parentPlate": 8,
										"names": ["万位", "千位", "百位", "十位", "个位"],
										"zonerow": {"万位": true, "千位": true}
									}
								},
								{
									"methodId": "R4N3",
									"methodName": "四码区间三星",
									"plate": {
										"parentPlate": 8,
										"names": ["千位", "百位", "十位", "个位"],
										"zonerow": {"千位": true}
									}
								},
								{
									"methodId": "R3N2L",
									"methodName": "后三区间二星",
									"plate": {
										"parentPlate": 8,
										"names": ["百位", "十位", "个位"],
										"zonerow": {"百位": true}
									}
								},
								{
									"methodId": "R3N2F",
									"methodName": "前三区间二星",
									"plate": {
										"parentPlate": 8,
										"names": ["万位", "千位", "百位"],
										"zonerow": {"万位": true}
									}
								},
								{
									"methodId": "R3N2M",
									"methodName": "中三区间二星",
									"plate": {
										"parentPlate": 8,
										"names": ["千位", "百位", "十位"],
										"zonerow": {"千位": true}
									}
								}
							]
						},
						{
							"groupName": "特殊",
							"playingMethods": [
								{
									"methodId": "SA1",
									"methodName": "一帆风顺",
									"plate": {
										"parentPlate": 1,
										"names": [''],
										"unitGroup": false
									}
								},
								{
									"methodId": "SA2",
									"methodName": "好事成双",
									"plate": {
										"parentPlate": 1,
										"names": [''],
										"unitGroup": false
									}
								},
								{
									"methodId": "SA3",
									"methodName": "三星报喜",
									"plate": {
										"parentPlate": 1,
										"names": [''],
										"unitGroup": false
									}
								},
								{
									"methodId": "SA4",
									"methodName": "四季发财",
									"plate": {
										"parentPlate": 1,
										"names": [''],
										"unitGroup": false
									}
								}
							]
						}
					]
				},
				{
					"familyName": "任选",
					"colRatio": "3",
					"playingGroups": [
						{
							"groupName": "任选二",
							"playingMethods": [
								{
									"methodId": "A2P",
									"methodName": "直选复式",
									"plate": {
										"parentPlate": 1,
										"unitGroup": false,
										"names": ["万位", "千位", "百位", "十位", "个位"]
									}
								},
								{
									"methodId": "A2S",
									"methodName": "直选单式",
									"plate": {
										"parentPlate": 2,
										"unitGroup": true,
										"unitGroupChecked": [3, 4],
										"names": ["万位", "千位", "百位", "十位", "个位"]
									}
								},
								{
									"methodId": "A2T",
									"methodName": "直选和值",
									"plate": {
										"parentPlate": 3,
										"unitGroup": true,
										"unitGroupChecked": [3, 4],
										"names": [""],
										"numbers": [{"start": 0, "end": 18}]
									}
								},
								{
									"methodId": "A2G2",
									"methodName": "组选复式",
									"plate": {
										"parentPlate": 1,
										"unitGroup": true,
										"unitGroupChecked": [3, 4],
										"names": ["组选"]
									}
								},
								{
									"methodId": "A2G2S",
									"methodName": "组选单式",
									"plate": {
										"parentPlate": 2,
										"unitGroup": true,
										"unitGroupChecked": [3, 4]
									}
								},
								{
									"methodId": "A2G2T",
									"methodName": "组选和值",
									"plate": {
										"parentPlate": 3,
										"unitGroup": true,
										"unitGroupChecked": [3, 4],
										"names": [""],
										"numbers": [{"start": 1, "end": 17}]
									}
								}
							]
						},
						{
							"groupName": "任选三",
							"playingMethods": [
								{
									"methodId": "A3P",
									"methodName": "直选复式",
									"plate": {
										"parentPlate": 1,
										"unitGroup": false,
										"names": ["万位", "千位", "百位", "十位", "个位"]
									}
								},
								{
									"methodId": "A3S",
									"methodName": "直选单式",
									"plate": {
										"parentPlate": 2,
										"unitGroup": true,
										"unitGroupChecked": [2, 3, 4],
									}
								},
								{
									"methodId": "A3T",
									"methodName": "直选和值",
									"plate": {
										"parentPlate": 3,
										"unitGroup": true,
										"unitGroupChecked": [2, 3, 4],
										"names": [""],
										"numbers": [{"start": 0, "end": 27}]
									}
								},
								{
									"methodId": "A3G3X3",
									"methodName": "组三复式",
									"plate": {
										"parentPlate": 1,
										"unitGroup": true,
										"unitGroupChecked": [2, 3, 4],
										"names": ["组选"]
									}
								},
								{
									"methodId": "A3G3X3S",
									"methodName": "组三单式",
									"plate": {
										"parentPlate": 2,
										"unitGroup": true,
										"unitGroupChecked": [2, 3, 4]
									}
								},
								{
									"methodId": "A3G3X6",
									"methodName": "组六复式",
									"plate": {
										"parentPlate": 1,
										"unitGroup": true,
										"unitGroupChecked": [2, 3, 4],
										"names": ["组六"]
									}
								},
								{
									"methodId": "A3G3X6S",
									"methodName": "组六单式",
									"plate": {
										"parentPlate": 2,
										"unitGroup": true,
										"unitGroupChecked": [2, 3, 4]
									}
								},
								{
									"methodId": "A3G3MX",
									"methodName": "混合组选",
									"plate": {
										"parentPlate": 2,
										"unitGroup": true,
										"unitGroupChecked": [2, 3, 4]
									}
								},
								{
									"methodId": "A3G3T",
									"methodName": "组选和值",
									"plate": {
										"parentPlate": 3,
										"unitGroup": true,
										"unitGroupChecked": [2, 3, 4],
										"names": [''],
										"numbers": [{"start": 1, "end": 26}]
									}
								}
							]
						},
						{
							"groupName": "任选四",
							"playingMethods": [
								{
									"methodId": "A4P",
									"methodName": "直选复式",
									"plate": {
										"parentPlate": 1,
										"unitGroup": false,
										"names": ["万位", "千位", "百位", "十位", "个位"]			
									}
								},
								{
									"methodId": "A4S",
									"methodName": "直选单式",
									"plate": {
										"parentPlate": 2,
										"unitGroup": true,
										"unitGroupChecked": [1, 2, 3, 4]
									}
								},
								{
									"methodId": "A4G4X24",
									"methodName": "组选24",
									"plate": {
										"parentPlate": 1,
										"unitGroup": true,
										"unitGroupChecked": [1, 2, 3, 4],
										"names": [""]
									}
								},
								{
									"methodId": "A4G4X12",
									"methodName": "组选12",
									"plate": {
										"parentPlate": 1,
										"unitGroup": true,
										"unitGroupChecked": [1, 2, 3, 4],
										"names": ["二重号", "单号"]
									}
								},
								{
									"methodId": "A4G4X6",
									"methodName": "组选6",
									"plate": {
										"parentPlate": 1,
										"unitGroup": true,
										"unitGroupChecked": [1, 2, 3, 4],
										"names": ["二重号"]
									}
								},
								{
									"methodId": "A4G4X4",
									"methodName": "组选4",
									"plate": {
										"parentPlate": 1,
										"unitGroup": true,
										"unitGroupChecked": [1, 2, 3, 4],
										"names": ["三重号", "单号"]
									}
								}
							]
						}
					]
				},
				{
					"familyName": "龙虎",
					"colRatio": "2",
					"playingGroups": [
						{
							"groupName": "龙虎和",
							"playingMethods": [
								{
									"methodId": "LH54",
									"methodName": "万千",
									"plate": {
										"parentPlate": 6,
										"unitGroup": false,
										"names": ["万:千"]
									}
								},
								{
									"methodId": "LH53",
									"methodName": "万百",
									"plate": {
										"parentPlate": 6,
										"unitGroup": false,
										"names": ["万:百"]
									}
								},
								{
									"methodId": "LH52",
									"methodName": "万十",
									"plate": {
										"parentPlate": 6,
										"unitGroup": false,
										"names": ["万:十"]
									}
								},
								{
									"methodId": "LH51",
									"methodName": "万个",
									"plate": {
										"parentPlate": 6,
										"unitGroup": false,
										"names": ["万:个"]
									}
								},
								{
									"methodId": "LH43",
									"methodName": "千百",
									"plate": {
										"parentPlate": 6,
										"unitGroup": false,
										"names": ["千:百"]
									}
								},
								{
									"methodId": "LH42",
									"methodName": "千十",
									"plate": {
										"parentPlate": 6,
										"unitGroup": false,
										"names": ["千:十"]
									}
								},
								{
									"methodId": "LH41",
									"methodName": "千个",
									"plate": {
										"parentPlate": 6,
										"unitGroup": false,
										"names": ["千:个"]
									}
								},
								{
									"methodId": "LH32",
									"methodName": "百十",
									"plate": {
										"parentPlate": 6,
										"unitGroup": false,
										"names": ["百:十"]
									}
								},
								{
									"methodId": "LH31",
									"methodName": "百个",
									"plate": {
										"parentPlate": 6,
										"unitGroup": false,
										"names": ["百:个"]
									}
								},
								{
									"methodId": "LH21",
									"methodName": "十个",
									"plate": {
										"parentPlate": 6,
										"unitGroup": false,
										"names": ["十个"]
									}
								}
							]
						}
					]
				}
			];
		} else if (opt['playingNav'] === 'HL11x5') {
			playingNavData = [
				{
					"familyName": "三码",
					"colRatio": "3",
					"playingGroups": [
						{
							"groupName": "直选",
							"playingMethods": [
								{
									"methodId": "N3PH",
									"methodName": "前三直选复式",
									"plate": {
										"parentPlate": 10,
										"names": ["一位", "二位", "三位"],
										"unitGroup": false
									}
								},
								{
									"methodId": "N3SH",
									"methodName": "前三直选单式",
									"plate": {
										"parentPlate": 2,
										"unitGroup": false
									}
								}
							]
						},
						{
							"groupName": "组选",
							"playingMethods": [
								{
									"methodId": "G3H",
									"methodName": "前三组选复式",
									"plate": {
										"parentPlate": 10,
										"names": ["前三"],
										"unitGroup": false
									}
								},
								{
									"methodId": "G3SH",
									"methodName": "前三组选单式",
									"plate": {
										"parentPlate": 2,
										"unitGroup": false
									}
								},
								{
									"methodId": "G3BH",
									"methodName": "前三组选胆拖",
									"plate": {
										"parentPlate": 10,
										"names": ["胆码", "拖码"],
										"operations": [false, true],
										"unitGroup": false
									}
								}
							]
						}
					] 
				},
				{
					"familyName": "二码",
					"colRatio": "3",
					"playingGroups": [
						{
							"groupName": "直选",
							"playingMethods": [
								{
									"methodId": "N2PH",
									"methodName": "前二直选复式",
									"plate": {
										"parentPlate": 10,
										"names": ["一位", "二位"],
										"unitGroup": false
									}
								},
								{
									"methodId": "N2SH",
									"methodName": "前二直选单式",
									"plate": {
										"parentPlate": 2,
										"unitGroup": false
									}
								}
							]
						},
						{
							"groupName": "组选",
							"playingMethods": [
								{
									"methodId": "G2H",
									"methodName": "前二组选复式",
									"plate": {
										"parentPlate": 10,
										"names": ["前二"],
										"unitGroup": false
									}
								},
								{
									"methodId": "G2SH",
									"methodName": "前二组选单式",
									"plate": {
										"parentPlate": 2,
										"unitGroup": false
									}
								},
								{
									"methodId": "G2BH",
									"methodName": "前二组选胆拖",
									"plate": {
										"parentPlate": 10,
										"names": ["胆码", "拖码"],
										"operations": [false, true],
										"unitGroup": false
									}
								}
							]
						}
					]
				},
				{
					"familyName": "不定位",
					"colRatio": "3",
					"playingGroups": [
						{
							"groupName": "不定位",
							"playingMethods": [
								{
									"methodId": "A1H3",
									"methodName": "前三不定位",
									"plate": {
										"parentPlate": 10,
										"names": ["前三"],
										"unitGroup": false
									}
								}
							]
						}
					]
				},
				{
					"familyName": "趣味型",
					"colRatio": "2",
					"playingGroups": [
						{
							"groupName": "趣味型",
							"playingMethods": [
								{
									"methodId": "FOEC",
									"methodName": "定单双",
									"plate": {
										"parentPlate": 9,
										"unitGroup": false
									}
								},
								{
									"methodId": "FMN",
									"methodName": "猜中位",
									"plate": {
										"parentPlate": 11,
										"names": ["猜中位"],
										"numbers": {"start": 3, "end": 9},
										"unitGroup": false
									}
								}
							]
						}
					]
				},
				{
					"familyName": "定位胆",
					"colRatio": "2",
					"playingGroups": [
						{
							"groupName": "定位胆",
							"playingMethods": [
								{
									"methodId": "P3",
									"methodName": "定位胆",
									"plate": {
										"parentPlate": 10,
										"names": ["一位", "二位", "三位"],
										"unitGroup": false
									}
								}
							]
						}
					]
				},
				{
					"familyName": "任选复式",
					"colRatio": "3",
					"playingGroups": [
						{
							"groupName": "任选复式",
							"playingMethods": [
								{
									"methodId": "A1",
									"methodName": "任选一中一复式",
									"plate": {
										"parentPlate": 10,
										"names": ["选1中1"],
										"unitGroup": false
									}
								},
								{
									"methodId": "A2",
									"methodName": "任选二中二复式",
									"plate": {
										"parentPlate": 10,
										"names": ["选2中2"],
										"unitGroup": false
									}
								},
								{
									"methodId": "A3",
									"methodName": "任选三中三复式",
									"plate": {
										"parentPlate": 10,
										"names": ["选3中3"],
										"unitGroup": false
									}
								},
								{
									"methodId": "A4",
									"methodName": "任选四中四复式",
									"plate": {
										"parentPlate": 10,
										"names": ["选4中4"],
										"unitGroup": false
									}
								},
								{
									"methodId": "A5",
									"methodName": "任选五中五复式",
									"plate": {
										"parentPlate": 10,
										"names": ["选5中5"],
										"unitGroup": false
									}
								},
								{
									"methodId": "A6",
									"methodName": "任选六中五复式",
									"plate": {
										"parentPlate": 10,
										"names": ["选6中5"],
										"unitGroup": false
									}
								},
								{
									"methodId": "A7",
									"methodName": "任选七中五复式",
									"plate": {
										"parentPlate": 10,
										"names": ["选7中5"],
										"unitGroup": false
									}
								},
								{
									"methodId": "A8",
									"methodName": "任选八中五复式",
									"plate": {
										"parentPlate": 10,
										"names": ["选8中5"],
										"unitGroup": false
									}
								}
							]
						}
					]
				},
				{
					"familyName": "任选单式",
					"colRatio": "3",
					"playingGroups": [
						{
							"groupName": "任选单式",
							"playingMethods": [
								{
									"methodId": "A1S",
									"methodName": "任选一中一单式",
									"plate": {
										"parentPlate": 2,
										"unitGroup": false
									}
								},
								{
									"methodId": "A2S",
									"methodName": "任选二中二单式",
									"plate": {
										"parentPlate": 2,
										"unitGroup": false
									}
								},
								{
									"methodId": "A3S",
									"methodName": "任选三中三单式",
									"plate": {
										"parentPlate": 2,
										"unitGroup": false
									}
								},
								{
									"methodId": "A4S",
									"methodName": "任选四中四单式",
									"plate": {
										"parentPlate": 2,
										"unitGroup": false
									}
								},
								{
									"methodId": "A5S",
									"methodName": "任选五中五单式",
									"plate": {
										"parentPlate": 2,
										"unitGroup": false
									}
								},
								{
									"methodId": "A6S",
									"methodName": "任选六中五单式",
									"plate": {
										"parentPlate": 2,
										"unitGroup": false
									}
								},
								{
									"methodId": "A7S",
									"methodName": "任选七中五单式",
									"plate": {
										"parentPlate": 2,
										"unitGroup": false
									}
								},
								{
									"methodId": "A8S",
									"methodName": "任选八中五单式",
									"plate": {
										"parentPlate": 2,
										"unitGroup": false
									}
								}
							]
						}
					]
				},
				{
					"familyName": "任选胆拖",
					"colRatio": "3",
					"playingGroups": [
						{
							"groupName": "任选胆拖",
							"playingMethods": [
								{
									"methodId": "A2B",
									"methodName": "任选二中二胆拖",
									"plate": {
										"parentPlate": 10,
										"names": ["胆码", "拖码"],
										"operations": [false, true],
										"unitGroup": false
									}
								},
								{
									"methodId": "A3B",
									"methodName": "任选三中三胆拖",
									"plate": {
										"parentPlate": 10,
										"names": ["胆码", "拖码"],
										"operations": [false, true],
										"unitGroup": false
									}
								},
								{
									"methodId": "A4B",
									"methodName": "任选四中四胆拖",
									"plate": {
										"parentPlate": 10,
										"names": ["胆码", "拖码"],
										"operations": [false, true],
										"unitGroup": false
									}
								},
								{
									"methodId": "A5B",
									"methodName": "任选五中五胆拖",
									"plate": {
										"parentPlate": 10,
										"names": ["胆码", "拖码"],
										"operations": [false, true],
										"unitGroup": false
									}
								},
								{
									"methodId": "A6B",
									"methodName": "任选六中五胆拖",
									"plate": {
										"parentPlate": 10,
										"names": ["胆码", "拖码"],
										"operations": [false, true],
										"unitGroup": false
									}
								},
								{
									"methodId": "A7B",
									"methodName": "任选七中五胆拖",
									"plate": {
										"parentPlate": 10,
										"names": ["胆码", "拖码"],
										"operations": [false, true],
										"unitGroup": false
									}
								},
								{
									"methodId": "A8B",
									"methodName": "任选八中五胆拖",
									"plate": {
										"parentPlate": 10,
										"names": ["胆码", "拖码"],
										"operations": [false, true],
										"unitGroup": false
									}
								}
							]
						}
					]
				}
			];
		} else if (opt['playingNav'] === 'LT' && opt['market'] == 'CN3D') {
			playingNavData = [
				{
					"familyName": "三星",
					"colRatio": "3",
					"playingGroups": [
						{
							"groupName": "直选",
							"playingMethods": [
								{
									"methodId": "N3PL",
									"methodName": "复式",
									"plate": {
										"parentPlate": 1,
										"names": ["百位", "十位", "个位"],
										"unitGroup": false
									}
								},
								{
									"methodId": "N3SL",
									"methodName": "单式",
									"plate": {
										"parentPlate": 2,
										"unitGroup": false
									}
								},
								{
									"methodId": "N3TL",
									"methodName": "直选和值",
									"plate": {
										"parentPlate": 3,
										"unitGroup": false,
										"names": [""],
										"numbers": [{"start": 0, "end": 27}]
									}
								}
							]
						},
						{
							"groupName": "组选",
							"playingMethods": [
								{
									"methodId": "G3X3L",
									"methodName": "组三",
									"plate": {
										"parentPlate": 1,
										"names": ["组三"],
										"unitGroup": false
									}
								},
								{
									"methodId": "G3X3SL",
									"methodName": "组三单式",
									"plate": {
										"parentPlate": 2,
										"unitGroup": false
									}
								},
								{
									"methodId": "G3X6L",
									"methodName": "组六",
									"plate": {
										"parentPlate": 1,
										"names": ["组六"],
										"unitGroup": false
									}
								},
								{
									"methodId": "G3X6SL",
									"methodName": "组六单式",
									"plate": {
										"parentPlate": 2,
										"unitGroup": false
									}
								},
								{
									"methodId": "G3MXL",
									"methodName": "混合组选",
									"plate": {
										"parentPlate": 2,
										"unitGroup": false
									}
								},
								{
									"methodId": "G3TL",
									"methodName": "组选和值",
									"plate": {
										"parentPlate": 3,
										"unitGroup": false,
										"names": [""],
										"numbers": [{"start": 1, "end": 26}]
									}
								}
							]
						}
					]
				},
				{
					"familyName": "二星",
					"colRatio": "3",
					"playingGroups": [
						{
							"groupName": "直选",
							"playingMethods": [
								{
									"methodId": "N2PF",
									"methodName": "前二直选",
									"plate": {
										"parentPlate": 1,
										"names": ["百位", "十位"],
										"unitGroup": false
									}
								},
								{
									"methodId": "N2SF",
									"methodName": "前二单式",
									"plate": {
										"parentPlate": 2,
										"unitGroup": false
									}
								},
								{
									"methodId": "N2PL",
									"methodName": "后二直选",
									"plate": {
										"parentPlate": 1,
										"names": ["十位", "个位"],
										"unitGroup": false
									}
								},
								{
									"methodId": "N2SL",
									"methodName": "后二单式",
									"plate": {
										"parentPlate": 2,
										"unitGroup": false
									}
								}
							]
						},
						{
							"groupName": "组选",
							"playingMethods": [
								{
									"methodId": "G2L",
									"methodName": "后二复式",
									"plate": {
										"parentPlate": 1,
										"names": ["组选"],
										"unitGroup": false
									}
								},
								{
									"methodId": "G2SL",
									"methodName": "后二单式",
									"plate": {
										"parentPlate": 2,
										"unitGroup": false
									}
								},
								{
									"methodId": "G2F",
									"methodName": "前二复式",
									"plate": {
										"parentPlate": 1,
										"names": ["组选"],
										"unitGroup": false
									}
								},
								{
									"methodId": "G2SF",
									"methodName": "前二单式",
									"plate": {
										"parentPlate": 2,
										"unitGroup": false
									}
								}
							]
						}
					]
				},
				{
					"familyName": "一星",
					"colRatio": "2",
					"playingGroups": [
						{
							"groupName": "定位胆",
							"playingMethods": [
								{
									"methodId": "N1",
									"methodName": "定位胆",
									"plate": {
										"parentPlate": 1,
										"unitGroup": false,
										"names": ["百位", "十位", "个位"]
									}
								}
							]
						}
					]
				},
				{
					"familyName": "不定位",
					"colRatio": "3",
					"playingGroups": [
						{
							"groupName": "不定位",
							"playingMethods": [
								{
									"methodId": "A1L3",
									"methodName": "一码不定位",
									"plate": {
										"parentPlate": 1,
										"unitGroup": false,
										"names": ["不定位"]
									}
								},
								{
									"methodId": "A2L3",
									"methodName": "二码不定位",
									"plate": {
										"parentPlate": 1,
										"unitGroup": false,
										"names": ["不定位"]
									}
								}
							]
						}
					]
				},
				{
					"familyName": "大小单双",
					"colRatio": "3",
					"playingGroups": [
						{
							"groupName": "大小单双",
							"playingMethods": [
								{
									"methodId": "BSOEF2",
									"methodName": "前二大小单双",
									"plate": {
										"parentPlate": 5,
										"unitGroup": false,
										"names": ["百位", "十位"]
									}
								},
								{
									"methodId": "BSOEL2",
									"methodName": "后二大小单双",
									"plate": {
										"parentPlate": 5,
										"unitGroup": false,
										"names": ["十位", "个位"]
									}
								}
							]
						}
					]
				}
			];
		} else if (opt['playingNav'] === 'K3') {
			playingNavData = [
				{
					"familyName": "和值",
					"methodId": "N3T",
					"plate": {
						"parentPlate": '12',
						"numbers": {"start": 3, "end": 18}
					}
				},
				{
					"familyName": "三不同号",
					"methodId": "N3D",
					"plate": {
						"parentPlate": '13-1',
						"data": [
							["123", "134", "146", "236", "345"],
							["124", "135", "156", "245", "346"],
							["125", "136", "234", "246", "356"],
							["126", "145", "235", "256", "456"]
						]
					}
				},
				{
					"familyName": "三同号",
					"methodId": "N3TRI",
					"plate": {
						"parentPlate": '13-2',
						"data": [
							["666", "555", "444"],
							["333", "222", "111"]
						]
					}
				},
				{
					"familyName": "三连号",
					"methodId": "N3SN",
					"plate": {
						"parentPlate": '13-3',
						"data": [
							["123", "234", "345", "456"]
						]
					}
				},
				{
					"familyName": "二不同号",
					"methodId": "N2D",
					"plate": {
						"parentPlate": '13-4',
						"data": [
							["12", "15", "24", "34", "45"],
							["13", "16", "25", "35", "46"],
							["14", "23", "26", "36", "56"]
						]
					}
				},
				{
					"familyName": "二同号",
					"methodId": "N3PAIR",
					"plate": {
						"parentPlate": '13-5',
						"data": [
							["112", "122", "133", "144", "155", "166"],
							["113", "223", "233", "244", "255", "266"],
							["114", "224", "334", "344", "355", "366"],
							["115", "225", "335", "445", "455", "466"],
							["116", "226", "336", "446", "556", "566"],
							["11",  "22",  "33",  "44",  "55",  "66"]
						]
					}
				},
				{
					"familyName": "单挑一骰",
					"methodId": "N1",
					"plate": {
						"parentPlate": '14',
						"data": [6, 5, 4, 3, 2, 1]
					}
				}
			];
		} else if (opt['playingNav'] === 'P3P5') {
			playingNavData = [];
		}

		this.lotteryBall  = new LotteryBall({   id: this.id + '-lottery-ball', gameCode: opt['playingNav'], market: opt['market'] });
		this.timeline     = new Timeline({      id: this.id + '-timeline', gameCode: opt['playingNav']});
		this.modelZone    = new ModelZone({     id: this.id + '-model-zone'});
		this.bettingOrder = new BettingOrder({  id: this.id + '-betting-order'});
		this.chaseNumber  = new ChaseNumber({   id: this.id + '-chase-number'});
		this.comfirmBet   = new ComfirmBet({    id: this.id + '-comfirm-bet'});

		if (opt['playingNav'] === 'K3') {
			this.playingNav = new PlayingNavK3({
				id: this.id + '-playing-nav',
				playingNavData: playingNavData,
				gameCode: opt['playingNav']
			});
		} else {
			this.playingNav = new PlayingNav({
				id: this.id + '-playing-nav',
				playingNavData: playingNavData,
				gameCode: opt['playingNav'],
				market: opt['market']
			});
		}

		this.el = 	'<div class="lottery ' + opt['playingNav'] + '" id="' + this.id + '">' +
						'<div class="container-fluid number-zone">' +
							'<div class="row">' +
								'<div class="col-sm-12 col-md-4 draw-zone">' +
									this.lotteryBall.getDom() +
								'</div>' +

								'<div class="col-sm-12 col-md-8 timeline-zone">' +
									this.timeline.getDom() +
								'</div>' +
							'</div>' +
						'</div>' +

						'<div class="bet-zone">' +
							this.playingNav.getDom() +
						'</div>' +

						'<div class="bet-model-zone">' +
							this.modelZone.getDom() +
						'</div>' +

						'<div class="container-fluid summary-zone">' +
							'<div class="row full-height">' +
								'<div class="col-md-4 betting-order-zone">' +
									this.bettingOrder.getDom() +
								'</div>' +

								'<div class="col-md-4 chase-bumber-zone">' +
									this.chaseNumber.getDom() +
								'</div>' +

								'<div class="col-md-4 comfirm-bet-zone">' +
									this.comfirmBet.getDom() +
								'</div>' +
							'</div>' +
						'</div>' +
					'</div>';

		$('.bet .main .content').append(this.el);

		this.bindEvents();
	}

	Lottery.prototype.getDom = function () {
		return this.el;
	};

	Lottery.prototype.getName = function () {
		return this.id;
	};

	Lottery.prototype.show = function () {
		this.zone.fadeIn(300);
	};

	Lottery.prototype.hide = function () {
		this.zone.fadeOut(300);
	};

	Lottery.prototype.bindEvents = function () {
		this.zone = $('#' + this.id);

		this.lotteryBall.bindEvents();
		this.timeline.bindEvents();
		this.playingNav.bindEvents();
		this.modelZone.bindEvents();
		this.bettingOrder.bindEvents();
		this.chaseNumber.bindEvents();
		this.comfirmBet.bindEvents();
	};

	window.Lottery = Lottery;
})();

var mm = mm || {};
mm.config = {};

mm.getSerialNo = function() {
    return new Date().format("yyyyMMddhhmmss") + Math.random();
};

mm.isFunction = function(obj) {
    return typeof obj == 'function';
};

mm.getConfig = function(){
    $.ajax({
        url: '../config/service.json',
        async: false,
        success: function(data){
            mm.config['service'] = data.service;
            mm.config['debug'] = data.debug;
        },
        cache:false
    });
}

mm.consoleLog = function(data){
    if (mm.config.debug) {
        console.log(data);
    }
}

mm.Commands = {
    LOGIN: 101,
    DRAWINFO: 20,
    ACCTINFO: 3,
    RESULTLIST: 111,
    GAMESETTING: 106,
    SERVERTIME: 6,
    COMMITBET: 109,
    BETHISTORY: 113,
    CHASEHISTORY: 114,
    OPENDRAWLIST: 102,
    CHASEDETAIL: 115,
    CHASENUNBER: 108,
    MULTIPLECHASE:119,
    CANCELBETHISTORY: 110,
    CANCELCHASEHISTORY: 116,
    BATCHPLACEBET: 107,
    PAPERQUESTION: 121,
    PAPERANSWER: 122,
    MARKETLIST: 103
};

mm.Service = function() {
    var _url = null;
    var _socket = null;
    var _queue = [];
    var _register = [];
    var _session = [];
    var that = this;

    mm.Service.it = this;

    var _connect = function() {
        if (!mm.config["service"]) mm.getConfig();
        _url = mm.config["service"];
        mm.consoleLog("connect:" + _url);
        _socket = new WebSocket(_url);
        _socket.onopen = _onOpen;
        _socket.onclose = _onClose;
        _socket.onerror = _onError;
        _socket.onmessage = _onMessage;
    };

    var _send = function(command, dat, callback, sender, isMask) {
        isMask = isMask == undefined ? true : isMask;

        if (_socket && _socket.readyState == 1) {
            var serialNo = mm.getSerialNo();
            _register[serialNo] = { callback: callback, sender: sender, isMask: isMask };

            dat = dat || {};
            dat.serialNo = serialNo;
            if (command != mm.Commands.LOGIN) {
                dat.sessionId = _session["sessionId"];
                dat.token = _session["token"];
            }

            var jsData = command + "." + JSON.stringify(dat);
            _socket.send(jsData);
            return mm.consoleLog("Send:::::" + jsData);
        }

        _queue.push({
            command: command,
            dat: dat,
            callback: callback,
            sender: sender
        });
        if (!_socket || _socket.readyState == _socket.CLOSED) _connect();
    };

    /******* event ********/
    var _onOpen = function() {
        mm.consoleLog("socket open");
        while (_queue.length > 0) {
            var data = _queue.shift();
            _send(data.command, data.dat, data.callback, data.sender);
        }
    };
    var _onClose = function() {
        mm.consoleLog("socket closed");
        that.onClose();
    };
    var _onError = function() {
        mm.consoleLog("socket err");
        that.onError();
    };
    var _onMessage = function(e) {
        mm.consoleLog("Receive:::::" + e.data);
        var service = mm.Service.it;
        var obj = _getObject(e.data);
        if (!obj) return;

        var command = obj.command,
            dat = obj.dat;
        if (command == mm.Commands.LOGIN) {

            _session["sessionId"] = dat.sessionId;
            _session["token"] = dat.token;
            window.session = dat.sessionId;
            window.token = dat.token;
        }

        if (command > 0) {
            var serialNo = dat.serialNo,
                fns = _register[serialNo];
            if (!fns) return;
            delete _register[serialNo];
            that.deal(dat, fns);

        } else {
            // push message
            var fns = _register[command];
            if (fns && fns.callback && mm.isFunction(fns.callback)) fns.callback.call(fns.sender, dat);
        }
    };

    this.bindPushEvent = function(command, callback, sender) {
        _register[command] = { callback: callback, sender: sender };
    };

    this.unBindPushEvent = function(command, callback, sender) {
        delete _register[command];
    };

    /***** util *****/
    var _getObject = function(str) {
        try {
            var i = str.indexOf("{");
            return { command: parseInt(str.substr(0, i)), dat: JSON.parse(str.substr(i)) };
        } catch (e) {
            mm.consoleLog("parse json err");
            return null;
        }
    };

    /*********** api ************/
    //101
    this.login = function(req, callback, sender) {
        _send(mm.Commands.LOGIN, req, callback, sender);
    };

    //20
    this.queryDrawInfo = function(req, callback, sender) {
        _send(mm.Commands.DRAWINFO, req, callback, sender);
    };

    //3
    this.queryAcctInfo = function(req, callback, sender) {
        _send(mm.Commands.ACCTINFO, req, callback, sender);
    };

    //111
    this.queryResultList = function(req, callback, sender) {
        _send(mm.Commands.RESULTLIST, req, callback, sender);
    };

    //106
    this.queryGameSetting = function(req, callback, sender) {
        _send(mm.Commands.GAMESETTING, req, callback, sender);
    };

    this.queryServerTime = function(req, callback, sender) {
        _send(mm.Commands.SERVERTIME, req, callback, sender);
    };

    //109
    this.placeBet = function(req, callback, sender) {
        _send(mm.Commands.COMMITBET, req, callback, sender);
    };

    //113
    this.betHistory = function(req, callback, sender) {
        _send(mm.Commands.BETHISTORY, req, callback, sender);
    };

    //114
    this.chaseHistory = function(req, callback, sender) {
        _send(mm.Commands.CHASEHISTORY, req, callback, sender);
    };

    //115
    this.chaseDetail = function(req, callback, sender) {
        _send(mm.Commands.CHASEDETAIL, req, callback, sender);
    };

    //102
    this.openDrawList = function(req, callback, sender) {
        _send(mm.Commands.OPENDRAWLIST, req, callback, sender);
    };

    //108
    this.chaseNumber = function(req, callback, sender) {
        _send(mm.Commands.CHASENUNBER, req, callback, sender);
    };

    //119
    this.multipleChase = function(req, callback, sender) {
        _send(mm.Commands.MULTIPLECHASE, req, callback, sender);
    };

    //110
    this.cancelBetHistory = function(req, callback, sender) {
        _send(mm.Commands.CANCELBETHISTORY, req, callback, sender);
    };

    //116
    this.cancelChaseHistory = function(req, callback, sender) {
        _send(mm.Commands.CANCELCHASEHISTORY, req, callback, sender);
    };

    //107
    this.betchPlaceBet = function(req, callback, sender) {
        _send(mm.Commands.BATCHPLACEBET, req, callback, sender);
    };

    //121
    this.paperQuestion = function(req, callback, sender) {
        _send(mm.Commands.PAPERQUESTION, req, callback, sender);
    };

    //122
    this.paperAnswer = function(req, callback, sender) {
        _send(mm.Commands.PAPERANSWER, req, callback, sender);
    }

    //103
    this.queryHotAndNew = function(req, callback, sender) {
        _send(mm.Commands.MARKETLIST, req, callback, sender);
    }

    //fix bug firefox < 48
    window.onbeforeunload = function() {
        mm.consoleLog('page refresh');
        _socket.close();
    }

};

mm.Service.prototype.deal = function(dat, fns) {
    delete dat.sessionId;
    delete dat.token;
    delete dat.serialNo;
    var callback = fns.callback,
        sender = fns.sender;
    if (mm.isFunction(callback)) callback.call(sender, dat);
};

mm.Service.prototype.onClose = function() {};
mm.Service.prototype.onError = function() {};

mm.Service.create = function() {
    mm.Service.it = mm.Service.it || new mm.Service();
    return mm.Service.it;
};

var service = mm.Service.create();

(function() {
    'use strict';

    var MILLI_SECONDS_PER_DAY = 24*60*60*1000;

    function Util () {}

    Util.prototype.initPlaceHolder = function(lang) {
        $('input, textarea').placeholder();
    };
    Util.prototype.getQueryString = function(name){
        var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if(r!=null)return  unescape(r[2]); return null;
    }
    
    Util.prototype.initIE8 = function(lang) {
        var ua = window.navigator.userAgent;
        var msie = ua.indexOf("MSIE ");
        
        if (msie > 0) {
            if (ua.substring(msie + 5, msie + 8) === '8.0') {
                $('body').addClass('ie8');
            }
        }
    };
    
    Util.prototype.getTimepickerLang = function() {
        var lang = localStorage.getItem('*lang');
        var dict = {
            'zh-cn': 'zh',
            'zh-tw': 'zh-TW',
            'en-us': 'en'
        }

        return dict[lang];
    };

    Util.prototype.getDatatableLanguageConfig = function() {
        var temp = {
            'lengthMenu': i18n.t('show') + " _MENU_ " + i18n.t('records-per-page'),
            'emptyTable': i18n.t('no-data-available'),
            'paginate': {
                'next':     i18n.t('next-page'),
                'previous': i18n.t('previous-page')
            }
        };
        
        return temp;
    };

    Util.prototype.initI18next = function(lang, callback) {
        if (typeof lang == 'function') {
            callback = lang;
            lang = '';
        }

        var localePath  = '../data/i18n/';
        var browserLang = navigator.language || navigator.userLanguage;
        var storageLang = localStorage.getItem('*lang');
        var l           = lang || storageLang|| browserLang.toLowerCase();
        
        var options = {
            sendType: 'GET',
            lng: l,
            resGetPath: localePath + l + '.json',
            useLocalStorage: false,
            getAsync: false
        };
        
        if (i18n.lng() && i18n.lng() === lang) {
            return;
        }
        
        if(i18n.lng()) {
            i18n.setLng(lang, options);
        } else {
            i18n.init(options, function(){
                if (callback) {
                    callback();
                }
            });
        }
        
        if (localStorage) {
            localStorage.setItem('*lang', l);
        }

        $('body').i18n();
    };

    Util.prototype.createTable = function(options) {
        /*
        ** options = {
        **     titles: [],
        **     id: '',
        **     rownum: '',
        **     colnum: ''
        ** }
        */
        var i;

        var temp =  '<table id="' + options.id + '"cellspacing="0">' +

                        '<thead>' +
        
                            '<tr>';

        for (i = 0; i < options.titles.length; i++) {
            temp +=             '<td>' + options.titles[i] + '</td>';
        }

        temp +=             '</tr>' +

                        '</thead>' +

                        '<tbody>' +

                            this.createTableRow(options.rownum, options.colnum) +

                        '</tbody>' +
        
                    '</table>';

        return temp;
    };

    Util.prototype.createTableRow = function(rownum, colnum) {
        var i;
        var j;
        var temp = '';

        for (i = 0; i < rownum; i++) {
            if (i%2 === 0) {
                temp += '<tr class="odd">';
            } else {
                temp += '<tr class="even">';
            }
            
            for (j = 0; j < colnum; j++) {
                temp +=  '<td>--</td>';
            }
            
            temp += '</tr>';
        }

        return temp;
    };

    Util.prototype.fillTableRows = function(data, rows) {
        var i;
        var j;
        var tr;
        var cols;

        for (i = 0; i < rows.length; i++) {
            tr = rows[i];
            cols = $(tr).children('td');

            for (j = 0; j < cols.length; j++) {
                if (!data[i] || !data[i][j]) {
                    $(cols[j]).text('--');
                } else {
                    $(cols[j]).text(data[i][j]);
                }
            }
        }
    };

    Util.prototype.addTableRows = function(data, tbody) {
        var i;
        var j;
        var coldata;
        var temp = '';
        
        for (i = 0; i < data.length; i++) {
            coldata = data[i];
            
            temp += '<tr>';
            for (j = 0; j < coldata.length; j++) {
                temp += '<td>' +  coldata[j] + '</td>';
            }
            temp += '</tr>';
        }

        $(temp).appendTo(tbody);
    };

    Util.prototype.getIntervalDate = function (startDate, interval) {
        var temp = new Date(startDate.getTime() + MILLI_SECONDS_PER_DAY*interval);
        return temp;
    };

    Util.prototype.isMobile = {
        android: function() {
            return navigator.userAgent.match(/Android/i);
        },
        blackberry: function() {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        ios: function() {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        ios7up: function() {
            return navigator.userAgent.match(/(iPad|iPhone|iPod touch);.*CPU.*OS [7|8|9]_\d/i);
        },
        opera: function() {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        windows: function() {
            return navigator.userAgent.match(/IEMobile/i);
        },
        ipad: function () {
            var ios = this.ios();
            return !!(ios && ios[0] === 'iPad');
        },
        any: function() {
            return (this.android() || this.blackberry() || this.ios() || this.opera() || this.windows());
        }
    };

    /* ----- Date ----- */
    /**
     * Format a date as 'yyyy/MM/dd hh/mm'
     */
    Date.prototype.formatDateAndTime = function () {
        return this.formatDate() +
               '\u00A0\u00A0' +
               (this.getHours() < 10 ? '0' + this.getHours(): this.getHours()) +
               ':' + (this.getMinutes() < 10 ? '0' + this.getMinutes(): this.getMinutes()) +
               ':' + (this.getSeconds() < 10 ? '0' + this.getSeconds(): this.getSeconds());
    };

    /**
     * Format a date as 'MM-dd hh:mm'
     */
    Date.prototype.formatShortDateAndTime = function () {
        return ((this.getMonth() + 1) < 10 ? '0' + (this.getMonth() + 1): (this.getMonth() + 1)) +
               '-' + (this.getDate() < 10 ? '0' + this.getDate(): this.getDate()) +
               '\u00A0\u00A0' +
               (this.getHours() < 10 ? '0' + this.getHours(): this.getHours()) +
               ':' + (this.getMinutes() < 10 ? '0' + this.getMinutes(): this.getMinutes());
    };

    /**
     * Format a date as 'yyyy/MM/dd'
     */
    Date.prototype.formatDate = function (divider) {
        divider = divider || '/';
        return this.getFullYear() + divider + this.formatShortDate(divider);
    };

    /**
     * Format a date as 'MM/dd'
     */
    Date.prototype.formatShortDate = function (divider) {
        divider = divider || '/';
        return ((this.getMonth() + 1) < 10 ? '0' + (this.getMonth() + 1): (this.getMonth() + 1)) +
               divider + (this.getDate() < 10 ? '0' + this.getDate(): this.getDate());
    };

    Util.prototype.getDateByDateString = function(dataString){
        var arr = dataString.replace(/-| |:/g,',').split(',');
        var date = new Date(arr[0], parseInt(arr[1]) - 1, arr[2], arr[3], arr[4], arr[5]);
        return date;
    };

    /**
     *

     *  Format a date as yyyy-mm-dd hh:mm:00
     */
    Util.prototype.getLocalTime = function (nS) {
       var now = new Date(nS);
        var   year=now.getFullYear();
        var   month=now.getMonth()+1;
        var   date=now.getDate();
        var   hour=now.getHours();
        var   minute=now.getMinutes();
        var   second=now.getSeconds();
        if(hour < 10){
            hour = '0'+hour
        }
        if(month<10){
            month = '0'+month
        }
        if(date < 10){
            date = '0' + date
        }
        if(minute < 10){
            minute = '0' + minute
        }
        if(second < 10){
            second = '0' + second
        }
        return   year+"-"+month+"-"+date+" "+hour+":"+minute+":"+second;
    };

    Array.prototype.remove = function(val) {
        var index = this.indexOf(val);
        if (index > -1) {
            this.splice(index, 1);
        }
    };

    Array.prototype.add = function(val){
        this.remove(val);
        this.push(val);
    }

    Array.prototype.eqaul = function(arr) {
        if (this.length > 0 && this.sort().toString() == arr.sort().toString()){
            return true;
        }
        return false;
    }

    Date.prototype.format = function (fmt) {
        var o = {
            "M+": this.getMonth() + 1,
            "d+": this.getDate(),
            "h+": this.getHours(),
            "m+": this.getMinutes(),
            "s+": this.getSeconds(),
            "S": this.getMilliseconds()
        };
        if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
        for (var k in o)
            if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        return fmt;
    };

    Util.prototype.addDotToNumber=function(num,dotLength){
        dotLength = dotLength || 2;
        num = num.toString().replace(/\$|\,/g,'');  
        if(isNaN(num))  num = "0.00";  
        var sign = (num == (num = Math.abs(num)));  
        num = Math.floor(num * Math.pow(10, dotLength) + 0.50000000001);  
        var cents = num % Math.pow(10, dotLength);  
        num = Math.floor(num / Math.pow(10, dotLength)).toString();
        if (dotLength == 2) {
            if (parseInt(cents) < 10)  cents = '0' + cents;
        }  
        if (dotLength == 3) {
            if (parseInt(cents) < 10) cents = '00' + cents;
            if (10 < parseInt(cents) && parseInt(cents) < 100) cents = '0' + cents;
        }
        if (dotLength == 4) {
            if (parseInt(cents) < 10) cents = '000' + cents;
            if (10 <= parseInt(cents) && parseInt(cents) < 100) cents = '00' + cents;
            if (100 <= parseInt(cents) && parseInt(cents) < 1000) cents = '0' + cents;
        }
        for (var i = 0; i < Math.floor((num.length - ( 1 + i )) / 3); i++)  
        num = num.substring(0,num.length - (4 * i + 3)) +','+ num.substring(num.length - (4 * i + 3)); 
        // if(isCents == false) return (((sign)? '' : '-') + num);
        return (((sign)? '' : '-') + num + '.' + cents); 
    };

    Util.prototype.rmoney = function (num) {
        return parseFloat(num.replace(/[^\d\.-]/g, ""));
    };

    Util.prototype.rangeCount = function(x, y) {
        var fx = 1,
            fy = 1;
        while (y) {
            fx *= x;
            x--;
            fy *= y;
            y--;
        }
        return fx / fy;
    };

    Util.prototype.combination = function(x, y) {
        var fx = 1,
            fy = 1;
        while (y) {
            fx *= x;
            x--;
            y--;
        }
        return fx
    };

    Util.prototype.sameBallCount = function(multiBallArr,singleBallArr) {
        var count = 0;    
        for(var i in singleBallArr){
            if(multiBallArr.indexOf(singleBallArr[i]) > -1)
                count ++;
        }
        return count;
    };
    //错误提示
    Util.prototype.errorModel = function(code,subTitle){
        var obj;
        if(!subTitle){
            subTitle = '失败'
        }
        if(typeof(app) != 'undefined'){
            obj = app;
        }else{
            obj = recordsQuery
        }
        obj.noticeDialog.show({
            subTitle: subTitle,
            text: Local[code],
            buttonName: "确定",
            autoHide: true,
            timeout: 3000
        });
    };
    //去掉重复
    Util.prototype.removeRepeat = function(list) {
        //去重复
        var a = list;
        for(var i in list){
            for(var x = list.length-1 ;x>i;x--){
                if(list[i].split("").sort().toString() == list[x].split("").sort().toString()){
                    a.splice(x,1)
                }
            }
        }
        return a
    };
    //过滤特殊字符;返回的是字符串
    Util.prototype.fifter = function(text,type){
        var val,isNum,filterText,errorText,resultText,flagError;
        val = text;
        if(typeof val == 'object')val = val.toString();
        isNum = /[^\d]/;
        filterText = '';//过滤
        errorText = [];//错误
        resultText = [];//结果
        for(var i in val) {
            if(!isNum.test(val[i])){
                filterText = filterText+''+val[i];
            }else{
                filterText = filterText+' ';
                if(val[i] != ' ' && val[i] != '|' && val[i] != ',' && val[i] != '/' && val[i] != '\n')flagError = true;
            }
        }
        var filterTextSplit = filterText.split(" ");
        for(var x = 0;x< filterTextSplit.length;x++){
            if(filterTextSplit[x].length != type){
                if(filterTextSplit[x] != ''){
                    errorText.push(filterTextSplit[x]);
                }
            }else{
                if(resultText.indexOf(filterTextSplit[x])>=0){
                    errorText.push(filterTextSplit[x]);
                }else{
                    resultText.push(filterTextSplit[x]);
                }
            }
        }
        BetRuleInstance.errorBetText_1 = errorText.join(' ');
        if(flagError)BetRuleInstance.flagError = flagError;
        return resultText;
    };
    //2个字符必须相同(array:['123','321'])
    Util.prototype.pairTwo = function(array){
        var errorText = '';
        for(var i= array.length -1;i>=0;i--){
            var num=array[i];
            var shou=array[i][0];
            var zhong=array[i][1];
            var wei=array[i][2];
            if((shou==zhong&&zhong==wei)||(shou!=zhong&&zhong!=wei&&shou!=wei)){
                errorText += array[i] + ' ';
                array.splice(i,1);
            }
        }
        BetRuleInstance.errorBetText_2 = errorText;
        return array;
    };
    //3个号不能是豹子号
    Util.prototype.pairThreeNo = function(array){
        var errorText = '';
        for(var i = array.length-1;i>=0;i--){
            if(array[i][0] == array[i][1] && array[i][0] == array[i][2] && array[i][1] == array[i][2]){
                errorText += array[i] + ' ';
                array.splice(i,1)
            }
        }
        BetRuleInstance.errorBetText_3 = errorText;
        return array
    };
    //2个号 不能是对子号；
    Util.prototype.noPair = function(array){
        var errorText = '';
        for(var i = array.length-1;i>=0;i--){
            if(array[i][0] == array[i][1] ){
                errorText += array[i] + ' ';
                array.splice(i,1)
            }
        }
        BetRuleInstance.errorBetText_4 = errorText;
        return array
    };
    //3个字符都不相同
    Util.prototype.noIdentical = function(array){
        var errorText = '';
        for(var i = array.length-1;i>=0;i--){
            if(array[i][0] == array[i][1] || array[i][0] == array[i][2] || array[i][1] == array[i][2]){
                errorText += array[i] + ' ';
                array.splice(i,1)
            }
        }
        BetRuleInstance.errorBetText_5 = errorText;
        return array
    };
    //order:排序方式（从大到小，还是从小到大）sortBy：需要比较的字段
    Util.prototype.sortNumber =  function(order, sortBy) {
        var ordAlpah = (order == 'asc') ? '>' : '<';
        var sortFun = new Function('a', 'b', 'return a.' + sortBy + ordAlpah + 'b.' + sortBy + '?1:-1');
        return sortFun;
    }
    window.Util = new Util();
}());

/*
 *  bet页面 入口函数
 */

(function () {
	'use strict';

	function app () {
		this.money    = '0';
		this.zone     = $('.bet');
		this.features = [];
		this.lottorySocketNames = [];
		this.init();
		this.bindEvents();
		this.subscribeEvents();

        if (Util.isMobile.any() && window.FastClick) {
            FastClick.attach(document.body);
        }

        this.horizonScreen();
	}

	app.prototype.init = function () {
		this.createTree();
		this.createFirstMarket(this.tree.data[0]);
		this.resetTreeHeight();
		this.creatCountdownDialog();
		this.creatNoticeDialog();
		this.createOverlay();
	};

	app.prototype.createTree = function () {
		this.treeArea = this.zone.find('.left-nav .tree');
		this.tree = new Tree();
		this.treeArea.html(this.tree.getDom());
		this.tree.bindEvents();
	};

	app.prototype.createFirstMarket = function (data) {
		this[data.id] = new Lottery({
			id: data.id,
			playingNav: data.type,
			market: data.market
		});

		this.features.push(data.id);
		this.currentModule = this[data.id];
		this.currentModule.show();
	};

	app.prototype.createOverlay = function () {
		var that = this;

		this.overlay = new IMOverlay({position: $('.bet')});
		this.overlay.show();

		var timeout = setTimeout(function () {
			that.overlay.hide();
			clearTimeout(timeout);
		}, 500);
	};

	app.prototype.creatCountdownDialog = function () {
		if (!this.countDownDialog) {
			this.countDownDialog = new CountDownDialog();
			$('body').append(this.countDownDialog.getDom());
			this.countDownDialog.bindEvents();
		}
	};

	app.prototype.horizonScreen = function () {
        var width  = parseInt(screen.width);
        var height = parseInt(screen.height);
        var max    = Math.max(width, height);
        var min    = Math.min(width, height);

        if (Util.isMobile.any() && max >= 1024 && min < 1024) {
			this.noticeDialog.show({
				text: '检测到您的设备尺寸较小， 请横屏显示!',
				buttonName: '确定'
			});
        }
	};

	app.prototype.creatNoticeDialog = function () {
		if (!this.noticeDialog) {
			this.noticeDialog = new NoticeDialog({id: 'app-notice-dialog'});
			$('body').append(this.noticeDialog.getDom());
			this.noticeDialog.bindEvents();
		}
	}

	app.prototype.resetTreeHeight = function (data) {
		var mainHeight;
		var screenHeight;
		var maxHeight;
		var contentHeight;
		var h;
		var that = this;
		var leftTree = this.zone.find('.left-nav');

		var timeout = setTimeout(function () {
			if (data && data.type && data.type === 2) {
				h = that.treeHeight + data.gap + 'px';
				leftTree.css('height', h);
			} else {
				contentHeight = that.zone.find('.main .content').height();

				if (!that.treeHeight) {
					that.treeHeight = contentHeight;
				}

				mainHeight   = contentHeight + 70;
				screenHeight = $('body').height();
				maxHeight    = Math.max(mainHeight, screenHeight);

				if (maxHeight > that.treeHeight) {
					leftTree.css('height', maxHeight + 'px');
				}
			}
		}, 1000);
	};

	app.prototype.bindEvents = function () {
		var left;
		var width;
		var logoarr;
		var biglogo;
		var overlay;
		var that   = this;
		var header = $('.bet .nav-title');
		var leftNavTitle = $('.bet .left-nav .title');

		this.zone = $('.bet');
		logoarr   = header.find('.logo-arr');
		biglogo   = header.find('.big-logo');

		header.find('.bet-record').click(function () {
			if (that.userFeedback && that.userFeedback.hasTimeout() ||
				that.bettingRecords && that.bettingRecords.hasTimeout()) {   //如果userFeedBack的timeout还没有清除掉
				return;
			}

			if (that.userFeedback && that.userFeedback.isOpen()) {
				that.userFeedback.hide(true);
			}

			if (!that.bettingRecords) {
				that.bettingRecords = new BettingRecords();
				$('.main').append(that.bettingRecords.getDom());
				that.bettingRecords.bindEvents();
			}else{
				if (!(that.bettingRecords && that.bettingRecords.isOpen())) {
					if(that.bettingRecords.type ==1){
						that.bettingRecords.getBetHistory();
					}else{
						that.bettingRecords.getChaseHistory();
					}

				}
			}

			if (that.bettingRecords && that.bettingRecords.isOpen()) {   //如果bettingRecords已经打开
				$(this).children('.dot').hide().find('span').text('0');
				that.bettingRecords.hide();
			} else {
				$(this).children('.dot').hide().find('span').text('0');
				that.bettingRecords.show();
				$('.bet-record').addClass('highlight');
				$('.nav-title').addClass('higher-z-index');
			}
		});

		header.find('.feedback').click(function () {
			if (that.userFeedback && that.userFeedback.hasTimeout() ||
				that.bettingRecords && that.bettingRecords.hasTimeout()) {   //如果userFeedBack的timeout还没有清除掉
				return;
			}

			if (that.bettingRecords && that.bettingRecords.isOpen()) {
				that.bettingRecords.hide(true);
			}

			if (!that.userFeedback) {
				that.userFeedback = new UserFeedback();
				$('.main').append(that.userFeedback.getDom());
				that.userFeedback.bindEvents();
			}

			if (that.userFeedback && that.userFeedback.isOpen()) {   //如果userFeedback已经打开
				$(this).children('.dot').hide();
				that.userFeedback.hide();
			} else {
				$(this).children('.dot').hide();
				that.userFeedback.show();
				$('.feedback').addClass('highlight');
				$('.nav-title').addClass('higher-z-index');
			}
		});

		header.find('.secret').click(function () {
			if ($(this).children('a').text() === '隐藏') {
				$(this).children('a').text('显示');
				header.find('.money').text('-----');
			} else {
				$(this).children('a').text('隐藏');
				header.find('.money').text(that.money);
			}
		});

		//if (Util.isMobile.any()) {
		//	logoarr.click(function () {
		//		biglogo.toggle();
		//	});
		//} else {
		//	logoarr.mouseover(function () {
		//		biglogo.show();
		//	}).mouseout(function () {
		//		biglogo.hide();
		//	});
		//}

		leftNavTitle.delegate('.subtitle', 'click', function () {
			leftNavTitle.find('.subtitle').removeClass('selected');
			$(this).addClass('selected');
		});

		leftNavTitle.children('.show-hide-arrow-background').click(function () {
			left  = parseInt($('.bet .left-nav').css('left'));
			width = $('.bet .left-nav').css('width');

			if (left >= 0) {
				left = '-' + width;
				$('.bet .left-nav').css('left', left);
				$('.bet .main').css('left', 0);
				$(this).children('.show-hide-arrow').css('transform', 'rotateZ(180deg)');
			} else {
				left = '0';
				$('.bet .left-nav').css('left', 0);
				$('.bet .main').css('left', width);
				$(this).children('.show-hide-arrow').css('transform', 'rotateZ(0deg)');
			}
		});

		$(document).mousemove(function(e){
			left  = parseInt($('.bet .left-nav').css('left'));
			width = parseInt($('.bet .left-nav').css('width'));

			if (parseInt(e.pageX) < 30 && left < 0) {
				left = '0';
				$('.bet .left-nav').css('left', 0);
				$('.bet .main').css('left', width);
				leftNavTitle.find('.show-hide-arrow').css('transform', 'rotateZ(0deg)');
			} 
		});
	};

	app.prototype.subscribeEvents = function () {
		var moduleName;
		var market;
		var gameCode;
		var lottorySocketName;
		var callback;
		var that = this;

		PubSub.subscribe('onTreeItemClick', function (msg, data) {
			moduleName = data.pageIndex;
			market = data.market;
			gameCode = data.type;

			if (that.currentModule.getName() === moduleName) {
				return;
			}

			if (that.bettingRecords && that.bettingRecords.isOpen()) {
				that.bettingRecords.hide(false, function(){});
			} 

			if (that.userFeedback && that.userFeedback.isOpen()) {
				that.userFeedback.hide(false, function (){});
			} 

			cb();

			function cb () {
				var temp;
				lottorySocketName = gameCode + '_' + market + '_' +  'LottorySocket';

				that.currentModule.hide();

				if (!that[moduleName]) {
					that[moduleName] = new Lottery({
						id: moduleName,
						playingNav: data.type,
						market: data.market
					});
				}

				if (!that[lottorySocketName]) {
					that[lottorySocketName] = new lottorySocket(gameCode, market);
					that.currentSocket = that[lottorySocketName];
				}else{
					that.currentSocket = that[lottorySocketName];
				}
				
				temp = setTimeout(function () {
					that.currentModule = that[moduleName];
					that[moduleName].show();
					var famiryItem = that[moduleName].playingNav.zone.find('.playing-family .family-item:eq(0)');
					famiryItem.removeClass('selected').trigger('click');
					that.features.add(moduleName);

					if ($.inArray(lottorySocketName,that.lottorySocketNames) == -1) {
						that.currentSocket.bindLottoryData(market);										
					}else{
						if (!that.currentSocket.marketStatus) 
							that.marketCloseNotice(market, 3000);
					}
					that.lottorySocketNames.add(lottorySocketName);
					
					clearTimeout(temp);

					if (that.features.length > 8) {
						that.resetTreeHeight({
							type: 2,
							gap: 70
						});
					}

				}, 300);
			}
		});

		PubSub.subscribe('onCancelTreeItemClick', function (msg, data) {
			moduleName = data.pageIndex;
			market = data.market;
			gameCode = data.gameCode;
			lottorySocketName = gameCode + '_' + market + '_' +  'LottorySocket';

			if (that.currentModule.getName() === moduleName) {
				if (that.features.length === 1) {
					return;
				} else {
					that.features.remove(moduleName);
					that[moduleName].hide();
					that.currentModule = that[that.features[that.features.length - 1]];
					that.currentModule.show();

					that.lottorySocketNames.remove(lottorySocketName);
					that.currentSocket = that[that.lottorySocketNames[that.lottorySocketNames.length - 1]];

					PubSub.publish( 'onSetActiveItem', {
						pageIndex: that.features[that.features.length - 1]
					});

					if (typeof data.callback === 'function') {
						callback = data.callback;
						callback();
					}
				}
			} else {
				that.features.remove(moduleName);
				that.lottorySocketNames.remove(lottorySocketName);

				if (typeof data.callback === 'function') {
					callback = data.callback;
					callback();
				}
			}

			if (that.features.length <= 8) {
				that.resetTreeHeight({
					type: 2,
					gap: 0
				});
			}
		});

		PubSub.subscribe('onBindCountTime',function(msg, data){
			that.tree.callback(data.beginTimeSerials, data.closeTimeSerials, data.endTimeSerials ,true, data.gameCode, data.market);
		});
	};

	app.prototype.getLotteryByMarket = function(market, gameCode) {
		var moduleName = Global.marketList.filter(function(item, index) {
			return item.gameCode == gameCode && item.market == market;
		})[0].id;
		return this[moduleName];
	}

	app.prototype.marketCloseNotice = function(market, timeout) {
		var that = this;
		var marketCNName = Global.marketList.filter(function(item, index) {
			return item.gameCode == that.currentSocket.gameCode && item.market == market;
		})[0].marketCNName;
        var message = marketCNName + "市场已经关闭，如要继续下注请切换到其他市场。";
        this.noticeDialog.show({
            subTitle: '市场关闭',
            text: message,
            buttonName: '确定',
            autoHide: true,
            timeout: timeout
        });
	}


	window.app = new app();
})();