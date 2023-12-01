// routes/employeeItemRoutes.js
const express = require('express');
const router = express.Router();
const employeeItemController = require('../controllers/employeeItemController');
const {verifyAuth} = require('../util.js')
// Routes for Employee Items
router.get('/', employeeItemController.getAllEmployeeItems);
router.post('/',verifyAuth, employeeItemController.createEmployeeItem);
router.put('/:id',verifyAuth, employeeItemController.updateEmployeeItem);
router.delete('/:id',verifyAuth, employeeItemController.deleteEmployeeItem);

module.exports = router;