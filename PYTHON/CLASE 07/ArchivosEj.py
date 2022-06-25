archivo = open('archivo.txt','w')

archivo.write('Este es un mensaje de pruebaasfd\n')
archivo.write('Esta es otra linea')

#print(archivo.read())
archivo.close()

archivo2 = open('archivo.txt', 'r')
print(archivo2.read())
