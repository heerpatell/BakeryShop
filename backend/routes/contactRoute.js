const express = require("express")
const router= express.Router()
const Contact = require("../models/ContactModel")

router.route("/create").post((req,res)=>{
    const name = req.body.name;
    const email = req.body.email;
    const sub = req.body.sub;
    const msg = req.body.msg;

    const newContact = new Contact({
        name,
        email,
        sub,
        msg
    });
    newContact.save()
})

router.route("/get").get((req,res)=>{
    Contact.find().then(data=>{
        res.json(data)
    })
})


module.exports = router;