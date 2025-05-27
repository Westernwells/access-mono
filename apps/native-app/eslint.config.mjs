import {FlatCompat} from '@eslint/eslintrc';
import parserTs from '@typescript-eslint/parser';
import tseslint from '@typescript-eslint/eslint-plugin';
import pluginReact from 'eslint-plugin-react';
import pluginReactHooks from 'eslint-plugin-react-hooks';

const compat = new FlatCompat();

export default [
  ...compat.extends('plugin:@typescript-eslint/recommended'),
  ...compat.extends('plugin:react/recommended'),
  ...compat.extends('prettier'),
  {
    files: ['**/*.{js,ts,jsx,tsx}'],
    languageOptions: {
      parser: parserTs,
      globals: {
        browser: true,
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
    },
  },
];
