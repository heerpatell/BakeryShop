const jwt = require('jsonwebtoken')
const Register = require('../models/signupModel')

const Authentiacte = async (req,res,next)=>{
    try{
        const token = req.cookies.jwtoken
        const verifyToken = jwt.verify(token ,process.env.SECRET_KEY)
        const user = await Register.findOne({_id : verifyToken._id,"tokens.token":token})
        
        if(!user){throw new Error("User not found")}

        req.token = token
        req.user = user
        req.userId = user._id

        next()
    }
    catch(e){
        res.status(401).send("unauthorized : no token provided")
    }
}

module.exports = Authenticate