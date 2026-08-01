# Build 43 — Mobile Single-Media Rendering and Company Artwork

- Prevents the desktop animated WebP and mobile H.264 MP4 from appearing together.
- Uses the HTML `hidden` attribute plus JavaScript breakpoint synchronization as the authoritative fallback.
- Keeps one visual instance on Android Chrome and iOS Safari even if media-query CSS is stale or partially cached.
- Adds the `uae-tech-solutions` artwork to the Company page.
- Preserves animated WebP on desktop/laptop and H.264 MP4 with WebP poster on phones/tablets.
