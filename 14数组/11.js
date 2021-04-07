/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {

    if (nums.length == 0) return [-1, -1]
    if (nums.length == 1) {
        return nums[0] == target ? [0, 0] : [-1, -1]
    }
    var l = 0
    var r = nums.length - 1
    var temp = []
    while (l <= r) {

        var mid = (l + r) >> 1

        if (target == nums[mid]) {

            temp.push(mid)

            if (mid + 1 <= nums.length - 1 || mid - 1 >= 0) {

                if (nums[mid - 1] == target) {

                    temp.unshift(mid - 1)
                }
                if (nums[mid + 1] == target) {
                    temp.pop()
                    temp.push(mid + 1)
                } else {
                    temp.push(mid)
                }

            }
            break

        } else if (target > nums[mid]) {

            l = mid + 1

        } else if (target < nums[mid]) {

            r = mid - 1

        }

    }

    return temp.length == 0 ? [-1, -1] : temp.sort((a, b) => a - b)

};

var res = searchRange([5, 7, 7, 8, 8, 10], 8)