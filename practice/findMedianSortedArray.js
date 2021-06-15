// const bruteForceFindMedianSortedArrays = function(nums1, nums2) {
//     let nums3 = []

//     if(nums1 === []) {
//         nums3 === nums2
//     } else if (nums2 === []) {
//         nums3 = nums1
//     } else {
//         nums3 = nums1.concat(nums2)
//     }
    
//     let sortedArray = nums3.sort()
    
//     if(sortedArray.length > 1) {
//         let midNumber = Math.floor(sortedArray.length / 2)
    
//         if (midNumber % 2 === 0) {
//             console.log((sortedArray[midNumber] + sortedArray[midNumber -1]) / 2)
//         } else {
//             console.log(sortedArray[midNumber])
//         }
//     } else {
//         console.log(sortedArray[0])
//     }
// };

var findMedianSortedArrays = function(nums1, nums2) {
    let nums1i = 0
    let nums2i = 0
    const len1 = nums1.length
    const len2 = nums2.length
    let sortedArray = []

    while(nums1i < len1 && nums2i < len2) {
        if(nums1[nums1i] <= nums2[nums2i]) {
            sortedArray.push(nums1[nums1i])
            nums1i = nums1i + 1
        } else {
            sortedArray.push(nums2[nums2i])
            nums2i= nums2i + 1
        }
    }

    while(nums1i < len1) {
        sortedArray.push(nums1[nums1i])
        nums1i = nums1i + 1
    }
    while(nums2i < len2) {
        sortedArray.push(nums2[nums2i])
        nums2i= nums2i + 1
    }

    if(sortedArray.length > 1) {
    let midNumber = Math.floor(sortedArray.length / 2)

        if (sortedArray.length % 2 === 0) {
            console.log((sortedArray[midNumber] + sortedArray[midNumber -1]) / 2)
        } else if (!sortedArray.length % 2 === 0) {
            console.log(sortedArray[midNumber])
        }
    } else {
        console.log(sortedArray[0])
    }
};

findMedianSortedArrays([1, 3], [2])
findMedianSortedArrays([1,2], [3,4])
findMedianSortedArrays([0,0], [0,0])
findMedianSortedArrays([], [1])
findMedianSortedArrays([2], [])