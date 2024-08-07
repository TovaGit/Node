const express=require("express")
const {models} = require("mongoose")
const router=express.Router()
//const veriftJWT=require("../Middlewere/verifyJWT")
const Product= require("../Models/Products")

const ProductController=require("../Controllers/Products")
//router.use(veriftJWT)
router.get("/",ProductController.getAllProduct)
router.get("/:id",ProductController.getProductById)
router.post("/",ProductController.createNewProduct)
router.delete("/",ProductController.deleteProduct)
router.put("/",ProductController.updateProduct)
router.post("/",async(req,res)=>
{
    const {name}=req.body
    const prod =await Product.create({name:name});
    res.json(prod)
})
module.exports=router