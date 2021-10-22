const mongoose = require("mongoose")
const Register = require('./signupModel')

const categorySchema =new mongoose.Schema({
    userId:{
        type: mongoose.Schema.ObjectId,
        ref:Register,
        required:true,
        index:true
    },
    categoryname:{
        type:String,
        required:true
    }
})

const Category = mongoose.model("Category",categorySchema)

module.exports = Category