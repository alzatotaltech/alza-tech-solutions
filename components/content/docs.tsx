// JSX-native migration generated from docs.html
// @ts-nocheck
export function Content_docs() {
  return (
    <>
    <section className={"cloud-page-hero page-hero"}>
      <video aria-hidden={"true"} autoPlay className={"page-hero-mobile-video mobile-autoplay-media"} controlsList={"nodownload noplaybackrate nofullscreen"} disablePictureInPicture loop muted playsInline poster={"assets/img/hero-cloud-migration-mobile-poster.webp?v=42"} preload={"metadata"} tabIndex={-1}>
        <source src={"assets/video/hero-cloud-migration-v21-mobile.mp4?v=42"} type={"video/mp4"}/>
      </video>
      

      <div className={"container"}>
        

        <div className={"breadcrumbs"}>
          

          <a href={"index.html"}>Home</a>
          <span>/</span>
          Documentation
          
        </div>
        

        <span className={"kicker"}>Documentation</span>
        

        <h1>Release documentation built for verification.</h1>
        

        <p className={"lead"}>
            The documents below explain what must be confirmed before the
            application is presented as production-ready.
          </p>
        

      </div>
      

    </section>
    <section className={"section"}>
      

      <div className={"container"}>
        

        <div className={"resource-grid"}>
          

          <article className={"resource-card"}>
            

            <span className={"tag"}>Enterprise</span>
            

            <h3>Enterprise readiness checklist</h3>
            

            <p>
                Review architecture, security, governance, support, release, and
                commercial readiness.
              </p>
            

            <a className={"text-link arrow"} href={"docs/enterprise-checklist.html"}>Open checklist</a>
            

          </article>
          

          <article className={"resource-card"}>
            

            <span className={"tag"}>Installation</span>
            

            <h3>Installation guide</h3>
            

            <p>
                Placeholder-safe guidance that must be finalized against the
                signed production installer.
              </p>
            

            <a className={"text-link arrow"} href={"docs/installation-guide.html"}>Open guide</a>
            

          </article>
          

          <article className={"resource-card"}>
            

            <span className={"tag"}>Validation</span>
            

            <h3>Testing runbook</h3>
            

            <p>
                A release-validation framework for website, download,
                application, and operational checks.
              </p>
            

            <a className={"text-link arrow"} href={"docs/testing-runbook.html"}>Open runbook</a>
            

          </article>
          

        </div>
        

      </div>
      

    </section>
    <section className={"section"}>
      

      <div className={"container"}>
        

        <div className={"cta-band"} data-reveal={""}>
          

          <span className={"kicker"}>Next step</span>
          

          <h2>Need help reviewing product or migration readiness?</h2>
          

          <p>
              Tell us the workloads, user count, and target date. We’ll help you
              define a realistic evaluation path.
            </p>
          

          <div className={"actions"}>
            

            <a className={"btn btn-secondary"} data-track={"cta_contact"} href={"contact.html"}>Request an evaluation</a>
            <a className={"btn btn-ghost arrow"} href={"resources/m365-migration-checklist.html"}>Use the planning checklist</a>
            

          </div>
          

        </div>
        

      </div>
      

    </section>
    </>
  );
}
