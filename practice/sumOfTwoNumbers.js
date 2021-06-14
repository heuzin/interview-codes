// const twoSum = function(nums, target) {
//     for (n = 0; n < nums.length; n++) {
//         for (j = n + 1; j < nums.length; j++) {
//             if(nums[n] + nums[j] === target) {
//                 console.log([nums[n], nums[j]]) // Getting the number
//                 console.log([n, j]) // Getting the index
//             }
//         }
//     }
// };

const twoSum = function(nums, target) {
    let cache = {}
    for (let n = 0; n < nums.length; n++) {
        cache[nums[n]] = n
    }

    const arrayOfIndex = []
    for (let j = 0; j < nums.length; j++) {
        const dif = target - nums[j]
        if(cache.hasOwnProperty(dif) && j !== cache[dif]) {
            arrayOfIndex.push(j)
            arrayOfIndex.push(cache[dif])
            break
        }
    }
    console.log(arrayOfIndex)
}

twoSum([2,7,11,15], 9)
twoSum([3,2,4], 6)
twoSum([3, 3], 6)