module.exports = {
	devServer: {
		proxy: 'http://localhost:8080',
		public: '192.168.0.18:8080',
		watchOptions: {
			poll: true
		},
	},
	filenameHashing: false,
	productionSourceMap: false,
	publicPath: './',
}
