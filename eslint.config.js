import tsParser from "@typescript-eslint/parser";
import eslintConfigPrettier from "eslint-config-prettier";
import eslintPluginAstro from "eslint-plugin-astro";
import simpleImportSort from "eslint-plugin-simple-import-sort";

export default [
  ...eslintPluginAstro.configs.recommended,

  // Prettier: disable ESLint rules that would conflict with Prettier
  eslintConfigPrettier,

  // Import sorting
  {
    plugins: { "simple-import-sort": simpleImportSort },
    rules: {
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",
    },
  },

  // Astro + TypeScript files
  {
    files: ["**/*.astro"],
    languageOptions: {
      parserOptions: {
        parser: tsParser,
      },
    },
  },

  // TypeScript files
  {
    files: ["**/*.ts", "**/*.tsx"],
    languageOptions: {
      parser: tsParser,
    },
  },

  // Project-wide rules
  {
    rules: {
      "no-console": "warn",
    },
  },

  // Ignored paths
  {
    ignores: [
      "dist/**",
      ".astro/**",
      "public/pagefind/**",
      "node_modules/**",
      "pnpm-lock.yaml",
    ],
  },
];
