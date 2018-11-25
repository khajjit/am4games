const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  binData: Buffer
});

const post = schema.post('save', doc => console.log('New file has been saved!'));

const pre = schema.pre('validate', (next) => next()); /* server validation here? */

module.exports = mongoose.model('File', schema, 'files');
