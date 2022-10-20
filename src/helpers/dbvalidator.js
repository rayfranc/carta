const Subcategoria=require('../models/subcategoria')
const Categoria=require('../models/categoria')
const Negocio=require('../models/negocio')

 const existeCorreo=async(email='')=>{
    const existe= await Usuario.findOne({email})
    if(existe){
        throw new Error('El correo ya esta registrado')
    }
    }


   
    
    
    
    const existeSubcategoriaById=async(id="")=>{
        const subcategoria=await Subcategoria.findById({_id:id})
        if(!subcategoria){
            throw new Error(`La subcategoria de id(${id}) no existe`)
        }
    }

    const existeCategoriaById=async(id="")=>{
        const categoria=await Categoria.findById({_id:id})
        if(!categoria){
            throw new Error(`La categoria de id(${id}) no existe`)
        }
    }

    const existeNegocioById=async(id="")=>{
        const negocio=await Negocio.findById({_id:id})
        if(!negocio){
            throw new Error(`El negocio de id(${id}) no existe`)
        }
    }

    module.exports={
        existeCorreo,
        existeSubcategoriaById,
        existeCategoriaById,
        existeNegocioById,
    }