const base = require("./base.js");
module.exports = {
  ...base,
  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
  plugins: [...base.plugins, "sort-keys-fix"],
  rules: {
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        argsIgnorePattern: "^_",
        destructuredArrayIgnorePattern: "^_",
      },
    ],
    "no-unused-vars": "off",
    "sort-keys-fix/sort-keys-fix": "error",
  },
};
