const express = require('express');
const multer = require('multer');

// require('../../database/models/File')

const { connection } = require('../../database/config')
const { checkAccess } = require('../../utils/auth')

const apiEditor = express();
const upload = multer();

/* hide authorization for development mode */
if (process.env['NODE_ENV'] !== 'development') {
  apiEditor.all('*', (req, res, next) => {
    checkAccess('editor', req) ? next() : res.redirect('/')
  })
}

// const modelFile = connection.model('File')

apiEditor.get('/test', (req, res) => res.json({ msg: 'Hello! It\'s server route = /api-editor' }));

apiEditor.post('/images', upload.array('images'), (req, res) => {
  // req.files.forEach(file => modelFile.create(file));
  res.json({ msg: '/images - post request', file: req.files[0] })
})

module.exports = {
  app: apiEditor,
  route: '/api-editor'
};
