//--------------------FORMA ASINCRONA
const fs = require('fs')

fs.readFile('archdddivo2.txt','utf-8',(err, data) => {
    if(err){
        console.log('Error: ',err)
    } else {
        console.log('Este es el texto a mostrar\n\n')
        console.log(data)
    }
})

//-------------------FORMA SINCRONA

// let texto = fs.readFileSync('archivo2.txt','utf-8')
// console.log(texto)





