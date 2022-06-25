


// console.log("Hola mundo normal")
// setTimeout(function(){
//     console.log("Hola mundo con retraso")
// }, 2000)
// console.log("Segundo hola mundo normal")
const readline = require("readline")
fs = require('fs')
NOMBRE = "archivo.txt"
let lector = readline.createInterface({
    input: fs.createReadStream(NOMBRE)
})

lector.on("line", linea => {
    console.log("Tenemos una linea: ",linea)
})