// JSX-native migration generated from docs/enterprise-checklist.html
// @ts-nocheck
export function Content_docs_enterprise_checklist() {
  return (
    <>
    <article className={"article"}>
      

      <div className={"container"}>
        

        <div className={"article-header"}>
          

          <div className={"breadcrumbs"}>
            

            <a href={"../index.html"}>Home</a>
            <span>/</span>
            <a href={"../resources.html"}>Resources</a>
            <span>/</span>
            Enterprise
              checklist
            
          </div>
          

          <span className={"kicker"}>Enterprise checklist</span>
          

          <h1>Enterprise release readiness checklist</h1>
          

          <p className={"lead"}>
              A governance checklist for reviewing the ALZA migration
              application before enterprise publication.
            </p>
          

          <div className={"article-meta"}>
              ALZA Total Tech Solutions · Practical migration guidance
            </div>
          

        </div>
        

        <div className={"prose"}>
          

          <div className={"callout"}>
            

            <strong>Status:</strong>
             use this as an approval gate. It does not
              certify that the production application has passed these checks.
            
          </div>
          

          <h2>Product evidence</h2>
          

          <ul className={"check-list"}>
            

            <li>Supported use cases and exclusions are documented.</li>
            

            <li>Feature claims match the tested production build.</li>
            

            <li>
                Supported Windows versions and prerequisites are confirmed.
              </li>
            

            <li>Licensing and support terms are approved.</li>
            

          </ul>
          

          <h2>Security and privacy</h2>
          

          <ul className={"check-list"}>
            

            <li>Permissions and data flows are documented.</li>
            

            <li>
                Credential, token, log, and local-data handling are reviewed.
              </li>
            

            <li>Retention and deletion behavior are clear.</li>
            

            <li>
                Vulnerability, dependency, and malware scans are complete.
              </li>
            

          </ul>
          

          <h2>Release and operations</h2>
          

          <ul className={"check-list"}>
            

            <li>The installer is code-signed.</li>
            

            <li>
                Version, file size, checksum, and release notes are published.
              </li>
            

            <li>
                Support, escalation, incident, and update routes are ready.
              </li>
            

            <li>Website statements and documentation match the release.</li>
            

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
            

            <a className={"btn btn-secondary"} data-track={"cta_contact"} href={"../contact.html"}>Request an evaluation</a>
            <a className={"btn btn-ghost arrow"} href={"../resources/m365-migration-checklist.html"}>Use the planning checklist</a>
            

          </div>
          

        </div>
        

      </div>
      

    </section>
    </>
  );
}
