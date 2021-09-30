const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports = (req, res, next) => {
  // Read the token from the cookie
  const token = req.cookies.jwt;
  
  if(token){
    jwt.verify(token,process.env.SECRET_KEY,(err,decodedToken)=>{
      if(err){
        console.log(err.message)
        res.status(201).send({message:"Token problem"})
        next()
      }else{
        res.status(201).send({message:"Token issued"})
        console.log(decodedToken)
        next()
      }
    })
  }else{
      console.log("error in authorization")
      res.status(201).send({message:"No token provided"})
      next()
  }
 
};