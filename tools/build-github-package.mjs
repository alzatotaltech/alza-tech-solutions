import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const source = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const destination = path.resolve(
  source,
  "..",
  "ALZA-WEBSITE-GITHUB-PAGES-BUILD-17-DEPLOY",
);

fs.rmSync(destination, { recursive: true, force: true });
fs.mkdirSync(destination, { recursive: true });

const rootFiles = fs
  .readdirSync(source, { withFileTypes: true })
  .filter((entry) => entry.isFile())
  .map((entry) => entry.name)
  .filter(
    (name) =>
      name.endsWith(".html") ||
      name.endsWith(".md") ||
      name.endsWith(".txt") ||
      [
        "CNAME",
        "robots.txt",
        "sitemap.xml",
        "package.json",
        "package-lock.json",
        ".nojekyll",
        ".htmlvalidate.json",
      ].includes(name),
  );

for (const name of rootFiles) {
  fs.copyFileSync(path.join(source, name), path.join(destination, name));
}

for (const directory of [
  ".github",
  "assets/css",
  "assets/img",
  "assets/js",
  "docs",
  "resources",
  "releases",
]) {
  fs.cpSync(path.join(source, directory), path.join(destination, directory), {
    recursive: true,
  });
}

fs.mkdirSync(path.join(destination, "tools"), { recursive: true });
for (const name of [
  "build-github-package.mjs",
  "prepare-static-build.mjs",
  "validate-site.mjs",
]) {
  fs.copyFileSync(
    path.join(source, "tools", name),
    path.join(destination, "tools", name),
  );
}

console.log(destination);
