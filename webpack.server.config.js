'use strict';
const nodeExternals = require('webpack-node-externals');
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
    filename: 'server.js'
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader?configFileName=tsconfig.server.json'
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
      // onBuildEnd: ['echo "Built finished, (Re)Starting server"', './node_modules/.bin/nodemon ./bin/server.js']
    })
  ],
  target: 'node',
  externals: [nodeExternals()],
  node: {
    __dirname: true
  }
};
