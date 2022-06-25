const fs = require('fs')
const readline = require('readline')

let NOMBRE_ARCHIVO = './archivo.txt'

let lector = readline.createInterface({
    input: fs.createReadStream(NOMBRE_ARCHIVO)
})

lector.on('line', linea => {
    console.log(linea)
})