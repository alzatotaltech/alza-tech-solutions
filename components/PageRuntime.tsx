import { RefObject, useEffect } from "react";
import { animate, inView, stagger } from "motion";
import { site } from "@/lib/site";
import { useRouter } from "next/router";

function emit(name:string, params:Record<string,unknown>={}) {
  const w=window as any; w.dataLayer=w.dataLayer||[]; w.dataLayer.push({event:name,...params}); if(typeof w.gtag==='function') w.gtag('event',name,params);
}

export function usePageRuntime(root: RefObject<HTMLElement | null>, onLead:()=>void) {
  const router = useRouter();
  useEffect(()=>{
    const el=root.current; if(!el) return;
    const reduced=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const saveData=(navigator as any).connection?.saveData===true;
    document.documentElement.classList.toggle('low-motion',reduced||saveData);

    const cleanups: Array<()=>void> = [];

    // Motion reveal layer
    if(!reduced && !saveData) {
      const hero=el.querySelector('.hero-copy, .page-hero .container');
      if(hero) animate(hero as Element,{opacity:[0,1],y:[22,0]},{duration:.65,ease:[.22,1,.36,1]});
      el.querySelectorAll('[data-reveal], .card, .glass-panel, .resource-card, .use-case').forEach((node)=>{
        const stop=inView(node,()=>{ animate(node,{opacity:[0,1],y:[28,0]},{duration:.55,ease:[.22,1,.36,1]}); return()=>{}; },{margin:'0px 0px -8% 0px'}); cleanups.push(stop);
      });
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
      tabs.forEach(t=>{t.setAttribute('aria-selected',String(t===tab)); t.tabIndex=t===tab?0:-1}); panels.forEach(p=>p.hidden=p.id!==tab.getAttribute('aria-controls')); emit('capability_tab_view',{capability:tab.dataset.trackLabel||tab.textContent?.trim()||''});
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

    return()=>cleanups.forEach(fn=>fn());
  },[root,onLead,router]);
}
