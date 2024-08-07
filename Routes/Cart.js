const express=require("express")
const {models} = require("mongoose")
const router=express.Router()
const veriftJWT=require("../Middlewere/verifyJWT")
const c= require("../Models/Cart")

const CartController=require("../Controllers/Cart")
router.use(veriftJWT)
router.post("/",CartController.addProdToCart)
router.put("/",CartController.updateCart)
router.delete("/",CartController.deleteProd)
router.get("/",CartController.getAllProducs)

module.exports=router