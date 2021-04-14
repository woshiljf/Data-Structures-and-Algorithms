/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 * leetcode 209
 */
var minSubArrayLen = function(target, nums) {
    var min = Number.MAX_VALUE
    var count = 0
    var sum = 0
    var f = false
    for (let i = 0; i < nums.length; i++) {

        sum += nums[i]
        count++
        for (let j = i + 1; j < nums.length; j++) {
            if (sum >= target) {
                break
            }
            sum += nums[j]
            count++
        }
        if (sum >= target) {
            f = true
            if (count < min) {
                min = count
            }
        }
        sum = 0
        count = 0
    }

    if (f) return min
    return 0
};