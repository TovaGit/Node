const mongoose=require('mongoose')
const Product=new mongoose.Schema(
    {
        name:
        {
            type:String,
            required:true,
            unique:true,
        },
        catgory:{
            type:mongoose.Schema.Types.ObjectId,
            required:true,
            ref:"Catigories"
        },
        code:
        {
            type:String,
            required:true,
            unique:true,
        },
        price:{
            type:String,
            required:true,
        },
        icon:{
            type:String,
            enum:["📱","💻","⌨","📟","🐭","📺","📷"] ,
            maxLenght:70
        },
        tags:
        {
            type:[String]
        },
        productionDate:
        {
            type:mongoose.Schema.Types.Date,
            default:()=>new Date()
        },
        status:{
            type:String,
            enum:["exist","notAvailble","notExist"] ,
            default:"exist"
        },
        image:
        {
          type:String
        },
      
        // custemer:{
        //     type:mongoose.Schema.Types.ObjectId,
        //     required:true,
        //     ref:"Custemers"
        // }
    },
    {
     timestamps:true
    }
)
module.exports=mongoose.model('Products',Product)