//--------------------------------------------Eliminando un archivo de forma sincrona 
// const fs = require('fs')

// try {
//     fs.unlinkSync('./nuevoNombre.txt')
//     console.log('File removed')
// } catch(err){
//     console.error('Algo malo ha ocurrido al momento de intentar eliminar el archivo', err)
// }


//---------------------------------------------Eliminando un archivo de forma asincrona
// const fs = require('fs').promises

// fs.unlink('./nuevoNombre.txt')
//     .then(() => {
//         console.log('Archivo removido en su totalidad')   
//     }).catch((err) => {
//         console.error('Algo malo ha ocurrido al momento de intentar eliminar el archivo ',err)
//     });

//--------------------------------------------Eliminar varios archivos a la vez
// const fs = require('fs').promises

// const files = [
//     './nuevoNombre.txt',
//     './archivo1-Ejercicio02.txt',
//     './archivo2-Ejercicio02.txt'
// ]

// Promise.all(files.map(file => fs.unlink(file)))
//     .then(() => {
//         console.log("Todos los archivos fueron removidos")
//     })
//     .catch(err => {
//         console.error('Algo malo ha ocurrido, porfavor intenta otra vez', err)
//     })

setTimeout(() => {
    
}, 5000);
