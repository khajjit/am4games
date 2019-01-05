module.exports = connection => new Promise((resolve) => {
  let arr = []
  for (let i = 1; i < 11; i++) {
    arr.push({ info: `mock-article-${i}` })
  }
  connection.model('Article').insertMany(arr, (err, res) => {
    if (err) throw err
    console.log(`Data for model = \`Article\` has been added!`)
    resolve()
  })
});
