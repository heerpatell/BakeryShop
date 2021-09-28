const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports = (req, res, next) => {
  // Read the token from the cookie
  const token = req.cookies.token;
  if (!token)   
    return res.status(401).send({message:"Access denied...No token provided..."});
  try {
    const decoded = jwt.verify(token, process.env.SECRET);
    req.user = decoded;
    next();
  } catch (er) {
    //Incase of expired jwt or invalid token kill the token and clear the cookie
    res.clearCookie("jwt");
    return res.status(400).send({message:"error in auth:",er});
  }
};