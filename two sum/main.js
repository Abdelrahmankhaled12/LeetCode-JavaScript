function twoSum(nums, target) {
    for(let i = 0 ; i < nums.length - 1 ; i++) {
        // nested loop => check number index [i] + index[i+1] equal target or not
        for(let j = i+1 ; j<nums.length;j++) {
            if(nums[i] + nums[j] == target) {
                return [i,j];
            }
        }
    }
    // in case There is no in array number + number = target 
    return [];
};

console.log(twoSum([2,7,11,15],9));
console.log(twoSum([3,2,4],6));