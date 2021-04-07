/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * leetcode 33
 */
var search = function(nums, target) {


    var len = nums.length
    if (!len) return -1
    if (len == 1) {
        return nums[0] == target ? 0 : -1
    }

    var l = 0,
        r = len - 1
    while (l <= r) {

        var mid = (l + r) >> 1

        if (nums[mid] == target) return mid

        if (nums[l] <= nums[mid]) {
            if (nums[l] <= target && target <= nums[mid]) {
                r = mid - 1
            } else {
                l = mid + 1
            }
        } else {

            if (nums[mid] < target && target <= nums[r]) {
                l = mid + 1
            } else {
                r = mid - 1
            }
        }
    }

    return -1



};