const express = require('express');
const { connection } = require('../../database/config')
const apiCommon = express();

const modelFile = connection.model('File')

apiCommon.get('/ping', (req, res) => res.json({ status: true, msg: 'route: /api-common/ping' }));

apiCommon.get('/image/:id', (req, res) => {
  modelFile.findById(req.params.id)
    .then(doc => res.set('Content-type', 'image/jpg').send(doc.binData))
    .catch(err => res.json({ status: false, err }))
});

module.exports = {
  app: apiCommon,
  route: '/api-common'
};
