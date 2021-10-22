require("dotenv").config();
const express = require("express")
const router= express.Router()
const Register = require('../models/signupModel')
const jwt = require("jsonwebtoken");

const fetchData =async (userId) =>{
    let user  =await Register.findById(userId).exec()
    return user
    // console.log("user name",user.name)
}

router.route("/customerget").get(async(req,res)=>{
    const token = req.cookies.jwt
    // console.log("token1",token)
    if(token){
        jwt.verify(token,process.env.SECRET_KEY,async(err,decodedToken)=>{
            if(err){
              console.log(err.message)
              res.status(201).send({message:"Token problem"})
            }else {
                // console.log("decoded",decodedToken._id)                
                const user = await fetchData(decodedToken._id)
                res.status(201).send({name:user.name,email:user.email,role:user.stoken,city:user.city,area:user.area,cont:user.cont})
            }
        })
    }else{
        console.log("error in authorization")
        res.status(201).send({message:"No token provided"})  
    }
})

router.route('/customerpost').post(async(req,res)=>{
    const token = req.cookies.jwt

    if(token){
        jwt.verify(token,process.env.SECRET_KEY,async(err,decodedToken)=>{
            if(err){
              console.log(err.message)
              res.status(201).send({message:"Token problem"})
            }else{
                try{
                    const city = req.body.city;
                    const area = req.body.area;
                    const cont = req.body.cont
    
                    const userId = decodedToken._id

                    let user = await Register.findById(userId)
                   
                    Register.updateOne(
                        {"_id":userId},
                        {$set : {"city": city, "area":area, "cont":cont}}
                        ,(err,res)=>{
                        if(err){
                            console.log("error in updating",err)
                        }else{
                            console.log("updated",res)
                        }
                    })

                    res.status(201).send({message:"Updated succesfully"})
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

//baker sode
router.route("/bakerget").get(async(req,res)=>{
    const token = req.cookies.jwt
    // console.log("token1",token)
    if(token){
        jwt.verify(token,process.env.SECRET_KEY,async(err,decodedToken)=>{
            if(err){
              console.log(err.message)
              res.status(201).send({message:"Token problem"})
            }else {
                // console.log("decoded",decodedToken._id)                
                const user = await fetchData(decodedToken._id)
                res.status(201).send({
                    uname:user.uname,
                    bname:user.bname,
                    email:user.email,
                    role:user.stoken,
                    city:user.city,
                    area:user.area,
                    cont:user.cont,
                    socialmedia:user.socialmedia,
                    availTime:user.availTime,
                    sellProduct:user.sellProduct
                })
            }
        })
    }else{
        console.log("error in authorization")
        res.status(201).send({message:"No token provided"})  
    }
})

router.route('/bakerpost').post(async(req,res)=>{
    const token = req.cookies.jwt

    if(token){
        jwt.verify(token,process.env.SECRET_KEY,async(err,decodedToken)=>{
            if(err){
              console.log(err.message)
              res.status(201).send({message:"Token problem"})
            }else{
                try{
                    const uname=req.body.uname;
                    const bname = req.body.bname;
                    const city = req.body.city;
                    const area = req.body.area;
                    const cont = req.body.cont;
                    const availTime = req.body.availTime;
                    const socialmedia = req.body.socialmedia;
                    const sellProduct = req.body.sellProduct

                    const userId = decodedToken._id

                    let user = await Register.findById(userId)
                   
                    Register.updateOne(
                        {"_id":userId},
                        {$set : {"uname":uname,"bname":bname,"city": city, "area":area, "cont":cont, "availTime":availTime,"socialmedia":socialmedia,"sellProduct":sellProduct}}
                        ,(err,res)=>{
                        if(err){
                            console.log("error in updating",err)
                        }else{
                            console.log("updated",res)
                        }
                    })

                    res.status(201).send({message:"Updated succesfully"})
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