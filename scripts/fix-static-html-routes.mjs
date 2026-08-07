import fs from "node:fs";
import path from "node:path";

const out = path.resolve("out");
if (!fs.existsSync(out)) process.exit(0);

const legacy = [
  "about.html","ai-solutions.html","architecture.html","contact.html","docs.html","download.html",
  "industries.html","platform.html","pricing.html","privacy.html","products.html","projects.html",
  "resources.html","services.html","solutions.html","terms.html","thank-you.html",
  "docs/enterprise-checklist.html","docs/installation-guide.html","docs/testing-runbook.html",
  "resources/m365-migration-checklist.html","resources/migration-security-guide.html",
  "resources/tenant-migration-planning-guide.html"
];

for (const route of legacy) {
  const target = path.join(out, route);
  const candidates = [
    `${target}.html`,                     // /products.html -> products.html.html
    path.join(target, "index.html"),     // trailing-slash export
  ];
  if (fs.existsSync(target) && fs.statSync(target).isFile()) continue;
  const found = candidates.find(fs.existsSync);
  if (!found) continue;
  fs.mkdirSync(path.dirname(target), { recursive: true });
  if (fs.existsSync(target) && fs.statSync(target).isDirectory()) fs.rmSync(target, { recursive: true, force: true });
  fs.renameSync(found, target);
  const parent = path.dirname(found);
  if (parent !== out && parent.endsWith(route) && fs.existsSync(parent) && fs.readdirSync(parent).length === 0) fs.rmdirSync(parent);
}

// GitHub Pages should not run Jekyll over Next's _next directory.
fs.writeFileSync(path.join(out, ".nojekyll"), "");
console.log("Legacy .html compatibility normalization complete.");
