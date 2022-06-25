
let miPromesa = function(haceTarea){
    return new Promise((resolve, reject) => {
        if(haceTarea == true){
            let juguete = {
                marca: 'patito',
                precio: 500
            }
            resolve(juguete)                                    //parametro que pasa al then
        } else {
            reject("Obtiene un castigo")                        //parametro que pasa al catch
        }
    })
}

miPromesa(false).then((result) => {
    console.log(result.marca)
}).catch(function(objeto){
    console.log(objeto)
})
