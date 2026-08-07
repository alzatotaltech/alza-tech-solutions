import { ReactNode, useCallback, useRef, useState } from "react";
import type { PageData } from "@/lib/pageData";
import { SeoHead } from "./SeoHead";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { LeadModal } from "./LeadModal";
import { usePageRuntime } from "./PageRuntime";
import { site } from "@/lib/site";

export function MarketingPage({ data, children }: { data: PageData; children: ReactNode }) {
  const [leadOpen,setLeadOpen]=useState(false);
  const contentRef=useRef<HTMLElement>(null);
  const openLead=useCallback(()=>setLeadOpen(true),[]);
  usePageRuntime(contentRef,openLead);
  return <>
    <SeoHead data={data}/>
    <a className="skip-link" href="#main">Skip to content</a>
    <Header onLead={openLead}/>
    <main id="main" ref={contentRef}>{children}</main>
    <Footer/>
    <a aria-label="Chat with ALZA on WhatsApp" className="whatsapp-chat" href={site.whatsappUrl} rel="noopener noreferrer" target="_blank"><img alt="" height="25" src="/assets/img/whatsapp-logo.svg" width="25"/><span>Chat on WhatsApp</span></a>
    <LeadModal open={leadOpen} onClose={()=>setLeadOpen(false)}/>
  </>;
}
