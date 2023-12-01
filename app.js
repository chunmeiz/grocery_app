// app.js
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const jwt = require('jsonwebtoken');
const{generateToken, verifyAuth} = require('./util.js');

app.use(cors());
app.use(bodyParser.json());

const productItemRoutes = require('./routes/productItemRoutes');
const employeeItemRoutes = require('./routes/employeeItemRoutes');
const orderItemRoutes = require('./routes/orderItemRoutes');
const cartItemRoutes = require('./routes/cartItemRoutes');
const loginRoutes =require('./routes/loginRoutes');
const registerRoutes =require('./routes/registerRoutes');
app.use('/productItems', productItemRoutes);
app.use('/employeeItems', employeeItemRoutes);
app.use('/orderItems', orderItemRoutes);
app.use('/cartItems', cartItemRoutes);
app.use('/login',loginRoutes);
app.use('/register',registerRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
