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
  for (let i = 1; i <= 5; i++) {
    arr.push({ binData: fs.readFileSync(__dirname + `/test-data/news-preview-${i}.jpg`) })
  }
  connection.model('File').insertMany(arr, (err, res) => {
    if (err) throw err
    const arrIdFiles = res.map(e => e['_id']);

    let arr = []
    for (let i = 1; i <= arrIdFiles.length; i++) {
      arr.push({
        previewData: {
          imageId: arrIdFiles[i - 1],
          textBoxColor: "#29abcd",
          titleColor: "#000000",
          descColor: "ffffff",
          headerColor: "#30b5d8",
          title: "Ненавязчивый анализ Mirror’s Edge",
          desc: "Ещё совсем недавно осень считалась главным поставщиком крупных игровых релизов. Полки магазинов ломились от новинок, а от покупателей не было отбоя. Доходило до того, что к концу сезона кошельки походили на выпотрошенные туши."
        },
        info: {
          createdAt: new Date(),
          text: `mock-news-${i}`
        }
      })
    }
    connection.model('News').insertMany(arr, (err, res) => {
      if (err) throw err
      console.log(`Data for model = \`News\` has been added!`)
      resolve()
    });
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


connection.dropDatabase().then(() => Promise.all([
  // TODO: move functions to ./test-data
  createMockUsers,
  createMockNews,
  createMockArticles,
  createMockTrailers,
  createMockGames
]).then(res => {
  connection.close()
  console.log('Database was successfully filled!')
}).catch(err => {
  connection.close()
  console.log('Some error happened')
  console.log(err)
}));
