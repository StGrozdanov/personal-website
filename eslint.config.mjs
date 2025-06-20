import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: {},
});

export default [
  // Extend from your original configs
  ...compat.extends(
    'next/core-web-vitals',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@next/next/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ),

  // Import plugins configuration
  ...compat.config({
    plugins: ['@typescript-eslint', 'react-func', 'jsdoc'],
    parser: '@typescript-eslint/parser',
  }),

  // Main configuration
  {
    languageOptions: {
      ecmaVersion: 6,
      sourceType: 'module',
      globals: {
        // Browser globals
        window: 'readonly',
        document: 'readonly',
        console: 'readonly',
        // Node globals
        process: 'readonly',
        Buffer: 'readonly',
        __dirname: 'readonly',
        __filename: 'readonly',
        global: 'readonly',
        // Jest globals
        describe: 'readonly',
        it: 'readonly',
        test: 'readonly',
        expect: 'readonly',
        beforeEach: 'readonly',
        afterEach: 'readonly',
        beforeAll: 'readonly',
        afterAll: 'readonly',
        jest: 'readonly',
      },
    },

    settings: {
      react: {
        version: 'detect',
      },
    },

    rules: {
      'react/react-in-jsx-scope': 0,
      'react/display-name': 0,
      'react/prop-types': 0,
      '@typescript-eslint/explicit-function-return-type': 0,
      '@typescript-eslint/explicit-member-accessibility': 0,
      '@typescript-eslint/indent': 0,
      '@typescript-eslint/member-delimiter-style': 0,
      '@typescript-eslint/no-explicit-any': 1,
      '@typescript-eslint/no-var-requires': 1,
      '@typescript-eslint/no-use-before-define': 0,
      '@typescript-eslint/no-unused-vars': [
        2,
        {
          argsIgnorePattern: '^_',
        },
      ],
      'no-console': [
        1,
        {
          allow: ['info', 'warn', 'error'],
        },
      ],
      'max-lines': [
        'error',
        {
          max: 300,
          skipComments: true,
        },
      ],
      'react-func/max-lines-per-function': [
        'error',
        {
          max: 50,
          skipComments: true,
        },
      ],
      'jsdoc/require-jsdoc': [
        2,
        {
          require: {
            ClassDeclaration: false,
            ClassExpression: false,
            ArrowFunctionExpression: true,
            FunctionDeclaration: true,
            FunctionExpression: true,
            MethodDefinition: false,
          },
          publicOnly: true,
        },
      ],
    },
  },

  // Override for TSX files and instrumentation
  {
    files: ['**/*.tsx', 'instrumentation.ts'],
    rules: {
      'jsdoc/require-jsdoc': 0,
    },
  },

  // Override for test files
  {
    files: ['**/*.spec.ts', 'instrumentation.ts'],
    rules: {
      'react-func/max-lines-per-function': 0,
    },
  },

  // Override for story files
  {
    files: ['**/*.stories.tsx'],
    rules: {
      'react-func/max-lines-per-function': 0,
    },
  },

  // Override for generated types files
  {
    files: ['**/types.ts'],
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      'jsdoc/require-jsdoc': 'off',
      'max-lines': 'off',
    },
  },
];
