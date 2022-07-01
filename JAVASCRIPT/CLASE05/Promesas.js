



let miPromesa = function(haceTarea){        //haceTarea = true
    return new Promise((resolve, reject) => {
        if(haceTarea == true){
            let juguete = {
                marca: 'patito',
                precio: 500
            }
            resolve(juguete)                                    //parametro que pasa al then
        } else {
            reject("Obtiene un castigo")      //throw                  //parametro que pasa al catch
        }
    })
}

// async function miResultado(){
//     try {
//         let result = await miPromesa(false)
//         console.log(result)    
//     } catch(error){     
//         console.log(error)
//     }
// }

// miResultado()









miPromesa(false).then((result) => {
    console.log(result.marca)
}).catch(function(objeto){
    console.log(objeto)
})
// async function x(){
//     try {
//         let a = await miPromesa(false)
//         console.log(a)    
//     } catch(e){
//         console.log(e)
//     }
// }

// x()


