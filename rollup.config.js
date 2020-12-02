import { terser } from "rollup-plugin-terser";
import babel from "rollup-plugin-babel";
import pkg from "./package.json";

let banner = "/*!\n";
banner += ` * ${pkg.name}\n`;
banner += ` * ${pkg.version} - ${new Intl.DateTimeFormat("en-US").format(
	Date.now()
)}\n`;
if (pkg.homepage) {
	banner += ` * ${pkg.homepage}\n`;
}
banner += ` * (c) ${pkg.author.name}; ${pkg.license} License\n`;
banner += " */\n";

export default {
	input: "src/index.js",
	output: {
		file: "dist/fullscreen.polyfill.js",
		format: "iife",
		name: "FullscreenPolyfill",
		sourcemap: true,
		banner: banner,
	},
	plugins: [
		babel(),
		terser({
			format: {
				comments(_, comment) {
					const text = comment.value;
					const type = comment.type;
					if (type === "comment2") {
						return /License/gi.test(text);
					}
				},
			},
		}),
	],
};
