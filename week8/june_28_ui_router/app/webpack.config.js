const HtmlWebpackPlugin = require( 'html-webpack-plugin' );
// const webpack = require( 'webpack' );

module.exports = {
	entry: './src/main.js',
	output: {
		path: '../server/public',
		filename: 'bundle.js'
	},
	devtool: 'source-map',
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html'
		})
		// new webpack.DefinePlugin({
		// 	API_URL: JSON.stringify( 'http://localhost:3000/api' )
		// })
	],
	module: {
		preLoaders: [{
			test: /\.js$/,
			loader: 'eslint-loader',
			exclude: /node_modules/
		}],
		loaders: [{
			test: /\.js$/,
			exclude: /node_modules/,
			loader: 'babel',
			query: {
				cacheDirectory: true //,
				// plugins: ['transform-runtime']
			}
		},
		{
			test: /\.scss$/,
			loader: 'style!css?sourceMap!sass?sourceMap'	
		},
		{
			test: /\.html$/,
			loader: 'html'	
		}]
	},
	sassLoader: {
		includePaths: [ './src/scss/includes' ]
	}
};