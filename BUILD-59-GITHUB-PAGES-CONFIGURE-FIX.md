# Build 59 — GitHub Pages configure-pages parser fix

Build 59 fixes the GitHub Actions failure raised by `actions/configure-pages` while it attempted to parse the project's conditional `next.config.mjs`.

## Root cause

The workflow passed:

```yaml
with:
  static_site_generator: next
```

That asks `configure-pages` to inspect and rewrite the Next.js configuration. ALZA intentionally switches between full Next.js runtime and GitHub Pages static export using `ALZA_DEPLOY_TARGET`, so the config contains a conditional object spread. The GitHub action's parser failed on that structure before the application build started.

## Fix

- Removed `static_site_generator: next`.
- Kept `actions/configure-pages`, but only for normal Pages metadata/setup.
- The project's own `npm run build:static` remains authoritative for enabling `output: 'export'`.
- Updated GitHub-maintained actions to current Node-24-capable major versions:
  - `actions/checkout@v5`
  - `actions/setup-node@v6`
  - `actions/configure-pages@v6`
  - `actions/upload-pages-artifact@v5`
  - `actions/deploy-pages@v5`
- CI build runtime set to Node.js 24.

No website content, routing, SEO, UI, themes, Motion behavior, or design-stack code was changed by this patch.
