from Operaciones import Operaciones2

class Principal2:

    operando1 = 0
    operando2 = 0
    
    def menu(self):
        misOperaciones = Operaciones2()
        print("Operaciones:\n 1.Suma\n 2.Resta\n 3.Multiplicacion\n 4.Division")
        mn = int(input("Ingrese la opcion que desea elegir: "))
        self.operando1 = int(input("Ingrese primer numero: "))
        self.operando2 = int(input("Ingrese segundo numero: "))
        if (mn == 1):
            misOperaciones.sumar(self.operando1, self.operando2)
        elif (mn == 2):
            misOperaciones.restar(self.operando1, self.operando2)
        elif (mn == 3):
            misOperaciones.multiplicar(self.operando1, self.operando2)
        elif (mn == 4):
            misOperaciones.dividir(self.operando1, self.operando2)
        else:
            print("Usted ha ingresado una opcion incorrecta")
