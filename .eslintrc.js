const RULES = {
  OFF: 'off',
  WARN: 'warn',
  ERROR: 'error'
}

module.exports = {
  env: {
    browser: true,
    es2020: true,
    node: true
  },
  extends: ['plugin:react/recommended', 'airbnb', 'prettier', 'prettier/react'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 11,
    sourceType: 'module'
  },
  plugins: ['react'],
  rules: {
    semi: RULES.OFF,
    'comma-dangle': RULES.OFF,
    'import/prefer-default-export': RULES.OFF,
    'react/prop-types': RULES.OFF,
    'react/button-has-type': RULES.OFF
  }
}
