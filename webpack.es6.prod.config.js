'use strict';
let BabiliPlugin = require("babili-webpack-plugin");
let path = require('path');
let webpack = require('webpack');
let WriteFilePlugin = require('write-file-webpack-plugin');

module.exports = {
  context: path.resolve(__dirname, './app'),
  entry: {
    main: path.resolve(__dirname, './app/main.tsx'),
    vendor: ['react', 'react-dom', 'react-router', 'lodash']
  },

  output: {
    path: path.resolve(__dirname, './dist/'),
    publicPath: path.resolve(__dirname, './dist/'),
    filename: '[name].es6.prod.bundle.js'
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader?configFileName=tsconfig.es2015.json'
      }
    ]
  },

  resolve: {
    modules: [
      'node_modules',
      path.resolve(__dirname, './app')
    ],
    extensions: ['.ts', '.tsx', '.js']
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
      filename: '[name].es6.prod.bundle.js',
    }),

    new WriteFilePlugin()
  ],
  devServer: {
    contentBase: path.join(__dirname, "./"),
    compress: true,
    hot: true,
    port: 9000
  },
};
