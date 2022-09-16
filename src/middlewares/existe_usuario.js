const bcrypt=require('bcryptjs')
const Usuario=require('../models/usuario')


const existUserByEmail= async(req,res,next)=>{
const {email,password}=req.body
const usuario= await Usuario.findOne({email})
if(!usuario){
    return res.status(400).json({
        message:'El correo o contraseña no son validos',
        
    })
}

if(!(bcrypt.compareSync(password,usuario.password))){
    return res.status(400).json({
        message:'El correo o contraseña no son validos'
    })
}

const {password:pass,...user}=usuario.toJSON();
req.usuario=user;

next()


}






module.exports={
    existUserByEmail
}