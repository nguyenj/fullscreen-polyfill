import minify from 'rollup-plugin-minify-es'
import pkg from './package.json'

let banner = '/*!\n'
banner += ` * ${pkg.name}\n`
banner += ` * ${pkg.version} - ${new Intl.DateTimeFormat('en-US').format(Date.now())}\n`
if (pkg.homepage) {
	banner += ` * ${pkg.homepage}\n`
}
banner += ` * (c) ${pkg.author.name}; ${pkg.license} License\n`
banner += ' */\n'

export default {
	input: 'src/index.js',
	output: {
		file: 'dist/fullscreen.polyfill.js',
		format: 'iife',
		name: 'FullscreenPolyfill',
		sourcemap: true,
		banner: banner
	},
	plugins: [
		minify({
			output: {
				comments (node, comment) {
					const text = comment.value
					const type = comment.type
					if (type === 'comment2') {
						return /License/ig.test(text)
					}
				}
			}
		})
	]
}
