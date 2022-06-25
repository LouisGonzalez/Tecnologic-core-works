const fs = require('fs')

// getCurrentFilenames()

// fs.rename('archivo.txt','nuevoNombre.txt', () => {
//     console.log('Archivo con el nombre actualizado')
//     getCurrentFilenames()
// })

// function getCurrentFilenames(){
//     console.log('Archivos actuales: ')
//     fs.readdirSync(__dirname).forEach(file => {
//         console.log(file)
//     })
// }

obtenerNombresArchivos()

fs.rename('archivo2.txt','nuevoNombre.txt', ()=> {
    console.log('El archivo fue renombrado con exito')
    obtenerNombresArchivos()
})


function obtenerNombresArchivos(){
    console.log("Archivos actuales: \n")
    fs.readdirSync(__dirname).forEach(file => {
        console.log(file)
    })
}