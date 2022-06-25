// let startEvent = new Event('start')

// document.addEventListener('start', function(event){
//     console.log('He detectado el evento')
// }, false)

// document.dispatchEvent(startEvent)


document.getElementById('boton1').addEventListener('click', function(event){
    let texto = document.getElementById('texto1').value
    console.log(texto)
    document.getElementById('texto1').value = ""
    document.getElementById('texto2').value = texto

}, false)


