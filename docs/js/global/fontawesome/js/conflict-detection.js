/*!
 * Font Awesome Free 5.13.0 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 */
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t(e["fontawesome-free-conflict-detection"]={})}(this,(function(e){"use strict";function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function n(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{},r=Object.keys(o);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(o).filter((function(e){return Object.getOwnPropertyDescriptor(o,e).enumerable})))),r.forEach((function(t){n(e,t,o[t])}))}return e}var r={},i={};try{"undefined"!=typeof window&&(r=window),"undefined"!=typeof document&&(i=document)}catch(e){}var c=(r.navigator||{}).userAgent,a=void 0===c?"":c,s=r,f=i,l=!!s.document,u=!!f.documentElement&&!!f.head&&"function"==typeof f.addEventListener&&"function"==typeof f.createElement,d=(~a.indexOf("MSIE")||a.indexOf("Trident/"),[]),m=!1;function g(e){u&&(m?setTimeout(e,0):d.push(e))}u&&((m=(f.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(f.readyState))||f.addEventListener("DOMContentLoaded",(function e(){f.removeEventListener("DOMContentLoaded",e),m=1,d.map((function(e){return e()}))})));var h="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var p=function(e,t){return e(t={exports:{}},t.exports),t.exports}((function(e){!function(t){function n(e,t){var n=(65535&e)+(65535&t);return(e>>16)+(t>>16)+(n>>16)<<16|65535&n}function o(e,t,o,r,i,c){return n((a=n(n(t,e),n(r,c)))<<(s=i)|a>>>32-s,o);var a,s}function r(e,t,n,r,i,c,a){return o(t&n|~t&r,e,t,i,c,a)}function i(e,t,n,r,i,c,a){return o(t&r|n&~r,e,t,i,c,a)}function c(e,t,n,r,i,c,a){return o(t^n^r,e,t,i,c,a)}function a(e,t,n,r,i,c,a){return o(n^(t|~r),e,t,i,c,a)}function s(e,t){var o,s,f,l,u;e[t>>5]|=128<<t%32,e[14+(t+64>>>9<<4)]=t;var d=1732584193,m=-271733879,g=-1732584194,h=271733878;for(o=0;o<e.length;o+=16)s=d,f=m,l=g,u=h,d=r(d,m,g,h,e[o],7,-680876936),h=r(h,d,m,g,e[o+1],12,-389564586),g=r(g,h,d,m,e[o+2],17,606105819),m=r(m,g,h,d,e[o+3],22,-1044525330),d=r(d,m,g,h,e[o+4],7,-176418897),h=r(h,d,m,g,e[o+5],12,1200080426),g=r(g,h,d,m,e[o+6],17,-1473231341),m=r(m,g,h,d,e[o+7],22,-45705983),d=r(d,m,g,h,e[o+8],7,1770035416),h=r(h,d,m,g,e[o+9],12,-1958414417),g=r(g,h,d,m,e[o+10],17,-42063),m=r(m,g,h,d,e[o+11],22,-1990404162),d=r(d,m,g,h,e[o+12],7,1804603682),h=r(h,d,m,g,e[o+13],12,-40341101),g=r(g,h,d,m,e[o+14],17,-1502002290),d=i(d,m=r(m,g,h,d,e[o+15],22,1236535329),g,h,e[o+1],5,-165796510),h=i(h,d,m,g,e[o+6],9,-1069501632),g=i(g,h,d,m,e[o+11],14,643717713),m=i(m,g,h,d,e[o],20,-373897302),d=i(d,m,g,h,e[o+5],5,-701558691),h=i(h,d,m,g,e[o+10],9,38016083),g=i(g,h,d,m,e[o+15],14,-660478335),m=i(m,g,h,d,e[o+4],20,-405537848),d=i(d,m,g,h,e[o+9],5,568446438),h=i(h,d,m,g,e[o+14],9,-1019803690),g=i(g,h,d,m,e[o+3],14,-187363961),m=i(m,g,h,d,e[o+8],20,1163531501),d=i(d,m,g,h,e[o+13],5,-1444681467),h=i(h,d,m,g,e[o+2],9,-51403784),g=i(g,h,d,m,e[o+7],14,1735328473),d=c(d,m=i(m,g,h,d,e[o+12],20,-1926607734),g,h,e[o+5],4,-378558),h=c(h,d,m,g,e[o+8],11,-2022574463),g=c(g,h,d,m,e[o+11],16,1839030562),m=c(m,g,h,d,e[o+14],23,-35309556),d=c(d,m,g,h,e[o+1],4,-1530992060),h=c(h,d,m,g,e[o+4],11,1272893353),g=c(g,h,d,m,e[o+7],16,-155497632),m=c(m,g,h,d,e[o+10],23,-1094730640),d=c(d,m,g,h,e[o+13],4,681279174),h=c(h,d,m,g,e[o],11,-358537222),g=c(g,h,d,m,e[o+3],16,-722521979),m=c(m,g,h,d,e[o+6],23,76029189),d=c(d,m,g,h,e[o+9],4,-640364487),h=c(h,d,m,g,e[o+12],11,-421815835),g=c(g,h,d,m,e[o+15],16,530742520),d=a(d,m=c(m,g,h,d,e[o+2],23,-995338651),g,h,e[o],6,-198630844),h=a(h,d,m,g,e[o+7],10,1126891415),g=a(g,h,d,m,e[o+14],15,-1416354905),m=a(m,g,h,d,e[o+5],21,-57434055),d=a(d,m,g,h,e[o+12],6,1700485571),h=a(h,d,m,g,e[o+3],10,-1894986606),g=a(g,h,d,m,e[o+10],15,-1051523),m=a(m,g,h,d,e[o+1],21,-2054922799),d=a(d,m,g,h,e[o+8],6,1873313359),h=a(h,d,m,g,e[o+15],10,-30611744),g=a(g,h,d,m,e[o+6],15,-1560198380),m=a(m,g,h,d,e[o+13],21,1309151649),d=a(d,m,g,h,e[o+4],6,-145523070),h=a(h,d,m,g,e[o+11],10,-1120210379),g=a(g,h,d,m,e[o+2],15,718787259),m=a(m,g,h,d,e[o+9],21,-343485551),d=n(d,s),m=n(m,f),g=n(g,l),h=n(h,u);return[d,m,g,h]}function f(e){var t,n="",o=32*e.length;for(t=0;t<o;t+=8)n+=String.fromCharCode(e[t>>5]>>>t%32&255);return n}function l(e){var t,n=[];for(n[(e.length>>2)-1]=void 0,t=0;t<n.length;t+=1)n[t]=0;var o=8*e.length;for(t=0;t<o;t+=8)n[t>>5]|=(255&e.charCodeAt(t/8))<<t%32;return n}function u(e){var t,n,o="";for(n=0;n<e.length;n+=1)t=e.charCodeAt(n),o+="0123456789abcdef".charAt(t>>>4&15)+"0123456789abcdef".charAt(15&t);return o}function d(e){return unescape(encodeURIComponent(e))}function m(e){return function(e){return f(s(l(e),8*e.length))}(d(e))}function g(e,t){return function(e,t){var n,o,r=l(e),i=[],c=[];for(i[15]=c[15]=void 0,r.length>16&&(r=s(r,8*e.length)),n=0;n<16;n+=1)i[n]=909522486^r[n],c[n]=1549556828^r[n];return o=s(i.concat(l(t)),512+8*t.length),f(s(c.concat(o),640))}(d(e),d(t))}function h(e,t,n){return t?n?g(t,e):u(g(t,e)):n?m(e):u(m(e))}e.exports?e.exports=h:t.md5=h}(h)}));function v(e){if(null!==e&&"object"===t(e))return e.src?p(e.src):e.href?p(e.href):e.innerText&&""!==e.innerText?p(e.innerText):void 0}var y="fa-kits-node-under-test",b="data-fa-detection-timeout",w=function(e){e.preventDefault(),e.stopPropagation()};function x(e){var t=e.fn,n=void 0===t?function(){return!0}:t,o=e.initialDuration,r=void 0===o?1:o,i=e.maxDuration,c=void 0===i?s.FontAwesomeDetection.timeout:i,a=e.showProgress,f=void 0!==a&&a,l=e.progressIndicator;return new Promise((function(e,t){!function o(r,i){setTimeout((function(){var r=n();if(f&&console.info(l),r)e(r);else{var a=250+i;a<=c?o(250,a):t("timeout")}}),r)}(r,0)}))}function A(){var e=Array.from(f.getElementsByTagName("link")).filter((function(e){return!e.hasAttribute("data-fa-detection-ignore")})),t=Array.from(f.getElementsByTagName("style")).filter((function(e){return!e.hasAttribute("data-fa-detection-ignore")&&(!s.FontAwesomeConfig||!e.innerText.match(new RegExp("svg:not\\(:root\\)\\.".concat(s.FontAwesomeConfig.replacementClass))))}));function n(e,t){var n=f.createElement("iframe");n.setAttribute("style","visibility: hidden; position: absolute; height: 0; width: 0;");var o="fa-test-icon-"+t,r=f.createElement("i");r.setAttribute("class","fa fa-coffee"),r.setAttribute("id",o);var i=f.createElement("script");i.setAttribute("id","fa-kits-diag");var c="file://"===s.location.origin?"*":s.location.origin;i.innerText="(".concat(function(e,t,n,o){parent.FontAwesomeDetection.__pollUntil({fn:function(){var e=document.getElementById(t),n=window.getComputedStyle(e).getPropertyValue("font-family");return!(!n.match(/FontAwesome/)&&!n.match(/Font Awesome 5/))}}).then((function(){var t=document.getElementById(e);parent.postMessage({type:"fontawesome-conflict",technology:"webfont",href:t.href,innerText:t.innerText,tagName:t.tagName,md5:n},o)})).catch((function(t){var r=document.getElementById(e);"timeout"===t?parent.postMessage({type:"no-conflict",technology:"webfont",href:r.src,innerText:r.innerText,tagName:r.tagName,md5:n},o):console.error(t)}))}.toString(),")('").concat(y,"', '").concat(o||"foo","', '").concat(t,"', '").concat(c,"');"),n.onload=function(){n.contentWindow.addEventListener("error",w,!0),n.contentDocument.head.appendChild(i),n.contentDocument.head.appendChild(e),n.contentDocument.body.appendChild(r)},g((function(){return f.body.appendChild(n)}))}for(var o={},r=0;r<e.length;r++){var i=f.createElement("link");i.setAttribute("id",y),i.setAttribute("href",e[r].href),i.setAttribute("rel",e[r].rel);var c=v(e[r]);i.setAttribute("data-md5",c),o[c]=e[r],n(i,c)}for(var a=0;a<t.length;a++){var l=f.createElement("style");l.setAttribute("id",y);var u=v(t[a]);l.setAttribute("data-md5",u),l.innerText=t[a].innerText,o[u]=t[a],n(l,u)}return o}function T(e){for(var t=Array.from(f.scripts).filter((function(t){return!t.hasAttribute("data-fa-detection-ignore")&&t!==e})),n={},o=function(e){var o=f.createElement("iframe");o.setAttribute("style","display:none;");var r=f.createElement("script");r.setAttribute("id",y);var i=v(t[e]);r.setAttribute("data-md5",i),n[i]=t[e],""!==t[e].src&&(r.src=t[e].src),""!==t[e].innerText&&(r.innerText=t[e].innerText),r.async=!0;var c=f.createElement("script");c.setAttribute("id","fa-kits-diag");var a="file://"===s.location.origin?"*":s.location.origin;c.innerText="(".concat(function(e,t,n){parent.FontAwesomeDetection.__pollUntil({fn:function(){return!!window.FontAwesomeConfig}}).then((function(){var o=document.getElementById(e);parent.postMessage({type:"fontawesome-conflict",technology:"js",src:o.src,innerText:o.innerText,tagName:o.tagName,md5:t},n)})).catch((function(o){var r=document.getElementById(e);"timeout"===o?parent.postMessage({type:"no-conflict",src:r.src,innerText:r.innerText,tagName:r.tagName,md5:t},n):console.error(o)}))}.toString(),")('").concat(y,"', '").concat(i,"', '").concat(a,"');"),o.onload=function(){o.contentWindow.addEventListener("error",w,!0),o.contentDocument.head.appendChild(c),o.contentDocument.head.appendChild(r)},g((function(){return f.body.appendChild(o)}))},r=0;r<t.length;r++)o(r);return n}function D(e){var t=e.nodesTested,n=e.nodesFound;s.FontAwesomeDetection=s.FontAwesomeDetection||{},s.FontAwesomeDetection.nodesTested=t,s.FontAwesomeDetection.nodesFound=n,s.FontAwesomeDetection.detectionDone=!0}function E(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){},t={conflict:{},noConflict:{}};s.onmessage=function(e){"file://"!==s.location.origin&&e.origin!==s.location.origin||e&&e.data&&("fontawesome-conflict"===e.data.type?t.conflict[e.data.md5]=e.data:"no-conflict"===e.data.type&&(t.noConflict[e.data.md5]=e.data))};var n=T(f.currentScript),r=A(),i=o({},n,r),c=Object.keys(n).length+Object.keys(r).length,a=s.FontAwesomeDetection.timeout+s.FontAwesomeDetection.resultsCollectionMaxWait;console.group("Font Awesome Detector"),0===c?(console.info("%cAll Good!","color: green; font-size: large"),console.info("We didn't find anything that needs testing for conflicts. Ergo, no conflicts.")):(console.info("Testing ".concat(c," possible conflicts.")),console.info("We'll wait about ".concat(Math.round(s.FontAwesomeDetection.timeout/10)/100," seconds while testing these and\n")+"then up to another ".concat(Math.round(s.FontAwesomeDetection.resultsCollectionMaxWait/10)/100," to allow the browser time\n")+"to accumulate the results. But we'll probably be outta here way before then.\n\n"),console.info("You can adjust those durations by assigning values to these attributes on the <script> element that loads this detection:"),console.info("\t%c".concat(b,"%c: milliseconds to wait for each test before deciding whether it's a conflict."),"font-weight: bold;","font-size: normal;"),console.info("\t%c".concat("data-fa-detection-results-collection-max-wait","%c: milliseconds to wait for the browser to accumulate test results before giving up."),"font-weight: bold;","font-size: normal;"),x({maxDuration:a,showProgress:!0,progressIndicator:"waiting...",fn:function(){return Object.keys(t.conflict).length+Object.keys(t.noConflict).length>=c}}).then((function(){console.info("DONE!"),D({nodesTested:t,nodesFound:i}),e({nodesTested:t,nodesFound:i}),console.groupEnd()})).catch((function(n){"timeout"===n?(console.info("TIME OUT! We waited until we got tired. Here's what we found:"),D({nodesTested:t,nodesFound:i}),e({nodesTested:t,nodesFound:i})):(console.info("Whoops! We hit an error:",n),console.info("Here's what we'd found up until that error:"),D({nodesTested:t,nodesFound:i}),e({nodesTested:t,nodesFound:i})),console.groupEnd()})))}var F=s.FontAwesomeDetection||{},C=o({},{report:function(e){var t=e.nodesTested,n=e.nodesFound,o={};for(var r in n)t.conflict[r]||t.noConflict[r]||(o[r]=n[r]);var i=Object.keys(t.conflict).length;if(i>0){console.info("%cConflict".concat(i>1?"s":""," found:"),"color: darkred; font-size: large");var c={};for(var a in t.conflict){var s=t.conflict[a];c[a]={tagName:s.tagName,"src/href":s.src||s.href||"n/a","innerText excerpt":s.innerText&&""!==s.innerText?s.innerText.slice(0,200)+"...":"(empty)"}}console.table(c)}var f=Object.keys(t.noConflict).length;if(f>0){console.info("%cNo conflict".concat(f>1?"s":""," found with ").concat(1==f?"this":"these",":"),"color: green; font-size: large");var l={};for(var u in t.noConflict){var d=t.noConflict[u];l[u]={tagName:d.tagName,"src/href":d.src||d.href||"n/a","innerText excerpt":d.innerText&&""!==d.innerText?d.innerText.slice(0,200)+"...":"(empty)"}}console.table(l)}var m=Object.keys(o).length;if(m>0){console.info("%cLeftovers--we timed out before collecting test results for ".concat(1==m?"this":"these",":"),"color: blue; font-size: large");var g={};for(var h in o){var p=o[h];g[h]={tagName:p.tagName,"src/href":p.src||p.href||"n/a","innerText excerpt":p.innerText&&""!==p.innerText?p.innerText.slice(0,200)+"...":"(empty)"}}console.table(g)}},timeout:+(f.currentScript.getAttribute(b)||"2000"),resultsCollectionMaxWait:+(f.currentScript.getAttribute("data-fa-detection-results-collection-max-wait")||"5000")},F,{__pollUntil:x,md5ForNode:v,detectionDone:!1,nodesTested:null,nodesFound:null});s.FontAwesomeDetection=C;var O=function(){try{return"production"===process.env.NODE_ENV}catch(e){return!1}}();!function(e){try{e()}catch(e){if(!O)throw e}}((function(){l&&u&&E(window.FontAwesomeDetection.report)})),e.conflictDetection=E,Object.defineProperty(e,"__esModule",{value:!0})}));