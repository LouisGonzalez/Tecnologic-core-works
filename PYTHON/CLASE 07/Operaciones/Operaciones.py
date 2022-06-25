class Operaciones2:
    resultado = 0

    def sumar(self, operando1, operando2):
        self.resultado = operando1 + operando2
        print("El resultado de la suma es de: ",self.resultado)

    def restar(self, operando1, operando2):
        self.resultado = operando1 - operando2
        print("El resultado de la resta es de: ",self.resultado)

    def multiplicar(self, operando1, operando2):
        self.resultado = operando1 * operando2
        print("El resultado de la multiplicacion es de: ",self.resultado)

    def dividir(self, operando1, operando2):
        self.resultado = operando1 / operando2
        print("El resultado de la division es de: ",self.resultado)
