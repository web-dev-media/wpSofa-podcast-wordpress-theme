!function(e){function t(t){for(var o,r,i=t[0],s=t[1],a=0,l=[];a<i.length;a++)r=i[a],Object.prototype.hasOwnProperty.call(n,r)&&n[r]&&l.push(n[r][0]),n[r]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o]);for(u&&u(t);l.length;)l.shift()()}var o={},n={0:0};function r(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.e=function(e){var t=[],o=n[e];if(0!==o)if(o)t.push(o[2]);else{var i=new Promise((function(t,r){o=n[e]=[t,r]}));t.push(o[2]=i);var s,a=document.createElement("script");a.charset="utf-8",a.timeout=120,r.nc&&a.setAttribute("nonce",r.nc),a.src=function(e){return r.p+""+({4:"styles-scss"}[e]||e)+".chunk.js"}(e);var u=new Error;s=function(t){a.onerror=a.onload=null,clearTimeout(l);var o=n[e];if(0!==o){if(o){var r=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+r+": "+i+")",u.name="ChunkLoadError",u.type=r,u.request=i,o[1](u)}n[e]=void 0}};var l=setTimeout((function(){s({type:"timeout",target:a})}),12e4);a.onerror=a.onload=s,document.head.appendChild(a)}return Promise.all(t)},r.m=e,r.c=o,r.d=function(e,t,o){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(o,n,function(t){return e[t]}.bind(null,n));return o},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="https://wp-sofa.de/wp-content/themes/wpsofa-theme/assets/dist/",r.oe=function(e){throw console.error(e),e};var i=window.webpackJsonp=window.webpackJsonp||[],s=i.push.bind(i);i.push=t,i=i.slice();for(var a=0;a<i.length;a++)t(i[a]);var u=s;r(r.s=0)}([function(e,t,o){o(1),e.exports=o(2)},function(e,t,o){o.e(4).then(o.t.bind(null,4,7)),o.e(4).then(o.t.bind(null,5,7)),console.log("helper")},function(e,t){window.observeElements=function(e,t,o){var n={loop:(o=o||{}).loop||!1,ratio:o.ratio||0};if(e){var r=new IntersectionObserver((function(e){for(var o in e)if(e){var i=e[o],s=e[o].target;void 0===i.isVisible&&(i.isVisible=!0),(i.isIntersecting&&i.isVisible||i.intersectionRatio>n.ratio)&&(t(s,i),!1===n.loop&&r.unobserve(s))}}),{ratio:n.ratio});NodeList.prototype.isPrototypeOf(e)?e.forEach((function(e){r.observe(e)})):r.observe(e)}else console.warn("Call of fireOnVisible without any Node or NodeList will be ignored.")}}]);