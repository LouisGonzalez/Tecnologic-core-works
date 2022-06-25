function Animal(name){
    this.name = name
}

const animal1 = new Animal('asdf')

console.log(animal1)

var arreglos = []
arreglos.push(animal1)
console.log(arreglos[0].name)