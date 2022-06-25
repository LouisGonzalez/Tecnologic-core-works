# from collections import namedtuple

# Estudiante = namedtuple('Estudiante', ['nombre','edad','pais'])

# Nodo = Estudiante('Manuel','12','Costa Rica')

# print(Nodo[1])
# print(Nodo.pais)

from collections import namedtuple

Estudiante = namedtuple('Estudiante',['nombre','edad','pais'])

Estudiante1 = Estudiante('Juan','20','Costa Rica')

print("Antes del cambio:")
print(Estudiante1[1])
#print(Estudiante1.nombre)



def cambiarColor(std):
    print("Haciendo el cambio")
    Estudiante1 = (std[0],'22',std[2])
    print(Estudiante1[1])


cambiarColor(Estudiante1)
print(Estudiante1[1])


