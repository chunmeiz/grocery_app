// controllers/loginController.js
const Employees = require('../models/employees');
const jwt = require('jsonwebtoken');
const {TOKEN_SECRET} = require('../util.js')
// Check if the user record is in the database
exports.login = async (req, res) => {
    const { Username, Password } = req.body;
    try {
        const employee = await Employees.findOne({ Username: Username, Password: Password });

        if (employee) {
            // Create and return a JWT token
            const token = jwt.sign({ empid: employee.Empid }, TOKEN_SECRET,{expiresIn: '1h' });
            res.status(201).json({ token:token, employee:employee,message: 'Login successfully' });
        } else {
            res.status(401).json({ message: 'Authentication failed' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};


