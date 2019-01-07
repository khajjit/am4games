const { connection } = require('./config')

const tasks = [
  require('./mock-data/Users'),
  require('./mock-data/News'),
  require('./mock-data/Articles'),
  require('./mock-data/Trailers'),
  require('./mock-data/Games')
]

const setDataSequentially = (tasks, connection) => tasks.reduce((promise, task) =>
  promise.then(() => task(connection)), Promise.resolve())

connection.dropDatabase()
  .then(() => setDataSequentially(tasks, connection))
  .then(() => console.log('Database was successfully filled!'))
  .catch(err => console.error(`Some error happened!\n ${new Error(err)}`))
  .finally(() => connection.close())
