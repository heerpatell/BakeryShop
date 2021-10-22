const mongoose = require('mongoose')
const Register = require('./signupModel')
const Product = require('./ProductModel')

const cartSchema = new mongoose.Schema({
    userId :{
        type:mongoose.Schema.Types.ObjectId,
        ref:Register,
        required:true
    },
    cartItems:[
        {
            productId:{
                type:mongoose.Schema.Types.ObjectId,
                ref:Product,
                required:true        
            },
            iname:{
                type:String,
                required:true
            },
            quantity:{
                type:Number,
                // default:1
            },
            iphoto:{
                type:String,
            },
            price:{
                type:Number,
                required:true
            }
        }
    ]
})

module.exports = mongoose.model("Cart",cartSchema)