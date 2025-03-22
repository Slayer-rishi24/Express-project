const express = require('express');
const connectMongo = require('./db.js');
const empRouter = require('./router/empRoute.js');
const expressLayouts = require('express-ejs-layouts');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// EJS setup
app.use(expressLayouts);
app.set('layout', './layout');
app.set('view engine', 'ejs');
app.set('views', './views');

// MongoDB Connection
connectMongo();

// Routes
app.use('/', empRouter);

app.listen(3000, () => {
    console.log("Server running ");
});
