const path = require("path");
const { override, addWebpackAlias, useBabelRc } = require("customize-cra");

module.exports = {
  webpack: override(
    useBabelRc(),
    addWebpackAlias({
      "#": path.resolve(__dirname, ".."),
      "@": path.resolve(__dirname, "../src"),
    })
  ),
};
