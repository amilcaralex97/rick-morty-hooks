const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const path = require('path');
module.exports = (env, argv) => {
	const isDevelopment = argv.mode === 'development';

	return {
		mode: isDevelopment ? 'development' : 'production',
		devtool: isDevelopment ? 'eval-source-map' : 'source-map',
		entry: './src/index.js',
		output: {
			path: path.resolve(__dirname, 'dist'),
			filename: 'bundle.js',
		},
		module: {
			rules: [
				{
					test: /\.js$/,
					exclude: /node_modules/,
					use: {
						loader: 'babel-loader',
					},
				},
				{
					test: /\.css$/,
					use: ['style-loader', 'css-loader'],
				},
			],
		},
		plugins: [
			new HtmlWebpackPlugin({
				template: './public/index.html',
				filename: './index.html',
			}),
			new ESLintPlugin(),
		],
		optimization: {
			minimize: !isDevelopment,
		},
		devServer: {
			static: path.join(__dirname, 'public'),
			compress: true,
			port: 3000,
			hot: true,
			open: true,
		},
		watchOptions: {
			poll: 1000, // Check for changes every second
		},
	};
};
