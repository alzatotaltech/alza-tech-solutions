import fs from 'node:fs';
const routes=[
  "/404.html",
  "/about.html",
  "/ai-solutions.html",
  "/architecture.html",
  "/contact.html",
  "/docs/enterprise-checklist.html",
  "/docs/installation-guide.html",
  "/docs/testing-runbook.html",
  "/docs.html",
  "/download.html",
  "/",
  "/industries.html",
  "/platform.html",
  "/pricing.html",
  "/privacy.html",
  "/products.html",
  "/projects.html",
  "/resources/m365-migration-checklist.html",
  "/resources/migration-security-guide.html",
  "/resources/tenant-migration-planning-guide.html",
  "/resources.html",
  "/services.html",
  "/solutions.html",
  "/terms.html",
  "/thank-you.html"
];
const missing=[];
for (const route of routes) {
  if (route === '/') continue;
  const page='pages'+route+'.tsx';
  const alt=route==='/404.html'?'pages/404.tsx':page;
  if (!fs.existsSync(alt)) missing.push({route,file:alt});
}
if(missing.length){console.error(missing);process.exit(1)}
console.log(`Verified ${routes.length} legacy routes in Next.js source.`);
