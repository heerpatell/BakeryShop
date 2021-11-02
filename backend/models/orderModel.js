const mongoose = require('mongoose')
const Register = require('./signupModel')
const Product = require('./ProductModel')

const orderSchema = new mongoose.Schema({
    orderDate:{
        type:Date,
        required:true
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:Register,
        required:true
    },
    ostatus:{
        type:String,
        required:true
    },
    totalPrice:{
        type:Number,
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
            },
            iphoto:{
                type:String,
            },
            price:{
                type:Number,
            }
        }
    ]

})

module.exports = mongoose.model("Order",orderSchema)