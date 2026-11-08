// Ambient treatment is independent of portrait registration and the reveal mask.
export function startAtmosphere(canvas, host, sources){
 const c=canvas.getContext('2d'),feather=new Image();feather.src=sources.feather||'assets/feather-v2.webp';
 let w=1,h=1,raf=0,last=0,clock=0,embers=[],emit=0,disposed=false,rect;
 const calm=matchMedia('(prefers-reduced-motion: reduce)').matches;
 const rand=n=>{const v=Math.sin(n*127.1+43.7)*43758.5453;return v-Math.floor(v);};
 const mod=(v,n)=>(v%n+n)%n;
 function resize(){w=innerWidth;h=innerHeight;const d=Math.min(1,960/w);canvas.width=Math.round(w*d);canvas.height=Math.round(h*d);c.setTransform(d,0,0,d,0,0);rect=host.getBoundingClientRect();}
 function glow(x,y,r,color,alpha){c.save();c.globalAlpha=alpha;const g=c.createRadialGradient(x,y,0,x,y,r);g.addColorStop(0,color+'a0');g.addColorStop(.2,color+'50');g.addColorStop(1,color+'00');c.fillStyle=g;c.fillRect(x-r,y-r,r*2,r*2);c.restore();}
 function frame(now){if(disposed)return;raf=requestAnimationFrame(frame);if(now-last<33)return;const dt=Math.min(.06,(now-(last||now))/1000);last=now;if(!document.hidden)clock+=dt;const t=calm?0:clock;c.clearRect(0,0,w,h);
  const pw=Math.min(rect.width,rect.height*.75),cx=w*.5,top=rect.top;
  // Light belongs to the halo and upper wings; delicate depth, not random confetti.
  c.save();c.globalCompositeOperation='screen';glow(cx,top+rect.height*.077,pw*.28,'#ffe9b3',.32+Math.sin(t*1.25)*.08);c.restore();
  for(let i=0;i<(w<600?22:42);i++){const seed=rand(i+4),x=cx+(seed-.5)*pw*1.5+Math.sin(t*.32+i)*16,y=mod(rand(i+8)*h-t*(9+seed*13),h);if(y<h*.16||y>h*.93)continue;const pulse=.22+.6*Math.pow((Math.sin(t*1.3+i*2.9)+1)/2,3);glow(x,y,7+seed*7,'#fff2c5',pulse*.75);c.save();c.globalAlpha=pulse;c.fillStyle='#fff9df';c.beginPath();c.arc(x,y,.8+seed*.8,0,Math.PI*2);c.fill();if(i%7===0){c.strokeStyle='#fffcf0';c.lineWidth=.65;c.beginPath();c.moveTo(x-4,y);c.lineTo(x+4,y);c.moveTo(x,y-6);c.lineTo(x,y+6);c.stroke();}c.restore();}
  if(feather.complete&&feather.naturalWidth)for(let i=0;i<(w<600?3:6);i++){const s=rand(i+70),side=i%2?1:-1,x=cx+side*pw*(.3+s*.35)+Math.sin(t*.35+i)*26,y=mod(rand(i+20)*h+t*(13+s*10),h*1.15)-h*.1,size=(w<600?20:28)+s*20;c.save();c.translate(x,y);c.rotate(Math.sin(t*.35+i)*.65+i);c.scale(.55+.45*Math.abs(Math.cos(t*.3+i)),1);c.globalAlpha=.38+s*.32;c.drawImage(feather,-size/2,-size/2,size,size);c.restore();}
  const fx=window.dualityPreview?.fx;
  const marks=(fx?.marks||[]).filter(p=>now-p.time<850);if(marks.length&&!calm){emit+=dt;while(emit>.025){emit-=.025;const n=embers.length+now,p=marks[Math.floor(rand(n+12)*marks.length)];embers.push({x:rect.left+p.x+(rand(n)-.5)*32,y:rect.top+p.y+(rand(n+4)-.5)*45,vx:(rand(n+3)-.5)*38,vy:-(25+rand(n+7)*65),life:1.2+rand(n+6)*.8,age:0,size:1+rand(n+9)*1.5});}}
  if(embers.length>90)embers.splice(0,embers.length-90);embers=embers.filter(e=>e.age<e.life);
  c.save();c.globalCompositeOperation='screen';for(const e of embers){e.age+=dt;e.x+=e.vx*dt;e.y+=e.vy*dt;const a=Math.sin(Math.PI*e.age/e.life);glow(e.x,e.y,e.size*9,'#ff4b23',a*.95);c.globalAlpha=a;c.fillStyle='#ffbc76';c.beginPath();c.ellipse(e.x,e.y,e.size*.6,e.size*1.7,.3,0,Math.PI*2);c.fill();}c.restore();
 }
 const observer=new ResizeObserver(resize);observer.observe(host);resize();raf=requestAnimationFrame(frame);
 return ()=>{disposed=true;cancelAnimationFrame(raf);observer.disconnect();};
}
