# from collections import OrderedDict
 
# print("Diccionario normal:\n")
# d = {}
# d['a'] = 1
# d['b'] = 2
# d['c'] = 3
# d['d'] = 4
 
# for key, value in d.items():
#     print(key, value)
 
# print("Diccionario tipo OrderedDict:\n")
# od = OrderedDict()
# od['a'] = 1
# od['b'] = 2
# od['c'] = 3
# od['d'] = 4
 
# for key, value in od.items():
#     print(key, value)

from collections import OrderedDict

print("DIccionario normal: ")
dic1 = {}
dic1['a'] = 1
dic1['b'] = 2
dic1['c'] = 3
dic1['d'] = 4

for key, value in dic1.items():
    print(key, value)
print()

print("Diccionario tipo ordereddict: ")
dic2 = OrderedDict()
dic2['a'] = 1
dic2['b'] = 2
dic2['c'] = 3
dic2['d'] = 4

for key, value in dic2.items():
    print(key, value)
print()
