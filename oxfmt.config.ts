import { defineConfig } from "oxfmt";
import ultracite from "ultracite/oxfmt";

export default defineConfig({
  ...ultracite,
  // Vendored agent skills and agent tooling are third-party code.
  ignorePatterns: [
    ...(ultracite.ignorePatterns ?? []),
    ".claude/skills/**",
    ".claude/agents/**",
    ".agents/**",
    ".codex/**",
    ".github/agents/**",
    ".github/hooks/**",
    ".github/skills/**",
    ".impeccable/**",
  ],
});
