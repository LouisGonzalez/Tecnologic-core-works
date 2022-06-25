const { EventEmitter } = require('events')


const miEvento = new EventEmitter()

let contador = 0

//RECEPTOR
miEvento.on("primerEvento", () => {
    console.log('He atrapado al evento ',contador)
})

//EMISOR

let id = setInterval(() => {
    contador++
    if(contador == 10){
        clearInterval(id)
    }
    miEvento.emit("primerEvento")

}, 1000)






