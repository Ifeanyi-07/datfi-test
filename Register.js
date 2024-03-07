const mongoose = require('mongoose')

const RegisterSchema = new mongoose.Schema({
    title: String,
    name: String,
    phone: String,
    address: String,
    city: String,
    state: String,
    date: String 
    
})

const RegisterModel = mongoose.model("register", RegisterSchema);
module.exports = RegisterModel;