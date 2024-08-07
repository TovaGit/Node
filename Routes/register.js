const express=require("express")
const router=express.Router()
const LoginRegister=require("../Controllers/LoginRegister")
router.post("/login",LoginRegister.login)
router.post("/register",LoginRegister.register)
module.exports=router