module.exports = connection => new Promise((resolve, reject) => {
  const data = Array(10).fill().map((empty, i) => ({ info: `mock-user-${i}` }))
  connection.model('User').insertMany(data, err => {
    err && reject(err)
    console.log(`Users: new ${data.length} items`)
    resolve()
  })
});
