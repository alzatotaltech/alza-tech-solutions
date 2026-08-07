# Build 71 — Desktop Live Logo Fix

- Keeps the existing ALZA logo artwork.
- Adds a dedicated `brand-logo-live` wrapper so desktop animation cannot be cancelled by legacy `.brand-logo` rules.
- Adds desktop float/scale, cyan-blue energy glow, aura pulse and light scan.
- Explicitly keeps the requested logo animation active on desktop even when Windows/Chrome reports `prefers-reduced-motion`.
- Other site reduced-motion behavior is unchanged.
- Mobile Build 70 behavior is preserved.
- CSS cache key bumped to v71.
