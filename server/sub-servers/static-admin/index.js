const fs = require('fs');
const express = require('express')
const { checkAccess } = require('../../helpers/auth')

const staticAdmin = express()
staticAdmin.all('*', (req, res, next) => {
  checkAccess('admin', req) ? next() : res.redirect('/')
})

// staticAdmin.use('/', express.static(path.join(__dirname + '/static')))
staticAdmin.get('*', (req, res) => { /* TODO: Optimize? */
  const url = req.baseUrl.replace(/^\/admin/, '')
  const filePath = __dirname + '/static' + url
  fs.stat(filePath, (err, stat) => (err || url === '') ?
    res.sendFile(__dirname + '/static/index.html') :
    res.sendFile(filePath)
  )
})

module.exports = {
  app: staticAdmin,
  route: ['/admin*']
};
