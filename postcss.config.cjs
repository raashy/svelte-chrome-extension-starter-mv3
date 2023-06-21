const tailwindcss = require("tailwindcss");
const autoprefixer = require("autoprefixer");
const postcssImport = require("postcss-import");
const postcssUrl = require("postcss-url");

const config = {
  plugins: [
    //Some plugins, like tailwindcss/nesting, need to run before Tailwind,
    tailwindcss(),
    postcssImport(),
    postcssUrl({
      url: "inline", // Inline any CSS imports as base64 data URIs
    }),
    //But others, like autoprefixer, need to run after,
    autoprefixer(),
  ],
};

module.exports = config;
