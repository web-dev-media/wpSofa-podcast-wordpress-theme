(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{7:function(e,o,t){function r(e,o){for(var t=0;t<o.length;t++){var r=o[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var s=t(18),a=t(19),n=function(){function e(){!function(e,o){if(!(e instanceof o))throw new TypeError("Cannot call a class as a function")}(this,e),this.options={storage_key:"wpsofa-player-storage",currentPos:0,selectors:{player:".player",controls:{startStop:".media-action",progressBar:".progress",duration:".status"}}},this.players=[],s.options.cacheTime=-1,this.collectPlayers(),this.players.length>0&&this.addEvents(),console.log({localstorage:s,players:this.players})}var o,t,n;return o=e,(t=[{key:"collectPlayers",value:function(){var e=this;if(e.options.selectors){var o=e.options.selectors.player;if(o){var t=document.querySelectorAll(o);[].forEach.call(t,(function(t){var r={},s={},n=t.querySelector("audio"),l=t.querySelectorAll("source");if(l&&n){for(o in[].forEach.call(l,(function(e){var o=e.getAttribute("type");s[o]=e.getAttribute("src")})),e.options.selectors.controls)r[o]=t.querySelector(e.options.selectors.controls[o]);e.players.push({node:t,audio:n,controls:r,sources:s,hash:a(s)})}}))}}}},{key:"addEvents",value:function(){var e=this;this.players&&this.players.forEach((function(o){["play","pause","progress","timeupdate","loadeddata"].map((function(e){})),o.controls.startStop.addEventListener("click",(function(t){return e.playStop(t,o)}))}))}},{key:"playStop",value:function(e,o){console.log({playStopElem:e,player:o})}}])&&r(o.prototype,t),n&&r(o,n),e}();e.exports=n},8:function(e,o){}}]);
//# sourceMappingURL=player-js.chunk.js.map