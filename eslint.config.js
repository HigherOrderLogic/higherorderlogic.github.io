import antfu from '@antfu/eslint-config'

export default antfu({
  rules: {
    'curly': ['error', 'all'],
    'max-len': ['error', { code: 120 }],
    'no-console': 'warn',

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
    'max-len': 'warn',
  },
})
