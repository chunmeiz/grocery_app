// controllers/orderItemController.js
const Orders = require('../models/orders');

// Get all Order items
exports.getAllOrderItems = async (req, res) => {
  try {
    const orderItems = await Orders.find();
    res.json(orderItems);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Create a new Order item
exports.createOrderItem = async (req, res) => {
  const newOrderItem = new Orders(req.body);
  try {
    const orderItem = await newOrderItem.save();
    // res.status(201).json(orderItem);
    res.status(201).json({message:'Add successfully'});
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Update a Order item by ID
exports.updateOrderItem = async (req, res) => {
  try {
    const updatedOrderItem = await Orders.findByIdAndUpdate(req.params.id, req.body, { new: true });
    // res.json(updatedOrderItem);
    res.status(200).json({updatedOrderItem: updatedOrderItem, message: 'Update successfully'} );
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete a Order item by ID
exports.deleteOrderItem = async (req, res) => {
  try {
    await Orders.findByIdAndDelete(req.params.id);
    // res.status(204).end();
    res.json({message: 'Delete successfully!'});
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
