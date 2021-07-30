const path = require('path')

module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/WDesign/test/'
    : '/',
  configureWebpack: config => {
    config.resolve.alias = {
      '@': path.resolve(__dirname, 'src')
    }
  },
  runtimeCompiler: true,
  devServer: {
    open:true
    // https: true
  }

}
