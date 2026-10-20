import { defineConfig } from "oxlint";
import core from "ultracite/oxlint/core";
import react from "ultracite/oxlint/react";

export default defineConfig({
  env: core.env,
  extends: [core, react],
  // Vendored agent skills and agent tooling are third-party code.
  ignorePatterns: [
    ...core.ignorePatterns,
    ".claude/skills/**",
    ".claude/agents/**",
    ".agents/**",
    ".codex/**",
    ".github/agents/**",
    ".github/hooks/**",
    ".github/skills/**",
    ".impeccable/**",
  ],
  rules: {
    // Carried over from the old .oxlintrc.json: the react preset turns this
    // off, but the project keeps it to protect Fast Refresh.
    "react/only-export-components": ["warn", { allowConstantExport: true }],
  },
});
