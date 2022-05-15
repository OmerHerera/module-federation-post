const { withFederatedSidecar } = require("@module-federation/nextjs-mf");

module.exports = withFederatedSidecar({
  name: "remote_nextjs_module",
  filename: "static/chunks/remoteEntry.js",
  exposes: {
    "./BB8": "./components/BB8.js",
  },
  shared: {
  },
})({
  // your original next.config.js export
  reactStrictMode: true,
});