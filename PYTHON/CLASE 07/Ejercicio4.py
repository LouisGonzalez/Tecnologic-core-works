password = input("Ingrese una contraseña ")

if len(password) > 20:
    print("Contraseña es demasiado grande ")
elif len(password) < 5:
    print("Contraseña es demasiado corta ")
elif password == 'password':
    print("Esta palabra no puede ser ingresada al sistema ")
else:
    print('Contraseña correcta ')

