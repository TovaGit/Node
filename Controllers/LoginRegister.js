const Custemer =require("../Models/Custemers")
const jwt =require('jsonwebtoken')
const bcrypt=require('bcrypt')
const login=async (req,res)=>{
    const {userName,pwd}=req.body
    if(!userName||!pwd)
        return res.status(400).json({message:' All fields are required'})
   const foundCustemer =await Custemer.findOne({userName}).lean()
   if(!foundCustemer|| !foundCustemer.active)
        return res.status(401).json({message:'Unauthorize'})
   const match =await bcrypt.compare(pwd,foundCustemer.pwd)
   if(!match)
      return res.status(401).json({message:'Unauthorize'})
  
   const custemerInfo={_id:foundCustemer._id,name:foundCustemer.userName,userName:foundCustemer
           .userName,email:foundCustemer.email}
    const accessToken=jwt.sign(custemerInfo,process.env.ACCESS_TOKEN_SECRET)
    res.json({accessToken:accessToken})
     res.send("Logged In")

}
const register=async (req,res)=>{
const {userName,pwd,name,email,phone}=req.body;
if(!name||!userName||!pwd)
    return res.status(400).json({message:'Fields are required'})
    const duplicate=await Custemer.findOne({userName:userName}).lean()
    if(duplicate)
        return res.status(409).json({message:'duplicate username'})
    const hashedpwd=await bcrypt.hash(pwd,10)
    const userObject={userName,pwd:hashedpwd,name,email,phone}
    const custemer=await Custemer.create(userObject)
    if(custemer)
        return res.status(201).json({message:`Custemer user ${custemer.userName} created`})
    else
        return res.status(400).json({message:'Invalid custemer receved'})


}



module.exports={login,register}