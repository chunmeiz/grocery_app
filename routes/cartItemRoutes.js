// routes/cartItemRoutes.js
const express = require('express');
const router = express.Router();
const cartItemController = require('../controllers/cartItemController');
const {verifyAuth} = require('../util.js')
// Routes for cart Items
router.get('/', cartItemController.getAllCartsItems);
router.post('/', verifyAuth, cartItemController.createCartsItem);
router.put('/:id', verifyAuth, cartItemController.updateCartsItem);
router.delete('/:id',verifyAuth, cartItemController.deleteCartsItem);

module.exports = router;