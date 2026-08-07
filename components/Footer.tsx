import Link from "next/link";
import { site } from "@/lib/site";

export function Footer() {
  return <footer className="site-footer"><div className="container">
    <div className="footer-grid">
      <div className="footer-brand"><Link aria-label="ALZA Total Tech Solutions home" className="brand brand-footer" href="/"><span className="brand-logo-live" aria-hidden="true"><img alt="" className="brand-logo" height="56" src="/assets/img/alza-brand-mark-static.webp" width="64"/></span><span className="brand-copy brand-copy-live"><strong>ALZA</strong><span>Total Tech Solutions FZ-LLC</span><small>IT Infrastructure • Cloud • Cybersecurity • Software</small></span></Link><p>UAE-based IT consulting and technology company delivering complete infrastructure, cloud, cybersecurity, managed support, website design and development, and the flagship ALZA M365 Migration Suite.</p></div>
      <div><span className="footer-title">Contact</span><div className="footer-links contact-links"><a href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a><a href={`mailto:${site.salesEmail}`}>{site.salesEmail}</a><a href={`mailto:${site.supportEmail}`}>{site.supportEmail}</a><a href={`tel:${site.phoneHref}`}>{site.phoneDisplay}</a><a href={site.whatsappUrl} rel="noopener noreferrer" target="_blank">Chat on WhatsApp</a></div></div>
      <div><span className="footer-title">Company</span><div className="footer-links"><Link href="/about/">About</Link><Link href="/services/">Services</Link><Link href="/services/website-design-development/">Website Design &amp; Development</Link><Link href="/solutions/">Solutions</Link><Link href="/contact/">Contact</Link></div></div>
      <div><span className="footer-title">Product</span><div className="footer-links"><Link href="/products/">M365 Migration Suite</Link><Link href="/platform/">Platform</Link><Link href="/pricing/">Pricing</Link><Link href="/download/">Download</Link></div></div>
    </div>
    <div className="footer-bottom"><span>© {new Date().getFullYear()} ALZA Total Tech Solutions FZ-LLC · United Arab Emirates</span><span><Link href="/privacy/">Privacy</Link> · <Link href="/terms/">Terms</Link></span></div>
  </div></footer>;
}
