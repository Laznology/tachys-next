import { defineConfig } from "oxlint";
import core from "ultracite/oxlint/core";
import next from "ultracite/oxlint/next";
import react from "ultracite/oxlint/react";
import tanstack from "ultracite/oxlint/tanstack";

export default defineConfig({
  extends: [core, react, next, tanstack],
  ignorePatterns: [
    ...(core.ignorePatterns || []),
    "components/ui/**",
    "components/login-form.tsx",
    "app/login/page.tsx",
  ],
});
