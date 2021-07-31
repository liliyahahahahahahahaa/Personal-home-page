const path = require('path')

module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/workSpace/olivia/dist/'
    : '../../',
  configureWebpack: config => {
    config.resolve.alias = {
      '@': path.resolve(__dirname, 'src')
    }
  },
  runtimeCompiler: true,
  devServer: {
    // open:true
    // https: true
  }

}
