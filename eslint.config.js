import js from '@eslint/js'
import typescript from 'typescript-eslint'
import vue from 'eslint-plugin-vue'
import prettier from 'eslint-config-prettier'

export default [
  js.configs.recommended,
  ...typescript.configs.recommended,
  ...vue.configs['flat/recommended'],
  prettier,
  {
    files: ['*.vue', '**/*.vue'],
    languageOptions: {
      parserOptions: {
        parser: typescript.parser
      }
    }
  },
  {
    ignores: ['dist/', 'node_modules/', '*.config.js']
  }
]