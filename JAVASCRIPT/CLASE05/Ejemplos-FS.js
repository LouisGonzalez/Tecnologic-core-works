const fs = require('fs')
const path = require('path');
// fs.readdir('/', function(err, archivos){
//     if(err){
//         onerror(err)
//         return;
//     }
//     console.log(archivos)
// })

// fs.readdir('\\Users\\', (err, files) => {
//     if(err){
//         onerror(err)
//         return;
//     }
//     files.forEach(file => {
//         if(fs.lstatSync(path.resolve('\\Users\\', file)).isDirectory()){
//             console.log('Directory: '+file)
//         } else {
//             console.log('File: '+file)
//         }
//     })
// })

//---------------------------------EJEMPLO FS READFILE ASINCRONO
// fs.readFile('archivo.txt','utf-8', (err, data) => {
//     if(err){
//         console.log('error: ',err)
//     } else {
//         console.log(data)
//     }
// })

//----------------------------------EJEMPLO FS READLINE SINCRONO
// let archivo = fs.readFileSync('archivo.txt','utf-8')
// console.log(archivo)

//---------------------------------EJEMPLO FS READLINE SINCRONO Y ASINCRONO
// fs.readFile('archivo-inexistente.txt','utf-8', (err, data)=> {
//     if(err){
//         console.log('error: ',err)
//     } else {
//         console.log(data)
//     }
// })
// console.log('esto se ejecuta antes que este el archivo')

// let archivo = fs.readFileSync('archivo2.txt', 'utf-8')
// console.log(archivo)

// console.log('Esto se muestra despues de haber leido el archivo2.txt por el readFileSync')


//---------------------------------EJEMPLO PARA AGREGAR TEXTO A UN ARCHIVO #1  ASINCRONO
// let nuevoTexto = 'Aqui estoy agregando nuevo texto'

// fs.appendFile('archivo2.txt', nuevoTexto, function(err){
//     if(err){
//         console.log('Ha ocurrido un error')
//     } else {
//         console.log('Informacion agregada')
//     }
// })

//-----------------------------------EJEMPLO PARA AGREGAR TEXTO A UN ARCHIVO #2  WRITE->  SINCRONO
// var logger = fs.createWriteStream('archivo2.txt', {
//     flags: 'a'
// })

// logger.write('algo de datos #1\n')
// logger.write('algo de datos #2\n')
// logger.write('algo de datos #3\n')

// logger.end()

//-----------------------------------EJEMPLO PARA AGREGAR TEXTO A UN ARCHIVO #3 WRITEFINE -> ASINCRONO

// let texto = 'Este es el texto que quiero agregar'+
//             'a mi archivo'

// fs.writeFile('archivo2.txt', texto, (err) => {
//     if(err){
//         console.log('Ha ocurrido un error')
//     } else {
//         console.log('Todo OK!')
//     }
// })   

//-----------------------------------EJEMPLO PARA AGREGAR TEXTO A UN ARCHIVO #4 WRITEFILESYNC -> SINCRONO

let texto = 'Este es el texto que quiero agregar'+
            'a mi archivo'+
            'ESTE TREXTO ES PARA TEMRINAR'

fs.writeFileSync('archivo222.txt', texto)   



//-----------------------------------EJEMPLO CREATE WRITE STREAM -- PARA ARCHIVOS DE TEXTO MUY GRANDES

// let writeStream = fs.createWriteStream('archivo2.txt')

// writeStream.write('asfaslfjsdf\n','base64')
// writeStream.write('asfaslfjsdf222','utf-8')

// writeStream.on('finish', () => {
//     console.log("Se escribio toda la data en el archivo")
// })

// writeStream.end()


