# lucasflaquer.github.io

Personal portfolio. Built with React, TypeScript and Vite, deployed to GitHub Pages via GitHub Actions.

## Development

```sh
pnpm install
pnpm dev       # start dev server
pnpm build     # type-check and build to dist/
pnpm preview   # serve the production build
pnpm lint      # run oxlint
```

## Deployment

Every push to `master` runs `.github/workflows/deploy.yml`, which builds the site and publishes `dist/` to GitHub Pages.
