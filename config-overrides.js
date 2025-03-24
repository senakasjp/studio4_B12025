module.exports = function override(config) {
  config.resolve.fallback = {
    net: require.resolve('net-browserify'),
    http: require.resolve('stream-http'),
    path: require.resolve('path-browserify'),
    querystring: require.resolve('querystring-es3'),
    fs: false,
    crypto: require.resolve('crypto-browserify'),
    stream: require.resolve('stream-browserify'),
    zlib: require.resolve('browserify-zlib'),
    vm: require.resolve('vm-browserify'),
    async_hooks: false,
  };

  // Suppress dynamic require warnings
  config.ignoreWarnings = [/Critical dependency:/];

  // Add optimization to remove timestamps and dangerous functions
  config.optimization = {
    ...config.optimization,
    minimize: true,
    minimizer: [
      ...config.optimization.minimizer,
      new TerserPlugin({
        terserOptions: {
          compress: {
            drop_console: true,
            pure_funcs: ['console.log', 'console.info', 'console.debug', 'console.warn'],
          },
          mangle: {
            properties: {
              regex: /^_/,
            },
          },
        },
      }),
    ],
  };

  return config;
}; 