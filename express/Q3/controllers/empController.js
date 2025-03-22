const Employee = require('../model/empModel');

// View All Employees
const getAllEmployees = async (req, res) => {
    const employees = await Employee.find();
    res.render('index', { title: 'Employee List', employees });
};

// Render Create Form
const renderCreateForm = (req, res) => res.render('create', { title: 'Add Employee' });

// Create Employee
const createEmployee = async (req, res) => {
    const { name, email, phone } = req.body;
    await Employee.create({ name, email, phone });
    res.redirect('/');
};

// Render Edit Form
const renderEditForm = async (req, res) => {
    const employee = await Employee.findById(req.params.id);
    res.render('edit', { title: 'Edit Employee', employee });
};

// Update Employee
const updateEmployee = async (req, res) => {
    const { name, email, phone } = req.body;
    await Employee.findByIdAndUpdate(req.params.id, { name, email, phone });
    res.redirect('/');
};

// Delete Employee
const deleteEmployee = async (req, res) => {
    await Employee.findByIdAndDelete(req.params.id);
    res.redirect('/');
};

module.exports = {
    getAllEmployees,
    renderCreateForm,
    createEmployee,
    renderEditForm,
    updateEmployee,
    deleteEmployee
};
