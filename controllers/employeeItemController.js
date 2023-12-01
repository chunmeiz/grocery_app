// controllers/employeeItemController.js
const Employees = require('../models/employees');

// Get all Employee items
exports.getAllEmployeeItems = async (req, res) => {
  try {
    const employeeItems = await Employees.find();
    res.json(employeeItems);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Create a new Employee item
exports.createEmployeeItem = async (req, res) => {
  const newEmployeeItem = new Employees(req.body);
  try {
    const employeeItem = await newEmployeeItem.save();
    // res.status(201).json(employeeItem);
    res.status(201).json({message:'Add successfully'});
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Update a Employee item by ID
exports.updateEmployeeItem = async (req, res) => {
  try {
    const updatedEmployeeItem = await Employees.findByIdAndUpdate(req.params.id, req.body, { new: true });
    // res.json(updatedEmployeeItem);
    res.status(200).json({updatedEmployeeItem: updatedEmployeeItem, message: 'Update successfully'} );
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete a Employee item by ID
exports.deleteEmployeeItem = async (req, res) => {
  try {
    await Employees.findByIdAndDelete(req.params.id);
    // res.status(204).end();
    res.json({message: 'Delete successfully!'});
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
