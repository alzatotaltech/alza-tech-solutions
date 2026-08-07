import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "ALZA Total Tech Solutions FZ-LLC",
    short_name: "ALZA",
    description: "UAE IT infrastructure, cloud, cybersecurity, managed IT services, website design and development, and Microsoft 365 migration software.",
    start_url: "/",
    display: "standalone",
    background_color: "#020a18",
    theme_color: "#020a18",
    icons: [{ src: "/favicon.ico", sizes: "any", type: "image/x-icon" }, { src: "/favicon.svg", sizes: "any", type: "image/svg+xml" }],
  };
}
