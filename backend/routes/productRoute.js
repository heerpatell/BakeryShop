require("dotenv").config()
const express = require("express")
const Category = require("../models/CategoryModel")
const Product = require("../models/ProductModel")
const Register = require("../models/signupModel")
const router= express.Router()
const jwt = require("jsonwebtoken");
const multer = require("multer")

//defining storage for images
const storage = multer.diskStorage({
    destination:(req,file,callback) =>{
        callback(null,"../frontend/src/uploads/")
    },

    //adding extension
    filename:(req,file,callback)=>{
        callback(null,Date.now()+file.originalname)
    }
})

//upload parameter for multer
const upload = multer({
    storage:storage,
    limits:{
        fieldSize:1024*1024*3,
    },
})

const fetchData =async (userId) =>{
    let user  =await Category.find({userId}).exec()
    return user
    // console.log("list : ",user)
}

router.route("/getcategory").get((req,res)=>{
    const token = req.cookies.jwt

    if(token){
        jwt.verify(token,process.env.SECRET_KEY,async(err,decodedToken)=>{
            if(err){
              console.log(err.message)
              res.status(201).send({message:"Token problem"})
            }else {
                // console.log("decoded",decodedToken._id)                
                const user = await fetchData(decodedToken._id)
                // console.log(user)
                res.status(201).send({message:"success",user:user})
            }
        })
    }else{
        console.log("error in authorization")
        res.status(201).send({message:"No token provided"})  
    }

})

router.route("/addcategory").post(async(req,res)=>{
    const token = req.cookies.jwt
    if(token){
        jwt.verify(token,process.env.SECRET_KEY,async(err,decodedToken)=>{
            if(err){
              console.log(err.message)
              res.status(201).send({message:"Token problem"})
            }else {
                // console.log("decoded",decodedToken._id)                
                try{
                    const categoryname = req.body.categoryname
                    // console.log("name",categoryname)
                    const newCategory = new Category({
                        categoryname,
                        userId:decodedToken._id 
                    })
                    // console.log(newCategory)
                    const cat = await newCategory.save()
                    console.log("Succesfully added category")

                    // res.status(201).send({message:"Succesfully added category"})
                }catch(e){
                    console.log("error",e)
                } 
            }
        })   
    }else{
        console.log("error in authorization")
        res.status(201).send({message:"No token provided"})  
    }
})

//product add
router.route("/add").post(upload.single("iphoto"),async(req,res)=>{
    const token = req.cookies.jwt
    if(token){
        jwt.verify(token,process.env.SECRET_KEY,async(err,decodedToken)=>{
            if(err){
              console.log(err.message)
              res.status(201).send({message:"Token problem"})
            }else {
                // console.log("decoded",decodedToken._id)     
                // console.log(req.file)           
                try{
                    const cname = req.body.cname;
                    const iname = req.body.iname;
                    const iphoto = req.file.filename;
                    const quantity = req.body.quantity;
                    const price = req.body.price;
                    const avail = req.body.avail;
                    
                    // console.log("name",categoryname)
                    const newProduct = new Product({
                        cname,iname,iphoto,quantity,price,avail,
                        userId:decodedToken._id
                    })
                    // console.log(newCategory)
                    const product = await newProduct.save()
                    console.log("Succesfully added product")

                }catch(e){
                    console.log("error",e)
                } 
            }
        })   
    }else{
        console.log("error in authorization")
        res.status(201).send({message:"No token provided"})  
    }
})

router.route("/get").get((req,res)=>{
    const token = req.cookies.jwt

    if(token){
        jwt.verify(token,process.env.SECRET_KEY,async(err,decodedToken)=>{
            if(err){
              console.log(err.message)
              res.status(201).send({message:"Token problem"})
            }else { 
                const userId=  decodedToken._id; 
                const item  =await Product.find({userId}).exec()          
                // console.log(item)
                res.status(201).send({message:"success",item})
            }
        })
    }else{
        console.log("error in authorization")
        res.status(201).send({message:"No token provided"})  
    }

})

router.route("/deleteItem/:id").delete(async(req,res)=>{  
    const id = req.params.id
    await Product.findByIdAndDelete(id).exec()
    .then(()=>{
        res.status(201).send({message:"success"})
    })
    .catch((e)=>{
        console.log("error",e)
    })
})

router.route("/editItem/:id").put(async(req,res)=>{  
    // const id = req.params.id

    //     iname:req.body.iname;
    //     quantity:req.body.quantity;
    //     price:req.body.price;
    //     avail:req.body.avail;
    //     iphoto:req.file.filename;
  
    // const pid = await Product.findByIdAndUpdate(id,{
    //     iname,quantity,price,iphhoto,avail
    // },{
    //     new: true 
    // },(e,d)=>{
    //     if(e){
    //         console.log("error",e)
    //     }
    // }
    // )

    // .then(()=>{
    //     res.status(201).send({message:"success"})
    // })
    // .catch((e)=>{
    //     console.log("error",e)
    // })
})

//custmer module
router.route("/getitems").get((req,res)=>{
    const token = req.cookies.jwt

    if(token){
        jwt.verify(token,process.env.SECRET_KEY,async(err,decodedToken)=>{
            if(err){
              console.log(err.message)
              res.status(201).send({message:"Token problem"})
            }else { 
                const userId=  decodedToken._id; 
                const item  =await Product.find().exec()  

                const bdata = await Register.find(item[0].userId).exec()
                
                // console.log("bid",bid)        
                // console.log(item)
                res.status(201).send({message:"success",item})
            }
        })
    }else{
        console.log("error in authorization")
        res.status(201).send({message:"No token provided"})  
    }

})


module.exports = router;