const mongoose = require("mongoose")

const contactSchema ={
    name:String,
    email:String,
    sub:String,
    msg:String
}

const Contact = mongoose.model("Contact",contactSchema);

module.exports= Contact;