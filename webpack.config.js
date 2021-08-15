const path = require("path");
module.exports = {
  test: /\.svg$/,
  use: ["@svgr/webpack"],

  resolve: {
    alias: {
      "@/*": path.resolve(__dirname, "src/*"),
    },
  },
};
