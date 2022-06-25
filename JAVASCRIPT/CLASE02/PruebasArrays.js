//-------------------PRUEBAS SORT

// var frutas = [
//     { name: "Manzana", count: 11 },
//     { name: "Pera", count: 13 },
//     { name: "Fresa", count: 12 },
//     { name: "Banano", count: 15 },
// ]

// console.log(frutas[0])
// console.log(frutas[0].name)
// frutas.push({name: "Pina", count: 20})
// console.log(frutas)


// let ordenar = (a, b) => a.count - b.count
// let sorted = frutas.sort(ordenar)
// console.log(sorted)

//----------------------------PRUEBAS FOREACH

// let frutas = ['banana','pera','manzana','naranja','uvas']

// let print = function(item, index, object){
//     console.log(item," ",index," ",object)
// }

// frutas.forEach(print)

//-----------------------------PRUEBAS EVERY

//SI ALMENOS UNA NO CUMPLE CON LA CONDICION LANZA UN FALSE
// let numeros = [0,5,3,2,6,8,10]
// let condicion = value => value < 10
// let every = numeros.every(condicion)
// console.log(every)

//-----------------------------PRUEBAS SOME

//SI TODAS NO CUMPLEN CON LA CONDICION LANZA UN FALSE
// let numeros = [10,13,14,15,16,17,11]
// let condicion = value => value < 10
// let some = numeros.some(condicion)
// console.log(some)

//-----------------------------PRUEBAS FILTER

// let numbers = [0,4,5,11,22,6,2]  
// let condicion = value => value < 10
// let filtro = numbers.filter(condicion)
// console.log(filtro)

//----------------------------PRUEBAS MAP

// let numbers = [0,4,5,1,2,3]
// let modificado = numbers.map(value => value = value + 1)
// console.log(modificado)
// console.log(numbers)

//-----------------------------PRUEBAS FLAT

// let misArreglos = [1,2,3,[5,6,4,[1,11,23,22,[88,99,12,77]]]]
// console.log(misArreglos.flat());
// console.log(misArreglos.flat().flat());
// console.log(misArreglos.flat().flat().flat())
// console.log(misArreglos.flat(Infinity))

//------------------------------PRUEBAS FLATMAP

// let arreglo = [1,2,3,4,5]
// let arreglo2 = arreglo.map(x => [x, x*2])
// console.log("PRIMER FORMA ",arreglo2)

// arreglo2 = arreglo.flatMap(v => [v, v*2])
// console.log("SEGUNDA FORMA ",arreglo2)


//------------------------------PRUEBAS MATCH

// let texto = "Lewandowski vuelve a hablar para dejar claro que la próxima temporada no continuará vistiendo la camiseta del Bayern. En una entrevista para el medio polaco Onet Sport, vuelve a repetir que quiere abandonar el club alemán: Me voy porque quiero nuevos retos en mi vida. En el Bayern no me quisieron escuchar hasta el final. Algo dentro de mí se apagó. Después de todo, no puedo imaginar lo que sucedió en los últimos meses, afirmó el delantero polaco que tiene muy claras sus ideas. El todavía jugador del Bayern dejó claro, sin nombrar nunca al Barcelona, donde quiere jugar la próxima temporada: La lista de clubes interesados en mi no es muy larga... se habla mucho de un club en concreto; no estoy considerando otras ofertas, dejando muy claro cual es la preferencia del jugador, pero sin que salga el nombre del club azulgrana por su boca. El Barcelona, a pesar de restarle al jugador solo un año de contrato, tendrá que rascarse el bolsillo para poder ficharlo."
// let ret = texto.match(/el/g)

// console.log(ret.length)