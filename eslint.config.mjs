// @ts-check
import antfu from '@antfu/eslint-config'

import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(antfu({
  rules: {
    'curly': ['error', 'all'],
    'no-console': 'warn',

    'style/max-len': ['error', { code: 120 }],

    'vue/component-name-in-template-casing': ['error', 'kebab-case'],
    'vue/component-options-name-casing': ['error', 'kebab-case'],

    'import/order': [
      'error',
      {
        'groups': [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
          'object',
          'type',
        ],
        'newlines-between': 'always',
        'alphabetize': { order: 'asc', caseInsensitive: true },
      },
    ],
  },
}, {
  files: ['**/*.md'],
  rules: {
    'style/max-len': 'warn',
  },
}))
