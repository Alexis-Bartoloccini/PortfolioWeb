"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[720],{3897:function(n,t,e){e.d(t,{y:function(){return c}});var r=e(5671),u=e(3144),a=e(4709),o=0,i=0;var c=function(){function n(){(0,r.Z)(this,n)}return(0,u.Z)(n,[{key:"draw",value:function(n){var t=n.particle,e=n.radius;!function(n,t,e){var r=n.context,u=e.count.numerator*e.count.denominator,c=e.count.numerator/e.count.denominator,l=180*(c-2)/c,s=Math.PI-(0,a.Id)(l);if(r){r.beginPath(),r.translate(t.x,t.y),r.moveTo(o,i);for(var f=0;f<u;f++)r.lineTo(e.length,i),r.translate(e.length,i),r.rotate(s)}}(n,this.getCenter(t,e),this.getSidesData(t,e))}},{key:"getSidesCount",value:function(n){var t,e=n.shapeData;return Math.round((0,a.Gu)(null!==(t=null===e||void 0===e?void 0:e.sides)&&void 0!==t?t:5))}}]),n}()},720:function(n,t,e){e.r(t),e.d(t,{TriangleDrawer:function(){return c}});var r=e(5671),u=e(3144),a=e(136),o=e(2269),i=e(3897),c=function(n){(0,a.Z)(e,n);var t=(0,o.Z)(e);function e(){return(0,r.Z)(this,e),t.apply(this,arguments)}return(0,u.Z)(e,[{key:"getCenter",value:function(n,t){return{x:-t,y:t/1.66}}},{key:"getSidesCount",value:function(){return 3}},{key:"getSidesData",value:function(n,t){return{count:{denominator:2,numerator:3},length:2*t}}}]),e}(i.y)}}]);
//# sourceMappingURL=720.906d9b01.chunk.js.map