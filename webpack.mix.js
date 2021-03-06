let mix = require("laravel-mix");
require("laravel-mix-tailwind");
mix.setPublicPath("dist");

mix.css("src/styles.css", "dist/styles.css").tailwind();
mix.js("src/app.js", "dist/app.js");

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
