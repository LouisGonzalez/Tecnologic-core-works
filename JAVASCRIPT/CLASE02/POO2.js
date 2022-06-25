function Persona(nombre, edad, dni){

    //publicas
    this.nombre = nombre
    this.edad = edad
    //privada
    let _dni = dni

    this.saludar = function(){
        console.log("Hola, soy ",this.nombre+" tengo "+this.edad+" años")
    }

    this.caminar = function(){
        console.log("Hola, soy "+this.nombre+" y estoy caminando")
    }

    this.getDNI = function(){
        return _dni
    }

}




let persona1 = new Persona("Raul Arango", 20, 9999)
let persona2 = new Persona("Juana Mejia", 32, 11111)

persona1.saludar()
persona2.saludar()





