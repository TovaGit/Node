const Custemer =require("../Models/Custemers")
const createNewCustemer= async(req,res)=>
{
const{userName,pwd,name,email,phone,active}=req.body
if(!name||!userName||!pwd)
return res.status(400).json({message:'Fields are required'})
const found =await Custemer.findOne({userName}).lean()
if(found)
return res.status(401).send(`error name duplicated!!!!!!!!!!!!!!!`)

const custemer=await Custemer.create({userName,pwd,name,email,phone,active})
if(custemer)
    return res.status(201).json({message:'New custemer created'})
else
    return res.status(400).json({message:'Invalid task'})
}
const getAllCustemers=async (req,res)=>
{
    const{auserName,pwd,name,email,phone,active}=req.body
    const custemers=await Custemer.find().lean()
if(!custemers?.length)
    return res.status(400).json({message:'No custemers found'})
res.json(custemers)
}
const updateCustemer=async (req,res)=>
{
    const{_id,auserName,pwd,name,email,phone,active}=req.body
    if(!_id||!name||!auserName||!pwd)
        return res.status(400).json({message:'Fields are required'})
    const custemer= await Custemer.findById(_id).exec()
    if(!custemer)
        return res.status(400).json({message:'Custemer not found'})
        custemer.auserName=auserName
        custemer.name=name
        custemer.pwd=pwd
        custemer.email=email
        custemer.phone=phone
        custemer.active=active
        const updateCust=await custemer.save()
        res.json(`'${updateCust.name}' updated`)
}
const deleteCustemer=async (req,res)=>
{
    const{_id}=req.body
   const custemer=await Custemer.findById(_id).exec()
 if(!custemer)
 return res.status(400).json({message:'Custemer not found'})
    const result=await custemer.deleteOne()
    const replay =`Custemer '${result.name}' Id '${result._id}' deleted`
    res.json(replay)
} 
const getCustemerById=async (req,res)=>
{
    const {id}=req.params
    const custemer =await Custemer.findById(id).lean()
    if(!custemer)
    return res.status(400).json({message:'Custemer not found'})
    res.json(custemer)
}
module.exports={
    createNewCustemer,
    getAllCustemers,
    updateCustemer,
    deleteCustemer,
    getCustemerById,
}