const express = require('express')
const fileUpload = require('express-fileupload')

const app = express()

app.use(fileUpload())

//req => request    = lo que me manda el usuario
//res => response   = lo que le devuelvo al usuario


app.post('/upload',(req, res) => {
    let EDfile = req.files.file

    EDfile.mv(`./files/${EDfile.name}`, err => {
        if(err){
            return res.status(500).send({ message: "Ha ocurrido un error" })
        }
        return res.status(200).send({ message: "Todo bien" })
    }) 
})