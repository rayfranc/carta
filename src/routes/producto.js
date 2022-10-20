const {Router}=require('express')
const {check}=require('express-validator')
const {validarToken}=require('../middlewares/validarToken')
const { validarCampos } = require("../middlewares/validar_campos");
const { existeSubcategoriaById } = require('../helpers/dbvalidator');
const { getProducto, postProducto, deleteProducto } = require('../controllers/producto');
const router=Router()

router.get('/',[

],getProducto)




router.post('/',[
   validarToken,
    check('name','El nombre es obligatorio').notEmpty(),
    check('subcategoria','La subcategoria no es valida').isMongoId(),
    check('subcategoria').custom(existeSubcategoriaById),
    check('price','El precio no es valido').isFloat(),
    validarCampos
],postProducto)


router.delete('/:id',[
    validarToken,
    check('id','El id no es valido').isMongoId(),
    validarCampos
],deleteProducto)



module.exports=router