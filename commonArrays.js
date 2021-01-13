// Given 2 arrays, create a function that let's a user know (true/false) whether these two arrays contain any common items
//For Example:
//const array1 = ['a', 'b', 'c', 'x'];//const array2 = ['z', 'y', 'i'];
//should return false.
//-----------
//const array1 = ['a', 'b', 'c', 'x'];//const array2 = ['z', 'y', 'x'];
//should return true.

function commonItemsArray(arr1, arr2) {
    for (i = 0; i < arr1.length; i++) {
        for (j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j]) {
                return true
            } 
        }
    }
    return false
} // O(n^2)

commonItemsArray(['a', 'b', 'c', 'x'], ['z', 'y', 'i'])
commonItemsArray(['a', 'b', 'c', 'x'], ['z', 'y', 'x'])

function commonItemsArray2(arr1, arr2) {
    // loop through first array and create object where properties === items in the array
    // can we assume always 2 params?

    const cache = {};
    for (i = 0; i < arr1.length; i++) {
        if(!cache[arr1[i]]) {
            cache[arr1[i]] = true
        }
    }
    // loop through second array and check if item in second array exists on created object. 
    for (j = 0; j < arr2.length; j++) {
        if (cache[arr2[j]]){
            return true
        } 
    }

    return false
}
//O(a + b) Time Complexity
//O(a) Space Complexity

commonItemsArray2(['a', 'b', 'c', 'x'], ['z', 'y', 'i'])
commonItemsArray2(['a', 'b', 'c', 'x'], ['z', 'y', 'x'])

function containsCommonItem3(arr1, arr2) {
    return arr1.some(item => arr2.includes(item))
}