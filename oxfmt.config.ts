import { defineConfig } from "oxfmt";
import ultracite from "ultracite/oxfmt";

export default defineConfig({
  ...ultracite,
  // Vendored agent skills (installed with `skills add`) are third-party code.
  ignorePatterns: [...(ultracite.ignorePatterns ?? []), ".claude/skills/**"],
});
