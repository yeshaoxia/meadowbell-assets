/* SeamSites Motion II: independent alpha character layer, weighted 2D joints,
   stationary stage, two advected noise volumes, and pointer force fields. */
(()=>{'use strict';
const root=document.querySelector('#experience'),canvas=document.querySelector('#world'),fx=document.querySelector('#atmosphere'),ctx=fx.getContext('2d');
const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
let W=innerWidth,H=innerHeight,DPR=1,time=0,last=0,paused=reduced,selection='duo',focus=0,targetFocus=0,ready=false,actionR=-20,actionK=-20,flash=-20;
let mouse=[.5,.5],eased=[.5,.5],velocity=[0,0],hover=[0,0],targetHover=[0,0],inside=false;const impulses=[];
const gl=canvas.getContext('webgl',{alpha:false,antialias:false,preserveDrawingBuffer:true});let material,fog,quad,mesh,meshCount,textures=[],images=[];
const vertex=`precision highp float;attribute vec2 point;varying highp vec2 uv;uniform highp vec2 resolution;uniform highp vec2 pointer;uniform highp vec2 hover;uniform highp float time;uniform highp float layer;uniform highp float focus;uniform highp vec2 action;
float bell(vec2 p,vec2 c,vec2 r){vec2 v=(p-c)/r;return exp(-dot(v,v)*2.);}
vec2 turn(vec2 p,vec2 pivot,float a){vec2 v=(p-pivot)*vec2(1.7768,1.);return pivot+vec2(cos(a)*v.x-sin(a)*v.y,sin(a)*v.x+cos(a)*v.y)/vec2(1.7768,1.);}
void main(){uv=point;vec2 p=point;
if(layer>.5){float ranger=1.-smoothstep(.739,.755,point.x);float knight=1.-ranger;
// Explicit local joint masks, all operating on alpha foreground geometry.
float rh=(1.-smoothstep(.335,.37,point.y))*smoothstep(.58,.60,point.x)*(1.-smoothstep(.655,.675,point.x))*ranger;
float kh=(1.-smoothstep(.115,.158,point.y))*smoothstep(.79,.807,point.x)*(1.-smoothstep(.856,.87,point.x))*knight;
float rTurn=.065*sin(time*.75)+pointer.x*.055+action.x*.115+hover.x*.05;
p=mix(p,turn(p,vec2(.625,.358),rTurn),rh);
p=mix(p,turn(p,vec2(.833,.145),-.045*sin(time*.67+.7)+pointer.x*.035-action.y*.08),kh);
float wrist=bell(point,vec2(.554,.452),vec2(.033,.072))*ranger;
float rArm=-(.14+.11*sin(time*1.13)+.50*action.x+.12*hover.x);
p=mix(p,turn(p,vec2(.543,.401),rArm),wrist);
float forearm=smoothstep(.235,.285,point.y)*(1.-smoothstep(.45,.488,point.y))*(1.-smoothstep(.778,.794,point.x))*smoothstep(.719,.737,point.x)*knight;
float kArm=-.18-.16*sin(time*.9)-.82*action.y-.18*hover.y;
p=mix(p,turn(p,vec2(.752,.289),kArm),forearm);
float shoulder=bell(point,vec2(.767,.22),vec2(.032,.06))*knight;
p=mix(p,turn(p,vec2(.779,.172),-.07*sin(time*.9)-.16*action.y),shoulder);
float chest=bell(point,vec2(.625,.438),vec2(.085,.13))*ranger+bell(point,vec2(.834,.28),vec2(.07,.16))*knight;
p.y-=chest*(.0045*sin(time*1.9)+.002*action.x);
float cape=smoothstep(.60,.68,point.x)*(1.-smoothstep(.73,.751,point.x))*smoothstep(.44,.60,point.y)*ranger;
p.x+=cape*(.008*sin(time*1.4+point.y*13.)+.004*sin(time*2.6+point.y*17.)+pointer.x*.004);
float cloth=bell(point,vec2(.827,.64),vec2(.042,.13))*knight;p.x+=cloth*(.006*sin(time*1.35+point.y*10.)+.006*action.y);
float weight=knight*(1.-smoothstep(.62,.80,point.y));p.x+=weight*(.0035*sin(time*.77)+.003*action.y);
}
float ratio=resolution.x/resolution.y;float ar=1.7768;vec2 crop=ratio>ar?vec2(1.,ar/ratio):vec2(ratio/ar,1.);vec2 anchor=vec2(ratio<.9?.73:.5,.5);
float zoom=1.+abs(focus)*.025+.004*sin(time*.35);p=(p-vec2(.72,.52))*zoom+vec2(.72,.52);p.x-=focus*.006;p+=pointer*vec2(layer>.5?.004:.0018,layer>.5?.0023:.0011);
vec2 screen=(p-anchor)/crop+.5;gl_Position=vec4(screen.x*2.-1.,1.-screen.y*2.,0.,1.);}`;
const fragment=`precision highp float;varying highp vec2 uv;uniform sampler2D image;uniform highp float layer;uniform highp float time;uniform highp float focus;uniform highp vec2 hover;uniform highp vec2 action;
float bell(vec2 p,vec2 c,vec2 r){vec2 v=(p-c)/r;return exp(-dot(v,v)*2.);}
void main(){vec4 c=texture2D(image,uv);if(layer>.5){if(c.a<.02)discard;float r=1.-smoothstep(.74,.76,uv.x);float active=focus<0.?r:1.-r;float dim=mix(1.,.78,abs(focus)*(1.-active));c.rgb*=dim;
float vr=bell(uv,vec2(.621,.305),vec2(.021,.054));float ak=bell(uv,vec2(.83,.151),vec2(.054,.026));
c.rgb+=vec3(.21,.055,.5)*vr*(.4+.3*sin(time*2.2)+hover.x*.6+action.x*1.3);
c.rgb+=vec3(.45,.18,.025)*ak*(.5+.3*sin(time*2.8)+hover.y*.5+action.y*1.4);
float edge=clamp(c.a-texture2D(image,uv+vec2(.0015,.0015)).a,0.,1.);c.rgb+=edge*.4*(r*hover.x*vec3(.6,.23,1.)+(1.-r)*hover.y*vec3(1.,.55,.18));
}gl_FragColor=c;}`;
const fogVertex='precision highp float;attribute vec2 point;varying highp vec2 uv;void main(){uv=point;gl_Position=vec4(point.x*2.-1.,1.-point.y*2.,0.,1.);}';
const fogFragment=`precision highp float;varying highp vec2 uv;uniform highp float time;uniform highp float depth;uniform highp float focus;uniform highp vec2 mouse;uniform highp vec2 velocity;uniform highp float force;
float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
float noise(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(hash(i),hash(i+vec2(1.,0.)),f.x),mix(hash(i+vec2(0.,1.)),hash(i+vec2(1.)),f.x),f.y);}
float fbm(vec2 p){float v=0.;float a=.55;for(int i=0;i<4;i++){v+=a*noise(p);p=mat2(1.6,1.2,-1.2,1.6)*p+7.1;a*=.49;}return v;}
void main(){vec2 p=uv*vec2(4.8,3.5);float t=time*.13;vec2 delta=uv-mouse;float influence=exp(-dot(delta*vec2(1.,.8),delta*vec2(1.,.8))*22.);p+=velocity*influence*.5;
vec2 q=vec2(fbm(p+vec2(-t,0.)),fbm(p+vec2(4.2,t*.8)));vec2 r=vec2(fbm(p+q*2.5+vec2(t*.6,8.1)),fbm(p+q*2.4+vec2(8.3,-t*.45)));
float n=fbm(p+r*2.9+vec2(-t*.6,depth*13.));float wisps=smoothstep(.25,.66,n);float curls=smoothstep(.30,.69,fbm(p*2.+r*3.));
float lower=smoothstep(depth<.5?.34:.64,.94,uv.y);float bank=exp(-pow((uv.y-(.76+.045*sin(uv.x*7.+time*.2)))/.19,2.));
float alpha=(wisps*.64+curls*.30)*lower*(depth<.5?.34:.42);alpha+=wisps*bank*.11;alpha*=1.-influence*min(length(velocity)*.8+.15,.7);
vec3 color=mix(vec3(.49,.29,.34),vec3(.66,.48,.49),n);if(focus<0.)color=mix(color,vec3(.35,.24,.49),abs(focus)*.4);else color=mix(color,vec3(.59,.32,.18),focus*.35);
float rays=pow(max(0.,sin(uv.x*26.+uv.y*8.+time*.08)),14.)*.015*(1.-uv.y);alpha+=rays*force;gl_FragColor=vec4(color,alpha);}`;
function compile(v,f){const p=gl.createProgram();for(const [type,src] of [[gl.VERTEX_SHADER,v],[gl.FRAGMENT_SHADER,f]]){const s=gl.createShader(type);gl.shaderSource(s,src);gl.compileShader(s);if(!gl.getShaderParameter(s,gl.COMPILE_STATUS))throw Error(gl.getShaderInfoLog(s));gl.attachShader(p,s);}gl.linkProgram(p);if(!gl.getProgramParameter(p,gl.LINK_STATUS))throw Error(gl.getProgramInfoLog(p));return p;}
function loc(p,n){return gl.getUniformLocation(p,n);}function scalar(p,n,v){gl.uniform1f(loc(p,n),v);}function pair(p,n,v){gl.uniform2f(loc(p,n),v[0],v[1]);}
function bind(p,b){gl.useProgram(p);gl.bindBuffer(gl.ARRAY_BUFFER,b);const a=gl.getAttribLocation(p,'point');gl.enableVertexAttribArray(a);gl.vertexAttribPointer(a,2,gl.FLOAT,false,0,0);}
function buffer(points){const b=gl.createBuffer();gl.bindBuffer(gl.ARRAY_BUFFER,b);gl.bufferData(gl.ARRAY_BUFFER,new Float32Array(points),gl.STATIC_DRAW);return b;}
if(gl){try{material=compile(vertex,fragment);fog=compile(fogVertex,fogFragment);quad=buffer([0,0,1,0,0,1,0,1,1,0,1,1]);const points=[];const nx=150,ny=95;for(let y=0;y<ny;y++)for(let x=0;x<nx;x++){const a=x/nx,b=y/ny,c=(x+1)/nx,d=(y+1)/ny;points.push(a,b,c,b,a,d,a,d,c,b,c,d);}mesh=buffer(points);meshCount=points.length/2;gl.enable(gl.BLEND);gl.blendFunc(gl.SRC_ALPHA,gl.ONE_MINUS_SRC_ALPHA);}catch(e){console.warn('Motion II fallback:',e.message);canvas.style.display='none';}}
function load(name){return new Promise((resolve,reject)=>{const image=new Image();image.onload=()=>resolve(image);image.onerror=reject;image.src=location.protocol==='file:'?window.SEAMSITES_LAYERS[name]:'assets/'+name;});}
Promise.all([load('stage-v2.webp'),load('characters-v2.webp')]).then(result=>{images=result;if(gl&&material){textures=result.map(image=>{const t=gl.createTexture();gl.bindTexture(gl.TEXTURE_2D,t);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MIN_FILTER,gl.LINEAR);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MAG_FILTER,gl.LINEAR);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_S,gl.CLAMP_TO_EDGE);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_T,gl.CLAMP_TO_EDGE);gl.texImage2D(gl.TEXTURE_2D,0,gl.RGBA,gl.RGBA,gl.UNSIGNED_BYTE,image);return t;});}ready=true;document.body.classList.add('loaded');root.dataset.render='layered-v2';draw();}).catch(e=>{console.warn('Portrait fallback',e);canvas.style.display='none';document.body.classList.add('loaded');});
function resize(){const r=root.getBoundingClientRect();W=r.width;H=r.height;DPR=Math.min(devicePixelRatio||1,1.35);for(const c of [canvas,fx]){c.width=Math.round(W*DPR);c.height=Math.round(H*DPR);}if(gl)gl.viewport(0,0,canvas.width,canvas.height);draw();}
function point(x,y){const ratio=W/H,ar=1.7768,cx=ratio>ar?1:ratio/ar,cy=ratio>ar?ar/ratio:1;return[(x-(ratio<.9?.73:.5))/cx*W+W*.5,(y-.5)/cy*H+H*.5];}
function pulse(age,duration){if(age<0||age>duration)return 0;return Math.sin(Math.PI*age/duration)**2;}
function actions(){return[pulse(time-actionR,3.1)+.26*Math.pow(Math.max(0,Math.sin(time*.68)),4),pulse(time-actionK,3.6)+.38*Math.pow(Math.max(0,Math.sin(time*.57-1)),5)];}
function haze(depth){bind(fog,quad);scalar(fog,'time',time);scalar(fog,'depth',depth);scalar(fog,'focus',focus);pair(fog,'mouse',eased);pair(fog,'velocity',velocity);scalar(fog,'force',1.+pulse(time-flash,1.25)*2.);gl.drawArrays(gl.TRIANGLES,0,6);}
function plate(layer,action){bind(material,layer?mesh:quad);pair(material,'resolution',[W,H]);pair(material,'pointer',[(eased[0]-.5)*2,(eased[1]-.5)*2]);pair(material,'hover',hover);pair(material,'action',action);scalar(material,'time',time);scalar(material,'layer',layer);scalar(material,'focus',focus);gl.activeTexture(gl.TEXTURE0);gl.bindTexture(gl.TEXTURE_2D,textures[layer]);gl.uniform1i(loc(material,'image'),0);gl.drawArrays(gl.TRIANGLES,0,layer?meshCount:6);}
function glow(x,y,r,color,alpha){if(r<1||alpha<=0)return;ctx.save();ctx.globalAlpha=alpha;const g=ctx.createRadialGradient(x,y,0,x,y,r);g.addColorStop(0,color);g.addColorStop(.3,color);g.addColorStop(1,'transparent');ctx.fillStyle=g;ctx.fillRect(x-r,y-r,r*2,r*2);ctx.restore();}
function orbit(x,y,r,alpha,color,t){ctx.save();ctx.translate(x,y);ctx.scale(1,.4);ctx.rotate(t);ctx.strokeStyle=color;ctx.globalAlpha=alpha;ctx.lineWidth=1.;for(let i=0;i<3;i++){ctx.beginPath();ctx.arc(0,0,r,i*2.094,i*2.094+1.35);ctx.stroke();}ctx.restore();}
function draw(){if(!ready)return;const action=actions();if(gl&&material){gl.clearColor(.13,.01,.035,1);gl.clear(gl.COLOR_BUFFER_BIT);plate(0,action);haze(0.);plate(1,action);haze(1.);}
ctx.setTransform(DPR,0,0,DPR,0,0);ctx.clearRect(0,0,W,H);ctx.globalCompositeOperation='screen';const ranger=point(.623,.307),knight=point(.831,.151),rWrist=point(.555+action[0]*.014,.435-action[0]*.017),kWrist=point(.772+action[1]*.041,.409-action[1]*.04);
glow(...ranger,W*.031,'#b488ff',.05+hover[0]*.12+action[0]*.15);glow(...knight,W*.043,'#ffc679',.06+hover[1]*.11+action[1]*.13);
for(const [pos,a,color] of [[rWrist,action[0]+hover[0]*.32,'#c497ff'],[kWrist,action[1]+hover[1]*.32,'#ffca83']]){if(a>.13){glow(...pos,W*.036,color,a*.17);orbit(...pos,12+a*18,a*.65,color,time*.7);orbit(...pos,6+a*12,a*.6,color,-time*1.2);}}
// Embers use a local curl field and a cursor wake, rather than linear drift.
for(let i=0;i<82;i++){const seed=(i*.6180339887)%1,speed=.016+(i%6)*.002;let y=H*(1.12-((seed+time*speed)%1.3));let x=W*((i*.381966+Math.sin(time*.4+i*1.7)*.025+Math.cos(time*.21+i)*.012)%1);const dx=x-eased[0]*W,dy=y-eased[1]*H,force=Math.exp(-(dx*dx+dy*dy)/(W*W*.012));x+=force*(dx*.2+velocity[0]*W*.12);y+=force*(dy*.15+velocity[1]*H*.12);const a=.17+.55*Math.pow(Math.sin(seed*38+time*1.3),2);const radius=.4+(i%4)*.27;ctx.strokeStyle=selection==='ranger'?`rgba(190,159,246,${a})`:`rgba(255,183,113,${a})`;ctx.lineWidth=radius;ctx.beginPath();ctx.moveTo(x,y);ctx.lineTo(x-1.1-force*velocity[0]*8,y+2.4+force*2);ctx.stroke();if(i%12===0)glow(x,y,8,'#fca369',a*.18);}
for(let i=impulses.length-1;i>=0;i--){const p=impulses[i],age=time-p.t;if(age>1.7){impulses.splice(i,1);continue;}const a=1-age/1.7,r=20+age*W*.12;ctx.save();ctx.globalAlpha=a*.6;ctx.strokeStyle=p.color;ctx.lineWidth=.8;ctx.beginPath();ctx.ellipse(p.x*W,p.y*H,r,r*.52,-.3,0,Math.PI*2);ctx.stroke();ctx.restore();glow(p.x*W,p.y*H,r*.5,p.color,a*.035);}
const burst=pulse(time-flash,1.25);if(burst>.01){const p=selection==='ranger'?ranger:knight;glow(p[0],p[1]+H*.13,W*.18,selection==='ranger'?'#653787':'#af5428',burst*.15);}
ctx.globalCompositeOperation='source-over';}
function frame(now){const dt=Math.min((now-(last||now))/1000,.045);last=now;if(!paused&&!document.hidden){time+=dt;focus+=(targetFocus-focus)*(1-Math.exp(-dt*3.));eased=eased.map((v,i)=>v+(mouse[i]-v)*(1-Math.exp(-dt*5.)));hover=hover.map((v,i)=>v+(targetHover[i]-v)*(1-Math.exp(-dt*5.)));velocity=velocity.map(v=>v*Math.exp(-dt*3.));draw();}requestAnimationFrame(frame);}
root.addEventListener('pointermove',e=>{const r=root.getBoundingClientRect(),next=[(e.clientX-r.left)/W,(e.clientY-r.top)/H];velocity=next.map((v,i)=>Math.max(-1.5,Math.min(1.5,(v-mouse[i])*22)));mouse=next;inside=true;const rp=point(.62,.44),kp=point(.83,.37);targetHover=[Math.hypot(e.clientX-r.left-rp[0],e.clientY-r.top-rp[1])<W*.14?1:0,Math.hypot(e.clientX-r.left-kp[0],e.clientY-r.top-kp[1])<W*.12?1:0];document.dispatchEvent(new CustomEvent('hero-pointer',{detail:{x:e.clientX,y:e.clientY,target:targetHover[0]?'ranger':targetHover[1]?'knight':'space',interactive:!!e.target.closest('button,a')}}));});
root.addEventListener('pointerleave',()=>{inside=false;targetHover=[0,0];mouse=[.5,.5];document.dispatchEvent(new Event('hero-pointer-leave'));});
function activate(name){if(paused)return;name=name||(targetHover[1]?'knight':'ranger');if(name==='ranger'||name==='duo')actionR=time;if(name==='knight'||name==='duo')actionK=time;flash=time;}
root.addEventListener('pointerdown',e=>{if(e.target.closest('button,a')||paused)return;const r=root.getBoundingClientRect();impulses.push({x:(e.clientX-r.left)/W,y:(e.clientY-r.top)/H,t:time,color:targetHover[1]?'#ffd19a':'#c7a0ff'});activate();});
window.addEventListener('resize',resize);resize();requestAnimationFrame(frame);
window.heroic={selectHero(name){selection=name;targetFocus=name==='ranger'?-1:name==='knight'?1:0;activate(name);if(paused){focus=targetFocus;draw();}},activate,draw,setPaused(value){paused=value;draw();},setTime(value){time=value;draw();},setPointer(x,y){mouse=[x,y];velocity=[.4,-.2];},get state(){return{ready,paused,selection,webgl:!!gl,time,layered:true};}};
})();
