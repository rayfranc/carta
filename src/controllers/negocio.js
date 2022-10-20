const Negocio=require('../models/negocio')
const CategoriaSchema=require('../models/categoria')
const SubcategoriaSchema=require('../models/subcategoria')
const subcategoria = require('../models/subcategoria')


const getNegocios=async(req,res)=>{
  const negocios= await Negocio.find()
 return res.json({
    negocios
 })
}

const getArbolNegocio=async(req,res)=>{
    const {id:id}=req.params
    
    
    const  categorias= await CategoriaSchema.find({negocio:id})
    const subcategAdd= await AddSubcategorias(categorias)
    
     return res.json({
       categorias:subcategAdd
     })
     
     


    
    
}

const postNegocio=async(req,res)=>{
    const data=req.body
    const negocio= new Negocio(data)
    try{
    negocio.save()
}catch(e){
    return res.status(500).json({
        msg:"Error al guardar negocio",
        e
    })
    
}

return res.json({
    msg:"El negocio se inserto con exito",
    negocio
})
}







//Funciones auxiliares
const AddSubcategorias=async(arr)=>{
    const  subcArr =arr.map(c=>SubcategoriaSchema.find({categoria:c._id}))
    
    const resolved=await Promise.all(subcArr)
    console.log(resolved)

    const subAdd = arr.map(({_doc},i)=>{
    _doc.subcategorias=resolved[i]
    return new Object(_doc)})
   
   
    return subAdd

}

const addProductos=()=>{


}


module.exports={
    getNegocios,
    postNegocio,
    getArbolNegocio
}
