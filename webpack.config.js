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
		// [contenthash] is generating a new id number and add it to the file name every time, when npm build is run
		filename: "[name][contenthash].js",
		//clean - removing old files in the dist folder when run build command
		clean: true,
		assetModuleFilename: "[name] [ext]",
	},
	//source-map is a tool for debugging - to see the source code
	devtool: "source-map",
	devServer: {
		static: {
			directory: path.resolve(__dirname, "dist"),
		},
		port: 3000,
		open: true,
		hot: true,
		compress: true,
		historyApiFallback: true,
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
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ["@babel/preset-env"],
					},
				},
			},
			{
				test: /\.(png|jpg|jpeg|gif|svg)$/i,
				type: "asset/resource",
			},
		],
	},

	//plugin, installed via npm earlier, that generated an HTML file
	plugins: [
		new HtmlWebpackPlugin({
			title: "Webpack dummy site",
			filename: "index.html",
			template: "src/template.html",
		}),
	],
};
