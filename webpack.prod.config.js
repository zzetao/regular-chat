require('shelljs/global')
var webpack = require('webpack');
var webpackConfig = require('./webpack.common.js');

webpackConfig.devtool = false;
webpackConfig.plugins = webpackConfig.plugins.concat([
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
	])

rm('-rf', 'build');

module.exports = webpackConfig;