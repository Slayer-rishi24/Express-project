const express = require('express');
const router = express.Router();
const {
    getAllEmployees,
    renderCreateForm,
    createEmployee,
    renderEditForm,
    updateEmployee,
    deleteEmployee
} = require('../controllers/empController');

// Routes
router.get('/', getAllEmployees);
router.get('/create', renderCreateForm);
router.post('/create', createEmployee);
router.get('/edit/:id', renderEditForm);
router.post('/edit/:id', updateEmployee);
router.get('/delete/:id', deleteEmployee);

module.exports = router;
