const express = require('express');
const { checkAccess } = require('../../helpers/auth')

const apiUser = express();
apiUser.all('*', (req, res, next) => {
  checkAccess('user', req) ? next() : res.redirect('/')
})

apiUser.get('/test', (req, res) => res.json({ msg: 'Hello! It\'s server route = /api-user' }));

module.exports = {
  app: apiUser,
  route: '/api-user'
};
