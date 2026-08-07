# Build 75 — Desktop GPU relief / mobile-parity performance

Apply on top of Build 74.

## What changed
- Header/footer company-name shimmer is disabled; those labels are static again.
- The moving glass sweep is kept only on the homepage `ALZA Total Tech Solutions FZ-LLC` identity pill.
- The ALZA A remains animated, but desktop no longer animates expensive `filter` values every frame; the wrapper float/aura remains with a static illuminated image filter.
- Primary button conic-border rotation is removed on desktop.
- Every visible desktop button still has an always-live transform/opacity sheen. IntersectionObserver activates it only near the viewport, so off-screen buttons do no animation work.
- Desktop backdrop-filter is removed from the sticky header and major glass/card surfaces; existing gradients/borders preserve the visual treatment.
- Old large section blur surfaces and the duplicate fixed body grid are removed on desktop.
- Large desktop hero-title background-position animation is made static to avoid continuous text repaints.
- Homepage desktop hero switches from animated WebP to the existing 1144x600 H.264 asset and pauses automatically when off-screen.
- Inner page CSS-background animated WebP heroes are removed when far off-screen and restored before the user scrolls back.
- Mobile/tablet visual behavior is not changed.

## Performance intent
The desktop now follows the same principle that makes mobile smooth: hardware-decoded video where available, compositor-friendly transform/opacity motion, no persistent large blur recomputation, and no off-screen animation work.
