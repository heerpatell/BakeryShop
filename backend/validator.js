const joi = require('@hapi/joi')

const signUpVal=(data)=>{
    const schema = joi.object({
        name:joi.string().min(2).required(),
        uname:joi.string().min(3).required(),
        email:joi.string().required().email(),
        pswd:joi.string().min(5).required(),
        stoken:joi.string().min(1)
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

const profileVal = (data)=>{
    const schema = joi.object({
        bname:joi.string().required().min(2),
        uname:joi.string().required().min(2),
        sellProduct:joi.string().required().min(5),
        availTime:joi.string().required().min(2),
        email:joi.string().required().email(),
        role:joi.string().required().min(2),
        city:joi.string().required().min(2),
        area:joi.string().required().min(2),
        cont:joi.number().required().min(2),
        socialmedia:joi.string().required().min(3),
    })
    return schema.validate(data)
}

module.exports.signInVal =  signInVal
module.exports.signUpVal =  signUpVal
module.exports.contactVal =  contactVal
module.exports.profileVal =  profileVal