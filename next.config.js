const withPWA=require('next-pwa')
module.exports = withPWA({
  pwa:{dest:'public'},
  webpack: (config, { isServer }) => {
    // Fixes packages that depend on fs/module module
    config.module.rules.push({
      test: /\.svg$/,
      issuer: {
        test: /\.(js|ts)x?$/,
      },
      use: ["@svgr/webpack"],
    });

    if (!isServer) {
      config.node = { fs: "empty", module: "empty" };
    }

    return config;
  },
  images: {
    domains: ["gogocdn.net", "animexninja-2.kunalsingh19.repl.co","legendtoon.tk","animexninja-api.kunalsingh19.repl.co"],
  },
  env: {
    key: "DHVIT_OPHAHHAMFLOL",
    URL: "https://animexninja-api.kunalsingh19.repl.co/api/",
  },
});