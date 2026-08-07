// JSX-native migration generated from docs/installation-guide.html
// @ts-nocheck
export function Content_docs_installation_guide() {
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
            Installation
            
          </div>
          

          <span className={"kicker"}>Installation</span>
          

          <h1>Installation guide</h1>
          

          <p className={"lead"}>
              A safe installation-guide framework for the future ALZA Microsoft
              365 Migration Suite release.
            </p>
          

          <div className={"article-meta"}>
              ALZA Total Tech Solutions · Practical migration guidance
            </div>
          

        </div>
        

        <div className={"prose"}>
          

          <div className={"callout"}>
            

            <strong>Installer pending:</strong>
             exact steps will be finalized
              only after the signed EXE or MSI and production prerequisites are
              approved.
            
          </div>
          

          <h2>Before installing</h2>
          

          <ol>
            

            <li>Download only from the official ALZA download page.</li>
            

            <li>
                Confirm the displayed version, file size, SHA-256 checksum, and
                publisher.
              </li>
            

            <li>
                Review supported Windows versions, privileges, dependencies,
                network access, and tenant permissions.
              </li>
            

            <li>
                Follow your organization’s software-approval and
                endpoint-security process.
              </li>
            

          </ol>
          

          <h2>During installation</h2>
          

          <p>
              Verify that the operating-system publisher prompt matches the
              publisher named on the official release page. Stop if the
              signature is missing, invalid, or unexpected. Do not bypass
              security controls.
            </p>
          

          <h2>After installation</h2>
          

          <ol>
            

            <li>Confirm the installed version.</li>
            

            <li>Use a non-production or approved test environment first.</li>
            

            <li>
                Validate authentication, permissions, logging, and expected data
                handling.
              </li>
            

            <li>Record exceptions and contact ALZA before production use.</li>
            

          </ol>
          

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
