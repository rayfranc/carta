const Subcategoria=require('../models/subcategoria')

const getSubcategoria=async(req,res)=>{
const subcategorias=await Subcategoria.find()
.populate('categoria','nombre')
  res.json({
    subcategorias
})
}

const postSubcategoria=async(req,res)=>{
const {name,categoria}=req.body

const subcategoria=new Subcategoria({name,categoria})

try{
    await subcategoria.save();
    }
    catch(e){
    res.status(400).json({
    message:'Ha habido un error',
        e
        }
    )
    }


    return res.json(
        {
            message:'La subcategoria se ha insertado',
            subcategoria
        })
}

const putSubcategoria=async(req,res)=>{
    const {id}=req.params
    const {name}=req.body

 const subcategoria= await Subcategoria.findByIdAndUpdate(id,{name:name})
 res.json({
     message:'La subcategoria se ha actualizado con exito',
     subcategoria
 })
    }


    const deleteSubcategoria=async(req,res)=>{
        const {id}=req.params
        const subcategoria= await Subcategoria.findByIdAndDelete(id)
        res.json({
            message:'La subcategoria se ha eliminado con exito',
            subcategoria
        })
        }





module.exports={
    getSubcategoria,
    postSubcategoria,
    deleteSubcategoria,
    putSubcategoria
}