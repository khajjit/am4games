const app = require('express')();
const setup = require('./utils/setup-server');

setup.middleware(app);
setup.routes(app);
setup.listen(app);

// module.exports = app; // TODO: remove if it is not needed for tests.
