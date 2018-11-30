const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  previewData: {
    imageId: String,
    textBoxColor: String,
    titleColor: String,
    descColor: String,
    title: String,
    desc: String
  },
  info: {
    createdAt: Date,
    text: String
  }
});

schema.post('save', doc => console.log('New news has been saved!'));

schema.pre('validate', (next) => next()); /* server validation here? */

module.exports = mongoose.model('News', schema, 'news');
