var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var autoprefixer = require('autoprefixer');


var SRC_PATH = path.resolve(__dirname, './src');

module.exports = {
    devtool: 'source-map',
    entry: {
        vendor: ['regularjs', 'axios', 'store', 'stateman', 'restate'],
        app: ['./src/index.js']
    },
    output: {
        path: __dirname + '/build',
        filename: "[name].[chunkhash].js"
    },
    resolve: {
        alias: {
            restate: path.resolve(__dirname, './src/lib/restate.js')
        }
    },
    module: {
        loaders: [
            { test: /\.html$/, loader: 'raw' },
            { test: /\.rgl$/, loader: 'rgl' },
            {
                test: /\.js$/,
                include: SRC_PATH,
                loader: 'babel'
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('style-loader', ['css-loader', 'postcss-loader', 'sass-loader']),
                incldue: SRC_PATH
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url',
                query: {
                    limit: 10000,
                    name: '[name].[hash:5].[ext]'
                }
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('style.[contenthash:5].css',{
            allChunks: true
        }),
        new webpack.optimize.CommonsChunkPlugin("vendor", "vendor.[hash:5].js"),
        new HtmlWebpackPlugin({
            template: './index.html',
            inject: 'body'
        })
    ],
    postcss: [
        autoprefixer
    ]
}
