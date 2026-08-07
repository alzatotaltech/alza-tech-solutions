import type { Metadata } from "next";
import { pageData } from "@/lib/pageData";
import { JsonLd } from "@/components/JsonLd";
import { PageExperience } from "@/components/PageExperience";
import { Content_404 } from "@/components/content/404";
import { LeadProvider } from "@/components/LeadProvider";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ExperienceLayer } from "@/components/ExperienceLayer";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Page Not Found | ALZA Total Tech Solutions",
  description: "The requested ALZA Total Tech Solutions page could not be found.",
  robots: { index: false, follow: true },
};

export default function NotFound(){
  const data=pageData["404.html"];
  return <>
    <script dangerouslySetInnerHTML={{__html:`document.body.className=${JSON.stringify(data.bodyClass)}`}} />
    <JsonLd items={data.jsonLd}/>
    <LeadProvider>
      <ExperienceLayer/>
      <a className="skip-link" href="#main">Skip to content</a>
      <Header/>
      <PageExperience bodyClass={data.bodyClass}><Content_404/></PageExperience>
    </LeadProvider>
    <Footer/>
    <a aria-label="Chat with ALZA on WhatsApp" className="whatsapp-chat" href={site.whatsappUrl} rel="noopener noreferrer" target="_blank"><img alt="" height="25" src="/assets/img/whatsapp-logo.svg" width="25"/><span>Chat on WhatsApp</span></a>
  </>;
}
