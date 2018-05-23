/*!
 * fullscreen-polyfill
 * 1.0.1 - 5/23/2018
 * https://github.com/nguyenj/fullscreen-polyfill#readme
 * (c) John Nguyen; MIT License
 */
var FullscreenPolyfill=function(){"use strict";var t=["fullscreen","fullscreenEnabled","fullscreenElement","fullscreenchange","fullscreenerror","exitFullscreen","requestFullscreen"],e=["webkitIsFullScreen","webkitFullscreenEnabled","webkitFullscreenElement","webkitfullscreenchange","webkitfullscreenerror","webkitExitFullscreen","webkitRequestFullscreen"],n=["mozFullScreen","mozFullScreenEnabled","mozFullScreenElement","mozfullscreenchange","mozfullscreenerror","mozCancelFullScreen","mozRequestFullScreen"],u=["","msFullscreenEnabled","msFullscreenElement","MSFullscreenChange","MSFullscreenError","msExitFullscreen","msRequestFullscreen"];document||(document={});var l,c=(l=[t[1],e[1],n[1],u[1]].find(function(e){return document[e]}),[t,e,n,u].find(function(e){return e.find(function(e){return e===l})})||[]);function r(e,n){document[t[0]]=document[c[0]]||!!document[c[2]]||!1,document[t[1]]=document[c[1]],document[t[2]]=document[c[2]],document.dispatchEvent(new Event(e),n.target)}return document[t[1]]?{}:(document[t[0]]=document[c[0]]||!!document[c[2]]||!1,document[t[1]]=document[c[1]],document[t[2]]=document[c[2]],document.addEventListener(c[3],r.bind(document,t[3]),!1),document.addEventListener(c[4],r.bind(document,t[4]),!1),document[t[5]]=function(){return document[c[5]]()},void(Element.prototype[t[6]]=function(){return this[c[6]].apply(this,arguments)}))}();
//# sourceMappingURL=fullscreen.polyfill.js.map
