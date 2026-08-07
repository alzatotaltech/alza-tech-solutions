import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { PageExperience } from "@/components/PageExperience";
import { Content_website_design_development } from "@/components/content/website_design_development";

export const metadata: Metadata = {
  title: "Website Design & Development UAE | ALZA Total Tech Solutions",
  description: "ALZA designs and develops responsive business websites, landing pages and web applications with UX, performance, SEO-ready structure, deployment and support in the UAE.",
  alternates: { canonical: "https://alzatotaltech.com/services/website-design-development/" },
  openGraph: {
    type: "website",
    locale: "en_AE",
    url: "https://alzatotaltech.com/services/website-design-development/",
    title: "Website Design & Development UAE | ALZA Total Tech Solutions",
    description: "Responsive business websites and web applications designed, developed, deployed and supported by ALZA Total Tech Solutions FZ-LLC.",
    siteName: "ALZA Total Tech Solutions",
  },
};

const jsonLd = [JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://alzatotaltech.com/services/website-design-development/#service",
  "name": "Website Design & Development",
  "serviceType": "Website design and web development",
  "url": "https://alzatotaltech.com/services/website-design-development/",
  "provider": { "@id": "https://alzatotaltech.com/#organization" },
  "areaServed": { "@type": "Country", "name": "United Arab Emirates" },
  "description": "Responsive business websites, landing pages and web applications with UX design, frontend development, performance, SEO-ready structure, analytics, deployment and ongoing support."
}), JSON.stringify({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {"@type":"ListItem","position":1,"name":"Home","item":"https://alzatotaltech.com/"},
    {"@type":"ListItem","position":2,"name":"Services","item":"https://alzatotaltech.com/services/"},
    {"@type":"ListItem","position":3,"name":"Website Design & Development","item":"https://alzatotaltech.com/services/website-design-development/"}
  ]
})];

export default function Page() {
  return <><JsonLd items={jsonLd}/><PageExperience bodyClass="enterprise-theme page-web-development"><Content_website_design_development/></PageExperience></>;
}
