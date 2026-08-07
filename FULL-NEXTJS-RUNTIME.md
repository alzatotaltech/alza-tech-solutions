# Full Next.js runtime vs GitHub Pages static deployment

Build 56 is a single modern App Router codebase with two deployment modes.

## Full Next.js runtime

Run:

```bash
npm run build
npm start
```

or deploy the repository directly to Vercel / another compatible Next.js server runtime.

In this mode `output: "export"` is not enabled. The codebase can therefore adopt server-runtime features such as Server Actions, request-dependent Route Handlers, SSR, ISR, dynamic headers/redirects and built-in server image optimization when needed.

## GitHub Pages compatibility

GitHub Pages has no Node.js runtime. The included GitHub Actions workflow therefore runs:

```bash
npm run build:static
```

This sets `ALZA_DEPLOY_TARGET=static`, enables `output: "export"`, generates `out/`, verifies it, and deploys only the static artifact.

The application architecture is App Router in both modes. Static export is a deployment target, not a return to the Pages Router.
