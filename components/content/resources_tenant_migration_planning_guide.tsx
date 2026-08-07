// JSX-native migration generated from resources/tenant-migration-planning-guide.html
// @ts-nocheck
export function Content_resources_tenant_migration_planning_guide() {
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
            Planning
              guide
            
          </div>
          

          <span className={"kicker"}>Planning guide</span>
          

          <h1>How to structure a Microsoft 365 tenant migration</h1>
          

          <p className={"lead"}>
              A practical operating model for moving from tenant discovery to
              waves, cutover, validation, and operational handover.
            </p>
          

          <div className={"article-meta"}>
              ALZA Total Tech Solutions · Practical migration guidance
            </div>
          

        </div>
        

        <div className={"prose"}>
          

          <p>
              A strong migration plan connects business purpose to technical
              execution. Start by defining the event driving the move, the
              people authorized to make decisions, and the evidence required to
              call the work complete.
            </p>
          

          <h2>Build a fact base</h2>
          

          <p>
              Inventory tenants, identities, domains, workloads, data, owners,
              integrations, policies, deadlines, and known constraints. Record
              uncertainty instead of hiding it.
            </p>
          

          <h2>Separate workstreams, connect decisions</h2>
          

          <p>
              Exchange, Teams, OneDrive, and SharePoint have different migration
              objects and risks. Manage them as distinct workstreams, but
              connect them through shared identities, owners, waves,
              communications, and acceptance criteria.
            </p>
          

          <h2>Plan in waves</h2>
          

          <p>
              A wave should be more than a list of users. Include prerequisites,
              accountable owners, migration window, communications, validation,
              exception routes, and downstream support.
            </p>
          

          <table>
            

            <thead>
              

              <tr>
                

                <th>Stage</th>
                

                <th>Core output</th>
                

                <th>Decision</th>
                

              </tr>
              

            </thead>
            

            <tbody>
              

              <tr>
                

                <td>Discover</td>
                

                <td>Fact base and gaps</td>
                

                <td>Is scope understood?</td>
                

              </tr>
              

              <tr>
                

                <td>Design</td>
                

                <td>Waves and controls</td>
                

                <td>Is the plan executable?</td>
                

              </tr>
              

              <tr>
                

                <td>Pilot</td>
                

                <td>Observed evidence</td>
                

                <td>What must change?</td>
                

              </tr>
              

              <tr>
                

                <td>Execute</td>
                

                <td>Migrated waves</td>
                

                <td>Proceed, pause, or escalate?</td>
                

              </tr>
              

              <tr>
                

                <td>Handover</td>
                

                <td>Accepted service</td>
                

                <td>Who owns operations?</td>
                

              </tr>
              

            </tbody>
            

          </table>
          

          <h2>Define “done” before cutover</h2>
          

          <p>
              Technical completion is not the same as operational acceptance.
              Confirm user access, workload behavior, exceptions,
              communications, support ownership, and decommissioning decisions.
            </p>
          

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
