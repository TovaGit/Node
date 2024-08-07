const express=require("express")
const {models} = require("mongoose")
const router=express.Router()
//const veriftJWT=require("../Middlewere/verifyJWT")
const Catigories= require("../Models/Catigories")
const CatigoreyController=require("../Controllers/Catigorey")

router.get("/",CatigoreyController.getAllCatigory)
router.get("/:id",CatigoreyController.getCatigoryById)
router.post("/",CatigoreyController.createNewCatigory)
router.delete("/",CatigoreyController.deleteCatigory)
router.put("/",CatigoreyController.updateCatigory)
router.post("/",async(req,res)=>
{
    const {name}=req.body
    const Catigorey =await Catigories.create({name:name});
    res.json(Catigorey)
})
module.exports=router