# from collections import deque

# numeros = deque([1,2,3])

# numeros.append(4)
# print("La lista luego de hacer un append: ",numeros)

# numeros.appendleft(0)
# print("La lista luego de hacer un appendleft: ",numeros)

# numeros.pop()
# print("La lista luego de hacer un pop: ",numeros)

# numeros.popleft()
# print("La lista luego de hacer un popleft: ",numeros)

from collections import deque

numeros = deque([1, 2, 3])

numeros.append(4)
print("La lista luego de hacer mi primer append: ",numeros)

numeros.appendleft(0)
print("La lista luego de hacer un appendleft: ",numeros)

numeros.pop()
print("La lista luego de hacer un pop: ", numeros)

numeros.popleft()
print("La lista luego de hacer un popleft: ", numeros)
