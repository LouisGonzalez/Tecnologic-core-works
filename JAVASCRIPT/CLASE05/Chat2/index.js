const express = require('express')
const app = express()
const http = require('http').Server(app)
const port = 8081
const io = require('socket.io')(http)

app.get('/', (req, res) => {
    res.sendFile(__dirname+'/index.html')
})

//RECEPTOR
io.on('connection', function(socket){
    console.log('Usuario conectado')
    socket.on('disconnect', function(){
        console.log('Usuario desconectado')
    })
})

app.listen(port, () => {
    console.log('Servidor inicializado en el puerto ',port)
})