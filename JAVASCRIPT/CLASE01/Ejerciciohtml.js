
var biblioteca = []   

function exist(libro){                  
    for (const key in biblioteca) {
        if(biblioteca[key] == libro){
            return true;
        }
    }
    return false;
}


do {
    var menu1 = Number(prompt("1. Ingresar libro al sistema\n2. Salir del programa\nIngrese una opcion:"))
    if(menu1 == 1){
        var libro = prompt("Ingrese el nombre del libro")       
        var existe = exist(libro)           
        if(existe == true){
            //El libro existe
            console.log("El libro ya existe en mi biblioteca")
        } else {
            //El libro no existe
            biblioteca.push(libro)
        }
        console.log(biblioteca)

    } else if(menu1 == 2){

    } else {
        alert("Ha ingresado una opcion incorrecta, porfavor intente de nuevo.")
    }

} while(menu1 != 2)