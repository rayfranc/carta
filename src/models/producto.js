const {Schema,model}=require('mongoose')

const ProductoSchema=Schema({

    name:{
        type:String,
        required:[true,'El nombre es obligatorio'],
        unique:true
    },
    desc:{
        type:String,
    },
    price:{
        type:Number,
        require:[true,'El precio es obligatorio']
    },
    subcategoria:{
        type:Schema.Types.ObjectId,
        ref:'Subcategoria',
        require:true
    }

})

module.exports= model('Producto',ProductoSchema)