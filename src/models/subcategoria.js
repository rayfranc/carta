const {Schema,model}=require('mongoose')

const SubCatSchema=Schema({

    name:{
        type:String,
        required:[true,'El nombre es obligatorio'],
        unique:true
    },
    categoria:{
        type:Schema.Types.ObjectId,
        ref:'Categoria',
        require:true
    }

})

module.exports= model('Subcategoria',SubCatSchema)