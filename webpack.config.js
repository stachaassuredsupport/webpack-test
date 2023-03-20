const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	//if there mode is "production" the code in the output file is less readable, but it is very short
	mode: "development",
	entry: {
		bundle_custom: path.resolve(__dirname, "src/index.js"),
		//there can be multiple entry sources
	},
	output: {
		path: path.resolve(__dirname, "dist"),
		//[name] is reffering to the name in the entry part. Right now it is "bundle_custom" see line 6"
		filename: "[name].js",
	},
	module: {
		//rules for different type of files - that ends with the same extension
		rules: [
			{
				test: /\.scss$/,
				use: [
					//loaders dependancies that was installed via npm earlier
					"style-loader",
					"css-loader",
					"sass-loader",
				],
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: "Webpack dummy site",
			filename: "index.thml",
		}),
	],
};
