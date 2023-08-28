module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "standard-with-typescript",
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  "parserOptions": {
    "project": "tsconfig.json",
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', "@typescript-eslint"],
  rules: {
    "react/react-in-jsx-scope": "off",
        "react/jsx-uses-react": "off",
        "react/self-closing-comp": [
            "error",
            {
                "component": true,
                "html": true
            }
        ]
  },
  "settings": {
    "react": {
        "version": "detect"
    }
  }
}
