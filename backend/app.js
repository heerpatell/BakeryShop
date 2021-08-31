const express= require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb+srv://heer:heer123@cluster0.njtdf.mongodb.net/Bakery",{
    useFindAndModify:false,
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true
})  

const contactroute = require("./routes/contactRoute");

app.use("/contactapi",contactroute);    //contact route

app.listen(5000,(req,res)=>{
    console.log("listenig on port")
})