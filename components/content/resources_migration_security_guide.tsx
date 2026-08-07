// JSX-native migration generated from resources/migration-security-guide.html
// @ts-nocheck
import Link from "next/link";
export function Content_resources_migration_security_guide() {
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
            Security
              guide
            
          </div>
          

          <span className={"kicker"}>Security guide</span>
          

          <h1>Security questions to answer before Microsoft 365 migration</h1>
          

          <p className={"lead"}>
              A focused security and governance guide for tenant boundaries,
              permissions, data handling, logging, exceptions, and release
              trust.
            </p>
          

          <div className={"article-meta"}>
              ALZA Total Tech Solutions · Practical migration guidance
            </div>
          

        </div>
        

        <div className={"prose"}>
          

          <p>
              Security planning begins with boundaries: whose tenant, whose
              data, whose approval, and whose responsibility. Use the following
              questions to expose assumptions early.
            </p>
          

          <h2>Access and identity</h2>
          

          <ul>
            

            <li>
                Which accounts and roles can access source and destination
                tenants?
              </li>
            

            <li>
                What is the minimum permission required for each migration
                activity?
              </li>
            

            <li>
                How are privileged sessions approved, protected, monitored, and
                removed?
              </li>
            

          </ul>
          

          <h2>Data handling</h2>
          

          <ul>
            

            <li>
                What data is read, staged, transformed, logged, or retained?
              </li>
            

            <li>
                Where does migration data travel and where can it persist?
              </li>
            

            <li>
                How are legal holds, retention, sensitive data, and residency
                addressed?
              </li>
            

          </ul>
          

          <h2>Exceptions and evidence</h2>
          

          <ul>
            

            <li>Who can approve exceptions, and when do they expire?</li>
            

            <li>Which events and decisions are logged?</li>
            

            <li>What evidence supports validation and acceptance?</li>
            

          </ul>
          

          <h2>Application distribution</h2>
          

          <p>
              For a desktop application, publish the exact version, SHA-256
              checksum, code-signing publisher, operating-system support,
              prerequisites, release notes, and a safe support route. Do not ask
              customers to bypass security warnings.
            </p>
          

          <div className={"callout"}>
            

            <strong>Important:</strong>
             architecture and security claims must
              be verified against the final production application and
              engagement design.
            
          </div>
          

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
