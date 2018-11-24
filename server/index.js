const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const app = express();
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

[
  /* sub-servers for api by role */
  require('./sub-servers/api-user'),
  require('./sub-servers/api-editor'),
  require('./sub-servers/api-admin'),
  require('./sub-servers/api-common'),
  /* sub-servers for static files */
  require('./sub-servers/static-admin'),
  require('./sub-servers/static-editor'),
  require('./sub-servers/static-user')
].forEach(server => {
  app.use(server.route, server.app);
});

app.listen(process.env['PORT'], () => {
  console.log('\x1b[36m%s\x1b[0m', 'Server started...');
});

module.exports = app;
