!function(e){function t(t){for(var n,r,i=t[0],s=t[1],u=0,l=[];u<i.length;u++)r=i[u],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&l.push(o[r][0]),o[r]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);for(a&&a(t);l.length;)l.shift()()}var n={},o={0:0};function r(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.e=function(e){var t=[],n=o[e];if(0!==n)if(n)t.push(n[2]);else{var i=new Promise((function(t,r){n=o[e]=[t,r]}));t.push(n[2]=i);var s,u=document.createElement("script");u.charset="utf-8",u.timeout=120,r.nc&&u.setAttribute("nonce",r.nc),u.src=function(e){return r.p+""+({4:"styles-scss"}[e]||e)+".chunk.js"}(e);var a=new Error;s=function(t){u.onerror=u.onload=null,clearTimeout(l);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;a.message="Loading chunk "+e+" failed.\n("+r+": "+i+")",a.name="ChunkLoadError",a.type=r,a.request=i,n[1](a)}o[e]=void 0}};var l=setTimeout((function(){s({type:"timeout",target:u})}),12e4);u.onerror=u.onload=s,document.head.appendChild(u)}return Promise.all(t)},r.m=e,r.c=n,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="wp-content\\themes\\wpsofa-theme/assets/dist/",r.oe=function(e){throw console.error(e),e};var i=window.webpackJsonp=window.webpackJsonp||[],s=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var a=s;r(r.s=0)}([function(e,t,n){n(1),e.exports=n(2)},function(e,t,n){n.e(4).then(n.t.bind(null,4,7)),n.e(4).then(n.t.bind(null,5,7)),console.log("helper")},function(e,t){window.observeElements=function(e,t,n){var o={loop:(n=n||{}).loop||!1,ratio:n.ratio||0};if(e){var r=new IntersectionObserver((function(e){for(var n in e)if(e){var i=e[n],s=e[n].target;void 0===i.isVisible&&(i.isVisible=!0),(i.isIntersecting&&i.isVisible||i.intersectionRatio>o.ratio)&&(t(s,i),!1===o.loop&&r.unobserve(s))}}),{ratio:o.ratio});NodeList.prototype.isPrototypeOf(e)?e.forEach((function(e){r.observe(e)})):r.observe(e)}else console.warn("Call of fireOnVisible without any Node or NodeList will be ignored.")}}]);
//# sourceMappingURL=coreBundle.bundle.df3fc225ffd98e4a2b84.js.map