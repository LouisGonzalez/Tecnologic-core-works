let planets = function(a){
    return function(b){
        return "Mis planetas favoritos son: "+a+" y el planeta: "+b
    }
}

const variable1 = planets("Tierra")
console.log(variable1("Venus"))

console.log(planets("Tierra")("Marte"))






//------------------------


