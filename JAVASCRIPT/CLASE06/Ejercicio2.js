let obteniendoData = function(){
    let productos = [
        { identificador: '#123', precio: 500 },
        { identificador: '#124', precio: 3500 },
        { identificador: '#125', precio: 4000 },
        { identificador: '#126', precio: 1000 },
        { identificador: '#127', precio: 5000 },
    ]    
    return new Promise((resolve, reject) => {
        console.log('Obteniendo data...')
        setTimeout(()=> {
            resolve(productos)
        }, 5000)
    })
}

let filtradoDatos = function(productos){
    let productosFiltrados = productos.filter(value => value.precio > 3000)
    return productosFiltrados
}


let uploadData = function(){
    return new Promise((resolve, reject) => {
        console.log("Subiendo informacion...")
        setTimeout(() => {
            resolve("DATA ACTUALIZADA")
        }, 3000) 
    })
}


async function proceso(){
    let productos = await obteniendoData()
    console.log(productos)
    let filtrados = filtradoDatos(productos)
    console.log(filtrados)
    let result = await uploadData()
    console.log(result)    
}

proceso()







