import fs from "node:fs";
import path from "node:path";

const checks = [
  ["Next.js App Router", "app/layout.tsx"],
  ["Tailwind v4 entry", "app/globals.css"],
  ["PostCSS/Tailwind config", "postcss.config.mjs"],
  ["shadcn config", "components.json"],
  ["shadcn Button", "components/ui/button.tsx"],
  ["Radix Accordion", "components/ui/accordion.tsx"],
  ["Premium bento component", "components/premium/ServiceBentoGrid.tsx"],
  ["Premium FAQ component", "components/premium/PremiumFaq.tsx"],
  ["Motion experience", "components/ExperienceLayer.tsx"],
  ["GitHub Pages workflow", ".github/workflows/deploy-pages.yml"],
];

let failed = false;
for (const [label, file] of checks) {
  const ok = fs.existsSync(path.resolve(file));
  console.log(`${ok ? "PASS" : "FAIL"}  ${label.padEnd(30)} ${file}`);
  failed ||= !ok;
}

const pkg = JSON.parse(fs.readFileSync("package.json", "utf8"));
const required = ["motion", "@radix-ui/react-accordion", "@radix-ui/react-tabs", "lucide-react", "class-variance-authority", "tailwind-merge"];
for (const dep of required) {
  const ok = Boolean(pkg.dependencies?.[dep] || pkg.devDependencies?.[dep]);
  console.log(`${ok ? "PASS" : "FAIL"}  dependency ${dep}`);
  failed ||= !ok;
}

const tailwind = Boolean(pkg.devDependencies?.tailwindcss && pkg.devDependencies?.["@tailwindcss/postcss"]);
console.log(`${tailwind ? "PASS" : "FAIL"}  Tailwind CSS v4 toolchain`);
failed ||= !tailwind;

console.log("\nExternal agent integrations (not production runtime dependencies):");
console.log("- UI/UX Pro Max: run `npm run uiux:install` or `npm run design:bootstrap -- --apply`");
console.log("- 21st.dev: run `npm run 21st:install-skill`, then login/search/add through the 21st CLI");

process.exit(failed ? 1 : 0);
