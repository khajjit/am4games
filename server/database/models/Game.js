const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  imagePreviewUrl: String,
  title: String,
  shortDescription: String,
  description: String,
  platforms: String
});

schema.post('save', doc => console.log('New game has been saved!'));

schema.pre('validate', (next) => next()); /* server validation here? */

module.exports = mongoose.model('Game', schema, 'games');
