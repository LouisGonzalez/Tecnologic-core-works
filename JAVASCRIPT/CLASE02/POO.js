
// function Persona(nombre, apellido, edad, nacimiento){
//     let nombre = nombre
//     let apellido = apellido
//     let edad = edad
//     let nacimiento = nacimiento


//     function caminar(){

//     }

//     function correr(){

//     }

//     function saltar(){

//     }

// }

// var persona1 = new Persona('Gabriela', 'Mendez', 20, '09-06-2000')
// var persona2 = new Persona('Julian','Garcia', 31, '08-05-1990')


function Rectangulo(altura, base){

    this.altura = altura
    this.base = base
    this.arreglo = [2, 5, 6 , 7, 7]

}

Rectangulo.prototype.calcArea = function calcArea(){
    return this.altura * this.base
}

Rectangulo.prototype.calcPerimetro = function calcPerimetro(){
    return (2 * this.altura) + (2 * this.base)
}

var rectangulo1 = new Rectangulo(7, 9)
var rectangulo2 = new Rectangulo(10, 5)

console.log(rectangulo1.calcArea())     
// console.log(rectangulo1.calcPerimetro())            //32


// rectangulo1.arreglo.push(91)
// console.log(rectangulo1.arreglo)
// console.log(rectangulo2.arreglo)