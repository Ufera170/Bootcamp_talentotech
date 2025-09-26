def sumar():
    a = float(input("Ingrese el primer número: "))
    b = float(input("Ingrese el segundo número: "))
    return a + b

def imprimir_rango():
    for i in range(0, 10):
        print(i)

class miclase:
    #Variables
    saludo = "hola"
    despedida = "adios"

    def __init__(self, nombre):
        self.nombre = nombre

    def saludar(self):
        print(f"Hola, {self.nombre}!")

imprimir_rango()

a = [0]*10

#print(len(a))

#print(f"La suma es: {sumar()}")