export function startReveal(canvas, host, sources, onReady, onAutoChange) {
  const ctx=canvas.getContext('2d',{alpha:true}),mask=document.createElement('canvas'),m=mask.getContext('2d');
  const angel=new Image(),devil=new Image();
  let width=0,height=0,ratio=1,raf=0,previous=null,disposed=false,loaded=0,points=[];
  const brush=document.createElement('canvas');brush.width=brush.height=256;const bc=brush.getContext('2d'),bg=bc.createRadialGradient(128,128,114,128,128,128);bg.addColorStop(0,'#fff');bg.addColorStop(.6,'#fff');bg.addColorStop(1,'rgba(255,255,255,0)');bc.fillStyle=bg;bc.fillRect(0,0,256,256);
  let auto=new URLSearchParams(location.search).has('demo'),autoStart=performance.now();
  const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
  function resize(){const b=host.getBoundingClientRect();width=b.width;height=b.height;ratio=Math.min(devicePixelRatio||1,1.5);canvas.width=mask.width=Math.round(width*ratio);canvas.height=mask.height=Math.round(height*ratio);ctx.setTransform(ratio,0,0,ratio,0,0);m.setTransform(ratio,0,0,ratio,0,0);previous=null;points=[];wake();}
  function add(x,y){points.push({x,y,t:performance.now()});}
  function paint(x,y){if(previous){const dx=x-previous.x,dy=y-previous.y,n=Math.min(100,Math.max(1,Math.ceil(Math.hypot(dx,dy)/12)));for(let i=1;i<=n;i++)add(previous.x+dx*i/n,previous.y+dy*i/n);}else add(x,y);previous={x,y};if(points.length>420)points.splice(0,points.length-420);wake();}
  function move(e){if(e.target.closest('button,a,dialog,input,textarea')){previous=null;return;}const b=host.getBoundingClientRect();paint(e.clientX-b.left,e.clientY-b.top);host.style.setProperty('--pointer-x',(e.clientX-b.left)+'px');host.style.setProperty('--pointer-y',(e.clientY-b.top)+'px');host.dataset.pointer='true';}
  function leave(){previous=null;delete host.dataset.pointer;}
  function wake(){if(!raf&&!disposed)raf=requestAnimationFrame(frame);}
  function frame(t){raf=0;if(disposed||loaded<2)return;m.clearRect(0,0,width,height);
    if(auto){const s=(t-autoStart)/1000;paint(width*(.5+.205*Math.sin(s*1.6)),height*(.47-.29*Math.cos(s*1.4)));}
    const life=reduced?850:1750;points=points.filter(p=>t-p.t<life);for(const p of points){const age=Math.max(0,(t-p.t-140)/(life-140)),r=Math.max(42,Math.min(124,height*.092))*(1-age*age*(3-2*age));if(r>1)m.drawImage(brush,p.x-r,p.y-r,r*2,r*2);}
    const scale=Math.min(width/devil.width,height/devil.height),iw=devil.width*scale,ih=devil.height*scale,x=(width-iw)/2,y=height-ih;
    ctx.clearRect(0,0,width,height);ctx.drawImage(angel,x,y,iw,ih);ctx.globalCompositeOperation='destination-out';ctx.drawImage(mask,0,0,width,height);ctx.globalCompositeOperation='source-over';m.globalCompositeOperation='source-in';m.drawImage(devil,x,y,iw,ih);m.globalCompositeOperation='source-over';ctx.globalCompositeOperation='lighter';ctx.drawImage(mask,0,0,width,height);ctx.globalCompositeOperation='source-over';if(auto||points.length)wake();}
  function ready(){if(++loaded===2){resize();onReady?.();}}
  angel.onload=ready;devil.onload=ready;angel.src=sources.angel;devil.src=sources.devil;
  const observer=new ResizeObserver(resize);observer.observe(host);const area=host.closest('main');area.addEventListener('pointermove',move);area.addEventListener('pointerleave',leave);
  function clear(){m.clearRect(0,0,width,height);ctx.clearRect(0,0,width,height);previous=null;points=[];wake();}
  function key(e){if(e.target.matches('input,textarea'))return;if(e.code==='Space'&&!document.querySelector('dialog[open]')){e.preventDefault();auto=!auto;onAutoChange?.(auto);autoStart=performance.now();previous=null;wake();}if(e.key==='Escape'){auto=false;onAutoChange?.(false);clear();}}
  window.addEventListener('keydown',key);const api={clear,toggle(){auto=!auto;autoStart=performance.now();previous=null;wake();return auto;},setAuto(v){auto=v;autoStart=performance.now();previous=null;wake();},paint,angel,devil};window.dualityPreview=api;
  return ()=>{disposed=true;cancelAnimationFrame(raf);observer.disconnect();area.removeEventListener('pointermove',move);area.removeEventListener('pointerleave',leave);window.removeEventListener('keydown',key);if(window.dualityPreview===api)delete window.dualityPreview;};
}
