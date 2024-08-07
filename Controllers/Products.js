const Product =require("../Models/Products")
const createNewProduct= async(req,res)=>
{
    const{amountInCart,name,catgory,code,price,icon,tags,productionDate,status,image}=req.body
    if(!name||!code||!price)
    return res.status(400).json({message:'Field are required'})

const prod=await Product.create({amountInCart,name,catgory,code,price,icon,tags,productionDate,status,image})
if(prod)
    return res.status(201).json({message:'New product created'})
else
    return res.status(400).json({message:'Invalid Product'})
}
const getAllProduct=async (req,res)=>
{
    const{amountInCart,name,catgory,code,price,icon,tags,productionDate,status,image}=req.body
    const prods=await Product.find().lean()
if(!prods?.length)
    return res.status(400).json({message:'No Products found'})
res.json(prods)
}
const updateProduct=async (req,res)=>
{
    const{_id,name,catgory,code,price,icon,tags,productionDate,status,image}=req.body
    if(!_id)
        return res.status(400).json({message:'Fields are required'})
    const prod= await Product.findById(_id).exec()
    if(!prod)
        return res.status(400).json({message:'Product not found'})
        prod.catgory=catgory
        prod.name=name
        prod.code=code
        prod.price=price
        prod.tags=tags
        prod.icon=icon
        prod.productionDate=productionDate
        prod.status=status;
        prod.image=image
        const updateProduct=await prod.save()
        res.json(`'${updateProduct.name}' updated`)
}
const deleteProduct=async (req,res)=>
{
    const{_id}=req.body
   const prod=await Product.findById(_id).exec()
 if(!prod)
 return res.status(400).json({message:'Product not found'})
    const result=await prod.deleteOne()
    const replay =`Product '${result.name}' Id '${result.catgory}' deleted`
    res.json(replay)
}
const getProductById=async (req,res)=>
{
    const {id}=req.params
    const prod =await Product.findById(id).lean()
    if(!prod)
    return res.status(400).json({message:'Product not found'})
    res.json(prod)
}

module.exports={
    getProductById,
    deleteProduct,
    updateProduct,
    getAllProduct,
    createNewProduct
}