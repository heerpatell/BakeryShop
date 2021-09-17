const jwt = require('jsonwebtoken')

module.exports = function(req,res,next){
    //token exists
    const token = req.cookies.access_token;
    if(!token){
        req.user = {isAuthenticated:false}
        // res.json({isAuthenticated:false})
    }
    if (token){
    //verify token
    const verified = jwt.verify(token,process.env.SECRET_KEY)

    if(!verified){
        return res.json({isAuthenticated:false})
    }
    req.user = verified;
    }
    next()
}
