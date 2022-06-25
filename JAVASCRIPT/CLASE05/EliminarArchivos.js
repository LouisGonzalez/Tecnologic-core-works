//const fs = require('fs')


//-----------------------------------ELIMINAR ARCHIVOS DE FORMA SINCRONA
// try{
//     fs.unlinkSync('./archivo2ss.txt')
//     console.log('Archivo eliminado')
// }catch(error){
//     console.log("Algo ha salido mal ",error)
// }

//------------------------------------ELIMINAR ARCHIVOS DE FORMA ASINCRONA
// const fs = require('fs').promises


// fs.unlink('./prueba.txt')
//     .then(() => {
//         console.log('Archivo eliminado ')
//     }).catch((error) => {
//         console.log('Algo ha ocurrido de manera erronea ',error)
//     })

//-----------------------------------ELIMINAR VARIOS ARCHIVOS DE FORMA ASINCRONA
// const fs = require('fs').promises

// let archivos = [
//     './equis.js',
// ]

// Promise.all(archivos.map(file => fs.unlink(file)))
//     .then(() => {
//         console.log("Todos los archivos se han eliminado con exito")
//     }).catch((error) => {
//         console.log('Algo ha ocurrido mal ',error)
//     })

