class Persona {

    constructor(nombres, apellidos, edad){
        this.nombres = nombres
        this.apellidos = apellidos
        this.edad = edad
    }

    saludar(){
        console.log("Hola buen dia soy ",this.nombres)
    }

}

class Alumno extends Persona {

    constructor(nombres, apellidos, edad, grado){
        super(nombres, apellidos, edad)
        this.grado = grado
    }

    estudiar(){
        console.log("Estoy estudiando ")
    }

}

class Profesor extends Persona {

    constructor(nombres, apellidos, edad, curso){
        super(nombres, apellidos, edad)
        this.curso = curso
    }

    impartirCurso(){
        console.log('Estoy impartiendo el curso de ',this.curso)
    }

}


//CREANDO ALUMNOS
let alumno1 = new Alumno("Raul","Quinteros",16,'5to primaria')
//CREANDO PROFESORES
let profesor1 = new Profesor("Juan","Olivera",49,'Ciencias Naturales')

let persona1 = new Persona("Maria","Quintana",34)

alumno1.saludar()
alumno1.estudiar()
profesor1.saludar()
profesor1.impartirCurso()
persona1.saludar()

