const express = require("express")
const router= express.Router()
const Register = require("../models/signupModel")
const bcrypt = require('bcryptjs')
const {signUpVal} = require("../validator")
const {signInVal} = require("../validator")

router.route('/register').post(async(req,res)=>{
    const {error} = signUpVal(req.body)
    
    if(error){
        res.status(201).send({error:error.details[0].message})
        // console.log("ee:",error)
    } 

    try{
    const name = req.body.name;
    const uname = req.body.uname;
    const email = req.body.email;
    const pswd = req.body.pswd;
    const stoken = req.body.stoken;
    const scheck = req.body.scheck;

    const newUser = new Register({
        name,
        uname,
        email,
        pswd,
        stoken,
        scheck
    })
    console.log(newUser)
    //pswd hash(middleware)
    
    //toekn generate(middleware)
    //console.log("success : ",newUser)
    const token =await newUser.generateAuthToken({expiresIn:"5 hours"})
    
    const reg = await newUser.save()

    res.status(201).send({message:"Registered succesfully"})
    
    }catch(e){
            console.log("error",e)
    }

})
router.route('/signin').post(async(req,res)=>{
    try{
        const {error} = signInVal(req.body)
        if(error){
            res.status(201).send({error:error.details[0].message})
        }
        const email = req.body.email;
        const pswd = req.body.pswd;

        const useremail = await Register.findOne({email})   //email:email (object destructuring)

        const isMatch = await bcrypt.compare(pswd, useremail.pswd)

        const token =await useremail.generateAuthToken()  //middleware
        console.log(token)

        const userToken = useremail.stoken
        
        if(isMatch){
            res.status(201).send({message:"Login succesfully",userToken})

            // res.writeHead(201,{Location: 'http://localhost:3000/baker'});
            // res.end();
            console.log("redirecting..")
        }else{
            res.send({message:"Pswd didn't match, Try again!!"})
            console.log("Not matching")
        }
    }catch(e){
        res.status(400).send("Invalid ")
    }
})

router.route('/logout').get(async(req,res)=>{
    console.log("logout")
    res.clearCookie('jwtoken',{path : '/'})
    res.status(200).send({message:"user logout"})
})

module.exports = router;