
function despertar(){
    console.log("Me estoy despertando")
}

function desayunar(){
    console.log("Estoy desayunando")
}

function trabajoManana(){
    console.log("Estoy trabajando de 8 a 12")
}

function manana(){
    despertar()
    desayunar()
    trabajoManana()
}


function almuerzo(){
    console.log("Estoy almorzando")
}

function mediodia(){
    almuerzo()
}

function trabajoTarde(){
    console.log("Estoy trabajando de 1 a 5 pm")
}

function refaccion(){
    console.log("Estoy refaccionando un sandwich")
}

function tarde(){
    trabajoTarde()
    refaccion()
}

function cena(){
    console.log("Estoy cenando")
}

function verPelicula(){
    console.log("Estoy viendo una pelicula")
}


function noche(){
    cena()
    verPelicula()
}

function miDia(){
    manana()
    mediodia()
    tarde()
    noche()
}


miDia()







