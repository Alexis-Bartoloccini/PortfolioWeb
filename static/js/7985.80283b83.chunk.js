"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[7985],{7985:function(i,n,t){t.r(n),t.d(n,{Linker:function(){return k}});var e=t(7762),s=t(5671),r=t(3144),a=t(136),o=t(2269),l=t(4709),c=t(1413),u=t(1752),h=t(1120),v=function(i){(0,a.Z)(t,i);var n=(0,o.Z)(t);function t(i,e,r,a){var o;return(0,s.Z)(this,t),(o=n.call(this,i,e,r)).canvasSize=a,o.canvasSize=(0,c.Z)({},a),o}return(0,r.Z)(t,[{key:"contains",value:function(i){var n=this.canvasSize,e=n.width,s=n.height,r=i.x,a=i.y;return(0,u.Z)((0,h.Z)(t.prototype),"contains",this).call(this,i)||(0,u.Z)((0,h.Z)(t.prototype),"contains",this).call(this,{x:r-e,y:a})||(0,u.Z)((0,h.Z)(t.prototype),"contains",this).call(this,{x:r-e,y:a-s})||(0,u.Z)((0,h.Z)(t.prototype),"contains",this).call(this,{x:r,y:a-s})}},{key:"intersects",value:function(i){if((0,u.Z)((0,h.Z)(t.prototype),"intersects",this).call(this,i))return!0;var n=i,e=i,s={x:i.position.x-this.canvasSize.width,y:i.position.y-this.canvasSize.height};if(void 0!==e.radius){var r=new l.Cd(s.x,s.y,2*e.radius);return(0,u.Z)((0,h.Z)(t.prototype),"intersects",this).call(this,r)}if(void 0!==n.size){var a=new l.Ae(s.x,s.y,2*n.size.width,2*n.size.height);return(0,u.Z)((0,h.Z)(t.prototype),"intersects",this).call(this,a)}return!1}}]),t}(l.Cd),p=t(3419),y=0,d=0;var k=function(i){(0,a.Z)(t,i);var n=(0,o.Z)(t);function t(i){var e;return(0,s.Z)(this,t),(e=n.call(this,i))._setColor=function(i){if(i.options.links){var n=e.linkContainer,t=i.options.links,s=void 0===t.id?n.particles.linksColor:n.particles.linksColors.get(t.id);if(!s){var r=t.color;s=(0,l.Dt)(r,t.blink,t.consent),void 0===t.id?n.particles.linksColor=s:n.particles.linksColors.set(t.id,s)}}},e.linkContainer=i,e}return(0,r.Z)(t,[{key:"clear",value:function(){}},{key:"init",value:function(){this.linkContainer.particles.linksColor=void 0,this.linkContainer.particles.linksColors=new Map}},{key:"interact",value:function(i){var n,t=this;if(i.options.links){i.links=[];var s=i.getPosition(),r=this.container,a=r.canvas.size;if(!(s.x<y||s.y<d||s.x>a.width||s.y>a.height)){var o,c=i.options.links,u=c.opacity,h=null!==(n=i.retina.linksDistance)&&void 0!==n?n:0,p=c.warp;o=p?new v(s.x,s.y,h,a):new l.Cd(s.x,s.y,h);var k,f=r.particles.quadTree.query(o),Z=(0,e.Z)(f);try{var w=function(){var n=k.value,e=n.options.links;if(i===n||null===e||void 0===e||!e.enable||c.id!==e.id||n.spawning||n.destroyed||!n.links||i.links.some((function(i){return i.destination===n}))||n.links.some((function(n){return n.destination===i})))return 0;var r=n.getPosition();if(r.x<y||r.y<d||r.x>a.width||r.y>a.height)return 0;var o=function(i,n,t,e,s){var r=(0,l.oW)(i,n),a=r.dx,o=r.dy,c=r.distance;if(!s||c<=t)return c;var u={x:Math.abs(a),y:Math.abs(o)},h={x:Math.min(u.x,e.width-u.x),y:Math.min(u.y,e.height-u.y)};return Math.sqrt(Math.pow(h.x,2)+Math.pow(h.y,2))}(s,r,h,a,p&&e.warp);if(o>h)return 0;var v=(1-o/h)*u;t._setColor(i),i.links.push({destination:n,opacity:v})};for(Z.s();!(k=Z.n()).done;)w()}catch(x){Z.e(x)}finally{Z.f()}}}}},{key:"isEnabled",value:function(i){var n;return!(null===(n=i.options.links)||void 0===n||!n.enable)}},{key:"loadParticlesOptions",value:function(i){i.links||(i.links=new p.y);for(var n=arguments.length,t=new Array(n>1?n-1:0),e=1;e<n;e++)t[e-1]=arguments[e];for(var s=0,r=t;s<r.length;s++){var a=r[s];i.links.load(null===a||void 0===a?void 0:a.links)}}},{key:"reset",value:function(){}}]),t}(l.$S)}}]);
//# sourceMappingURL=7985.80283b83.chunk.js.map