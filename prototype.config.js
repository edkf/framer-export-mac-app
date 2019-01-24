const path = require('path')

const config = {
  dimensions: {
    width: 375,
    height: 812
  },
  dist_path: path.resolve(__dirname, './dist'),
  dev_url: 'http://localhost:3000/',
  build_url: `file://${__dirname}/index.html`,
}

module.exports = config
