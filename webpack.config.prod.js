var path = require('path')
var webpack = require('webpack')
var htmlWebpackPlugin = require('html-webpack-plugin');
var uglifyPlugin = webpack.optimize.UglifyJsPlugin;
var config = {
	entry: path.resolve(__dirname,'./src/index.js'),
	output: {
		path : path.resolve(__dirname,'dist'),
		filename : 'bundle.js'
	},
	devServer: {
		contentBase: 'dist',
		inline: true,
		port: 8080,
		stats:{
			color:true
		}
	},
	module: {
		// loaders:[
		// 	{
		// 		test:/\.js$/,
		// 		loader: 'babel-loader',
		// 		exclude: /node_modules/
		// 	}
		// ]
		rules:[
			{
				test:/\.js$/,
				exclude: /node_modules/,
				use:{
					loader: 'babel-loader'
				}
			},
			{
				test: /\.css$/,
				use:[
					{loader: 'style-loader'},
					{loader: 'css-loader'}
				]
			}
		]
	},
	plugins:[
		new htmlWebpackPlugin({
			title: "搭建前端工作流",
			template: './src/index.html'
		}),
		new uglifyPlugin({
			compress: false
		}),
		new webpack.BannerPlugin('作者：周臣文\n日期：2017-8-12\n协议：MIT Lincense')
	]
}

module.exports = config