/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {


    var min = Infinity
    var temp = 0

    nums.sort((a, b) => a - b)

    var len = nums.length
    var l = 0
    var r = 0

    for (let i = 0; i < nums.length; i++) {

        l = i + 1
        r = len - 1

        while (l < r) {

            if (Math.abs(target - (nums[i] + nums[l] + nums[r])) < min) {

                min = Math.abs(target - (nums[i] + nums[l] + nums[r]))

                temp = nums[i] + nums[l] + nums[r]
                l = l + 1

            } else if ((Math.abs(target - (nums[i] + nums[l] + nums[r])) > min)) {

                r = r - 1

            } else {

                l = l + 1

            }
        }

        return temp

    }
}
var res = threeSumClosest([0, 2, 1, -3], 1)

console.log(res);