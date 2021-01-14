var twoSum = function(nums, target) {
    for (i = 0; i < nums.length -1; i++) {
        for (j = 0; j < nums.length -1; j++) {
            if (num[i] + num[j] === target) {
                return [i,j]
            }
        }
    }
    return false
};

twoSum([3,2,4], 6);