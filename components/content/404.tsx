// JSX-native migration generated from 404.html
// @ts-nocheck
import Link from "next/link";
export function Content_404() {
  return (
    <>
    <section className={"cloud-page-hero page-hero"}>
      <video aria-hidden={"true"} autoPlay className={"page-hero-mobile-video mobile-autoplay-media"} controlsList={"nodownload noplaybackrate nofullscreen"} disablePictureInPicture loop muted playsInline poster={"/assets/img/hero-cloud-migration-mobile-poster.webp?v=42"} preload={"metadata"} tabIndex={-1}>
        <source src={"/assets/video/hero-cloud-migration-v21-mobile.mp4?v=42"} type={"video/mp4"}/>
      </video>
      

      <div className={"narrow"}>
        

        <span className={"kicker"}>404</span>
        

        <h1>This page has moved—or never existed.</h1>
        

        <p className={"lead"}>
            Use the links below to return to the migration platform, resources,
            or contact route.
          </p>
        

        <div className={"actions"}>
          

          <Link className={"btn"} href={"/"}>Return home</Link>
          <Link className={"btn btn-ghost"} href={"/contact/"}>Contact ALZA</Link>
          

        </div>
        

      </div>
      

    </section>
    </>
  );
}
