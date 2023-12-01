// db.js
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/grocery-store', {
  // mongoose.connect('mongodb+srv://zhuchunmei:test@cluster0.9tnvxde.mongodb.net/grocery_store2', {
  
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

module.exports = mongoose;