module.exports = {
  root: true,
  env: {
    node: true,
  },
  ignorePatterns: [
    'src/generated/*',
    'node_modules',
    'dist',
    'storybook-static',
    'src/components/productfruits/ProductFruits.vue'
  ],
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/eslint-config-typescript/recommended',
    '@vue/eslint-config-prettier'
  ],
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2020,
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'vue/require-v-for-key': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'vue/no-multiple-template-root': 'off',
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    'no-undef': 'off',  // temp disable until eslint supports script setup
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/ban-types': 'off',
    'vue/multi-word-component-names': 'off'
  },
  plugins: ['jest'],
};
