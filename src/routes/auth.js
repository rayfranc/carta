const {Router}=require('express');
const {check}=require('express-validator')
const {logIn,singUp}=require('../controllers/auth')
const {validarCampos}=require('../middlewares/validar_campos')
const {existeCorreo}=require('../helpers/dbvalidator')
const {existUserByEmail}=require('../middlewares/existe_usuario')
const router=Router()

router.post('/login',[
  check('email','El correo no es valido').isEmail(),
  check('password','El password no es valido').not().isEmpty(),
  validarCampos,
existUserByEmail
],logIn);



router.post('/signup',[
    check("email", "El correo no es valido").isEmail(),
    check("email").custom(existeCorreo),
    check("password", "El password deve tener al menos 6 caracteres").isLength({
      min: 6,
    }),
    check(
      "password",
      "El password es muy debil"
    ).isStrongPassword(),
    validarCampos,
],singUp)






module.exports=router