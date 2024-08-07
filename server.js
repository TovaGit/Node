require("dotenv").config()
const express =require("express")
const cors =require("cors")
const corsOption=require("./config/corsOption")
const connectDB =require("./config/db.Conn")
const { default: mongoose } = require("mongoose")
const PORT=process.env.PORT || 5000
const app=express()
connectDB()
app.use(cors(corsOption))
app.use(express.json())
app.use("/api/Custormers",require("./Routes/Custormers"))
app.use("/api/Products",require("./Routes/Products"))
app.use("/api/Catigory",require("./Routes/Catigorey"))
app.use("/api/Cart",require("./Routes/Cart"))
app.use("/api/auth",require("./Routes/register"))
app.use(express.static("public"))
mongoose.connection.once('open',()=>
{
    console.log('Connected to MongoDB')
    app.listen(PORT,()=>console.log(`Server running on port ${PORT}`))
})
mongoose.connection.on('error',err=>
{
    console.log(err)
})