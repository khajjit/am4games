module.exports = connection => new Promise((resolve) => {
  let arr = []
  for (let i = 1; i < 11; i++) {
    arr.push({ info: `mock-trailer-${i}` })
  }
  connection.model('Trailer').insertMany(arr, (err, res) => {
    if (err) throw err
    console.log(`Data for model = \`Trailer\` has been added!`)
    resolve()
  })
});
