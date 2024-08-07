const Catigories =require("../Models/Catigories")
const createNewCatigory= async(req,res)=>
{
    const{active,name}=req.body
    if(!name)
    return res.status(400).json({message:'name is required'})

const Catigory=await Catigories.create({active,name})
if(Catigory)
    return res.status(201).json({message:'New Catigory created'})
else
    return res.status(400).json({message:'Invalid Catigory'})
}
const getAllCatigory=async (req,res)=>
{
    const{active,name}=req.body
    const Catigory=await Catigories.find().lean()
if(!Catigory?.length)
    return res.status(400).json({message:'No Catigory found'})
res.json(Catigory)
}
const updateCatigory=async (req,res)=>
{
    const{active,_id}=req.body
    if(!_id)
        return res.status(400).json({message:'name is required'})
    const Catigory= await Catigories.findById(_id).exec()
    if(!Catigory)
        return res.status(400).json({message:'Catigory not found'})
        Catigory.active=active
        const updateCatigory=await Catigory.save()
        res.json(`${Catigory.name} updated`)
}
const deleteCatigory=async (req,res)=>
{
    const{_id}=req.body
   const Catigory=await Catigories.findById(_id).exec()
 if(!Catigory)
 return res.status(400).json({message:'Catigory not found'})
    const result=await Catigory.deleteOne()
    const replay =`Catigory '${result.name}' Id '${result.id}' deleted`
    res.json(replay)
}
const getCatigoryById=async (req,res)=>
{
    const {id}=req.params
    const Catigory =await Catigories.findById(id).lean()
    if(!Catigory)
    return res.status(400).json({message:'Catigory not found'})
    res.json(Catigory)
}
const updateCatigoryComplete=async(req,res)=>
{
    const {id}=req.params
    const Catigory= await Catigories.findById(id).exec()
    if(!Catigory)
    return res.status(400).json({message:'Catigory not found'})
    const updateCatigory=await Catigory.save()
    res.json(`'${updateCatigory.name}'updated`)
}
module.exports={
    createNewCatigory,
    getAllCatigory,
    updateCatigory,
    deleteCatigory,
    getCatigoryById,
    updateCatigoryComplete
}