function mergeSortedArrays(arr1, arr2) {
    const newArray = [];
    let array1Item = arr1[0];
    let array2Item = arr2[0];
    let i = 1;
    let j = 1;

    while (array1Item || array2Item) {
        if (array2Item === undefined || array1Item < array2Item) {
            newArray.push(array1Item);
            array1Item = arr1[i];
            i++
        }
        else {
            newArray.push(array2Item);
            array2Item = arr2[j]
            j++
        }
    }
    return newArray
}

mergeSortedArrays([0,3,4,31], [3,4,6,30]);