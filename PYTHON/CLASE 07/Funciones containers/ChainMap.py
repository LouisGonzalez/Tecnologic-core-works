# from collections import ChainMap

# d1 = {'a': 1, 'b': 2, 'c': 3}
# d2 = {'e': 1, 'f': 2, 'g': 3}
# d3 = {'h': 1, 'i': 2, 'j': 3}
    
# myChain = ChainMap(d1, d2, d3)

# print(myChain)

from collections import ChainMap

a1 = {'a': 1, 'b': 2 }
a2 = {'c': 3, 'd': 4 }
a3 = {'e': 3, 'f': 4 }
a4 = {'g': 3, 'h': 4 }
a5 = {'i': 3, 'j': 4 }

myChain = ChainMap(a1, a2, a3)
print(myChain)