const path = require("path");

const buildEslintCommand = (filenames) =>
  `next lint --fix --file ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(" --file ")}`;

module.exports = {
  "*.{js,jsx,mdx,ts,tsx}": [buildEslintCommand],
  "*.{js,jsx,mdx,ts,tsx,json,html,css}": ["prettier --write"],
};
