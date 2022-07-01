const express = require('express')
const app = express()
const http = require('http').Server(app)
const io = require('socket.io')(http)
const port = 8080

let misUsuarios = []

//CONFIGURANDO RECEPTOR
io.on('connection', (socket) => {
    console.log('Un usuario conectado')

    socket.on('envioUsuarios', (usuario) => {
        misUsuarios.push(usuario)
        console.log(usuario)
        console.log("Usuario almacenado con exito")
    })


})





app.get('/', (req, res) => {
    res.sendFile(__dirname+'/index.html')
})



http.listen(port, () => {
    console.log("Servidor iniciado en el puerto ",port)
})