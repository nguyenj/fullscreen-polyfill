module.exports = function(config) {
	config.set({
		basePath: '',
		frameworks: ['mocha', 'chai'],
		files: [
			'lib/*.js',
			'test/*.js'
		],
		exclude: [
		],
		preprocessors: {
		},
		reporters: ['progress'],
		port: 9876,
		colors: true,
		logLevel: config.LOG_INFO,
		autoWatch: true,
		browsers: [
			'Chrome',
			'Firefox',
			'Safari',
			'IE'
		],
		singleRun: true,
		concurrency: Infinity
	})
}
