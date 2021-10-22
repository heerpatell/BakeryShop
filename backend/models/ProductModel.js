const mongoose = require("mongoose")
const Register = require('./signupModel')

const productSchema = new mongoose.Schema({
    userId:{
        type: mongoose.Schema.ObjectId,
        ref:Register,
        required:true,
        index:true
    },
    cname:{
        type:String,
        required:true
    },
    iname:{
        type:String,
        required:true
    },
    iphoto:{
        type:String,
        required:true
    },
    quantity:{
        type:Number,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    avail:{
        type:String,
        required:true
    }
})

const Product = mongoose.model("Product",productSchema)

module.exports = Product