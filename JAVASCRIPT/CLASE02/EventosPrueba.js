// let startEvent = new Event('start')

document.getElementById('boton1').addEventListener('click', function(event){
    console.log('hola mundo')
    console.log(document.getElementById('texto1').value)
    //document.getElementById('texto1').value = ""
    let a = Number(document.getElementById('texto1').value)
    let b = a + 3
    console.log(b)
}, false)


//document.getElementById('boton1').dispatchEvent(startEvent)
//boton1.dispatchEvent(startEvent)

//document.dispatchEvent(startEvent)


