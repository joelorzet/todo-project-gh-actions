module.exports = {
	presets: [
		[
			'@babel/preset-env',
			{
				modules: false,
				targets: { browsers: ['last 2 versions', 'safari >= 7'] },
			},
		],
		'@babel/preset-react',
	],
	env: {
		test: {
			presets: ['@babel/preset-env', '@babel/preset-react'],
		},
	},
};
