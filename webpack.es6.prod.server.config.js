'use strict';
let BabiliPlugin = require("babili-webpack-plugin");

let path = require('path');
let webpack = require('webpack');

module.exports = {
  context: path.resolve(__dirname, './app'),
  entry: {
    server: path.resolve(__dirname, './app/server.tsx'),
  },

  output: {
    path: path.resolve(__dirname, './bin/'),
    publicPath: path.resolve(__dirname, './bin/'),
    filename: '[name].es6.prod.bundle.js'
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader?configFileName=tsconfig.server.es2015.json'
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
      '__dirname': `"${__dirname}"`,
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new BabiliPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'server',
      minChunks: Infinity,
      filename: '[name].es6.prod.bundle.js',
    }),

  ],
  target: 'node',
  node: {
    __dirname: true
  }
};
