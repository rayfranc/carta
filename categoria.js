const Categoria=require('../models/categoria')


const getCategoria=async(req,res)=>{
const categorias=await Categoria.find()
  res.json({
    categorias
})
}

const postCategoria=async(req,res)=>{
const {name, icon,negocio}=req.body
const categoria=new Categoria({name,icon,negocio})

try{
    await categoria.save();
    }
    catch(e){
    res.status(400).json({
    message:'Ha habido un error',
        e
        }
    )
    }
    
   const {_id}=categoria

    return res.json(
        {
            message:'La categoria se ha insertado',
            categoria:{
                _id,
                name,
                icon,
                negocio,
                subcategorias:[]
            }
        })
}

const putCategoria=async(req,res)=>{
    const {id}=req.params
    const {...data}=req.body
 const categoria= await Categoria.findByIdAndUpdate(id,data)
 res.json({
     message:'La Categoria se ha actualizado con exito',
     categoria
 })
    }


    const deleteCategoria=async(req,res)=>{
        const {id}=req.params
        const categoria= await Categoria.findByIdAndDelete(id)
        res.json({
            message:'La categoria se ha eliminado con exito',
            categoria
        })
        }





module.exports={
    getCategoria,
    postCategoria,
    deleteCategoria,
    putCategoria
}