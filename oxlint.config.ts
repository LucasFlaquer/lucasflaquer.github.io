import { defineConfig } from "oxlint";
import core from "ultracite/oxlint/core";
import react from "ultracite/oxlint/react";

export default defineConfig({
  env: core.env,
  extends: [core, react],
  // Vendored agent skills (installed with `skills add`) are third-party code.
  ignorePatterns: [...core.ignorePatterns, ".claude/skills/**"],
  rules: {
    // Carried over from the old .oxlintrc.json: the react preset turns this
    // off, but the project keeps it to protect Fast Refresh.
    "react/only-export-components": ["warn", { allowConstantExport: true }],
  },
});
