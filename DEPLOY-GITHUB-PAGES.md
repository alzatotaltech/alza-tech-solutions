# ALZA Next.js — Required GitHub Pages Deployment Setting

## IMPORTANT: one-time GitHub setting

The repository contains **Next.js source code**, not directly deployable HTML in the repository root.

Therefore GitHub Pages MUST NOT use:

- Source: `Deploy from a branch`
- Branch: `main`
- Folder: `/(root)`

If that setting is used, GitHub Pages can use `README.md` as the site's entry page when no root `index.html` is present. The result is the developer README appearing at `https://alzatotaltech.com/`.

### Correct setting

1. Open the GitHub repository.
2. Go to **Settings**.
3. Open **Pages** under **Code and automation**.
4. Under **Build and deployment**, set **Source** to **GitHub Actions**.
5. Keep the custom domain as `alzatotaltech.com`.
6. Open the **Actions** tab.
7. Run **Deploy ALZA Next.js site to GitHub Pages**, or push a new commit to `main`.
8. Wait until both the `build` and `deploy` jobs show green check marks.
9. Open `https://alzatotaltech.com/` in a private/incognito window.

## What the workflow deploys

The workflow:

1. checks out the source,
2. configures GitHub Pages,
3. installs Node dependencies,
4. runs TypeScript checks,
5. runs the Next.js static export,
6. validates that `out/index.html` and critical legacy `.html` routes exist,
7. uploads only `./out`, and
8. deploys that artifact to GitHub Pages.

The repository root and `README.md` are never uploaded as the website artifact.

## If the live site still shows README

Check **Settings → Pages** again. If it still says **Deploy from a branch**, the site is still publishing the source repository instead of the compiled Next.js artifact.

Also check **Actions** and confirm the latest deployment completed successfully. If the build job is red, open it and inspect the first failed step before changing DNS or Cloudflare.

## Cloudflare

Do not change the existing GitHub Pages DNS records merely because README appeared. This problem is a GitHub Pages publishing-source issue, not a DNS-routing issue.

After a successful GitHub Actions deployment, purge Cloudflare cache only if the old page remains cached.
