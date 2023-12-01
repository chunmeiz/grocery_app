// models/orders.js
const mongoose = require('../db');

const orderSchema = new mongoose.Schema({
  OrderNo: Number,
  OrderDate: String,
  CustNo: Number,
  ProductCode: Number,
  ProductName: String,
  ProductQuantity: Number,
  ProductPrice: Number,
  Total:Number,
  ModeOfPayment:String
  
});

const Orders = mongoose.model('orders', orderSchema);

module.exports = Orders;