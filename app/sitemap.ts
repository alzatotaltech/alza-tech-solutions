import type { MetadataRoute } from "next";

export const dynamic = "force-static";


const routes = [
  "/",
  "/products/",
  "/solutions/",
  "/services/",
  "/services/website-design-development/",
  "/pricing/",
  "/resources/",
  "/about/",
  "/contact/",
  "/platform/",
  "/projects/",
  "/industries/",
  "/architecture/",
  "/ai-solutions/",
  "/docs/",
  "/download/",
  "/privacy/",
  "/terms/",
  "/thank-you/",
  "/docs/enterprise-checklist/",
  "/docs/installation-guide/",
  "/docs/testing-runbook/",
  "/resources/m365-migration-checklist/",
  "/resources/migration-security-guide/",
  "/resources/tenant-migration-planning-guide/"
] as const;
export default function sitemap(): MetadataRoute.Sitemap {
  const base="https://alzatotaltech.com";
  return routes.map((route,index)=>({
    url: base+route,
    lastModified: new Date("2026-08-07"),
    changeFrequency: route==="/" ? "weekly" : "monthly",
    priority: route==="/" ? 1 : index < 8 ? .9 : .7,
  }));
}
