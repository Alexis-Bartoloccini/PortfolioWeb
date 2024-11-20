"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[7294],{7294:function(i,e,a){a.r(e),a.d(e,{BaseMover:function(){return l}});var n=a(5671),t=a(3144),o=a(4709),r=1;function s(i,e,a,n,t,s){!function(i,e){var a,n=i.options,t=n.move.path;if(!t.enable)return;if(i.lastPathTime<=i.pathDelay)return void(i.lastPathTime+=e.value);var s=null===(a=i.pathGenerator)||void 0===a?void 0:a.generate(i,e);s&&i.velocity.addTo(s);t.clamp&&(i.velocity.x=(0,o.uZ)(i.velocity.x,-r,r),i.velocity.y=(0,o.uZ)(i.velocity.y,-r,r));i.lastPathTime-=i.pathDelay}(i,s);var l=i.gravity,c=null!==l&&void 0!==l&&l.enable&&l.inverse?-r:r;t&&a&&(i.velocity.x+=t*s.factor/(60*a)),null!==l&&void 0!==l&&l.enable&&a&&(i.velocity.y+=c*(l.acceleration*s.factor)/(60*a));var v=i.moveDecay;i.velocity.multTo(v);var p=i.velocity.mult(a);null!==l&&void 0!==l&&l.enable&&n>0&&(!l.inverse&&p.y>=0&&p.y>=n||l.inverse&&p.y<=0&&p.y<=-n)&&(p.y=c*n,a&&(i.velocity.y=p.y/a));var y=i.options.zIndex,u=Math.pow(r-i.zIndexFactor,y.velocityRate);p.multTo(u);var d=i.position;d.addTo(p),e.vibrate&&(d.x+=Math.sin(d.x*Math.cos(d.y)),d.y+=Math.cos(d.y*Math.sin(d.x)))}var l=function(){function i(){(0,n.Z)(this,i)}return(0,t.Z)(i,[{key:"init",value:function(i){var e=i.options.move.gravity;i.gravity={enable:e.enable,acceleration:(0,o.Gu)(e.acceleration),inverse:e.inverse},function(i){var e,a=i.container,n=i.options.move.spin;if(n.enable){var t=null!==(e=n.position)&&void 0!==e?e:{x:50,y:50},r={x:.01*t.x*a.canvas.size.width,y:.01*t.y*a.canvas.size.height},s=i.getPosition(),l=(0,o.Sp)(s,r),c=(0,o.Gu)(n.acceleration);i.retina.spinAcceleration=c*a.retina.pixelRatio,i.spin={center:r,direction:i.velocity.x>=0?"clockwise":"counter-clockwise",angle:i.velocity.angle,radius:l,acceleration:i.retina.spinAcceleration}}}(i)}},{key:"isEnabled",value:function(i){return!i.destroyed&&i.options.move.enable}},{key:"move",value:function(i,e){var a,n,t,l,c,v=i.options,p=v.move;if(p.enable){var y=i.container,u=y.retina.pixelRatio;null!==(n=(a=i.retina).moveSpeed)&&void 0!==n||(a.moveSpeed=(0,o.Gu)(p.speed)*u),null!==(l=(t=i.retina).moveDrift)&&void 0!==l||(t.moveDrift=(0,o.Gu)(i.options.move.drift)*u);var d=function(i){return i.slow.inRange?i.slow.factor:r}(i),x=i.retina.moveSpeed*y.retina.reduceFactor,f=i.retina.moveDrift,m=(0,o.KI)(v.size.value)*u,h=x*(p.size?i.getRadius()/m:1)*d*(e.factor||1)/2,b=null!==(c=i.retina.maxSpeed)&&void 0!==c?c:y.retina.maxSpeed;p.spin.enable?function(i,e){var a=i.container;if(i.spin){var n={x:"clockwise"===i.spin.direction?Math.cos:Math.sin,y:"clockwise"===i.spin.direction?Math.sin:Math.cos};i.position.x=i.spin.center.x+i.spin.radius*n.x(i.spin.angle),i.position.y=i.spin.center.y+i.spin.radius*n.y(i.spin.angle),i.spin.radius+=i.spin.acceleration;var t=Math.max(a.canvas.size.width,a.canvas.size.height),o=.5*t;i.spin.radius>o?(i.spin.radius=o,i.spin.acceleration*=-r):i.spin.radius<0&&(i.spin.radius=0,i.spin.acceleration*=-r),i.spin.angle+=.01*e*(r-i.spin.radius/t)}}(i,h):s(i,p,h,b,f,e),function(i){var e,a,n=i.initialPosition,t=(0,o.oW)(n,i.position),r=t.dx,s=t.dy,l=Math.abs(r),c=Math.abs(s),v=i.retina.maxDistance,p=v.horizontal,y=v.vertical;if(p||y){var u=null!==(a=y&&c>=y)&&void 0!==a&&a;if((null!==(e=p&&l>=p)&&void 0!==e&&e||u)&&!i.misplaced)i.misplaced=!!p&&l>p||!!y&&c>y,p&&(i.velocity.x=.5*i.velocity.y-i.velocity.x),y&&(i.velocity.y=.5*i.velocity.x-i.velocity.y);else if((!p||l<p)&&(!y||c<y)&&i.misplaced)i.misplaced=!1;else if(i.misplaced){var d=i.position,x=i.velocity;p&&(d.x<n.x&&x.x<0||d.x>n.x&&x.x>0)&&(x.x*=-(0,o.sZ)()),y&&(d.y<n.y&&x.y<0||d.y>n.y&&x.y>0)&&(x.y*=-(0,o.sZ)())}}}(i)}}}]),i}()}}]);
//# sourceMappingURL=7294.c4ec56a3.chunk.js.map