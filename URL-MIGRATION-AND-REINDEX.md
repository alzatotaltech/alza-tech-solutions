# URL migration and Google reindex plan

Build 56 changes the public URL architecture from legacy `.html` URLs to clean App Router URLs.

Examples:

- `/products.html` → `/products/`
- `/solutions.html` → `/solutions/`
- `/services.html` → `/services/`
- `/pricing.html` → `/pricing/`
- `/about.html` → `/about/`
- `/contact.html` → `/contact/`
- `/resources/m365-migration-checklist.html` → `/resources/m365-migration-checklist/`

## Required before reindexing

Create HTTP 301 redirects at Cloudflare from every old `.html` URL to its new clean URL. GitHub Pages cannot generate server-side redirects when Next.js uses `output: "export"`.

After deployment:
1. Verify every old URL returns a 301 to the corresponding new URL.
2. Verify every new URL returns 200.
3. Verify canonical tags point only to the new URLs.
4. Verify `https://alzatotaltech.com/sitemap.xml` lists only new URLs.
5. Resubmit the sitemap in Google Search Console.
6. Request indexing for the homepage and the highest-value new URLs first.
7. Keep the redirects in place for at least 12 months; longer is safer.

Do not delete the redirects immediately after Google indexes the new pages.
