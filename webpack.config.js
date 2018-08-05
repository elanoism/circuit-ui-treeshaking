"use strict";

var path = require("path");
var webpack = require("webpack");

module.exports = {
  entry: "./src/index.js",
  mode: "production",
  output: {
    path: path.resolve(__dirname, "static/dist"),
    filename: "[name].js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: "svg-react-loader"
          }
        ]
      }
    ]
  },
  optimization: {
    minimize: true
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    })
  ]
};
