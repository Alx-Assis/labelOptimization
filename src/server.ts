import dotenv from 'dotenv'
import express  from 'express'
// import read from '../index'
const read = require('../index.js')
import cors from 'cors'


dotenv.config()


const server  = express()
let PORT= process.env.PORT || 3000
server.use(cors())
server.use(express.json())

server.post('/api/v1/',async (request,response)=>{
   let {Path_1,Path_2}=request.body
   read()
  return response.json({menssage:"etiquetas geradas xom sucesso - pasta output"})

})

server.listen(PORT,()=>{
  console.log(`servidOr rodando  na porta ${PORT}`)
})
