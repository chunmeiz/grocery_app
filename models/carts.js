// models/carts.js
const mongoose = require('../db');

const cartSchema = new mongoose.Schema({
  
  customerName: String,
  products: Array,
  createdAt: String
  
});

const Carts = mongoose.model('carts', cartSchema);

module.exports = Carts;