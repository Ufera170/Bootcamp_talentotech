#============= Imports ===============#
import random

#============= Bubble sort ===============#
def bubble_sort(arr):
    #variables
    r = len(arr) - 1
    
    #Sort
    for i in range(0, r):
         swapped = False

         for j in range(0, r - i):
             if (arr[j] > arr[j + 1]):
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
                swapped= True
         
         if (not swapped): break


    #Return
    return arr

#=============== insertion sort ===============#
def insertion_sort(arr):
    for i in range(1, len(arr)):
        #sort
        key = arr[i]
        j = i - 1

        while j >= 0 and key < arr[j]:
            arr[j + 1] = arr[j]
            j -= 1

        arr[j + 1] = key

    #return
    return arr

#============== main ===============#
def main():
    #variables
    arr = [0]*10

    #rellenar arreglo
    for i in range(0, 10):
        arr[i] = random.randint(1,99)

    #imprimir y ordenar
    print(arr)

    arr = insertion_sort(arr)

    print(arr)

#=============== Llamar main ===============#
main()
