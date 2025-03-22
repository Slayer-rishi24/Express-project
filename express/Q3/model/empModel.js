const mongoose = require('mongoose');

const empSchema = new mongoose.Schema({
    name: String,
    email: { type: String, unique: true },
    phone: String
});

module.exports = mongoose.model('Employee', empSchema);
