const {Schema,model}=require('mongoose')

const CategoriaSchema= Schema({
    
    name:{
        type:String,
        required:[true,'El nombre es obligatorio']
    },
    icon:{
        type:String,
        required:[true,'El icono es obligatorio']
    },
    negocio:{
        type:Schema.Types.ObjectId,
        ref:'Negocio',
        required:[true,'El negocio es requerido']
    }
})

module.exports=model('Categoria',CategoriaSchema)