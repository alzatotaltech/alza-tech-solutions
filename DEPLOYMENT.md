# GitHub Pages deployment guide

This project is a static site. It does not need MSI hosting, a server runtime,
or a database.

## 1. Review and validate locally

```bash
npm install
npm run build:site
npm run format
npm run validate
npx serve .
```

Review the homepage, contact form fallback, mobile menu, keyboard navigation,
resources, privacy text, and download status.

## 2. Create the GitHub repository

Create a repository for the website, then upload the contents of the
GitHub-ready build directory to the repository root. Do not upload the ZIP as a
single file.

If using Git locally:

```bash
git init
git add .
git commit -m "Launch ALZA website Build 17"
git branch -M main
git remote add origin YOUR_REPOSITORY_URL
git push -u origin main
```

## 3. Enable GitHub Pages

In the repository:

1. Open **Settings → Pages**.
2. Under **Build and deployment**, choose **Deploy from a branch**.
3. Select `main` and `/(root)`.
4. Save and wait for the Pages deployment to complete.

GitHub documents branch and GitHub Actions publishing options in its
[publishing-source guide](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).

## 4. Connect `alzatotaltech.com`

The included `CNAME` file contains `alzatotaltech.com`.

1. Verify the domain in the owning GitHub account or organization.
2. In **Settings → Pages**, enter `alzatotaltech.com` as the custom domain.
3. Add the current apex-domain DNS records shown in GitHub's
   [custom-domain guide](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site).
4. Also configure `www` as GitHub recommends, then choose the preferred domain.
5. Wait for DNS verification.
6. Enable **Enforce HTTPS** when available.

Do not copy IP addresses from an old guide; use GitHub's current values at the
time DNS is changed.

## 5. Configure integrations

Follow `INTEGRATIONS.md` and `ANALYTICS.md`. Commit the real public form
endpoint, chatbot ID, and measurement IDs only after their accounts, domains,
privacy terms, and test submissions are approved. Never commit API secret keys.

## 6. Production acceptance test

- Home, platform, services, pricing, resources, contact, and download pages load.
- All internal links and the custom 404 page work.
- The mobile menu works at 320 px width.
- Focus indicators and keyboard interactions are visible.
- Contact submissions arrive at the intended destination.
- Phone links call `+971557550081`, WhatsApp links open the same number, and
  general, sales, and support email links use their approved
  `@alzatotaltech.com` mailboxes.
- Consent decline prevents analytics/pixel requests.
- Consent accept loads only the configured services.
- Chat answers only from approved knowledge and escalates safely.
- Canonical URLs use the production domain.
- `robots.txt` and `sitemap.xml` return HTTP 200.
- The download remains unavailable until a verified release is published.

## 7. Rollback

Use the GitHub commit history to revert to the last approved release. Keep
installer files versioned and never overwrite a release with different binary
content under the same filename.
