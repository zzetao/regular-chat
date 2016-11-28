var webpack = require('webpack');
var webpackDevServer = require('webpack-dev-server');
var config = require('./webpack.common.js');


var devConfig = {
	port: 3002,
	ip: 'localhost',
}


config.entry.app.unshift("webpack-dev-server/client?http://" + devConfig.ip + ":" + devConfig.port + "/", "webpack/hot/dev-server");
config.plugins.push(new webpack.HotModuleReplacementPlugin());

var compiler = webpack(config);
var server = new webpackDevServer(compiler, {
	hot: true,
	inline: true,
	stats: { colors: true }
})

.listen(devConfig.port, devConfig.ip, function() {
  console.log('Listening at http://' + devConfig.ip + ':' + devConfig.port + '\n')
})