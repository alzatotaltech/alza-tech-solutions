import fs from "node:fs";
import path from "node:path";
const expected = [
  "index.html","404.html","about.html","ai-solutions.html","architecture.html","contact.html","docs.html","download.html",
  "industries.html","platform.html","pricing.html","privacy.html","products.html","projects.html","resources.html","services.html","solutions.html","terms.html","thank-you.html",
  "docs/enterprise-checklist.html","docs/installation-guide.html","docs/testing-runbook.html",
  "resources/m365-migration-checklist.html","resources/migration-security-guide.html","resources/tenant-migration-planning-guide.html",
  "robots.txt","sitemap.xml","CNAME"
];
const missing=expected.filter(f=>!fs.existsSync(path.join("out",f)));
if(missing.length){console.error("Missing exported files:",missing);process.exit(1)}
console.log(`Verified ${expected.length} exported production files.`);
