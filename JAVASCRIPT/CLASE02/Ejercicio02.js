let productos = []

let arreglo2 = [2,4,54,56,6,4,44,2]
              


const opProducto = (function(){

    function agregarProducto(){
        var nombre = prompt("Ingrese nombre del producto")     
        var cantidad = Number(prompt("Ingrese cantidad del producto"))   
        var prodExiste = existe(nombre, cantidad)         
        if(prodExiste == false){
            //SIGNIFICA QUE EL PRODUCTO NO EXISTE
            productos.push({ name: nombre, count: cantidad })
        } 
    }

    function existe(nombre, cantidad){                 
        for (const key in productos) {
           if(nombre == productos[key].name){             
                productos[key].count += cantidad
                return true
           }
        }
        return false
    }

    function ordenarProductos(){
        let criterio = (a, b) => a.count - b.count
        productos.sort(criterio)
    }

    function mostrarProductos(){
        console.clear()
        for (const key in productos) {
           console.log(productos[key])            
        }
    }

    return {
        agregarProducto,
        ordenarProductos,
        mostrarProductos
    }

})()


function menu(){
    do {
        alert("1. Agregar un nuevo producto\n2. Ordenar los productos\n3. Finalizar el programa")
        var mn = Number(prompt("Ingrese una opcion"))
        switch(mn){
            case 1:
                //Codigo para agregar un nuevo producto
                opProducto.agregarProducto()
                opProducto.mostrarProductos()
                break;
            case 2:
                //Codigo para ordenar los productos
                opProducto.ordenarProductos()
                opProducto.mostrarProductos()
                break;
            case 3:
                //Codigo para finalizar el programa
                alert("Hasta pronto :)")
                break;
            default:
                //Codigo para default
                alert("Opcion incorrecta, porfavor ingresa nuevos datos")
                break;
        }

    } while(mn != 3)
}

menu()

