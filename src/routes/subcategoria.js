const {Router}=require('express')
const {check}=require('express-validator')
const {validarToken}=require('../middlewares/validarToken')
const { validarCampos } = require("../middlewares/validar_campos");
const {getSubcategoria,postSubcategoria,putSubcategoria,deleteSubcategoria}=require('../controllers/subcategoria');
const {existeSubcategoriaByNombre,existeSubcategoriaById,existeCategoriaById} = require('../helpers/dbvalidator');

const router=Router()

router.get('/',[
],getSubcategoria)


router.post('/',[
    validarToken,
    check('categoria').notEmpty(),
    check('name','El nombre es obligatorio').not().isEmpty(),
    check('name').custom(existeSubcategoriaByNombre),
    validarCampos
],postSubcategoria)


router.put('/:id',[
    validarToken,
    check('id','El id no es valido').isMongoId(),
    check('id').custom(existeSubcategoriaById),
    check('name','El nombre es obligatorio').not().isEmpty(),
    check('name').custom(existeSubcategoriaByNombre),
    validarCampos
],putSubcategoria)


router.delete('/:id',[
    validarToken,
    check('id','El id no es valido').isMongoId(),
    check('id').custom(existeSubcategoriaById),
    validarCampos
],deleteSubcategoria)


module.exports=router