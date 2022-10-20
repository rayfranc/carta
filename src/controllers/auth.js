const jwt=require('jsonwebtoken')

const logIn= async(req,res)=>{
  const {email,password}=req.body
  if(process.env.USER==email&&process.env.PASSWORD==password){
const token=jwt.sign({email},process.env.SECRETKEY,{
  expiresIn:'2h'
})


return res.json({
  message:'El usuario ah accedido con exito',
  token
})
}else{
  res.json({
    msg:'El usuario o contraseña son incorrectos'
  })
}
}




module.exports={
    logIn
}