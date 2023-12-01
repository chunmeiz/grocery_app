// models/products.js
const mongoose = require('../db');

const productSchema = new mongoose.Schema({
  
  ProductCode: Number,
  ProductName: String,
  ProductQuantity: Number,
  Product_price: Number,
  
});

const Products = mongoose.model('products', productSchema);

module.exports = Products;