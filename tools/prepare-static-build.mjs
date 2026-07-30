import fs from "node:fs";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "..");
for (const required of [
  "index.html",
  "pricing.html",
  "assets/css/master.css",
  "assets/js/master.js",
]) {
  if (!fs.existsSync(path.join(root, required))) {
    throw new Error(`Missing production source file: ${required}`);
  }
}
console.log("Static production source is ready for GitHub Pages packaging.");
