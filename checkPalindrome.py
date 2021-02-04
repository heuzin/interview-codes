# Given the string, check if it is a palindrome.
def checkPalindrome(inputString):
    newString = []
    for x in reversed(inputString):
        newString.append(x)
    if ''.join(newString) == inputString:
         return True
    return False