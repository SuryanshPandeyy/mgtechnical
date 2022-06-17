const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      images: {
        domains: [
          "res.cloudinary.com",
          "lh3.googleusercontent.com",
          "cdn.pixabay.com",
        ],
      },
      pageExtensions: ["mdx", "jsx", "js", "ts", "tsx"],

      webpack: (config, { isServer }) => {
        if (!isServer) {
          config.resolve.fallback.fs = false;
          config.resolve.fallback.dns = false;
          config.resolve.fallback.net = false;
        }

        return config;
      },

      reactStrictMode: true,
      trailingSlash: true,

      env: {
        MONGODB_URI:
          "mongodb+srv://suryanshpallavi:tuly%40th%40llo297@cluster0.l7odd.mongodb.net/mgtechnical-dev?retryWrites=true&w=majority",
      },
    };
  } else {
    return { 
      images: {
        domains: [
          "res.cloudinary.com",
          "lh3.googleusercontent.com",
          "cdn.pixabay.com",
        ],
      },
      pageExtensions: ["mdx", "jsx", "js", "ts", "tsx"],

      reactStrictMode: true,
      trailingSlash: true,

      env: {
        MONGODB_URI:
          "mongodb+srv://suryanshpallavi:tuly%40th%40llo297@cluster0.l7odd.mongodb.net/mgtechnical?retryWrites=true&w=majority",
      },
    };
  }
};
