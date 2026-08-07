import { spawnSync } from "node:child_process";

const apply = process.argv.includes("--apply");
const commands = [
  ["UI/UX Pro Max for Codex", "npx", ["--yes", "ui-ux-pro-max-cli@latest", "init", "--ai", "codex"]],
  ["21st.dev agent skill", "npx", ["--yes", "@21st-dev/cli@latest", "install-skill"]],
];

console.log("ALZA Design Tool Bootstrap");
console.log("==========================");
console.log("Runtime UI stack is already in package.json: Motion + Tailwind + shadcn-compatible primitives + Radix + Lucide.");
console.log("UI/UX Pro Max and 21st.dev are development-agent tools, so they are installed separately from the production bundle.\n");

for (const [label, bin, args] of commands) {
  const printable = `${bin} ${args.join(" ")}`;
  console.log(`- ${label}: ${printable}`);
  if (!apply) continue;
  const result = spawnSync(bin, args, { stdio: "inherit", shell: process.platform === "win32" });
  if (result.status !== 0) {
    console.error(`\n${label} did not complete. You can run the command manually later.`);
    process.exitCode = 1;
  }
}

if (!apply) {
  console.log("\nPreview only. Run `npm run design:bootstrap -- --apply` to execute both installers.");
  console.log("21st.dev may ask you to sign in before installing/searching components. Use `npx @21st-dev/cli@latest login` when prompted.");
}
