let mix = require("laravel-mix");
require("laravel-mix-tailwind");
mix.setPublicPath("dist");

mix
	.css("src/styles.css", "dist/styles.css")
	.tailwind()
	.then(() => {
		mix.js("src/app.js", "dist/app.js");
	});

// mix.js("resources/assets/js/app.js", "public/js").then((stats) => {
// 	console.log(Object.keys(stats.compilation.assets));
// });

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
