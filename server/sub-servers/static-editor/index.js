const fs = require('fs');
const express = require('express')
const { checkAccess } = require('../../utils/auth')

const staticEditor = express()
staticEditor.all('*', (req, res, next) => {
  checkAccess('editor', req) ? next() : res.redirect('/')
})

// staticEditor.use('/', express.static(path.join(__dirname + '/static')))
staticEditor.get('*', (req, res) => { /* TODO: Optimize? */
  const url = req.baseUrl.replace(/^\/editor/, '')
  const filePath = __dirname + '/static' + url
  fs.stat(filePath, (err, stat) => (err || url === '') ?
    res.sendFile(__dirname + '/static/index.html') :
    res.sendFile(filePath)
  )
})

module.exports = {
  app: staticEditor,
  route: ['/editor*']
};
