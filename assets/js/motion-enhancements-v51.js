import { animate, inView, stagger } from "https://cdn.jsdelivr.net/npm/motion@12.43.0/+esm";
const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
const desktop = matchMedia("(min-width: 901px)").matches;
const fine = matchMedia("(hover:hover) and (pointer:fine)").matches;
const A=(el,keyframes,opts={})=>{try{return animate(el,keyframes,opts)}catch{return null}};

function initHero(){
  const parts=[...document.querySelectorAll('.hero-copy .eyebrow,.hero-copy .kicker,.hero-copy h1,.hero-copy .lead,.hero-copy .actions,.page-hero .breadcrumbs,.page-hero .kicker,.page-hero h1,.page-hero .lead')];
  if(reduce) return;
  parts.forEach((el,i)=>A(el,{opacity:[0,1],transform:[`translateY(${i<2?22:16}px)`,`translateY(0px)`],filter:['blur(5px)','blur(0px)']},{duration:.62,delay:.08+i*.075,easing:[.22,1,.36,1]}));
}
function initReveals(){
  if(reduce) return;
  const groups=document.querySelectorAll('.cards,.proof-grid,.plan-grid,.architecture-benefits,.execution-cards,.process-grid,.footer-grid,.app-tabs');
  groups.forEach(group=>{
    inView(group,()=>{
      const children=[...group.children];
      A(children,{opacity:[0,1],transform:['translateY(26px) scale(.985)','translateY(0px) scale(1)']},{duration:.56,delay:stagger(.065),easing:[.22,1,.36,1]});
    },{amount:.15});
  });
  document.querySelectorAll('.heading-row,.cta-band,.form-card,.architecture-diagram-figure').forEach(el=>inView(el,()=>A(el,{opacity:[0,1],transform:['translateY(22px)','translateY(0px)']},{duration:.58,easing:[.22,1,.36,1]}),{amount:.18}));
}
function initHover(){
  if(!fine||reduce) return;
  document.querySelectorAll('.card,.plan-card,.resource-card,.use-case').forEach(el=>{
    el.addEventListener('pointerenter',()=>A(el,{transform:'translateY(-7px) scale(1.008)'},{duration:.25,easing:[.22,1,.36,1]}));
    el.addEventListener('pointerleave',()=>A(el,{transform:'translateY(0px) scale(1)'},{duration:.3,easing:[.22,1,.36,1]}));
    el.addEventListener('pointermove',e=>{const r=el.getBoundingClientRect();el.style.setProperty('--spot-x',`${e.clientX-r.left}px`);el.style.setProperty('--spot-y',`${e.clientY-r.top}px`)});
  });
  document.querySelectorAll('.btn').forEach(el=>{
    el.addEventListener('pointerenter',()=>A(el,{transform:'translateY(-3px) scale(1.015)'},{duration:.2}));
    el.addEventListener('pointerleave',()=>A(el,{transform:'translateY(0px) scale(1)'},{duration:.24}));
  });
}
function initProgress(){
  const bar=document.querySelector('.alza-scroll-progress')||Object.assign(document.createElement('div'),{className:'alza-scroll-progress'});
  if(!bar.isConnected) document.body.appendChild(bar);
  const update=()=>{const max=Math.max(1,document.documentElement.scrollHeight-innerHeight);bar.style.transform=`scaleX(${Math.min(1,scrollY/max)})`};
  addEventListener('scroll',update,{passive:true});update();
}
function initNav(){
  if(!desktop||reduce) return;
  const header=document.querySelector('.site-header'); if(!header)return;
  let last=0;
  addEventListener('scroll',()=>{const y=scrollY;header.style.transform=y>last&&y>180?'translateY(-100%)':'translateY(0)';header.style.transition='transform .35s cubic-bezier(.22,1,.36,1)';last=y},{passive:true});
}
function initTabs(){
  document.querySelectorAll('.app-tab,[role="tab"]').forEach(tab=>tab.addEventListener('click',()=>requestAnimationFrame(()=>{
    document.querySelectorAll('[role="tabpanel"]:not([hidden]),.workload-panel.active,.app-panel.active').forEach(p=>{if(!reduce)A(p,{opacity:[0,1],transform:['translateY(12px) scale(.992)','translateY(0) scale(1)']},{duration:.36,easing:[.22,1,.36,1]})})
  })));
}
addEventListener('DOMContentLoaded',()=>{document.documentElement.classList.add('premium-v51');initHero();initReveals();initHover();initProgress();initNav();initTabs()});
