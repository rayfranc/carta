const {Router}=require('express')
const {check}=require('express-validator')
const {validarToken}=require('../middlewares/validarToken')
const { validarCampos } = require("../middlewares/validar_campos");
const {getCategoria,postCategoria,putCategoria,deleteCategoria}=require('../controllers/categoria');
const { existeCategoriaById,existeNegocioById} = require('../helpers/dbvalidator');
const router=Router()

router.get('/',[
    validarToken,
],getCategoria)


router.post('/',[
    validarToken,
    check('negocio').custom(existeNegocioById),
    check('name','El nombre es obligatorio').not().isEmpty(),
    check('icon','El icono es obligatorio').notEmpty(),
    validarCampos
],postCategoria)


router.put('/:id',[
    validarToken,
    check('id','El id no es valido').isMongoId(),
    check('id').custom(existeCategoriaById),
    validarCampos
],putCategoria)


router.delete('/:id',[
    validarToken,
    check('id','El id no es valido').isMongoId(),
    check('id').custom(existeCategoriaById),
    validarCampos
],deleteCategoria)


module.exports=router