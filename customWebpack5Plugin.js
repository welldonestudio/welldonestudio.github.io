// eslint-disable-next-line
module.exports = function () {
  return {
    name: 'custom-docusaurus-plugin',
    // eslint-disable-next-line
    configureWebpack(config, isServer, utils) {
      return {
        resolve: {
          alias: {
            path: require.resolve('path-browserify'),
          },
          fallback: {
            crypto: require.resolve('crypto-browserify'),
            stream: require.resolve('stream-browserify'),
            buffer: require.resolve('buffer'),
            path: require.resolve('path-browserify'),
            fs: false,
            os: false,
            net: false,
            http: require.resolve('http-browserify'),
            https: require.resolve('https-browserify'),
            assert: false,
            url: false,
            util: require.resolve('util'),
          },
        },
        experiments: {
          asyncWebAssembly: true,
        },
        node: {
          __dirname: true,
        },
      };
    },
  };
};
