import Link from "next/link";
import { site } from "@/lib/site";

export function Footer() {
  return <footer className="site-footer"><div className="container">
    <div className="footer-grid">
      <div className="footer-brand"><Link aria-label="ALZA Total Tech Solutions home" className="brand brand-footer" href="/"><img alt="ALZA logo" className="brand-logo" height="56" src="/assets/img/alza-brand-mark-static.webp" width="64"/><span className="brand-copy"><strong>ALZA</strong><span>Total Tech Solutions</span><small>IT Infrastructure • Cloud • Cybersecurity • Software</small></span></Link><p>UAE-based IT consulting and technology company delivering complete infrastructure, cloud, cybersecurity, managed support and the flagship ALZA M365 Migration Suite.</p></div>
      <div><span className="footer-title">Contact</span><div className="footer-links contact-links"><a href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a><a href={`mailto:${site.salesEmail}`}>{site.salesEmail}</a><a href={`mailto:${site.supportEmail}`}>{site.supportEmail}</a><a href={`tel:${site.phoneHref}`}>{site.phoneDisplay}</a><a href={site.whatsappUrl} rel="noopener noreferrer" target="_blank">Chat on WhatsApp</a></div></div>
      <div><span className="footer-title">Company</span><div className="footer-links"><Link href="/about.html">About</Link><Link href="/services.html">Services</Link><Link href="/solutions.html">Solutions</Link><Link href="/contact.html">Contact</Link></div></div>
      <div><span className="footer-title">Product</span><div className="footer-links"><Link href="/products.html">M365 Migration Suite</Link><Link href="/platform.html">Platform</Link><Link href="/pricing.html">Pricing</Link><Link href="/download.html">Download</Link></div></div>
    </div>
    <div className="footer-bottom"><span>© {new Date().getFullYear()} ALZA Total Tech Solutions FZ-LLC · United Arab Emirates</span><span><Link href="/privacy.html">Privacy</Link> · <Link href="/terms.html">Terms</Link></span></div>
  </div></footer>;
}
