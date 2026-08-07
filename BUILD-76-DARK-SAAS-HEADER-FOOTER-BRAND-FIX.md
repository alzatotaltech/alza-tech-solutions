# Build 76 — Dark SaaS header/footer brand fix

## Root cause
Build 74 attached the animated `brand-copy-live` gradient treatment directly to the header/footer legal-name text. In Dark SaaS, the gradient paint could render as full rectangular bands instead of remaining clipped to glyphs. Build 75 attempted to neutralize the effect with later CSS, but the animated class itself remained in the markup.

## Fix
- Removes `brand-copy-live` from Header and Footer markup.
- Replaces it with `brand-copy-static-v76`.
- Hard-resets background image, background clipping, text fill, filter, mask, shadow and animation on header/footer brand text.
- Adds a defensive reset for any stale hydrated `brand-copy-live` markup.
- Keeps the ALZA A live/glow wrapper unchanged.
- Keeps the homepage `ALZA TOTAL TECH SOLUTIONS FZ-LLC` pill glass animation unchanged.
- Applies to ALZA Blue and Dark SaaS, desktop and mobile.
- Does not change Build 75 GPU/performance behavior.
