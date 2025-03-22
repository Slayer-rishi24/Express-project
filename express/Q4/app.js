const express = require('express');
const session = require('express-session');
const MongoDbStore = require("connect-mongodb-session")(session);
const connectMongo = require('./db.js');
const router = require('./router/authRoute.js');
const expressLayouts = require('express-ejs-layouts');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use(expressLayouts);
app.set('layout', './layout');
app.set('view engine', 'ejs');
app.set('views', './views');


connectMongo();


const store = new MongoDbStore({
    uri: "mongodb://localhost:27017/auth",
    collection: 'sessions'
});

app.use(session({
    secret: 'your_secret_key',
    store: store,
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false }
}));


app.use('/', router);

app.listen(2000, () => {
    console.log("Server running on http://localhost:2000");
});
