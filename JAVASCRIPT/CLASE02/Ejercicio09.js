class Persona {

    constructor(nombres, apellidos, edad, nacionalidad, altura){
        this.nombres = nombres
        this.apellidos = apellidos
        this.edad = edad
        this.nacionalidad = nacionalidad
        this.altura = altura
        this.verEdad()
        this.verAltura()
    }

    verEdad(){
        if(this.edad >= 18){
            this.mayoriaEdad = 'La persona es mayor de edad'
        } else {
            this.mayoriaEdad = 'La persona es menor de edad'
        }
    }

    verAltura(){
        if(this.altura > 1.70){                             //this.altura > 1.70
            this.promAltura = 'Mayor al promedio'
        } else if(this.altura < 1.70){                         //this.altura < 1.70
            this.promAltura = 'Menor al promedio'
        } else {
            this.promAltura = 'Estatura promedio'
        }
    }

}

let arregloPersonas = []

function verPersonas(){
    for (const key in arregloPersonas) {
        console.log(arregloPersonas[key])
    }
}


do {
    alert("1. Ingresar una persona\n2. Ver personas\n3. Finalizar programa")
    menu = Number(prompt("Ingrese una opcion"))
    switch(menu){
        case 1:
            nombreP = prompt("Ingrese el nombre de la persona")
            apellidoP = prompt("Ingrese los apellidos de la persona")
            edadP = Number(prompt("Ingrese edad de la persona"))
            nacionalidadP = prompt("Ingrese nacionalidad de la persona")
            alturaP = Number(prompt("Ingrese la altura de la persona"))
            personaP = new Persona(nombreP, apellidoP, edadP, nacionalidadP, alturaP)
            arregloPersonas.push(personaP)
            break
        case 2:
            verPersonas()
            break
        case 3:
            alert("Nos vemos!")
            break
        default:
            alert("Opcion incorrecta, porfavor intenta otra vez")
            break
    }

} while(menu != 3)
