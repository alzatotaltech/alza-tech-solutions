# Build 56 — Modern Next.js App Router

## Removed
- `pages/` router
- `_app.tsx` and `_document.tsx`
- `next/head` SEO component
- legacy `.html` route-normalization script

## Added
- App Router route tree under `app/(marketing)`
- root `app/layout.tsx`
- Server Component pages
- Client Component boundaries only where browser state/interactivity is needed
- Metadata API
- `app/sitemap.ts`, `app/robots.ts`, `app/manifest.ts`
- `app/not-found.tsx`, `app/loading.tsx`, `app/error.tsx`
- clean route structure
- route/body-class synchronization for legacy page-specific CSS
- updated Next links and clean canonicals/JSON-LD references

The visual system from Build 55 remains intact.

## App Router layout ownership
- `app/(marketing)/layout.tsx` owns the persistent shared marketing shell.
- Header, Motion ambient layer, lead provider/modal, footer and WhatsApp action no longer live in each page component.
- Page content remains Server Component output and is passed through a small `PageExperience` Client Component for Motion/DOM interactions.
- This uses the App Router's shared-layout and Server/Client Component model instead of simply moving Pages Router files into `app/`.
