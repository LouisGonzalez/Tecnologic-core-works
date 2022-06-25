#x = open('archivo2.txt','w')
#print('nombre del archivo ', x.name)
#print('nombre del archivo ', x.closed)
#print('nombre del archivo ', x.mode)


archivo = open('archivo3.txt', 'r')

#print(archivo.readlines())
i = 0
for line in archivo:
    print(line, " Esta es la linea numero: ",i)
    i=i+1
archivo.close()




