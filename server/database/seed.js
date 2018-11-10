const mongoose = require('mongoose');
const models = require('./models/_entry');
const { connection } = require('./config');

connection.dropDatabase().then(() => {
  [
    { modelName: 'User', create: createMockUsers },
    { modelName: 'News', create: createMockNews },
    { modelName: 'Article', create: createMockArticles },
    { modelName: 'Trailer', create: createMockTrailers },
    { modelName: 'Game', create: createMockGames }
  ].map(({ modelName, create }) => {
    connection.model(modelName).insertMany(create(), (err, res) => {
      if (err) throw err
      console.log(`Data for model = ${modelName} has been added!`)
    })
  });
})

setTimeout(() => { // TODO: Remove that
  connection.close()
}, 4000)

function createMockUsers(arr = []) {
  for (let i = 1; i < 11; i++) {
    arr.push({ info: `mock-user-${i}` })
  }
  return arr
}

function createMockNews(arr = []) {
  for (let i = 1; i < 11; i++) {
    arr.push({ info: `mock-news-${i}` })
  }
  return arr
}

function createMockArticles(arr = []) {
  for (let i = 1; i < 11; i++) {
    arr.push({ info: `mock-article-${i}` })
  }
  return arr
}

function createMockTrailers(arr = []) {
  for (let i = 1; i < 11; i++) {
    arr.push({ info: `mock-trailer-${i}` })
  }
  return arr
}

function createMockGames(arr = []) {
  for (let i = 1; i < 11; i++) {
    arr.push({ info: `mock-game-${i}` })
  }
  return arr
}
