// function conseguirProductos(){
//     return new Promise((resolve, reject) => {
//         console.log("Cargando datos")

//         setTimeout(() => {
//             resolve({nombre: "Jabon", precio: "3000"})
//         }, 3000)
//     })
// }

// async function consiguiendoPromesa(){
//     let miPromesa = await conseguirProductos()
//     console.log(miPromesa)
// }

// consiguiendoPromesa()


//ASYNC - AWAIT

// function obteniendoInformacion(){
//     return new Promise((resolve, reject) => {
//         console.log('Obteniendo informacion...')
//         setTimeout(() => {
//             resolve({ name: "Juan", edad: "29" })
//         }, 3000)        

//     })    
// }

obteniendoInformacion().then((data) => {
    console.log(data)
}).catch(() => {
    console.log("Algo salio mal")
})


async function verResultado(){
    let resultado = await obteniendoInformacion()
}

// verResultado()

//CALLBACK HELL
getInformacion('db1', (data) => {
    console.log('data obtenida')
    editarInformacion('db1', () => {
        console.log('edicion terminada')
        actualizarInformacion('db1', () => {
            console.log('actualizacion terminada')


        })
    })
})

async function proceso(){
    let misDatos = await getInformacion()
    let editarInfo = await editarInformacion(misDatos)
    let actualizacion = await actualizarInformacion(editarInfo)
}

