const express = require('express');

const staticUser = express();
staticUser.use('/user/', express.static(__dirname + '/static'));
staticUser.get('*', (req, res) => res.sendFile(__dirname + '/static/index.html'))

module.exports = {
  app: staticUser,
  route: ['/', '/user/']
};
