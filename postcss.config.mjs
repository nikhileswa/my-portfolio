Set-Content -Encoding UTF8 -NoNewline .\postcss.config.mjs @'
// postcss.config.mjs
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
'@
