const express = require('express');
const multer = require('multer');

const { connection } = require('../../database/config');
const { checkAccess } = require('../../utils/auth');

require('../../database/models/File');
const modelFile = connection.model('File');

const apiEditor = express();
const upload = multer();

/* hide authorization for development mode */
if (process.env['NODE_ENV'] !== 'development') {
  apiEditor.all('*', (req, res, next) => {
    checkAccess('editor', req) ? next() : res.redirect('/')
  })
}

apiEditor.get('/ping', (req, res) => res.json({ status: true, msg: 'route: /api-editor/ping' }));

apiEditor.post('/image/upload', upload.single('image'), (req, res) => {
  modelFile.create({ binData: req.file.buffer })
    .then(doc => res.json({ status: true, id: doc['_id'] }))
    .catch(err => res.json({ status: false, err }))
})

module.exports = {
  app: apiEditor,
  route: '/api-editor'
};
