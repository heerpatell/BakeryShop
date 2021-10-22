require("dotenv").config()
const express = require("express")
const jwt = require("jsonwebtoken");
const router= express.Router()
const Cart = require('../models/cartModel')
const Product = require('../models/ProductModel')

router.route('/add').post(async(req,res)=>{
    const token = req.cookies.jwt

    if(token){
        jwt.verify(token,process.env.SECRET_KEY,async(err,decodedToken)=>{
            if(err){
              console.log(err.message)
              res.status(201).send({message:"Token problem"})
            }else {
                const pid = req.body.id
                const pro = await Product.find({_id:pid})
 
                // const cartId = Cart.findById({_id:decodedToken._id})

                Cart.findOne({userId:decodedToken._id})
                .exec(async (error,user)=>{
                    
                    if(user){
                        //if customer already exists then update cartItems
                        Cart.updateOne(
                            {"$push":
                                {
                                    "cartItems":{
                                        "productId":pid,
                                        "iname":pro[0].iname,
                                        "quantity":pro[0].quantity,
                                        "price":pro[0].price,
                                        "iphoto":pro[0].iphoto
                                    }
                                }
                            },
                        ).exec()

                    }else{
                        //if customer cart not exist then create one 
                        const cart = new Cart({
                            userId:decodedToken._id,
                            cartItems:[
                                {
                                    productId:pid,
                                    iname:pro[0].iname,
                                    quantity:pro[0].quantity,
                                    price:pro[0].price,
                                    iphoto:pro[0].iphoto 
                                }
                            ]
                        })
                        const cartData = await cart.save() 
                    
                    }

                })
            }
        })
    }else{
        console.log("error in authorization")
        res.status(201).send({message:"No token provided"})  
    }
})

router.route('/get').get(async(req,res)=>{
    const token = req.cookies.jwt
    if(token){
        jwt.verify(token,process.env.SECRET_KEY,async(err,decodedToken)=>{
            if(err){
              console.log(err.message)
              res.status(201).send({message:"Token problem"})
            }else {
                const userId=  decodedToken._id; 
                const item  =await Cart.find({userId}).exec()          
                // console.log(item[0].cartItems)

                res.status(201).send({message:"success",item}) 
            }
        }) 
    }else{
        console.log("error in authorization")
        res.status(201).send({message:"No token provided"})  
    }
})

router.route('/gettotalval').get(async(req,res)=>{
    const token = req.cookies.jwt
    var totalPrice=0;

    if(token){
        jwt.verify(token,process.env.SECRET_KEY,async(err,decodedToken)=>{
            if(err){
              console.log(err.message)
              res.status(201).send({message:"Token problem"})
            }else {
                const userId=  decodedToken._id; 
                const cartDetails = await Cart.find({userId}).exec();
            
                const cartObj = cartDetails[0].cartItems
                console.log("cartObj",cartObj)

                for(var i=0;i<cartObj.length;++i){
                    totalPrice = totalPrice + cartDetails[0].cartItems[i].price 
                }

                console.log("totalPrice",totalPrice)
                res.status(201).send({totalPrice})  
            }
        }) 
    }else{
        console.log("error in authorization")
        res.status(201).send({message:"No token provided"})  
    }  
})

router.route("/getcartnum").get(async(req,res)=>{
    const token = req.cookies.jwt
    if(token){
        jwt.verify(token,process.env.SECRET_KEY,async(err,decodedToken)=>{
            if(err){
              console.log(err.message)
              res.status(201).send({message:"Token problem"})
            }else {
                const userId=  decodedToken._id; 
                const cart = await Cart.find({userId}).exec()
                const cartnum = cart[0].cartItems.length
                // console.log("cart",cartnum)
                res.status(201).send({message:"success",cartnum}) 
            }
        }) 
    }else{
        console.log("error in authorization")
        res.status(201).send({message:"No token provided"})  
    }  
})

