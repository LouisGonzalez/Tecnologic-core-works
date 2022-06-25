# from collections import Counter

# #-----------------------------------------

# x = Counter("cursoempleate")

# for i in x.elements():
#     print(i, end = " ")
# print()

# #-----------------------------------------

# y = Counter([1, 3, 4, 2, 7, 8, 1, 6, 9, 10, 12, 4, 2, 5])

# for i in y.elements():
#     print(i, end = " ")
# print()
# #-----------------------------------------

# z = Counter({'alumnos': 10, 'profesores': 5, 'cursos': 15})

# for i in z.elements():
#     print(i, end = " ")

from collections import Counter

a = Counter("buenastardes")

for x in a.elements():
    print(x, end = " ")
print()

b = Counter([1, 3, 6, 2, 1, 4, 9, 10, 3, 3])

for x in b.elements():
    print(x, end = " ")
print()

c = Counter({'alumnos': 20, 'profesores': 5, 'clases': 5})

for x in c.elements():
    print(x, end = " ")
print()
