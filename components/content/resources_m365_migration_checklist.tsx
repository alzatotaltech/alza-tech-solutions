// JSX-native migration generated from resources/m365-migration-checklist.html
// @ts-nocheck
export function Content_resources_m365_migration_checklist() {
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
            Checklist
            
          </div>
          

          <span className={"kicker"}>Checklist</span>
          

          <h1>Microsoft 365 migration planning checklist</h1>
          

          <p className={"lead"}>
              A printable checklist for Microsoft 365 tenant migration
              discovery, planning, governance, cutover, and validation.
            </p>
          

          <div className={"article-meta"}>
              ALZA Total Tech Solutions · Practical migration guidance
            </div>
          

        </div>
        

        <div className={"prose"}>
          

          <p className={"no-print"}>
            

            <button className={"btn btn-secondary"} data-react-action={"print"} type={"button"}>
                Print or save as PDF
              </button>
            

          </p>
          

          <div className={"callout"}>
            

            <strong>How to use this:</strong>
             assign an owner and status to
              every item. “Unknown” is a valid discovery result; it is not a
              valid cutover plan.
            
          </div>
          

          <h2>1. Business context</h2>
          

          <ul className={"check-list"}>
            

            <li>Business event and target outcome are documented.</li>
            

            <li>Source and destination organizations are confirmed.</li>
            

            <li>Executive sponsor and decision owner are named.</li>
            

            <li>
                Target dates, blackout periods, and hard dependencies are
                recorded.
              </li>
            

            <li>Success and acceptance criteria are agreed.</li>
            

          </ul>
          

          <h2>2. Tenant and identity</h2>
          

          <ul className={"check-list"}>
            

            <li>Source and destination tenants are identified.</li>
            

            <li>
                Domains, identity authority, and coexistence needs are
                understood.
              </li>
            

            <li>
                User, guest, service, shared, and privileged accounts are
                inventoried.
              </li>
            

            <li>Licensing assumptions are reviewed.</li>
            

            <li>Authentication and access changes are planned.</li>
            

          </ul>
          

          <h2>3. Workloads and data</h2>
          

          <ul className={"check-list"}>
            

            <li>Exchange mailboxes and dependencies are inventoried.</li>
            

            <li>Teams, channels, memberships, and owners are mapped.</li>
            

            <li>OneDrive users, volumes, and exceptions are assessed.</li>
            

            <li>
                SharePoint sites, owners, structure, and customizations are
                reviewed.
              </li>
            

            <li>
                Retention, legal, regulatory, and data-residency needs are
                documented.
              </li>
            

          </ul>
          

          <h2>4. Delivery plan</h2>
          

          <ul className={"check-list"}>
            

            <li>Migration waves and readiness gates are defined.</li>
            

            <li>Pilot users and validation scenarios are selected.</li>
            

            <li>Communications and service-desk readiness are planned.</li>
            

            <li>
                Escalation, rollback, and exception decisions are explicit.
              </li>
            

            <li>Cutover ownership and contact paths are confirmed.</li>
            

          </ul>
          

          <h2>5. Validation and handover</h2>
          

          <ul className={"check-list"}>
            

            <li>Technical and business validation steps are written.</li>
            

            <li>Failure and exception handling is assigned.</li>
            

            <li>Completion evidence is retained.</li>
            

            <li>
                Old access, permissions, tools, and data are handled as agreed.
              </li>
            

            <li>
                Support ownership and post-migration monitoring are active.
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
            

            <a className={"btn btn-secondary"} data-track={"cta_contact"} href={"../contact.html"}>Request an evaluation</a>
            <a className={"btn btn-ghost arrow"} href={"../resources/m365-migration-checklist.html"}>Use the planning checklist</a>
            

          </div>
          

        </div>
        

      </div>
      

    </section>
    </>
  );
}
