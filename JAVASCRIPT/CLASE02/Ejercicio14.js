
function existe(nombre){                    //nombre = kiwi
    for (const key in arreglo) {            //key = 3
        if(nombre == arreglo[key].nombre){
            return key      //1
        }
    }
    return -1
}

let posicion = existe(nombre)       //posicion = 1
if(posicion == -1){
    //no existe
} else {
    arreglo[posicion].existencia = nuevoValor

}

