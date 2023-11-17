/**@type {import('eslint'.ESLint.ConfigData)} */
module.exports = {
  extends: ["next/core-web-vitals", "prettier"],
  overrides: [
    {
      files: ["*.mdx"],
      extends: ["plugin:mdx/recommended"],
      rules: {
        "react/jsx-no-undef": "off", // react components defined outside of mdx files
      },
    },
  ],
};
