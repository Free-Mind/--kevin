var path = require('path')
var webpack = require('webpack')
var htmlWebpackPlugin = require('html-webpack-plugin');
var openBrowserWebpackPlugin = require('open-browser-webpack-plugin');
var extractTextPlugin = require('extract-text-webpack-plugin');
//console.log("__dirname:  "+__dirname);
var config = {
	entry: path.resolve(__dirname,'./src/index.js'),
	output: {
		path : path.resolve(__dirname,'dist'),
		filename : 'bundle.[hash:6].js'
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
			// {
			// 	test: /\.css$/,
			// 	use:[
			// 		{loader: 'style-loader'},
			// 		{loader: 'css-loader'}
			// 	]
			// }
			{
				test:/\.css$/,
				use: extractTextPlugin.extract({
					fallback: "style-loader",
					use: "css-loader"
				})
			}
		]
	},
	plugins:[
		new htmlWebpackPlugin({
			title: "搭建前端工作流",
			template: './src/index.html'
		}),
		new openBrowserWebpackPlugin({url:"http://localhost:8080"}),
		new extractTextPlugin("styles.css")
	]
}

module.exports = config