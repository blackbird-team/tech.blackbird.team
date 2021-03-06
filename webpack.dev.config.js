module.exports = {
	context: `${__dirname}/source/tech/`,
	entry: [
		`${__dirname}/source/tech/js/index`,
		`${__dirname}/node_modules/webpack/hot/dev-server`
	],
	output: {
		path: `${__dirname}/public/tech/`,
		publicPath: "/public/tech/",
		filename: "tech.min.js"
	},
	module: {
		rules: [
			{
				test: /\.sass$/,
				use: ["style-loader", "css-loader", "sass-loader"]
			},
			{
				test: /\.(jpg|jpeg|gif|png|woff|woff2|eot|ttf|svg|otf)$/,
				exclude: /\/node_modules\//,
				use: {
					loader: "file-loader",
					options: {
						name: "[path][name].[ext]"
					}
				}
			},
			{
				test: /\.jsx?/,
				exclude: /node_modules/,
				use: ["babel-loader"]
			},
			{
				test: /\.json$/,
				use: "json-loader"
			}
		]
	},
	devServer: {
		contentBase: "./",
		inline: true,
		hot: true,
		historyApiFallback: true
	}
};
