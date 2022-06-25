
class Person:

    nombre = ''
    escuela = ''

    def __init__(self, nombre, escuela):
        self.nombre = nombre
        self.escuela = escuela

    def ver_nombre(self):
        print("Este es mi nombre: ",self.nombre)

    def ver_escuela(self):
        print("Esta es mi escuela: ",self.escuela)

class Clase2:
    pass


persona1 = Person("Pablo", "Colegio 3")
persona1.ver_nombre()
persona1.ver_escuela()


