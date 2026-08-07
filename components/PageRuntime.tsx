import { RefObject, useEffect } from "react";
import { animate, inView, stagger } from "motion";
import { site } from "@/lib/site";
import { useRouter } from "next/router";

function emit(name:string, params:Record<string,unknown>={}) {
  const w=window as any; w.dataLayer=w.dataLayer||[]; w.dataLayer.push({event:name,...params}); if(typeof w.gtag==='function') w.gtag('event',name,params);
}

const ease:[number,number,number,number]=[.22,1,.36,1];

export function usePageRuntime(root: RefObject<HTMLElement | null>, onLead:()=>void) {
  const router = useRouter();
  useEffect(()=>{
    const el=root.current; if(!el) return;
    const reduced=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const saveData=(navigator as any).connection?.saveData===true;
    const lowMotion=reduced||saveData;
    document.documentElement.classList.toggle('low-motion',lowMotion);
    document.documentElement.classList.add('react-motion-ready');

    const cleanups: Array<()=>void> = [];
    const animations: Array<{cancel?:()=>void}> = [];

    // ----- Premium Motion layer -----
    if(!lowMotion) {
      // Hero sequence: eyebrow -> identity -> title -> lead -> CTAs -> proof rail.
      const heroTargets = Array.from(el.querySelectorAll<HTMLElement>(
        '.hero-copy .eyebrow, .hero-copy .official-identity, .hero-copy h1, .hero-copy .lead, .hero-copy .actions, .page-hero .kicker, .page-hero h1, .page-hero .lead, .page-hero .actions'
      ));
      heroTargets.forEach(node=>{
        node.style.opacity='0';
        node.style.transform='translateY(34px)';
        node.style.filter='blur(8px)';
      });
      if(heroTargets.length){
        const a=animate(heroTargets,
          {opacity:[0,1], y:[34,0], filter:['blur(8px)','blur(0px)']},
          {duration:.72, delay:stagger(.085,{startDelay:.08}), ease}
        ); animations.push(a as any);
      }

      const proofItems=Array.from(el.querySelectorAll<HTMLElement>('.proof-grid > div'));
      proofItems.forEach(node=>{node.style.opacity='0';node.style.transform='translateY(20px) scale(.985)'});
      if(proofItems.length){
        const a=animate(proofItems,{opacity:[0,1],y:[20,0],scale:[.985,1]},
          {duration:.52,delay:stagger(.055,{startDelay:.46}),ease}); animations.push(a as any);
      }

      // Scroll sections: heading first, then card groups with real stagger.
      const sections=Array.from(el.querySelectorAll<HTMLElement>('.section'));
      sections.forEach(section=>{
        const heading=section.querySelector<HTMLElement>('.heading-row, .section-heading, .section-title');
        const cards=Array.from(section.querySelectorAll<HTMLElement>('.card, .resource-card, .use-case, .glass-panel, .plan-card, .cutover-stage'));
        if(heading){ heading.style.opacity='0'; heading.style.transform='translateY(32px)'; }
        cards.forEach(card=>{card.style.opacity='0';card.style.transform='translateY(38px) scale(.975)'});
        const stop=inView(section,()=>{
          if(heading){ const a=animate(heading,{opacity:[0,1],y:[32,0]},{duration:.64,ease}); animations.push(a as any); }
          if(cards.length){ const a=animate(cards,{opacity:[0,1],y:[38,0],scale:[.975,1]},{duration:.62,delay:stagger(.075,{startDelay:.08}),ease}); animations.push(a as any); }
        },{margin:'0px 0px -14% 0px',amount:.12});
        cleanups.push(stop);
      });

      // Standalone reveal elements outside card grids.
      const reveals=Array.from(el.querySelectorAll<HTMLElement>('[data-reveal]')).filter(n=>!n.closest('.card, .resource-card, .use-case, .glass-panel, .plan-card, .cutover-stage'));
      reveals.forEach(node=>{
        const stop=inView(node,()=>{
          const a=animate(node,{opacity:[0,1],y:[28,0]},{duration:.58,ease}); animations.push(a as any);
        },{margin:'0px 0px -10% 0px'});
        cleanups.push(stop);
      });

      // Interactive 21st-style spotlight + subtle 3D tilt on pointer devices.
      const surfaces=Array.from(el.querySelectorAll<HTMLElement>('.card, .plan-card, .cta-band, .proof-strip, .glass-panel'));
      const finePointer=window.matchMedia('(hover:hover) and (pointer:fine)').matches;
      if(finePointer){
        surfaces.forEach(surface=>{
          surface.classList.add('motion-surface-v54');
          const move=(ev:PointerEvent)=>{
            const r=surface.getBoundingClientRect();
            const px=(ev.clientX-r.left)/r.width;
            const py=(ev.clientY-r.top)/r.height;
            surface.style.setProperty('--spot-x',`${(px*100).toFixed(1)}%`);
            surface.style.setProperty('--spot-y',`${(py*100).toFixed(1)}%`);
            const rx=(.5-py)*3.4;
            const ry=(px-.5)*4.2;
            surface.style.setProperty('--tilt-x',`${rx.toFixed(2)}deg`);
            surface.style.setProperty('--tilt-y',`${ry.toFixed(2)}deg`);
          };
          const leave=()=>{
            surface.style.setProperty('--tilt-x','0deg');
            surface.style.setProperty('--tilt-y','0deg');
            surface.style.setProperty('--spot-x','50%');
            surface.style.setProperty('--spot-y','50%');
          };
          surface.addEventListener('pointermove',move);
          surface.addEventListener('pointerleave',leave);
          cleanups.push(()=>{surface.removeEventListener('pointermove',move);surface.removeEventListener('pointerleave',leave)});
        });
      }

      // Magnetic primary CTAs — intentionally restrained.
      if(finePointer){
        el.querySelectorAll<HTMLElement>('.btn:not(.btn-ghost):not(.btn-secondary)').forEach(btn=>{
          const move=(ev:PointerEvent)=>{
            const r=btn.getBoundingClientRect(); const x=(ev.clientX-r.left-r.width/2)*.08; const y=(ev.clientY-r.top-r.height/2)*.11;
            btn.style.setProperty('--mag-x',`${x.toFixed(1)}px`); btn.style.setProperty('--mag-y',`${y.toFixed(1)}px`);
          };
          const leave=()=>{btn.style.setProperty('--mag-x','0px');btn.style.setProperty('--mag-y','0px')};
          btn.addEventListener('pointermove',move);btn.addEventListener('pointerleave',leave);
          cleanups.push(()=>{btn.removeEventListener('pointermove',move);btn.removeEventListener('pointerleave',leave)});
        });
      }
    }

    // Event delegation for FAQ, tabs, CTAs and analytics
    const onClick=(e:Event)=>{
      const target=e.target as Element;
      const action=target.closest('[data-react-action]') as HTMLElement|null; if(action?.dataset.reactAction==='print'){e.preventDefault(); window.print(); return;}
      const lead=target.closest('[data-open-lead]'); if(lead){e.preventDefault(); onLead(); return;}
      const anchor=target.closest('a[href]') as HTMLAnchorElement|null;
      if(anchor){
        const raw=anchor.getAttribute('href')||'';
        if(raw && !raw.startsWith('#') && !/^(mailto:|tel:|javascript:)/i.test(raw) && anchor.target !== '_blank'){
          const url=new URL(raw,window.location.href);
          if(url.origin===window.location.origin){ e.preventDefault(); router.push(url.pathname+url.search+url.hash); return; }
        }
      }
      const q=target.closest('.faq-question') as HTMLElement|null;
      if(q){ const id=q.getAttribute('aria-controls'); const ans=id?document.getElementById(id):null; const isOpen=q.getAttribute('aria-expanded')==='true'; q.setAttribute('aria-expanded',String(!isOpen)); if(ans) ans.hidden=isOpen; return; }
      const tab=target.closest('[role="tab"]') as HTMLElement|null;
      if(tab){ activateTab(tab); }
      const tracked=target.closest('[data-track]') as HTMLElement|null; if(tracked) emit(tracked.dataset.track||'interaction',{label:tracked.dataset.trackLabel||tracked.textContent?.trim()||'',page:location.pathname});
    };
    const activateTab=(tab:HTMLElement)=>{
      const list=tab.closest('[role="tablist"]'); if(!list) return; const tabs=Array.from(list.querySelectorAll<HTMLElement>('[role="tab"]')); const parent=list.parentElement?.parentElement || el; const panels=Array.from(parent.querySelectorAll<HTMLElement>('[role="tabpanel"]'));
      tabs.forEach(t=>{t.setAttribute('aria-selected',String(t===tab)); t.tabIndex=t===tab?0:-1});
      panels.forEach(p=>{
        const selected=p.id===tab.getAttribute('aria-controls');
        p.hidden=!selected;
        if(selected && !lowMotion){ p.style.opacity='0';p.style.transform='translateY(12px)'; animate(p,{opacity:[0,1],y:[12,0]},{duration:.34,ease}); }
      });
      emit('capability_tab_view',{capability:tab.dataset.trackLabel||tab.textContent?.trim()||''});
    };
    const onKey=(e:KeyboardEvent)=>{ const tab=(e.target as Element)?.closest?.('[role="tab"]') as HTMLElement|null; if(!tab||!['ArrowLeft','ArrowRight','ArrowUp','ArrowDown'].includes(e.key)) return; const list=tab.closest('[role="tablist"]'); if(!list) return; e.preventDefault(); const tabs=Array.from(list.querySelectorAll<HTMLElement>('[role="tab"]')); const i=tabs.indexOf(tab); const dir=['ArrowRight','ArrowDown'].includes(e.key)?1:-1; const next=tabs[(i+dir+tabs.length)%tabs.length]; next.focus(); activateTab(next); };
    el.addEventListener('click',onClick); el.addEventListener('keydown',onKey); cleanups.push(()=>{el.removeEventListener('click',onClick);el.removeEventListener('keydown',onKey)});

    // Lead forms still embedded in migrated page bodies
    const onSubmit=async(e:Event)=>{ const form=e.target as HTMLFormElement; if(!form.matches?.('.lead-form')) return; e.preventDefault(); if(!form.reportValidity()) return; const fd=new FormData(form); const bot=fd.get('_company_website'); if(bot) return; const status=form.querySelector<HTMLElement>('.form-status');
      if(!site.leadEndpoint){ const subject=encodeURIComponent(`Website enquiry — ${fd.get('company')||fd.get('name')||'prospective customer'}`); const body=encodeURIComponent(`Name: ${fd.get('name')||''}\nEmail: ${fd.get('email')||''}\nCompany: ${fd.get('company')||''}\n\nMessage:\n${fd.get('message')||''}`); if(status) status.textContent='Your email app will open with the enquiry prepared.'; window.location.href=`mailto:${site.salesEmail}?subject=${subject}&body=${body}`; return; }
      try{ const r=await fetch(site.leadEndpoint,{method:'POST',body:fd,headers:{Accept:'application/json'}}); if(!r.ok) throw new Error(); form.reset(); if(status) status.textContent='Thank you. Your enquiry has been received.'; } catch { if(status) status.textContent=`We could not send the form. Email ${site.salesEmail} instead.`; }
    };
    el.addEventListener('submit',onSubmit); cleanups.push(()=>el.removeEventListener('submit',onSubmit));

    // Mobile WebP/MP4 parity
    const mq=window.matchMedia('(max-width: 900px)');
    const syncMedia=()=>{ document.querySelectorAll<HTMLElement>('.responsive-media-pair').forEach(pair=>{ const img=pair.querySelector<HTMLElement>(':scope > .media-webp-desktop'); const video=pair.querySelector<HTMLVideoElement>(':scope > .media-h264-mobile'); if(img){img.hidden=mq.matches;img.setAttribute('aria-hidden',mq.matches?'true':'false')} if(video){video.muted=true;video.playsInline=true;video.hidden=!mq.matches;video.setAttribute('aria-hidden',mq.matches?'false':'true'); if(mq.matches&&!document.hidden) video.play().catch(()=>video.classList.add('mobile-media-failed')); else video.pause();} }); document.querySelectorAll<HTMLVideoElement>('.page-hero-mobile-video,.home-hero-video-mobile').forEach(v=>{v.muted=true;v.playsInline=true;v.hidden=!mq.matches;if(mq.matches&&!document.hidden)v.play().catch(()=>{});else v.pause();}); };
    syncMedia(); mq.addEventListener?.('change',syncMedia); document.addEventListener('visibilitychange',syncMedia); window.addEventListener('orientationchange',syncMedia); cleanups.push(()=>{mq.removeEventListener?.('change',syncMedia);document.removeEventListener('visibilitychange',syncMedia);window.removeEventListener('orientationchange',syncMedia)});

    // Release manifest
    const releaseStatus=el.querySelector<HTMLElement>('[data-release-status]'); if(releaseStatus){ fetch('/releases/release-manifest.json').then(r=>r.json()).then(release=>{el.querySelectorAll<HTMLElement>('[data-release-version]').forEach(x=>x.textContent=release.version||'Not published');el.querySelectorAll<HTMLElement>('[data-release-date]').forEach(x=>x.textContent=release.releaseDate||'Pending'); const btn=el.querySelector<HTMLAnchorElement>('[data-download-button]'); if(release.available&&release.file&&btn){btn.href=`/releases/${release.file}`;btn.removeAttribute('aria-disabled');btn.removeAttribute('tabindex');releaseStatus.textContent='The production installer is available.'}}).catch(()=>releaseStatus.textContent='Release information is temporarily unavailable.'); }

    return()=>{
      animations.forEach(a=>a.cancel?.());
      cleanups.forEach(fn=>fn());
      document.documentElement.classList.remove('react-motion-ready');
    };
  },[root,onLead,router]);
}
