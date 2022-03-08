const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

function resolve(_path) {
  return path.resolve(__dirname, _path);
}
module.exports = {
  mode: "development",
  entry: "./src/index.ts",
  devtool: "source-map",
  plugins: [
    new HtmlWebpackPlugin({
      title: "guang",
      template: resolve("./public/index.html"),
    }),
  ],
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              ["@babel/preset-env", { targets: "defaults" }],
              "@babel/preset-typescript",
            ],
          },
        },
      },
    ],
  },
};
