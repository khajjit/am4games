const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const morgan = require('morgan');

function middleware(app) {
  app.use(morgan(':method :status (:response-time ms) - :url'));
  app.use(cookieParser());
  app.use(bodyParser.urlencoded({ extended: true }));
}

function routes(app) {
  [
    /* sub-servers for api by role */
    require('../sub-servers/api-admin'),
    require('../sub-servers/api-common'),
    require('../sub-servers/api-editor'),
    require('../sub-servers/api-user'),
    /* sub-servers for static files */
    require('../sub-servers/static-admin'),
    require('../sub-servers/static-editor'),
    require('../sub-servers/static-user')
  ].forEach(server => {
    app.use(server.route, server.app);
  });
}

function listen(app) {
  const listener = app.listen(process.env['PORT'], () => {
    const { port } = listener.address()
    console.log('\x1b[33m', `Server started on ${port}.`)
  });
}

module.exports = {
  middleware,
  routes,
  listen
}
