const express=require("express")
const {models} = require("mongoose")
const router=express.Router()
const veriftJWT=require("../Middlewere/verifyJWT")
const Custemer= require("../Models/Custemers")
const CustemerController=require("../Controllers/Custermers")
router.use(veriftJWT)
router.get("/",CustemerController.getAllCustemers)
router.get("/:id",CustemerController.getCustemerById)
router.post("/",CustemerController.createNewCustemer)
router.delete("/",CustemerController.deleteCustemer)
router.put("/",CustemerController.updateCustemer)
router.post("/",async(req,res)=>
{
    const {name}=req.body
    const cust =await Custemer.create({name:name});
    res.json(cust)
})
module.exports=router