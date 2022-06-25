

// const saludar = function(nombre){
//     return "Hola "+nombre

// }

// console.log(saludar)
// console.log(saludar())
// console.log(saludar("Pablo"))

let a = "Hola "

function global(){
    let b = "buenas "

    function local(){
        let c = "tardes."
        return a + b + c
    }

    return local
}

//console.log(global())
//console.log(global()())
const closure = global()
console.log(closure)
console.log(closure())


const miContador = (function(){
    let contador = 0

    function incrementar(){
        return contador++
    }

    function decrementar(){
        return contador--
    }

    function mostrarValor(){
        console.log("El valor actual es: ",contador)
        return contador
    }

    return {
        incrementar,
        decrementar,
        mostrarValor
    }
})()

miContador.mostrarValor()
miContador.incrementar()
miContador.mostrarValor()
miContador.incrementar()
miContador.mostrarValor()
miContador.decrementar()
miContador.mostrarValor()







