// JSX-native migration generated from docs/testing-runbook.html
// @ts-nocheck
import Link from "next/link";
export function Content_docs_testing_runbook() {
  return (
    <>
    <article className={"article"}>
      

      <div className={"container"}>
        

        <div className={"article-header"}>
          

          <div className={"breadcrumbs"}>
            

            <Link href={"/"}>Home</Link>
            <span>/</span>
            <Link href={"/resources/"}>Resources</Link>
            <span>/</span>
            Testing
              runbook
            
          </div>
          

          <span className={"kicker"}>Testing runbook</span>
          

          <h1>Website and product release testing runbook</h1>
          

          <p className={"lead"}>
              A practical validation runbook for the marketing site, download
              release, desktop application, and support handover.
            </p>
          

          <div className={"article-meta"}>
              ALZA Total Tech Solutions · Practical migration guidance
            </div>
          

        </div>
        

        <div className={"prose"}>
          

          <h2>Website checks</h2>
          

          <ul className={"check-list"}>
            

            <li>
                Navigation, forms, mobile layouts, keyboard access, and error
                states pass.
              </li>
            

            <li>
                Metadata, canonical links, structured data, robots, and sitemap
                are correct.
              </li>
            

            <li>
                Analytics, pixels, chatbot, and form endpoints use production
                IDs and respect consent.
              </li>
            

            <li>
                Claims, contacts, privacy text, and legal links are approved.
              </li>
            

          </ul>
          

          <h2>Download checks</h2>
          

          <ul className={"check-list"}>
            

            <li>Manifest metadata matches the exact installer.</li>
            

            <li>
                Checksum, size, version, release date, and publisher are
                verified.
              </li>
            

            <li>
                The download works on supported browsers without unsafe
                redirects.
              </li>
            

            <li>Old versions and release notes are handled intentionally.</li>
            

          </ul>
          

          <h2>Application checks</h2>
          

          <ul className={"check-list"}>
            

            <li>
                Installation, update, uninstall, and rollback paths are tested.
              </li>
            

            <li>
                Authentication, permissions, workload behavior, errors, logging,
                and data handling are validated.
              </li>
            

            <li>Security scanning and dependency review are complete.</li>
            

            <li>
                Support and incident paths are exercised before public release.
              </li>
            

          </ul>
          

        </div>
        

      </div>
      

    </article>
    <section className={"section"}>
      

      <div className={"container"}>
        

        <div className={"cta-band"} data-reveal={""}>
          

          <span className={"kicker"}>Next step</span>
          

          <h2>Turn migration complexity into a controlled delivery plan.</h2>
          

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
