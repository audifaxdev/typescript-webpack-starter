'use strict';
const BabiliPlugin = require("babili-webpack-plugin");
const path = require('path');
const webpack = require('webpack');
const WriteFilePlugin = require('write-file-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractSass = new ExtractTextPlugin({
  filename: "styles.css",
  disable: process.env.NODE_ENV === "development"
});

module.exports = {
  context: path.resolve(__dirname, './app'),
  entry: {
    client: path.resolve(__dirname, './app/client.tsx'),
    vendor: ['react', 'react-dom', 'react-router', 'lodash'],
  },

  output: {
    path: path.resolve(__dirname, './public/dist/'),
    publicPath: path.resolve(__dirname, './public/dist/'),
    filename: '[name].bundle.js'
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader?configFileName=tsconfig.client.json'
      },
      {
        test: /\.scss$/,
        loader: extractSass.extract({
          loader: [{
            loader: "css-loader"
          }, {
            loader: "sass-loader"
          }],
          // use style-loader in development
          fallbackLoader: "style-loader"
        })
      }
    ]
  },

  resolve: {
    modules: [
      'node_modules',
      path.resolve(__dirname, './app')
    ],
    extensions: ['.ts', '.tsx', '.js', '.scss']
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),

    new BabiliPlugin(),

    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: Infinity,
      filename: '[name].bundle.js',
    }),

    new WriteFilePlugin(),

    extractSass
  ],
  devServer: {
    contentBase: path.join(__dirname, "./"),
    compress: true,
    hot: true,
    port: 9000
  },
};
