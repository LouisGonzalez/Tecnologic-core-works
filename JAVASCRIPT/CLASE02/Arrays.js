//Ejercicio

let productos = []


function menu(){
    do {
        alert("1. Agregar un producto\n2. Ordenar los productos actuales\n3. Finalizar el programa")
        var mn = Number(prompt("Ingrese una opcion:"))
        
        switch(mn){
            case 1:
                console.clear()
                agregar()
                mostrarDatos()
                break;
            case 2:
                ordenar()
                mostrarDatos()
                break;
            case 3:
                alert("Nos vemos")
                break;
            default:
                alert("Has ingresado una opcion erronea, porfavor intenta mas tarde")
                break;
        }
    } while(mn != 3)

}

function agregar(){
    let nombreProducto = prompt("Ingrese nombre del producto")
    let total = Number(prompt("Ingrese cantidad del producto"))
    let existe = exist(nombreProducto, total)
    if(existe == false){
        productos.push({ nombre: nombreProducto, contador: total })
    } 
}

function ordenar(){
    let criterio = (a,b) => a.contador - b.contador
    productos.sort(criterio)

}

function exist(nombreProducto, total){
    for (const key in productos) {
        if(nombreProducto == productos[key].nombre){
            productos[key].contador += total
            return true
        }
    }
    return false
}

function mostrarDatos(){
    for (const key in productos) {
        console.log(productos[key])
    }
}

menu()