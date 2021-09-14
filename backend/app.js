const express= require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const signuproute = require("./routes/signRoute")
const contactroute = require("./routes/contactRoute")
//const bakerroute = require("./routes/bakerRoute")

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb+srv://heer:heer123@cluster0.njtdf.mongodb.net/Bakery",{
    useFindAndModify:false,
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true
})  

app.use("/contactapi",contactroute);    //contact route
app.use("/auth",signuproute);    //signup route
//app.use("/baker",bakerroute)

app.listen(5001,()=>{
    console.log("listenig on port")
})