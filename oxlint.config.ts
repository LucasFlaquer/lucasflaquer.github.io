import { defineConfig } from "oxlint";
import core from "ultracite/oxlint/core";
import react from "ultracite/oxlint/react";

export default defineConfig({
  env: core.env,
  extends: [core, react],
  ignorePatterns: core.ignorePatterns,
  rules: {
    // Carried over from the old .oxlintrc.json: the react preset turns this
    // off, but the project keeps it to protect Fast Refresh.
    "react/only-export-components": ["warn", { allowConstantExport: true }],
  },
});
