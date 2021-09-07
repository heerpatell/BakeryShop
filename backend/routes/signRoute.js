const express = require("express")
const router= express.Router()
const Register = require("../models/signupModel")
const bcrypt = require('bcryptjs')

router.route('/register').post(async(req,res)=>{
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
    
    const reg = await newUser.save()
    
    }catch(e){
            console.log("error",e )
    }

})
router.route('/signin').post(async(req,res)=>{
    try{
        
        const email = req.body.email;
        const pswd = req.body.pswd;

        const useremail = await Register.findOne({email})   //email:email (object destructuring)
        const isMatch = await bcrypt.compare(pswd, useremail.pswd)
        if(isMatch){
            res.send({message:"Login succesfully"})

            // res.writeHead(201,{Location: 'http://localhost:3000/baker'});
            // res.end();
            console.log("redirecting..")
        }else{
            res.send({message:"Pswd didn't match"})
            console.log("Not matching")
        }
    }catch(e){
        res.send(400).send("Invalid ")
    }
})

module.exports = router;