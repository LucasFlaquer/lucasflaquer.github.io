# CLAUDE.md

Guidance for Claude Code when working in this repository.

## Purpose

Personal portfolio of Lucas Flaquer, served at https://lucasflaquer.github.io. The codebase was rebuilt from scratch on the Vite + React + TypeScript template (commit `99dd01f`) and then set up with Tailwind CSS v4 and shadcn/ui (commit `57541fd`). `src/app.tsx`, `src/app.css` and the assets in `src/assets/` are still the Vite starter demo. They are placeholders to be replaced by the portfolio content, not code to preserve.

## Stack

- React 19 + React DOM, mounted in `StrictMode`
- TypeScript 7 (`~7.0.2`), type-checked with `tsc -b` (project references)
- Vite 8 with `@vitejs/plugin-react` and `@tailwindcss/vite`; `@/` aliases `src/`
- Tailwind CSS v4 (CSS-first config in `src/index.css`, no `tailwind.config`) with `tw-animate-css`
- shadcn/ui (`base-maia` style on Base UI, `@base-ui/react`), configured in `components.json`; `class-variance-authority` for variants, `cn` from `@/lib/utils` for class merging
- Phosphor icons (`@phosphor-icons/react`); fonts self-hosted through Fontsource (Nunito Sans for body, JetBrains Mono for headings)
- Ultracite v8 presets (`core`, `react`) on oxlint for linting and oxfmt for formatting (no ESLint, no Prettier)
- pnpm 11 (`packageManager` field pins the version), Node 24 (`.nvmrc`)
- No router, state library or test runner yet

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
- `src/app.tsx` is the single page component. `src/app.css` holds the leftover demo styles; delete it with the demo rather than extending it.
- `src/index.css` imports Tailwind, `tw-animate-css`, shadcn's base CSS and the fonts, and defines the shadcn theme: color variables on `:root` (`--background`, `--foreground`, `--primary`, `--muted-foreground`, `--border`, etc.) with dark values under `.dark`, mapped to Tailwind utilities in `@theme inline` (`bg-background`, `text-muted-foreground`, `font-heading`). Dark mode follows the `.dark` class (`@custom-variant dark`), not `prefers-color-scheme`, so a theme toggle has to set that class on an ancestor (usually `<html>`). Use these tokens rather than hard-coding colors.
- `src/lib/utils.ts` exports `cn`. shadcn components are added with `pnpm dlx shadcn@latest add <name>` and land in `src/components/ui/` (aliases in `components.json`: `@/components`, `@/components/ui`, `@/lib`, `@/hooks`).
- `src/assets/` holds files imported from code; Vite hashes and bundles them.
- `public/` holds files served as-is from the site root (`/favicon.svg`, `/icons.svg`). `icons.svg` is an SVG sprite referenced with `<use href="/icons.svg#<id>">`.

## Layout

```
.github/workflows/deploy.yml  CI: ultracite check, build, deploy to GitHub Pages
.claude/rules/                project code standards and React rules (see below)
.claude/skills/               vendored agent skills (shadcn, migrate-radix-to-base); ignored by oxlint and oxfmt
index.html                    HTML entry
components.json               shadcn/ui config (style, aliases, icon library)
public/                       static files copied verbatim to dist/
src/main.tsx                  React bootstrap
src/app.tsx, app.css          page component (currently the Vite demo)
src/index.css                 Tailwind entry, shadcn theme variables and base styles
src/lib/utils.ts              cn helper
src/assets/                   bundled images
vite.config.ts                Vite config (React + Tailwind plugins, @ alias)
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

## Project rules

The rules in `.claude/rules/` take precedence over conflicting guidance here and in `AGENTS.md`. Follow them for every change to `src/`.

- `.claude/rules/code-standards.md`: no comments, 100-line files, 30-line functions, max 3 nesting levels and 3 parameters, no blank lines in function bodies, named constants, no secrets in the client bundle.
- `.claude/rules/react.md`: arrow-function components, small reusable components, no prop spreading, minimal `useEffect` and `useMemo`, content in `src/data/` and remote calls in `src/lib/`, logic in `use*` hooks, accessibility checklist, Tailwind and shadcn/ui styling.

@.claude/rules/code-standards.md

@.claude/rules/react.md

## Deployment

Every push to `master` (or a manual `workflow_dispatch`) runs `.github/workflows/deploy.yml`: install with `--frozen-lockfile`, `pnpm check`, `pnpm build`, then upload `dist/` and publish it to GitHub Pages. This is a user site (`<user>.github.io`), so it is served from the domain root and `vite.config.ts` needs no `base` option. If a client-side router is added later, GitHub Pages has no SPA fallback; use hash routing or add a `404.html` that redirects to `index.html`.

When adding dependencies, use `pnpm add` so `pnpm-lock.yaml` stays in sync; CI fails on a stale lockfile.

@AGENTS.md
