class Persona {

    constructor(nombre, edad , dni){
        this.nombre = nombre
        this.edad = edad
        this.dni = dni
    }

    saludar(){
        console.log("Hola, soy ",this.nombre+" tengo "+this.edad+" años")
    }

    caminar(){
        console.log("Hola, soy "+this.nombre+" y estoy caminando")
    }

    // get dni(){
    //     return this.dni
    // }    

}

let arreglo = []

let persona1 = new Persona('Francisco', 20, 234234)
let persona2 = new Persona('Emiliano', 25, 26543)

console.log(arreglo[1].nombre)

persona1.saludar()
persona2.saludar()
