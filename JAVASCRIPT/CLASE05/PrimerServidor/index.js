const express = require('express')
const app = express()

//request           = Todo lo que me envia el usuario
//response          = Todo lo que le enviare al usuario de vuelta

app.get('/', (req, res) => {
    res.send("Hola mundo")
    console.log(__dirname)
})


app.get('/usuarios', (req, res) => {
    res.send("Lista de usuarios")
})

app.use('/imagenes1',express.static(__dirname+'/images'))








app.listen(8081, () => {
    console.log("Servidor iniciado en el puerto 8081")    
})



