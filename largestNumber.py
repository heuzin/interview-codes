# Given an integer n, return the largest number that contains exactly n digits.
# For n = 2, the output should be
# largestNumber(n) = 99.
import math
def largestNumber(n):
    return math.pow(10, n) - 1
