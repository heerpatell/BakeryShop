const joi = require('@hapi/joi')

const signUpVal=(data)=>{
    const schema = joi.object({
        name:joi.string().min(2).required(),
        uname:joi.string().min(3).required(),
        email:joi.string().required().email(),
        pswd:joi.string().min(5).required()
    })
    return schema.validate(data)
}

const signInVal=(data)=>{
    const schema = joi.object({
        email:joi.string().required().email(),
        pswd:joi.string().required()
    })
    return schema.validate(data)
}

const contactVal =(data)=>{
    const schema = joi.object({
        name:joi.string().required().min(2),
        email:joi.string().required().email(),
        sub:joi.string().required().min(5),
        mes:joi.string().required().min(8)
    })
    return schema.validate(data)
}

module.exports.signInVal =  signInVal
module.exports.signUpVal =  signUpVal
module.exports.contactVal =  contactVal