# Build 35 — Optimized moving animation restoration

## Correction

Build 34 reduced the image payload aggressively but removed the movement inside the WebP artwork. Build 35 restores the actual animated visuals while retaining a substantially lighter payload than Build 33.

## Implemented

- Restored animated WebP playback for all principal visual assets.
- Reduced large animations to approximately half their original frame count while preserving each loop duration.
- Resized animations to practical display dimensions.
- Retained the original lightweight animated ALZA logo assets.
- Added more visible floating, glow and scanning effects using transform/opacity CSS.
- Removed automatic animation suppression based only on RAM or CPU core count.
- Preserved `prefers-reduced-motion` and browser Save-Data handling.
- Added `?v=35` cache keys to avoid stale Build 34 static images.

## Deployment

Deploy the complete contents over the current GitHub Pages repository. Purge the Cloudflare cache once, then perform a hard refresh.
