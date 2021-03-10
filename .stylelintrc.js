module.exports = {
  "extends": [
    "stylelint-config-recess-order",
    "stylelint-config-standard",
  ],
  "plugins": ["stylelint-scss"],
  "rules": {
    "max-nesting-depth": 3
  },
  "ignoreFiles": [
    "./node_modules/**/*.{css,scss,sass}",
    "./dist/**/*.{css,scss,sass}"
  ]
}
