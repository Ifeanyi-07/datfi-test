const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const RegisterModel = require('./models/Register')

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect('mongodb+srv://Abah:Ab%401234@ytcluster.w3ua2mj.mongodb.net/test');

app.post('/register', (req, res) => {
    const {title, name, phone, address, city, state, date} = req.body;
    RegisterModel.findOne({phone: phone})
    .then(user => {
        if(user) {
            res.json("Already have an account")
        }else {
            RegisterModel.create({title: title, name: name, phone: phone, address: address, city: city, state: state, date: date})
            .then(result => res.json("Already created"))
            .catch(err => res.json(err))
        }
    }).catch(err => res.json(err))

})

app.listen(3001, () => {
    console.log("Server is Running")
})