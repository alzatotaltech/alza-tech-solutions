# ALZA website — GitHub Pages Build 17

This is a production-oriented static marketing website for ALZA Total Tech
Solutions FZ-LLC. It positions the Microsoft 365 Migration Suite as a
customer-hosted execution platform while keeping every unverified feature,
customer claim, leadership profile, and installer detail out of the public
copy. It also presents ALZA's managed IT, cloud, infrastructure, cybersecurity,
AI automation, and custom application services.

## What is included

- 24 responsive HTML pages, including a dedicated M365 Migration Suite landing
  page and three evergreen SEO resources
- Conversion-focused homepage, product, services, use cases, pricing, about,
  contact, resources, documentation, and download routes
- Accessible navigation, tabs, FAQ accordions, lead modal, and forms
- Traffic-source personalization using first-touch UTM/referrer context
- Configuration-driven Chatbase or Tidio widget loading
- Configuration-driven GA4 and Meta Pixel loading with a consent gate
- Lead and form-event tracking hooks
- Static-host-friendly lead submission with a safe email fallback
- Future EXE/MSI publishing through one release manifest
- Published Complete Suite and four Individual Application monthly/annual licensing families
- Published storage pools with explicit session and concurrent-job limits
- Verified general, sales, and support email routes on `alzatotaltech.com`,
  plus direct phone and WhatsApp routes using `+971 55 755 0081`
- Official ALZA corporate branding and optimized migration, cybersecurity,
  managed IT, AI automation, and custom-application imagery
- Metadata, canonical URLs, Open Graph tags, JSON-LD, sitemap, robots file,
  custom 404 page, and `.nojekyll`
- GitHub Actions validation workflow

## Important launch status

The website can be published immediately. These services remain deliberately
inactive until real production credentials are added:

- direct form delivery / CRM routing
- AI chatbot
- GA4
- Meta Pixel
- exit-intent capture
- desktop application download

If a form endpoint is not configured, the visitor's email application opens
with the enquiry prepared. The download page remains visibly unavailable until
a verified EXE or MSI is published.

## Local review

```bash
npm install
npm run build:site
npm run validate
npx serve .
```

Open the local URL printed by `serve`. Do not review by double-clicking the HTML
files because browser security rules can block the release manifest request.

## First-time configuration

1. Review company contact and legal details.
2. Edit `assets/js/site-config.js`.
3. Follow `INTEGRATIONS.md` for forms, chatbot, email automation, and analytics.
4. Follow `DEPLOYMENT.md` for GitHub Pages and domain setup.
5. Keep `releases/release-manifest.json` unavailable until the signed
   production installer exists.

## Source workflow

The production HTML, CSS, JavaScript, configuration, and documentation are
maintained directly in this static source tree. Run:

```bash
npm run build:site
npm run format
npm run validate
```

The GitHub-ready directory is created outside this folder with:

```bash
npm run build
```

## Reference files

- `DEPLOYMENT.md` — GitHub Pages and custom-domain procedure
- `INTEGRATIONS.md` — lead capture, chatbot, CRM, and email automation
- `ANALYTICS.md` — GA4, Meta Pixel, consent, and event verification
- `RELEASE-GUIDE.md` — safe EXE/MSI publication
- `CONTENT-CALENDAR.md` — optional 12-week SEO plan
- `IMPLEMENTATION-REPORT.md` — scope and launch-readiness summary
- `CLAIMS-REVIEW.md` — approved wording and claims requiring verification
- `SOURCE-COMPARISON.md` — what was retained, corrected, or excluded from the
  supplied builds
