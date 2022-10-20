const {Router}=require('express')
const {check}=require('express-validator')
const {validarToken}=require('../middlewares/validarToken')
const { validarCampos } = require("../middlewares/validar_campos");
const {getNegocios,postNegocio, getArbolNegocio}=require('../controllers/negocio');
const router=Router()

router.get('/',[
    validarToken,
],getNegocios)

router.get('/:id',[
    validarToken
],getArbolNegocio)


router.post('/',[
    validarToken,
    check('name','El nombre es obligatorio').not().isEmpty(),
    validarCampos
],postNegocio)




module.exports=router