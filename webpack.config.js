const path = require('path');
module.exports = {
  entry: {
    'app': './src/main.tsx',
    'dict': './src/dict.ts'
  },
  output: {
    filename: '[name].js'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  module: {
    rules: [
      { test: /\.tsx?$/, loader: 'ts-loader' }
    ]
  },
  devServer: {},
  devtool: 'source-map'
};