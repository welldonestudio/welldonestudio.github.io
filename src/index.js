const webpack = require('webpack');

module.exports = function (context, options) {
  return {
    name: 'custom-docusaurus-plugin',
    configureWebpack(config, isServer, utils) {
      return {
        mergeStrategy: {'module.rules': 'prepend'},
        plugins: [
          new webpack.ProvidePlugin({
            process: 'process/browser.js',
            Buffer: ['buffer', 'Buffer'],
          })
        ]
      };
    },
  };
};