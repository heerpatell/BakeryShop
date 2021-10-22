const express= require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const cookieParser = require("cookie-parser");

const signuproute = require("./routes/signRoute")
const contactroute = require("./routes/contactRoute")
const adminroute = require('./routes/adminRoute')
const profileroute = require("./routes/profileRoute")
const productroute = require("./routes/productRoute")
const cartroute = require("./routes/cartRoute")

const app = express()
app.use(express.urlencoded({extended:false}))

app.use(cors({
    origin:'http://localhost:3000',
    credentials:true
}))
app.use(express.json())
app.use(cookieParser())

mongoose.connect("mongodb+srv://heer:heer123@cluster0.njtdf.mongodb.net/Bakery",{
    useFindAndModify:false,
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true
})  

app.use("/admin",adminroute)   //admin route
app.use("/contactapi",contactroute)    //contact route
app.use("/auth",signuproute)    //signup route
app.use("/profile",profileroute)    //profile section
app.use("/product",productroute)    //product route
app.use("/cart",cartroute)  //cart route

app.get('/hi',(req,res)=>{
    res.cookie("ok","success",{maxAge:20000})
    console.log(req.cookies)
    res.send("hi")
})

app.listen(5001,()=>{
    console.log("listenig on port")
})