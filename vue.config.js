module.exports = {
  publicPath: '/',
  outputDir: 'dist',
  pwa: {
    iconPaths: {
      favicon32: 'favicon.ico',
      favicon16: 'favicon.ico',
      appleTouchIcon: 'favicon.ico',
      maskIcon: 'favicon.ico',
      msTileImage: 'favicon.ico'
    }
  },
  devServer: {
    proxy: 'http://192.168.55.197:8080/'
  }
  // chainWebpack: config => {
  //   config.resolve.alias
  //     .set('@', resolve('./src'))
  //     .set('assets', resolve('./src/assets'))
  //     .set('commonJS', resolve('./src/commonJS'))
  //     .set('components', resolve('./src/components'))
  //     .set('network', resolve('./src/network'))
  //     .set('views', resolve('./src/views'))
  // }
}
