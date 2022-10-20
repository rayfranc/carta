const {Schema,model}=require('mongoose')

const NegocioSchema= Schema({
    
    name:{
        type:String,
        required:[true,'El nombre es obligatorio']
    },
    logo:{
        type:String
    }
    
})

module.exports=model('Negocio',NegocioSchema)