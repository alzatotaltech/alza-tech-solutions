# 21st.dev integration

21st.dev is integrated as a development workflow rather than a browser dependency. Its current model is a registry/agent CLI that searches components, installs/copies selected code and dependencies into a React/Tailwind project, and then leaves that code under project ownership.

## Install the 21st agent skill
```bash
npm run 21st:install-skill
```

## Sign in
```bash
npm run 21st:login
```

## Search before building complex blocks
```bash
npm run 21st:search -- "enterprise SaaS hero"
npm run 21st:search -- "bento feature grid"
npm run 21st:search -- "pricing comparison"
```

Build 57's `ServiceBentoGrid` follows this reference-first workflow but is original ALZA-specific code. When future 21st components are imported, review the component's own source/license and preserve any required attribution.
