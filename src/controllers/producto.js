
const Producto=require('../models/producto')

const Subcategoria=require('../models/subcategoria')

const getProducto=async(req,res)=>{
    
    const COCTELES= await Subcategoria.find({categoria:"COCTELES"})
    const TRAGOS= await Subcategoria.find({categoria:"TRAGOS"})
    const COMIDAS= await Subcategoria.find({categoria:"COMIDAS"})
    const productos= await Producto.find()
    .populate('subcategoria')
    const responsecoc=new Object()
    const responsetrag=new Object()
    const responsecom=new Object()
    
    COCTELES.map(({_id:id,name})=> {
        let result=[]
        productos.forEach(producto=>{
            const {subcategoria:{_id:idProd}}=producto
            if(JSON.stringify(id)==JSON.stringify(idProd)){
                
                result.push(producto)
            }
        }
        
        )
        responsecoc[name]=result
        
    });

    
    TRAGOS.map(({_id:id,name})=> {
        let result=[]
        productos.forEach(producto=>{
            const {subcategoria:{_id:idProd}}=producto
            if(JSON.stringify(id)==JSON.stringify(idProd)){
                
                result.push(producto)
            }
        }
        
        )
        responsetrag[name]=result
        
    });

    COMIDAS.map(({_id:id,name})=> {
        let result=[]
        productos.forEach(producto=>{
            const {subcategoria:{_id:idProd}}=producto
            if(JSON.stringify(id)==JSON.stringify(idProd)){
                
                result.push(producto)
            }
        }
        
        )
        responsecom[name]=result
        
    });

    res.json({
        "TRAGOS":responsetrag,
        "COMIDAS":responsecom,
        "COCTELES":responsecoc
    })


}

const postProducto=async(req,res)=>{
    const {...prod}=req.body
   
    const producto=new Producto(prod)
    try{
       await producto.save()
    }catch(e){
        res.json({
           message:'Ha habido un error',
           e
        })
    }
    res.json({
        message:'El producto se ha insertado con exito',
        producto
    })
}
const deleteProducto=async(req,res)=>{
const {id}=req.params
try{
    const producto=await Producto.findByIdAndDelete(id)
    res.json({
        msg:'El producto se ha eliminado',
        producto
    })
}catch(error){
    res.status(500).json({
        msg:'Error al eliminar'
    })
}
}
module.exports={
    getProducto,
    postProducto,
    deleteProducto
}