class Cuenta {

    constructor(titular, edad, cantidad){
        this.titular = titular
        this.edad = edad
        this.cantidad = cantidad
    }

    mostrar(){
        console.log('Titular: ',this.titular,' Edad: ',this.edad,' Cantidad: ',this.cantidad)
    }

    ingresar(cantidad){
        if(cantidad < 0){
            alert('Has introducido una cantidad incorrecta')
        } else {
            this.cantidad += cantidad
        }
    }

    retirar(cantidad){
        if(cantidad < 0){
            alert('Has introducido una cantidad incorrecta')
        } else {
            this.cantidad -= cantidad
        }
    }

    cambiarEdad(){
        let edadNueva = Number(prompt("Ingrese nueva edad: "))
        this.edad = edadNueva
    }

}


class CuentaJoven extends Cuenta {

    constructor(titular, edad, cantidad, bonificacion){
        super(titular, edad, cantidad)
        this.bonificacion = bonificacion
    }

    mostrarCuentaJoven(){
        console.log('CUENTA JOVEN ',this.bonificacion)
    }

    esTitularValido(){
        if(this.edad >=18 && this.edad < 25){
            return true
        } else {
            return false
        }       
    }

}

function menu1(){
    let menu = 0
    do {
        alert('1.Mostrar datos de la cuenta\n2.Ingresar monto\n3.Retirar monto\n4.Cambiar edad del titular\n5.Mostrar datos cuenta joven\n6.Ver validez de la cuenta joven\n7.Salir')
        menu = Number(prompt("Ingrese una opcion"))
        switch(menu){
            case 1:
                miCuenta.mostrar()
                break
            case 2:
                let cantidad = Number(prompt("Ingrese cantidad a ingresar: "))
                miCuenta.ingresar(cantidad)
                break
            case 3:
                let cantidadRetiro = Number(prompt("Ingrese cantidad a retirar: "))
                miCuenta.retirar(cantidadRetiro)
                break
            case 4:
                miCuenta.cambiarEdad()
                break
            case 5:
                miCuenta.mostrarCuentaJoven()
                break
            case 6:
                let edadValida = miCuenta.esTitularValido()
                if(edadValida == true){
                    alert('El titular esta dentro del rango aceptable de edades para tener una cuenta joven')
                } else {
                    alert('El titular no esta dentro del rango de edades para tener una cuenta joven')
                }
                break
            case 7:
                alert('Hasta pronto')
                break
            default:
                alert('Opcion incorrecta, intenta otra vez')
                break
        }

    } while(menu != 7)
}

let nombre = prompt('Ingrese nombre: ')
let edadCuenta = Number(prompt("Ingrese edad: "))

let miCuenta = new CuentaJoven(nombre,edadCuenta,1000,20)

menu1()
