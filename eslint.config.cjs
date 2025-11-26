// @ts-check
// This is the definitive ESLint Flat Config file (CJS format) for React 19 / TypeScript / Vite.

const globals = require('globals');
const js = require('@eslint/js');
const tseslint = require('typescript-eslint');
const reactPlugin = require('eslint-plugin-react');
const reactHooksPlugin = require('eslint-plugin-react-hooks');
const reactRefreshPlugin = require('eslint-plugin-react-refresh');

// 1. Define the complete plugins object for the custom configuration blocks
const allPlugins = {
  react: reactPlugin,
  'react-hooks': reactHooksPlugin,
  'react-refresh': reactRefreshPlugin,
  // Note: @typescript-eslint plugin is usually handled by spreading the tseslint.configs array.
};

// --- Final Configuration Array ---
module.exports = [
  // 1. GLOBAL IGNORES
  {
    ignores: ['dist', 'node_modules', '*.cjs', '*.mjs'],
  },

  // 2. BASE ESLINT RULES (From js.configs.recommended)
  js.configs.recommended,

  // 3. BASE TYPESCRIPT RULES (Includes parser and rules setup)
  // We use the spread operator as this array contains multiple necessary configurations.
  ...tseslint.configs.recommended,

  // 4. REACT & HOOKS Configuration (Single object for all custom React/TS rules)
  {
    files: ['**/*.{ts,tsx}'],
    
    // ** FIX: Define plugins as an object, not an array of strings. **
    plugins: allPlugins,

    languageOptions: {
      // Use the TypeScript parser for TS/TSX files
      parser: tseslint.parser, 
      ecmaVersion: 2020, 
      globals: globals.browser,

      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
    },

    settings: {
      react: { version: 'detect' },
    },
    
    rules: {
      // --- Rule Spreading (Manually pulling rules from presets) ---
      // React Recommended Rules
      ...reactPlugin.configs.recommended.rules,
      // React JSX Runtime Rules (Disables 'import React' requirement)
      ...reactPlugin.configs['jsx-runtime'].rules, 
      // React Hooks Recommended Rules
      ...reactHooksPlugin.configs.recommended.rules,

      // --- Custom Rules (From your original request) ---
      
      // Enforce ES6 arrow functions for all components (REQUIRED)
      'react/function-component-definition': [
        'error',
        {
          'namedComponents': 'arrow-function',
          'unnamedComponents': 'arrow-function',
        },
      ],
      // Vite/HMR compatibility rule
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],

      // TypeScript and PropType relaxations
      'react/prop-types': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/no-explicit-any': 'warn',
    },
  },
];