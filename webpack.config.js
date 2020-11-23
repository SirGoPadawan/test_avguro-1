const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const autoprefixer = require("autoprefixer");

module.exports = {
  context: path.resolve("src"),
  mode: "development",
  resolve: {
    extensions: [".js"],
  },
  module: {
    rules: [
      {
        test: /\.(woff|woff2|eot|ttf|svg|otf)$/,
        loader: "url-loader?limit=100000",
      },
      {
        test: /\.(jpg|jpeg|png|svg)$/,
        loader: "file-loader",
        options: {
          esModule: false,
        },
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
            },
          },
          {
            loader: "postcss-loader",
            options: {
              plugins: [autoprefixer({ grid: "autoplace" })],
              sourceMap: true,
            },
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new HTMLWebpackPlugin({ template: "./index.html" }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
  ],
  entry: "./index.js",
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "build"),
  },
  devServer: {
    contentBase: "./index.html",
    port: 8080,
  },
};
