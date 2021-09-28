const mongoose = require("mongoose")
var Schema = mongoose.Schema;

const profileSchema = new mongoose.Schema({  
    pimage:{
        data: Buffer,
        contentType: String
    },
    bname:{
        type:String,
        required:true
    },
    uname:{
        // type: Schema.Types.ObjectId,
        // ref:'Register'
        type:String,
        required:true
    },
    sellProduct:{
        type:String,
        required:true
    },
    availTime:{
        type:String,
        required:true
    },
    email:{
        // type: Schema.Types.ObjectId,
        // ref:'Register'
        type:String,
        required:true
    },
    role:{
        // type: Schema.Types.ObjectId,
        // ref:'Register'
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    area:{
        type:String,
        required:true
    },
    contact:{
        type:Number,
        requierd:true
    },
    socialmedia:{
        type:String,
        required:true
    }
})

const profile = mongoose.model("Profile",profileSchema);

module.exports= profile;