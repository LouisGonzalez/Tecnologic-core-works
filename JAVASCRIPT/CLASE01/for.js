var arreglo = ["Lunes","Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"]


function exist(){
    for(x in arreglo){
        if(arreglo[x] == "Lunes"){
            return true
        }
        
    }
    return false
}



