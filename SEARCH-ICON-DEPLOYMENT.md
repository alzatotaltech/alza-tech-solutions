# ALZA favicon and Google refresh checklist

1. Upload the full Build 32 package, including these root files:
   - `favicon.ico`
   - `favicon.svg`
   - `site.webmanifest`
2. In GitHub repository **Settings → Pages**, confirm the custom domain is `alzatotaltech.com` and enable **Enforce HTTPS**.
3. Confirm these public URLs open without authentication:
   - `https://alzatotaltech.com/favicon.ico`
   - `https://alzatotaltech.com/favicon.svg`
4. In Google Search Console, inspect `https://alzatotaltech.com/` and request indexing after deployment.
5. Keep the favicon URLs unchanged in future builds so search engines can cache a stable brand icon.
