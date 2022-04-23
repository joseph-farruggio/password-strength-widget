let mix = require("laravel-mix");
require("laravel-mix-tailwind");
mix.setPublicPath("dist");

mix.css("src/styles.css", "dist/styles.css").tailwind();
setTimeout(() => {
	mix.js("src/app.js", "dist/app.js"), 2000;
});

mix.webpackConfig({
	module: {
		rules: [
			{
				test: /\.html$/,
				loader: "html-loader",
			},
		],
	},
});

if (mix.inProduction()) {
	mix.version();
}
