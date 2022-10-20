const {Router}=require('express');
const {check}=require('express-validator')
const {logIn}=require('../controllers/auth')
const {validarCampos}=require('../middlewares/validar_campos')
const router=Router()

router.post('/login',[
  check('email','El correo no es valido').isEmail(),
  check('password','El password no es valido').not().isEmpty(),
  validarCampos,
],logIn);










module.exports=router