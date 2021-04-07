/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {

    var min = Infinity
    var temp = 0
    for (let i = 0; i < nums.length; i++) {

        for (let j = i + 1; j < nums.length; j++) {


            for (let k = j + 1; k < nums.length; k++) {

                if (Math.abs(target - (nums[i] + nums[j] + nums[k])) < min) {

                    min = Math.abs(target - (nums[i] + nums[j] + nums[k]))
                    temp = nums[i] + nums[j] + nums[k]
                }
            }
        }
    }
    return temp
};