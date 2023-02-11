import { degrees, PDFDocument} from "pdf-lib"
import path from 'path'
import crypto from 'crypto'
import fs from 'fs/promises'
import fs2 from 'fs'
//pasta origem 
let caminho = path.join(__dirname,'../../storage/downloads/etiqueta/')

async function read() {
    fs.readdir(path.join(caminho)).then(files=>{
    const _docBytesRead=files.filter(file=>file.endsWith('.pdf'))
      createPdf( _docBytesRead)
  })
}

async function createPdf(_docBytesRead) {
  console.log(_docBytesRead,"createPdf")
  for (let i = 0; i < _docBytesRead.length; i++) {
      const docBytes = await PDFDocument.create()

      const docBytes2 = await PDFDocument.load(fs2.readFileSync(`${caminho}${_docBytesRead[i]}`))
      const hash = crypto.randomBytes(4).toString('hex')
      const [tag] = await docBytes.embedPdf(docBytes2)
      const preamble  = await  docBytes.embedPage(docBytes2.getPage(1))
      const tagDims =tag.scale(1);
      const preambleDims = preamble.scale(1);
      const page = docBytes.addPage()

      page.drawPage(tag,{
        ...tagDims, 
        x:-250,
        y:842,
        width:595,
        height:842,
        rotate:degrees(-90)
      })

      page.drawPage(preamble,{
        ...preambleDims,
        x:0,
        y:-300,
        width:595,
         height:842
       })
       //pasta destino
        fs2.writeFileSync(`../../storage/downloads/etiqueta/output/${hash}_${_docBytesRead[i]}`,await docBytes.save())
 
     }
  console.log(`${_docBytesRead.length} etiqueta geradas`)
}
// read()
export default read
