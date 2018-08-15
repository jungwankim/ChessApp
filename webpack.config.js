const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const devMode = process.env.NODE_ENV !== 'production'


let cleanOptions = {

	exclude: ['index.html'],
	verbose: true,

};

module.exports = {

	entry: {
		'js/app': './src/js/app.js'
	},

	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, 'public')
	},
	plugins: [
		new CleanWebpackPlugin(['public'], cleanOptions),

	    new MiniCssExtractPlugin({
	      filename: "./css/app.css",
	      chunkFilename: "[id].css"
    	})
 	],

	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: 'babel-loader'
			},
			{
				test: /\.s[ac]ss$/,
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader',
					'sass-loader'
				]
			},
			{
        		test: /\.(png|svg|jpg|gif)$/,
	         	use: [
	           		'file-loader',
	         	]
	       	}

		]
	},
};