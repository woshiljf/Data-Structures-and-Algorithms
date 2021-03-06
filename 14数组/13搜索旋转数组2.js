/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function(nums, target) {

    if (nums.length == 0) return false

    if (nums.length == 1) {
        return nums[0] == target ? true : false
    }

    var l = 0,
        r = nums.length - 1

    while (l <= r) {

        var mid = (l + r) >> 1

        if (nums[mid] == target) return true
            // 增加一个条件判断： 当左端点的值等于中间值时，l++,即可
        if (nums[l] == nums[mid]) {
            l++;
            continue;
        }

        if (nums[l] < nums[mid]) {

            if (nums[l] <= target && target <= nums[mid]) {
                r = mid - 1
            } else {
                l = mid + 1
            }

        } else {
            if (nums[mid] <= target && target <= nums[r]) {
                l = mid + 1
            } else {
                r = mid - 1
            }
        }


    }

    return false

};