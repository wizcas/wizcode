!function(n){var r={};function o(e){if(r[e])return r[e].exports;var t=r[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,o),t.l=!0,t.exports}o.m=n,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=0)}([function(e,t){!function(t,n){var r=n.querySelector("link[rel=next]");if(r){var o=n.querySelector(".post-feed");if(o){var i=300,l=!1,u=!1,c=t.scrollY,s=t.innerHeight,f=n.documentElement.scrollHeight;t.addEventListener("scroll",p,{passive:!0}),t.addEventListener("resize",v),d()}}function a(){if(404===this.status)return t.removeEventListener("scroll",p),void t.removeEventListener("resize",v);this.response.querySelectorAll(".post-card").forEach(function(e){o.appendChild(e)});var e=this.response.querySelector("link[rel=next]");e?r.href=e.href:(t.removeEventListener("scroll",p),t.removeEventListener("resize",v)),f=n.documentElement.scrollHeight,u=l=!1}function e(){if(!u)if(c+s<=f-i)l=!1;else{u=!0;var e=new t.XMLHttpRequest;e.responseType="document",e.addEventListener("load",a),e.open("GET",r.href),e.send(null)}}function d(){l||t.requestAnimationFrame(e),l=!0}function p(){c=t.scrollY,d()}function v(){s=t.innerHeight,f=n.documentElement.scrollHeight,d()}}(window,document)}]);
//# sourceMappingURL=infinitescroll.bundle.js.map