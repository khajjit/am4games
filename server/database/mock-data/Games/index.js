module.exports = connection => new Promise((resolve, reject) => {
  const data = Array(10).fill().map((empty, i) => ({ info: `mock-game-${i}` }))
  connection.model('Game').insertMany(data, (err, res) => !err ?
    resolve(console.log(`Data for model = \`Game\` has been added!`)) :
    reject(err))
});
