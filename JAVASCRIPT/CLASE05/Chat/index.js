const express = require('express')
const app = express()
const http = require('http').Server(app)
const io = require('socket.io')(http)

app.get('/', function(req, res){
    res.sendFile(__dirname+'/index.html')
})

io.on('connection', function(socket){
    console.log('Un usuario conectado')
    socket.on('disconnect', function(){
        console.log('usuario desconectado')
    })

    socket.on('mensaje', function(mensaje){
        console.log('mensaje: '+mensaje)
        io.emit('mensaje',mensaje)
    })
})

app.use(express.static('images'))

http.listen(8080, function(){
    console.log('Servidor iniciado en el puerto 8080')
})