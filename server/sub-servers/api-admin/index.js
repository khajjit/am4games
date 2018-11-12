const express = require('express');
const { connection } = require('../../database/config')
const { checkAccess } = require('../../utils/auth')

require('../../database/models/_entry') // TODO: import only necessary models

const apiAdmin = express();
apiAdmin.all('*', (req, res, next) => {
  checkAccess('admin', req) ? next() : res.redirect('/')
})

apiAdmin.get('/test', (req, res) => res.json({ msg: 'Hello! It\'s server route = /api-admin' }));

[
  { modelName: 'Article', route: '/test-db-articles' },
  { modelName: 'Game', route: '/test-db-games' },
  { modelName: 'News', route: '/test-db-news' },
  { modelName: 'Trailer', route: '/test-db-trailers' },
  { modelName: 'User', route: '/test-db-users' },
].forEach(({ modelName, route }) => {
  apiAdmin.get(route, (req, res) => {
    const _model = connection.model(modelName)
    _model.find({}, (err, docs) => {
      res.json({ status: 'ok', err, docs })
    })
  });
});

module.exports = {
  app: apiAdmin,
  route: '/api-admin'
};
