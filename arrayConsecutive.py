# For statues = [6, 2, 3, 8], the output should be
# makeArrayConsecutive2(statues) = 3.

# Ratiorg needs statues of sizes 4, 5 and 7.

def makeArrayConsecutive2(statues):
    statues.sort()
    a = 0
    b = 0
    count = 0
    newArray = []
    for x in range(len(statues) - 1):
        a = statues[x]
        b = statues[x + 1]
        if a + 1 < b:
            count = count + (b - (a + 1))
    return count