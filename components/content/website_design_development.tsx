// Dedicated Website Design & Development service page
// @ts-nocheck
import Link from "next/link";
export function Content_website_design_development() {
  return (
    <>
      <section className="cloud-page-hero page-hero">
        <video aria-hidden="true" autoPlay className="page-hero-mobile-video mobile-autoplay-media" controlsList="nodownload noplaybackrate nofullscreen" disablePictureInPicture loop muted playsInline poster="/assets/img/hero-cloud-migration-mobile-poster.webp?v=42" preload="metadata" tabIndex={-1}>
          <source src="/assets/video/hero-cloud-migration-v21-mobile.mp4?v=42" type="video/mp4" />
        </video>
        <div className="container">
          <div className="breadcrumbs"><Link href="/">Home</Link><span>/</span><Link href="/services/">Services</Link><span>/</span>Website Design &amp; Development</div>
          <span className="kicker">Website design &amp; development</span>
          <h1>Responsive business websites and web applications designed, built and supported by ALZA.</h1>
          <p className="lead">ALZA designs and develops modern websites, landing pages and web applications with clear UX, responsive interfaces, performance, SEO-ready foundations, analytics, secure deployment and ongoing support.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="heading-row">
            <div><span className="kicker">Digital delivery</span><h2>From structure and UX to production deployment.</h2></div>
            <p className="lead">The objective is a site that looks professional, works across devices, loads efficiently and can be maintained as the business grows.</p>
          </div>
          <div className="cards">
            <article className="card" data-reveal=""><h3>Website strategy &amp; UX</h3><p className="muted">Define goals, audiences, page structure, user journeys, content hierarchy and conversion paths before development starts.</p></article>
            <article className="card" data-reveal=""><h3>Responsive UI design</h3><p className="muted">Design clear interfaces for phones, tablets, laptops and desktops with consistent typography, navigation and accessibility.</p></article>
            <article className="card" data-reveal=""><h3>Frontend &amp; web development</h3><p className="muted">Build business websites, landing pages and web applications using modern web technologies selected for the project.</p></article>
            <article className="card" data-reveal=""><h3>Performance &amp; technical SEO</h3><p className="muted">Implement efficient assets, semantic structure, metadata, sitemap, crawlability and performance-focused delivery.</p></article>
            <article className="card" data-reveal=""><h3>Analytics &amp; integrations</h3><p className="muted">Connect approved analytics, enquiry forms, CRM, automation, chat and other business workflows where required.</p></article>
            <article className="card" data-reveal=""><h3>Deployment &amp; ongoing support</h3><p className="muted">Deploy to suitable hosting, configure domains and HTTPS, support releases and maintain the site after launch.</p></article>
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container two-col">
          <div>
            <span className="kicker">Typical projects</span>
            <h2>Web delivery for businesses that need more than a template.</h2>
            <ul className="check-list">
              <li>Corporate and company websites</li>
              <li>Service and product landing pages</li>
              <li>Responsive redesign and modernization</li>
              <li>Custom web interfaces and business applications</li>
              <li>SEO-ready site structure and performance improvements</li>
              <li>Analytics, forms, CRM and workflow integrations</li>
            </ul>
          </div>
          <div className="card">
            <span className="kicker">Delivery approach</span>
            <h3>Design, build, validate, launch and support.</h3>
            <p className="muted">ALZA can handle the project as a defined website engagement or as part of a broader IT, cloud, cybersecurity or automation requirement.</p>
            <Link className="text-link arrow" href="/contact/">Discuss a website project</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="cta-band" data-reveal="">
            <span className="kicker">Next step</span>
            <h2>Tell us what the website or web application needs to achieve.</h2>
            <p>Share the business objective, target audience, required pages or workflows, preferred timeline and any existing domain, hosting or content.</p>
            <div className="actions"><Link className="btn btn-secondary" href="/contact/">Discuss your website project</Link><Link className="btn btn-ghost arrow" href="/services/">Explore all IT services</Link></div>
          </div>
        </div>
      </section>
    </>
  );
}
