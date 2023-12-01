// routes/registerRoutes.js
const express = require('express');
const router = express.Router();
const registerController = require('../controllers/registerController');

// Routes for register

router.post('/',registerController.register);

  
module.exports = router;
