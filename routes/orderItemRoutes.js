// routes/orderItemRoutes.js
const express = require('express');
const router = express.Router();
const orderItemController = require('../controllers/orderItemController');
const {verifyAuth} = require('../util.js')
// Routes for order Items
router.get('/', orderItemController.getAllOrderItems);
router.post('/', verifyAuth, orderItemController.createOrderItem);
router.put('/:id',verifyAuth, orderItemController.updateOrderItem);
router.delete('/:id',verifyAuth, orderItemController.deleteOrderItem);

module.exports = router;