module.exports = connection => new Promise((resolve, reject) => {
  const data = Array(10).fill().map((empty, i) => ({ info: `mock-trailer-${i}` }))
  connection.model('Trailer').insertMany(data, (err, res) => !err ?
    resolve(console.log(`Data for model = \`Trailer\` has been added!`)) :
    reject(err))
});
