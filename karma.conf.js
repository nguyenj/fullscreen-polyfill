// Add chromeheadless bin path to the node environment
process.env.CHROME_BIN = require('puppeteer').executablePath()

module.exports = function(config) {
	config.set({
		basePath: '',
		frameworks: [ 'mocha', 'chai' ],
		files: [ 'dist/*.js', 'test/*.js' ],
		exclude: [],
		preprocessors: {},
		reporters: [ 'progress' ],
		port: 9876,
		colors: true,
		logLevel: config.LOG_INFO,
		autoWatch: true,
		browsers: [ 'ChromeHeadlessNoSandbox', 'Firefox' ],
		customLaunchers: {
			ChromeHeadlessNoSandbox: {
				base: 'ChromeHeadless',
				flags: ['--no-sandbox']
			}
		},
		singleRun: true,
		concurrency: Infinity
	})
}
