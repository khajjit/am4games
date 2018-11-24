const fs = require('fs');
const mongoose = require('mongoose');
const models = require('./models/_entry');
const { connection } = require('./config');

const createMockUsers = new Promise((resolve) => {
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

const createMockNews = new Promise((resolve) => {
  let arr = []
  for (let i = 1; i < 11; i++) {
    arr.push({ info: `mock-news-${i}` })
  }
  connection.model('News').insertMany(arr, (err, res) => {
    if (err) throw err
    console.log(`Data for model = \`News\` has been added!`)
    resolve()
  })
});

const createMockArticles = new Promise((resolve) => {
  let arr = []
  for (let i = 1; i < 11; i++) {
    arr.push({ info: `mock-article-${i}` })
  }
  connection.model('Article').insertMany(arr, (err, res) => {
    if (err) throw err
    console.log(`Data for model = \`Article\` has been added!`)
    resolve()
  })
});

const createMockTrailers = new Promise((resolve) => {
  let arr = []
  for (let i = 1; i < 11; i++) {
    arr.push({ info: `mock-article-${i}` })
  }
  connection.model('Trailer').insertMany(arr, (err, res) => {
    if (err) throw err
    console.log(`Data for model = \`Trailer\` has been added!`)
    resolve()
  })
});

const createMockGames = new Promise((resolve) => {
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

const createMockFiles = new Promise((resolve) => { // TODO: mix with News
  let arr = []
  for (let i = 1; i <= 6; i++) {
    arr.push({ binData: fs.readFileSync(__dirname + '/test-image.png') })
  }
  connection.model('File').insertMany(arr, (err, res) => {
    if (err) throw err
    console.log(`Data for model = \`File\` has been added!`)
    resolve()
  })
});


connection.dropDatabase().then(() => Promise.all([
  createMockUsers,
  createMockNews,
  createMockArticles,
  createMockTrailers,
  createMockGames,
  createMockFiles
]).then(res => {
  connection.close()
  console.log('Database was successfully filled!')
}).catch(err => {
  connection.close()
  console.log('Some error happened')
  console.log(err)
}));
