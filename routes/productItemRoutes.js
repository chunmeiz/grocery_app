// routes/groceryItemRoutes.js
const express = require('express');
const router = express.Router();
const productItemController = require('../controllers/productItemController');
const {verifyAuth} = require('../util.js')

// Routes for Grocery Items
router.get('/', productItemController.getAllProductItems);
router.post('/',verifyAuth, productItemController.createProductItem);
router.put('/:id',verifyAuth, productItemController.updateProductItem);
router.delete('/:id', verifyAuth,productItemController.deleteProductItem);

module.exports = router;