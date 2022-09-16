const Usuario =require('../models/usuario')

const Subcategoria=require('../models/subcategoria')


 const existeCorreo=async(email='')=>{
    const existe= await Usuario.findOne({email})
    if(existe){
        throw new Error('El correo ya esta registrado')
    }
    }


   
    
    const existeSubcategoriaByNombre=async(nomb)=>{
        const nombre=nomb.toUpperCase()
      const subcategoria= await Subcategoria.findOne({nombre:nombre})
      if(subcategoria){
          throw new Error(`La subcategoria ${nombre} ya existe`)
      }     
    }
    
    const existeSubcategoriaById=async(id)=>{
        const subcategoria=await Subcategoria.findById({_id:id})
        if(!subcategoria){
            throw new Error(`La subcategoria de id(${id}) no existe`)
        }
    }

    module.exports={
        existeCorreo,
        existeSubcategoriaById,
        existeSubcategoriaByNombre
    }