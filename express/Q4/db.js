const mongoose = require('mongoose');

const connectMongo = () => {
    mongoose.connect('mongodb://localhost:27017/auth', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => console.log('MongoDB Connected'))
      .catch(err => console.log('Mongo Error:', err));
};

module.exports = connectMongo;
