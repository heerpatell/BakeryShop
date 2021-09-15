const express = require("express")
const router= express.Router()
const Register = require('../models/signupModel')

router.route('/getcustomerdetail').get((req,res)=>{
    Register.find({"stoken":"Customer"}).then(data=>{
        res.json(data)
    })
})

router.route('/getbakerdetail').get((req,res)=>{
    Register.find({"stoken":"Baker"}).then(data=>{
        res.json(data)
    })
})

module.exports = router;