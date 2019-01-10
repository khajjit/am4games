const fs = require('fs');

const GAMES_COUNT = 20

const GAMES_DATA = [ // TODO: add other games
  {
    title: 'Evolve',
    shortDescription: 'Добыча полезных ископаемых на некой планете,' +
      ' похожей на землю, прекращается из-за вмешательства представителей местной фауны.' +
      ' Причем терроризировать буровую установку и рабочих стало что-то очень большое, невиданное ранее.',
    description: '(empty)',
    platforms: 'PC, PS4, Xbox One'
  }, {
    title: 'Dragon Age: Inquisition',
    shortDescription: 'Когда небеса буквально развернутся над смертными, на землю ступит хаос.' +
      ' Тедас и так является землей раздора, где постоянно бушует война, поглощающая все больше жизней.' +
      ' Теперь на ее счету будут и души, поскольку демоны и их приспешники уже...',
    description: '(empty)',
    platforms: 'PC, PS4, Xbox One, PS3, Xbox 360'
  }, {
    title: 'Grand Theft Auto 5',
    shortDescription: 'По сравнению с предыдущими играми серии в Grand Theft Auto 5' +
      ' куда больше всякого рода «настроек» и вариантов кастомизации. Заметно преобразилась боевая система, ' +
      'а горожане теперь могут вызывать полицию. В пятой части мы сможем ходить на йогу, кататься на мотоциклах и играть в гольф.',
    description: '(empty)',
    platforms: 'PC, PS4, Xbox One, PS3, Xbox 360'
  }, {
    title: 'Dying Light',
    shortDescription: 'Dying Light – триллер от первого лица, события которого происходят' +
      ' на просторах огромного и опасного мира. В течение светового дня вам предстоит путешествовать по руинам городов,' +
      ' разыскивать припасы, создавать оружие. Ночью же охотники превращаются в добычу, ' +
      'ведь это времякогда на улицах господствуют жертвы эпидемии.',
    description: '(empty)',
    platforms: 'PC, PS4, Xbox One'
  }
]

const createGamesData = () => Array(GAMES_COUNT).fill().map((empty, i) => {
  let num = i + 1
  while (num > 4) {
    num -= 4
  }
  return GAMES_DATA[num - 1]
})

const createImageArr = () => Array(GAMES_COUNT).fill().map((empty, i) => { // TODO: add 16 images
  let num = i + 1
  while (num > 4) {
    num -= 4
  }
  return { binData: `/images/${num}-game.png` }
})

// TODO: Add users, then add random comments and votes for each game
module.exports = connection => new Promise((resolve, reject) => {
  connection.model('File').insertMany(createImageArr(), (err, res) => {
    err && reject(err)
    const arrIdFiles = res.map(e => e['_id']);
    const data = createGamesData().map((gameData, i) => ({
      ...gameData,
      imagePreviewUrl: arrIdFiles[i]
    }))

    connection.model('Game').insertMany(data, (err, res) => {
      err && reject(err)
      console.log(`Games: new ${res.length} items (with attachments)`)
      console.log(`  Files: ${arrIdFiles.length} new items`)
      resolve()
    })
  })
});
