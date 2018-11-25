const express = require('express');
const { connection } = require('../../database/config');

const apiCommon = express();
const modelFile = connection.model('File');
const modelNews = connection.model('News');

apiCommon.get('/ping', (req, res) => res.json({ status: true, msg: 'route: /api-common/ping' }));

apiCommon.get('/news/preview', (req, res) => { /* TODO: Most popular or the newest */
  modelNews.find({}, (err, docs) => err ?      /* Currently send only first 6 news (newest) */
    res.json({ status: false, err }) :
    res.json({ status: true, result: docs.slice(0, 5) }));
});

apiCommon.get('/image/:id', (req, res) => {
  modelFile.findById(req.params.id)
    .then(doc => res.set('Content-type', 'image/jpg').send(doc.binData))
    .catch(err => res.json({ status: false, err }))
});

module.exports = {
  app: apiCommon,
  route: '/api-common'
};
