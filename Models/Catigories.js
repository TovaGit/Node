const mongoose=require('mongoose')
const Catigories=new mongoose.Schema(
    {
    name:{
        type:String,
        required:true,
        trim:true
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
    module.exports=mongoose.model('Catigories',Catigories)