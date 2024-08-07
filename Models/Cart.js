const mongoose=require('mongoose')
const Cart=new mongoose.Schema(
    {
    code:{
        type:String,
        trim:true,
    },
    amountInCart:{
        type:Number,
        default:1
    },
     Product:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"Products"
    },
    Custemer:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"Custemers"
    },
    
    },
    {
        timestamps:true
    })
    module.exports=mongoose.model('Cart',Cart)