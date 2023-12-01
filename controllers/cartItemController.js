// controllers/cartItemController.js
const Carts = require('../models/carts');

// Get all cart items
exports.getAllCartsItems = async (req, res) => {
  try {
    const cartsItems = await Carts.find();
    res.json(cartsItems);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Create a new cart item
exports.createCartsItem = async (req, res) => {
  const newCartsItem = new Carts(req.body);
  try {
    const cartsItem = await newCartsItem.save();
    // res.status(201).json(cartsItem);
    res.status(201).json({message:'Add successfully'});
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Update a cart item by ID
exports.updateCartsItem = async (req, res) => {
  try {
    const updatedCartsItem = await Carts.findByIdAndUpdate(req.params.id, req.body, { new: true });
    // res.json(updatedCartsItem);
    res.status(200).json({updatedCartsItem: updatedCartsItem, message: 'Update successfully'} );
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete a grocery item by ID
exports.deleteCartsItem = async (req, res) => {
  try {
    await Carts.findByIdAndDelete(req.params.id);
    // res.status(204).end();
    res.json({message: 'Delete successfully!'});
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
