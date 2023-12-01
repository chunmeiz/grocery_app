// controllers/productItemController.js
const Products = require('../models/products');

// Get all Product items
exports.getAllProductItems = async (req, res) => {
  try {
    const productItems = await Products.find();
    res.json(productItems);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Create a new Product item
exports.createProductItem = async (req, res) => {
  const newProductItem = new Products(req.body);
  try {
    const productItem = await newProductItem.save();
    res.status(201).json({message:'Add successfully'});
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Update a Product item by ID
exports.updateProductItem = async (req, res) => {
  try {
    const updatedProductItem = await Products.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json({updatedProductItem: updatedProductItem, message: 'Update successfully'} );
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete a Product item by ID
exports.deleteProductItem = async (req, res) => {
  try {
    await Products.findByIdAndDelete(req.params.id);
    // res.status(204).end();
    res.json({message: 'Delete successfully!'});
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
