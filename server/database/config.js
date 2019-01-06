/* The complete database schema is stored here: https://www.lucidchart.com */
require('./models/_entry');
const mongoose = require('mongoose');

const names = {
  prod: 'am4games-prod',
  dev: 'am4games-dev'
};

const uri = process.env['MONGODB_URI'] || `mongodb://localhost/${names.dev}`;
const connection = mongoose.createConnection(uri, { useNewUrlParser: true, autoReconnect: true, reconnectInterval: 4000 });

connection.on('open', () => console.log('MongoDB connection opened!'));
connection.on('connected', () => console.log('MongoDB connected!'));
connection.on('reconnected', () => console.log('MongoDB reconnected!'));
connection.on('disconnected', () => console.log('MongoDB disconnected!'));
connection.on('error', error => {
  console.log('Error in MongoDB connection: ' + error);
  mongoose.disconnect();
});

module.exports = {
  connection,
  names
};
