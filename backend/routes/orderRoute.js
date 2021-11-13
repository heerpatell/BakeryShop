require("dotenv").config();
const express = require("express")
const router= express.Router()
const jwt = require("jsonwebtoken");
const Cart = require('../models/cartModel')
const Order = require('../models/orderModel')
const Register = require('../models/signupModel')

router.route('/postorder').post(async(req,res)=>{
    const token = req.cookies.jwt

    if(token){
        jwt.verify(token,process.env.SECRET_KEY,async(err,decodedToken)=>{
            if(err){
              console.log(err.message)
              res.status(201).send({message:"Token problem"})
            }else{
                try{
                    const userId = decodedToken._id
                    
                    const cartDetails = await Cart.find({userId}).exec();
                    // console.log("cd",cartDetails)
                    const orderDetails = await Order.find({userId}).exec();
                    // console.log("od",orderDetails)

                        var cartObj = cartDetails[0].cartItems
                    
                        // console.log("cartObj",cartObj)

                        const oDate = new Date()
                        const orderDate = oDate.toDateString()
                        // console.log(orderDate)

                        var totalPrice=0
                        for(var i=0;i<cartObj.length;++i){
                            totalPrice = totalPrice + cartDetails[0].cartItems[i].price 
                        }
                        // console.log("totalPrice",totalPrice)    

                        var ostatus = "pending"

                        const order = new Order({
                            userId,
                            totalPrice,
                            ostatus,
                            orderDate,
                            cartItems:cartObj
                        })
                        const orderDocument = await order.save()

                        res.status(201).send({msg:"posted"})
                       
                }catch(e){
                    console.log("error",e)
                }
            }
        })

    }else{
        console.log("error in authorization")
    }
})

router.route('/getorderlist').get(async(req,res)=>{
    const token = req.cookies.jwt

    if(token){
        jwt.verify(token,process.env.SECRET_KEY,async(err,decodedToken)=>{
            if(err){
              console.log(err.message)
              res.status(201).send({message:"Token problem"})
            }else{
                try{
                    const userId = decodedToken._id
                    
                    const cartDetails = await Order.find({userId}).exec();
                    var cartObj = cartDetails[0].cartItems
                    // var cartObj = cartDetails[0]
                    var cartDetail = cartDetails[0]

                    res.send({cartObj,cartDetail,cartDetails})                    

                }catch(e){
                    console.log("error",e)
                }
            }
        })

    }else{
        console.log("error in authorization")
        res.status(201).send({message:"No token provided"})  
    }
})

//baker side
router.route('/bakerorders').get(async(req,res)=>{
    const token = req.cookies.jwt

    if(token){
        jwt.verify(token,process.env.SECRET_KEY,async(err,decodedToken)=>{
            if(err){
              console.log(err.message)
              res.status(201).send({message:"Token problem"})
            }else{
                try{
                    const orderData = await Order.find().exec()
                    console.log(orderData[0].userId)

                    const userName = await Register.find({_id:orderData[0].userId}).exec()
                    // console.log("uname",userName[0].name)
                    // console.log("uname",userName[0].cont)

                    const uname = userName[0].name
                    const ucont = userName[0].cont 
                    // orderData.uname = userName[0].name
                    // orderData.ucont= userName[0].cont
                    
                    console.log(orderData)
                    res.send({orderData,uname,ucont})                    
                }catch(e){
                    console.log("error",e)
                }
            }
        })

    }else{
        console.log("error in authorization")
        res.status(201).send({message:"No token provided"})  
    }
})

//orderdone
router.route('/orderdone').post(async(req,res)=>{
    const token = req.cookies.jwt

    if(token){
        jwt.verify(token,process.env.SECRET_KEY,async(err,decodedToken)=>{
            if(err){
              console.log(err.message)
              res.status(201).send({message:"Token problem"})
            }else{
                try{
                    const orderid = req.body.id
                    // console.log(orderid)

                    Order.updateOne({_id:orderid},
                        {$set:{ostatus:"done"}}).exec()
                        res.send({message:"order done"})  

                }catch(e){
                    console.log("error",e)
                }
            }
        })

    }else{
        console.log("error in authorization")
        res.status(201).send({message:"No token provided"})  
    }
})

module.exports = router;