// controllers/loginController.js
const Employees = require('../models/employees');
// const jwt = require('jsonwebtoken');
// const {TOKEN_SECRET} = require('../util.js')

// Check if the user record is in the database
exports.register = async (req, res) => {
    
  let nextEmpid;
    try{
     const result=await Employees.findOne({}).sort({ Empid: -1 }).limit(1);
     // Determine the next Empid
     
     const nextEmpid = result!== null ? result.Empid + 1 : 1;

     
    const newEmployeeItem = new Employees({
      Empid: nextEmpid,
      Username: req.body.Username,
      Password: req.body.Password,
      MemberType: req.body.MemberType
    });
    // try {
      const employeeItem = await newEmployeeItem.save();
      res.status(201).json({employee:employeeItem, message: 'User registered successfully'});
    } catch (err) {
      res.status(400).json(nextEmpid);
      res.status(400).json({ error: err.message });
    }
  
  };
