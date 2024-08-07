const Cart =require("../Models/Cart")
const Products =require("../Models/Products")
const addProdToCart= async(req,res)=>
{
const{Product}=req.body
if(!Product)
  return res.status(400).json({message:'Product is required'})
const found =await Products.findById(Product)
if(!found||found.status!="exist")
  return res.status(400).json({message:'This product does not exist!'})
const prodInCart = await Cart.findOne({ Custemer: req.user._id, Product: Product });
if (prodInCart) 
{
  prodInCart.amountInCart += 1;
  await prodInCart.save();
  return res.status(201).json({ message: 'Product quantity updated' });
}
else 
{
  const prodInCart = await Cart.create({Product,Custemer:req.user._id})
  if(prodInCart)
      return res.status(201).json({message:'New Product added'})
  else
      return res.status(400).json({message:'Fiald :('})
}
}
const getAllProducs=async (req,res)=>
{
//    const prod=await Cart.find({Custemer:req.user._id},{createdAt:0,updatedAt:0,__v:0,Custemer:0})
//   .populate("Product",{name:1,_id:0,price:1,amountInCart:1,catgory:1})
  const prod = await Cart.find({ Custemer: req.user._id }, { _id:0,createdAt: 0, updatedAt: 0, __v: 0, Custemer: 0 })
  .populate({
    path: "Product",
    select: "-_id name price amountInCart",
    populate: {
      path: "catgory",
      select: "-_id name",

    }
  });
if(!prod)
  return res.status(400).json({message:'No Product found'})
res.json(prod)
}

const updateCart=async (req,res)=>
{
    const{amountInCart,_id}=req.body
    if(!_id||!amountInCart)
        return res.status(400).json({message:'Fields are required'})
    const cart= await Cart.findById(_id)
    if(!cart)
        return res.status(400).json({message:'Product not found'})
      cart.amountInCart=amountInCart
      await cart.save()
      const prod=await Cart.find({ Custemer: req.user._id },{_id:0,amountInCart:0,createdAt:0,updatedAt:0,__v:0,Custemer:0}).populate("Product",{name:1,_id:0})
      res.json(`${prod} updated`)
}

const deleteProd=async (req,res)=>
{
  const{_id}=req.body
  const prod=await Cart.findById(_id).exec()
  if(!prod)
    return res.status(400).json({message:'prod not found'})
  const del=await Cart.find({ Custemer: req.user._id },{_id:0,amountInCart:0,createdAt:0,updatedAt:0,__v:0,Custemer:0}).populate("Product",{name:1,_id:0})
  await prod.deleteOne()
  res.json(`${del} deleted`)

} 
module.exports={
    addProdToCart,
    getAllProducs,
    updateCart,
    deleteProd,
}