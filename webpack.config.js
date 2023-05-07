const webpack = require("webpack");
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: path.resolve(__dirname, './src/index.js'),
    output: {
      path: path.resolve(__dirname, './dist'),
      filename: 'index.js'
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: 'src/index.html'
      })
    ],
    module: {
      rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader'
            }
          },
          {
            test: /\.(scss|css)$/,
            use: ['style-loader', 'css-loader', 'sass-loader']
          },
        ]
    },
    devtool: 'source-map',
    devServer: {
      static: {
        directory: path.join(__dirname, 'public'),
      },
      compress: true,
      port: 8080,
    },
};