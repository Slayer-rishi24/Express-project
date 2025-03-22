const empModel = require('../model/empMode.js');
const bcrypt = require('bcryptjs');


const registerPage = (req, res) => res.render('register', { title: 'Register' });


const loginPage = (req, res) => res.render('login', { title: 'Login' });

const dashboard = (req, res) => {
    if (!req.session.user) return res.redirect('/login');
    res.render('dashboard', { title: 'Dashboard', user: req.session.user });
};


const regUser = async (req, res) => {
    const { username, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    try {
        await empModel.create({ username, email, password: hashedPassword });
        res.redirect('/login');
    } catch (error) {
        res.send('Error: ' + error.message);
    }
};


const loginUser = async (req, res) => {
    const { email, password } = req.body;
    const user = await empModel.findOne({ email });
    if (user && await bcrypt.compare(password, user.password)) {
        req.session.user = user;
        res.redirect('/dashboard');
    } else {
        res.send('Invalid Credentials');
    }
};


const logout = (req, res) => {
    req.session.destroy(err => {
        if (err) return res.send('Logout Failed');
        res.redirect('/login');
    });
};

module.exports = { registerPage, loginPage, regUser, loginUser, dashboard, logout };
