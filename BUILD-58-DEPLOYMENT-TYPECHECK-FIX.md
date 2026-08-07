# Build 58 — Deployment TypeScript Fix

## Fixed

GitHub Actions deployment in Build 57 can fail during `npm run typecheck` because the `services` array in `components/premium/ServiceBentoGrid.tsx` was inferred as a heterogeneous readonly union. Only the ALZA M365 Migration Suite item declared `flagship`, while the render path accessed `service.flagship` for every union member.

Build 58 defines an explicit `ServiceItem` type with `flagship?: boolean`, preserving the same rendered UI while making the property access valid for every service item.

## Deployment

Replace the Build 57 repository files with Build 58, including `.github/workflows/deploy-pages.yml`, then commit to `main`. The existing GitHub Actions workflow will run automatically.
