const path = require('path')
const webpack = require('webpack')
const BrowserSyncPlugin = require('browser-sync-webpack-plugin')

const coffee = {
  test: /\.coffee$/,
  use: [ 'coffee-loader' ]
}

module.exports = {
  mode: 'development', // none, development, production
  entry: './framer/app.coffee', // Entry file
  output: {
    filename: 'bundle.js', // Genetated file
    path: path.resolve(__dirname, './dist'), // Generated file folder,
  },
  module: {
    rules: [
      coffee
    ]
  },
  plugins: [
    new BrowserSyncPlugin({
      // browse to http://localhost:3000/ during development,
      // ./public directory is being served
      host: 'localhost',
      port: 3000,
      server: { baseDir: ['./'] }
    })
  ]
}