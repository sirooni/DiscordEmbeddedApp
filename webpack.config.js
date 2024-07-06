module.exports = {
	mode: 'development',
	entry: './src/index.tsx',
	module: {
		rules: [
			{
				test: /.(.jsx?|.tsx?)$/,
				exclude: /node_modules/,
				use: 'ts-loader',
			},
		],
	},
	resolve: {
		extensions: ['.js', '.jsx', '.ts', '.tsx'],
	},
}
