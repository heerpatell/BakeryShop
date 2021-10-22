const express = require("express")
const router= express.Router()
const Register = require("../models/signupModel")
const bcrypt = require('bcryptjs')
const {signUpVal} = require("../validator")
const {signInVal} = require("../validator")
const auth = require('../middleware/Authenticate')

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

    const newUser = new Register({
        name,
        uname,
        email,
        pswd,
        stoken
    })
    // console.log(newUser)
    
    //pswd hash(middleware)
    
    //toekn generate(middleware)
    //console.log("success : ",newUser)
    // const token =await newUser.generateAuthToken()
    
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
        if(useremail){
            const isMatch = await bcrypt.compare(pswd, useremail.pswd)

            const token =await useremail.generateAuthToken()  //middleware
            console.log(token)

            var date = new Date();
            date.setTime(date.getTime() + (3600 * 1000));    //1 hr
            const options={
                // secure:false, 
                httpOnly:true,
                expires:date    //expires in 1hr
            }
            
            res.cookie('jwt',token,options)

            const userToken = useremail.stoken
            
            if(isMatch){
                res.status(201).send({message:"Login succesfully",userToken})

                console.log("redirecting..")
            }else{
                res.send({message:"Pswd didn't match, Try again!!"})
                console.log("Not matching")
            }
        }
        else{
            console.log("credential does not mtach")
        }
    }catch(e){
        res.status(400).send("Invalid ")
    }
})

router.route('/verify').get(auth,async(req,res)=>{
    // console.log("in /verify")
})

router.route('/logout').get(async(req,res)=>{
    console.log("logout")

    // res.clearCookie('jwt',{path : '/'})
    // res.clearCookie('jwt')

    var date = new Date();
    date.setTime(date.getTime() + (5 * 1000));    //5 second
    const options={
        // secure:false, 
        httpOnly:true,
        expires:date    //expires in 5 second
    }
    res.cookie('jwt',"expired",options)

    res.status(200).send({message:"user logout"})
})



module.exports = router;