/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 * leetcode 523
 * 
 * 如果 sum[0,i] = n *k+余数1
 *      sum[0,j] = n *k + 余数2
 * 如果余数1==余数2
 * sum[i,j] %k == 0
 */
var checkSubarraySum = function(nums, k) {

    var map = new Map()

    map.set(0, -1)

    var sum = 0
    for (let i = 0; i < nums.length; i++) {

        sum += nums[i]
        if (k != 0) {
            sum = sum % k
        }
        if (map.has(sum)) {
            if (i - map.get(sum) > 1) return true
        } else {

            map.set(sum, i)
        }

    }

    return false



};