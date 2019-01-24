const path = require('path')
const webpack = require('webpack')
const BrowserSyncPlugin = require('browser-sync-webpack-plugin')

const coffee = {
  test: /\.coffee$/,
  use: [ 'coffee-loader' ]
}

module.exports = {
  mode: 'production',
  entry: './app.coffee',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../dist'),
  },
  module: {
    rules: [
      coffee
    ]
  },
  plugins: [
    new BrowserSyncPlugin({
      host: 'localhost',
      port: 3000,
      open: false,
      server: { baseDir: [path.resolve(__dirname, '../')] }
    })
  ]
}
