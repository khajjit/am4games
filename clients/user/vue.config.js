// vue.config.js

module.exports = {
  runtimeCompiler: true,
  baseUrl: process.env['NODE_ENV'] === 'development' ? '/' : '/user',
  productionSourceMap: false,
  devServer: {
    port: 8081
  }
}
