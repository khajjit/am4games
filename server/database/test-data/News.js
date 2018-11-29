const fs = require('fs');

module.exports = (connection) => new Promise((resolve) => {
  let arr = []
  for (let i = 1; i <= 5; i++) {
    arr.push({ binData: fs.readFileSync(__dirname + `/images/news-preview-${i}.jpg`) })
  }
  connection.model('File').insertMany(arr, (err, res) => {
    if (err) throw err
    const arrIdFiles = res.map(e => e['_id']);

    let arr = []
    for (let i = 1; i <= arrIdFiles.length; i++) {
      arr.push({
        previewData: {
          imageId: arrIdFiles[i - 1],
          textBoxColor: "#1B77A6",
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
