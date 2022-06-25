let arreglo = [1,4,5,2,9,6,4,6] 

// let arreglo2 = [
//     { nombre: 'aaa', edad: 6 },
//     { nombre: 'aaa', edad: 14 },
//     { nombre: 'aaa', edad: 23 },
//     { nombre: 'aaa', edad: 22 },
//     { nombre: 'aaa', edad: 11 },
// ] 


//EVERY
//SI ALMENOS UNA NO CUMPLE CON LA CONDICION LANZA UN FALSE

//SOME
//SI TODAS NO CUMPLEN CON LA CONDICION LANZA UN FALSE




let arreglo2 = [
    { equipo: 'Barcelona', goles: 30 }, 
    { equipo: 'Real Madrid', anotaciones: 54 }, 
    { equipo: 'Valencia', goles: 70 }, 
    { equipo: 'Milan', goles: 31 }, 
    { equipo: 'Chelsea', goles: 17 }, 
]




//console.log(arreglo2)
let condicion = value => value.goles > 50
let arreglo3 = arreglo2.filter(condicion)
console.log(arreglo3)
