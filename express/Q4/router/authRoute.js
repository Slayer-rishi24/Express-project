const express = require('express');
const router = express.Router();
const { registerPage, loginPage, regUser, loginUser, dashboard, logout } = require('../controllers/authController');

router.get('/register', registerPage);
router.post('/register', regUser);

router.get('/login', loginPage);
router.post('/login', loginUser);

router.get('/dashboard', dashboard);
router.get('/logout', logout);

module.exports = router;
