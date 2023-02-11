import express  from 'express'
import read from './index' 
import cors from 'cors'

const server  = express()

server.use(cors())
server.use(express.json())

server.post('/api/v1/',async (request,response)=>{
   let {Path_1,Path_2}=request.body
   read()
  return response.json({menssage:"etiquetas geradas xom sucesso - pasta output"})

})
server.get('/api/v1/',(request,response)=>{
  return response.json({menssage:"etiquetas geradas xom sucesso - pasta output"})

})

server.listen(3000,()=>{
  console.log('servidir rodando  na porta 3000')
})
