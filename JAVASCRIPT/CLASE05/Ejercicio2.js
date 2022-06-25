const fs = require('fs')

//FORMA ASINCRONA - Archivo 1

let texto = "\nEste archivo se sobreescribio de manera asincrona:\n"+
            "texto 2\n"+
            "texto 3\n"+
            "texto 4\n"+
            "texto 5\n"+
            "texto 6\n"+
            "texto 7\n"+
            "texto 8\n"+
            "texto 9\n"+
            "texto 10\n"

fs.appendFile('archivo1-Ejercicio02.txt', texto, (err) => {
    if(err){
        console.log('Error: ',err)
    } else {
        console.log("El archivo archivo1-Ejercicio02.txt fue modificado exitosamente")
    }
})

//FORMA SINCRONA - Archivo 2
var logger = fs.createWriteStream('archivo2-Ejercicio02.txt', {
    flags: 'a'
})

logger.write("\nEl archivo archivo2-Ejercicio02.txt fue modificado con exito de manera sincrona\n")
logger.write("texto sincrono 1\n")
logger.write("texto sincrono 2\n")
logger.write("texto sincrono 3\n")
logger.write("texto sincrono 4\n")
logger.write("texto sincrono 5\n")
logger.write("texto sincrono 6\n")
logger.write("texto sincrono 7\n")
logger.write("texto sincrono 8\n")
logger.write("texto sincrono 9\n")

logger.end()

