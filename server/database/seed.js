const fs = require('fs');
const mongoose = require('mongoose');
const models = require('./models/_entry');
const { connection } = require('./config');

const createMockNews = require('./mock-data/News');
const createMockUsers = require('./mock-data/Users');
const createMockArticles = require('./mock-data/Articles');
const createMockTrailers = require('./mock-data/Trailers');
const createMockGames = require('./mock-data/Games');

connection.dropDatabase().then(() => Promise.all([
  createMockUsers(connection),
  createMockNews(connection),
  createMockArticles(connection),
  createMockTrailers(connection),
  createMockGames(connection)
]).then(res => {
  connection.close()
  console.log('Database was successfully filled!')
}).catch(err => {
  connection.close()
  console.log('Some error happened')
  console.log(err)
}));
