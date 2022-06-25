const express = require('express')
const app = express()
const http = require('http').Server(app)
const io = require('socket.io')(http)

let contadorUsuarios = 0

app.get('/', function(req, res){
    res.sendFile(__dirname+'/index.html')
})

//RECEPTOR
io.on('connection', function(socket){
    contadorUsuarios++
    console.log('Un usuario conectado')
    console.log('Hay un total de usuarios ',contadorUsuarios,' conectados actualmente')
    socket.on('disconnect', function(){
        contadorUsuarios--
        console.log('Hay un total de usuarios ',contadorUsuarios,' conectados actualmente')
        console.log('usuario desconectado')
    })

    socket.on('mensaje', function(mensaje){
        console.log(mensaje)
    })

})


http.listen(8080, function(){
    console.log('Servidor iniciado en el puerto 8080')
})