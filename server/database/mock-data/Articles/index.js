module.exports = connection => new Promise((resolve, reject) => {
  const data = Array(10).fill().map((empty, i) => ({ info: `mock-article-${i}` }))
  connection.model('Article').insertMany(data, (err, res) => !err ?
    resolve(console.log(`Data for model = \`Article\` has been added!`)) :
    reject(err))
});
