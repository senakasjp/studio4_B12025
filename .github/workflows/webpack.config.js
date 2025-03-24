const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');

module.exports = {
  resolve: {
    fallback: {
      "http": require.resolve("stream-http"),
      "https": require.resolve("https-browserify"),
      "buffer": require.resolve("buffer/"),
      "util": require.resolve("util/"),
      "zlib": require.resolve("browserify-zlib"),
      "net": require.resolve("net-browserify"),  // Add this line
      "tls": require.resolve("tls-browserify")   // Add this line
    }
  },
  plugins: [
    new NodePolyfillPlugin()
  ]
};