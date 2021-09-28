const express = require("express")
const router= express.Router()
const Profile = require("../models/ProfileModel")
const {profileVal} = require("../validator")

router.route("/profile/add").post((req,res)=>{
    const {error} = profileVal(req.body)
    if(error){
        console.log(error.details)
        res.status(201).send({error:error.details[0].message})
    }
    console.log("req user",req)

    const bname = req.body.bname;
    const uname = req.body.uname;
    const sellProduct = req.body.sellProduct;
    const availTime = req.body.availTime;
    const email = req.body.email;
    const role = req.body.role;
    const city = req.body.city;
    const area = req.body.area;
    const cont = req.body.cont;
    const socialmedia = req.body.socialmedia;

    const newProfile = new Profile({
        bname,
        uname,
        sellProduct,
        availTime,
        email,
        role,
        city,
        area,
        cont,
        socialmedia
    });
    newProfile.save()
    res.status(201).send({message:"Updated succesfully"})
})

module.exports = router;