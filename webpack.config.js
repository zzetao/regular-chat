var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var SRC_PATH = path.resolve(__dirname, './src');

module.exports = {
    entry: [
        './src/index.js',
    ],
    output: {
        path: 'dist',
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.html$/, loader: 'html' },
            { test: /\.rgl$/, loader: 'rgl' },
            {
                test: /\.js$/,
                include: SRC_PATH,
                loader: 'babel'
            },
            {
                test: /\.scss$/,
                loaders: ['style','css','sass'],
                incldue: SRC_PATH
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'url?limit=20000' // 20kb
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
            inject: 'body'
        })
    ]
}
