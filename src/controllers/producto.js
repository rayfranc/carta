
const Producto=require('../models/producto')


const getProducto=async(req,res)=>{

    const productos=await Producto.find()
    res.json({
      productos
  })

}

const postProducto=async(req,res)=>{
    const {...prod}=req.body
   
    const producto=new Producto(prod)
    try{
       await producto.save()
    }catch(e){
        return res.json({
           message:'Ha habido un error',
           e
        })
    }
    return res.json({
        message:'El producto se ha insertado con exito',
        producto
    })
}
const deleteProducto=async(req,res)=>{
const {id}=req.params
try{
    const producto=await Producto.findByIdAndDelete(id)
    res.json({
        msg:'El producto se ha eliminado',
        producto
    })
}catch(error){
   return res.status(500).json({
        msg:'Error al eliminar'
    })
}
}
module.exports={
    getProducto,
    postProducto,
    deleteProducto
}