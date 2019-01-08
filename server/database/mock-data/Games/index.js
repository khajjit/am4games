module.exports = connection => new Promise((resolve, reject) => {
  const data = Array(10).fill().map((empty, i) => ({ info: `mock-game-${i}` }))
  connection.model('Game').insertMany(data, err => {
    err && reject(err)
    console.log(`Games: new ${data.length} items`)
    resolve()
  })
});
