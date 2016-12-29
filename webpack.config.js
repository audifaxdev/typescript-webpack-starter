'use strict';
let path = require('path');
let webpack = require('webpack');

module.exports = {
  entry: {
    'main': ['./app/main.tsx'],
    'vendor': ['react', 'react-dom', 'lodash']
  },

  output: {
    path: './dist',
    filename: '[name].es5.bundle.js'
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader?configFileName=tsconfig.json'
      }
    ]
  },

  resolve: {
    modules: [
      'node_modules',
      path.resolve(__dirname, 'app')
    ],
    extensions: ['.ts', '.tsx', '.js'],

  },

  plugins: [

  ],

  devtool: false
};
