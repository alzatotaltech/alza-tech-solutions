# Build 57 — AI Design Stack Integration

Build 57 moves beyond merely referencing modern design tools.

## Added
- Tailwind CSS v4 + PostCSS pipeline.
- shadcn-compatible local component configuration (`components.json`).
- Radix Accordion/Tabs foundations.
- `class-variance-authority`, `clsx`, `tailwind-merge` and Lucide.
- Motion remains the production animation library.
- Homepage service section refactored into a real React/Tailwind bento component.
- Homepage FAQ refactored to a Radix/shadcn-style accordion with Motion entrance.
- Codex project skill defining ALZA design/UX rules.
- UI/UX Pro Max official CLI bootstrap command.
- 21st.dev official CLI skill/search workflow.
- Design-stack doctor and bootstrap scripts.

## Important distinction
UI/UX Pro Max and 21st.dev are development-time agent/design tools. They do not belong in the public JavaScript bundle. Their role is to guide and source code during development; the resulting React components are committed locally and built normally.
