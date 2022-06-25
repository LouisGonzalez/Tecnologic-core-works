const { EventEmitter } = require('events')

const timerEventEmitter = new EventEmitter();

timerEventEmitter.emit('update')

let currentTime = 0

setInterval(() => {
    currentTime++
    timerEventEmitter.emit('update', currentTime)
}, 1000)

timerEventEmitter.on('update', (time) => {
    console.log('Mensaje recibido desde el publisher')
    console.log(`${time} segundos han pasado desde que el programa se inicio`)
})