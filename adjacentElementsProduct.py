#  Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.
def adjacentElementsProduct(inputArray):
    x = 0
    y = 0
    p = float('-inf')
    for i in range(len(inputArray) - 1):
        x = inputArray[i]
        y = inputArray[i + 1]
        if x * y > p:
            p = x * y
    
    return p