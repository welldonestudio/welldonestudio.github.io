// eslint-disable-next-line
module.exports = function () {
  return {
    name: 'custom-docusaurus-plugin',
    // eslint-disable-next-line
    configureWebpack(config, isServer, utils) {
      return {
        module: {
          noParse: /\.wasm$/,
          rules: [
            {
              test: /\.wasm$/,
              // Tells WebPack that this module should be included as
              // base64-encoded binary file and not as code
              loader: 'base64-loader',
              // Disables WebPack's opinion where WebAssembly should be,
              // makes it think that it's not WebAssembly
              //
              // Error: WebAssembly module is included in initial chunk.
              type: 'javascript/auto',
              exclude: /node_modules\/(?!(argon2-browser\/dist)\/).*/,
            },
          ],
        },
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
