class Persona{

    constructor(nombres, apellidos){
        this.nombres = nombres
        this.apellidos = apellidos
    }

    caminar(){
        console.log('Estoy caminando')
    }
}

class Alumno extends Persona{

    constructor(nombres, apellidos, grado){
        super(nombres, apellidos)
        this.grado = grado
    }

    estudiar(){
        console.log('Estoy estudiando')
    }

}

alumno1 = new Alumno('Manuel','Gonzalez','5to')
alumno1.caminar()