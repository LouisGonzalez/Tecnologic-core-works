let misProductos = []

class Producto {

    constructor(nombreProducto, precio, noExistencia, categoria){
        this.nombreProducto = nombreProducto
        this.precio = precio
        this.noExistencia = noExistencia
        this.categoria = categoria
    }

}

function limpiarCajas(){
    document.getElementById('nombreproducto').value = ""
    document.getElementById('precio').value = ""
    document.getElementById('numexistencia').value = ""
    document.getElementById('categoria').value = ""
}

function guardarProducto(nombre, precio, noExistencia, categoria){



    let existe1 = existe(nombre)
    if(existe1 == -1){
        const prod = new Producto(nombre, precio, noExistencia, categoria)
        misProductos.push(prod)
    } else {
        alert('El producto ya existe actualmente dentro del inventario')

    }
}

function existe(nombreProd){
    for (const key in misProductos) {
        if(nombreProd == misProductos[key].nombreProducto){
            return key
        }
    }
    return -1
}

function filtrar(filtro){
    let filtro = prompt("Ingrese categoria a filtrar: ")
    let condicion = value => value.categoria == filtro
    let arregloFiltrado = misProductos.filter(condicion)
    console.log(arregloFiltrado)
}

function editarExistencias(){
    let prod = prompt("Ingrese nombre del producto: ")
    let nuevoExistencias = Number(prompt("Ingrese nuevo valor en las existencias"))
    let existe1 = existe(prod)
    if(existe1 == -1){
        alert("El producto no existe, por lo tanto no podemos editar")
    } else {
        misProductos[existe1].noExistencia = nuevoExistencias
    }
}

function editarPrecio(){
    let prod = prompt("Ingrese nombre del producto")
    let nuevoPrecio = Number(prompt("Ingrese nuevo valor para el precio"))
    let existe1 = existe(prod)
    if(existe1 == -1){
        alert('El producto no existe, por lo tanto no podemos editar')
    } else {
        misProductos[existe1].precio = nuevoPrecio
    }
}

document.getElementById('boton1').addEventListener('click', function(event){
    let nombreProd = document.getElementById('nombreproducto').value
    let precioProd = Number(document.getElementById('precio').value)
    let existenciaProd = Number(document.getElementById('numexistencia').value)
    let categoriaProd = document.getElementById('categoria').value
    guardarProducto(nombreProd, precioProd, existenciaProd, categoriaProd)
    console.log(misProductos)
    limpiarCajas()
}, false)




document.getElementById('boton2').addEventListener('click', function(event){
    
    filtrar()
}, false)

document.getElementById('boton3').addEventListener('click', function(event){
   editarExistencias()
}, false)

document.getElementById('boton4').addEventListener('click', function(event){
   editarPrecio()
}, false)


