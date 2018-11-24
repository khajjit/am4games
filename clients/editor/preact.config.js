export default (config, env, helpers) => {
  /* ,,, */
  // let { plugin } = helpers.getPluginsByName(config, "UglifyJsPlugin")[0];
  // plugin.options.sourceMap = false

  /* ... */
  config.output.publicPath = process.env['NODE_ENV'] === 'development' ? '/' : '/editor'
}
