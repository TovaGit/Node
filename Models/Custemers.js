const mongoose=require('mongoose')
const Custemers=new mongoose.Schema(
    {
    userName:{
        type:String,
        unique:true,
        lowercase:true,
        required:true,
    },
    pwd:{
        type:String,
        required:true,
    },
    name:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        lowcase:true,
        trim:true
    },
    phone:{
        type:Number
    },
     active:
     {
        type:Boolean,
        default:true
     } ,
    },
    {
        timestamps:true
    })
    module.exports=mongoose.model('Custemers',Custemers)