> Superseded by Build 35, which restores optimized animated WebP playback.

# Build 34 — WebP and animation performance optimization

## Root cause corrected

Build 33 used multiple high-resolution animated WebP files with roughly 91–123 frames each. Several pages decoded two or more animations simultaneously, including a shared hero background and page-specific artwork. This could cause uneven playback on mobile devices and some laptops.

## Changes

- Converted raster artwork to optimized single-frame WebP while retaining the same filenames and design.
- Reduced the raster image payload from approximately 31.6 MB to under 0.35 MB.
- Replaced frame-by-frame WebP motion with slow transform/opacity CSS motion.
- Added reduced-motion and constrained-device fallbacks.
- Pauses decorative animations while the browser tab is hidden.
- Disabled expensive backdrop blur on smaller screens.
- Added intrinsic image dimensions to prevent layout movement.
- Added `?v=34` cache keys so browsers and CDNs request the optimized assets instead of reusing Build 33 files.
- Updated the image manifest and replacement guide.

## Deployment

Deploy the complete contents over the existing GitHub Pages repository. Preserve the folder structure. After deployment, purge the Cloudflare cache once so all visitors receive Build 34 immediately.
