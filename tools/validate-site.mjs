import fs from "node:fs";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "..");
const errors = [];

function walk(directory) {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const fullPath = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      if ([".git", "node_modules", "dist"].includes(entry.name)) return [];
      return walk(fullPath);
    }
    return [fullPath];
  });
}

const htmlFiles = walk(root).filter((file) => file.endsWith(".html"));

for (const file of htmlFiles) {
  const relative = path.relative(root, file);
  const html = fs.readFileSync(file, "utf8");
  const count = (pattern) => [...html.matchAll(pattern)].length;

  if (/alzatotaltechsolutionsfzllc@gmail\.com/i.test(html)) {
    errors.push(`${relative}: contains the retired Gmail contact address`);
  }

  if (count(/<main\b/g) !== 1) errors.push(`${relative}: expected one main`);
  if (count(/<h1\b/g) !== 1) errors.push(`${relative}: expected one h1`);

  if (relative !== "404.html") {
    if (count(/rel="canonical"/g) !== 1) {
      errors.push(`${relative}: expected one canonical URL`);
    }
    if (count(/property="og:title"/g) !== 1) {
      errors.push(`${relative}: expected Open Graph metadata`);
    }
    if (count(/type="application\/ld\+json"/g) !== 1) {
      errors.push(`${relative}: expected one JSON-LD block`);
    }
  }

  const ids = [...html.matchAll(/\sid="([^"]+)"/g)].map((match) => match[1]);
  const duplicateIds = ids.filter((id, index) => ids.indexOf(id) !== index);
  if (duplicateIds.length) {
    errors.push(
      `${relative}: duplicate ids ${[...new Set(duplicateIds)].join(", ")}`,
    );
  }

  for (const match of html.matchAll(/\s(?:href|src)="([^"]+)"/g)) {
    const rawTarget = match[1];
    if (
      rawTarget.startsWith("#") ||
      /^(?:https?:|mailto:|tel:|data:)/i.test(rawTarget)
    ) {
      continue;
    }

    const target = decodeURIComponent(rawTarget.split(/[?#]/)[0]);
    if (!target) continue;
    const resolved = path.resolve(path.dirname(file), target);
    if (!fs.existsSync(resolved)) {
      errors.push(`${relative}: missing local target ${rawTarget}`);
    }
  }
}

const contactHtml = fs.readFileSync(path.join(root, "contact.html"), "utf8");
if (!contactHtml.includes('href="tel:+971557550081"')) {
  errors.push("contact.html: verified phone link is missing");
}

const pricingHtml = fs.readFileSync(path.join(root, "pricing.html"), "utf8");
const planCardCount = [...pricingHtml.matchAll(/class="plan-card(?:\s|")/g)]
  .length;
if (planCardCount !== 25) {
  errors.push(`pricing.html: expected 25 plan cards, found ${planCardCount}`);
}
for (const requiredPricingText of [
  "Complete Suite",
  "Individual Applications",
  "Email Only",
  "OneDrive Only",
  "SharePoint Only",
  "Teams Only",
  "50 users",
  "125 users",
  "350 users",
  "750 users",
  "2,500 users",
  "20 sites",
  "60 sites",
  "150 sites",
  "350 sites",
  "1,000 sites",
  "2 active admin sessions",
  "20 active admin sessions",
  "15 concurrent jobs",
  "250 concurrent jobs total",
  "2.5TB Shared Pool",
  "1.5TB Total Pool",
  "Unlimited*",
  "$20,000 / year",
  "$9,900 / year",
  "$8,900 / year",
]) {
  if (!pricingHtml.includes(requiredPricingText)) {
    errors.push(
      `pricing.html: missing revised pricing value: ${requiredPricingText}`,
    );
  }
}
for (const forbiddenPricingText of [
  "1 source + 1 target tenant",
  "one source and one target tenant",
  "tenant-pair control",
  "Registered devices",
  "device hard cap",
]) {
  if (pricingHtml.toLowerCase().includes(forbiddenPricingText.toLowerCase())) {
    errors.push(
      `pricing.html: retired plan wording remains: ${forbiddenPricingText}`,
    );
  }
}
if (!contactHtml.includes("https://wa.me/971557550081")) {
  errors.push("contact.html: verified WhatsApp link is missing");
}
for (const requiredEmail of [
  "info@alzatotaltech.com",
  "sales@alzatotaltech.com",
  "support@alzatotaltech.com",
]) {
  if (!contactHtml.includes(`mailto:${requiredEmail}`)) {
    errors.push(`contact.html: required email route missing: ${requiredEmail}`);
  }
}

const releaseManifestPath = path.join(
  root,
  "releases",
  "release-manifest.json",
);
const release = JSON.parse(fs.readFileSync(releaseManifestPath, "utf8"));
if (release.available === true) {
  if (!/\.(?:exe|msi)$/i.test(release.file || "")) {
    errors.push("release manifest: available release must be an EXE or MSI");
  }
  if (!/^[a-f0-9]{64}$/i.test(release.sha256 || "")) {
    errors.push("release manifest: available release needs a valid SHA-256");
  }
  if (!fs.existsSync(path.join(root, "releases", release.file || ""))) {
    errors.push("release manifest: published installer file is missing");
  }
}

const requiredGitHubFiles = [
  ".nojekyll",
  "404.html",
  "CNAME",
  "robots.txt",
  "sitemap.xml",
];
for (const requiredFile of requiredGitHubFiles) {
  if (!fs.existsSync(path.join(root, requiredFile))) {
    errors.push(`missing GitHub Pages file: ${requiredFile}`);
  }
}

if (errors.length) {
  console.error(`Site validation failed with ${errors.length} issue(s):`);
  errors.forEach((error) => console.error(`- ${error}`));
  process.exit(1);
}

console.log(
  `Site validation passed: ${htmlFiles.length} HTML pages, all local targets present, one main and one H1 per page.`,
);
