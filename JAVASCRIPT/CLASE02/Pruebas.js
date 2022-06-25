//----------------------------------PRUEBAS CLOSURE

// function sendEmail(message){
//     let msg = `El mensaje es el siguiente: "${message}"`;
//     let send = function() { console.log(msg) }
//     send()
// }

// let ejecutar = sendEmail("Mensaje de prueba");

// let mostrar, setear, incrementar, decrementar

// function manager(){
//     console.log("ESTE ES EL MANAGER")
//     let number = 20
//     mostrar = function(){ console.log("Imprimiendo numero ",number) }
//     setear = function(value){ number = value }
//     incrementar = function(){ number++ }
//     decrementar = function(){ number-- }
// }

// manager()
// mostrar()
// setear(19)
// mostrar()
// incrementar()
// mostrar()
// decrementar()
// mostrar()


//----------------------------PRUEBAS ARITY

// function prueba(a, b, c){  }

// let arity = prueba.length

// console.log(arity)

//-----------------------------PRUEBAS CURRY

// let planets = function(a){
//     return function(b){
//         console.log("Mis planetas favoritos son ",a," y el planeta ",b);
//     }
// }

// let misPlanetas = planets("Marte")
// misPlanetas("Tierra")