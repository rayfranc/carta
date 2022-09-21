const express=require('express')
const cors=require('cors')
const path=require('path')
const {dbConnection}=require('../db/configdb')
const PORT=process.env.PORT



class Server{

    constructor(){
    this.app=express()
    this.DbConnect()
    this.Middlewares()
    this.Routes()
    this.Listen(PORT)
    }
    


    async DbConnect(){
   await dbConnection()
    }

    Routes(){
        this.app.use('/v1/auth',require('../routes/auth'))
        this.app.use('/v1/subcategoria',require('../routes/subcategoria'))
        this.app.use('/v1/producto',require('../routes/producto'))
        this.app.use('/',require('../routes/home'))
        }
    

Middlewares(){
    this.app.use(express.urlencoded({extended:false}))
    this.app.use(express.static(path.resolve(__dirname, '../public')))
    
    this.app.use(express.json())
    this.app.use(cors())
}

Listen(port){
    
    this.app.listen(port,()=>console.log(`Server on port ${port} `))
}

}

module.exports=Server