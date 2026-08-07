// JSX-native migration generated from download.html
// @ts-nocheck
export function Content_download() {
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
          Download
          
        </div>
        

        <span className={"kicker"}>Download</span>
        

        <h1>A trustworthy download starts with a verifiable release.</h1>
        

        <p className={"lead"}>
            The site is ready for a future EXE or MSI. No placeholder installer
            is offered and no unavailable download is disguised as active.
          </p>
        

      </div>
      

    </section>
    <section className={"section"}>
      

      <div className={"narrow"}>
        

        <div className={"download-status"}>
          

          <div className={"status-icon"}>i</div>
          

          <div>
            

            <h2 data-release-status={""}>
                Production installer not yet published
              </h2>
            

            <p>
                The future release will appear here after ALZA adds the verified
                file and updates the release manifest.
              </p>
            

          </div>
          

        </div>
        

        <div className={"release-meta"}>
          

          <div>
            

            <small>Version</small>
            <strong data-release-version={""}>Not published</strong>
            

          </div>
          

          <div>
            

            <small>Release date</small>
            <strong data-release-date={""}>Pending</strong>
            

          </div>
          

          <div>
            

            <small>Format</small>
            <strong data-release-format={""}>EXE or MSI</strong>
            

          </div>
          

        </div>
        

        <a aria-disabled={"true"} className={"btn btn-wide"} data-download-button={""} data-track={"installer_download"} href={"#"} tabIndex={-1}>Download unavailable</a>
        

        <div className={"card mt-24"}>
          

          <h3>What will be shown before download</h3>
          

          <ul className={"check-list"}>
            

            <li>Exact version and publication date</li>
            

            <li>Installer format and file size</li>
            

            <li>SHA-256 checksum</li>
            

            <li>Code-signing publisher</li>
            

            <li>Supported Windows versions</li>
            

            <li>Prerequisites and release notes</li>
            

          </ul>
          

        </div>
        

        <div className={"actions mt-24"}>
          

          <a className={"btn btn-secondary"} href={"contact.html"}>Ask about availability</a>
          <a className={"text-link arrow"} href={"docs.html"}>Review documentation</a>
          

        </div>
        

      </div>
      

    </section>
    </>
  );
}
