
describe("operaciones aritmeticas", function(){

    
    
    it("pruebaPromesa", function(){
        miPromesa(true).then((result) => {
            expect(result.precio).toEqual(500)
        })
    })


    it("resta", function(){
        var resta = 4-2
        expect(resta).toEqual(2)
    })

    it("multiplicacion", function(){
        var mult = 5*6
        expect(mult).toEqual(30)
    })

    it("division", function(){
        var division = 9/3
        expect(division).toEqual(3)

    })


})



function nombreFuncion(){

}

var nombreFuncion = () => {

}

var nombreFuncion = function(){

}

if()
else if()
else

for(let i = 0; i < 10; i++){

}

var a = 1

while(a != 1){

}


==
+=
-=
*=
/=

++
--

AND OR 
&&   ||


class Person {

    constructor(nombre, apellido, edad){
        this.nombre = nombre
        this.apellido = apellido
        this.edad = edad
    }

    saludar(){
        console.log('estoy saludando')
    }

}


let Person1 = function(nombre, apellido, edad) {

    function saludar(){
        console.log('estoy saludando')
    }


}



//CLOSURE


let padre = (function(){

    function hijo(){

    }

    function madre(){

    }

    function hija(){

    }

    return {
        hijo,
        madre,
        hija
    }

})()


let a = padre()
a.hija()


var fs = require('socket.io')