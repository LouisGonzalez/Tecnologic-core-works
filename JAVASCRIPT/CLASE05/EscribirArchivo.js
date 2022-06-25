const fs = require('fs')

//---------------------AGREGAR TEXTO A ARCHIVO CON APPENDFILE
// let texto = "Este es el nuevo texto\nque quiero agregar\n a mi archivo numero2\n mediante appendfile"


// fs.appendFile('archivfsdo2.txt',texto,(error) => {
//     if(error){
//         console.log('Error: ',error)
//     } else {
//         console.log("El archivo fue modificado con exito")
//     }
// })

//---------------------AGREGAR TEXTO A UN ARCHIVO CON CREATEWRITESTREAM

// var logger = fs.createWriteStream('archivo2ss.txt', {
//     flags: 'a'      //append -> agregar
// })

// logger.write("\ntexto 1\n")
// logger.write("texto 2\n")
// logger.write("texto 3\n")
// logger.write("texto 4\n")
// logger.write("texto 5\n")
// logger.write("texto 6\n")
// logger.write("texto 7\n")

// logger.end()

//------------------------AGREGAR TEXTO BORRANDO EL ANTERIOR CON WRITEFILE ASINCRONO

// let texto = "Especificamos el nombre del archivo, junto con loscaracteres a escribir, así como una función de devoluciónde llamada para ejecutar cuando el método regrese.\n"+
//  "También podemos pasar un objeto o cadena de opcionesque especifique la codificación a usar, así como el modo yla bandera.\n"+
//  "Tenga en cuenta que si el archivo aún no existe, llamar aeste método también creará el archivo, por lo que no tieneque preocuparse por eso."


// fs.writeFile('archivo1-Ejercicio02.txt', texto, (err) => {
//     if(err){
//         console.log("Error: ",err)
//     } else {
//         console.log("Todo en orden, archivo modificado con exito")
//     }
// })


//---------------------------AGREGAR TEXTO BORRANDO EL ANTERIOR CON WRITEFILE SINCRONO

//fs.writeFileSync('archivo2-Ejercicio02.txt', texto)

//---------------------------ESCRIBIENDO EN UN ARCHIVO MEDIANTE CREATE WRITE STREAM

// let create = fs.createWriteStream('archivo2.txt')

// create.write('asasdas\n','utf-8')

// create.write('cfdggdf','utf-8')

// create.on('finish', () => {
//     console.log('He terminado de trabajar con el archivo')
// })

// create.end()


// var texto = 'texto1\ntexto2\ntexto3\ntexto4'

// var textos = [
//     'sdf',      //0
//     'afsdafd',  //1
//     'ewtewt'    //2
// ]

// for(let i = 1; i <= 3; i++){
//     fs.writeFileSync('./carpeta'+i+'/texto.txt', textos[i-1])
// }

fs.rmdirSync('./carpeta2')
fs.rmdirSync('./carpeta3')
