const path = require('path');
module.exports = {
  entry: {
    'dist/app': './src/main.tsx'
  },
  output: {
    filename: '[name].js'
  },
  resolve: {
    extensions: ['.webpack.js', '.web.js', '.ts', '.tsx', '.js']
  },
  module: {
    rules: [
      { test: /.tsx?$/, loader: 'ts-loader' }
    ]
  },
  devServer: {},
  devtool: 'source-map'
};