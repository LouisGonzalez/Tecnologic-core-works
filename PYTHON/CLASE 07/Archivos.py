archivo = open('archivo.txt','w+')

archivo.write('Este es un mensaje de pruebaasfd\n')
archivo.write('Esta es otra linea')

archivo.close()

archivo2 = open('archivo.txt', 'r')
print(archivo2.read())
