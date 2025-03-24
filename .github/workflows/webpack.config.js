const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');

module.exports = {
  resolve: {
    fallback: {
      "http": require.resolve("stream-http"),
      "https": require.resolve("https-browserify"),
      "buffer": require.resolve("buffer/"),
      "util": require.resolve("util/"),
      "zlib": require.resolve("browserify-zlib")
    }
  },
  plugins: [
    new NodePolyfillPlugin()
  ]
};