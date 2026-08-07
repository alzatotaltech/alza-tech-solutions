// JSX-native migration generated from resources.html
// @ts-nocheck
import Link from "next/link";
export function Content_resources() {
  return (
    <>
    <section className={"cloud-page-hero page-hero"}>
      <video aria-hidden={"true"} autoPlay className={"page-hero-mobile-video mobile-autoplay-media"} controlsList={"nodownload noplaybackrate nofullscreen"} disablePictureInPicture loop muted playsInline poster={"/assets/img/hero-cloud-migration-mobile-poster.webp?v=42"} preload={"metadata"} tabIndex={-1}>
        <source src={"/assets/video/hero-cloud-migration-v21-mobile.mp4?v=42"} type={"video/mp4"}/>
      </video>
      

      <div className={"container"}>
        

        <div className={"breadcrumbs"}>
          

          <Link href={"/"}>Home</Link>
          <span>/</span>
          Resources
          
        </div>
        

        <span className={"kicker"}>Resources</span>
        

        <h1>Plan the migration before the deadline plans it for you.</h1>
        

        <p className={"lead"}>
            Use these practical resources to frame scope, governance, risks, and
            stakeholder decisions.
          </p>
        

      </div>
      

    </section>
    <section className={"section"}>
      

      <div className={"container"}>
        

        <div className={"resource-grid"}>
          

          <article className={"resource-card"}>
            

            <span className={"tag"}>Printable checklist</span>
            

            <h3>Microsoft 365 migration planning checklist</h3>
            

            <p>
                A structured readiness list covering business context, identity,
                workloads, governance, communications, cutover, and validation.
              </p>
            

            <Link className={"text-link arrow"} href={"/resources/m365-migration-checklist/"}>Open checklist</Link>
            

          </article>
          

          <article className={"resource-card"}>
            

            <span className={"tag"}>Planning guide</span>
            

            <h3>How to structure a tenant migration</h3>
            

            <p>
                A practical operating model for moving from inventory to
                migration waves and acceptance.
              </p>
            

            <Link className={"text-link arrow"} href={"/resources/tenant-migration-planning-guide/"}>Read guide</Link>
            

          </article>
          

          <article className={"resource-card"}>
            

            <span className={"tag"}>Security guide</span>
            

            <h3>Security questions to answer before migration</h3>
            

            <p>
                A focused guide to permissions, data boundaries, logging,
                exceptions, and release trust.
              </p>
            

            <Link className={"text-link arrow"} href={"/resources/migration-security-guide/"}>Read guide</Link>
            

          </article>
          

          <article className={"resource-card"}>
            

            <span className={"tag"}>Documentation</span>
            

            <h3>Product and release documentation</h3>
            

            <p>
                Installation, validation, and enterprise review documents
                prepared for the future production release.
              </p>
            

            <Link className={"text-link arrow"} href={"/docs/"}>Browse docs</Link>
            

          </article>
          

          <article className={"resource-card"}>
            

            <span className={"tag"}>Release status</span>
            

            <h3>Installer availability</h3>
            

            <p>
                See the current application publishing status and the
                verification information that will accompany the release.
              </p>
            

            <Link className={"text-link arrow"} href={"/download/"}>View status</Link>
            

          </article>
          

          <article className={"resource-card"}>
            

            <span className={"tag"}>Evaluation</span>
            

            <h3>Discuss your migration</h3>
            

            <p>
                Bring the checklist and your current assumptions to a guided
                evaluation with ALZA.
              </p>
            

            <Link className={"text-link arrow"} href={"/contact/"}>Start enquiry</Link>
            

          </article>
          

        </div>
        

      </div>
      

    </section>
    <section className={"section"}>
      

      <div className={"container"}>
        

        <div className={"cta-band"} data-reveal={""}>
          

          <span className={"kicker"}>Next step</span>
          

          <h2>
              Use the checklist, then turn the findings into a delivery plan.
            </h2>
          

          <p>
              Tell us the workloads, user count, and target date. We’ll help you
              define a realistic evaluation path.
            </p>
          

          <div className={"actions"}>
            

            <Link className={"btn btn-secondary"} data-track={"cta_contact"} href={"/contact/"}>Request an evaluation</Link>
            <Link className={"btn btn-ghost arrow"} href={"/resources/m365-migration-checklist/"}>Use the planning checklist</Link>
            

          </div>
          

        </div>
        

      </div>
      

    </section>
    </>
  );
}
