"use client";
import { AnimatePresence, motion } from "motion/react";
import { FormEvent, useEffect, useRef, useState } from "react";
import { site } from "@/lib/site";

export function LeadModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const first = useRef<HTMLInputElement>(null);
  const [status,setStatus] = useState("");
  useEffect(()=>{ if(open) requestAnimationFrame(()=>first.current?.focus()); },[open]);
  useEffect(()=>{ const fn=(e:KeyboardEvent)=>{if(e.key==='Escape'&&open) onClose()}; document.addEventListener('keydown',fn); return()=>document.removeEventListener('keydown',fn)},[open,onClose]);
  const submit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault(); const form=e.currentTarget; if(!form.reportValidity()) return;
    const fd=new FormData(form);
    if (!site.leadEndpoint) {
      const subject=encodeURIComponent(`Website enquiry — ${fd.get('company')||fd.get('name')||'prospective customer'}`);
      const body=encodeURIComponent(`Name: ${fd.get('name')||''}\nEmail: ${fd.get('email')||''}\nCompany: ${fd.get('company')||''}\n\nMessage:\n${fd.get('message')||''}`);
      window.location.href=`mailto:${site.salesEmail}?subject=${subject}&body=${body}`; return;
    }
    setStatus('Sending…');
    try { const r=await fetch(site.leadEndpoint,{method:'POST',body:fd,headers:{Accept:'application/json'}}); if(!r.ok) throw new Error(); setStatus('Thank you. Your enquiry has been received.'); form.reset(); }
    catch { setStatus(`We could not send the form. Email ${site.salesEmail} instead.`); }
  };
  return <AnimatePresence>{open && <motion.div className="modal react-modal" role="dialog" aria-modal="true" aria-labelledby="lead-modal-title" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} onMouseDown={(e)=>{if(e.target===e.currentTarget) onClose()}}>
    <motion.div className="modal-card" initial={{opacity:0,y:22,scale:.98}} animate={{opacity:1,y:0,scale:1}} exit={{opacity:0,y:12,scale:.99}} transition={{duration:.22}}>
      <button className="modal-close" aria-label="Close enquiry" type="button" onClick={onClose}>×</button>
      <span className="kicker">Talk to ALZA</span><h2 id="lead-modal-title">Tell us what you need to achieve.</h2>
      <form className="lead-form" onSubmit={submit}><div className="form-grid"><label>Name<input ref={first} name="name" required/></label><label>Work email<input type="email" name="email" required/></label><label>Company<input name="company"/></label><label>Phone<input name="phone"/></label></div><label>What can we help with?<textarea name="message" rows={5} required/></label><button className="btn" type="submit">Submit enquiry</button>{status && <p className="form-status">{status}</p>}</form>
    </motion.div>
  </motion.div>}</AnimatePresence>;
}
