const {Router}=require('express')
const {check}=require('express-validator')
const {validarToken}=require('../middlewares/validarToken')
const { validarCampos } = require("../middlewares/validar_campos");
const {getSubcategoria,postSubcategoria,putSubcategoria,deleteSubcategoria}=require('../controllers/subcategoria');
const {existeSubcategoriaById,existeCategoriaById} = require('../helpers/dbvalidator');
const categoria = require('../models/categoria');

const router=Router()

router.get('/',[
],getSubcategoria)


router.post('/',[
    validarToken,
    check('categoria').notEmpty(),
    check('categoria').custom(existeCategoriaById),
    check('name','El nombre es obligatorio').not().isEmpty(),
    validarCampos
],postSubcategoria)


router.put('/:id',[
    validarToken,
    check('id','El id no es valido').isMongoId(),
    check('id').custom(existeSubcategoriaById),
    check('name','El nombre es obligatorio').not().isEmpty(),
    validarCampos
],putSubcategoria)


router.delete('/:id',[
    validarToken,
    check('id','El id no es valido').isMongoId(),
    check('id').custom(existeSubcategoriaById),
    validarCampos
],deleteSubcategoria)


module.exports=router