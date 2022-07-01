
// function ingresarPassword(password){
//     try {
//         if(password.length < 5){
//             throw 'SHORT'
//         } else if(password.length > 10){
//             throw 'LONG'
//         } else {
//             console.log("Contraseña aceptada")
//         }
//     } catch(error){       
//         if(error == 'SHORT'){
//             console.log('Contraseña muy corta')
//         } else if(error == 'LONG'){
//             console.log('Contraseña muy larga')
//         }
        
//     } 
// }

// ingresarPassword('123132')
// ingresarPassword('222')
// ingresarPassword('ifasifda989a324r33')

function ingresarPassword(password){
    try {
        if(password.length < 5){
            throw 'Contraseña muy corta'
        } else if(password.length > 10){
            throw 'Contraseña muy larga'
        } else {
            console.log('Todo bien :D')
        }
    } catch(error){         //error = Contraseña muy larga
        console.log(error)
    }
}

ingresarPassword('3ds')
ingresarPassword('affjjas')
ingresarPassword('sdfsdfsdfsfsfsfwe')




