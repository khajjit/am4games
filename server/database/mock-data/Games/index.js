module.exports = connection => new Promise((resolve) => {
  let arr = []
  for (let i = 1; i < 11; i++) {
    arr.push({ info: `mock-game-${i}` })
  }
  connection.model('Game').insertMany(arr, (err, res) => {
    if (err) throw err
    console.log(`Data for model = \`Game\` has been added!`)
    resolve()
  })
});
