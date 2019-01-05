module.exports = connection => new Promise((resolve) => {
  let arr = []
  for (let i = 1; i < 11; i++) {
    arr.push({ info: `mock-user-${i}` })
  }
  connection.model('User').insertMany(arr, (err, res) => {
    if (err) throw err
    console.log(`Data for model = \`User\` has been added!`)
    resolve()
  })
});
