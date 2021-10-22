require('dotenv').config()
const mongoose = require("mongoose")
const bcrypt = require("bcryptjs")
const jwt = require('jsonwebtoken')

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
    bname:{
        type:String,
        // required:true
    },
    sellProduct:{
        type:String,
        // required:true
    },
    availTime:{
        type:String,
        // required:true
    },
    city:{
        type:String,
        // required:true
    },
    area:{
        type:String,
        // required:true
    },
    cont:{
        type:Number,
        // requierd:true
    },
    socialmedia:{
        type:String,
        // required:true
    },
    tokens:[{
        token:{
            type:String,
            requierd:true
        }
    }]
})

//generating token
signSchema.methods.generateAuthToken = async function(){
    try{
        const token = jwt.sign({_id:this._id.toString()},process.env.SECRET_KEY,{expiresIn: '1h'})
        this.tokens = this.tokens.concat({token:token})
        await this.save()
        return token;
    }catch(e){
        console.log("errro",e)
    }
}

//password hashing
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