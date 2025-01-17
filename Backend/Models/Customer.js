const mongoose = require('mongoose');

const CustomerSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
})

const CustomerModel = mongoose.model('Customer', CustomerSchema)
module.exports = CustomerModel