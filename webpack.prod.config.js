'use strict';
let webpack = require('webpack');
let path = require('path');

module.exports = {
  entry: {
    'main': ['./app/main.tsx'],
    'vendor': ['react', 'react-dom', 'lodash']
  },

  output: {
    path: './dist',
    filename: '[name].es5.prod.bundle.js'
  },

  module: {
    rules: [
      { test: /\.tsx?$/, use: 'ts-loader' }
    ]
  },

  plugins: [
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: true
      },
      output: {
        comments: false
      },
      sourceMap: false
    })
  ],

  resolve: {
    modules: [
      'node_modules',
      path.resolve(__dirname, 'app')
    ],
    extensions: ['.ts', '.tsx', '.js']
  },

  devtool: false
};