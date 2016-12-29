'use strict';
let BabiliPlugin = require("babili-webpack-plugin");
let path = require('path');
let webpack = require('webpack');

module.exports = {
  entry: {
    'main': ['./app/main.tsx'],
    'vendor': ['react', 'react-dom', 'lodash']
  },

  output: {
    path: './dist',
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
      path.resolve(__dirname, 'app')
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
  ],
  externals: {

  },
  devtool: false
};
