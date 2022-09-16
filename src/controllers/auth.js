const jwt=require('jsonwebtoken')
const  bcrypt=require('bcryptjs')
const Usuario=require('../models/usuario')

const logIn= async(req,res)=>{
  const {_id:id,...usuario}=req.usuario

const token=jwt.sign({id},process.env.SECRETKEY,{
  expiresIn:'2h'
})


return res.json({
  message:'El usuario ah accedido con exito',
  usuario,
  token
})

}

const  singUp= async(req,res)=>{
  const {email,password}=req.body

  const exist= await Usuario.findOne({email})
  if(exist){
      console.log(exist)
      return res.json({
          msg:'El correo ya esta registrado'
      })
  }
  const usuario=new Usuario({email})
  const salt =bcrypt.genSaltSync()
 
  usuario.password=bcrypt.hashSync(password,salt)

  try{
  await usuario.save();
  }
  catch(e){
  return res.status(400).json({
  message:'Ha habido un error',
      e
      }
  )
  }
  return res.status(201).json(
  {
      message:'El usuario se ha insertado',
      usuario
  })
}

module.exports={
    logIn,
    singUp
}