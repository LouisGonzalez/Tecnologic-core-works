


def verEdad(edad):
    if(edad < 18):
        print("La persona es menor de edad")
        return False
    else:
        print("La persona es mayor de edad")
        return True



x = verEdad(23)

if(x == True):
    print("Puede pasar")
elif(x == False):
    print("No puedes pasar eres menor de edad")

