// JSX-native migration generated from index.html
// @ts-nocheck
import Link from "next/link";
import { ServiceBentoGrid } from "@/components/premium/ServiceBentoGrid";
import { PremiumFaq } from "@/components/premium/PremiumFaq";
export function Content_index() {
  return (
    <>
    <section className={"hero hero-branded"}>
      <img alt={""} aria-hidden={"true"} className={"home-hero-animation home-hero-animation-desktop"} decoding={"async"} fetchPriority={"high"} height={600} src={"/assets/img/hero-cloud-migration-v21.webp?v=41"} width={1144}/>
      <video aria-hidden={"true"} autoPlay className={"home-hero-video home-hero-video-mobile"} loop muted playsInline poster={"/assets/img/hero-cloud-migration-mobile-poster.webp?v=41"} preload={"auto"} tabIndex={-1}>
        <source src={"/assets/video/hero-cloud-migration-v21-mobile.mp4?v=41"} type={"video/mp4"}/>
      </video>
      

      <div className={"container hero-grid"}>
        

        <div className={"hero-copy"}>
          

          <span className={"eyebrow"}>
            <i></i>
            ALZA Total Tech Solutions FZ-LLC
          </span>
          <p className={"official-identity"}>Official website of ALZA Total Tech Solutions FZ-LLC — an independent UAE-registered IT consultancy and developer of the ALZA M365 Migration Suite.</p>
          

          <h1>
            Complete IT infrastructure. Secure cloud. 
            <span>Proprietary Microsoft 365 migration software.</span>
          </h1>
          

          <p className={"lead"}>ALZA Total Tech Solutions FZ-LLC provides home and office IT setup, networks, servers, cloud, cybersecurity, managed support, website design and development, and its flagship proprietary software, the ALZA M365 Migration Suite.</p>
          

          <div className={"actions"}>
            <Link className={"btn"} href={"/products/"}>
              Explore ALZA M365 Migration Suite 
              <span aria-hidden={"true"}>›</span>
            </Link>
            <Link className={"btn btn-ghost"} href={"/solutions/"}>
              Explore Complete IT Solutions 
              <span aria-hidden={"true"}>›</span>
            </Link>
          </div>
          

        </div>
        

        <figure aria-label={"ALZA cloud and Microsoft 365 migration technology visual"} className={"home-hero-media"}>
          

          <img alt={"ALZA cloud and Microsoft 365 migration technology visual"} decoding={"async"} fetchPriority={"high"} height={600} src={"/assets/img/hero-cloud-migration-v21.webp?v=39"} width={1144}/>
          

        </figure>
        

      </div>
      

      <div className={"container proof-strip-shell"}>
        

        <div className={"proof-strip proof-grid"}>
          <div>
            <strong>Home &amp; office IT</strong>
            <span>Setup, devices, Wi-Fi and support</span>
          </div>
          <div>
            <strong>Complete infrastructure</strong>
            <span>Networks, servers, storage and backup</span>
          </div>
          <div>
            <strong>Cloud &amp; Microsoft 365</strong>
            <span>Migration, administration and modernization</span>
          </div>
          <div>
            <strong>Cybersecurity</strong>
            <span>Identity, endpoint and network protection</span>
          </div>
          <div>
            <strong>Managed IT support</strong>
            <span>Remote and onsite operational assistance</span>
          </div>
          <div>
            <strong>Flagship software</strong>
            <span>ALZA M365 Migration Suite</span>
          </div>
        </div>
        

      </div>
      

    </section>
    <ServiceBentoGrid />
    <section className={"section"}>
      

      <div className={"container"}>
        

        <div className={"heading-row"}>
          

          <div>
            

            <span className={"kicker"}>Flagship software architecture</span>
            

            <h2>
                Keep migration payloads inside your controlled execution
                boundary.
              </h2>
            

          </div>
          

          <p className={"lead"}>
              Many cloud migration services stage or relay customer content
              through vendor-managed infrastructure. ALZA separates the
              lightweight licensing control plane from the migration data plane
              running in your environment.
            </p>
          

        </div>
        

        <div className={"two-col architecture-layout"}>
          

          <div>
            

            <span className={"kicker"}>No content pass-through architecture</span>
            

            <h3>Your data plane stays under your control.</h3>
            

            <p className={"lead"}>
                The local migration engine reads from the authorized source
                tenant and writes directly to the destination tenant. ALZA cloud
                services do not act as a content staging, storage, or relay
                layer.
              </p>
            

            <ul className={"check-list"}>
              

              <li>Customer-managed Windows hosts and network controls</li>
              

              <li>Source-to-target transfer through Microsoft 365 APIs</li>
              

              <li>
                  Credentials and authorization tokens handled by the local
                  deployment
                </li>
              

              <li>
                  Licensing and operational metering separated from migration
                  content
                </li>
              

            </ul>
            

          </div>
          

          <figure className={"architecture-diagram-figure responsive-media-pair"}>
            

            <img alt={"Customer-controlled perimeter architecture: Microsoft 365 source tenant transfers through the customer-hosted ALZA Engine to the Microsoft 365 target tenant. The separate ALZA cloud control plane handles license validation, entitlement, usage metering, and operational health signals, with no customer migration content staging."} className={"architecture-diagram-image media-webp-desktop"} decoding={"async"} height={600} loading={"lazy"} src={"/assets/img/customer-controlled-perimeter-diagram.webp?v=42"} width={805}/>
            <video aria-hidden={"true"} autoPlay className={"media-h264-mobile mobile-autoplay-media"} controlsList={"nodownload noplaybackrate nofullscreen"} disablePictureInPicture hidden loop muted playsInline poster={"/assets/img/customer-controlled-perimeter-diagram-mobile-poster.webp?v=42"} preload={"metadata"} tabIndex={-1}>
              <source src={"/assets/video/customer-controlled-perimeter-diagram-mobile.mp4?v=42"} type={"video/mp4"}/>
            </video>
            

            <figcaption>Customer-hosted migration data plane with a separate ALZA licensing and operational control plane.</figcaption>
            

          </figure>
          

        </div>
        

      </div>
      

      <div className={"cards architecture-benefits"}>
        

        <article className={"card"} data-reveal={""}>
          

          <div className={"card-icon"}>
            

            <svg aria-hidden={"true"} fill={"none"} stroke={"currentColor"} strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"1.8"} viewBox={"0 0 24 24"}>
              

              <path d={"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"}></path>
              

              <path d={"m9 12 2 2 4-4"}></path>
              

            </svg>
            

          </div>
          

          <h3>Total data-plane control</h3>
          

          <p className={"muted"}>
                Apply your own network, host, access, monitoring, and
                change-management controls to the migration workers.
              </p>
          

        </article>
        

        <article className={"card"} data-reveal={""}>
          

          <div className={"card-icon"}>
            

            <svg aria-hidden={"true"} fill={"none"} stroke={"currentColor"} strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"1.8"} viewBox={"0 0 24 24"}>
              

              <rect height={11} rx={"2"} width={18} x={"3"} y={"11"}></rect>
              

              <path d={"M7 11V7a5 5 0 0 1 10 0v4"}></path>
              

            </svg>
            

          </div>
          

          <h3>No vendor staging layer</h3>
          

          <p className={"muted"}>
                Migration content is not designed to be stored or relayed
                through ALZA cloud infrastructure.
              </p>
          

        </article>
        

        <article className={"card"} data-reveal={""}>
          

          <div className={"card-icon"}>
            

            <svg aria-hidden={"true"} fill={"none"} stroke={"currentColor"} strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"1.8"} viewBox={"0 0 24 24"}>
              

              <path d={"m13 2-9 12h8l-1 8 9-12h-8l1-8Z"}></path>
              

            </svg>
            

          </div>
          

          <h3>Performance you can scale</h3>
          

          <p className={"muted"}>
                Add customer-managed worker capacity to increase parallel
                execution within Microsoft service and licensing limits.
              </p>
          

        </article>
        

      </div>
      

    </section>
    <section className={"section section-dark"} id={"capabilities"}>
      

      <div className={"container"}>
        

        <div className={"heading-row"}>
          

          <div>
            

            <span className={"kicker"}>Comprehensive workload execution</span>
            

            <h2>
                Deep migration handling across four Microsoft 365 pillars.
              </h2>
            

          </div>
          

          <p className={"lead"}>
              Preserve business context—not just files. Supported behavior
              depends on Microsoft APIs, source conditions, permissions, and the
              selected migration scope.
            </p>
          

        </div>
        

        <div className={"tabs"}>
          

          <div aria-label={"Migration workloads"} className={"tab-list"} role={"tablist"}>
            

            <button aria-controls={"panel-exchange"} aria-selected={"true"} className={"tab-button"} data-track-label={"Exchange"} id={"tab-exchange"} role={"tab"} tabIndex={0} type={"button"}>
                Email architecture
              </button>
            

            <button aria-controls={"panel-onedrive"} aria-selected={"false"} className={"tab-button"} data-track-label={"OneDrive"} id={"tab-onedrive"} role={"tab"} tabIndex={-1} type={"button"}>
                OneDrive storage
              </button>
            

            <button aria-controls={"panel-sharepoint"} aria-selected={"false"} className={"tab-button"} data-track-label={"SharePoint"} id={"tab-sharepoint"} role={"tab"} tabIndex={-1} type={"button"}>
                SharePoint libraries
              </button>
            

            <button aria-controls={"panel-teams"} aria-selected={"false"} className={"tab-button"} data-track-label={"Teams"} id={"tab-teams"} role={"tab"} tabIndex={-1} type={"button"}>
                Teams to HTML
              </button>
            

          </div>
          

          <div>
            

            <section aria-labelledby={"tab-exchange"} className={"tab-panel"} id={"panel-exchange"} role={"tabpanel"}>
              

              <span className={"kicker"}>Email architecture</span>
              

              <h3>Move mailbox content with identity-aware mapping.</h3>
              

              <p className={"muted"}>
                  Transfer supported mailbox content, folder structures,
                  calendars, and mailbox settings while mapping source
                  identities and domains to the target environment.
                </p>
              

              <div className={"feature-grid"}>
                

                <div className={"feature-chip"}>Mailbox folders &amp; messages</div>
                

                <div className={"feature-chip"}>Calendar content</div>
                

                <div className={"feature-chip"}>Identity / domain mapping</div>
                

                <div className={"feature-chip"}>Pre-stage &amp; delta passes</div>
                

              </div>
              

            </section>
            

            <section aria-labelledby={"tab-onedrive"} className={"tab-panel"} hidden id={"panel-onedrive"} role={"tabpanel"}>
              

              <span className={"kicker"}>OneDrive personal storage</span>
              

              <h3>Preserve content context and rebuild access.</h3>
              

              <p className={"muted"}>
                  Move files and folders while retaining supported metadata and
                  reconstructing permissions and sharing relationships against
                  mapped destination identities.
                </p>
              

              <div className={"feature-grid"}>
                

                <div className={"feature-chip"}>Created / modified metadata</div>
                

                <div className={"feature-chip"}>User identity mapping</div>
                

                <div className={"feature-chip"}>Permission reconstruction</div>
                

                <div className={"feature-chip"}>Path readiness checks</div>
                

              </div>
              

            </section>
            

            <section aria-labelledby={"tab-sharepoint"} className={"tab-panel"} hidden id={"panel-sharepoint"} role={"tabpanel"}>
              

              <span className={"kicker"}>SharePoint document libraries</span>
              

              <h3>
                  Execute complex library moves without flattening structure.
                </h3>
              

              <p className={"muted"}>
                  Support multi-level document trees, mapped metadata and
                  sharing, with pre-migration path validation to identify
                  avoidable failures before execution.
                </p>
              

              <div className={"feature-grid"}>
                

                <div className={"feature-chip"}>Libraries &amp; folders</div>
                

                <div className={"feature-chip"}>Metadata preservation</div>
                

                <div className={"feature-chip"}>
                    Permissions &amp; sharing links
                  </div>
                

                <div className={"feature-chip"}>Path-length validation</div>
                

              </div>
              

            </section>
            

            <section aria-labelledby={"tab-teams"} className={"tab-panel"} hidden id={"panel-teams"} role={"tabpanel"}>
              

              <span className={"kicker"}>Teams history archival</span>
              

              <h3>
                  Preserve supported conversation history as searchable HTML.
                </h3>
              

              <p className={"muted"}>
                  Export supported historical Teams chat threads into organized
                  HTML archives stored in destination OneDrive. The currently
                  published scope is limited to HTML archival.
                </p>
              

              <div className={"feature-grid"}>
                

                <div className={"feature-chip"}>Searchable HTML archive</div>
                

                <div className={"feature-chip"}>Destination OneDrive storage</div>
                

                <div className={"feature-chip"}>Mapped user context</div>
                

                <div className={"feature-chip"}>Readable historical record</div>
                

              </div>
              

            </section>
            

          </div>
          

        </div>
        

      </div>
      

    </section>
    <section className={"section section-soft"} id={"how-it-works"}>
      

      <div className={"container"}>
        

        <div className={"heading-row"}>
          

          <div>
            

            <span className={"kicker"}>Enterprise execution engine</span>
            

            <h2>Engineer the cutover in controlled passes.</h2>
            

          </div>
          

          <p className={"lead"}>
              Move the bulk early, reconcile changes repeatedly, and reserve the
              final window for the smallest practical remaining scope.
            </p>
          

        </div>
        

        <div className={"cutover-flow"} data-reveal={""}>
          

          <article className={"cutover-stage"}>
            

            <span>01</span>
            <small>Weeks before</small>
            

            <h3>Pre-stage pass</h3>
            

            <p>
                Move the bulk of eligible content ahead of the deadline while
                users continue working.
              </p>
            

          </article>
          

          <div className={"cutover-connector"}>→</div>
          

          <article className={"cutover-stage"}>
            

            <span>02</span>
            <small>Until cutover</small>
            

            <h3>Delta syncs</h3>
            

            <p>
                Reconcile supported new and changed items without restarting the
                migration.
              </p>
            

          </article>
          

          <div className={"cutover-connector"}>→</div>
          

          <article className={"cutover-stage"}>
            

            <span>03</span>
            <small>Final window</small>
            

            <h3>Final cutover</h3>
            

            <p>
                Capture remaining changes, validate outcomes, and minimize user
                disruption.
              </p>
            

          </article>
          

        </div>
        

        <div className={"cards execution-cards"}>
          

          <article className={"card"} data-reveal={""}>
            

            <div className={"card-icon"}>
              

              <svg aria-hidden={"true"} fill={"none"} stroke={"currentColor"} strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"1.8"} viewBox={"0 0 24 24"}>
                

                <path d={"m12 2 9 5-9 5-9-5 9-5Z"}></path>
                

                <path d={"m3 12 9 5 9-5M3 17l9 5 9-5"}></path>
                

              </svg>
              

            </div>
            

            <h3>Verified delta processing</h3>
            

            <p className={"muted"}>
                Delta skips unchanged items when verified through supported
                hashes or metadata. When reliable verification is unavailable,
                the engine uses a controlled reconciliation pass.
              </p>
            

          </article>
          

          <article className={"card"} data-reveal={""}>
            

            <div className={"card-icon"}>
              

              <svg aria-hidden={"true"} fill={"none"} stroke={"currentColor"} strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"1.8"} viewBox={"0 0 24 24"}>
                

                <path d={"M4 19V9M10 19V5M16 19v-7M22 19H2"}></path>
                

              </svg>
              

            </div>
            

            <h3>Programmable scheduling</h3>
            

            <p className={"muted"}>
                Schedule high-volume jobs during approved off-peak windows and
                align execution with communications, support, and change
                control.
              </p>
            

          </article>
          

          <article className={"card"} data-reveal={""}>
            

            <div className={"card-icon"}>
              

              <svg aria-hidden={"true"} fill={"none"} stroke={"currentColor"} strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"1.8"} viewBox={"0 0 24 24"}>
                

                <path d={"m13 2-9 12h8l-1 8 9-12h-8l1-8Z"}></path>
                

              </svg>
              

            </div>
            

            <h3>Service-aware scale-out</h3>
            

            <p className={"muted"}>
                Deploy workers across multiple customer-managed virtual machines
                to scale throughput within Microsoft service limits and licensed
                concurrency.
              </p>
            

          </article>
          

        </div>
        

        <p className={"fine-print execution-note"}>
            Actual throughput and service interruption depend on workload,
            tenant condition, Microsoft API limits, network capacity, worker
            sizing, and cutover design.
          </p>
        

      </div>
      

    </section>
    <section className={"section"}>
      

      <div className={"container two-col"}>
        

        <div>
          

          <span className={"kicker"}>Performance with operational control</span>
          

          <h2>Scale throughput within Microsoft service limits.</h2>
          

          <p className={"lead"}>
              Additional workers can increase parallel execution, while actual
              throughput remains governed by Microsoft throttling, customer
              network capacity, worker sizing, workload conditions, and licensed
              concurrency.
            </p>
          

          <ul className={"check-list"}>
            

            <li>
                Distribute work across dedicated internal virtual machines
              </li>
            

            <li>
                Observe throughput, active operations, retries, and throttling
                exposure
              </li>
            

            <li>Control concurrent jobs within licensed capacity</li>
            

            <li>
                Pause, resume, discover, pre-stage, delta-sync, and cut over by
                plan
              </li>
            

          </ul>
          

          <div className={"actions mt-28"}>
            

            <Link className={"btn btn-secondary arrow"} href={"/architecture/"}>Review the architecture</Link>
            

          </div>
          

        </div>
        

        <div className={"glass-panel section-dark"}>
          

          <div className={"signal-grid"}>
            

            <div className={"signal"}>
              

              <b>Throughput</b>
              <span>Measure actual execution velocity</span>
              

            </div>
            

            <div className={"signal"}>
              

              <b>Active jobs</b>
              <span>Control concurrent operations</span>
              

            </div>
            

            <div className={"signal"}>
              

              <b>Throttling</b>
              <span>Detect and adapt to service pressure</span>
              

            </div>
            

            <div className={"signal"}>
              

              <b>Retries</b>
              <span>Expose failures and recovery work</span>
              

            </div>
            

          </div>
          

        </div>
        

      </div>
      

    </section>
    <section className={"section section-dark pricing-preview"} id={"pricing"}>
      

      <div className={"container"}>
        

        <div className={"heading-row"}>
          

          <div>
            

            <span className={"kicker"}>Transparent, friction-free pricing</span>
            

            <h2>All-inclusive licensing. No hidden data fees.</h2>
            

          </div>
          

          <p className={"lead"}>
              Choose the complete migration suite or license Email Only. Every
              tier states its seats, registered-device cap, concurrent-job
              limit, and tenant-pair control before purchase.
            </p>
          

        </div>
        

        <div className={"pricing-value-grid"}>
          

          <article className={"glass-panel"} data-reveal={""}>
            

            <span className={"kicker"}>Complete Suite</span>
            

            <h3>Email, OneDrive, SharePoint, and Teams to HTML.</h3>
            

            <p>
              
                One license unlocks the complete workload bundle. Plans start at
                
              <strong>$149 monthly</strong>
               or
                
              <strong>$1,490 annually</strong>
              .
              
            </p>
            

            <Link className={"text-link arrow"} href={"/pricing/#complete-suite"}>Compare Complete Suite plans</Link>
            

          </article>
          

          <article className={"glass-panel"} data-reveal={""}>
            

            <span className={"kicker"}>Email Only</span>
            

            <h3>Mailbox migration without the bundle price.</h3>
            

            <p>
              
                For teams that only need mailbox migration. Plans start at
                
              <strong>$69 monthly</strong>
               or 
              <strong>$690 annually</strong>
              .
              
            </p>
            

            <Link className={"text-link arrow"} href={"/pricing/#email-only"}>Compare Email Only plans</Link>
            

          </article>
          

          <article className={"glass-panel"} data-reveal={""}>
            

            <span className={"kicker"}>Predictable controls</span>
            

            <h3>Pay for seats—not gigabytes.</h3>
            

            <p>
                No per-GB licensing charge. Hard device and concurrency caps
                protect entitlement boundaries and help keep execution
                controlled.
              </p>
            

            <Link className={"text-link arrow"} href={"/pricing/#license-terms"}>Review licensing limits</Link>
            

          </article>
          

        </div>
        

        <p className={"fine-print pricing-note"}>
            *Unlimited licensed storage means ALZA does not apply a per-GB
            license fee. Microsoft service quotas, API throttling, tenant
            conditions, network capacity, plan limits, and acceptable-use terms
            still apply.
          </p>
        

      </div>
      

    </section>
    <PremiumFaq />
    <section className={"section"}>
      

      <div className={"container"}>
        

        <div className={"cta-band"} data-reveal={""}>
          

          <span className={"kicker"}>Next step</span>
          

          <h2>Plan your IT environment or Microsoft 365 migration with one accountable partner.</h2>
          

          <p>Tell us whether you need a new setup, infrastructure upgrade, cloud project, security improvement, website or web application, ongoing support, or migration software evaluation.</p>
          

          <div className={"actions"}>
            

            <Link className={"btn btn-secondary"} data-track={"cta_contact"} href={"/contact/"}>Request an IT consultation</Link>
            <Link className={"btn btn-ghost arrow"} href={"/resources/m365-migration-checklist/"}>Use the planning checklist</Link>
            

          </div>
          

        </div>
        

      </div>
      

    </section>
    </>
  );
}
