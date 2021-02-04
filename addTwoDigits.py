# You are given a two-digit integer n. Return the sum of its digits.
import math
def addTwoDigits(n):
    first = math.floor(n / 10)
    second = n % 10
    sum = first + second
    return sum