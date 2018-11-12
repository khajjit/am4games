// vue.config.js

module.exports = {
  baseUrl: process.env['MODE'] === 'dev' ? '/' : '/user',
  productionSourceMap: false,
  devServer: {
    port: 8081
  }
}
