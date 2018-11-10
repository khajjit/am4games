const express = require('express');
const apiCommon = express();

apiCommon.get('/test', (req, res) => res.json({ msg: 'Hello! It\'s server route = /api-common' }));

module.exports = {
  app: apiCommon,
  route: '/api-common'
};
