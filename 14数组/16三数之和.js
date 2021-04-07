/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {

    var result = []
    if (nums.length == 0 < 3) return []

    nums.sort((a, b) => a - b)
    var len = nums.length
    var l = 0
    var r = 0
    for (let i = 0; i < nums.length; i++) {

        // if(nums[i]>0) return result

        if (i > 0 && nums[i] == nums[i - 1]) continue

        l = i + 1
        r = len - 1
        while (l < r) {

            if (nums[i] + nums[l] + nums[r] == 0) {
                result.push([nums[i], nums[l], nums[r]])

                while (l < r && nums[l] == nums[l + 1]) {
                    l = l + 1
                }
                while (l < r && nums[r] == nums[r - 1]) {
                    r = r + 1
                }
                l = l + 1
                r = r - 1

            } else if (nums[i] + nums[l] + nums[r] > 0) {
                r = r - 1
            } else {
                l = l + 1
            }







        }







    }

    return result



};