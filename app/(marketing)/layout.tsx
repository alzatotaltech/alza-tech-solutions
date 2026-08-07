import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ExperienceLayer } from "@/components/ExperienceLayer";
import { LeadProvider } from "@/components/LeadProvider";
import { site } from "@/lib/site";

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  return <>
    <LeadProvider>
      <ExperienceLayer/>
      <a className="skip-link" href="#main">Skip to content</a>
      <Header/>
      {children}
    </LeadProvider>
    <Footer/>
    <a aria-label="Chat with ALZA on WhatsApp" className="whatsapp-chat" href={site.whatsappUrl} rel="noopener noreferrer" target="_blank"><img alt="" height="25" src="/assets/img/whatsapp-logo.svg" width="25"/><span>Chat on WhatsApp</span></a>
  </>;
}
