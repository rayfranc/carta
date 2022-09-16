const mongoose=require('mongoose')

const dbConnection=async ()=>{

try{

await mongoose.connect(process.env.MONGO_DB_CNN);

console.log('Base de Datos Online')
}catch(e){
    console.log(e)
    throw new Error("Error en conectar a la base de datos")
}




}


module.exports={
    dbConnection
}