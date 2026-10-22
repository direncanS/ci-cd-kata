import { defineConfig } from 'eslint/config'
import globals from 'globals'

export default defineConfig([
    {
        files: ['**/*.{js,mjs,cjs}'],
        languageOptions: {
            globals: globals.browser,
        },
        rules: {
            eqeqeq: 'error',
            'no-var': 'error',
            'prefer-const': 'warn',
            'no-global-assign': 'error',
            'no-param-reassign': 'warn',
            complexity: ['warn', { max: 16 }],
            curly: 'error',
            'no-debugger': 'error',
        },
    },
])
