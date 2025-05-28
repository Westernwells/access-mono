import { FlatCompat } from '@eslint/eslintrc';
import parserTs from '@typescript-eslint/parser';
import tseslint from '@typescript-eslint/eslint-plugin';
import pluginReact from 'eslint-plugin-react';
import pluginReactHooks from 'eslint-plugin-react-hooks';

const compat = new FlatCompat();

// Define common JS config files to exclude from TypeScript linting
const commonJsConfigFiles = [
  './.prettierrc.js', // Specific path at the root
  './hasura-codegen.js', // Specific path at the root
  './apps/*/metro.config.js', // Precise path for app-specific metro configs
  './apps/*/tailwind.config.js', // Precise path for app-specific tailwind configs
  // Add any other root-level or app-level JS config files here that should *not* be parsed by TypeScript
  // e.g., './webpack.config.js', './babel.config.js', etc.
];

export default [
  // Base extends should come first
  ...compat.extends('plugin:@typescript-eslint/recommended'),
  ...compat.extends('plugin:react/recommended'),
  ...compat.extends('prettier'),

  // Config block for TypeScript/React code (your main app code)
  {
    // Apply to all JS, TS, JSX, TSX files initially
    files: ['**/*.{js,ts,jsx,tsx}'],
    // BUT IGNORE the specific JS config files listed in commonJsConfigFiles
    ignores: commonJsConfigFiles,
    languageOptions: {
      parser: parserTs, // Use TypeScript parser for these files
      globals: {
        browser: true,
      },
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: ['./apps/*/tsconfig.json'], // Only include app-specific tsconfigs
        tsconfigRootDir: import.meta.dirname,
      },
    },
    plugins: {
      react: pluginReact,
      '@typescript-eslint': tseslint,
      'react-hooks': pluginReactHooks,
    },
    rules: {
      'react/react-in-jsx-scope': 'off',
      'react/jsx-uses-react': 'off',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      // Rules for TypeScript/React code, keep them here or adjust as needed
      '@typescript-eslint/no-empty-object-type': 'error',
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],
      '@typescript-eslint/no-require-imports': 'error', // Keep this on for TS files
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },

  // Config block for plain JavaScript configuration files (the ones excluded above)
  {
    // ONLY apply to the files explicitly listed in commonJsConfigFiles
    files: commonJsConfigFiles,
    languageOptions: {
      // No specific parser needed, ESLint's default JS parser is sufficient
      parser: undefined, // Explicitly ensure no specific parser is forced here. This might be redundant but safe.
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'commonjs', // These are definitively CommonJS files
      },
    },
    // No @typescript-eslint plugin for these files
    plugins: {},
    rules: {
      // Turn off TypeScript-specific rules that shouldn't apply here
      '@typescript-eslint/no-require-imports': 'off', // ALLOW require() in these JS config files
      '@typescript-eslint/no-unused-vars': 'off', // Allow unused vars in config files if necessary
      // If you have a general `no-unused-vars` (non-TS) rule, you might need to turn that off too
      // 'no-unused-vars': 'off', // Core ESLint rule
    },
  },

  // Global ignores that apply to the whole linting process
  {
    ignores: ['node_modules/', 'dist/', 'build/', '.expo/', 'coverage/', 'packages/'],
  },
];