// models/employees.js
const mongoose = require('../db');

const employeeSchema = new mongoose.Schema({
  Empid: Number,
  Username: String,
  Password: String,
  // MemberType: String,
  
});

const Employees = mongoose.model('employees', employeeSchema);

module.exports = Employees;