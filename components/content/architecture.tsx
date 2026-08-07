// JSX-native migration generated from architecture.html
// @ts-nocheck
import Link from "next/link";
export function Content_architecture() {
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
          Architecture
          
        </div>
        

        <span className={"kicker"}>Architecture &amp; trust</span>
        

        <h1>Separate migration content from vendor control services.</h1>
        

        <p className={"lead"}>
            ALZA is designed with a customer-hosted data plane for migration
            execution and a separate cloud control plane for licensing and
            operational metering. This reduces third-party content exposure
            without misrepresenting the risks that remain in Microsoft APIs,
            networks, endpoints, or customer configuration.
          </p>
        

      </div>
      

    </section>
    <section className={"section architecture-visual-section"}>
      

      <div className={"container architecture-visual-container"}>
        

        <div className={"pricing-section-head"}>
          

          <span className={"kicker"}>Customer-controlled execution boundary</span>
          

          <h2>Migration content moves directly through your environment.</h2>
          

          <p className={"lead"}>The local ALZA Engine handles the source-to-target data path, while the separate ALZA cloud control plane is limited to licensing, entitlement, usage metering, and operational health signals.</p>
          

        </div>
        

        <figure className={"architecture-diagram-figure responsive-media-pair"}>
          

          <img alt={"Customer-controlled perimeter architecture: Microsoft 365 source tenant transfers through the customer-hosted ALZA Engine to the Microsoft 365 target tenant. The separate ALZA cloud control plane handles license validation, entitlement, usage metering, and operational health signals, with no customer migration content staging."} className={"architecture-diagram-image media-webp-desktop"} decoding={"async"} height={600} loading={"lazy"} src={"/assets/img/customer-controlled-perimeter-diagram.webp?v=42"} width={805}/>
          <video aria-hidden={"true"} autoPlay className={"media-h264-mobile mobile-autoplay-media"} controlsList={"nodownload noplaybackrate nofullscreen"} disablePictureInPicture hidden loop muted playsInline poster={"/assets/img/customer-controlled-perimeter-diagram-mobile-poster.webp?v=42"} preload={"metadata"} tabIndex={-1}>
            <source src={"/assets/video/customer-controlled-perimeter-diagram-mobile.mp4?v=42"} type={"video/mp4"}/>
          </video>
          

          <figcaption>Customer-hosted migration data plane with a separate ALZA licensing and operational control plane.</figcaption>
          

        </figure>
        

      </div>
      

    </section>
    <section className={"section"}>
      

      <div className={"container"}>
        

        <div className={"cards"}>
          

          <article className={"card"} data-reveal={""}>
            

            <div className={"card-icon"}>
              

              <svg aria-hidden={"true"} fill={"none"} stroke={"currentColor"} strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"1.8"} viewBox={"0 0 24 24"}>
                

                <path d={"M7 18h10a4 4 0 0 0 .5-7.97A6 6 0 0 0 6.1 8.1 5 5 0 0 0 7 18Z"}></path>
                

                <path d={"m9 13 3-3 3 3M12 10v6"}></path>
                

              </svg>
              

            </div>
            

            <h3>Customer-hosted data plane</h3>
            

            <p className={"muted"}>
                Workers run on customer-managed Windows infrastructure and move
                content between authorized Microsoft 365 tenants.
              </p>
            

          </article>
          

          <article className={"card"} data-reveal={""}>
            

            <div className={"card-icon"}>
              

              <svg aria-hidden={"true"} fill={"none"} stroke={"currentColor"} strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"1.8"} viewBox={"0 0 24 24"}>
                

                <path d={"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"}></path>
                

                <path d={"m9 12 2 2 4-4"}></path>
                

              </svg>
              

            </div>
            

            <h3>Separated ALZA control plane</h3>
            

            <p className={"muted"}>
                ALZA cloud services validate licensing and usage; they are not
                designed to stage or relay customer migration content.
              </p>
            

          </article>
          

          <article className={"card"} data-reveal={""}>
            

            <div className={"card-icon"}>
              

              <svg aria-hidden={"true"} fill={"none"} stroke={"currentColor"} strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"1.8"} viewBox={"0 0 24 24"}>
                

                <rect height={11} rx={"2"} width={18} x={"3"} y={"11"}></rect>
                

                <path d={"M7 11V7a5 5 0 0 1 10 0v4"}></path>
                

              </svg>
              

            </div>
            

            <h3>Locally controlled authorization</h3>
            

            <p className={"muted"}>
                Tenant credentials and authorization tokens are handled by the
                local deployment under customer access controls.
              </p>
            

          </article>
          

          <article className={"card"} data-reveal={""}>
            

            <div className={"card-icon"}>
              

              <svg aria-hidden={"true"} fill={"none"} stroke={"currentColor"} strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"1.8"} viewBox={"0 0 24 24"}>
                

                <path d={"m12 2 9 5-9 5-9-5 9-5Z"}></path>
                

                <path d={"m3 12 9 5 9-5M3 17l9 5 9-5"}></path>
                

              </svg>
              

            </div>
            

            <h3>Scale-out workers</h3>
            

            <p className={"muted"}>
                Add internal worker virtual machines for parallel capacity while
                remaining inside approved network boundaries.
              </p>
            

          </article>
          

          <article className={"card"} data-reveal={""}>
            

            <div className={"card-icon"}>
              

              <svg aria-hidden={"true"} fill={"none"} stroke={"currentColor"} strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"1.8"} viewBox={"0 0 24 24"}>
                

                <path d={"M4 19V9M10 19V5M16 19v-7M22 19H2"}></path>
                

              </svg>
              

            </div>
            

            <h3>Service-aware execution</h3>
            

            <p className={"muted"}>
                Observe service pressure, retries, and throughput while scaling
                within Microsoft service limits.
              </p>
            

          </article>
          

          <article className={"card"} data-reveal={""}>
            

            <div className={"card-icon"}>
              

              <svg aria-hidden={"true"} fill={"none"} stroke={"currentColor"} strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"1.8"} viewBox={"0 0 24 24"}>
                

                <path d={"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z"}></path>
                

                <path d={"M14 2v6h6M8 13h8M8 17h6"}></path>
                

              </svg>
              

            </div>
            

            <h3>Auditable release</h3>
            

            <p className={"muted"}>
                Publish a signed installer with checksum, version, requirements,
                data-flow documentation, and release notes.
              </p>
            

          </article>
          

        </div>
        

      </div>
      

    </section>
    <section className={"section section-soft"}>
      

      <div className={"container two-col two-col-start"}>
        

        <div>
          

          <span className={"kicker"}>Before product launch</span>
          

          <h2>Evidence the release.</h2>
          

          <ul className={"check-list"}>
            

            <li>Supported operating systems and prerequisites</li>
            

            <li>Code-signing publisher identity</li>
            

            <li>SHA-256 checksum and file size</li>
            

            <li>Permissions and data-flow documentation</li>
            

            <li>Logging, retention, and deletion behavior</li>
            

            <li>Versioned release notes and support route</li>
            

          </ul>
          

        </div>
        

        <div>
          

          <span className={"kicker"}>Before customer migration</span>
          

          <h2>Evidence the plan.</h2>
          

          <ul className={"check-list"}>
            

            <li>Agreed source and destination scope</li>
            

            <li>Identity and workload ownership</li>
            

            <li>Readiness and exception criteria</li>
            

            <li>Cutover and communications plan</li>
            

            <li>Rollback and escalation decisions</li>
            

            <li>Validation and acceptance criteria</li>
            

          </ul>
          

        </div>
        

      </div>
      

    </section>
    <section className={"section"}>
      

      <div className={"container"}>
        

        <div className={"cta-band"} data-reveal={""}>
          

          <span className={"kicker"}>Next step</span>
          

          <h2>Review your security and migration assumptions with ALZA.</h2>
          

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
