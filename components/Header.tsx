import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { site } from "@/lib/site";
import { motion } from "motion/react";

const nav = [
  ["Home", "/"], ["Products", "/products.html"], ["Solutions", "/solutions.html"],
  ["Services", "/services.html"], ["Pricing", "/pricing.html"], ["Resources", "/resources.html"],
  ["Company", "/about.html"], ["Contact", "/contact.html"],
] as const;

const Icon = ({ kind }: { kind: "pin" | "mail" | "phone" }) => {
  if (kind === "pin") return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21s6-5.1 6-11a6 6 0 1 0-12 0c0 5.9 6 11 6 11Z"/><circle cx="12" cy="10" r="2.2"/></svg>;
  if (kind === "phone") return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7.2 3.5 4.8 5.9c-.6.6-.7 1.5-.3 2.3 2.5 5.2 6.4 9.1 11.6 11.6.8.4 1.7.3 2.3-.3l2.1-2.1-4-4-2.1 1.6c-2.2-1.2-4-3-5.2-5.2l1.6-2.1-3.6-4.2Z"/></svg>;
  return <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m4 7 8 6 8-6"/></svg>;
};

export function Header({ onLead }: { onLead: () => void }) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const firstLink = useRef<HTMLAnchorElement>(null);

  useEffect(() => { setOpen(false); }, [router.asPath]);
  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
    if (open) requestAnimationFrame(() => firstLink.current?.focus());
    return () => document.body.classList.remove("menu-open");
  }, [open]);

  const active = (href: string) => href === "/" ? router.pathname === "/" : router.asPath.split("?")[0] === href;

  return <motion.header className="site-header" initial={{opacity:0,y:-18}} animate={{opacity:1,y:0}} transition={{duration:.5,ease:[.22,1,.36,1]}}>
    <div className="contact-bar">
      <div className="container contact-bar-inner">
        <span className="contact-location"><Icon kind="pin"/> United Arab Emirates</span>
        <a href={`mailto:${site.contactEmail}`}><Icon kind="mail"/> {site.contactEmail}</a>
        <a href={`mailto:${site.salesEmail}`}><Icon kind="mail"/> {site.salesEmail}</a>
        <a href={`mailto:${site.supportEmail}`}><Icon kind="mail"/> {site.supportEmail}</a>
        <a href={`tel:${site.phoneHref}`}><Icon kind="phone"/> {site.phoneDisplay}</a>
      </div>
    </div>
    <div className="container nav-wrap">
      <Link aria-label="ALZA Total Tech Solutions home" className="brand" href="/">
        <img alt="ALZA logo" className="brand-logo" height="56" src="/assets/img/alza-brand-mark-static.webp" width="64"/>
        <span className="brand-copy"><strong>ALZA</strong><span>Total Tech Solutions</span><small>IT Infrastructure • Cloud • Cybersecurity • Software</small></span>
      </Link>
      <button aria-controls="site-nav" aria-expanded={open} aria-label={open ? "Close navigation" : "Open navigation"} className="nav-toggle" type="button" onClick={() => setOpen(v=>!v)}><span/></button>
      <nav aria-label="Primary" className={`desktop-nav${open ? " open" : ""}`} id="site-nav">
        {nav.map(([label,href], i) => <Link ref={i===0 ? firstLink : undefined} key={href} aria-current={active(href) ? "page" : undefined} href={href}>{label}</Link>)}
        <button className="btn btn-sm nav-lead-button" type="button" onClick={onLead}>Talk to ALZA</button>
      </nav>
    </div>
  </motion.header>;
}
