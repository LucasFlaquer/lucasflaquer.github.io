# CLAUDE.md

Guidance for Claude Code when working in this repository.

## Purpose

Personal portfolio of Lucas Flaquer, served at https://lucasflaquer.github.io. The codebase was just rebuilt from scratch on the Vite + React + TypeScript template (commit `99dd01f`), so `src/app.tsx`, `src/app.css` and the assets in `src/assets/` are still the Vite starter demo. They are placeholders to be replaced by the portfolio content, not code to preserve.

## Stack

- React 19 + React DOM, mounted in `StrictMode`
- TypeScript 7 (`~7.0.2`), type-checked with `tsc -b` (project references)
- Vite 8 with `@vitejs/plugin-react`
- Ultracite v8 presets (`core`, `react`) on oxlint for linting and oxfmt for formatting (no ESLint, no Prettier)
- pnpm 11 (`packageManager` field pins the version), Node 24 (`.nvmrc`)
- Plain CSS with custom properties; no CSS framework, router, state library or test runner yet

## Commands

```sh
pnpm install   # install dependencies
pnpm dev       # Vite dev server with HMR (http://localhost:5173)
pnpm build     # tsc -b (type-check) then vite build into dist/
pnpm preview   # serve the built dist/ locally
pnpm lint      # oxlint only
pnpm check     # ultracite check: oxlint + oxfmt format check
pnpm fix       # ultracite fix: autofix lint issues and format
```

Before finishing a change, run `pnpm check` and `pnpm build`; CI runs both and a failure blocks the deploy.

## How it works

- `index.html` is the Vite entry. It holds the page `<title>`, favicon link and the `#root` div, and loads `/src/main.tsx` as a module.
- `src/main.tsx` imports global styles (`src/index.css`) and renders `<App />` (from `src/app.tsx`) into `#root`.
- `src/app.tsx` is the single page component. `src/app.css` holds its styles.
- `src/index.css` defines the design tokens as CSS custom properties on `:root` (`--text`, `--bg`, `--accent`, font stacks, etc.) with a dark-mode override via `prefers-color-scheme`. Reuse these tokens rather than hard-coding colors.
- `src/assets/` holds files imported from code; Vite hashes and bundles them.
- `public/` holds files served as-is from the site root (`/favicon.svg`, `/icons.svg`). `icons.svg` is an SVG sprite referenced with `<use href="/icons.svg#<id>">`.

## Layout

```
.github/workflows/deploy.yml  CI: ultracite check, build, deploy to GitHub Pages
index.html                    HTML entry
public/                       static files copied verbatim to dist/
src/main.tsx                  React bootstrap
src/app.tsx, app.css          page component (currently the Vite demo)
src/index.css                 global styles and design tokens
src/assets/                   bundled images
vite.config.ts                Vite config (React plugin only)
tsconfig.app.json             TS config for src/
tsconfig.node.json            TS config for vite.config.ts
oxlint.config.ts              lint rules (extends ultracite/oxlint core + react)
oxfmt.config.ts               formatter config (extends ultracite/oxfmt)
```

## TypeScript and lint conventions

- `verbatimModuleSyntax`: type-only imports must use `import type`.
- `erasableSyntaxOnly`: no `enum`, `namespace` or constructor parameter properties; use union types and plain objects.
- `noUnusedLocals` / `noUnusedParameters` are on, so unused code fails the build.
- `allowImportingTsExtensions`: local imports include the extension (`import App from "./app.tsx"`).
- Ultracite's presets are strict (see `AGENTS.md`). Notable ones: kebab-case filenames (`unicorn/filename-case`), components as arrow functions assigned to `const` (`react/function-component-definition`), no non-null assertions, `rel="noreferrer"` on `target="_blank"` links.
- `react/only-export-components` (warn) is kept on top of the presets in `oxlint.config.ts`, so keep one component export per file for Fast Refresh.
- Style is set by oxfmt: double quotes, semicolons, 2-space indent. Run `pnpm fix` rather than formatting by hand.

## Deployment

Every push to `master` (or a manual `workflow_dispatch`) runs `.github/workflows/deploy.yml`: install with `--frozen-lockfile`, `pnpm check`, `pnpm build`, then upload `dist/` and publish it to GitHub Pages. This is a user site (`<user>.github.io`), so it is served from the domain root and `vite.config.ts` needs no `base` option. If a client-side router is added later, GitHub Pages has no SPA fallback; use hash routing or add a `404.html` that redirects to `index.html`.

When adding dependencies, use `pnpm add` so `pnpm-lock.yaml` stays in sync; CI fails on a stale lockfile.

@AGENTS.md
