require("dotenv").config();
const express = require("express")
const router= express.Router()
const Profile = require('../models/ProfileModel')
const jwt = require("jsonwebtoken");

router.route("/get").get(async(req,res)=>{
    const token = req.cookies.jwt
    // console.log("token",token)
    if(token){
        jwt.verify(token,process.env.SECRET_KEY,(err,decodedToken)=>{
            if(err){
              console.log(err.message)
              res.status(201).send({message:"Token problem"})
            }else{
                let user  = Profile.findById(decodedToken._id)
                
                console.log("user",user)
            }
        })
    }else{
        console.log("error in authorization")
        res.status(201).send({message:"No token provided"})  
    }
})

router.route('/postdata').post(async(req,res)=>{
    const token = req.cookies.jwt

    if(token){
        jwt.verify(token,process.env.SECRET_KEY,(err,decodedToken)=>{
            if(err){
              console.log(err.message)
              res.status(201).send({message:"Token problem"})
            }else{
                const uname = req.body.uname;
                const email = req.body.email;
                const role = req.body.role;
                const city = req.body.city;
                const area = req.body.area;

                const newProfile = new Profile({
                    uname,
                    email,
                    role,
                    city,
                    area,
                });

                newProfile.save()
                res.status(201).send({message:"Updated succesfully"})
            }
        })
    }else{
        console.log("error in authorization")
        res.status(201).send({message:"No token provided"})  
    }
})

module.exports = router;