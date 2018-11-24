const express = require('express');
const { connection } = require('../../database/config')
const { checkAccess } = require('../../utils/auth')

require('../../database/models/_entry') // TODO: import only necessary models

const apiAdmin = express();
/* hide authorization for development mode */
if (process.env['NODE_ENV'] !== 'development') {
  apiEditor.all('*', (req, res, next) => {
    checkAccess('admin', req) ? next() : res.redirect('/')
  })
}

apiAdmin.get('/test', (req, res) => res.json({ msg: 'Hello! It\'s server route = /api-admin' }));

[
  { modelName: 'Article', route: '/test-db-articles' },
  { modelName: 'Game', route: '/test-db-games' },
  { modelName: 'News', route: '/test-db-news' },
  { modelName: 'Trailer', route: '/test-db-trailers' },
  { modelName: 'User', route: '/test-db-users' },
  { modelName: 'File', route: '/test-db-files' }
].forEach(({ modelName, route }) => {
  apiAdmin.get(route, (req, res) => {
    const _model = connection.model(modelName)
    _model.find({}, (err, docs) => {
      if (modelName === 'File') {
        console.log('file id = ', docs[0]['_id'])
        res.writeHead(200, { 'Content-type': 'image/jpg' });
        res.end(docs[0].binData);
      } else {
        res.json({ status: 'ok', err, docs })
      }
    })
  });
});

module.exports = {
  app: apiAdmin,
  route: '/api-admin'
};
