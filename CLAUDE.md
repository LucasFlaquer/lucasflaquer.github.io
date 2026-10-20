# CLAUDE.md

Guidance for Claude Code when working in this repository.

## Purpose

Personal portfolio of Lucas Flaquer, served at https://lucasflaquer.github.io. A home page summarises everything (career line, results, experience, skills, about, contact) and internal pages give the detail: `/experience/:slug`, `/about`, `/skills`. All content comes from the resume (`public/Lucas_Flaquer_CV_Fullstack.pdf`) and ships in English and Brazilian Portuguese.

The visual world is a transit strip map: frontend (blue) and backend (red) run as two parallel tracks and full-stack roles are interchanges. The direction contract lives in `.impeccable/surfaces/src-app-tsx.md`.

## Stack

- React 19 + React DOM, mounted in `StrictMode`
- TypeScript 7 (`~7.0.2`), type-checked with `tsc -b` (project references)
- Vite 8 with `@vitejs/plugin-react` and `@tailwindcss/vite`; `@/` aliases `src/`
- Tailwind CSS v4 (CSS-first config in `src/index.css`, no `tailwind.config`) with `tw-animate-css`
- shadcn/ui (`base-maia` style on Base UI, `@base-ui/react`), configured in `components.json`; `class-variance-authority` for variants, `cn` from `@/lib/utils` for class merging
- React Router v8 (`createBrowserRouter`) for clean URLs
- Phosphor icons (`@phosphor-icons/react`, `*Icon` exports); fonts self-hosted through Fontsource (Overpass for text and display, Overpass Mono for dates and codes only)
- Ultracite v8 presets (`core`, `react`) on oxlint for linting and oxfmt for formatting (no ESLint, no Prettier)
- pnpm 11 (`packageManager` field pins the version), Node 24 (`.nvmrc`)
- No state library or test runner yet

## Commands

```sh
pnpm install   # install dependencies
pnpm dev       # Vite dev server with HMR (http://localhost:5173)
pnpm build     # tsc -b, vite build into dist/, then copy dist/index.html to dist/404.html
pnpm preview   # serve the built dist/ locally
pnpm lint      # oxlint only
pnpm check     # ultracite check: oxlint + oxfmt format check
pnpm fix       # ultracite fix: autofix lint issues and format
```

Before finishing a change, run `pnpm check` and `pnpm build`; CI runs both and a failure blocks the deploy.

## How it works

- `index.html` is the Vite entry. It holds the page `<title>`, favicon link and the `#root` div, and loads `/src/main.tsx` as a module.
- `src/main.tsx` imports global styles (`src/index.css`) and renders `<App />` (from `src/app.tsx`) into `#root`.
- `src/app.tsx` wraps `RouterProvider` (routes in `src/router.ts`) in `LocaleProvider`. `SiteLayout` renders the header, `<Outlet />`, footer and `ScrollRestoration`; `useHashScroll` scrolls to `/#section` targets.
- i18n: `useLocale()` returns `locale`, `setLocale`, `pick` (reads a `Localized<T>` = `{ en, pt }`) and `ui` (UI strings from `src/data/ui/en.ts` / `pt.ts`, typed by `src/types/ui.ts`). The choice persists in `localStorage` and sets `<html lang>`. Every new string needs both languages.
- Content: `src/data/profile.ts`, `src/data/experience/*.ts` (one role per file, ordered in `src/data/experience.ts`), `results.ts`, `skills.ts`, `about.ts`. A role's `stack` uses the same names as `skills.ts` so `/skills` can link each skill to the roles that used it. Never add facts that are not in the resume.
- `src/index.css` imports Tailwind, `tw-animate-css`, shadcn's base CSS and the fonts, and defines the theme on `:root`: shadcn tokens plus `--sign` (charcoal sign panels), `--signal` (yellow: actions, focus on dark, selection), `--line-frontend` and `--line-backend` (territory colors, never used for state). Radius is 0. The `track-planned` utility draws the dashed "planned" track. There is no dark theme. Use these tokens rather than hard-coding colors.
- `src/lib/utils.ts` exports `cn`. `buttonVariants` lives in `src/components/ui/button-variants.ts` (style it links with it). shadcn components are added with `pnpm dlx shadcn@latest add <name>` and land in `src/components/ui/` (aliases in `components.json`: `@/components`, `@/components/ui`, `@/lib`, `@/hooks`).
- `src/assets/` (create when needed) holds files imported from code; Vite hashes and bundles them.
- `public/` holds files served as-is from the site root (`/favicon.svg`, the resume PDF).

## Layout

```
.github/workflows/deploy.yml  CI: ultracite check, build, deploy to GitHub Pages
.claude/rules/                project code standards and React rules (see below)
.claude/skills/               vendored agent skills (shadcn, migrate-radix-to-base); ignored by oxlint and oxfmt
index.html                    HTML entry
components.json               shadcn/ui config (style, aliases, icon library)
public/                       static files copied verbatim to dist/ (incl. resume PDF)
src/main.tsx                  React bootstrap
src/app.tsx, router.ts        providers and route table
src/pages/                    home, experience, about, skills, not-found pages
src/components/               layout/, home/, line/ (strip map), experience/, about/, skills/, shared/, ui/
src/data/                     typed bilingual content (profile, experience, results, skills, about, ui strings)
src/hooks/                    use-locale, use-station-preview, use-hash-scroll
src/lib/                      cn, locale context/storage, line geometry, role helpers
src/types/                    content and UI string types
src/index.css                 Tailwind entry, theme tokens, base styles, animations
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

Every push to `master` (or a manual `workflow_dispatch`) runs `.github/workflows/deploy.yml`: install with `--frozen-lockfile`, `pnpm check`, `pnpm build`, then upload `dist/` and publish it to GitHub Pages. This is a user site (`<user>.github.io`), so it is served from the domain root and `vite.config.ts` needs no `base` option. GitHub Pages has no SPA fallback, so the build copies `index.html` to `404.html`: deep links load the app (served with HTTP status 404).

When adding dependencies, use `pnpm add` so `pnpm-lock.yaml` stays in sync; CI fails on a stale lockfile.

@AGENTS.md
