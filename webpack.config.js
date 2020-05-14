/* eslint-disable strict */
const path = require('path');


// eslint-disable-next-line no-undef
module.exports = {
	entry: {
		main: './src/index.js',
		mozaika: './src/indexMozaika.js',
		schelkovo: './src/indexSchelkovo.js'
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].js',
		publicPath: '/dist'
	},
	devServer: {
		overlay: true
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: '/mode_modules/',
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env'],
						plugins: ['@babel/plugin-proposal-object-rest-spread']
					}
				}
			}
		]
	}
};
