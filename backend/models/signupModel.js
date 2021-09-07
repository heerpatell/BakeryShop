const mongoose = require("mongoose")
const bcrypt = require("bcryptjs")

const signSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true,
    },
    uname:{
        type:String,
        require:true,
        unique:true
    },
    email:{
        type:String,
        unique:true,
        require:true
    },
    pswd:{
        type:String,
        require:true
    },
    stoken:{
        type:String,
        possibleValues: ["I'm Customer","I'm Baker"]
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