router.route("/quantityadd").post(async(req,res)=>{
    const token = req.cookies.jwt
     if(token){
        jwt.verify(token,process.env.SECRET_KEY,async(err,decodedToken)=>{
            if(err){
              console.log(err.message)
              res.status(201).send({message:"Token problem"})
            }else {
                const userId=  decodedToken._id; 
                
                const id = req.body.id;
                var quantity = req.body.quantity;

                //to find object of item form array of objects.
                const cartDetails = await Cart.find(
                    { cartItems: { $elemMatch: { _id:id} } },
                    { "cartItems.$": 1 }
                ).exec();

                const cartObj = cartDetails[0].cartItems[0]
                // console.log("cartObj",cartObj)

                //to find original price of item from Product collecction
                const productPrice = await Product.find({_id:cartObj.productId}).exec()
                
                // console.log("product price",productPrice[0].price)
                
                // console.log("q",quantity+1)
                Cart.updateOne(
                    {"cartItems.iname":cartObj.iname},
                    // {$inc: {"cartItems.$.quantity": quantity}},
                    {'$set':
                        {"cartItems.$.quantity":quantity+1,
                        "cartItems.$.price":(quantity+1)*productPrice[0].price}
                    },
                    // {
                    //     $inc: { 'cartItems.$.quantity': quantity }
                    // },
                    (err,cart)=>{
                        if(err)
                            console.log(err)
                        console.log(cart)
                    }
                )
                res.status(201).send({message:"Updated succesfully"})
            }

        }) 
    }else{
        console.log("error in authorization")
        res.status(201).send({message:"No token provided"})  
    }
})

router.route("/quantityminus").post(async(req,res)=>{
    const token = req.cookies.jwt
     if(token){
        jwt.verify(token,process.env.SECRET_KEY,async(err,decodedToken)=>{
            if(err){
              console.log(err.message)
              res.status(201).send({message:"Token problem"})
            }else {
                const userId=  decodedToken._id; 
                
                const id = req.body.id;
                var quantity = req.body.quantity;

                //to find object of item form array of objects.
                const cartDetails = await Cart.find(
                    { cartItems: { $elemMatch: { _id:id} } },
                    { "cartItems.$": 1 }
                ).exec();

                const cartObj = cartDetails[0].cartItems[0]
                // console.log("cartObj",cartObj)

                //to find original price of item from Product collecction
                const productPrice = await Product.find({_id:cartObj.productId}).exec()
                
                // console.log("product price",productPrice[0].price)
                
                Cart.updateOne(
                    {"cartItems.iname":cartObj.iname},
                    // {$inc: {"cartItems.$.quantity": quantity}},
                    {'$set':
                        {"cartItems.$.quantity":quantity-1,
                        "cartItems.$.price":(quantity-1)*productPrice[0].price}
                    },
                    {
                        $inc: { 'cartItems.$.quantity': quantity }
                    },
                    (err,cart)=>{
                        if(err)
                            console.log(err)
                        console.log(cart)
                    }
                )
                res.status(201).send({message:"Updated succesfully"})
            }

        }) 
    }else{
        console.log("error in authorization")
        res.status(201).send({message:"No token provided"})  
    }
})

router.route("/deletecart").post(async(req,res)=>{
    const token = req.cookies.jwt
     if(token){
        jwt.verify(token,process.env.SECRET_KEY,async(err,decodedToken)=>{
            if(err){
              console.log(err.message)
              res.status(201).send({message:"Token problem"})
            }else {
                const userId=  decodedToken._id; 
                const id = req.body.id;
                
                //to find object of item form array of objects.
                const cartDetails = await Cart.find(
                    { cartItems: { $elemMatch: { _id:id} } },
                    { "cartItems.$": 1 }
                ).exec();

                const cartObj = cartDetails[0].cartItems[0]

                console.log(cartObj)

                console.log(id)
                // Cart.deleteOne({userId},{"$pull":"cartObj"})   
                Cart.update({userId},
                {$pull:{"cartItems":{"_id":id}}},{multi:true}).exec();  
            }
        }) 
    }else{
        console.log("error in authorization")
        res.status(201).send({message:"No token provided"})  
    }
})

module.exports = router;