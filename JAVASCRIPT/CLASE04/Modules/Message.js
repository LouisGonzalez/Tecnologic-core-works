

let texto = 'Hola mundo que tal buenas tardes'

let texto2 = 'Mensaje #2'

let funcion1 = function(mensaje){
    console.log(mensaje)
}

let funcion2 = () => {
    for(let i = 0; i <=40; i+=2){
        console.log("Numero: ",i)
    }
}

let funcion3 = (palabra) => {
    if(palabra == 'ls0345!#'){
        console.log("Las palabras coinciden")
    } else {
        console.log("error")
    }
}

module.exports =  {  
    texto,
    texto2,
    funcion1,
    funcion2,
    funcion3
}