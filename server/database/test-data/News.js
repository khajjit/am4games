const fs = require('fs');

module.exports = (connection) => new Promise((resolve) => {
  let arr = []
  for (let i = 1; i <= 5; i++) {
    arr.push({ binData: fs.readFileSync(__dirname + `/images/news-preview-${i}.jpg`) })
  }
  connection.model('File').insertMany(arr, (err, res) => {
    if (err) throw err
    const arrIdFiles = res.map(e => e['_id']);

    let arr = [{
      previewData: {
        imageId: arrIdFiles[0],
        textBoxColor: "#1B77A6",
        titleColor: "#212121",
        descColor: "#FFFFFF",
        title: "Стоит ли жить, ради одиночества?",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      },
      info: {
        createdAt: new Date(),
        text: `mock-news-${1}`
      }
    }, {
      previewData: {
        imageId: arrIdFiles[1],
        textBoxColor: "#AA142D",
        titleColor: "#FFFFFF",
        descColor: "#FFFFFF",
        title: "Если сомневаешься, то жми на полную!",
        desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
      },
      info: {
        createdAt: new Date(),
        text: `mock-news-${1}`
      }
    }, {
      previewData: {
        imageId: arrIdFiles[2],
        textBoxColor: "#33475B",
        titleColor: "#BED0FF",
        descColor: "#C3BFD2",
        title: "Война никогда не меняется",
        desc: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness."
      },
      info: {
        createdAt: new Date(),
        text: `mock-news-${1}`
      }
    }, {
      previewData: {
        imageId: arrIdFiles[3],
        textBoxColor: "#E0FFFF",
        titleColor: "#000000",
        descColor: "#808080",
        title: "Хорошая идея в руках не тех разработчиков",
        desc: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur?"
      },
      info: {
        createdAt: new Date(),
        text: `mock-news-${1}`
      }
    }, {
      previewData: {
        imageId: arrIdFiles[4],
        textBoxColor: "#F57919",
        titleColor: "#000000",
        descColor: "#FFFFFF",
        title: "Игра - испытание. Классика и современность.",
        desc: "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae."
      },
      info: {
        createdAt: new Date(),
        text: `mock-news-${1}`
      }
    }];
    connection.model('News').insertMany(arr, (err, res) => {
      if (err) throw err
      console.log(`Data for model = \`News\` has been added!`)
      resolve()
    });
  })
});
