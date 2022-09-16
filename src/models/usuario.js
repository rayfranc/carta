const {Schema,model}=require('mongoose')

const UsuarioSchema=Schema({
    email:{
        type:String,
        required:[true,'El correo es obligatorio'],
        unique:true
    },
    password:{
        type:String,
        require:[true,'La  contraseña es obligatoria']
    }


})

UsuarioSchema.methods.toJSON=function (){

   const {__v,...usuario}= this.toObject()
return usuario
}


module.exports= model('Usuario',UsuarioSchema)