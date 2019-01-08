module.exports = connection => new Promise((resolve, reject) => {
  const data = Array(10).fill().map((empty, i) => ({ info: `mock-article-${i}` }))
  connection.model('Article').insertMany(data, err => {
    err && reject(err)
    console.log(`Articles: new ${data.length} items`)
    resolve()
  })
});
