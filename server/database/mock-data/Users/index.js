module.exports = connection => new Promise((resolve, reject) => {
  const data = Array(10).fill().map((empty, i) => ({ info: `mock-user-${i}` }))
  connection.model('User').insertMany(data, (err, res) => !err ?
    resolve(console.log(`Data for model = \`User\` has been added!`)) :
    reject(err))
});
