import fs from "node:fs";
import path from "node:path";
const routes=[
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
];
const expected=routes.map(route=>route==="/"?"out/index.html":`out${route}index.html`);
expected.push("out/404.html","out/sitemap.xml","out/robots.txt","out/manifest.webmanifest","out/CNAME");
const missing=expected.filter(p=>!fs.existsSync(path.join(process.cwd(),p)));
if(missing.length){console.error("Missing exported files:\n"+missing.join("\n"));process.exit(1);}
console.log(`Verified ${expected.length} App Router export artifacts.`);
