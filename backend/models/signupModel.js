const mongoose = require("mongoose")
const bcrypt = require("bcryptjs")

const signSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    uname:{
        type:String,
        require:true,
        unique:true
    },
    email:{
        type:String,
        unique:true,
        required:true
    },
    pswd:{
        type:String,
        required:true
    },
    stoken:{
        type:String,      
    },
})

signSchema.pre("save",async function(next){
    try{
        if(this.isModified("pswd")){
            const hashpswd = await bcrypt.hash(this.pswd,9)
            this.pswd = hashpswd
            next()
        } 
    }catch(err){
        console.log("error",e)
    }
})

const SignUp = mongoose.model("Register",signSchema);
module.exports = SignUp;