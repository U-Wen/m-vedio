const path = require('path')

const resolve = dir => {
  return path.join(__dirname, dir)
}

module.exports = {
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('./src'))
      .set('assets', resolve('.src/assets'))
      .set('commonJS', resolve('.src/commonJS'))
      .set('components', resolve('.src/components'))
      .set('network', resolve('.src/network'))
      .set('views', resolve('.src/views'))
  }
}