const express = require ('express')
const cors = require ('cors')
const rotas = require ('./routes/rotas')
const api = express()

api.use(cors())
api.use(express.json())
api.use('/calculadora', rotas)

api.listen(5000, ()=>{
    console.log("API rodando.")
})