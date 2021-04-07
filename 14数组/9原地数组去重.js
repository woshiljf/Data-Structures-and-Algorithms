/**
 * @param {number[]} nums
 * @return {number}
 * leetcode 26
 */
var removeDuplicates = function(nums) {


    if (nums.length == 0) return 0

    var i = 0

    for (let j = 1; j < nums.length; j++) {

        if (nums[j] !== nums[i]) {
            i++
            nums[i] = nums[j]
        }


    }
    return i + 1



};