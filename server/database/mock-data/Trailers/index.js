module.exports = connection => new Promise((resolve, reject) => {
  const data = Array(10).fill().map((empty, i) => ({ info: `mock-trailer-${i}` }))
  connection.model('Trailer').insertMany(data, err => {
    err && reject(err)
    console.log(`Trailers: new ${data.length} items`)
    resolve()
  })
});
