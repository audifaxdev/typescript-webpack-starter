'use strict';
const BabiliPlugin = require("babili-webpack-plugin");
const WebpackShellPlugin = require('webpack-shell-plugin');
const path = require('path');
const webpack = require('webpack');

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
    // new BabiliPlugin(),
    // new webpack.optimize.CommonsChunkPlugin({
    //   name: 'server',
    //   minChunks: Infinity,
    //   filename: '[name].es6.prod.bundle.js',
    // }),
    new WebpackShellPlugin({
      onBuildEnd: ['echo "Starting server"', './node_modules/.bin/nodemon ./bin/server.es6.prod.bundle.js']
    })
  ],
  target: 'node',
  node: {
    __dirname: true
  }
};
