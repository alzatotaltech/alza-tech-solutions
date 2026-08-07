// JSX-native migration generated from thank-you.html
// @ts-nocheck
import Link from "next/link";
export function Content_thank_you() {
  return (
    <>
    <section className={"cloud-page-hero page-hero"}>
      <video aria-hidden={"true"} autoPlay className={"page-hero-mobile-video mobile-autoplay-media"} controlsList={"nodownload noplaybackrate nofullscreen"} disablePictureInPicture loop muted playsInline poster={"/assets/img/hero-cloud-migration-mobile-poster.webp?v=42"} preload={"metadata"} tabIndex={-1}>
        <source src={"/assets/video/hero-cloud-migration-v21-mobile.mp4?v=42"} type={"video/mp4"}/>
      </video>
      

      <div className={"narrow"}>
        

        <span className={"kicker"}>Enquiry received</span>
        

        <h1>Thank you. We’ll review the scope.</h1>
        

        <p className={"lead"}>
            A member of the ALZA team will use the details you supplied to
            determine the most useful next step.
          </p>
        

        <div className={"actions"}>
          

          <Link className={"btn"} href={"/resources/m365-migration-checklist/"}>Prepare with the checklist</Link>
          <Link className={"btn btn-ghost"} href={"/"}>Return home</Link>
          

        </div>
        

      </div>
      

    </section>
    </>
  );
}
