const express = require('express');
const { checkAccess } = require('../../helpers/auth')

const apiEditor = express();
apiEditor.all('*', (req, res, next) => {
  checkAccess('editor', req) ? next() : res.redirect('/')
})

apiEditor.get('/test', (req, res) => res.json({ msg: 'Hello! It\'s server route = /api-editor' }));

module.exports = {
  app: apiEditor,
  route: '/api-editor'
};
