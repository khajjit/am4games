const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  info: String
});

schema.post('save', doc => console.log('New game has been saved!'));

schema.pre('validate', (next) => next()); /* server validation here? */

module.exports = mongoose.model('Game', schema, 'games');
