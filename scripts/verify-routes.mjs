import fs from "node:fs";
import path from "node:path";
const expected=[
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
const missing=[];
for(const route of expected){
  const file=route==="/"?"app/(marketing)/page.tsx":`app/(marketing)${route}page.tsx`;
  if(!fs.existsSync(path.join(process.cwd(),file))) missing.push(file);
}
if(missing.length){console.error("Missing App Router source routes:\n"+missing.join("\n"));process.exit(1);}
if(fs.existsSync(path.join(process.cwd(),"pages"))){console.error("Legacy pages/ directory still exists");process.exit(1);}
console.log(`Verified ${expected.length} App Router routes; no Pages Router directory remains.`);
