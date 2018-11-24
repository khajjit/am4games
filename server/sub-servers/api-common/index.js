const express = require('express');
const { connection } = require('../../database/config')
const apiCommon = express();

const modelFile = connection.model('File')

apiCommon.get('/test', (req, res) => res.json({ msg: 'Hello! It\'s server route = /api-common' }));

apiCommon.get('/image/:id', (req, res) => { // find id manually: 5bf9960ef67d650033e1b0c4
  modelFile.findById(req.params.id, (err, content) => {
    if (err) {
      console.log('!err = ', err)
    } else {
      res.writeHead(200, { 'Content-type': 'image/jpg' });
      res.end(content.binData);
    }
  })
});

module.exports = {
  app: apiCommon,
  route: '/api-common'
};
