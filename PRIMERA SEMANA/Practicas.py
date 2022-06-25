def ejercicio1():
    palabra = input("Ingrese una palabra\n")
    for x in range(10):
        print(palabra)

def ejercicio2():
    edad = input("Ingresa tu edad\n")
    edad = int(edad)
    for x in range(edad+1):
        print(x)    

def ejercicio3():
    numPositivo = input("Ingresa un numero positivo\n")
    numPositivo = int(numPositivo) 
    if(numPositivo > 0):
        #trabaja
        for x in range(numPositivo+1):
            if(x % 2 != 0):
                print(x)
    else:
        print("El numero no es un entero positivo")

def ejercicio4():
    numPositivo = input("Ingrese un numero positivo\n")
    numPositivo = int(numPositivo)
    if(numPositivo > 0):
        res = ""
        for x in range(numPositivo+1):
            res = res + str(numPositivo-x) +","
        print(res)
    else:
        print("El numero no es un entero positivo")

def ejercicio5():
    for x in range(1,11):
        print("--------TABLA DEL "+str(x)+"--------")
        for y in range(1,11):
            print(str(x)+"*"+str(y)+"="+str(x*y))

def ejercicio6():
    password = "K4Rm4!"
    pass2 = ""
    while(pass2 != password):
        pass2 = input("Ingrese la contraseña\n")
    print("Ha ingresado la contraseña correcta :D")


def ejercicio7():
    palabra = input("Ingrese una palabra\n")
    for x in range(len(palabra)):

        print(palabra[len(palabra)-x-1])

def ejercicio8():
    palabra = ""
    while(palabra != "salir"):
        palabra = input("Ingrese un comando\n")
    print("Finalizando el programa :D")

def ejercicio9():
    num = input("Ingrese un numero\n")
    num = int(num)
    for x in range(num):
        print('*'*(x+1))



ejercicio9()