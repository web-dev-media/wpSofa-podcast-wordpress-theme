(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{7:function(e,t,r){var a=r(11),s=r(12);a.addFilter("mediaPlayerObject",(function(e,t){!function(e){if(e){var t=s.get(e.hash+"_episode_liked"),r=e.node.parentNode.querySelector('[class^="icon-star-"]');null===t?r&&r.addEventListener("click",(function(){if(null===s.get(e.hash+"_episode_liked")){var t=new XMLHttpRequest;t.onreadystatechange=function(){4===t.readyState&&(r.innerHTML=t.responseText,r.classList.remove("icon-star-regular"),r.classList.add("icon-star-solid"))},t.open("POST",window.wpsofa.ajax_url),t.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),t.send("action=like_episode&post_id="+e.node.parentNode.dataset.postId),s.update(e.hash+"_episode_liked",!0)}})):(r.classList.remove("icon-star-regular"),r.classList.add("icon-star-solid"))}}(t),e()}),1)},8:function(e,t,r){function a(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}var s=r(11),o=r(12),i=r(20),n=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e);var t={storage_key:"wpsofa-player-storage",currentPos:0,selectors:{player:".player",controls:{startStop:".media-action",progressBar:".progress",progressBarStatus:".progress .status",duration:".status"}}};s.doFilter("mediaPlayerOptions",t).then((function(e){return t})),this.options=t,this.players=[],o.options.cacheTime=-1,this.collectPlayers(),this.players.length>0&&this.addEvents()}var t,r,n;return t=e,(r=[{key:"collectPlayers",value:function(){var e=this;if(e.options.selectors){var t=e.options.selectors.player;if(t){var r=document.querySelectorAll(t);[].forEach.call(r,(function(r){var a={},o={},n=r.querySelector("audio"),u=n.querySelectorAll("source");if(u){for(t in[].forEach.call(u,(function(e){var t=e.getAttribute("type");o[t]=e.getAttribute("src")})),e.options.selectors.controls)a[t]=r.querySelector(e.options.selectors.controls[t]);a.currentTime=r.querySelector(".current-time");var c={node:r,audio:n,controls:a,sources:o,sourcesNodes:u,hash:i(o)};s.doFilter("mediaPlayerObject",c).then((function(e){return c})),e.players.push(c),console.log(e)}}))}}}},{key:"addEvents",value:function(){var e=this;this.players&&this.players.forEach((function(t){o.update(t.hash+"_isPlaying",!1),["play","pause","timeupdate"].map((function(r){t.audio.addEventListener(r,(function(a){return e[r](t)}))})),t.controls.startStop.addEventListener("click",(function(r){return e.playStop(r.currentTarget,t)})),t.controls.progressBar.addEventListener("click",(function(r){return e.seek(r,t)})),e.timeupdate(t)}))}},{key:"playStop",value:function(e,t){var r=e.querySelector("div"),a="play",s="pause";r.classList.contains(a)?(r.classList.remove(a),r.classList.add(s),e.classList.remove(a),e.classList.add(s),t.audio.play(),t.audio.currentTime=o.get(t.hash+"_currentTime"),o.update(t.hash+"_isPlaying",!0)):(r.classList.remove(s),r.classList.add(a),e.classList.remove(s),e.classList.add(a),t.audio.pause(),o.update(t.hash+"_isPlaying",!1))}},{key:"play",value:function(e){this.playerTimeUpdater(e)}},{key:"pause",value:function(e){this.playerTimeUpdater(e)}},{key:"timeupdate",value:function(e){var t=e.audio.currentTime?e.audio.currentTime:o.get(e.hash+"_currentTime"),r=e.audio.duration?e.audio.duration:o.get(e.hash+"_duration");if(t){var a=e.controls.currentTime,s=Math.floor(100/r*t);e.controls.progressBarStatus.style.width=s+"%",a.dataset.progress=s>85?"85":s>70?"70":s>45?"45":s>15?"15":"0",!0===o.get(e.hash+"_isPlaying")&&null!=r&&(o.update(e.hash+"_currentTime",e.audio.currentTime),o.update(e.hash+"_duration",e.audio.duration)),[].forEach.call(e.sourcesNodes,(function(e){var r=e.getAttribute("src");e.setAttribute("src",r.split("#")[0]+"#t="+t)})),this.playerTimeUpdater(e)}}},{key:"playerTimeUpdater",value:function(e){var t=e.controls.currentTime,r=e.audio.currentTime?e.audio.currentTime:o.get(e.hash+"_currentTime");r&&(t.innerText=this.formatSecondsAsTime(r))}},{key:"formatSecondsAsTime",value:function(e){var t=Math.floor(e/3600),r=Math.floor((e-3600*t)/60),a=Math.floor(e-3600*t-60*r);return r<10&&(r="0"+r),a<10&&(a="0"+a),t<10&&(t="0"+t),t+":"+r+":"+a}},{key:"seek",value:function(e,t){var r=e.offsetX/t.node.offsetWidth;t.audio.currentTime=r*t.audio.duration,o.update(t.hash+"_currentTime",t.audio.currentTime),o.update(t.hash+"_duration",t.audio.duration),this.timeupdate(t)}}])&&a(t.prototype,r),n&&a(t,n),e}();e.exports=n}}]);